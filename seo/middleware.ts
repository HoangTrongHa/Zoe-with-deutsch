import createMiddleware from 'next-intl/middleware';

// Define locales directly here to avoid circular import
const locales = ['vi', 'de', 'en'] as const;
const defaultLocale = 'vi' as const;

const middleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always'
});

export default function wrappedMiddleware(request: any) {
  const result = middleware(request);
  return result;
}

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(vi|de|en)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};
