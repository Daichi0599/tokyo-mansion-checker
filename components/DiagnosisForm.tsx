"use client";

import { useRef, useState } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import type { DiagnosisInput } from "@/types";

interface Props {
  onSubmit: (input: DiagnosisInput) => void;
  isLoading?: boolean;
  initialValues?: Partial<DiagnosisInput>;
}

const defaultValues: DiagnosisInput = {
  annualIncome: 800,
  age: 30,
  downPayment: 1000,
  interestRate: 1.1,
  repaymentYears: 35,
  monthlyLiving: 25,
  managementFee: 3,
  currentRent: 0,
  deductionLimit: 0,
};

interface FieldConfig {
  key: keyof DiagnosisInput;
  label: string;
  unit: string;
  desc: string;
  min: number;
  max: number;
  step: number;
  optional?: boolean;
}

const FIELDS: Record<keyof DiagnosisInput, FieldConfig> = {
  annualIncome: {
    key: "annualIncome",
    label: "世帯年収",
    unit: "万円/年",
    desc: "賞与を含む前年の額面年収。共働きなら夫婦の合計",
    min: 100,
    max: 5000,
    step: 1,
  },
  age: {
    key: "age",
    label: "年齢（主債務者）",
    unit: "歳",
    desc: "住宅ローンの主な借り手の年齢",
    min: 18,
    max: 75,
    step: 1,
  },
  downPayment: {
    key: "downPayment",
    label: "頭金",
    unit: "万円",
    desc: "諸費用とは別に、物件価格へ充てる自己資金",
    min: 0,
    max: 20000,
    step: 10,
  },
  interestRate: {
    key: "interestRate",
    label: "金利（年率）",
    unit: "%",
    desc: "金融機関から提示された金利。未定なら1.1%を目安に",
    min: 0,
    max: 10,
    step: 0.01,
  },
  repaymentYears: {
    key: "repaymentYears",
    label: "返済年数",
    unit: "年",
    desc: "1年単位で入力できます。長いほど月返済は下がります",
    min: 5,
    max: 50,
    step: 1,
  },
  monthlyLiving: {
    key: "monthlyLiving",
    label: "月の生活費",
    unit: "万円/月",
    desc: "住居費を除く、食費・光熱費・通信費・保険料など",
    min: 0,
    max: 200,
    step: 0.1,
  },
  managementFee: {
    key: "managementFee",
    label: "管理費・修繕積立金",
    unit: "万円/月",
    desc: "検討物件の合計額。0.1万円（1,000円）単位で入力",
    min: 0,
    max: 30,
    step: 0.1,
  },
  currentRent: {
    key: "currentRent",
    label: "いまの家賃",
    unit: "万円/月",
    desc: "購入後の実支出と比較します。比較しない場合は0",
    min: 0,
    max: 100,
    step: 0.1,
    optional: true,
  },
  deductionLimit: {
    key: "deductionLimit",
    label: "住宅ローン控除の対象枠",
    unit: "万円",
    desc: "物件性能に応じた借入限度額。不明・見込まない場合は0",
    min: 0,
    max: 10000,
    step: 100,
    optional: true,
  },
};

const SECTIONS: { title: string; note: string; keys: (keyof DiagnosisInput)[] }[] = [
  {
    title: "まずは基本条件",
    note: "源泉徴収票なら「支払金額」を夫婦分合計します。賞与も含めてください。",
    keys: ["annualIncome", "age", "downPayment"],
  },
  {
    title: "ローン条件",
    note: "まだ未定なら初期値のままで構いません。あとから何度でも比較できます。",
    keys: ["interestRate", "repaymentYears"],
  },
  {
    title: "毎月の家計と物件維持費",
    note: "概算より、家計簿や検討物件に近い数字を入れるほど現実的になります。",
    keys: ["monthlyLiving", "managementFee", "currentRent"],
  },
];

const roundForStep = (value: number, step: number) => {
  const decimals = (String(step).split(".")[1] ?? "").length;
  return Number(value.toFixed(decimals));
};

function PreciseNumberField({
  field,
  value,
  onChange,
}: {
  field: FieldConfig;
  value: number;
  onChange: (value: number) => void;
}) {
  const setClamped = (next: number) => {
    const clamped = Math.min(field.max, Math.max(field.min, next));
    onChange(roundForStep(clamped, field.step));
  };

  return (
    <div className="flex flex-col gap-2 rounded-xl border border-slate-700 bg-slate-900/35 p-4">
      <div className="min-h-14">
        <label htmlFor={`diagnosis-${field.key}`} className="text-sm font-bold text-slate-100">
          {field.label}
          {field.optional && <span className="ml-2 text-[11px] font-normal text-slate-500">任意</span>}
        </label>
        <p className="mt-1 text-xs leading-relaxed text-slate-400">{field.desc}</p>
      </div>

      <div className="grid grid-cols-[44px_minmax(0,1fr)_44px] items-stretch gap-2">
        <button
          type="button"
          onClick={() => setClamped(value - field.step)}
          disabled={value <= field.min}
          aria-label={`${field.label}を${field.step}${field.unit}減らす`}
          className="rounded-xl border border-slate-600 bg-slate-700 text-xl font-bold text-slate-200 hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-30"
        >
          −
        </button>
        <div className="relative min-w-0">
          <input
            id={`diagnosis-${field.key}`}
            type="number"
            inputMode={field.step < 1 ? "decimal" : "numeric"}
            min={field.min}
            max={field.max}
            step={field.step}
            required={!field.optional}
            value={value}
            onChange={(event) => {
              const next = event.target.valueAsNumber;
              if (Number.isFinite(next)) onChange(next);
            }}
            onBlur={() => setClamped(value)}
            className="h-full w-full rounded-xl border border-slate-600 bg-slate-700 px-3 pr-24 text-right text-lg font-black tabular-nums text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
          />
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs font-semibold text-slate-400">
            {field.unit}
          </span>
        </div>
        <button
          type="button"
          onClick={() => setClamped(value + field.step)}
          disabled={value >= field.max}
          aria-label={`${field.label}を${field.step}${field.unit}増やす`}
          className="rounded-xl border border-slate-600 bg-slate-700 text-xl font-bold text-slate-200 hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-30"
        >
          ＋
        </button>
      </div>
      <p className="text-right text-[11px] text-slate-500">{field.step}{field.unit}単位で調整</p>
    </div>
  );
}

export default function DiagnosisForm({ onSubmit, isLoading = false, initialValues }: Props) {
  const [manualValues, setManualValues] = useState<DiagnosisInput | null>(null);
  const values = manualValues ?? { ...defaultValues, ...initialValues };
  const hasStarted = useRef(false);

  const handleChange = (key: keyof DiagnosisInput, value: number) => {
    if (!hasStarted.current) {
      hasStarted.current = true;
      sendGAEvent("event", "tool_start", { tool: "mansion_diagnosis" });
    }
    setManualValues({ ...values, [key]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit} id="form" className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-800">
      <div className="border-b border-slate-700 bg-slate-900/50 px-5 py-5 text-center sm:px-6">
        <h2 className="text-base font-bold text-white">あなたの条件を入力</h2>
        <p className="mt-1 text-xs text-slate-400">数字を直接入力するか、左右のボタンで細かく調整できます。</p>
      </div>

      <div className="space-y-7 p-4 sm:p-6">
        {SECTIONS.map((section) => (
          <section key={section.title} className="space-y-3">
            <div>
              <h3 className="text-sm font-black text-white">{section.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">{section.note}</p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {section.keys.map((key) => (
                <PreciseNumberField
                  key={key}
                  field={FIELDS[key]}
                  value={values[key] ?? 0}
                  onChange={(value) => handleChange(key, value)}
                />
              ))}
            </div>
          </section>
        ))}

        <details className="group rounded-xl border border-slate-700 bg-slate-900/35 p-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-bold text-slate-200">
            <span>住宅ローン控除も含めて家賃と比べる</span>
            <span className="text-slate-500 transition-transform group-open:rotate-180">⌄</span>
          </summary>
          <p className="mt-2 text-xs leading-relaxed text-slate-400">
            控除額は物件性能や入居年で変わります。不明なら0のままで診断できます。
          </p>
          <div className="mt-3 max-w-sm">
            <PreciseNumberField
              field={FIELDS.deductionLimit}
              value={values.deductionLimit ?? 0}
              onChange={(value) => handleChange("deductionLimit", value)}
            />
          </div>
        </details>

        <div className="space-y-3 pt-1">
          <button
            type="submit"
            disabled={isLoading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 text-base font-bold text-white transition-colors hover:bg-blue-500 active:bg-blue-700 disabled:bg-blue-400"
          >
            {isLoading ? (
              <>
                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                診断中...
              </>
            ) : (
              "無理のない購入予算を診断する →"
            )}
          </button>
          <p className="text-center text-sm text-slate-300">
            完全無料・匿名・営業なし。入力内容は端末内にのみ保存され、サーバーやGA4には送信されません。
          </p>
        </div>
      </div>
    </form>
  );
}
