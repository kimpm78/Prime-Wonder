import Providers from '@/components/Providers';
import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/header/header';
import CategoryMenu from '@/components/caregorymeun/CategoryMenu';
import Notice from '@/components/molecules/Notice';
import DrawerButton from '@/components/DrawerButton';
import Footer from '@/components/footer/footer';
import Sidebar from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PrimeKim',
  description: 'figure by EC-Site',
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
          <div className="drawer">
            <DrawerButton />
            <div className="drawer-content">
              <div className="min-h-screen flex flex-col">
                <Header />
                <CategoryMenu />
                <Notice />
                {children}
                <Footer />
              </div>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              {/* <Sidebar /> */}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
