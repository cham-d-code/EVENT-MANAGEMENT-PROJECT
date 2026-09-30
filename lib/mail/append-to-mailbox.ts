import "server-only";

import type { AppendResponseObject } from "imapflow";
import { createImapClient } from "@/lib/mail/imap-client";

export type AppendToMailboxInput = {
  rawMessage: Buffer;
  folder: string;
  markAsSeen: boolean;
};

export async function appendToMailbox({
  rawMessage,
  folder,
  markAsSeen,
}: AppendToMailboxInput): Promise<AppendResponseObject | false> {
  const client = createImapClient();

  try {
    await client.connect();
    const flags = markAsSeen ? ["\\Seen"] : undefined;
    return await client.append(folder, rawMessage, flags);
  } finally {
    try {
      await client.logout();
    } catch (logoutError: unknown) {
      console.error("Failed to close IMAP connection", logoutError);
    }
  }
}
