import "server-only";

export type RateLimitOptions = {
  limit: number;
  windowMs: number;
};

export type RateLimitResult = {
  allowed: boolean;
  retryAfterSeconds: number;
};

const requestTimestamps = new Map<string, number[]>();
const maximumTrackedIdentifiers = 10_000;

function removeExpiredRequests(now: number, windowMs: number): void {
  for (const [identifier, timestamps] of requestTimestamps) {
    const activeTimestamps = timestamps.filter((timestamp) => now - timestamp < windowMs);

    if (activeTimestamps.length === 0) {
      requestTimestamps.delete(identifier);
    } else if (activeTimestamps.length !== timestamps.length) {
      requestTimestamps.set(identifier, activeTimestamps);
    }
  }
}

export function getRequestIdentifier(request: Request): string {
  const forwardedAddress = request.headers.get("x-vercel-forwarded-for") ?? request.headers.get("x-forwarded-for");
  const address = forwardedAddress?.split(",")[0]?.trim();

  return address || request.headers.get("x-real-ip")?.trim() || "unknown";
}

export function consumeRateLimit(identifier: string, options: RateLimitOptions): RateLimitResult {
  const now = Date.now();
  removeExpiredRequests(now, options.windowMs);

  const timestamps = requestTimestamps.get(identifier) ?? [];

  if (timestamps.length >= options.limit) {
    const oldestTimestamp = timestamps[0] ?? now;
    const retryAfterSeconds = Math.max(1, Math.ceil((oldestTimestamp + options.windowMs - now) / 1_000));

    return { allowed: false, retryAfterSeconds };
  }

  if (!requestTimestamps.has(identifier) && requestTimestamps.size >= maximumTrackedIdentifiers) {
    return { allowed: false, retryAfterSeconds: 1 };
  }

  requestTimestamps.set(identifier, [...timestamps, now]);

  return { allowed: true, retryAfterSeconds: 0 };
}
