import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import type { Metadata } from 'next';
import '@/app/globals.css';


export const metadata: Metadata = {
  title: 'Home',
  description: 'Data Visualizations',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="business">
      <body>
        <main>
          <Navbar />
          {children}
          </main>
      </body>
      <Footer />
    </html>
  );
}
