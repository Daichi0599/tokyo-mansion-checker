import type { Metadata } from "next";
import LoanSimulatorPage from "@/components/LoanSimulatorPage";

export const metadata: Metadata = {
  title: "住宅ローン返済シミュレーター【無料】月返済額・総返済額を即計算｜30Lab",
  description:
    "借入額・金利・返済期間を入力するだけで月返済額・総返済額・利息総額を即計算。金利上昇シナリオの比較表付きで変動金利のリスクも確認できます。返済比率の安全基準も表示。完全無料・匿名。",
  keywords: [
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
