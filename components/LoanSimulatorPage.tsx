"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

function calcMonthly(loan: number, ratePercent: number, years: number): number {
  if (ratePercent === 0) return loan / (years * 12);
  const r = ratePercent / 100 / 12;
  const n = years * 12;
  const factor = Math.pow(1 + r, n);
  return (loan * r * factor) / (factor - 1);
}

function fmt(val: number, decimals = 0): string {
  return val.toLocaleString("ja-JP", { maximumFractionDigits: decimals });
}

function fmtMan(val: number): string {
  return `${fmt(Math.round(val / 10000))}万円`;
}

export default function LoanSimulatorPage() {
  const [loanMan, setLoanMan] = useState(3000); // 万円
  const [rate, setRate] = useState(0.5); // %
  const [years, setYears] = useState(35);
  const [incomeMan, setIncomeMan] = useState(0); // 万円/年 (任意)

  const loanYen = loanMan * 10000;

  const result = useMemo(() => {
    const monthly = calcMonthly(loanYen, rate, years);
    const total = monthly * years * 12;
    const interest = total - loanYen;
    const burdenRate = incomeMan > 0 ? (monthly * 12) / (incomeMan * 10000) * 100 : null;
    return { monthly, total, interest, burdenRate };
  }, [loanYen, rate, years, incomeMan]);

  const scenarios = useMemo(() => {
    return [0, 0.5, 1.0, 2.0].map((delta) => {
      const r = rate + delta;
      const monthly = calcMonthly(loanYen, r, years);
      const total = monthly * years * 12;
      const interest = total - loanYen;
      return { r, monthly, total, interest };
    });
  }, [loanYen, rate, years]);

  const burdenColor =
    result.burdenRate == null
      ? ""
      : result.burdenRate < 20
      ? "text-green-600"
      : result.burdenRate < 25
      ? "text-yellow-600"
      : result.burdenRate < 30
      ? "text-orange-500"
      : "text-red-600";

  const burdenLabel =
    result.burdenRate == null
      ? ""
      : result.burdenRate < 20
      ? "安全"
      : result.burdenRate < 25
      ? "やや安全"
      : result.burdenRate < 30
      ? "やや注意"
      : result.burdenRate < 35
      ? "要注意"
      : "危険";

  return (
    <main className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">ホーム</Link>
          <span>›</span>
          <span>住宅ローン返済シミュレーター</span>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-4 py-8">
        {/* タイトル */}
        <div className="text-center mb-8">
          <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
            🏦 無料シミュレーター
          </div>
          <h1 className="text-2xl font-black text-gray-900 mb-2">
            住宅ローン返済シミュレーター
          </h1>
          <p className="text-sm text-gray-500">
            借入額・金利・返済期間を入力して、月返済額と総返済額を即計算
          </p>
        </div>

        {/* 入力フォーム */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 mb-6 space-y-6">

          {/* 借入額 */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-gray-700">借入額</label>
              <span className="text-xl font-black text-blue-700">{fmt(loanMan)}万円</span>
            </div>
            <input
              type="range"
              min={500}
              max={15000}
              step={100}
              value={loanMan}
              onChange={(e) => setLoanMan(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>500万</span>
              <span>1億5,000万</span>
            </div>
            <div className="flex gap-2 mt-2 flex-wrap">
              {[1000, 2000, 3000, 4000, 5000, 6000].map((v) => (
                <button
                  key={v}
                  onClick={() => setLoanMan(v)}
                  className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                    loanMan === v
                      ? "bg-blue-600 text-white border-blue-600"
                      : "border-gray-300 text-gray-600 hover:border-blue-400"
                  }`}
                >
                  {v / 10000 >= 1 ? `${v / 10000}億` : `${v}万`}
                </button>
              ))}
            </div>
          </div>

          {/* 金利 */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-gray-700">年利（金利）</label>
              <span className="text-xl font-black text-blue-700">{rate.toFixed(2)}%</span>
            </div>
            <input
              type="range"
              min={0.1}
              max={4.0}
              step={0.05}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>0.1%</span>
              <span>4.0%</span>
            </div>
            <div className="flex gap-2 mt-2 flex-wrap">
              {[0.5, 0.7, 1.0, 1.5, 2.0, 3.0].map((v) => (
                <button
                  key={v}
                  onClick={() => setRate(v)}
                  className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                    rate === v
                      ? "bg-blue-600 text-white border-blue-600"
                      : "border-gray-300 text-gray-600 hover:border-blue-400"
                  }`}
                >
                  {v}%
                </button>
              ))}
            </div>
          </div>

          {/* 返済期間 */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-gray-700">返済期間</label>
              <span className="text-xl font-black text-blue-700">{years}年</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {[10, 15, 20, 25, 30, 35].map((y) => (
                <button
                  key={y}
                  onClick={() => setYears(y)}
                  className={`flex-1 min-w-[52px] text-sm py-2 rounded-xl border transition-colors font-bold ${
                    years === y
                      ? "bg-blue-600 text-white border-blue-600"
                      : "border-gray-300 text-gray-600 hover:border-blue-400"
                  }`}
                >
                  {y}年
                </button>
              ))}
            </div>
          </div>

          {/* 年収（任意） */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-gray-700">
                年収 <span className="text-xs font-normal text-gray-400">（返済比率の計算に使用・任意）</span>
              </label>
              <span className="text-base font-black text-gray-700">
                {incomeMan > 0 ? `${fmt(incomeMan)}万円` : "未入力"}
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={2000}
              step={50}
              value={incomeMan}
              onChange={(e) => setIncomeMan(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>未入力</span>
              <span>2,000万</span>
            </div>
          </div>
        </div>

        {/* 結果カード */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 mb-6">
          <h2 className="text-sm font-bold text-gray-500 mb-4">📊 計算結果</h2>

          <div className="text-center mb-5">
            <p className="text-xs text-gray-500 mb-1">月返済額（元利均等）</p>
            <p className="text-4xl font-black text-blue-700">
              {fmtMan(result.monthly)}
              <span className="text-lg font-bold text-gray-500">/月</span>
            </p>
            {result.burdenRate != null && (
              <p className={`text-sm font-bold mt-1 ${burdenColor}`}>
                返済比率 {result.burdenRate.toFixed(1)}%（{burdenLabel}）
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <p className="text-xs text-gray-500 mb-1">総返済額</p>
              <p className="text-lg font-black text-gray-800">{fmtMan(result.total)}</p>
            </div>
            <div className="bg-red-50 rounded-xl p-3 text-center">
              <p className="text-xs text-gray-500 mb-1">うち利息</p>
              <p className="text-lg font-black text-red-600">{fmtMan(result.interest)}</p>
            </div>
          </div>

          {result.burdenRate != null && (
            <div className="mt-3 bg-gray-50 rounded-xl p-3">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>返済比率の目安</span>
                <span className={`font-bold ${burdenColor}`}>{result.burdenRate.toFixed(1)}% — {burdenLabel}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all ${
                    result.burdenRate < 20
                      ? "bg-green-500"
                      : result.burdenRate < 25
                      ? "bg-yellow-400"
                      : result.burdenRate < 30
                      ? "bg-orange-500"
                      : "bg-red-500"
                  }`}
                  style={{ width: `${Math.min(100, result.burdenRate / 40 * 100)}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>0%</span>
                <span className="text-green-600">20%</span>
                <span className="text-yellow-600">25%</span>
                <span className="text-orange-500">30%</span>
                <span className="text-red-600">35%+</span>
                <span>40%</span>
              </div>
            </div>
          )}
        </div>

        {/* 金利上昇シナリオ比較 */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 mb-6">
          <h2 className="text-sm font-bold text-gray-700 mb-1">⚠️ 金利上昇シナリオ比較</h2>
          <p className="text-xs text-gray-400 mb-4">変動金利選択時に知っておきたいリスク</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-2 text-xs text-gray-500 font-bold">金利</th>
                  <th className="text-right py-2 text-xs text-gray-500 font-bold">月返済額</th>
                  <th className="text-right py-2 text-xs text-gray-500 font-bold">総返済額</th>
                  <th className="text-right py-2 text-xs text-gray-500 font-bold">利息総計</th>
                </tr>
              </thead>
              <tbody>
                {scenarios.map((s, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-50 ${i === 0 ? "bg-blue-50" : ""}`}
                  >
                    <td className={`py-2 font-bold ${i === 0 ? "text-blue-700" : "text-gray-700"}`}>
                      {s.r.toFixed(2)}%{i === 0 ? " ← 現在" : i === 1 ? " (+0.5%)" : i === 2 ? " (+1.0%)" : " (+2.0%)"}
                    </td>
                    <td className={`text-right py-2 font-bold ${i === 0 ? "text-blue-700" : "text-gray-800"}`}>
                      {fmtMan(s.monthly)}/月
                    </td>
                    <td className="text-right py-2 text-gray-600">{fmtMan(s.total)}</td>
                    <td className="text-right py-2 text-red-500">{fmtMan(s.interest)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※変動金利は5年ごとに見直し。金利が上昇しても125%ルールにより急激な月返済額増加は抑えられますが、総返済額は大きく変わります。
          </p>
        </div>

        {/* モゲチェックCTA */}
        <div className="border-2 border-amber-400 bg-amber-50 rounded-2xl p-5 mb-6">
          <p className="text-sm font-black text-amber-800 mb-1">💡 最安金利で借りると、利息が大幅に減ります</p>
          <p className="text-xs text-amber-700 mb-3">
            上の表を見ると、金利0.5%の違いで利息が{fmtMan(scenarios[1].interest - scenarios[0].interest)}も変わります。
            まず複数銀行を無料で比較しましょう。
          </p>
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4AZGC3+F9J44Y+3SUE+15RCDE"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block text-center bg-amber-500 hover:bg-amber-600 text-white font-black text-sm px-6 py-3 rounded-xl transition-colors"
          >
            ✨ 無料でローン金利を一括比較する →
          </a>
          <p className="text-xs text-amber-600 text-center mt-2">累計100万件超の診断実績 | 提携金融機関50行以上</p>
          <img width={1} height={1} src="https://www12.a8.net/0.gif?a8mat=4AZGC3+F9J44Y+3SUE+15RCDE" alt="" style={{ display: "none" }} />
        </div>

        {/* 診断ツールCTA */}
        <div className="bg-blue-600 rounded-2xl p-6 text-center text-white mb-8">
          <p className="text-base font-black mb-1">「安全に買える価格」も確認しませんか？</p>
          <p className="text-xs mb-4 opacity-90">年収・頭金・生活費から、無理のない購入価格を診断します。</p>
          <Link
            href="/mansion"
            className="inline-block bg-white text-blue-700 font-black text-sm px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
          >
            マンション購入診断ツールを使う →
          </Link>
        </div>

        {/* 計算方式の説明 */}
        <div className="bg-white rounded-2xl border border-gray-100 p-4 mb-6">
          <h3 className="text-sm font-bold text-gray-700 mb-2">📝 計算方式について</h3>
          <ul className="text-xs text-gray-500 space-y-1">
            <li>• 元利均等返済（毎月の返済額が一定）で計算しています</li>
            <li>• 返済比率 = 年間ローン返済額 ÷ 年収 × 100</li>
            <li>• 管理費・修繕積立金・固定資産税は含まれていません</li>
            <li>• 変動金利の場合、将来の金利変動により月返済額は変わります</li>
          </ul>
        </div>

        {/* 関連記事 */}
        <section>
          <h2 className="text-sm font-bold text-gray-700 mb-3">関連記事</h2>
          <div className="space-y-2">
            <Link href="/articles/jutaku-loan-kinri-hikaku" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">🏦</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">住宅ローン金利の比較方法【2026年最新】ネット銀行vs都市銀行</span>
            </Link>
            <Link href="/articles/jutaku-loan-hendokinri-koteikinri" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">📊</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">住宅ローンは変動金利と固定金利どっちがいい？2026年版</span>
            </Link>
            <Link href="/articles/juutaku-loan-burden-rate" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">📐</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">住宅ローンの返済比率は何%が安全？年収別の目安と限界ライン</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
