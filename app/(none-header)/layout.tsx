import { ReactNode } from 'react';
import '../globals.css';
import {
  description,
  metadataBase,
  openGraph,
  twitter,
} from '@/component/metadata';

export const metadata = {
  metadataBase,
  description,
  openGraph,
  twitter,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
