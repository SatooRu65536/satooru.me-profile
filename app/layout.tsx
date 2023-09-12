import Header from "@/component/base/header/header";
import "./globals.css";
import { BIZ_UDPMincho } from "next/font/google";

const biz = BIZ_UDPMincho({
  weight: ["400", "700"],
  subsets: ["cyrillic", "greek-ext", "latin", "latin-ext"],
});

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
      <body style={{ fontFamily: `${biz.style.fontFamily}, serif` }}>
        <Header />
        {children}
      </body>
    </html>
  );
}
