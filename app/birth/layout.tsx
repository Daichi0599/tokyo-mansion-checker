import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "出産費用シミュレーター【東京版】いくらかかる？もらえる給付金まで無料試算｜30Lab",
  description:
    "東京で出産すると総額いくらかかるかを無料で試算。正常分娩・無痛分娩・帝王切開に対応し、出産育児一時金50万円、出産手当金、育児休業給付金、応援ギフトを差し引いた実際の収支がわかります。申請タイムライン付き。",
  keywords: [
    "出産費用 いくら",
    "出産費用 東京",
    "無痛分娩 費用",
    "出産 給付金 いくら",
    "育児休業給付金 計算",
    "出産一時金 差額",
  ],
  openGraph: {
    title: "出産費用シミュレーター【東京版】もらえる給付金まで差し引いた収支がわかる",
    description:
      "正常分娩・無痛分娩・帝王切開に対応。出産一時金・出産手当金・育休給付を差し引いた実際の負担額を無料で試算できます。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "出産費用シミュレーター【東京版】",
    description: "無痛分娩だと実質いくら？もらえる給付金まで含めた収支を無料で試算。",
  },
  alternates: { canonical: "/birth" },
};

export default function BirthLayout({ children }: { children: React.ReactNode }) {
  return children;
}
