"use client";

import { useState, useRef } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { DiagnosisInput } from "@/types";

interface Props {
  onSubmit: (input: DiagnosisInput) => void;
  isLoading?: boolean;
}

const defaultValues: DiagnosisInput = {
  annualIncome:   800,
  age:            30,
  downPayment:    1000,
  interestRate:   1.1,
  repaymentYears: 35,
  monthlyLiving:  25,
  managementFee:  3,
  currentRent:    0,
  deductionLimit: 0,
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
    desc:    "2026年8月時点の目安は変動1.0〜1.1%台、フラット35で3.2〜3.3%台。政策金利は1.0%で上昇方向のため、変動なら余裕を見て",
    options: [0.5,0.7,0.9,1.1,1.3,1.5,1.8,2.0,2.5,3.0,3.3,3.5],
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
  {
    key:     "currentRent",
    label:   "いまの家賃",
    unit:    "万円/月",
    desc:    "入れると「今の家賃と比べて実際いくら増えるか」を出します。管理費・固定資産税まで含めた比較です",
    options: [0,8,10,12,14,16,18,20,22,25,30],
  },
  {
    key:     "deductionLimit",
    label:   "住宅ローン控除の対象枠",
    unit:    "万円",
    desc:    "物件の省エネ性能で上限が変わります。2026年からは基準を満たさない中古は対象外になる場合があります",
    options: [0,2000,3000,4500],
  },
];

/** 選択肢の数値そのままだと意味が伝わらない項目のラベル */
const OPTION_LABELS: Partial<Record<keyof DiagnosisInput, Record<number, string>>> = {
  currentRent: { 0: "比較しない" },
  deductionLimit: {
    0: "見込まない",
    2000: "2,000万（省エネ基準を満たさない中古）",
    3000: "3,000万（一般的な省エネ適合）",
    4500: "4,500万（ZEH水準・長期優良など）",
  },
};

const selectCls = "w-full rounded-xl border border-slate-600 bg-slate-700 px-3 py-2.5 text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition cursor-pointer";

export default function DiagnosisForm({ onSubmit, isLoading = false }: Props) {
  const [values, setValues] = useState<DiagnosisInput>(defaultValues);
  const hasStarted = useRef(false);

  const handleChange = (key: keyof DiagnosisInput, raw: string) => {
    if (!hasStarted.current) {
      hasStarted.current = true;
      sendGAEvent("event", "tool_start", { tool: "mansion_diagnosis" });
    }
    const num = parseFloat(raw);
    setValues((prev) => ({ ...prev, [key]: isNaN(num) ? 0 : num }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit} id="form" className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
      {/* ヘッダー */}
      <div className="px-6 py-5 border-b border-slate-700 bg-slate-900/50 text-center">
        <h2 className="text-base font-bold text-white">あなたの条件を入力</h2>
        <p className="text-xs text-slate-400 mt-1">
          目安の初期値が設定されています。実際の数値に合わせて調整してください。
        </p>
      </div>

      {/* フィールド群 */}
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
          {fields.map(({ key, label, unit, desc, options }) => (
            <div key={key} className="flex flex-col gap-1.5">
              <div>
                <label className="text-sm font-semibold text-slate-200">
                  {label}
                  <span className="ml-1.5 text-xs font-normal text-slate-400">（{unit}）</span>
                </label>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{desc}</p>
              </div>
              <select
                value={values[key]}
                onChange={(e) => handleChange(key, e.target.value)}
                className={selectCls}
              >
                {options.map((opt) => (
                  <option key={opt} value={opt}>
                    {OPTION_LABELS[key]?.[opt] ?? `${opt} ${unit}`}
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
            className="w-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-4 rounded-xl transition-colors text-base flex items-center justify-center gap-2"
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
          <p className="text-sm text-center text-slate-300">
            完全無料・匿名・営業なし。入力内容はブラウザ上でのみ使用され、外部に送信されません。
          </p>
        </div>
      </div>
    </form>
  );
}
