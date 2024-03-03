import type { ReactNode } from 'react';
import Head from 'next/head'; 
import Navbar from './ui/Navbar';

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
        <main>
            <Navbar />
            {children}
            </main>
      </body>
    </html>
  );
}
