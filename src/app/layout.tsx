import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Data Visualizer',
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
        <main>{children}</main>
      </body>
    </html>
  );
}
