"use client";

import { useState } from "react";
import { TOKYO_AREAS, calcAreaPrice, AreaData } from "@/lib/areaData";

interface Props {
  safePrice: number;
}

const GRADE_BADGE: Record<AreaData["assetGrade"], string> = {
  S: "bg-purple-500/20 text-purple-300",
  A: "bg-blue-500/20 text-blue-300",
  B: "bg-green-500/20 text-green-300",
  C: "bg-yellow-500/20 text-yellow-300",
  D: "bg-slate-600/50 text-slate-400",
};

const TREND_ICON: Record<AreaData["trend"], string> = {
  up:   "↑",
  flat: "→",
  down: "↓",
};

const TREND_COLOR: Record<AreaData["trend"], string> = {
  up:   "text-emerald-400",
  flat: "text-slate-400",
  down: "text-red-400",
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
    <div className="rounded-2xl border border-slate-700 bg-slate-800 overflow-hidden">
      {/* ヘッダー */}
      <div className="px-6 py-4 border-b border-slate-700 bg-slate-900/50">
        <h2 className="text-base font-bold text-white">エリア別相場比較</h2>
        <p className="text-xs text-slate-400 mt-0.5">
          安全購入価格 <span className="font-semibold text-slate-200">{safePrice.toLocaleString()}万円</span> で買えるエリアを確認
        </p>
      </div>

      <div className="px-6 py-5 space-y-5">
        {/* 広さ切り替え */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs font-semibold text-slate-400 shrink-0">想定面積</span>
          <div className="flex gap-1.5">
            {SQM_OPTIONS.map((s) => (
              <button
                key={s}
                onClick={() => setSqm(s)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                  sqm === s
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-slate-700 text-slate-300 border-slate-600 hover:border-blue-400"
                }`}
              >
                {s}㎡
              </button>
            ))}
          </div>
          <span className="text-xs text-slate-500">（2LDK目安 = 60〜70㎡）</span>
        </div>

        {/* サマリー */}
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-3 text-center">
            <p className="text-2xl font-black text-emerald-400">{affordable.length}</p>
            <p className="text-xs text-slate-400 mt-0.5">購入圏内</p>
          </div>
          <div className="rounded-xl bg-yellow-500/10 border border-yellow-500/20 p-3 text-center">
            <p className="text-2xl font-black text-yellow-400">{borderline.length}</p>
            <p className="text-xs text-slate-400 mt-0.5">あと少し</p>
          </div>
          <div className="rounded-xl bg-slate-700/50 border border-slate-700 p-3 text-center">
            <p className="text-2xl font-black text-slate-400">{over}</p>
            <p className="text-xs text-slate-500 mt-0.5">予算オーバー</p>
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
                    <span className="text-xs font-semibold text-slate-100 shrink-0">{area.name}</span>
                    <span className={`text-xs font-bold px-1.5 py-0.5 rounded shrink-0 ${GRADE_BADGE[area.assetGrade]}`}>
                      {area.assetGrade}
                    </span>
                    <span className={`text-xs font-bold shrink-0 ${TREND_COLOR[area.trend]}`}>
                      {TREND_ICON[area.trend]}
                    </span>
                    <span className="text-xs text-slate-500 truncate hidden sm:block">{area.desc}</span>
                  </div>
                  <span className={`text-xs font-semibold shrink-0 ml-2 ${
                    isAfford ? "text-emerald-400" : isBorder ? "text-yellow-400" : "text-slate-500"
                  }`}>
                    {price.toLocaleString()}万
                  </span>
                </div>
                {/* バー */}
                <div className="relative h-5 bg-slate-700 rounded-full overflow-hidden">
                  {/* あなたの安全価格ライン */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-blue-500 z-10"
                    style={{ left: `${Math.min(safeMarker, 99.5)}%` }}
                  />
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isAfford ? "bg-emerald-400" : isBorder ? "bg-yellow-400" : "bg-slate-600"
                    }`}
                    style={{ width: `${barWidth}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* 凡例 */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400">
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
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-slate-600" />
            予算オーバー
          </span>
          <span className="flex items-center gap-1">
            <span className="font-bold text-purple-300">S</span>
            <span className="font-bold text-blue-300">A</span>
            <span className="font-bold text-green-300">B</span>
            <span className="font-bold text-yellow-300">C</span>
            <span className="font-bold text-slate-400">D</span>
            = 資産性グレード
          </span>
          <span className="flex items-center gap-1">
            <span className="text-emerald-400 font-bold">↑</span>上昇トレンド
            <span className="text-slate-400 font-bold ml-1">→</span>横ばい
          </span>
        </div>

        <p className="text-xs text-slate-600">
          ※ 価格は2024年時点の推計値（{sqm}㎡換算・管理費等除く）です。実際の相場は物件・時期・築年数により大きく異なります。
        </p>
      </div>
    </div>
  );
}
