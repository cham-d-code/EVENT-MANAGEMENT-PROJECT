import "server-only";

import { randomUUID } from "node:crypto";
import MailComposer from "nodemailer/lib/mail-composer";

export type RawMessageInput = {
  from: string;
  to: string;
  subject: string;
  text?: string;
  html?: string;
};

function getDomainFromAddress(address: string): string {
  const match = address.match(/[^<>\s@]+@([^<>\s@]+)>?$/);
  const domain = match?.[1]?.toLowerCase();

  if (!domain) {
    throw new Error("Unable to determine the sender domain");
  }

  return domain;
}

export async function buildRawMessage(input: RawMessageInput): Promise<Buffer> {
  const domain = getDomainFromAddress(input.from);
  const composer = new MailComposer({
    from: input.from,
    to: input.to,
    subject: input.subject,
    text: input.text,
    html: input.html,
    date: new Date(),
    messageId: `<${randomUUID()}@${domain}>`,
    disableFileAccess: true,
    disableUrlAccess: true,
  });

  return composer.compile().build();
}
