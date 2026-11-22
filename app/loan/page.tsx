import type { Metadata } from "next";
import LoanSimulatorPage from "@/components/LoanSimulatorPage";

export const metadata: Metadata = {
  title: "住宅ローン計算｜月々の返済額・総返済額の返済シミュレーション【無料】｜30Lab",
  description:
    "借入額・金利・返済期間を入れるだけで、住宅ローンの月々の返済額・総返済額・利息総額を計算。金利が0.5%・1%上がったときの比較表付き。返済比率の安全ラインも出ます。無料・匿名で使えます。",
  keywords: [
    "住宅ローン 計算 月々",
    "住宅ローン 計算機",
    "住宅ローン 返済シミュレーション",
    "住宅ローン シミュレーター 無料",
    "住宅ローン 返済 計算",
    "住宅ローン 月返済額 計算",
    "住宅ローン 総返済額",
    "住宅ローン 返済比率 計算",
    "住宅ローン シミュレーション",
  ],
  openGraph: {
    title: "住宅ローン返済シミュレーター【無料】月返済額・総返済額を即計算",
    description:
      "借入額・金利・返済期間を入力するだけで月返済額・総返済額・利息を即計算。金利上昇シナリオ比較付き。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "住宅ローン返済シミュレーター【無料】月返済額・総返済額を即計算",
    description: "借入額・金利・返済期間から月返済額を即計算。金利上昇リスクも確認できます。",
  },
};

export default function LoanPage() {
  return <LoanSimulatorPage />;
}
