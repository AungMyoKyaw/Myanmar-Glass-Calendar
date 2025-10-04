import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const viewport: Viewport = {
  themeColor: '#FF6B35'
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  ),
  title: 'Myanmar Glass Calendar',
  description:
    'Myanmar Glass Calendar is a modern calendar application that displays Myanmar dates and astrological information.',
  openGraph: {
    title: 'Myanmar Glass Calendar',
    description:
      'Myanmar Glass Calendar is a modern calendar application that displays Myanmar dates and astrological information.',
    images: [
      {
        url: '/icon.svg',
        width: 1024,
        height: 1024,
        alt: 'Myanmar Glass Calendar'
      }
    ],
    type: 'website',
    siteName: 'Myanmar Glass Calendar'
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon/safari-pinned-tab.svg'
      }
    ]
  },
  manifest: '/favicon/site.webmanifest',
  other: {
    'msapplication-TileColor': '#da532c',
    'msapplication-TileImage': '/favicon/mstile-150x150.png'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
