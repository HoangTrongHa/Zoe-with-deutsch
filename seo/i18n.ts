import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const locales = ['vi', 'de', 'en'] as const;
export const defaultLocale = 'vi' as const;

export type Locale = typeof locales[number];

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale = locale || defaultLocale;
  if (!locales.includes(resolvedLocale as any)) {
    notFound();
  }
  return {
    locale: resolvedLocale as string,
    messages: (await import(`./public/locales/${resolvedLocale}/common.json`)).default
  };
});