import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
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
  metadataBase: new URL("https://30lab.vercel.app"),
  title: "30Lab | 気になったら、まずここから。",
  description:
    "マンション購入・物件診断・車・子育て費用——大きな決断の前に数字で整理できる無料ツール集。完全無料・匿名OK・データ保存なし・営業電話なし。",
  keywords: [
    "マンション購入診断", "物件診断", "車コスト比較", "子育て費用試算", "30代 お金",
    "住宅ローン シミュレーション", "都内マンション", "住居費負担率",
  ],
  openGraph: {
    title: "30Lab | 気になったら、まずここから。",
    description:
      "マンション・車・子育て費用。大きな決断の前に数字で整理できる無料ツール集。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "30Lab | 気になったら、まずここから。",
    description:
      "マンション・車・子育て費用。大きな決断の前に数字で整理できる無料ツール集。完全無料・匿名OK。",
  },
  verification: {
    google: "YJQaoLidiFiUXU1gk17pOzulSMSM8KbNYV0NnZ18uDU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {/* Google AdSense */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8547173454903621" crossOrigin="anonymous"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* グローバルナビゲーション */}
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
          <div className="max-w-2xl mx-auto px-4 py-2.5 flex items-center justify-between">
            <a href="/" className="text-sm font-black text-blue-700 tracking-tight hover:text-blue-800 transition-colors">30Lab</a>
            <div className="flex items-center gap-0.5">
              <a href="/mansion" className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors">🏠 <span>マンション</span></a>
              <a href="/check" className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors">🔍 <span>物件診断</span></a>
              <a href="/car" className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors">🚗 <span>車</span></a>
              <a href="/child" className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors">👶 <span>子育て</span></a>
              <a href="/articles" className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors">📝 <span>コラム</span></a>
            </div>
          </div>
        </nav>
        {children}
      </body>
      <GoogleAnalytics gaId="G-MVF8CEE9X9" />
      <Analytics />
    </html>
  );
}
