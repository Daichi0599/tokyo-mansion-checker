"use client";

import { useState } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import DiagnosisForm       from "@/components/DiagnosisForm";
import DiagnosisResultCard from "@/components/DiagnosisResult";
import ResultTabs          from "@/components/ResultTabs";
import { diagnose } from "@/lib/calculator";
import { DiagnosisInput, DiagnosisResult } from "@/types";

export default function Home() {
  const [result, setResult]                 = useState<DiagnosisResult | null>(null);
  const [diagnosisInput, setDiagnosisInput] = useState<DiagnosisInput | null>(null);
  const [isLoading, setIsLoading]           = useState(false);

  const handleSubmit = (input: DiagnosisInput) => {
    setIsLoading(true);
    setResult(null);
    setTimeout(() => {
      const diagnosis = diagnose(input);
      setResult(diagnosis);
      setDiagnosisInput(input);
      setIsLoading(false);
      sendGAEvent("event", "diagnosis_run", {
        level:       diagnosis.level,
        burden_rate: Math.round(diagnosis.burdenRate * 10) / 10,
        safe_price:  diagnosis.safePrice,
      });
      setTimeout(() => {
        document.getElementById("result")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }, 600);
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
        <DiagnosisForm onSubmit={handleSubmit} isLoading={isLoading} />

        {/* 診断結果 */}
        {result && diagnosisInput && (
          <div id="result" className="scroll-mt-6 space-y-4">

            {/* ① 診断結果カード（常時表示） */}
            <DiagnosisResultCard result={result} input={diagnosisInput} />

            {/* ② モゲチェック（メインアフィリエイト） */}
            <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1 space-y-1">
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wide">PR</p>
                <p className="text-sm font-bold text-gray-900">住宅ローン、どこが一番お得？ — モゲチェックで無料比較</p>
                <p className="text-xs text-gray-500">借入額が決まったら金利比較が次のステップ。最短3分・完全無料。</p>
              </div>
              <a
                href="https://px.a8.net/svt/ejp?a8mat=4AZGC3+F9J44Y+3SUE+15RCDE"
                rel="nofollow noopener"
                target="_blank"
                onClick={() => sendGAEvent("event", "affiliate_click", { link_name: "モゲチェック" })}
                className="shrink-0 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl text-center transition-colors"
              >
                無料で金利を比較する →
              </a>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img width={1} height={1} src="https://www12.a8.net/0.gif?a8mat=4AZGC3+F9J44Y+3SUE+15RCDE" alt="" style={{ display: "block" }} />
            </div>

            {/* ③ タブ式ツール群 */}
            <ResultTabs result={result} input={diagnosisInput} />

            {/* ④ 火災保険（サブアフィリエイト） */}
            <div className="rounded-2xl border border-orange-200 bg-orange-50 px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1 space-y-1">
                <p className="text-xs font-bold text-orange-600 uppercase tracking-wide">PR</p>
                <p className="text-sm font-bold text-gray-900">火災保険、一括見積もりで比較しよう</p>
                <p className="text-xs text-gray-500">マンション購入時に必須の火災保険。複数社を比較して最安値を確認。回答者全員にセブンプレミアムカフェラテをプレゼント。</p>
              </div>
              <a
                href="https://px.a8.net/svt/ejp?a8mat=4AZGC3+FBBEYA+2PS+2NBPO2"
                rel="nofollow noopener"
                target="_blank"
                onClick={() => sendGAEvent("event", "affiliate_click", { link_name: "火災保険一括見積もり" })}
                className="shrink-0 inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl text-center transition-colors"
              >
                無料で見積もりを比較 →
              </a>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img width={1} height={1} src="https://www18.a8.net/0.gif?a8mat=4AZGC3+FBBEYA+2PS+2NBPO2" alt="" style={{ display: "block" }} />
            </div>

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
