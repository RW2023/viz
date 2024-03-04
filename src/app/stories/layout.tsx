import Footer from '@/components/ui/Footer';
import Navbar from './Navbar';
import type { Metadata } from 'next';



export const metadata: Metadata = {
  title: 'Stories',
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
        <main className='flex flex-col justify-center items-center'>
          <Navbar />
          {children}
          </main>
      </body>
      <Footer />
    </html>
  );
}
