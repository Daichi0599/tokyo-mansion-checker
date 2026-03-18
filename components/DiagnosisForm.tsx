"use client";

import { useState } from "react";
import { DiagnosisInput } from "@/types";
import Tooltip from "@/components/Tooltip";

interface Props {
  onSubmit: (input: DiagnosisInput) => void;
  isLoading?: boolean;
}

const defaultValues: DiagnosisInput = {
  annualIncome: 1200,
  age: 30,
  downPayment: 500,
  interestRate: 0.5,
  repaymentYears: 35,
  monthlyLiving: 25,
};

interface SelectFieldConfig {
  key: keyof DiagnosisInput;
  label: string;
  unit: string;
  options: number[];
  tooltip: string;
}

const range = (start: number, end: number, step = 1): number[] => {
  const arr: number[] = [];
  for (let v = start; v <= end; v = Math.round((v + step) * 1000) / 1000) arr.push(v);
  return arr;
};

const fields: SelectFieldConfig[] = [
  {
    key: "annualIncome",
    label: "世帯年収",
    unit: "万円",
    options: [300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1800, 2000, 2500, 3000, 4000, 5000],
    tooltip: "税込みの年収合計。共働きの場合は夫婦の合算額を入力してください。",
  },
  {
    key: "age",
    label: "年齢（主債務者）",
    unit: "歳",
    options: range(20, 65),
    tooltip: "住宅ローンの主な借り手の年齢。返済期間の上限（80歳完済）に影響します。",
  },
  {
    key: "downPayment",
    label: "頭金",
    unit: "万円",
    options: [0, 100, 200, 300, 400, 500, 700, 1000, 1500, 2000, 3000, 5000],
    tooltip: "購入時に現金で支払う金額。頭金が多いほど借入額が減り、月返済額が下がります。",
  },
  {
    key: "interestRate",
    label: "金利（年率）",
    unit: "%",
    options: [0.1, 0.3, 0.5, 0.7, 1.0, 1.2, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 5.0],
    tooltip: "2025年現在、変動金利は0.3〜0.5%台が多い。将来の金利上昇リスクも考慮して設定しましょう。",
  },
  {
    key: "repaymentYears",
    label: "返済年数",
    unit: "年",
    options: [10, 15, 20, 25, 30, 35],
    tooltip: "住宅ローンを返済する期間。長いほど月返済額は減りますが、総利息は増えます。",
  },
  {
    key: "monthlyLiving",
    label: "月の生活費",
    unit: "万円",
    options: [10, 15, 20, 25, 30, 35, 40, 50, 60, 80, 100],
    tooltip: "食費・光熱費・通信費・保険料など住居費以外の月間支出。住居費負担率の計算に使用します。",
  },
];

export default function DiagnosisForm({ onSubmit, isLoading = false }: Props) {
  const [values, setValues] = useState<DiagnosisInput>(defaultValues);

  const handleChange = (key: keyof DiagnosisInput, raw: string) => {
    const num = parseFloat(raw);
    setValues((prev) => ({ ...prev, [key]: isNaN(num) ? 0 : num }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-6 space-y-5">
      <h2 className="text-lg font-bold text-gray-800 border-b pb-3">あなたの情報を入力</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {fields.map(({ key, label, unit, options, tooltip }) => (
          <div key={key} className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700 flex items-center">
              {label}
              <span className="ml-1 text-xs text-gray-400">（{unit}）</span>
              <Tooltip text={tooltip} />
            </label>
            <select
              value={values[key]}
              onChange={(e) => handleChange(key, e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              {options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt} {unit}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-400 text-white font-bold py-3 rounded-xl transition text-base shadow flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <span className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            計算中...
          </>
        ) : (
          "診断する"
        )}
      </button>
    </form>
  );
}
