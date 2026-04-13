import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from './components/Header';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Alex Kadai - Frontend Developer React',
  description: 'Professional portfolio of Alex Kadai, a skilled Frontend Developer specializing in React, Next.js, and modern web technologies. View my projects and get in touch.',
  keywords: ['Alex Kadai', 'Frontend Developer', 'React Developer', 'Web Developer', 'JavaScript', 'TypeScript', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Alex Kadai' }],
  creator: 'Alex Kadai',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alexkadai.com',
    title: 'Alex Kadai - Frontend Developer React',
    description: 'Professional portfolio of Alex Kadai, a skilled Frontend Developer specializing in React, Next.js, and modern web technologies.',
    siteName: 'Alex Kadai Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Alex Kadai - Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Kadai - Frontend Developer React',
    description: 'Professional portfolio of Alex Kadai, a skilled Frontend Developer specializing in React and modern web technologies.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
