import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
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
  title: "都内マンション購入診断 | 無理なく買える価格を無料チェック【約3分】",
  description:
    "「借りられる額」ではなく「無理なく買える額」がわかる都内マンション購入診断。世帯年収・頭金・生活費・管理費を入力して、住居費負担率と安全購入価格を無料で算出。共働き・20〜30代向け、完全匿名・営業なし。",
  keywords: [
    "都内マンション購入診断", "住宅ローン シミュレーション", "無理なく買える マンション",
    "マンション購入価格 年収", "住居費負担率", "共働き マンション 購入",
    "頭金 シミュレーション", "安全購入価格", "管理費 住宅ローン"
  ],
  openGraph: {
    title: "都内マンション購入診断 | 無理なく買える価格を無料チェック",
    description:
      "世帯年収・頭金・生活費・管理費から、家計を崩しにくい安全購入価格を算出。約3分・完全無料・匿名OK。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "都内マンション購入診断 | 無理なく買える価格を無料チェック",
    description:
      "「借りられる額」ではなく「無理なく買える額」がわかる。約3分・完全無料・匿名OK。",
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
        {/* グローバルナビゲーション */}
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
          <div className="max-w-2xl mx-auto px-4 py-2.5 flex items-center justify-between">
            <span className="text-sm font-black text-blue-700 tracking-tight">30Lab</span>
            <div className="flex items-center gap-0.5">
              <a href="/" className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors">🏠 <span>マンション</span></a>
              <a href="/car" className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors">🚗 <span>車</span></a>
              <a href="/child" className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors">👶 <span>子育て</span></a>
            </div>
          </div>
        </nav>
        {children}
      </body>
      <GoogleAnalytics gaId="G-MVF8CEE9X9" />
    </html>
  );
}
