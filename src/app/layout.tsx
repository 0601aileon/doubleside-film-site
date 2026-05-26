import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Double-Sided Silicone Gel Perforated Film | Professional Manufacturer',
    template: '%s | Silicone Gel Film Manufacturer',
  },
  description:
    'Professional manufacturer of double-sided silicone gel perforated film for medical foam dressing and industrial applications. ISO 13485 certified, global shipping.',
  keywords: [
    'silicone gel film',
    'perforated silicone film',
    'double-sided silicone gel',
    'foam dressing material',
    'medical grade silicone adhesive',
    'silicone gel manufacturer',
  ],
  openGraph: {
    title: 'Double-Sided Silicone Gel Perforated Film Manufacturer',
    description:
      'Premium silicone gel perforated film for medical and industrial applications.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
