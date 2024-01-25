import '../globals.css';
import { Shippori_Mincho } from 'next/font/google';
import { ReactNode } from 'react';
import { Footer, Header } from './_compoent/base';
import {
  description,
  metadataBase,
  openGraph,
  twitter,
} from '@/component/metadata';

const noto = Shippori_Mincho({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata = {
  metadataBase,
  description,
  openGraph,
  twitter,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body
        style={{
          ['--font-serif' as string]: `${noto.style.fontFamily}, serif`,
        }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
