import "server-only";

import { ImapFlow } from "imapflow";

function getRequiredEnvironmentVariable(name: string): string {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function getImapPort(): number {
  const value = getRequiredEnvironmentVariable("IMAP_PORT");
  const port = Number(value);

  if (!Number.isInteger(port) || port < 1 || port > 65_535) {
    throw new Error("IMAP_PORT must be a valid TCP port number");
  }

  return port;
}

export function createImapClient(): ImapFlow {
  return new ImapFlow({
    host: getRequiredEnvironmentVariable("IMAP_HOST"),
    port: getImapPort(),
    secure: true,
    auth: {
      user: getRequiredEnvironmentVariable("IMAP_USER"),
      pass: getRequiredEnvironmentVariable("IMAP_PASSWORD"),
    },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
    disableAutoIdle: true,
    logger: false,
  });
}
