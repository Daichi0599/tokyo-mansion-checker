"use client";

import type { WealthYearPoint } from "@/lib/lifePlan/wealthProjection";

interface Props {
  points: WealthYearPoint[];
}

const WIDTH = 640;
const HEIGHT = 260;
const PAD_LEFT = 52;
const PAD_RIGHT = 12;
const PAD_TOP = 16;
const PAD_BOTTOM = 28;

function formatMan(value: number): string {
  return Math.round(value).toLocaleString();
}

export default function WealthChart({ points }: Props) {
  if (points.length < 2) return null;

  const plotWidth = WIDTH - PAD_LEFT - PAD_RIGHT;
  const plotHeight = HEIGHT - PAD_TOP - PAD_BOTTOM;

  const totals = points.map((p) => p.totalAssets);
  const cashes = points.map((p) => p.cashSavings);
  const yMax = Math.max(...totals, 1) * 1.15;
  const yMin = Math.min(0, ...cashes, ...totals);
  // yMax===yMinは全期間の資産が0で動きが無いなど極端なケース。0除算でNaNになるのを避ける
  if (!Number.isFinite(yMax) || !Number.isFinite(yMin) || yMax === yMin) return null;

  const xAt = (i: number) => PAD_LEFT + (i / (points.length - 1)) * plotWidth;
  const yAt = (v: number) => PAD_TOP + (1 - (v - yMin) / (yMax - yMin)) * plotHeight;

  const cashLine = points.map((p, i) => `${xAt(i)},${yAt(p.cashSavings)}`).join(" ");
  const totalLine = points.map((p, i) => `${xAt(i)},${yAt(p.totalAssets)}`).join(" ");

  const cashArea = `${xAt(0)},${yAt(0)} ${cashLine} ${xAt(points.length - 1)},${yAt(0)}`;
  const investmentArea = `${points
    .map((p, i) => `${xAt(i)},${yAt(p.cashSavings)}`)
    .join(" ")} ${[...points]
    .reverse()
    .map((p, i) => `${xAt(points.length - 1 - i)},${yAt(p.totalAssets)}`)
    .join(" ")}`;

  const zeroY = yAt(0);
  const yTicks = [yMin, (yMin + yMax) / 2, yMax];
  const xTickEvery = Math.max(1, Math.round(points.length / 6));

  const birthPoints = points.filter((p) => p.events.includes("出産"));

  return (
    <div className="space-y-2">
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="w-full h-auto" role="img" aria-label="資産推移シミュレーション">
        {yTicks.map((v, i) => (
          <g key={i}>
            <line x1={PAD_LEFT} y1={yAt(v)} x2={WIDTH - PAD_RIGHT} y2={yAt(v)} stroke="#334155" strokeWidth={1} strokeDasharray={v === 0 ? undefined : "3 3"} />
            <text x={PAD_LEFT - 6} y={yAt(v) + 3} textAnchor="end" fontSize={10} fill="#94a3b8">
              {formatMan(v)}
            </text>
          </g>
        ))}

        {yMin < 0 && <line x1={PAD_LEFT} y1={zeroY} x2={WIDTH - PAD_RIGHT} y2={zeroY} stroke="#f87171" strokeWidth={1} />}

        <polygon points={cashArea} fill="#6366f1" fillOpacity={0.35} />
        <polygon points={investmentArea} fill="#10b981" fillOpacity={0.35} />

        <polyline points={cashLine} fill="none" stroke="#818cf8" strokeWidth={2} />
        <polyline points={totalLine} fill="none" stroke="#34d399" strokeWidth={2} />

        {birthPoints.map((p) => (
          <g key={p.year}>
            <line x1={xAt(p.year)} y1={PAD_TOP} x2={xAt(p.year)} y2={HEIGHT - PAD_BOTTOM} stroke="#fbbf24" strokeWidth={1} strokeDasharray="2 2" />
            <text x={xAt(p.year)} y={PAD_TOP - 4} textAnchor="middle" fontSize={9} fill="#fbbf24">
              出産
            </text>
          </g>
        ))}

        {points.map((p, i) =>
          i % xTickEvery === 0 || i === points.length - 1 ? (
            <text key={i} x={xAt(i)} y={HEIGHT - PAD_BOTTOM + 16} textAnchor="middle" fontSize={10} fill="#94a3b8">
              {p.age}歳
            </text>
          ) : null
        )}
      </svg>

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
      </div>
    </div>
  );
}
