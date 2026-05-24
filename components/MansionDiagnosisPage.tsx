"use client";

import { useState } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import DiagnosisForm       from "@/components/DiagnosisForm";
import DiagnosisResultCard from "@/components/DiagnosisResult";
import ResultTabs          from "@/components/ResultTabs";
import { diagnose } from "@/lib/calculator";
import { DiagnosisInput, DiagnosisResult } from "@/types";

/* ───────────────────────────────────────────
   モゲチェックCTA：レベル別コピー
─────────────────────────────────────────── */

const mogeCtaByLevel: Record<string, { title: string; desc: string; cta: string }> = {
  safe: {
    title: "🎉 審査は問題なし。あとは「金利を最安にする」だけ",
    desc:  "借入額が決まったら、次にやることは金利の比較のみ。銀行は言われなければ最安金利を提示しません。モゲチェックで一括比較すると、候補が見える化されます。",
    cta:   "今すぐ最安金利を無料でチェックする →",
  },
  caution: {
    title: "✅ 安全圏！金利を下げれば毎月の支払いがもっと楽に",
    desc:  "今の条件は良好です。ここで金利を0.3%下げるだけで、毎月の支払いをさらに数千円〜数万円減らせる可能性があります。比較しないと損するケースがほとんど。",
    cta:   "最安金利を無料で見つける →",
  },
  warning: {
    title: "⚡ 金利次第で安全圏に入れます。今すぐ比較を",
    desc:  "今の返済比率はやや高めですが、金利を下げることで改善できます。銀行を一括比較して最適なローンに切り替えれば、同じ物件でも毎月の負担が変わります。",
    cta:   "金利を下げて返済比率を改善する →",
  },
  danger: {
    title: "🔶 ローン条件の見直しで、負担率を大きく改善できます",
    desc:  "金利を下げることが最も効果的なコスト削減策です。複数の銀行と比較せずに契約すると、数百万円単位で損するリスクがあります。まず無料で確認してみましょう。",
    cta:   "無料でローン条件を最適化する →",
  },
  critical: {
    title: "🔴 購入前に、専門家への無料相談を強くお勧めします",
    desc:  "返済比率が高い場合でも、金利・頭金・返済期間の組み合わせ次第で大きく改善できます。モゲチェックの専門家が無料で最適な条件を提案してくれます。",
    cta:   "専門家に無料で相談してみる →",
  },
};

/* ───────────────────────────────────────────
   サブコンポーネント（インライン定義）
─────────────────────────────────────────── */

function TrustBadge({ icon, label }: { icon: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
      <span>{icon}</span>
      {label}
    </span>
  );
}

function BenefitCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 shadow-sm p-4">
      <span className="text-2xl shrink-0 mt-0.5">{icon}</span>
      <div>
        <p className="text-sm font-bold text-gray-800">{title}</p>
        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function LogicPoint({ step, title, desc }: { step: string; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-700 text-xs font-extrabold flex items-center justify-center mt-0.5">
        {step}
      </span>
      <div>
        <p className="text-sm font-bold text-gray-800">{title}</p>
        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full flex items-start justify-between gap-3 py-4 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-gray-800 leading-relaxed">{q}</span>
        <span className={`shrink-0 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>
      {open && (
        <p className="text-sm text-gray-600 leading-relaxed pb-4 pr-6">{a}</p>
      )}
    </div>
  );
}

/* ───────────────────────────────────────────
   メインページ
─────────────────────────────────────────── */

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
      // ④ 他ツールへの引き継ぎ用にlocalStorageへ保存
      try {
        localStorage.setItem("30lab_diagnosis_input", JSON.stringify(input));
        localStorage.setItem("30lab_safe_price", String(diagnosis.safePrice));
      } catch (_) {}
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
      <div className="max-w-2xl mx-auto px-4 py-10 space-y-10">

        {/* ─── 1. ヒーローセクション（ファーストビュー） ─── */}
        <header className="text-center space-y-5">

          {/* ターゲットタグ */}
          <div className="flex flex-wrap justify-center gap-2">
            {["共働き・20〜30代向け", "世帯年収1,000〜1,500万円帯", "新築・中古マンション対応"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full border border-blue-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* メインキャッチ */}
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
              「借りられる額」より<br />
              <span className="text-blue-600">「無理なく買える額」</span>がわかる<br />
              都内マンション購入診断
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed max-w-md mx-auto">
              世帯年収・頭金・生活費・管理費まで含めた<br className="hidden sm:block" />
              実質住居費で、安全購入価格を無料で算出します。
            </p>
          </div>

          {/* 安心バッジ */}
          <div className="flex flex-wrap justify-center gap-2">
            <TrustBadge icon="✓" label="完全無料" />
            <TrustBadge icon="✓" label="匿名OK" />
            <TrustBadge icon="✓" label="約3分" />
            <TrustBadge icon="✓" label="営業電話なし" />
            <TrustBadge icon="✓" label="データ保存なし" />
          </div>

          {/* CTAボタン */}
          <a
            href="#form"
            onClick={() => sendGAEvent("event", "hero_cta_click", {})}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-colors text-base shadow-md"
          >
            3分で安全購入価格をチェックする →
          </a>
        </header>

        {/* ─── 2. 診断フォーム（ファーストビュー直後） ─── */}
        <DiagnosisForm onSubmit={handleSubmit} isLoading={isLoading} />

        {/* ─── 3. この診断でわかること（フォームの下） ─── */}
        <details className="group">
          <summary className="cursor-pointer list-none flex items-center justify-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors py-1">
            <span className="group-open:hidden">▼ この診断でわかること・計算の考え方を見る</span>
            <span className="hidden group-open:inline">▲ 閉じる</span>
          </summary>

          <div className="mt-6 space-y-8">
            <section aria-labelledby="benefits-heading">
              <div className="text-center mb-5">
                <h2 id="benefits-heading" className="text-lg font-extrabold text-gray-800">
                  この診断でわかること
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                  便利な計算機ではなく、家計の判断材料になる診断を目指しています
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <BenefitCard
                  icon="🏠"
                  title="安全な購入価格の目安"
                  desc="年収・生活費・管理費から、家計を崩しにくい上限価格を算出"
                />
                <BenefitCard
                  icon="💰"
                  title="月々の実質住居費"
                  desc="ローン返済だけでなく、管理費・修繕積立金を含めた月額負担"
                />
                <BenefitCard
                  icon="⚖️"
                  title="負担率が安全か確認"
                  desc="年収に対する住居費の割合で「背伸びしすぎていないか」をチェック"
                />
                <BenefitCard
                  icon="📊"
                  title="条件を変えて比較"
                  desc="頭金・金利・返済年数を変えると月返済がどう変わるかをすぐ確認"
                />
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
              <div>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">診断の考え方</p>
                <h2 className="text-base font-extrabold text-gray-800">
                  「借りられる額」ではなく「無理なく返せる額」を見ます
                </h2>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  銀行の審査は年収の7〜8倍まで貸せるかを判断しますが、それが生活を圧迫しないとは限りません。
                  この診断は家計への影響を軸に、3つの観点で安全購入価格を算出します。
                </p>
              </div>
              <div className="space-y-4">
                <LogicPoint
                  step="①"
                  title="住居費負担率（ローン＋管理費）"
                  desc="月々の返済額と管理費・修繕積立金の合計が、世帯年収の25%以内を「安全圏」として算出。30%が背伸び圏、35%超が注意圏の目安です。"
                />
                <LogicPoint
                  step="②"
                  title="管理費・修繕積立金も込みで計算"
                  desc="都内マンションはローン以外に月2〜5万円の固定費が発生します。これを含めた「実質月負担」で診断するのがこのツールの特徴です。"
                />
                <LogicPoint
                  step="③"
                  title="頭金・金利・返済年数の影響を可視化"
                  desc="条件を変えると月返済額や負担率がどう変わるかを、診断後のシミュレーターで確認できます。"
                />
              </div>
              <div className="rounded-xl bg-blue-50 border border-blue-100 px-4 py-3">
                <p className="text-xs text-blue-700 leading-relaxed">
                  <strong>簡易診断について：</strong>
                  本ツールは元利均等返済の計算式をベースにした参考情報です。実際の審査結果・個別の返済能力を保証するものではありません。購入の最終判断は、FPや金融機関にご相談ください。
                </p>
              </div>
            </section>
          </div>
        </details>

        {/* ─── 1.5. 30Lab 他ツール案内（コンパクト） ─── */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <span className="text-xs text-gray-400 font-semibold">30Labの他のツール:</span>
          <a href="/car" className="inline-flex items-center gap-1.5 text-xs font-bold bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700 hover:text-blue-700 px-3 py-1.5 rounded-full shadow-sm transition-colors">
            🚗 車コスト診断
          </a>
          <a href="/child" className="inline-flex items-center gap-1.5 text-xs font-bold bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700 hover:text-blue-700 px-3 py-1.5 rounded-full shadow-sm transition-colors">
            👶 子育て費用
          </a>
        </div>

        {/* ─── 5. 診断結果 ─── */}
        {result && diagnosisInput && (
          <div id="result" className="scroll-mt-6 space-y-4">

            {/* ① 診断結果カード */}
            <DiagnosisResultCard result={result} input={diagnosisInput} />

            {/* ① .5 Step2バナー */}
            <a
              href="/check"
              onClick={() => sendGAEvent("event", "step2_banner_click", { level: result.level })}
              className="flex items-center justify-between gap-3 rounded-2xl border-2 border-blue-300 bg-gradient-to-r from-blue-50 to-indigo-50 px-5 py-4 hover:border-blue-400 hover:bg-blue-50 transition-colors"
            >
              <div>
                <p className="text-xs font-bold text-blue-600 mb-0.5">Step 2 — 物件を評価する</p>
                <p className="text-sm font-bold text-gray-900">気になる物件を診断する 🔍</p>
                <p className="text-xs text-gray-500 mt-0.5">坪単価・管理費・10年後推定を即チェック。結果をシェアして相談できます。</p>
              </div>
              <span className="shrink-0 text-blue-600 font-bold text-lg">→</span>
            </a>

            {/* ② モゲチェック（メインアフィリエイト） */}
            {(() => {
              // 金利0.3%削減時の節約額を計算
              const safeLoan = Math.max(0, result.safePrice - diagnosisInput.downPayment);
              const r = diagnosisInput.interestRate;
              const y = diagnosisInput.repaymentYears;
              const calcM = (loan: number, rate: number, years: number) => {
                if (rate <= 0) return loan / (years * 12);
                const rm = rate / 100 / 12;
                const n = years * 12;
                const f = Math.pow(1 + rm, n);
                return loan * rm * f / (f - 1);
              };
              const mImproved = calcM(safeLoan, Math.max(0.01, r - 0.3), y);
              const savingPerMonth = Math.round((result.monthlyPayment - mImproved) * 10000); // 円
              const savingTotal = Math.round(savingPerMonth * 12 * y / 10000); // 万円
              const showSaving = savingPerMonth >= 2000 && safeLoan >= 500;

              return (
                <div className="rounded-2xl border-2 border-blue-400 bg-white shadow-md overflow-hidden">
                  {/* ヘッダーバー */}
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3.5 flex items-start justify-between gap-2">
                    <p className="text-white font-extrabold text-sm leading-snug">
                      {mogeCtaByLevel[result.level]?.title ?? "住宅ローンを金利比較して月返済を下げよう"}
                    </p>
                    <span className="text-xs text-blue-200 shrink-0 mt-0.5 whitespace-nowrap">広告</span>
                  </div>
                  {/* ボディ */}
                  <div className="px-5 py-4 space-y-3">
                    {/* パーソナライズされた節約額ハイライト */}
                    {showSaving && (
                      <div className="flex items-center gap-2.5 bg-amber-50 border border-amber-200 rounded-xl px-3.5 py-2.5">
                        <span className="text-lg shrink-0">💡</span>
                        <p className="text-xs leading-relaxed text-amber-900">
                          あなたの借入条件なら、金利が<strong>0.3%下がると</strong>月<strong className="text-orange-600 text-sm">約{savingPerMonth.toLocaleString()}円</strong>・{y}年で<strong className="text-orange-600 text-sm">約{savingTotal}万円</strong>の節約になります
                        </p>
                      </div>
                    )}
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {mogeCtaByLevel[result.level]?.desc ?? "借入額が固まったら金利比較が最後のステップ。最短3分・完全無料。"}
                    </p>
                    {/* メインCTAボタン（全幅） */}
                    <a
                      href="https://px.a8.net/svt/ejp?a8mat=4AZGC3+F9J44Y+3SUE+15RCDE"
                      rel="nofollow noopener"
                      target="_blank"
                      onClick={() => sendGAEvent("event", "affiliate_click", { link_name: "モゲチェック", level: result.level })}
                      className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-extrabold text-base py-4 rounded-xl text-center transition-colors shadow-sm"
                    >
                      {mogeCtaByLevel[result.level]?.cta ?? "無料で最安金利を見つける →"}
                    </a>
                    {/* 信頼ポイント */}
                    <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center">
                      {["完全無料", "最短3分", "登録不要", "銀行に個別交渉不要"].map((t) => (
                        <span key={t} className="text-xs text-gray-400">✓ {t}</span>
                      ))}
                    </div>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img width={1} height={1} src="https://www12.a8.net/0.gif?a8mat=4AZGC3+F9J44Y+3SUE+15RCDE" alt="" style={{ display: "block" }} />
                </div>
              );
            })()}

            {/* ③ タブ式ツール群 */}
            <ResultTabs result={result} input={diagnosisInput} />

            {/* ④ 火災保険（サブアフィリエイト） */}
            <div className="rounded-2xl border border-orange-300 bg-orange-50 px-5 py-4 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-1">
                  <p className="text-sm font-bold text-gray-900">🔥 火災保険、見積もり忘れていませんか？</p>
                  <p className="text-xs text-gray-600 leading-relaxed">マンション購入時に必須の火災保険。複数社を比較しないと数万円単位で損することも。一括見積もりは完全無料で、回答者全員にセブンプレミアムカフェラテをプレゼント。</p>
                </div>
                <span className="text-xs text-orange-500 shrink-0 whitespace-nowrap">広告</span>
              </div>
              <a
                href="https://px.a8.net/svt/ejp?a8mat=4AZGC3+FBBEYA+2PS+2NBPO2"
                rel="nofollow noopener"
                target="_blank"
                onClick={() => sendGAEvent("event", "affiliate_click", { link_name: "火災保険一括見積もり" })}
                className="flex items-center justify-center w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm py-3 rounded-xl text-center transition-colors"
              >
                無料で火災保険を一括見積もりする →
              </a>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img width={1} height={1} src="https://www18.a8.net/0.gif?a8mat=4AZGC3+FBBEYA+2PS+2NBPO2" alt="" style={{ display: "block" }} />
            </div>

          </div>
        )}

        {/* ─── 6. FAQ ─── */}
        <section aria-labelledby="faq-heading" className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-6">
          <h2 id="faq-heading" className="text-base font-extrabold text-gray-800 mb-1 text-center">
            よくある質問
          </h2>
          <p className="text-xs text-gray-500 mb-5 text-center">診断についてよく寄せられる疑問にお答えします</p>
          <div className="divide-y divide-gray-100">
            <FaqItem
              q="この診断はどこまで正確ですか？"
              a="元利均等返済の計算式をベースにしており、一般的なFP（ファイナンシャルプランナー）の試算と同水準の精度があります。ただし簡易診断のため、実際の住宅ローン審査結果や個別の返済能力を保証するものではありません。参考情報としてご活用ください。"
            />
            <FaqItem
              q="住宅ローンの事前審査額とは何が違いますか？"
              a="銀行の審査は「年収の7〜8倍まで貸せるか」という上限を判断します。この診断は「返済が家計を圧迫しないか」という視点で、生活費・管理費も踏まえた無理のない購入価格を算出します。審査が通っても生活が苦しくなるケースがあるため、この診断も並行して確認することをお勧めします。"
            />
            <FaqItem
              q="新築と中古どちらにも使えますか？"
              a="はい、どちらにもお使いいただけます。購入価格と諸条件を入力することで、物件種別に関わらず住居費負担率を確認できます。なお、中古物件の場合はリフォーム費用も別途考慮してください。"
            />
            <FaqItem
              q="夫婦ペアローンにも使えますか？"
              a="はい。世帯年収の欄に夫婦合算の収入を入力することで、ペアローンでの購入を想定した診断が可能です。ただし、ペアローンは一方の収入が減った際のリスクが高いため、余裕のある負担率を目指すことをお勧めします。"
            />
            <FaqItem
              q="入力内容は保存・送信されますか？"
              a="保存・送信は一切されません。入力データはブラウザ上でのみ処理されており、外部サーバーへの送信や個人情報の取得は行っていません。匿名で安心してご利用いただけます。"
            />
          </div>
        </section>

        {/* ─── フッター ─── */}
        <footer className="text-center text-xs text-gray-400 pb-4 space-y-1">
          <p>本ツールは参考情報の提供を目的としています。投資・金融アドバイスではありません。</p>
          <p>© 2025 都内マンション購入診断</p>
        </footer>
      </div>
    </div>
  );
}
