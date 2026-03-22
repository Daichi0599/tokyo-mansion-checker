import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "都内で車は持つべき？10年コスト診断 | 30Lab",
  description:
    "カーシェア・中古車・新車の10年間コストを比較。利用頻度・駐車場代を入力するだけで最適な選択肢がわかる無料診断。都内在住のアラサー共働き向け。",
  keywords: [
    "都内 車 持つべき", "カーシェア 中古車 比較", "車 維持費 10年",
    "都内 駐車場 コスト", "マイカー カーシェア どっち", "車 コスト 診断",
  ],
  openGraph: {
    title: "都内で車は持つべき？10年コスト診断 | 30Lab",
    description:
      "カーシェア・中古車・新車の10年コストを即比較。利用頻度・駐車場代で最適解がわかる。完全無料・匿名OK。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "都内で車は持つべき？10年コスト診断 | 30Lab",
    description:
      "カーシェア・中古車・新車の10年コストを即比較。完全無料・匿名OK。",
  },
};

export default function CarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
