import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Press',
  description: 'Fitness Tracking App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-[100dvh]`}>
        <Header />
        <main className="relative grow flex flex-col justify-center items-center">
          {children}
          <Sidebar />
        </main>
      </body>
    </html>
  );
}


