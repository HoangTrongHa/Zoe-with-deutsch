import type { Metadata } from "next";
import { Geist, Geist_Mono, Kalam } from "next/font/google";
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

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: '%s | Muối Deutsch Center',
    default: 'Muối Deutsch Center - Trung tâm tiếng Đức uy tín',
  },
  description: 'Trung tâm tiếng Đức uy tín tại Hà Nội. Khóa học A1, A2, B1, B2, C1, C2. Phương pháp giảng dạy hiện đại, giáo viên bản ngữ. Học tiếng Đức dễ như muối bỏ bể!',
  keywords: ['học tiếng đức', 'trung tâm tiếng đức', 'khóa học tiếng đức', 'luyện thi goethe', 'du học đức', 'muối deutsch'],
  authors: [{ name: 'Muối Deutsch Center' }],
  creator: 'Muối Deutsch Center',
  publisher: 'Muối Deutsch Center',
  metadataBase: new URL('https://muoideutsch.vercel.app'),
  openGraph: {
    title: 'Muối Deutsch Center - Trung tâm tiếng Đức uy tín',
    description: 'Học tiếng Đức dễ như muối bỏ bể! Khóa học A1-C2, giáo viên bản ngữ, phương pháp hiện đại.',
    url: 'https://muoideutsch.vercel.app',
    siteName: 'Muối Deutsch Center',
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muối Deutsch Center',
    description: 'Trung tâm tiếng Đức uy tín tại Hà Nội',
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
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kalam.variable} antialiased`}
        style={{ fontWeight: 'normal' }} // Force normal font weight
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
