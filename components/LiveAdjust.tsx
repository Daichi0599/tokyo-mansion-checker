"use client";

import { useState } from "react";
import { diagnose } from "@/lib/calculator";
import type { DiagnosisInput, DiagnosisResult } from "@/types";

interface Props {
  input: DiagnosisInput;
  result: DiagnosisResult;
  onApply: (input: DiagnosisInput) => void;
}

type AdjustKey = "downPayment" | "interestRate" | "repaymentYears" | "managementFee";

interface AdjustConfig {
  key: AdjustKey;
  label: string;
  unit: string;
  min: number;
  max: number;
  step: number;
}

const ADJUSTS: AdjustConfig[] = [
  { key: "downPayment", label: "頭金", unit: "万円", min: 0, max: 5000, step: 50 },
  { key: "interestRate", label: "金利（年率）", unit: "%", min: 0, max: 4, step: 0.05 },
  { key: "repaymentYears", label: "返済年数", unit: "年", min: 10, max: 50, step: 1 },
  { key: "managementFee", label: "管理費・修繕積立金", unit: "万円/月", min: 0, max: 10, step: 0.1 },
];

const decimalsOf = (step: number) => (String(step).split(".")[1] ?? "").length;

const fmtDiff = (diff: number, unit: string, digits = 0) => {
  if (Math.abs(diff) < 0.5 * Math.pow(10, -digits)) return "変化なし";
  const sign = diff > 0 ? "+" : "−";
  return `${sign}${Math.abs(diff).toLocaleString(undefined, { maximumFractionDigits: digits })}${unit}`;
};

/**
 * 診断結果を見たまま、頭金・金利・返済年数・管理費を動かして安全価格の変化を確かめる。
 * フォームに戻って入れ直さなくていいように、結果の直下に置く。
 */
export default function LiveAdjust({ input, result, onApply }: Props) {
  const [draft, setDraft] = useState<DiagnosisInput>(input);
  const adjusted = diagnose(draft);

  const changed = ADJUSTS.some((a) => draft[a.key] !== input[a.key]);

  const set = (cfg: AdjustConfig, raw: number) => {
    if (!Number.isFinite(raw)) return;
    const clamped = Math.min(cfg.max, Math.max(cfg.min, raw));
    setDraft({ ...draft, [cfg.key]: Number(clamped.toFixed(decimalsOf(cfg.step))) });
  };

  return (
    <section className="rounded-2xl border border-slate-700 bg-slate-800 p-5 space-y-5">
      <div>
        <h3 className="text-sm font-black text-white">条件を動かして、結果の変化を見る</h3>
        <p className="mt-1 text-xs leading-relaxed text-slate-400">
          スライダーか数字で動かすと、安全購入価格と月々の負担がその場で変わります。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {ADJUSTS.map((cfg) => {
          const value = draft[cfg.key] ?? 0;
          const base = input[cfg.key] ?? 0;
          return (
            <div key={cfg.key} className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <label htmlFor={`adjust-${cfg.key}`} className="text-xs font-bold text-slate-200">
                  {cfg.label}
                </label>
                <div className="relative w-28">
                  <input
                    id={`adjust-${cfg.key}`}
                    type="number"
                    inputMode={cfg.step < 1 ? "decimal" : "numeric"}
                    min={cfg.min}
                    max={cfg.max}
                    step={cfg.step}
                    value={value}
                    onChange={(e) => set(cfg, e.target.valueAsNumber)}
                    className="w-full rounded-lg border border-slate-600 bg-slate-700 py-1.5 pl-2 pr-12 text-right text-sm font-black tabular-nums text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
                  />
                  <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-[10px] font-semibold text-slate-400">
                    {cfg.unit}
                  </span>
                </div>
              </div>
              <input
                type="range"
                aria-label={`${cfg.label}を調整`}
                min={cfg.min}
                max={cfg.max}
                step={cfg.step}
                value={Math.min(cfg.max, Math.max(cfg.min, value))}
                onChange={(e) => set(cfg, e.target.valueAsNumber)}
                className="h-6 w-full cursor-pointer accent-blue-500"
              />
              <p className="text-[11px] text-slate-500">
                診断時の値: {base}
                {cfg.unit}
                {value !== base && <span className="ml-2 text-blue-300">→ {value}{cfg.unit}</span>}
              </p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-2 rounded-xl border border-slate-700 bg-slate-900/50 p-3 text-center">
        <div>
          <p className="text-[11px] text-slate-400">安全購入価格</p>
          <p className="text-lg font-black tabular-nums text-white">{adjusted.safePrice.toLocaleString()}万円</p>
          <p className={`text-[11px] font-bold ${adjusted.safePrice >= result.safePrice ? "text-emerald-300" : "text-orange-300"}`}>
            {fmtDiff(adjusted.safePrice - result.safePrice, "万円")}
          </p>
        </div>
        <div>
          <p className="text-[11px] text-slate-400">月の返済</p>
          <p className="text-lg font-black tabular-nums text-white">{adjusted.monthlyPayment.toLocaleString()}万円</p>
          <p className={`text-[11px] font-bold ${adjusted.monthlyPayment <= result.monthlyPayment ? "text-emerald-300" : "text-orange-300"}`}>
            {fmtDiff(adjusted.monthlyPayment - result.monthlyPayment, "万円", 1)}
          </p>
        </div>
        <div>
          <p className="text-[11px] text-slate-400">住居費負担率</p>
          <p className="text-lg font-black tabular-nums text-white">{adjusted.burdenRate.toFixed(1)}%</p>
          <p className={`text-[11px] font-bold ${adjusted.burdenRate <= result.burdenRate ? "text-emerald-300" : "text-orange-300"}`}>
            {fmtDiff(adjusted.burdenRate - result.burdenRate, "pt", 1)}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          disabled={!changed}
          onClick={() => onApply(draft)}
          className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-40"
        >
          この条件を診断結果に反映する
        </button>
        <button
          type="button"
          disabled={!changed}
          onClick={() => setDraft(input)}
          className="text-xs font-bold text-slate-400 hover:text-slate-200 disabled:opacity-40"
        >
          診断時の値に戻す
        </button>
      </div>
    </section>
  );
}
