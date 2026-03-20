"use client";

import { useState } from "react";
import { DiagnosisInput } from "@/types";

interface Props {
  onSubmit: (input: DiagnosisInput) => void;
  isLoading?: boolean;
}

const defaultValues: DiagnosisInput = {
  annualIncome:   1200,
  age:            30,
  downPayment:    1000,
  interestRate:   0.7,
  repaymentYears: 35,
  monthlyLiving:  25,
  managementFee:  3,
};

const range = (start: number, end: number, step = 1): number[] => {
  const arr: number[] = [];
  for (let v = start; v <= end; v = Math.round((v + step) * 1000) / 1000) arr.push(v);
  return arr;
};

interface FieldConfig {
  key:     keyof DiagnosisInput;
  label:   string;
  unit:    string;
  desc:    string;
  options: number[];
  fmt?:    (v: number) => string;
}

const fields: FieldConfig[] = [
  {
    key:     "annualIncome",
    label:   "世帯年収",
    unit:    "万円",
    desc:    "額面ベースの年間世帯収入。共働きなら夫婦の合算額",
    options: [300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1800,2000,2500,3000],
  },
  {
    key:     "age",
    label:   "年齢（主債務者）",
    unit:    "歳",
    desc:    "住宅ローンの主な借り手の年齢。返済期間の上限に影響",
    options: range(20, 65),
  },
  {
    key:     "downPayment",
    label:   "頭金",
    unit:    "万円",
    desc:    "購入時に現金で支払う自己資金。多いほど月返済が下がる",
    options: [0,100,200,300,400,500,700,1000,1500,2000,3000,5000],
  },
  {
    key:     "interestRate",
    label:   "金利（年率）",
    unit:    "%",
    desc:    "変動金利は2025年現在0.3〜0.7%台が目安。将来の上昇も考慮を",
    options: [0.1,0.3,0.5,0.7,1.0,1.2,1.5,2.0,2.5,3.0,3.5],
  },
  {
    key:     "repaymentYears",
    label:   "返済年数",
    unit:    "年",
    desc:    "長いほど月返済は減るが、総利息は増える",
    options: [10,15,20,25,30,35,40,50],
  },
  {
    key:     "monthlyLiving",
    label:   "月の生活費",
    unit:    "万円",
    desc:    "食費・光熱費・通信費・保険料など住居費以外の月間支出",
    options: [10,15,20,25,30,35,40,50,60],
  },
  {
    key:     "managementFee",
    label:   "管理費・修繕積立金",
    unit:    "万円/月",
    desc:    "ローン以外の毎月固定費。都内マンションは月2〜5万円が目安",
    options: [0,1,2,3,4,5,6,8,10],
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
    <form onSubmit={handleSubmit} id="form" className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
      {/* ヘッダー */}
      <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/80">
        <h2 className="text-base font-bold text-gray-800">あなたの条件を入力</h2>
        <p className="text-xs text-gray-500 mt-1">
          目安の初期値が設定されています。実際の数値に合わせて調整してください。
        </p>
      </div>

      {/* フィールド群 */}
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
          {fields.map(({ key, label, unit, desc, options }) => (
            <div key={key} className="flex flex-col gap-1.5">
              <div>
                <label className="text-sm font-semibold text-gray-800">
                  {label}
                  <span className="ml-1.5 text-xs font-normal text-gray-400">（{unit}）</span>
                </label>
                <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{desc}</p>
              </div>
              <select
                value={values[key]}
                onChange={(e) => handleChange(key, e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-gray-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition cursor-pointer"
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

        {/* CTAボタン */}
        <div className="pt-2 space-y-3">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-400 text-white font-bold py-4 rounded-xl transition-colors text-base shadow-sm flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <span className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                診断中...
              </>
            ) : (
              "無理のない購入予算を診断する →"
            )}
          </button>
          <p className="text-xs text-center text-gray-400">
            完全無料・匿名・営業なし。入力内容はブラウザ上でのみ使用され、外部に送信されません。
          </p>
        </div>
      </div>
    </form>
  );
}
