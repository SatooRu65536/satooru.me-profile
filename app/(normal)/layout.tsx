import "../globals.css";
import Header from "@/component/base/header/header";
import { Shippori_Mincho } from "next/font/google";
import Footer from "@/component/base/footer/footer";

const noto = Shippori_Mincho({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const siteName = "'SatooRu's Profile";
const description = "佐藤さとる のプロフィールサイトです.";
const url = "https://satooru.me/";

export const metadata = {
  metadataBase: new URL(url),
  title: siteName,
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    site: "@SatooRu_65536",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        style={{
          ["--font-serif" as string]: `${noto.style.fontFamily}, serif`,
        }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
