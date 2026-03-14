import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "都内マンション買って大丈夫？診断 | 年収から安全購入価格を無料シミュレーション",
  description:
    "世帯年収・頭金・金利を入力するだけで、都内マンションの安全購入価格・月々の返済額・住居費負担率を即診断。20〜30代向け無料シミュレーター。FP監修レベルの計算ロジックで、無理のない住宅購入計画をサポートします。",
  keywords: ["都内マンション", "住宅ローン", "シミュレーション", "購入価格", "年収", "頭金", "負担率", "無料診断"],
  openGraph: {
    title: "都内マンション買って大丈夫？診断",
    description:
      "年収・頭金・金利を入力するだけ。都内マンションの安全購入価格を無料で即診断します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "都内マンション買って大丈夫？診断",
    description:
      "年収・頭金・金利を入力するだけ。都内マンションの安全購入価格を無料で即診断します。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
