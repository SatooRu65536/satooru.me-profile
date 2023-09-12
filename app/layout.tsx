import "./globals.css";
import { BIZ_UDMincho } from "next/font/google";

const biz = BIZ_UDMincho({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "SatooRu's Profile",
  description: "SatooRu's Profile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={biz.className}>{children}</body>
    </html>
  );
}
