import "./globals.css";
import { Shippori_Mincho } from "next/font/google";

const noto = Shippori_Mincho({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "404 | SatooRu's Profile",
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
        {children}
      </body>
    </html>
  );
}
