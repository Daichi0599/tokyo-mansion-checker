"use client";

import { useState } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { TOKYO_AREAS, findArea } from "@/lib/areaData";
import { calcAssetScore, AssetScoreInput, AssetScoreResult } from "@/lib/assetScore";
import { calcPriceMetrics } from "@/lib/calculator";
import { DiagnosisInput, DiagnosisLevel } from "@/types";

interface Props {
  input: DiagnosisInput;
  safePrice: number;
}

const DIRECTION_OPTIONS: AssetScoreInput["direction"][] = [
  "南", "南東", "南西", "東", "西", "北", "その他",
];

const GRADE_CONFIG = {
  S: { bg: "bg-purple-50", border: "border-purple-400", text: "text-purple-700", badge: "bg-purple-100 text-purple-700", bar: "bg-purple-500" },
  A: { bg: "bg-blue-50",   border: "border-blue-400",   text: "text-blue-700",   badge: "bg-blue-100 text-blue-700",   bar: "bg-blue-500"   },
  B: { bg: "bg-green-50",  border: "border-green-400",  text: "text-green-700",  badge: "bg-green-100 text-green-700", bar: "bg-green-500"  },
  C: { bg: "bg-yellow-50", border: "border-yellow-400", text: "text-yellow-700", badge: "bg-yellow-100 text-yellow-700",bar: "bg-yellow-500" },
  D: { bg: "bg-red-50",    border: "border-red-400",    text: "text-red-700",    badge: "bg-red-100 text-red-700",     bar: "bg-red-500"    },
};

const LEVEL_LABEL: Record<DiagnosisLevel, { label: string; text: string; bg: string; border: string }> = {
  safe:     { label: "余裕あり ✅",   text: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-300" },
  caution:  { label: "安全圏 🟢",     text: "text-blue-700",    bg: "bg-blue-50",    border: "border-blue-300"    },
  warning:  { label: "やや注意 ⚠️",   text: "text-yellow-700",  bg: "bg-yellow-50",  border: "border-yellow-300"  },
  danger:   { label: "リスクあり 🔶", text: "text-orange-700",  bg: "bg-orange-50",  border: "border-orange-300"  },
  critical: { label: "危険 🚨",       text: "text-red-700",     bg: "bg-red-50",     border: "border-red-300"     },
};

interface FormState {
  price:       string;
  sqm:         string;
  area:        string;
  buildingAge: string;
  walkMinutes: string;
  floor:       string;
  direction:   AssetScoreInput["direction"];
}

interface DiagnosisState {
  price: number;
  sqm:   number;
  score: AssetScoreResult;
}

const sortedAreas = [...TOKYO_AREAS].sort((a, b) => b.avgPricePerSqm - a.avgPricePerSqm);

export default function PropertyDiagnosis({ input, safePrice }: Props) {
  const [form, setForm] = useState<FormState>({
    price: "", sqm: "", area: "世田谷区",
    buildingAge: "", walkMinutes: "", floor: "", direction: "南",
  });
  const [result, setResult] = useState<DiagnosisState | null>(null);

  const set = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleDiagnose = () => {
    const priceNum = parseInt(form.price);
    const sqmNum   = parseInt(form.sqm);
    if (!priceNum || !sqmNum) return;

    const scoreInput: AssetScoreInput = {
      area:        form.area,
      walkMinutes: parseInt(form.walkMinutes) || 10,
      buildingAge: parseInt(form.buildingAge) || 5,
      floor:       parseInt(form.floor)       || 3,
      direction:   form.direction,
    };

    const score = calcAssetScore(scoreInput);
    setResult({ price: priceNum, sqm: sqmNum, score });

    sendGAEvent("event", "property_diagnosis", {
      area: form.area,
      asset_grade: score.grade,
      price: priceNum,
    });
  };

  const metrics     = result ? calcPriceMetrics(result.price, input) : null;
  const futurePrice = result ? Math.round(result.price * result.score.futureRatio) : null;
  const areaData    = result ? findArea(form.area) : null;
  const pricePerSqm = result ? Math.round(result.price / result.sqm) : null;
  const areaAvgPerSqm = areaData?.avgPricePerSqm ?? null;
  const priceVsAvg  = pricePerSqm && areaAvgPerSqm
    ? Math.round(((pricePerSqm - areaAvgPerSqm) / areaAvgPerSqm) * 100)
    : null;

  const isDisabled = !form.price || !form.sqm;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      {/* ヘッダー */}
      <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
        <h2 className="text-base font-bold text-gray-800">🔍 気になる物件を診断する</h2>
        <p className="text-xs text-gray-500 mt-0.5">
          SUUMOなどで見つけた物件のスペックを入力 → 予算内か・資産性スコアを即確認
        </p>
      </div>

      <div className="px-6 py-5 space-y-4">
        {/* 入力フォーム */}
        <div className="grid grid-cols-2 gap-3">
          {/* 物件価格 */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-700">
              物件価格（万円）<span className="text-red-500 ml-0.5">*</span>
            </label>
            <input
              type="number" value={form.price} onChange={set("price")}
              placeholder="例: 7500" min={100} step={100}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* 広さ */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-700">
              広さ（㎡）<span className="text-red-500 ml-0.5">*</span>
            </label>
            <input
              type="number" value={form.sqm} onChange={set("sqm")}
              placeholder="例: 70" min={20} step={1}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* エリア */}
          <div className="col-span-2 space-y-1">
            <label className="text-xs font-semibold text-gray-700">エリア（区）</label>
            <select
              value={form.area} onChange={set("area")}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {sortedAreas.map((a) => (
                <option key={a.name} value={a.name}>
                  {a.name}（相場 {a.avgPricePerSqm}万円/㎡）
                </option>
              ))}
            </select>
          </div>

          {/* 築年数 */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-700">築年数（年）</label>
            <input
              type="number" value={form.buildingAge} onChange={set("buildingAge")}
              placeholder="例: 5" min={0} max={60}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* 駅徒歩 */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-700">駅徒歩（分）</label>
            <input
              type="number" value={form.walkMinutes} onChange={set("walkMinutes")}
              placeholder="例: 5" min={1} max={30}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* 階数 */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-700">階数</label>
            <input
              type="number" value={form.floor} onChange={set("floor")}
              placeholder="例: 8" min={1} max={60}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* 向き */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-700">向き</label>
            <select
              value={form.direction}
              onChange={(e) => setForm((p) => ({ ...p, direction: e.target.value as AssetScoreInput["direction"] }))}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {DIRECTION_OPTIONS.map((d) => (
                <option key={d} value={d}>{d}向き</option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleDiagnose}
          disabled={isDisabled}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-colors text-sm"
        >
          この物件を診断する
        </button>

        {/* 診断結果 */}
        {result && metrics && futurePrice !== null && (
          <div className="space-y-4 pt-2 border-t border-gray-100">

            {/* ① 予算比較 */}
            {(() => {
              const lc = LEVEL_LABEL[metrics.level];
              const diff = result.price - safePrice;
              return (
                <div className={`rounded-xl border-2 p-4 space-y-3 ${lc.border} ${lc.bg}`}>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-xs text-gray-500">あなたの安全購入価格との比較</p>
                      <p className={`text-lg font-black mt-0.5 ${lc.text}`}>
                        {diff > 0
                          ? `${diff.toLocaleString()}万円 オーバー`
                          : diff < 0
                          ? `${Math.abs(diff).toLocaleString()}万円 の余裕`
                          : "安全価格ちょうど"}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs text-gray-500">住居費負担率</p>
                      <p className={`text-2xl font-black ${lc.text}`}>{metrics.burdenRate.toFixed(1)}%</p>
                      <p className={`text-xs font-semibold ${lc.text}`}>{lc.label}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-lg bg-white/60 px-3 py-2">
                      <p className="text-gray-500">月返済額</p>
                      <p className="font-bold text-gray-900 text-sm">{metrics.monthlyPayment.toLocaleString()}万円/月</p>
                    </div>
                    <div className="rounded-lg bg-white/60 px-3 py-2">
                      <p className="text-gray-500">借入額</p>
                      <p className="font-bold text-gray-900 text-sm">{metrics.loanAmount.toLocaleString()}万円</p>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* ② 坪単価 vs エリア相場 */}
            {pricePerSqm && areaAvgPerSqm && priceVsAvg !== null && (
              <div className={`rounded-xl border p-4 ${
                priceVsAvg <= -10 ? "bg-emerald-50 border-emerald-200"
                : priceVsAvg <= 10  ? "bg-gray-50 border-gray-200"
                : "bg-orange-50 border-orange-200"
              }`}>
                <p className="text-xs font-semibold text-gray-600 mb-2">坪単価 vs エリア相場</p>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs text-gray-500">この物件の㎡単価</p>
                    <p className="text-xl font-black text-gray-900">
                      {pricePerSqm.toLocaleString()}
                      <span className="text-sm font-normal text-gray-500 ml-1">万円/㎡</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">{form.area}の相場平均</p>
                    <p className="text-base font-bold text-gray-700">
                      {areaAvgPerSqm.toLocaleString()}万円/㎡
                    </p>
                  </div>
                </div>
                <p className={`mt-2 text-sm font-bold ${
                  priceVsAvg <= -10 ? "text-emerald-700"
                  : priceVsAvg <= 10 ? "text-gray-600"
                  : "text-orange-700"
                }`}>
                  {priceVsAvg > 0 ? `相場より +${priceVsAvg}% 高め` : `相場より ${Math.abs(priceVsAvg)}% 安め`}
                  {priceVsAvg <= -10 && " — 掘り出し物の可能性あり！"}
                  {priceVsAvg > 20 && " — 割高感があるため注意"}
                </p>
              </div>
            )}

            {/* ③ 資産性スコア */}
            {(() => {
              const gc = GRADE_CONFIG[result.score.grade];
              const breakdown = [
                { label: "エリア", score: result.score.breakdown.area,      max: 30 },
                { label: "駅徒歩", score: result.score.breakdown.walk,      max: 25 },
                { label: "築年数", score: result.score.breakdown.age,       max: 25 },
                { label: "階数",   score: result.score.breakdown.floor,     max: 10 },
                { label: "向き",   score: result.score.breakdown.direction, max: 10 },
              ];
              return (
                <div className={`rounded-xl border-2 p-4 space-y-4 ${gc.border} ${gc.bg}`}>
                  {/* スコアヘッダー */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-xs font-bold ${gc.text}`}>資産性スコア</p>
                      <p className={`text-sm font-bold mt-0.5 ${gc.text}`}>{result.score.label}</p>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${gc.badge}`}>
                        {result.score.grade}ランク
                      </span>
                      <p className={`text-3xl font-black mt-1 ${gc.text}`}>
                        {result.score.total}
                        <span className="text-sm font-normal text-gray-500 ml-1">/100</span>
                      </p>
                    </div>
                  </div>

                  {/* スコア内訳バー */}
                  <div className="space-y-2">
                    {breakdown.map(({ label, score, max }) => (
                      <div key={label} className="flex items-center gap-2 text-xs">
                        <span className="text-gray-600 w-12 shrink-0">{label}</span>
                        <div className="flex-1 h-2 bg-white/60 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${gc.bar}`}
                            style={{ width: `${(score / max) * 100}%` }}
                          />
                        </div>
                        <span className={`font-semibold shrink-0 w-10 text-right ${gc.text}`}>
                          {score}/{max}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* 10年後推定 */}
                  <div className="rounded-lg bg-white/70 px-4 py-3 space-y-1">
                    <p className="text-xs text-gray-500">10年後の推定売却価格</p>
                    <p className={`text-2xl font-black ${gc.text}`}>
                      {futurePrice.toLocaleString()}万円
                      <span className={`text-xs font-semibold ml-2 ${
                        result.score.futureRatio >= 1 ? "text-emerald-600" : "text-red-600"
                      }`}>
                        （{result.score.futureRatio >= 1 ? "+" : ""}
                        {Math.round((result.score.futureRatio - 1) * 100)}%）
                      </span>
                    </p>
                    <p className="text-xs text-gray-600">{result.score.comment}</p>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        <p className="text-xs text-gray-400">
          ※ 資産性スコアは公開情報をもとにした推計です。実際の価格変動を保証するものではありません。
        </p>
      </div>
    </div>
  );
}
