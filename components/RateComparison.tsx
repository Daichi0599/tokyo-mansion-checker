"use client";

import { useState, useMemo } from "react";
import { calcPriceMetrics } from "@/lib/calculator";
import { DiagnosisInput, DiagnosisLevel, PriceMetrics } from "@/types";

interface Props {
  input: DiagnosisInput;
  safePrice: number;
}

const RATE_OPTIONS = [0.1, 0.3, 0.5, 0.7, 1.0, 1.2, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 5.0];

const levelConfig: Record<DiagnosisLevel, {
  label: string;
  bg: string;
  border: string;
  text: string;
  badge: string;
  gauge: string;
}> = {
  safe:     { label: "余裕あり",   bg: "bg-emerald-50", border: "border-emerald-300", text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-800", gauge: "bg-emerald-400" },
  caution:  { label: "安全圏",    bg: "bg-blue-50",    border: "border-blue-300",    text: "text-blue-700",    badge: "bg-blue-100 text-blue-800",    gauge: "bg-blue-400"    },
  warning:  { label: "やや注意",  bg: "bg-yellow-50",  border: "border-yellow-300",  text: "text-yellow-700",  badge: "bg-yellow-100 text-yellow-800", gauge: "bg-yellow-400"  },
  danger:   { label: "リスクあり", bg: "bg-orange-50",  border: "border-orange-300",  text: "text-orange-700",  badge: "bg-orange-100 text-orange-800", gauge: "bg-orange-400"  },
  critical: { label: "危険",      bg: "bg-red-50",     border: "border-red-300",     text: "text-red-700",     badge: "bg-red-100 text-red-800",     gauge: "bg-red-500"     },
};

const colsClass: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

function getDefaultRates(current: number): number[] {
  const candidates = RATE_OPTIONS.filter((r) => r >= current).slice(0, 3);
  const withCurrent = RATE_OPTIONS.includes(current)
    ? [current, ...candidates.filter((r) => r !== current)]
    : [current, ...candidates];
  return withCurrent.slice(0, 4);
}

export default function RateComparison({ input, safePrice }: Props) {
  const [rates, setRates] = useState<number[]>(() => getDefaultRates(input.interestRate));

  const metrics: (PriceMetrics & { rate: number })[] = useMemo(
    () =>
      rates.map((rate) => ({
        rate,
        ...calcPriceMetrics(safePrice, { ...input, interestRate: rate }),
      })),
    [rates, input, safePrice]
  );

  const handleRateChange = (i: number, val: string) => {
    const next = [...rates];
    next[i] = parseFloat(val);
    setRates(next);
  };

  const addRate = () => {
    if (rates.length >= 4) return;
    const unused = RATE_OPTIONS.find((r) => !rates.includes(r)) ?? 3.0;
    setRates([...rates, unused]);
  };

  const removeRate = (i: number) => {
    if (rates.length <= 1) return;
    setRates(rates.filter((_, idx) => idx !== i));
  };

  const cols = colsClass[Math.min(rates.length, 4)] ?? colsClass[4];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
        <h2 className="text-base font-bold text-gray-800">金利シナリオを比べてみる</h2>
        <p className="text-xs text-gray-500 mt-0.5">
          安全購入価格 {safePrice.toLocaleString()} 万円 で金利が変わると月返済がどう変わるか確認できます
        </p>
      </div>

      <div className="px-6 py-4 space-y-4">
        {/* 金利選択欄 */}
        <div className={`grid ${cols} gap-3`}>
          {rates.map((rate, i) => (
            <div key={i} className="flex items-center gap-1">
              <select
                value={rate}
                onChange={(e) => handleRateChange(i, e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {RATE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt} %
                  </option>
                ))}
              </select>
              {rates.length > 1 && (
                <button
                  onClick={() => removeRate(i)}
                  className="text-gray-400 hover:text-red-400 transition-colors text-lg leading-none px-1"
                  aria-label="削除"
                >
                  ×
                </button>
              )}
            </div>
          ))}
        </div>

        {rates.length < 4 && (
          <button
            onClick={addRate}
            className="text-xs text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1 transition-colors"
          >
            <span className="text-base leading-none">+</span> シナリオを追加
          </button>
        )}

        {/* 比較カード */}
        <div className={`grid ${cols} gap-3`}>
          {metrics.map((m, i) => {
            const c = levelConfig[m.level];
            const gaugeWidth = Math.min((m.burdenRate / 50) * 100, 100);
            const isCurrent = m.rate === input.interestRate;
            return (
              <div
                key={i}
                className={`rounded-xl border-2 ${c.border} ${c.bg} p-4 space-y-3 ${isCurrent ? "ring-2 ring-blue-400 ring-offset-1" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-extrabold text-gray-900">
                    {m.rate} %
                    {isCurrent && (
                      <span className="ml-1.5 text-xs font-normal text-blue-600">現在</span>
                    )}
                  </span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${c.badge}`}>
                    {c.label}
                  </span>
                </div>

                <div className="space-y-1 text-xs text-gray-600">
                  <div className="flex justify-between">
                    <span>月返済</span>
                    <span className="font-semibold text-gray-800">{m.monthlyPayment.toLocaleString()} 万円/月</span>
                  </div>
                  <div className="flex justify-between">
                    <span>年間返済</span>
                    <span className="font-semibold text-gray-800">{Math.round(m.monthlyPayment * 12 * 10) / 10} 万円/年</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">負担率</span>
                    <span className={`text-sm font-extrabold ${c.text}`}>
                      {m.burdenRate.toFixed(1)}%
                    </span>
                  </div>
                  <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
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
