"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { DiagnosisInput, DiagnosisResult } from "@/types";

interface Props {
  result: DiagnosisResult;
  input?: DiagnosisInput;
}

const levelConfig = {
  safe: {
    label:   "余裕あり",
    bg:      "bg-emerald-50",
    border:  "border-emerald-400",
    text:    "text-emerald-700",
    badge:   "bg-emerald-100 text-emerald-800",
    icon:    "✅",
    gauge:   "bg-emerald-400",
  },
  caution: {
    label:   "安全圏",
    bg:      "bg-blue-50",
    border:  "border-blue-400",
    text:    "text-blue-700",
    badge:   "bg-blue-100 text-blue-800",
    icon:    "🟢",
    gauge:   "bg-blue-400",
  },
  warning: {
    label:   "やや背伸び",
    bg:      "bg-yellow-50",
    border:  "border-yellow-400",
    text:    "text-yellow-700",
    badge:   "bg-yellow-100 text-yellow-800",
    icon:    "⚠️",
    gauge:   "bg-yellow-400",
  },
  danger: {
    label:   "要注意",
    bg:      "bg-orange-50",
    border:  "border-orange-400",
    text:    "text-orange-700",
    badge:   "bg-orange-100 text-orange-800",
    icon:    "🔶",
    gauge:   "bg-orange-400",
  },
  critical: {
    label:   "危険",
    bg:      "bg-red-50",
    border:  "border-red-400",
    text:    "text-red-700",
    badge:   "bg-red-100 text-red-800",
    icon:    "🚨",
    gauge:   "bg-red-500",
  },
};

interface PriceCardProps {
  title:      string;
  subtitle:   string;
  price:      number;
  cardStyle:  string;
  titleStyle: string;
  badge?:     string;
  badgeStyle?: string;
}

function PriceCard({ title, subtitle, price, cardStyle, titleStyle, badge, badgeStyle }: PriceCardProps) {
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
      <p className="text-xs text-gray-400 leading-relaxed">{subtitle}</p>
    </div>
  );
}

export default function DiagnosisResultCard({ result, input }: Props) {
  const { safePrice, aggressivePrice, dangerPrice, burdenRate, monthlyPayment, monthlyTotal, comment, level } = result;
  const config = levelConfig[level];
  const managementFee = input?.managementFee ?? 0;

  // ゲージの幅：負担率 0% → 0%, 50%以上 → 100% でクリップ
  const gaugeWidth = Math.min((burdenRate / 50) * 100, 100);

  // Xシェアテキスト
  const shareText = input
    ? `都内マンション購入診断してみた！\n\n${config.icon} 判定：${config.label}\n🏠 安全購入価格：${safePrice.toLocaleString()}万円\n💰 月々の実質住居費：${monthlyTotal.toFixed(1)}万円\n📊 住居費負担率：${burdenRate.toFixed(1)}%\n\nあなたも無料で診断できます👇\n#マンション購入 #住宅ローン #都内マンション`
    : "";

  return (
    <div className={`rounded-2xl border-2 shadow-md overflow-hidden ${config.border}`}>
      {/* ヒーローヘッダー */}
      <div className={`px-6 py-8 flex flex-col items-center text-center gap-2 ${config.bg}`}>
        <span className={`text-3xl font-black ${config.text}`}>
          {config.icon} {config.label}
        </span>
        <p className="text-sm text-gray-500 mt-1">無理なく買える安全購入価格は</p>
        <p className="text-5xl sm:text-6xl font-black text-gray-900 leading-none">
          {safePrice.toLocaleString()}
          <span className="text-2xl font-normal text-gray-500 ml-2">万円</span>
        </p>
        <p className={`text-sm font-semibold mt-1 ${config.text}`}>
          住居費負担率 {burdenRate.toFixed(1)}%（ローン＋管理費ベース）
        </p>
      </div>

      <div className="bg-white px-6 py-5 space-y-6">
        {/* 価格カード 3枚 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <PriceCard
            title="安全圏"
            subtitle="家計を崩しにくい目安"
            price={safePrice}
            cardStyle="border-emerald-300 bg-emerald-50"
            titleStyle="text-emerald-700"
            badge="推奨"
            badgeStyle="bg-emerald-200 text-emerald-800"
          />
          <PriceCard
            title="背伸び圏"
            subtitle="購入可能だが余裕は少ない"
            price={aggressivePrice}
            cardStyle="border-yellow-300 bg-yellow-50"
            titleStyle="text-yellow-700"
          />
          <PriceCard
            title="注意圏"
            subtitle="家計への圧迫リスクあり"
            price={dangerPrice}
            cardStyle="border-red-300 bg-red-50"
            titleStyle="text-red-700"
            badge="要注意"
            badgeStyle="bg-red-200 text-red-800"
          />
        </div>

        {/* 月々の住居費内訳 */}
        <div className="rounded-xl bg-gray-50 border border-gray-100 px-4 py-4 space-y-2.5">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">月々の住居費内訳（安全価格ベース）</p>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>ローン返済額</span>
              <span className="font-semibold text-gray-900">{monthlyPayment.toFixed(1)} 万円</span>
            </div>
            {managementFee > 0 && (
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>管理費・修繕積立金</span>
                <span className="font-semibold text-gray-900">{managementFee.toFixed(1)} 万円</span>
              </div>
            )}
            <div className="border-t border-gray-200 pt-1.5 flex items-center justify-between">
              <span className="text-sm font-bold text-gray-700">月々の実質住居費</span>
              <span className="text-xl font-black text-gray-900">
                {monthlyTotal.toFixed(1)}
                <span className="text-sm font-normal text-gray-500 ml-1">万円 / 月</span>
              </span>
            </div>
          </div>
          {managementFee > 0 && (
            <p className="text-xs text-gray-400 leading-relaxed pt-1">
              ※ 都内マンションはローン以外に管理費・修繕積立金が毎月かかります。これらを含めた実質負担で診断しています。
            </p>
          )}
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
          <div className="flex justify-between text-xs text-gray-300">
            <span></span>
            <span>安全圏</span>
            <span>背伸び圏</span>
            <span>注意圏</span>
            <span></span>
          </div>
        </div>

        {/* 診断コメント */}
        <div className={`rounded-xl p-4 ${config.bg} border ${config.border}`}>
          <p className={`text-sm font-semibold mb-1 ${config.text}`}>診断コメント</p>
          <p className="text-sm text-gray-700 leading-relaxed">{comment}</p>
        </div>

        {/* シェアボタン（X + Threads） */}
        {input && (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent("https://tokyo-mansion-checker.vercel.app")}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sendGAEvent("event", "share_click", { platform: "x", level })}
                className="flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white font-bold py-3 rounded-xl transition-colors text-sm"
              >
                <span className="font-bold">𝕏</span>
                <span>Xでシェア</span>
              </a>
              <a
                href={`https://www.threads.net/intent/post?text=${encodeURIComponent(shareText + "\nhttps://tokyo-mansion-checker.vercel.app")}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sendGAEvent("event", "share_click", { platform: "threads", level })}
                className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 rounded-xl transition-colors text-sm"
              >
                <svg width="16" height="16" viewBox="0 0 192 192" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.348-10.548h.232c8.248.053 14.474 2.452 18.515 7.129 2.932 3.405 4.893 8.111 5.864 14.05-7.314-1.243-15.224-1.626-23.68-1.14-23.82 1.371-39.134 15.264-38.105 34.568.522 9.792 5.4 18.216 13.735 23.719 7.047 4.652 16.124 6.927 25.557 6.412 12.458-.683 22.231-5.436 29.049-14.127 5.178-6.6 8.453-15.153 9.899-25.93 5.937 3.583 10.337 8.298 12.767 13.966 4.132 9.635 4.373 25.468-8.546 38.376-11.319 11.308-24.925 16.2-45.488 16.351-22.809-.169-40.06-7.484-51.275-21.742C35.236 139.966 29.808 120.682 29.605 96c.203-24.682 5.63-43.966 16.133-57.317C56.954 24.425 74.204 17.11 97.013 16.94c22.975.17 40.526 7.52 52.171 21.847 5.71 7.026 10.015 15.86 12.853 26.162l16.147-4.308c-3.44-12.68-8.853-23.606-16.219-32.668C147.036 9.607 125.202.195 97.07 0h-.113C68.882.195 47.292 9.643 32.788 28.08 19.882 44.485 13.224 67.315 13.01 96v.04c.214 28.685 6.872 51.515 19.778 67.92 14.504 18.437 36.094 27.885 64.172 28.08H97.07c24.366-.169 41.744-6.537 55.56-20.34 18.778-18.761 18.236-42.114 12.025-56.48-4.317-10.063-12.477-18.268-23.118-23.232Z"/>
                </svg>
                <span>Threadsでシェア</span>
              </a>
            </div>

            {/* LINEでツールを知人に紹介 */}
            <a
              href={`https://line.me/R/msg/text/?${encodeURIComponent("都内マンション購入を検討中なら、このツールが参考になるかも。\n無理なく買える価格を3分で無料診断できます👇\nhttps://tokyo-mansion-checker.vercel.app")}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sendGAEvent("event", "share_click", { platform: "line", level })}
              className="flex items-center justify-center gap-2 w-full bg-[#06C755] hover:bg-[#05b34c] text-white font-bold py-3 rounded-xl transition-colors text-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.547 1.034 4.843 2.715 6.516.145.143.226.338.208.542l-.303 2.197c-.05.359.318.637.644.468l2.451-1.28c.168-.088.365-.104.544-.044.876.294 1.82.454 2.741.454 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm-3.5 7.5h3a.75.75 0 0 1 0 1.5H9.25v1.25H11.5a.75.75 0 0 1 0 1.5H8.5a.75.75 0 0 1-.75-.75v-4.5A.75.75 0 0 1 8.5 7.75h3a.75.75 0 0 1 0 1.5H9.25V9.5zm7.25 3.75a.75.75 0 0 1-.75.75h-.26l-2.49-3.32V13a.75.75 0 0 1-1.5 0V8.5a.75.75 0 0 1 1.26-.553L14.5 11.27V8.5a.75.75 0 0 1 1.5 0v4.75z"/>
              </svg>
              <span>LINEで知人に紹介する</span>
            </a>
          </div>
        )}

        {/* 免責事項 */}
        <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 space-y-2">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">免責事項</p>
          <p className="text-xs text-gray-500 leading-relaxed">
            本ツールの診断結果は、入力された年収・頭金・金利・返済期間をもとにした
            <strong className="text-gray-700">参考情報</strong>
            であり、住宅購入の可否や融資額を保証するものではありません。
          </p>
          <ul className="text-xs text-gray-500 leading-relaxed space-y-1 list-disc list-inside">
            <li>住宅ローン審査の結果は金融機関の判断によります。</li>
            <li>固定資産税・仲介手数料・リフォーム費等の諸費用は含まれていません。</li>
            <li>金利は将来変動する可能性があり、変動金利の場合は返済額が増加することがあります。</li>
            <li>実際の購入計画はファイナンシャルプランナーや金融機関にご相談ください。</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
