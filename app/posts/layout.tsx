import "../globals.css";
import { Noto_Serif_JP } from "next/font/google";
import BlogHeader from "@/component/base/blogHeader/blogHeader";
import Footer from "@/component/base/footer/footer";
import Sidebar from "@/component/ui/sidebar/sidebar";

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
        <BlogHeader>
          <Sidebar />
        </BlogHeader>
        {children}
        <Footer />
      </body>
    </html>
  );
}
