import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "子育て総費用シミュレーター | 0歳〜大学卒業まで無料試算【30Lab】",
  description:
    "保育園・学校・大学・習い事の選択肢ごとに、0歳〜大学卒業までの総費用を即試算。補助金・児童手当で実質いくら？月々いくら積立てばいい？共働きアラサー向け無料ツール。",
  keywords: [
    "子育て費用 シミュレーター", "教育費 試算", "子育て 総費用",
    "児童手当 補助金 計算", "学資保険 NISA 比較", "子育て 共働き 費用",
    "保育園 費用 計算", "大学費用 試算",
  ],
  openGraph: {
    title: "子育て総費用シミュレーター | 0歳〜大学卒業まで無料試算",
    description:
      "保育園・学校・大学・習い事ごとに子育て総費用を即試算。補助金差し引きの実質負担額も表示。完全無料・匿名OK。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "子育て総費用シミュレーター | 0歳〜大学卒業まで無料試算",
    description:
      "子育て総費用を即試算、補助金差し引きの実質負担額も表示。完全無料・匿名OK。",
  },
};

export default function ChildLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
