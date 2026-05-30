"use client";

import { useState, useMemo } from "react";

interface Props {
  loanAmount: number;    // 借入額（万円）
  repaymentYears: number;
  defaultRate: number;   // 現在の金利（%）
}

/** 元利均等返済の月返済額（万円） */
function monthlyPayment(loan: number, annualRatePct: number, years: number): number {
  if (annualRatePct === 0) return loan / (years * 12);
  const r = annualRatePct / 100 / 12;
  const n = years * 12;
  const factor = Math.pow(1 + r, n);
  return (loan * r * factor) / (factor - 1);
}

const VARIABLE_OPTIONS = [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1.0, 1.2, 1.5];
const RISE_OPTIONS     = [1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 5.0];
const FIXED_OPTIONS    = [1.2, 1.5, 1.8, 2.0, 2.2, 2.5, 3.0];

const selectCls = "w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2.5 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-500";

export default function RateTypeSimulator({ loanAmount, repaymentYears, defaultRate }: Props) {
  const clampedDefault = VARIABLE_OPTIONS.includes(defaultRate)
    ? defaultRate
    : VARIABLE_OPTIONS.reduce((prev, cur) =>
        Math.abs(cur - defaultRate) < Math.abs(prev - defaultRate) ? cur : prev
      );

  const [varRate,  setVarRate]  = useState(clampedDefault);
  const [riseRate, setRiseRate] = useState(Math.min(3.0, Math.max(2.0, defaultRate + 1.5)));
  const [fixRate,  setFixRate]  = useState(1.8);

  const scenarios = useMemo(() => {
    const calc = (rate: number) => {
      const monthly = monthlyPayment(loanAmount, rate, repaymentYears);
      const total   = monthly * repaymentYears * 12;
      const interest = total - loanAmount;
      return {
        monthly:  Math.round(monthly  * 10) / 10,
        total:    Math.round(total    * 10) / 10,
        interest: Math.round(interest * 10) / 10,
      };
    };
    return {
      variable: calc(varRate),
      rise:     calc(riseRate),
      fixed:    calc(fixRate),
    };
  }, [loanAmount, repaymentYears, varRate, riseRate, fixRate]);

  const diffVsFixed = Math.round(
    (scenarios.fixed.interest - scenarios.variable.interest) * 10
  ) / 10;
  const diffRiseVsFixed = Math.round(
    (scenarios.rise.interest - scenarios.fixed.interest) * 10
  ) / 10;

  const cols = [
    { key: "variable", label: `変動（現在）`,       rate: varRate,  setRate: setVarRate,  opts: VARIABLE_OPTIONS, colorBorder: "border-blue-500/40",  colorBg: "bg-blue-500/10",  colorText: "text-blue-400",  colorBar: "bg-blue-400"  },
    { key: "rise",     label: `変動（上昇ケース）`,  rate: riseRate, setRate: setRiseRate, opts: RISE_OPTIONS,     colorBorder: "border-red-500/40",   colorBg: "bg-red-500/10",   colorText: "text-red-400",   colorBar: "bg-red-400"   },
    { key: "fixed",    label: `固定金利`,           rate: fixRate,  setRate: setFixRate,  opts: FIXED_OPTIONS,    colorBorder: "border-green-500/40", colorBg: "bg-green-500/10", colorText: "text-green-400", colorBar: "bg-green-400" },
  ] as const;

  const maxInterest = Math.max(
    scenarios.variable.interest,
    scenarios.rise.interest,
    scenarios.fixed.interest,
  );

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800 overflow-hidden">
      {/* ヘッダー */}
      <div className="px-6 py-4 border-b border-slate-700 bg-slate-900/50">
        <h2 className="text-base font-bold text-white">変動 vs 固定金利シミュレーター</h2>
        <p className="text-xs text-slate-400 mt-0.5">
          借入額 <span className="font-semibold text-slate-200">{loanAmount.toLocaleString()}万円</span> ／
          返済期間 <span className="font-semibold text-slate-200">{repaymentYears}年</span> でのシナリオ比較
        </p>
      </div>

      <div className="px-6 py-5 space-y-5">
        {/* 金利セレクタ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {cols.map(({ key, label, rate, setRate, opts }) => (
            <div key={key} className="space-y-1">
              <label className="text-xs font-semibold text-slate-400">{label}</label>
              <select
                value={rate}
                onChange={(e) => setRate(parseFloat(e.target.value))}
                className={selectCls}
              >
                {opts.map((o) => (
                  <option key={o} value={o}>{o}%</option>
                ))}
              </select>
            </div>
          ))}
        </div>

        {/* 比較カード */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {cols.map(({ key, label, rate, colorBorder, colorBg, colorText, colorBar }) => {
            const s = scenarios[key];
            const barW = maxInterest > 0 ? (s.interest / maxInterest) * 100 : 0;
            return (
              <div key={key} className={`rounded-xl border-2 p-4 space-y-3 ${colorBorder} ${colorBg}`}>
                <div>
                  <p className={`text-xs font-bold ${colorText}`}>{label}</p>
                  <p className="text-lg font-extrabold text-slate-100 mt-0.5">
                    {rate}%
                  </p>
                </div>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">月返済額</span>
                    <span className="font-bold text-slate-100">{s.monthly.toLocaleString()}万円/月</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">総返済額</span>
                    <span className="font-semibold text-slate-200">{s.total.toLocaleString()}万円</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">利息総額</span>
                    <span className={`font-bold ${colorText}`}>{s.interest.toLocaleString()}万円</span>
                  </div>
                </div>
                {/* 利息バー */}
                <div className="h-1.5 bg-slate-600/50 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${colorBar}`}
                    style={{ width: `${barW}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* インサイトサマリー */}
        <div className="space-y-2">
          <div className={`rounded-xl p-4 border ${diffVsFixed >= 0 ? "bg-blue-500/10 border-blue-500/20" : "bg-green-500/10 border-green-500/20"}`}>
            <p className="text-sm font-bold text-slate-100">
              {diffVsFixed >= 0
                ? `変動（現在）を維持すると、固定より利息が ${diffVsFixed.toLocaleString()}万円 少ない`
                : `固定の方が変動（現在）より利息が ${Math.abs(diffVsFixed).toLocaleString()}万円 少ない`}
            </p>
            <p className="text-xs text-slate-400 mt-1">
              ただし変動金利は将来上昇する可能性があります。
              上昇ケース（{riseRate}%）まで上がると、利息が現在より
              <span className="font-semibold text-red-400"> +{Math.round((scenarios.rise.interest - scenarios.variable.interest) * 10) / 10}万円 </span>
              増加します。
            </p>
          </div>

          {diffRiseVsFixed > 0 && (
            <div className="rounded-xl p-3 bg-yellow-500/10 border border-yellow-500/20 text-xs text-yellow-300">
              ⚠️ 変動金利が <span className="font-bold">{riseRate}%</span> まで上昇すると、
              固定より利息が <span className="font-bold">{diffRiseVsFixed.toLocaleString()}万円 多く</span> なります。
              金利上昇リスクが心配な場合は固定への切り替えを検討してください。
            </div>
          )}
        </div>

        <p className="text-xs text-slate-600">
          ※ 変動金利の「上昇ケース」は将来の金利を予測するものではありません。参考値としてご利用ください。
        </p>
      </div>
    </div>
  );
}
