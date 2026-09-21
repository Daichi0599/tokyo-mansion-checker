"use client";

import type { WealthYearPoint } from "@/lib/lifePlan/wealthProjection";

interface Props {
  points: WealthYearPoint[];
  /** 安全プランの資産推移。渡すと総資産の比較線を重ねて表示する */
  comparisonPoints?: WealthYearPoint[];
}

const WIDTH = 640;
const HEIGHT = 260;
const PAD_LEFT = 52;
const PAD_RIGHT = 12;
const PAD_TOP = 20;
const PAD_BOTTOM = 24;

function formatMan(value: number): string {
  return Math.round(value).toLocaleString();
}

/**
 * ラベル文字はSVG内には置かず、同じ座標を%換算したHTML要素として重ねている。
 * SVGはviewBoxで縮小表示されるため、内部に<text>を置くとコンテナ幅が狭いスマホで
 * 文字も一緒に縮んでしまい（実測で5px相当まで縮小）読めなくなる。HTML側のテキストは
 * rem/px基準でスケールされないため、画面幅によらず一定の可読サイズを保てる。
 */
export default function WealthChart({ points, comparisonPoints }: Props) {
  if (points.length < 2) return null;

  const plotWidth = WIDTH - PAD_LEFT - PAD_RIGHT;
  const plotHeight = HEIGHT - PAD_TOP - PAD_BOTTOM;

  const totals = points.map((p) => p.totalAssets);
  const cashes = points.map((p) => p.cashSavings);
  const comparisonTotals = comparisonPoints?.map((p) => p.totalAssets) ?? [];
  const yMax = Math.max(...totals, ...comparisonTotals, 1) * 1.15;
  const yMin = Math.min(0, ...cashes, ...totals, ...comparisonTotals);
  // yMax===yMinは全期間の資産が0で動きが無いなど極端なケース。0除算でNaNになるのを避ける
  if (!Number.isFinite(yMax) || !Number.isFinite(yMin) || yMax === yMin) return null;

  const xAt = (i: number) => PAD_LEFT + (i / (points.length - 1)) * plotWidth;
  const yAt = (v: number) => PAD_TOP + (1 - (v - yMin) / (yMax - yMin)) * plotHeight;
  const xPct = (i: number) => (xAt(i) / WIDTH) * 100;
  const yPct = (v: number) => (yAt(v) / HEIGHT) * 100;

  const cashLine = points.map((p, i) => `${xAt(i)},${yAt(p.cashSavings)}`).join(" ");
  const totalLine = points.map((p, i) => `${xAt(i)},${yAt(p.totalAssets)}`).join(" ");
  const comparisonLine = comparisonPoints?.map((p, i) => `${xAt(i)},${yAt(p.totalAssets)}`).join(" ");

  const cashArea = `${xAt(0)},${yAt(0)} ${cashLine} ${xAt(points.length - 1)},${yAt(0)}`;
  const investmentArea = `${points
    .map((p, i) => `${xAt(i)},${yAt(p.cashSavings)}`)
    .join(" ")} ${[...points]
    .reverse()
    .map((p, i) => `${xAt(points.length - 1 - i)},${yAt(p.totalAssets)}`)
    .join(" ")}`;

  const zeroY = yAt(0);
  const yTicks = [yMax, (yMin + yMax) / 2, yMin];
  const xTickEvery = Math.max(1, Math.round(points.length / 5));
  const xTickIndexes = points
    .map((_, i) => i)
    .filter((i) => i % xTickEvery === 0 || i === points.length - 1);

  const birthPoints = points.filter((p) => p.events.includes("出産"));
  const purchasePoints = points.filter((p) => p.events.includes("住宅購入"));

  return (
    <div className="space-y-2">
      <div className="relative w-full" style={{ aspectRatio: `${WIDTH} / ${HEIGHT}` }}>
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="w-full h-full" role="img" aria-label="資産推移シミュレーション">
          {yTicks.map((v, i) => (
            <line
              key={i}
              x1={PAD_LEFT}
              y1={yAt(v)}
              x2={WIDTH - PAD_RIGHT}
              y2={yAt(v)}
              stroke="#334155"
              strokeWidth={1}
              strokeDasharray={v === 0 ? undefined : "3 3"}
            />
          ))}

          {yMin < 0 && <line x1={PAD_LEFT} y1={zeroY} x2={WIDTH - PAD_RIGHT} y2={zeroY} stroke="#f87171" strokeWidth={1} />}

          <polygon points={cashArea} fill="#6366f1" fillOpacity={0.35} />
          <polygon points={investmentArea} fill="#10b981" fillOpacity={0.35} />

          <polyline points={cashLine} fill="none" stroke="#818cf8" strokeWidth={2} />
          <polyline points={totalLine} fill="none" stroke="#34d399" strokeWidth={2} />
          {comparisonLine && (
            <polyline points={comparisonLine} fill="none" stroke="#cbd5e1" strokeWidth={2} strokeDasharray="5 3" />
          )}

          {birthPoints.map((p) => (
            <line
              key={`birth-${p.year}`}
              x1={xAt(p.year)}
              y1={PAD_TOP}
              x2={xAt(p.year)}
              y2={HEIGHT - PAD_BOTTOM}
              stroke="#fbbf24"
              strokeWidth={1}
              strokeDasharray="2 2"
            />
          ))}
          {purchasePoints.map((p) => (
            <line
              key={`purchase-${p.year}`}
              x1={xAt(p.year)}
              y1={PAD_TOP}
              x2={xAt(p.year)}
              y2={HEIGHT - PAD_BOTTOM}
              stroke="#38bdf8"
              strokeWidth={1}
              strokeDasharray="2 2"
            />
          ))}
        </svg>

        {yTicks.map((v, i) => (
          <span
            key={i}
            className="absolute -translate-y-1/2 text-[10px] leading-none text-slate-400 text-right pr-1.5 whitespace-nowrap"
            style={{ left: 0, width: `${(PAD_LEFT / WIDTH) * 100}%`, top: `${yPct(v)}%` }}
          >
            {formatMan(v)}
          </span>
        ))}

        {birthPoints.map((p) => (
          <span
            key={`birth-${p.year}`}
            className="absolute -translate-x-1/2 text-[10px] leading-none text-amber-400 whitespace-nowrap"
            style={{ left: `${xPct(p.year)}%`, top: 2 }}
          >
            出産
          </span>
        ))}

        {purchasePoints.map((p) => (
          <span
            key={`purchase-${p.year}`}
            className="absolute -translate-x-1/2 text-[10px] leading-none text-sky-400 whitespace-nowrap"
            style={{ left: `${xPct(p.year)}%`, top: 2 }}
          >
            住宅購入
          </span>
        ))}

        {xTickIndexes.map((i) => (
          <span
            key={i}
            className="absolute -translate-x-1/2 text-[10px] leading-none text-slate-400 whitespace-nowrap"
            style={{ left: `${xPct(i)}%`, bottom: 2 }}
          >
            {points[i].age}歳
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400">
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block w-2.5 h-2.5 rounded-sm bg-indigo-400" />
          現金・預金
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block w-2.5 h-2.5 rounded-sm bg-emerald-400" />
          投資元本（NISA・株など、運用リターンは含まず）
        </span>
        {birthPoints.length > 0 && (
          <span className="inline-flex items-center gap-1.5">
            <span className="inline-block w-2.5 h-2.5 rounded-sm bg-amber-400" />
            出産のタイミング
          </span>
        )}
        {purchasePoints.length > 0 && (
          <span className="inline-flex items-center gap-1.5">
            <span className="inline-block w-2.5 h-2.5 rounded-sm bg-sky-400" />
            住宅購入のタイミング
          </span>
        )}
        {comparisonLine && (
          <span className="inline-flex items-center gap-1.5">
            <span className="inline-block w-2.5 h-2.5 rounded-sm bg-slate-300" />
            安全プランの資産合計
          </span>
        )}
      </div>
    </div>
  );
}
