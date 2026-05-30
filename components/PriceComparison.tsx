"use client";

import { useState, useMemo } from "react";
import { calcPriceMetrics } from "@/lib/calculator";
import { DiagnosisInput, DiagnosisLevel, PriceMetrics } from "@/types";

interface Props {
  input: DiagnosisInput;
  defaultPrices: number[];
}

const levelConfig: Record<DiagnosisLevel, {
  label: string;
  bg: string;
  border: string;
  text: string;
  badge: string;
  gauge: string;
}> = {
  safe:     { label: "余裕あり",  bg: "bg-emerald-500/10", border: "border-emerald-500/40", text: "text-emerald-400", badge: "bg-emerald-500/20 text-emerald-300", gauge: "bg-emerald-400" },
  caution:  { label: "安全圏",   bg: "bg-blue-500/10",    border: "border-blue-500/40",    text: "text-blue-400",    badge: "bg-blue-500/20 text-blue-300",    gauge: "bg-blue-400"    },
  warning:  { label: "やや注意", bg: "bg-yellow-500/10",  border: "border-yellow-500/40",  text: "text-yellow-400",  badge: "bg-yellow-500/20 text-yellow-300",  gauge: "bg-yellow-400"  },
  danger:   { label: "リスクあり", bg: "bg-orange-500/10", border: "border-orange-500/40", text: "text-orange-400",  badge: "bg-orange-500/20 text-orange-300",  gauge: "bg-orange-400"  },
  critical: { label: "危険",     bg: "bg-red-500/10",     border: "border-red-500/40",     text: "text-red-400",     badge: "bg-red-500/20 text-red-300",     gauge: "bg-red-500"     },
};

const colsClass: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

export default function PriceComparison({ input, defaultPrices }: Props) {
  const [prices, setPrices] = useState<number[]>(defaultPrices);
  const [inputValues, setInputValues] = useState<string[]>(defaultPrices.map(String));

  const metrics: PriceMetrics[] = useMemo(
    () => prices.map((p) => calcPriceMetrics(p, input)),
    [prices, input]
  );

  const handleChange = (i: number, value: string) => {
    const next = [...inputValues];
    next[i] = value;
    setInputValues(next);
    const num = parseInt(value.replace(/,/g, ""), 10);
    if (!isNaN(num) && num > 0) {
      const nextPrices = [...prices];
      nextPrices[i] = num;
      setPrices(nextPrices);
    }
  };

  const addPrice = () => {
    if (prices.length >= 4) return;
    const last = prices[prices.length - 1] ?? 5000;
    const next = Math.round(last * 1.2 / 100) * 100;
    setPrices([...prices, next]);
    setInputValues([...inputValues, String(next)]);
  };

  const removePrice = (i: number) => {
    if (prices.length <= 1) return;
    setPrices(prices.filter((_, idx) => idx !== i));
    setInputValues(inputValues.filter((_, idx) => idx !== i));
  };

  const cols = colsClass[Math.min(prices.length, 4)] ?? colsClass[4];

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-700 bg-slate-900/50">
        <h2 className="text-base font-bold text-white">価格を比べてみる</h2>
        <p className="text-xs text-slate-400 mt-0.5">購入価格を入力して月返済・負担率を比較できます</p>
      </div>

      <div className="px-6 py-4 space-y-4">
        {/* 価格入力欄 */}
        <div className={`grid ${cols} gap-3`}>
          {prices.map((_, i) => (
            <div key={i} className="flex items-center gap-1">
              <input
                type="number"
                value={inputValues[i]}
                onChange={(e) => handleChange(i, e.target.value)}
                className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-sm text-right font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                min={100}
                step={100}
              />
              <span className="text-xs text-slate-400 whitespace-nowrap">万円</span>
              {prices.length > 1 && (
                <button
                  onClick={() => removePrice(i)}
                  className="text-slate-500 hover:text-red-400 transition-colors text-lg w-10 h-10 flex items-center justify-center rounded-lg shrink-0"
                  aria-label="削除"
                >
                  ×
                </button>
              )}
            </div>
          ))}
        </div>

        {prices.length < 4 && (
          <button
            onClick={addPrice}
            className="text-xs text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 transition-colors py-3 px-1"
          >
            <span className="text-base leading-none">+</span> 価格を追加
          </button>
        )}

        {/* 比較カード */}
        <div className={`grid ${cols} gap-3`}>
          {metrics.map((m, i) => {
            const c = levelConfig[m.level];
            const gaugeWidth = Math.min((m.burdenRate / 50) * 100, 100);
            return (
              <div key={i} className={`rounded-xl border-2 ${c.border} ${c.bg} p-4 space-y-3`}>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-extrabold text-slate-100">
                    {m.price.toLocaleString()}
                    <span className="text-xs font-normal text-slate-400 ml-1">万円</span>
                  </span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${c.badge}`}>
                    {c.label}
                  </span>
                </div>

                <div className="space-y-1 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span>借入額</span>
                    <span className="font-semibold text-slate-100">{m.loanAmount.toLocaleString()} 万円</span>
                  </div>
                  <div className="flex justify-between">
                    <span>月返済</span>
                    <span className="font-semibold text-slate-100">{m.monthlyPayment.toLocaleString()} 万円/月</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400">負担率</span>
                    <span className={`text-sm font-extrabold ${c.text}`}>
                      {m.burdenRate.toFixed(1)}%
                    </span>
                  </div>
                  <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${c.gauge}`}
                      style={{ width: `${gaugeWidth}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
