import Providers from '@/components/Providers';
import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/header/header';
import CategoryMenu from '@/components/atoms/CategoryMenu';
import Notice from '@/components/molecules/Notice';
import Footer from '@/components/organisms/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PrimeKim',
  description: 'figure by EC-site',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <CategoryMenu />
            <Notice />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
