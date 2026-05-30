"use client";

import { useState, useCallback } from "react";

interface Property {
  id: number;
  name: string;
  price: string;  // 万円
  area: string;   // ㎡
}

let nextId = 3;

const DEFAULT_PROPERTIES: Property[] = [
  { id: 1, name: "物件A", price: "", area: "" },
  { id: 2, name: "物件B", price: "", area: "" },
];

function calcTsubo(price: string, area: string): number | null {
  const p = parseFloat(price);
  const a = parseFloat(area);
  if (!p || !a || a <= 0) return null;
  // 坪単価(万円/坪) = 価格(万円) / (面積㎡ ÷ 3.3)
  return Math.round((p / (a / 3.3)) * 10) / 10;
}

export default function TsuboPriceComparison() {
  const [properties, setProperties] = useState<Property[]>(DEFAULT_PROPERTIES);

  const update = useCallback((id: number, field: keyof Property, value: string) => {
    setProperties((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  }, []);

  const addProperty = () => {
    if (properties.length >= 5) return;
    const label = ["C", "D", "E"][properties.length - 2] ?? String(properties.length + 1);
    setProperties((prev) => [
      ...prev,
      { id: nextId++, name: `物件${label}`, price: "", area: "" },
    ]);
  };

  const removeProperty = (id: number) => {
    if (properties.length <= 2) return;
    setProperties((prev) => prev.filter((p) => p.id !== id));
  };

  // 有効な物件（坪単価が計算できるもの）だけランキング
  const ranked = properties
    .map((p) => ({ ...p, tsubo: calcTsubo(p.price, p.area) }))
    .filter((p) => p.tsubo !== null)
    .sort((a, b) => a.tsubo! - b.tsubo!);

  const minTsubo = ranked[0]?.tsubo ?? null;

  return (
    <div className="bg-slate-800 rounded-2xl border border-slate-700 p-4 space-y-4">
      <div>
        <p className="text-sm font-extrabold text-slate-100">物件の坪単価を比較する</p>
        <p className="text-xs text-slate-400 mt-0.5">
          価格と面積を入力すると坪単価を自動計算・比較します（最大5件）
        </p>
      </div>

      {/* 入力エリア */}
      <div className="space-y-3">
        {properties.map((prop) => {
          const tsubo = calcTsubo(prop.price, prop.area);
          const isBest = tsubo !== null && tsubo === minTsubo && ranked.length > 1;
          return (
            <div
              key={prop.id}
              className={`rounded-xl border p-3 space-y-2 transition-colors ${
                isBest
                  ? "border-emerald-500/40 bg-emerald-500/10"
                  : "border-slate-600 bg-slate-700/50"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <input
                  type="text"
                  value={prop.name}
                  onChange={(e) => update(prop.id, "name", e.target.value)}
                  className="text-xs font-bold text-slate-200 bg-transparent border-b border-dashed border-slate-600 focus:outline-none focus:border-blue-400 w-24"
                  maxLength={10}
                />
                {isBest && (
                  <span className="text-xs font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full">
                    最安値
                  </span>
                )}
                {properties.length > 2 && (
                  <button
                    onClick={() => removeProperty(prop.id)}
                    className="text-slate-500 hover:text-red-400 text-xs ml-auto"
                    aria-label="削除"
                  >
                    ✕
                  </button>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs text-slate-400 mb-1 block">物件価格（万円）</label>
                  <input
                    type="number"
                    inputMode="decimal"
                    placeholder="例：8500"
                    value={prop.price}
                    onChange={(e) => update(prop.id, "price", e.target.value)}
                    className="w-full text-sm border border-slate-600 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 bg-slate-800 text-white placeholder:text-slate-500"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 mb-1 block">専有面積（㎡）</label>
                  <input
                    type="number"
                    inputMode="decimal"
                    placeholder="例：65.5"
                    value={prop.area}
                    onChange={(e) => update(prop.id, "area", e.target.value)}
                    className="w-full text-sm border border-slate-600 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 bg-slate-800 text-white placeholder:text-slate-500"
                  />
                </div>
              </div>

              {tsubo !== null && (
                <div className="flex items-baseline gap-1.5 pt-1">
                  <span className="text-2xl font-extrabold text-slate-100">{tsubo.toLocaleString()}</span>
                  <span className="text-xs text-slate-400 font-semibold">万円/坪</span>
                  <span className="text-xs text-slate-500 ml-1">
                    （{Math.round(parseFloat(prop.price) / parseFloat(prop.area)).toLocaleString()}万円/㎡）
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 追加ボタン */}
      {properties.length < 5 && (
        <button
          onClick={addProperty}
          className="w-full py-2 rounded-xl border-2 border-dashed border-slate-600 text-xs text-slate-500 font-semibold hover:border-blue-400 hover:text-blue-400 transition-colors"
        >
          ＋ 物件を追加する
        </button>
      )}

      {/* 比較結果サマリー */}
      {ranked.length >= 2 && (
        <div className="rounded-xl border border-slate-700 bg-slate-900/30 p-3 space-y-1.5">
          <p className="text-xs font-bold text-slate-400 mb-2">坪単価ランキング</p>
          {ranked.map((p, i) => (
            <div key={p.id} className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span
                  className={`w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center shrink-0 ${
                    i === 0
                      ? "bg-emerald-500 text-white"
                      : i === 1
                      ? "bg-blue-400 text-white"
                      : "bg-slate-600 text-white"
                  }`}
                >
                  {i + 1}
                </span>
                <span className="text-xs font-semibold text-slate-200">{p.name}</span>
              </div>
              <div className="text-right">
                <span className="text-sm font-extrabold text-slate-100">
                  {p.tsubo!.toLocaleString()}万円/坪
                </span>
                {i > 0 && (
                  <span className="ml-1.5 text-xs text-red-400 font-semibold">
                    +{Math.round((p.tsubo! - ranked[0].tsubo!) * 10) / 10}万
                  </span>
                )}
              </div>
            </div>
          ))}
          {ranked.length >= 2 && (
            <p className="text-xs text-slate-500 pt-1 border-t border-slate-700 mt-2">
              最高値と最安値の差：
              <strong className="text-slate-300">
                {Math.round((ranked[ranked.length - 1].tsubo! - ranked[0].tsubo!) * 10) / 10}万円/坪
              </strong>
            </p>
          )}
        </div>
      )}

      <p className="text-xs text-slate-600">
        坪単価 ＝ 物件価格 ÷（専有面積 ÷ 3.3）。東京都内の新築マンション平均は約400〜500万円/坪（2024年）。
      </p>
    </div>
  );
}
