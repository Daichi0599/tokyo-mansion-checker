"use client";

import { useState } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import DiagnosisForm from "@/components/DiagnosisForm";
import DiagnosisResultCard from "@/components/DiagnosisResult";
import PriceComparison from "@/components/PriceComparison";
import { diagnose } from "@/lib/calculator";
import { DiagnosisInput, DiagnosisResult } from "@/types";

export default function Home() {
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const [diagnosisInput, setDiagnosisInput] = useState<DiagnosisInput | null>(null);

  const handleSubmit = (input: DiagnosisInput) => {
    const diagnosis = diagnose(input);
    setResult(diagnosis);
    setDiagnosisInput(input);
    sendGAEvent("event", "diagnosis_run", {
      level: diagnosis.level,
      burden_rate: Math.round(diagnosis.burdenRate * 10) / 10,
      safe_price: diagnosis.safePrice,
    });
    // スムーズスクロールで結果へ移動
    setTimeout(() => {
      document.getElementById("result")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-2xl mx-auto px-4 py-10 space-y-8">
        {/* ヘッダー */}
        <header className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            🏙️ 都内マンション購入サポート
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
            都内マンション<br />
            <span className="text-blue-600">買って大丈夫？診断</span>
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed">
            世帯年収・頭金・金利などから、あなたに合った<br className="hidden sm:block" />
            安全な購入価格レンジを算出します。
          </p>
          <div className="flex flex-wrap justify-center gap-2 pt-1">
            {["20〜30代向け", "世帯年収1000〜1500万", "都内マンション検討者"].map((tag) => (
              <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* 入力フォーム */}
        <DiagnosisForm onSubmit={handleSubmit} />

        {/* 診断結果 */}
        {result && diagnosisInput && (
          <div id="result" className="scroll-mt-6 space-y-4">
            <DiagnosisResultCard result={result} />
            <PriceComparison
              input={diagnosisInput}
              defaultPrices={[result.safePrice, result.aggressivePrice, result.dangerPrice]}
            />
          </div>
        )}

        {/* フッター */}
        <footer className="text-center text-xs text-gray-400 pb-4">
          本ツールは参考情報の提供を目的としています。投資・金融アドバイスではありません。
        </footer>
      </div>
    </div>
  );
}
