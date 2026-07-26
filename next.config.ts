import type { NextConfig } from "next";

// 2026-07 コンテンツ統合：薄い記事を4本の完全ガイドに集約し、旧URLは301で転送する
const MERGE_REDIRECTS: { from: string; to: string }[] = [
  // ① 諸費用・維持費ガイドへ統合
  { from: "/articles/mansion-kanrihi-shuzenhi", to: "/articles/mansion-shohiyo" },
  { from: "/articles/mansion-kotei-shisanzei", to: "/articles/mansion-shohiyo" },
  // ② 年収・購入可能額ガイドへ統合
  { from: "/articles/juutaku-loan-burden-rate", to: "/articles/nenshu-mansion-price" },
  { from: "/articles/mansion-nenshu-nanbai", to: "/articles/nenshu-mansion-price" },
  { from: "/articles/tokyo-mansion-atama-kin", to: "/articles/nenshu-mansion-price" },
  // ③ 住宅ローン審査ガイドへ統合
  { from: "/articles/jutaku-loan-shinsa-nenshu", to: "/articles/jutaku-loan-shinsa-ochita" },
  { from: "/articles/jutaku-loan-shunyugasan", to: "/articles/jutaku-loan-shinsa-ochita" },
  { from: "/articles/jutaku-loan-hoshoryou", to: "/articles/jutaku-loan-shinsa-ochita" },
  // ④ 住宅ローン金利ガイドへ統合
  { from: "/articles/jutaku-loan-kinri-hikaku", to: "/articles/jutaku-loan-hendokinri-koteikinri" },
  { from: "/articles/jutaku-loan-danshin", to: "/articles/jutaku-loan-hendokinri-koteikinri" },
  { from: "/articles/jutaku-loan-kuriage-hensai", to: "/articles/jutaku-loan-hendokinri-koteikinri" },
  { from: "/articles/jutaku-loan-bonus-shiharai", to: "/articles/jutaku-loan-hendokinri-koteikinri" },
  // 削除（読者層とズレるため廃止）— 近いテーマの記事へ転送
  { from: "/articles/mansion-uriage-timing", to: "/articles/mansion-baibai-shisan-kachi" },
  { from: "/articles/jutaku-loan-karikaee", to: "/articles/jutaku-loan-hendokinri-koteikinri" },
  { from: "/articles/jutaku-loan-koujyo", to: "/articles/mansion-shohiyo" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return MERGE_REDIRECTS.map(({ from, to }) => ({
      source: from,
      destination: to,
      permanent: true, // 301
    }));
  },
};

export default nextConfig;
