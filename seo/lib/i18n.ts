import { notFound } from 'next/navigation';

export const locales = ['vi', 'de', 'en'] as const;
export const defaultLocale = 'vi' as const;

export type Locale = typeof locales[number];

// Simple function to get messages
export async function getMessages(locale: string) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
  
  try {
    const messages = (await import(`../public/locales/${locale}/common.json`)).default;
    return messages;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    notFound();
  }
}