import Header from "@/component/base/header/header";
import "./globals.css";
import { BIZ_UDPMincho } from "next/font/google";

const biz = BIZ_UDPMincho({ weight: ["400", "700"], subsets: ["latin"] });

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
      <body className={biz.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
