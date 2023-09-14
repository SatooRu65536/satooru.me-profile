import "../globals.css";
import Header from "@/component/base/header/header";
import { Shippori_Mincho } from "next/font/google";
import Footer from "@/component/base/footer/footer";

const noto = Shippori_Mincho({
  weight: ["400", "500", "600", "700"],
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
        <Footer />
      </body>
    </html>
  );
}
