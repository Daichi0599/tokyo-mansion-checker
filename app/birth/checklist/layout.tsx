import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "出産準備チェックリスト｜予定日を入れると今週やることだけが出る【無料】｜30Lab",
  description:
    "出産予定日を入れると、いまの妊娠週数でやるべき手続きだけが出るチェックリスト。健保の付加給付、夫の育休、限度額適用認定証、児童手当の15日ルール、保活の締切まで。各項目に所要時間と動く金額つき。チェック状態は端末に保存されます。",
  keywords: [
    "出産準備 チェックリスト",
    "妊娠 やることリスト",
    "出産 手続き 一覧",
    "出産 準備 夫",
    "産休 育休 手続き",
  ],
  openGraph: {
    title: "出産準備チェックリスト｜今週やることだけが出る",
    description:
      "予定日を入れると、いまの週数でやるべき手続きだけに絞られます。所要時間と動く金額つき。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "出産準備チェックリスト",
    description: "予定日を入れると今週やることだけが出ます。チェックは端末に保存。",
  },
  alternates: { canonical: "/birth/checklist" },
};

export default function ChecklistLayout({ children }: { children: React.ReactNode }) {
  return children;
}
