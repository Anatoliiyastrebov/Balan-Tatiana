/** Server: prefer TELEGRAM_BOT_TOKEN (not exposed to browser). Client/build: NEXT_PUBLIC_* */
export function getTelegramBotToken(): string | undefined {
  const token =
    process.env.TELEGRAM_BOT_TOKEN?.trim() ||
    process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN?.trim();
  return token || undefined;
}

export function getTelegramChatId(): string | undefined {
  const chatId =
    process.env.TELEGRAM_CHAT_ID?.trim() ||
    process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID?.trim();
  return chatId || undefined;
}

export function isTelegramConfigured(): boolean {
  return !!(getTelegramBotToken() && getTelegramChatId());
}
