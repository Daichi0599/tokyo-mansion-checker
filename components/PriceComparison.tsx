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
  safe:     { label: "余裕あり",  bg: "bg-emerald-50", border: "border-emerald-300", text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-800", gauge: "bg-emerald-400" },
  caution:  { label: "安全圏",   bg: "bg-blue-50",    border: "border-blue-300",    text: "text-blue-700",    badge: "bg-blue-100 text-blue-800",    gauge: "bg-blue-400"    },
  warning:  { label: "やや注意", bg: "bg-yellow-50",  border: "border-yellow-300",  text: "text-yellow-700",  badge: "bg-yellow-100 text-yellow-800",  gauge: "bg-yellow-400"  },
  danger:   { label: "リスクあり", bg: "bg-orange-50", border: "border-orange-300", text: "text-orange-700",  badge: "bg-orange-100 text-orange-800",  gauge: "bg-orange-400"  },
  critical: { label: "危険",     bg: "bg-red-50",     border: "border-red-300",     text: "text-red-700",     badge: "bg-red-100 text-red-800",     gauge: "bg-red-500"     },
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
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
        <h2 className="text-base font-bold text-gray-800">価格を比べてみる</h2>
        <p className="text-xs text-gray-500 mt-0.5">購入価格を入力して月返済・負担率を比較できます</p>
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
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-right font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400"
                min={100}
                step={100}
              />
              <span className="text-xs text-gray-500 whitespace-nowrap">万円</span>
              {prices.length > 1 && (
                <button
                  onClick={() => removePrice(i)}
                  className="text-gray-400 hover:text-red-400 transition-colors text-lg leading-none px-1"
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
            className="text-xs text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1 transition-colors"
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
                  <span className="text-lg font-extrabold text-gray-900">
                    {m.price.toLocaleString()}
                    <span className="text-xs font-normal text-gray-500 ml-1">万円</span>
                  </span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${c.badge}`}>
                    {c.label}
                  </span>
                </div>

                <div className="space-y-1 text-xs text-gray-600">
                  <div className="flex justify-between">
                    <span>借入額</span>
                    <span className="font-semibold text-gray-800">{m.loanAmount.toLocaleString()} 万円</span>
                  </div>
                  <div className="flex justify-between">
                    <span>月返済</span>
                    <span className="font-semibold text-gray-800">{m.monthlyPayment.toLocaleString()} 万円/月</span>
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
