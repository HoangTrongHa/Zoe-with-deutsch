import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from '@/lib/providers';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SEO Multi-language App",
  description: "A modern SEO-optimized multi-language application built with Next.js",
  keywords: ["seo", "nextjs", "typescript", "multilingual", "dark mode"],
  authors: [{ name: "SEO Team" }],
  creator: "SEO Team",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    alternateLocale: ["de_DE", "en_US"],
    title: "SEO Multi-language App",
    description: "A modern SEO-optimized multi-language application",
    siteName: "SEO App",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Multi-language App",
    description: "A modern SEO-optimized multi-language application",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
