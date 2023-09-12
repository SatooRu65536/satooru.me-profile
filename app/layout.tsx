import Header from "@/component/base/header/header";
import "./globals.css";
import { Noto_Serif_JP } from "next/font/google";

const noto = Noto_Serif_JP({
  weight: ["200", "300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
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
      <body style={{ fontFamily: `${noto.style.fontFamily}, serif` }}>
        <Header />
        {children}
      </body>
    </html>
  );
}
