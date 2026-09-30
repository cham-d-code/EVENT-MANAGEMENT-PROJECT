import { NextResponse } from "next/server";
import sanitizeHtml from "sanitize-html";
import { z } from "zod";
import { appendToMailbox } from "@/lib/mail/append-to-mailbox";
import { buildRawMessage } from "@/lib/mail/build-raw-message";
import { consumeRateLimit, getRequestIdentifier } from "@/lib/security/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

const mailboxAddressPattern = /^(?:[^<>\r\n]+<[^\s<>@]+@[^\s<>@]+\.[^\s<>@]+>|[^\s<>@]+@[^\s<>@]+\.[^\s<>@]+)$/;
const safeFolderPattern = /^[A-Za-z0-9][A-Za-z0-9 ._-]{0,63}$/;
const disallowedControlCharacterPattern = /[\u0000-\u0008\u000B-\u001F\u007F]/;
const requestBodyByteLimit = 25_000;
const appendRateLimit = { limit: 2, windowMs: 1_000 } as const;

function normalizeWhitespace(value: string): string {
  return value.normalize("NFKC").trim().replace(/[\t ]+/g, " ");
}

function normalizeMultilineWhitespace(value: string): string {
  return value.normalize("NFKC").replace(/\r\n?/g, "\n").replace(/\t/g, "  ").trim();
}

function hasNoDisallowedControlCharacters(value: string): boolean {
  return !disallowedControlCharacterPattern.test(value);
}

const safeSingleLineSchema = z
  .string()
  .max(998)
  .refine(hasNoDisallowedControlCharacters, "Contains invalid control characters")
  .transform(normalizeWhitespace)
  .pipe(z.string().min(1));

const safeMultilineSchema = z
  .string()
  .max(10_000)
  .refine(hasNoDisallowedControlCharacters, "Contains invalid control characters")
  .transform(normalizeMultilineWhitespace);

const safeFolderSchema = z
  .string()
  .max(64)
  .refine(hasNoDisallowedControlCharacters, "Contains invalid control characters")
  .transform(normalizeWhitespace)
  .pipe(z.string().min(1).refine((value) => safeFolderPattern.test(value), "Enter a valid mailbox folder name"));

const mailboxAddressSchema = z
  .string()
  .max(320)
  .refine(hasNoDisallowedControlCharacters, "Contains invalid control characters")
  .transform(normalizeWhitespace)
  .refine((value) => mailboxAddressPattern.test(value), "Enter a valid email address or Name <email> value");

const appendRequestSchema = z
  .object({
    from: mailboxAddressSchema,
    to: mailboxAddressSchema,
    subject: safeSingleLineSchema,
    text: safeMultilineSchema.optional(),
    html: safeMultilineSchema
      .transform((value) =>
        sanitizeHtml(value, {
          allowedTags: ["a", "b", "br", "em", "i", "li", "ol", "p", "strong", "ul"],
          allowedAttributes: { a: ["href"] },
          allowedSchemes: ["http", "https", "mailto"],
          allowProtocolRelative: false,
        }),
      )
      .optional(),
    folder: safeFolderSchema.default("INBOX"),
    markAsSeen: z.boolean().default(false),
  })
  .strict()
  .refine((value) => Boolean(value.text?.trim() || value.html?.trim()), {
    message: "At least one of text or html must be present",
    path: ["text"],
  });

function validationErrorResponse(details: unknown): NextResponse {
  return NextResponse.json(
    {
      success: false,
      error: "Invalid request body",
      details,
    },
    { status: 400 },
  );
}

function rateLimitResponse(retryAfterSeconds: number): NextResponse {
  return NextResponse.json(
    { success: false, error: "Too many requests. Please try again shortly." },
    { status: 429, headers: { "Retry-After": String(retryAfterSeconds) } },
  );
}

function payloadTooLargeResponse(): NextResponse {
  return NextResponse.json({ success: false, error: "Request body is too large" }, { status: 413 });
}

export async function POST(request: Request): Promise<NextResponse> {
  const rateLimitResult = consumeRateLimit(getRequestIdentifier(request), appendRateLimit);

  if (!rateLimitResult.allowed) {
    return rateLimitResponse(rateLimitResult.retryAfterSeconds);
  }

  const contentLength = Number(request.headers.get("content-length"));

  if (Number.isFinite(contentLength) && contentLength > requestBodyByteLimit) {
    return payloadTooLargeResponse();
  }

  let rawRequestBody: string;

  try {
    rawRequestBody = await request.text();
  } catch {
    return validationErrorResponse([
      {
        path: [],
        message: "Request body could not be read",
      },
    ]);
  }

  if (new TextEncoder().encode(rawRequestBody).byteLength > requestBodyByteLimit) {
    return payloadTooLargeResponse();
  }

  let requestBody: unknown;

  try {
    requestBody = JSON.parse(rawRequestBody);
  } catch {
    return validationErrorResponse([
      {
        path: [],
        message: "Request body must be valid JSON",
      },
    ]);
  }

  const validationResult = appendRequestSchema.safeParse(requestBody);

  if (!validationResult.success) {
    const details = validationResult.error.issues.map((issue) => ({
      path: issue.path,
      message: issue.message,
      code: issue.code,
    }));

    return validationErrorResponse(details);
  }

  const { folder, markAsSeen, ...messageInput } = validationResult.data;

  try {
    const rawMessage = await buildRawMessage(messageInput);
    const appendResult = await appendToMailbox({ rawMessage, folder, markAsSeen });
    const uid = appendResult === false ? null : appendResult.uid ?? null;

    return NextResponse.json({ success: true, folder, uid }, { status: 201 });
  } catch (error: unknown) {
    console.error("Failed to append message to IMAP mailbox", error);
    return NextResponse.json(
      { success: false, error: "Unable to append the message to the mailbox" },
      { status: 502 },
    );
  }
}
