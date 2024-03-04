import type { ReactNode } from 'react';
import Head from 'next/head'; 
import Navbar from './ui/Navbar';
import Footer from './ui/Footer';
import '@/app/globals.css';

interface RootLayoutProps {
  children: ReactNode;
  title: string; 
  description: string; 
}

export default function RootLayout({
  children,
  title,
  description,
}: RootLayoutProps) {
  return (
    <html lang="en" data-theme="business">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />{' '}
      </Head>
      <body>
        <main className="flex flex-col justify-center items-center">
          <Navbar />
          {children}
        </main>
      </body>
      <Footer />
    </html>
  );
}
