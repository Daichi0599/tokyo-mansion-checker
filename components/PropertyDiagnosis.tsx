"use client";

import { useState, useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { TOKYO_AREAS, findArea } from "@/lib/areaData";
import { calcPriceMetrics } from "@/lib/calculator";
import { DiagnosisInput } from "@/types";

type Signal = "ok" | "warn" | "ng" | "na";

interface Props {
  input?: DiagnosisInput;
  safePrice?: number;
}

interface FormState {
  price:         string;
  sqm:           string;
  area:          string;
  buildingAge:   string;
  walkMinutes:   string;
  managementFee: string;
}

interface ResultState {
  price:         number;
  sqm:           number;
  managementFee: number;
  buildingAge:   number;
  walkMinutes:   number;
  area:          string;
}

const SIGNAL_CONFIG: Record<Signal, { icon: string; label: string; bg: string; text: string; border: string }> = {
  ok:   { icon: "✅", label: "OK",    bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-300" },
  warn: { icon: "⚠️", label: "要確認", bg: "bg-yellow-50",  text: "text-yellow-700", border: "border-yellow-300"  },
  ng:   { icon: "❌", label: "注意",  bg: "bg-red-50",     text: "text-red-700",    border: "border-red-300"     },
  na:   { icon: "—",  label: "未入力", bg: "bg-gray-50",    text: "text-gray-400",   border: "border-gray-200"    },
};

function getVerdict(signals: Signal[]): { label: string; icon: string; bg: string; text: string; border: string } {
  const ngCount   = signals.filter((s) => s === "ng").length;
  const warnCount = signals.filter((s) => s === "warn").length;
  if (ngCount >= 1)   return { label: "慎重に検討を",         icon: "🔴", bg: "bg-red-50",     text: "text-red-700",     border: "border-red-300"    };
  if (warnCount >= 2) return { label: "要確認項目あり",       icon: "🟠", bg: "bg-orange-50",  text: "text-orange-700",  border: "border-orange-300" };
  if (warnCount >= 1) return { label: "概ね良好・要確認あり", icon: "🟡", bg: "bg-yellow-50",  text: "text-yellow-700",  border: "border-yellow-300" };
  return                     { label: "買い候補",             icon: "🟢", bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-300" };
}

function calcFutureRatio(area: string, walkMinutes: number, buildingAge: number): number {
  const areaData = findArea(area);
  const avgPpm   = areaData?.avgPricePerSqm ?? 80;
  const areaAdj  = avgPpm >= 150 ? 0.05 : avgPpm >= 100 ? 0.02 : avgPpm >= 70 ? 0.00 : -0.03;
  const walkAdj  = walkMinutes <= 5 ? 0.04 : walkMinutes <= 10 ? 0.00 : walkMinutes <= 15 ? -0.03 : -0.07;
  const ageAdj   = buildingAge <= 5 ? 0.00 : buildingAge <= 15 ? -0.03 : buildingAge <= 25 ? -0.08 : -0.12;
  return Math.max(0.60, 0.82 + areaAdj + walkAdj + ageAdj);
}

const sortedAreas = [...TOKYO_AREAS].sort((a, b) => b.avgPricePerSqm - a.avgPricePerSqm);

export default function PropertyDiagnosis({ input, safePrice }: Props) {
  const [form, setForm] = useState<FormState>({
    price: "", sqm: "", area: "世田谷区",
    buildingAge: "", walkMinutes: "", managementFee: "",
  });
  const [result, setResult] = useState<ResultState | null>(null);
  const [localSafePrice, setLocalSafePrice] = useState<number | undefined>(undefined);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (safePrice !== undefined) return;
    try {
      const stored = localStorage.getItem("30lab_safe_price");
      if (stored) setLocalSafePrice(parseInt(stored));
    } catch (_) {}
  }, [safePrice]);

  const effectiveSafePrice = safePrice ?? localSafePrice;

  const set = (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleDiagnose = () => {
    const priceNum = parseInt(form.price);
    const sqmNum   = parseInt(form.sqm);
    if (!priceNum || !sqmNum) return;

    setResult({
      price:         priceNum,
      sqm:           sqmNum,
      managementFee: parseFloat(form.managementFee) || 0,
      buildingAge:   parseInt(form.buildingAge) || 5,
      walkMinutes:   parseInt(form.walkMinutes) || 10,
      area:          form.area,
    });

    sendGAEvent("event", "property_diagnosis", { area: form.area, price: priceNum });
  };

  const isDisabled = !form.price || !form.sqm;

  // ── 計算 ─────────────────────────────────────────────────────────
  const areaData        = result ? findArea(result.area) : null;
  const pricePerSqm     = result ? result.price / result.sqm : null;
  const pricePerTsubo   = pricePerSqm ? Math.round(pricePerSqm * 3.3) : null;
  const areaAvgPerSqm   = areaData?.avgPricePerSqm ?? null;
  const areaAvgPerTsubo = areaAvgPerSqm ? Math.round(areaAvgPerSqm * 3.3) : null;
  const priceVsAvg      = pricePerSqm && areaAvgPerSqm
    ? ((pricePerSqm - areaAvgPerSqm) / areaAvgPerSqm) * 100 : null;

  const mgmtPerSqm = result && result.sqm > 0 && result.managementFee > 0
    ? Math.round((result.managementFee * 10000) / result.sqm) : null;

  const futureRatio = result
    ? calcFutureRatio(result.area, result.walkMinutes, result.buildingAge) : null;
  const futurePrice = result && futureRatio
    ? Math.round(result.price * futureRatio) : null;

  const metrics = result && input ? calcPriceMetrics(result.price, input) : null;

  // ── シグナル ──────────────────────────────────────────────────────
  const budgetSignal: Signal = (() => {
    if (!result || !effectiveSafePrice) return "na";
    if (result.price <= effectiveSafePrice)       return "ok";
    if (result.price <= effectiveSafePrice * 1.1) return "warn";
    return "ng";
  })();

  const priceSignal: Signal = (() => {
    if (priceVsAvg === null) return "na";
    if (priceVsAvg <= 5)  return "ok";
    if (priceVsAvg <= 20) return "warn";
    return "ng";
  })();

  const mgmtSignal: Signal = (() => {
    if (mgmtPerSqm === null) return "na";
    if (mgmtPerSqm <= 300) return "ok";
    if (mgmtPerSqm <= 400) return "warn";
    return "ng";
  })();

  const verdict = result ? getVerdict([budgetSignal, priceSignal, mgmtSignal]) : null;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      {/* ヘッダー */}
      <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
        <h2 className="text-base font-bold text-gray-800">🔍 気になる物件を診断する</h2>
        <p className="text-xs text-gray-500 mt-0.5">
          SUUMOなどで見つけた物件のスペックを入力 → 予算・割安感・管理費を即確認
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
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* エリア */}
          <div className="col-span-2 space-y-1">
            <label className="text-xs font-semibold text-gray-700">エリア（区）</label>
            <select
              value={form.area} onChange={set("area")}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* 駅徒歩 */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-700">駅徒歩（分）</label>
            <input
              type="number" value={form.walkMinutes} onChange={set("walkMinutes")}
              placeholder="例: 5" min={1} max={30}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* 管理費＋修繕積立金 */}
          <div className="col-span-2 space-y-1">
            <label className="text-xs font-semibold text-gray-700">
              管理費＋修繕積立金（万円/月）
            </label>
            <input
              type="number" value={form.managementFee} onChange={set("managementFee")}
              placeholder="例: 2.5（SUUMOに記載あり）" min={0} step={0.1}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
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
        {result && verdict && (
          <div className="space-y-4 pt-2 border-t border-gray-100">

            {/* 総合判定ヒーロー */}
            <div className={`rounded-xl border-2 p-5 ${verdict.border} ${verdict.bg}`}>
              <p className="text-xs font-semibold text-gray-500 mb-1">総合判定</p>
              <p className={`text-2xl font-black ${verdict.text}`}>
                {verdict.icon} {verdict.label}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {[
                  { key: "予算",   sig: budgetSignal },
                  { key: "割安感", sig: priceSignal  },
                  { key: "管理費", sig: mgmtSignal   },
                ].map(({ key, sig }) => {
                  const sc = SIGNAL_CONFIG[sig];
                  return (
                    <span
                      key={key}
                      className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border ${sc.bg} ${sc.text} ${sc.border}`}
                    >
                      {sc.icon} {key}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* ① 予算チェック */}
            <div className="rounded-xl border border-gray-200 p-4 space-y-3">
              <p className="text-xs font-bold text-gray-700">① 予算チェック</p>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="rounded-lg bg-gray-50 px-2 py-3">
                  <p className="text-xs text-gray-500 mb-1">月ローン目安</p>
                  <p className="text-base font-black text-gray-900">
                    {metrics
                      ? `${metrics.monthlyPayment.toFixed(1)}万`
                      : `${(result.price * 0.9 * 0.0026).toFixed(1)}万`}
                  </p>
                  <p className="text-xs text-gray-400">/月</p>
                </div>
                <div className="rounded-lg bg-gray-50 px-2 py-3">
                  <p className="text-xs text-gray-500 mb-1">管理費等</p>
                  <p className="text-base font-black text-gray-900">
                    {result.managementFee > 0 ? `${result.managementFee}万` : "—"}
                  </p>
                  <p className="text-xs text-gray-400">/月</p>
                </div>
                <div className="rounded-lg bg-gray-50 px-2 py-3">
                  <p className="text-xs text-gray-500 mb-1">月々の実質</p>
                  <p className={`text-base font-black ${
                    metrics && metrics.burdenRate > 30 ? "text-red-600" : "text-gray-900"
                  }`}>
                    {(() => {
                      const loan = metrics
                        ? metrics.monthlyPayment
                        : result.price * 0.9 * 0.0026;
                      return `${(loan + result.managementFee).toFixed(1)}万`;
                    })()}
                  </p>
                  <p className="text-xs text-gray-400">/月</p>
                </div>
              </div>
              {effectiveSafePrice && (
                <p className={`text-xs font-semibold ${
                  budgetSignal === "ok"   ? "text-emerald-700"
                  : budgetSignal === "warn" ? "text-yellow-700"
                  : "text-red-700"
                }`}>
                  {budgetSignal === "ok"
                    ? `✅ 安全購入価格（${effectiveSafePrice.toLocaleString()}万円）の範囲内`
                    : budgetSignal === "warn"
                    ? `⚠️ 安全購入価格より ${(result.price - effectiveSafePrice).toLocaleString()}万円 オーバー（±10%以内）`
                    : `❌ 安全購入価格より ${(result.price - effectiveSafePrice).toLocaleString()}万円 オーバー`}
                </p>
              )}
            </div>

            {/* ② 坪単価 vs エリア相場 */}
            {pricePerTsubo !== null && areaAvgPerTsubo !== null && priceVsAvg !== null && (
              <div className={`rounded-xl border p-4 ${
                priceVsAvg <= 0    ? "bg-emerald-50 border-emerald-200"
                : priceVsAvg <= 20 ? "bg-gray-50 border-gray-200"
                : "bg-orange-50 border-orange-200"
              }`}>
                <p className="text-xs font-bold text-gray-700 mb-3">② 坪単価 vs エリア相場</p>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs text-gray-500">この物件の坪単価</p>
                    <p className="text-2xl font-black text-gray-900">
                      {pricePerTsubo.toLocaleString()}
                      <span className="text-sm font-normal text-gray-500 ml-1">万円/坪</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">{result.area}の相場</p>
                    <p className="text-base font-bold text-gray-700">
                      {areaAvgPerTsubo.toLocaleString()}万円/坪
                    </p>
                  </div>
                </div>
                <p className={`mt-2 text-sm font-bold ${
                  priceVsAvg <= 0    ? "text-emerald-700"
                  : priceVsAvg <= 20 ? "text-gray-600"
                  : "text-orange-700"
                }`}>
                  {priceVsAvg > 0
                    ? `相場より +${Math.round(priceVsAvg)}% 高め`
                    : `相場より ${Math.abs(Math.round(priceVsAvg))}% 安め`}
                  {priceVsAvg <= -10 && " — 掘り出し物の可能性あり"}
                  {priceVsAvg > 25   && " — 割高感あり、要注意"}
                </p>
              </div>
            )}

            {/* ③ 管理費・修繕積立金チェック */}
            {result.managementFee > 0 && mgmtPerSqm !== null && (
              <div className={`rounded-xl border p-4 ${
                mgmtSignal === "ok"   ? "bg-emerald-50 border-emerald-200"
                : mgmtSignal === "warn" ? "bg-yellow-50 border-yellow-200"
                : "bg-red-50 border-red-200"
              }`}>
                <p className="text-xs font-bold text-gray-700 mb-3">③ 管理費・修繕積立金チェック</p>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs text-gray-500">1㎡あたり月額</p>
                    <p className="text-2xl font-black text-gray-900">
                      {mgmtPerSqm.toLocaleString()}
                      <span className="text-sm font-normal text-gray-500 ml-1">円/㎡/月</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">適正目安</p>
                    <p className="text-base font-bold text-gray-600">250〜300円/㎡</p>
                  </div>
                </div>
                <p className={`mt-2 text-sm font-bold ${
                  mgmtSignal === "ok"   ? "text-emerald-700"
                  : mgmtSignal === "warn" ? "text-yellow-700"
                  : "text-red-700"
                }`}>
                  {mgmtSignal === "ok"   && "✅ 適正範囲内"}
                  {mgmtSignal === "warn" && "⚠️ やや高め — 長期的な家計負担に注意"}
                  {mgmtSignal === "ng"   && "❌ 高すぎ — 管理組合の財務状況を要確認"}
                </p>
              </div>
            )}

            {/* ④ 10年後推定売却価格 */}
            {futurePrice !== null && futureRatio !== null && (
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <p className="text-xs font-bold text-gray-700 mb-2">④ 10年後の推定売却価格</p>
                <div className="flex items-end justify-between">
                  <div>
                    <p className={`text-2xl font-black ${
                      futureRatio >= 0.9 ? "text-emerald-700"
                      : futureRatio >= 0.75 ? "text-gray-800"
                      : "text-red-600"
                    }`}>
                      {futurePrice.toLocaleString()}万円
                    </p>
                    <p className={`text-sm font-semibold mt-0.5 ${
                      futureRatio >= 1.0  ? "text-emerald-600"
                      : futureRatio >= 0.9 ? "text-blue-600"
                      : futureRatio >= 0.75 ? "text-gray-600"
                      : "text-red-600"
                    }`}>
                      （購入価格の {Math.round(futureRatio * 100)}%）
                    </p>
                  </div>
                  <div className="text-right text-xs text-gray-500">
                    <p>購入価格</p>
                    <p className="font-bold text-gray-700">{result.price.toLocaleString()}万円</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  ※ エリア・駅徒歩・築年数をもとにした推計です
                </p>
              </div>
            )}

          </div>
        )}

        {/* シェアボタン */}
        {result && verdict && (
          <div className="space-y-2 pt-1">
            <p className="text-xs font-bold text-gray-600">結果をシェアして相談する</p>
            <div className="flex gap-2">
              {(() => {
                const loan = metrics ? metrics.monthlyPayment : result.price * 0.9 * 0.0026;
                const totalMonthly = loan + result.managementFee;
                const lines = [
                  `📍 ${result.area} ${result.price.toLocaleString()}万円 / ${result.sqm}㎡（築${result.buildingAge}年・徒歩${result.walkMinutes}分）`,
                  ``,
                  `総合判定：${verdict.icon} ${verdict.label}`,
                  pricePerTsubo !== null && priceVsAvg !== null
                    ? `🏠 坪単価：${pricePerTsubo}万円（相場${priceVsAvg >= 0 ? "+" : ""}${Math.round(priceVsAvg)}%）`
                    : null,
                  `💴 月々の実質：${totalMonthly.toFixed(1)}万円`,
                  futureRatio !== null
                    ? `📈 10年後推定：購入価格の${Math.round(futureRatio * 100)}%`
                    : null,
                  ``,
                  `#マンション購入 #物件診断 この物件どう思う？`,
                ].filter((l): l is string => l !== null).join("\n");

                const shareUrl = "https://30lab.vercel.app/check";

                return (
                  <>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(lines)}&url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sendGAEvent("event", "property_share_click", { platform: "x", verdict: verdict.label })}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-black hover:bg-gray-800 text-white text-xs font-bold py-2.5 rounded-xl transition-colors"
                    >
                      <span>𝕏</span> でシェア
                    </a>
                    <a
                      href={`https://line.me/R/msg/text/?${encodeURIComponent(lines + "\n" + shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sendGAEvent("event", "property_share_click", { platform: "line", verdict: verdict.label })}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-[#06C755] hover:bg-[#05b34c] text-white text-xs font-bold py-2.5 rounded-xl transition-colors"
                    >
                      LINE
                    </a>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(shareUrl).then(() => {
                          setCopied(true);
                          setTimeout(() => setCopied(false), 2000);
                        });
                        sendGAEvent("event", "property_share_click", { platform: "copy", verdict: verdict.label });
                      }}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold py-2.5 rounded-xl transition-colors"
                    >
                      {copied ? "✓ コピー済" : "🔗 URLコピー"}
                    </button>
                  </>
                );
              })()}
            </div>
          </div>
        )}

        <p className="text-xs text-gray-400">
          ※ 診断結果は公開情報をもとにした推計です。実際の価格変動・費用を保証するものではありません。
        </p>
      </div>
    </div>
  );
}
