import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import BottomTabBar from '@/components/ui/BottomTabBar';

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-r from-[#F2490C]/80 via-[#0A3B59]/05 to-[#1DDDF2]">
          

          {/* Пульсирующее солнце */}
          {/* <div className="border-5 border-lime-500 absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gradient-radial from-[#F2490C]/40 to-transparent rounded-full blur-3xl opacity-70"></div> */}

          {/* Линия горизонта */}
          {/* <div className="border-5 border-fuchsia-600 absolute bottom-0 left-0 w-full h-[2px] bg-[#F2490C]/40 blur-sm shadow-md shadow-[#F2490C]/40"></div> */}

          {/* Контент */}
          <div className="relative z-10 flex items-center justify-center min-h-screen">
            {children}
          </div>
        </div>

        <BottomTabBar />
      </body>
    </html>
  );
}
