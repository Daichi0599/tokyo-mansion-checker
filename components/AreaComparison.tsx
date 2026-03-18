"use client";

import { useState } from "react";
import { TOKYO_AREAS, calcAreaPrice, AreaData } from "@/lib/areaData";

interface Props {
  safePrice: number;
}

const GRADE_BADGE: Record<AreaData["assetGrade"], string> = {
  S: "bg-purple-100 text-purple-700",
  A: "bg-blue-100 text-blue-700",
  B: "bg-green-100 text-green-700",
  C: "bg-yellow-100 text-yellow-700",
  D: "bg-gray-100 text-gray-600",
};

const TREND_ICON: Record<AreaData["trend"], string> = {
  up:   "↑",
  flat: "→",
  down: "↓",
};

const TREND_COLOR: Record<AreaData["trend"], string> = {
  up:   "text-emerald-600",
  flat: "text-gray-400",
  down: "text-red-500",
};

const SQM_OPTIONS = [50, 60, 70, 80] as const;

export default function AreaComparison({ safePrice }: Props) {
  const [sqm, setSqm] = useState<number>(70);

  const sorted = [...TOKYO_AREAS].sort((a, b) => b.avgPricePerSqm - a.avgPricePerSqm);
  const maxPrice = calcAreaPrice(sorted[0], sqm);

  const affordable  = sorted.filter((a) => calcAreaPrice(a, sqm) <= safePrice);
  const borderline  = sorted.filter((a) => {
    const p = calcAreaPrice(a, sqm);
    return p > safePrice && p <= Math.round(safePrice * 1.15);
  });
  const over        = sorted.length - affordable.length - borderline.length;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      {/* ヘッダー */}
      <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
        <h2 className="text-base font-bold text-gray-800">エリア別相場比較</h2>
        <p className="text-xs text-gray-500 mt-0.5">
          安全購入価格 <span className="font-semibold text-gray-700">{safePrice.toLocaleString()}万円</span> で買えるエリアを確認
        </p>
      </div>

      <div className="px-6 py-5 space-y-5">
        {/* 広さ切り替え */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs font-semibold text-gray-600 shrink-0">想定面積</span>
          <div className="flex gap-1.5">
            {SQM_OPTIONS.map((s) => (
              <button
                key={s}
                onClick={() => setSqm(s)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                  sqm === s
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-600 border-gray-300 hover:border-blue-400"
                }`}
              >
                {s}㎡
              </button>
            ))}
          </div>
          <span className="text-xs text-gray-400">（2LDK目安 = 60〜70㎡）</span>
        </div>

        {/* サマリー */}
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-center">
            <p className="text-2xl font-black text-emerald-700">{affordable.length}</p>
            <p className="text-xs text-gray-500 mt-0.5">購入圏内</p>
          </div>
          <div className="rounded-xl bg-yellow-50 border border-yellow-200 p-3 text-center">
            <p className="text-2xl font-black text-yellow-700">{borderline.length}</p>
            <p className="text-xs text-gray-500 mt-0.5">あと少し</p>
          </div>
          <div className="rounded-xl bg-gray-50 border border-gray-200 p-3 text-center">
            <p className="text-2xl font-black text-gray-500">{over}</p>
            <p className="text-xs text-gray-500 mt-0.5">予算オーバー</p>
          </div>
        </div>

        {/* バーチャート */}
        <div className="space-y-2.5">
          {sorted.map((area) => {
            const price     = calcAreaPrice(area, sqm);
            const barWidth  = (price / maxPrice) * 100;
            const isAfford  = price <= safePrice;
            const isBorder  = !isAfford && price <= Math.round(safePrice * 1.15);
            const safeMarker = (safePrice / maxPrice) * 100;

            return (
              <div key={area.name}>
                {/* ラベル行 */}
                <div className="flex items-center justify-between mb-0.5">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="text-xs font-semibold text-gray-800 shrink-0">{area.name}</span>
                    <span className={`text-xs font-bold px-1.5 py-0.5 rounded shrink-0 ${GRADE_BADGE[area.assetGrade]}`}>
                      {area.assetGrade}
                    </span>
                    <span className={`text-xs font-bold shrink-0 ${TREND_COLOR[area.trend]}`}>
                      {TREND_ICON[area.trend]}
                    </span>
                    <span className="text-xs text-gray-400 truncate hidden sm:block">{area.desc}</span>
                  </div>
                  <span className={`text-xs font-semibold shrink-0 ml-2 ${
                    isAfford ? "text-emerald-700" : isBorder ? "text-yellow-700" : "text-gray-400"
                  }`}>
                    {price.toLocaleString()}万
                  </span>
                </div>
                {/* バー */}
                <div className="relative h-5 bg-gray-100 rounded-full overflow-hidden">
                  {/* あなたの安全価格ライン */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-blue-500 z-10"
                    style={{ left: `${Math.min(safeMarker, 99.5)}%` }}
                  />
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isAfford ? "bg-emerald-400" : isBorder ? "bg-yellow-400" : "bg-gray-300"
                    }`}
                    style={{ width: `${barWidth}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* 凡例 */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-500" />
            あなたの安全購入価格
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400" />
            購入圏内
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-yellow-400" />
            あと少し（〜+15%）
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-gray-300" />
            予算オーバー
          </span>
          <span className="flex items-center gap-1">
            <span className="font-bold text-purple-600">S</span>
            <span className="font-bold text-blue-600">A</span>
            <span className="font-bold text-green-600">B</span>
            <span className="font-bold text-yellow-600">C</span>
            <span className="font-bold text-gray-500">D</span>
            = 資産性グレード
          </span>
          <span className="flex items-center gap-1">
            <span className="text-emerald-600 font-bold">↑</span>上昇トレンド
            <span className="text-gray-400 font-bold ml-1">→</span>横ばい
          </span>
        </div>

        <p className="text-xs text-gray-400">
          ※ 価格は2024年時点の推計値（{sqm}㎡換算・管理費等除く）です。実際の相場は物件・時期・築年数により大きく異なります。
        </p>
      </div>
    </div>
  );
}
