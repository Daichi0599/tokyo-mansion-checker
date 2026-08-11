import type { Metadata } from "next";
import Script from "next/script";
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
        {/* 構造化データ (WebSite + Organization) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://30lab.vercel.app/#website",
                  "url": "https://30lab.vercel.app",
                  "name": "30Lab",
                  "description": "30代の大きな決断を、数字で整理する無料ツール集",
                  "inLanguage": "ja",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://30lab.vercel.app/articles?q={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "Organization",
                  "@id": "https://30lab.vercel.app/#organization",
                  "name": "30Lab",
                  "url": "https://30lab.vercel.app",
                  "sameAs": ["https://x.com/30lab_jp", "https://note.com/30lab"]
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* グローバルナビゲーション */}
        <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700/60 shadow-sm">
          <div className="max-w-2xl mx-auto px-4 py-2.5 flex items-center justify-between">
            <a href="/" className="text-sm font-black text-white tracking-tight hover:text-blue-300 transition-colors">30Lab</a>
            <div className="flex items-center gap-0.5">
              <a href="/mansion" aria-label="マンション購入診断" className="flex items-center gap-1 px-2 sm:px-2.5 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">🏠 <span className="hidden sm:inline">マンション</span></a>
              <a href="/check" aria-label="物件診断" className="flex items-center gap-1 px-2 sm:px-2.5 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">🔍 <span className="hidden sm:inline">物件診断</span></a>
              <a href="/car" aria-label="車コスト診断" className="flex items-center gap-1 px-2 sm:px-2.5 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">🚗 <span className="hidden sm:inline">車</span></a>
              <a href="/birth" aria-label="出産費用シミュレーター" className="flex items-center gap-1 px-2 sm:px-2.5 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">🤰 <span className="hidden sm:inline">出産</span></a>
              <a href="/child" aria-label="子育て費用シミュレーター" className="flex items-center gap-1 px-2 sm:px-2.5 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">👶 <span className="hidden sm:inline">子育て</span></a>
              <a href="/articles" aria-label="コラム" className="flex items-center gap-1 px-2 sm:px-2.5 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">📝 <span className="hidden sm:inline">コラム</span></a>
            </div>
          </div>
        </nav>
        {children}
        {/* フッター */}
        <footer className="mt-16 border-t border-slate-700/60 bg-slate-900">
          <div className="max-w-2xl mx-auto px-4 py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm font-black text-blue-400">30Lab</div>
              {/* slate-500/600 は暗背景でコントラスト比が4.5:1に届かないため slate-400 にしている */}
              <nav className="flex items-center gap-4 text-xs text-slate-400">
                <a href="/about" className="hover:text-white transition-colors">このサイトについて</a>
                <a href="/privacy-policy" className="hover:text-white transition-colors">プライバシーポリシー</a>
                <a href="https://x.com/30lab_jp" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">𝕏 @30lab_jp</a>
              </nav>
            </div>
            <p className="text-center text-xs text-slate-400 mt-4">
              © 2026 30Lab. 当サイトの情報は参考目的であり、投資・購入の意思決定を保証するものではありません。
            </p>
          </div>
        </footer>
        {/* Google AdSense — next/script 経由で読み込む。
            head に生の <script> を置くと AdSense が実行時に head を書き換え、
            React の hydration と衝突して警告が出るため。 */}
        <Script
          id="google-adsense"
          async
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8547173454903621"
        />
      </body>
      <GoogleAnalytics gaId="G-MVF8CEE9X9" />
      <Analytics />
    </html>
  );
}
