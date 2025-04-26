import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SurfSync Board Tracker',
  description: 'Track your board and surf sessions with Surf Sync',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-32x32.png',
  },
  manifest: '/manifest.json',
  other: {
    // Подключаем Material Symbols
    'link:material-symbols':
      'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded&display=optional',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="surftrack">
      <head>
        {/* Подключаем Material Symbols */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded&display=optional"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
