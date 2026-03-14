"use client";

import { DiagnosisResult } from "@/types";

interface Props {
  result: DiagnosisResult;
}

const levelConfig = {
  safe: {
    label: "余裕あり",
    bg: "bg-emerald-50",
    border: "border-emerald-400",
    text: "text-emerald-700",
    badge: "bg-emerald-100 text-emerald-800",
    icon: "✅",
    gauge: "bg-emerald-400",
  },
  caution: {
    label: "安全圏",
    bg: "bg-blue-50",
    border: "border-blue-400",
    text: "text-blue-700",
    badge: "bg-blue-100 text-blue-800",
    icon: "🟢",
    gauge: "bg-blue-400",
  },
  warning: {
    label: "やや注意",
    bg: "bg-yellow-50",
    border: "border-yellow-400",
    text: "text-yellow-700",
    badge: "bg-yellow-100 text-yellow-800",
    icon: "⚠️",
    gauge: "bg-yellow-400",
  },
  danger: {
    label: "リスクあり",
    bg: "bg-orange-50",
    border: "border-orange-400",
    text: "text-orange-700",
    badge: "bg-orange-100 text-orange-800",
    icon: "🔶",
    gauge: "bg-orange-400",
  },
  critical: {
    label: "危険",
    bg: "bg-red-50",
    border: "border-red-400",
    text: "text-red-700",
    badge: "bg-red-100 text-red-800",
    icon: "🚨",
    gauge: "bg-red-500",
  },
};

interface PriceCardProps {
  title: string;
  price: number;
  cardStyle: string;
  titleStyle: string;
  badge?: string;
  badgeStyle?: string;
}

function PriceCard({ title, price, cardStyle, titleStyle, badge, badgeStyle }: PriceCardProps) {
  return (
    <div className={`rounded-xl border-2 p-4 flex flex-col gap-1 ${cardStyle}`}>
      <div className="flex items-center justify-between">
        <span className={`text-sm font-semibold ${titleStyle}`}>{title}</span>
        {badge && (
          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${badgeStyle}`}>{badge}</span>
        )}
      </div>
      <p className="text-2xl font-extrabold text-gray-900">
        {price.toLocaleString()}
        <span className="text-base font-normal text-gray-600 ml-1">万円</span>
      </p>
    </div>
  );
}

export default function DiagnosisResultCard({ result }: Props) {
  const { safePrice, aggressivePrice, dangerPrice, burdenRate, monthlyPayment, comment, level } = result;
  const config = levelConfig[level];

  // ゲージの幅：負担率 0% → 0%, 50%以上 → 100% でクリップ
  const gaugeWidth = Math.min((burdenRate / 50) * 100, 100);

  return (
    <div className={`rounded-2xl border-2 shadow-md overflow-hidden ${config.border}`}>
      {/* ヘッダー */}
      <div className={`px-6 py-4 flex items-center gap-3 ${config.bg}`}>
        <span className="text-2xl">{config.icon}</span>
        <div>
          <p className="text-xs text-gray-500">診断結果</p>
          <p className={`text-xl font-extrabold ${config.text}`}>{config.label}</p>
        </div>
      </div>

      <div className="bg-white px-6 py-5 space-y-6">
        {/* 価格カード 3枚 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <PriceCard
            title="安全購入価格"
            price={safePrice}
            cardStyle="border-emerald-300 bg-emerald-50"
            titleStyle="text-emerald-700"
            badge="推奨"
            badgeStyle="bg-emerald-200 text-emerald-800"
          />
          <PriceCard
            title="やや攻めの価格"
            price={aggressivePrice}
            cardStyle="border-yellow-300 bg-yellow-50"
            titleStyle="text-yellow-700"
          />
          <PriceCard
            title="危険ライン"
            price={dangerPrice}
            cardStyle="border-red-300 bg-red-50"
            titleStyle="text-red-700"
            badge="要注意"
            badgeStyle="bg-red-200 text-red-800"
          />
        </div>

        {/* 月返済額 */}
        <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
          <span className="text-sm text-gray-600">安全価格ベースの月々の返済額</span>
          <span className="text-xl font-bold text-gray-900">
            {monthlyPayment.toLocaleString()}
            <span className="text-sm font-normal text-gray-500 ml-1">万円 / 月</span>
          </span>
        </div>

        {/* 住居費負担率ゲージ */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">住居費負担率</span>
            <span className={`text-lg font-extrabold ${config.text}`}>
              {burdenRate.toFixed(1)}%
            </span>
          </div>
          <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
            {/* 区切り線：25%, 30%, 35% */}
            {[25, 30, 35].map((pct) => (
              <div
                key={pct}
                className="absolute top-0 bottom-0 w-px bg-white/70 z-10"
                style={{ left: `${(pct / 50) * 100}%` }}
              />
            ))}
            <div
              className={`h-full rounded-full transition-all duration-700 ${config.gauge}`}
              style={{ width: `${gaugeWidth}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-400">
            <span>0%</span>
            <span>25%</span>
            <span>30%</span>
            <span>35%</span>
            <span>50%+</span>
          </div>
        </div>

        {/* 診断コメント */}
        <div className={`rounded-xl p-4 ${config.bg} border ${config.border}`}>
          <p className={`text-sm font-semibold mb-1 ${config.text}`}>診断コメント</p>
          <p className="text-sm text-gray-700 leading-relaxed">{comment}</p>
        </div>

        {/* 注意書き */}
        <p className="text-xs text-gray-400 leading-relaxed">
          ※ 本診断は参考情報です。住宅ローンの審査条件・借入限度額・税金・修繕積立金などは考慮していません。
          実際の購入計画にはFPや金融機関への相談をお勧めします。
        </p>
      </div>
    </div>
  );
}
