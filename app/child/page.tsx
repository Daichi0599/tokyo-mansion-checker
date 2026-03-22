"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

/* ───────────────────────────────────────────
   Types
─────────────────────────────────────────── */

type NumChildren = 1 | 2 | 3;
type NurseryType = "hoiku_public" | "hoiku_private";
type SchoolPolicy = "all_public" | "junior_private" | "elem_private";
type UniversityType = "national" | "private_arts" | "private_science";
type ExtracurricularsLevel = "none" | "standard" | "enriched";

interface ChildInput {
  numChildren: NumChildren;
  nursery: NurseryType;
  schoolPolicy: SchoolPolicy;
  university: UniversityType;
  extracurriculars: ExtracurricularsLevel;
}

interface PhaseBreakdown {
  label: string;
  ageRange: string;
  costPerChild: number;
}

interface ChildResult {
  phases: PhaseBreakdown[];
  totalPerChild: number;
  grandTotal: number;
  monthlyBurden: number;
}

/* ───────────────────────────────────────────
   Calculation Logic
─────────────────────────────────────────── */

function calculateCosts(input: ChildInput): ChildResult {
  const { nursery, schoolPolicy, university, extracurriculars } = input;

  // 0-2歳 (36ヶ月)
  const nurseryCost = nursery === "hoiku_public" ? 4 * 36 : 7 * 36; // 万円
  const babyGoods = 50; // 万円 (初期一括)
  const phase0to2 = nurseryCost + babyGoods;

  // 3-5歳 (無償化対象)
  const phase3to5 = 0.5 * 36; // 18万

  // 小学校 (72ヶ月)
  const elemRate =
    schoolPolicy === "elem_private" ? 5 : 0.5;
  const phase6to11 = elemRate * 72;

  // 中学校 (36ヶ月)
  const juniorRate =
    schoolPolicy === "all_public" ? 0.5 : 7;
  const phase12to14 = juniorRate * 36;

  // 高校 (36ヶ月)
  const highRate =
    schoolPolicy === "all_public" ? 2 : 6;
  const phase15to17 = highRate * 36;

  // 大学 (4年)
  let univCost: number;
  if (university === "national") {
    univCost = 54 * 4 + 28; // 244万
  } else if (university === "private_arts") {
    univCost = 80 * 4 + 30; // 350万
  } else {
    univCost = 120 * 4 + 30; // 510万
  }

  // 習い事 (6歳〜18歳 = 144ヶ月)
  let extraCost: number;
  if (extracurriculars === "none") {
    extraCost = 0;
  } else if (extracurriculars === "standard") {
    extraCost = 2 * 144; // 288万
  } else {
    extraCost = 5 * 144; // 720万
  }

  // フェーズカード用集計
  const phases: PhaseBreakdown[] = [
    {
      label: "乳幼児期",
      ageRange: "0〜5歳",
      costPerChild: phase0to2 + phase3to5,
    },
    {
      label: "小学期",
      ageRange: "6〜11歳",
      costPerChild: phase6to11,
    },
    {
      label: "中高期",
      ageRange: "12〜17歳",
      costPerChild: phase12to14 + phase15to17,
    },
    {
      label: "大学期",
      ageRange: "18〜21歳",
      costPerChild: univCost,
    },
  ];

  // 習い事は小学〜高校にまたがるため総額に加算
  const basePerChild = phases.reduce((sum, p) => sum + p.costPerChild, 0);
  const totalPerChild = basePerChild + extraCost;
  const grandTotal = totalPerChild * input.numChildren;

  // 月換算: 0歳〜大学卒業22歳 = 264ヶ月
  const monthlyBurden = Math.round(grandTotal / 264);

  return { phases, totalPerChild, grandTotal, monthlyBurden };
}

/* ───────────────────────────────────────────
   Diagnosis Comment
─────────────────────────────────────────── */

function getDiagnosisComment(result: ChildResult, numChildren: NumChildren): {
  level: "green" | "yellow" | "orange" | "red";
  message: string;
} {
  const total = result.grandTotal;

  if (total < 1000) {
    return {
      level: "green",
      message: `総額${total.toLocaleString()}万円の準備が必要です。比較的コントロールしやすい水準です。学資保険や投資信託で計画的に積み立てれば、住宅ローンとの両立も十分可能です。`,
    };
  } else if (total < 2000) {
    return {
      level: "yellow",
      message: `総額${total.toLocaleString()}万円の準備が必要です。住宅ローンと合わせてキャッシュフロー計画が重要です。月々の積立額の目安は${result.monthlyBurden}万円。早めに学資保険やNISAの活用を検討しましょう。`,
    };
  } else if (total < 3000) {
    return {
      level: "orange",
      message: `総額${total.toLocaleString()}万円は高水準です。住宅ローンと並行して子育て費用を賄うには、世帯収入と支出の管理が欠かせません。FPへの相談でキャッシュフロー全体を最適化することをおすすめします。`,
    };
  } else {
    return {
      level: "red",
      message: `総額${total.toLocaleString()}万円は非常に高い水準です。教育方針の見直しや段階的な費用計画が必要です。住宅ローンとの両立には、収入アップ・投資・費用の優先順位付けをFPと相談することを強くおすすめします。`,
    };
  }
}

/* ───────────────────────────────────────────
   UI Components
─────────────────────────────────────────── */

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
        <span className={`shrink-0 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>▼</span>
      </button>
      {open && <p className="text-sm text-gray-600 leading-relaxed pb-4 pr-6">{a}</p>}
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  hint?: string;
}) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-semibold text-gray-700">{label}</label>
      {hint && <p className="text-xs text-gray-400">{hint}</p>}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all appearance-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function PhaseCard({ phase, index }: { phase: PhaseBreakdown; index: number }) {
  const colors = [
    { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", dot: "bg-blue-500" },
    { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", dot: "bg-emerald-500" },
    { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700", dot: "bg-amber-500" },
    { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-700", dot: "bg-purple-500" },
  ];
  const c = colors[index % colors.length];

  return (
    <div className={`rounded-xl border ${c.border} ${c.bg} p-4`}>
      <div className="flex items-center gap-2 mb-2">
        <span className={`w-2 h-2 rounded-full ${c.dot} shrink-0`} />
        <span className={`text-xs font-bold ${c.text} uppercase tracking-wide`}>
          {phase.label}
        </span>
        <span className="text-xs text-gray-400 ml-1">{phase.ageRange}</span>
      </div>
      <p className={`text-xl font-extrabold ${c.text}`}>
        {phase.costPerChild.toLocaleString()}
        <span className="text-sm font-semibold ml-1">万円</span>
      </p>
      <p className="text-xs text-gray-500 mt-0.5">1人あたり</p>
    </div>
  );
}

/* ───────────────────────────────────────────
   Main Page
─────────────────────────────────────────── */

export default function ChildCostPage() {
  const [input, setInput] = useState<ChildInput>({
    numChildren: 2,
    nursery: "hoiku_public",
    schoolPolicy: "all_public",
    university: "private_arts",
    extracurriculars: "standard",
  });
  const [result, setResult] = useState<ChildResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mansionIncome, setMansionIncome] = useState<number | null>(null);

  // ④ マンション診断の年収を引き継ぎ
  useEffect(() => {
    try {
      const saved = localStorage.getItem("30lab_diagnosis_input");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (typeof parsed.annualIncome === "number") {
          setMansionIncome(parsed.annualIncome);
        }
      }
    } catch (_) {}
  }, []);

  const handleCalculate = () => {
    setIsLoading(true);
    setResult(null);
    setTimeout(() => {
      const r = calculateCosts(input);
      setResult(r);
      setIsLoading(false);
      setTimeout(() => {
        document.getElementById("child-result")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }, 500);
  };

  const update = <K extends keyof ChildInput>(key: K, value: ChildInput[K]) => {
    setInput((prev) => ({ ...prev, [key]: value }));
    setResult(null);
  };

  const diagnosis = result ? getDiagnosisComment(result, input.numChildren) : null;

  const diagnosisColors = {
    green: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", icon: "✅" },
    yellow: { bg: "bg-yellow-50", border: "border-yellow-200", text: "text-yellow-700", icon: "⚠️" },
    orange: { bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-700", icon: "🔶" },
    red: { bg: "bg-red-50", border: "border-red-200", text: "text-red-700", icon: "🚨" },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-2xl mx-auto px-4 py-10 space-y-8">

        {/* ─── ヘッダー ─── */}
        <header className="space-y-5 text-center">

          {/* タグ */}
          <div className="flex flex-wrap gap-2 justify-center">
            {["アラサー共働き向け", "高所得世帯", "0歳〜大学卒業まで対応"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full border border-blue-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* タイトル */}
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
              子育て総費用<br />
              <span className="text-blue-600">シミュレーター</span>
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed max-w-md mx-auto">
              保育園・学校・大学・習い事の選択肢ごとに、<br className="hidden sm:block" />
              0歳〜大学卒業までの総費用を即座に試算します。
            </p>
          </div>

          {/* バッジ */}
          <div className="flex flex-wrap gap-2 justify-center">
            {["完全無料", "匿名OK", "データ保存なし", "約1分"].map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full"
              >
                ✓ {label}
              </span>
            ))}
          </div>
        </header>

        {/* ─── この診断でわかること ─── */}
        <section aria-labelledby="benefits-child-heading">
          <div className="text-center mb-5">
            <h2 id="benefits-child-heading" className="text-lg font-extrabold text-gray-800">この診断でわかること</h2>
            <p className="text-xs text-gray-500 mt-1">教育費の「全体像」を把握して、住宅ローンとの両立を判断できます</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <BenefitCard icon="📚" title="0歳〜大学卒業まで一括試算" desc="保育園・小中高・大学・習い事のフェーズ別費用を一覧化。教育方針を変えると総額がどう変わるかをすぐ確認できます。" />
            <BenefitCard icon="💰" title="月換算の積立目安がわかる" desc="総額を264ヶ月（0〜22歳）で割った月々の積立目安を表示。学資保険やNISAの目標金額設定に活用できます。" />
            <BenefitCard icon="⚖️" title="教育方針別のコスト差を比較" desc="全公立 vs 中学から私立 vs 小学から私立で、子ども1人あたりの差額がひと目でわかります。" />
            <BenefitCard icon="🏠" title="住宅ローンとの両立を確認" desc="マンション診断と連携し、月の積立目安が年収比何%かを表示。住宅費と教育費を合わせた家計全体で判断できます。" />
          </div>
        </section>

        {/* ─── 計算の考え方 ─── */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
          <div>
            <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">計算の考え方</p>
            <h2 className="text-base font-extrabold text-gray-800">「フェーズ別コスト」で教育費の全体像を把握します</h2>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              子育て費用は「生まれた瞬間から大学卒業まで」の長期にわたります。フェーズごとに費用の山があり、特に大学期と中高私立期は一時的に家計負担が急増します。
            </p>
          </div>
          <div className="space-y-4">
            <LogicPoint step="①" title="乳幼児期が最初の山（0〜5歳）" desc="保育園費用（公立月4万・私立月7万）と初期ベビー用品50万が重なります。3〜5歳は幼保無償化の対象ですが、副食費等の実費は発生します。" />
            <LogicPoint step="②" title="教育方針で中高期が大きく変わる" desc="全公立なら中高の月コストは約0.5〜2万円ですが、中学から私立になると月7万円に跳ね上がります。この差が最も影響を与える選択です。" />
            <LogicPoint step="③" title="大学費用は4年間で一気にかかる" desc="国立244万・私立文系350万・私立理系510万（入学金込み）。奨学金・学資保険・NISAなどの準備が間に合うよう、早めの積立計画が重要です。" />
          </div>
          <div className="rounded-xl bg-blue-50 border border-blue-100 px-4 py-3">
            <p className="text-xs text-blue-700 leading-relaxed">
              <strong>簡易試算について：</strong>費用は文部科学省・各種調査の平均値をもとにした参考値です。地域・学校・家庭状況により実際の費用は異なります。
            </p>
          </div>
        </section>

        {/* ─── 入力フォーム ─── */}
        <section
          id="form"
          className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-6 space-y-5"
        >
          <div>
            <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">
              条件を入力
            </p>
            <h2 className="text-base font-extrabold text-gray-800">
              お子さんの教育プランを選択してください
            </h2>
          </div>

          <div className="space-y-4">
            <SelectField
              label="子供の人数"
              value={String(input.numChildren)}
              onChange={(v) => update("numChildren", Number(v) as NumChildren)}
              options={[
                { value: "1", label: "1人" },
                { value: "2", label: "2人" },
                { value: "3", label: "3人" },
              ]}
            />

            <SelectField
              label="保育園（0〜2歳）"
              value={input.nursery}
              onChange={(v) => update("nursery", v as NurseryType)}
              hint="3〜5歳は幼保無償化対象（副食費等の実費のみ）"
              options={[
                { value: "hoiku_public", label: "認可保育園（公立）— 約4万円/月" },
                { value: "hoiku_private", label: "認可外保育園（私立）— 約7万円/月" },
              ]}
            />

            <SelectField
              label="小中高の教育方針"
              value={input.schoolPolicy}
              onChange={(v) => update("schoolPolicy", v as SchoolPolicy)}
              options={[
                { value: "all_public", label: "全公立" },
                { value: "junior_private", label: "中学から私立" },
                { value: "elem_private", label: "小学校から私立" },
              ]}
            />

            <SelectField
              label="大学"
              value={input.university}
              onChange={(v) => update("university", v as UniversityType)}
              options={[
                { value: "national", label: "国立大学 — 約244万円（4年）" },
                { value: "private_arts", label: "私立文系 — 約350万円（4年）" },
                { value: "private_science", label: "私立理系 — 約510万円（4年）" },
              ]}
            />

            <SelectField
              label="習い事レベル（6〜18歳）"
              value={input.extracurriculars}
              onChange={(v) => update("extracurriculars", v as ExtracurricularsLevel)}
              options={[
                { value: "none", label: "なし" },
                { value: "standard", label: "標準（月2万円）— 12年で288万円" },
                { value: "enriched", label: "充実（月5万円）— 12年で720万円" },
              ]}
            />
          </div>

          <button
            onClick={handleCalculate}
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold text-base px-6 py-4 rounded-xl transition-colors shadow-md"
          >
            {isLoading ? "計算中..." : "子育て総費用を試算する →"}
          </button>
        </section>

        {/* ─── 結果 ─── */}
        {result && diagnosis && (
          <div id="child-result" className="scroll-mt-6 space-y-5">

            {/* 総額サマリー */}
            <section className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-6 space-y-4">
              <div>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">
                  試算結果
                </p>
                <h2 className="text-base font-extrabold text-gray-800">
                  子育て総費用の内訳
                </h2>
              </div>

              {/* メイン数値 */}
              <div className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-5 text-white text-center space-y-1">
                <p className="text-xs font-semibold opacity-80">
                  {input.numChildren}人分 総額
                </p>
                <p className="text-4xl font-extrabold tracking-tight">
                  {result.grandTotal.toLocaleString()}
                  <span className="text-xl font-semibold ml-1">万円</span>
                </p>
                <p className="text-xs opacity-70">0歳〜大学卒業（約22年）の累計</p>
              </div>

              {/* サブ数値 */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-blue-50 border border-blue-100 p-4 text-center">
                  <p className="text-xs text-blue-600 font-semibold mb-1">1人あたり</p>
                  <p className="text-2xl font-extrabold text-blue-700">
                    {result.totalPerChild.toLocaleString()}
                    <span className="text-sm font-semibold ml-0.5">万円</span>
                  </p>
                </div>
                <div className="rounded-xl bg-indigo-50 border border-indigo-100 p-4 text-center">
                  <p className="text-xs text-indigo-600 font-semibold mb-1">月換算の積立目安</p>
                  <p className="text-2xl font-extrabold text-indigo-700">
                    {result.monthlyBurden.toLocaleString()}
                    <span className="text-sm font-semibold ml-0.5">万円/月</span>
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">総額÷264ヶ月</p>
                </div>
              </div>
            </section>

            {/* ④ マンション診断との連携コンテキスト */}
            {mansionIncome && (
              <div className="rounded-xl bg-indigo-50 border border-indigo-200 px-4 py-3 space-y-1">
                <p className="text-xs font-bold text-indigo-600">📊 マンション診断との連携</p>
                <p className="text-xs text-indigo-800 leading-relaxed">
                  マンション診断の年収 <strong>{mansionIncome.toLocaleString()}万円</strong> をベースにすると、月換算の積立目安 <strong>{result.monthlyBurden}万円</strong> は月収比 <strong className={(result.monthlyBurden * 12 / mansionIncome) * 100 > 15 ? "text-orange-600" : "text-indigo-700"}>{((result.monthlyBurden * 12 / mansionIncome) * 100).toFixed(1)}%</strong>{(result.monthlyBurden * 12 / mansionIncome) * 100 > 15 ? "（住居費と並行すると家計が厳しくなる可能性があります）" : "（住居費と並行しても比較的管理しやすい水準です）"}
                </p>
              </div>
            )}

            {/* フェーズ別カード */}
            <section className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-6 space-y-4">
              <div>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">
                  フェーズ別内訳
                </p>
                <h2 className="text-base font-extrabold text-gray-800">
                  1人あたりの費用（フェーズ別）
                </h2>
                <p className="text-xs text-gray-400 mt-0.5">
                  ※ 習い事費用（6〜18歳）は各フェーズに含まれていません。総額に別途加算されています。
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {result.phases.map((phase, i) => (
                  <PhaseCard key={phase.label} phase={phase} index={i} />
                ))}
              </div>

              {/* 習い事サマリー */}
              {input.extracurriculars !== "none" && (
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-gray-600">習い事（6〜18歳）</p>
                    <p className="text-xs text-gray-400">
                      {input.extracurriculars === "standard" ? "月2万円 × 144ヶ月" : "月5万円 × 144ヶ月"}
                    </p>
                  </div>
                  <p className="text-lg font-extrabold text-gray-700">
                    {input.extracurriculars === "standard" ? "288" : "720"}
                    <span className="text-sm font-semibold ml-0.5">万円/人</span>
                  </p>
                </div>
              )}
            </section>

            {/* 診断コメント */}
            <section
              className={`rounded-2xl border ${diagnosisColors[diagnosis.level].border} ${diagnosisColors[diagnosis.level].bg} px-5 py-5`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">{diagnosisColors[diagnosis.level].icon}</span>
                <div className="space-y-1">
                  <p className={`text-sm font-bold ${diagnosisColors[diagnosis.level].text}`}>
                    キャッシュフロー診断
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {diagnosis.message}
                  </p>
                </div>
              </div>
            </section>

            {/* 注釈 */}
            <div className="rounded-xl bg-blue-50 border border-blue-100 px-4 py-3">
              <p className="text-xs text-blue-700 leading-relaxed">
                <strong>簡易試算について：</strong>
                本ツールは一般的な費用相場をもとにした参考情報です。実際の費用は地域・学校・家庭状況により異なります。
                正確なライフプラン設計はFP（ファイナンシャルプランナー）にご相談ください。
              </p>
            </div>

            {/* マンション診断CTA */}
            <section className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 px-5 py-5">
              <div className="space-y-3">
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wide">関連ツール</p>
                <p className="text-sm font-bold text-gray-900">
                  住宅ローンとの両立シミュレーションもチェックしませんか？
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  都内マンション購入診断では、世帯年収・頭金・管理費から「無理なく買える価格」を算出します。
                  子育て費用と住宅ローンを合わせたキャッシュフロー確認にご活用ください。
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl text-center transition-colors"
                  >
                    マンション購入診断を試す →
                  </Link>
                  <Link
                    href="/car"
                    className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-sm px-5 py-2.5 rounded-xl text-center transition-colors"
                  >
                    🚗 車コスト診断を試す →
                  </Link>
                </div>
              </div>
            </section>

          </div>
        )}

        {/* ─── 学資保険・NISA ─── */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
          <div>
            <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">教育費の準備方法</p>
            <h2 className="text-base font-extrabold text-gray-800">積立は早く始めるほど有利です</h2>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              子どもが0歳のうちに月3〜5万円の積立を始めると、大学入学までに200〜400万円を無理なく準備できます。学資保険・NISAの組み合わせが一般的です。
            </p>
          </div>
          <div className="space-y-3">
            <div className="rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 space-y-1">
              <p className="text-xs font-bold text-amber-700">💡 よくある準備パターン</p>
              <ul className="text-xs text-amber-800 space-y-1 leading-relaxed">
                <li>・<strong>学資保険</strong>：元本保証型。返戻率110〜120%が目安。低リスクで確実に積み立てたい方向け。</li>
                <li>・<strong>NISA（つみたて投資枠）</strong>：長期で運用すればリターンが期待できる。18年あれば複利効果も。</li>
                <li>・<strong>組み合わせ</strong>：必要額の半分を学資保険で確保、残りをNISAで運用するのが一般的。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section aria-labelledby="faq-child-heading" className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-6">
          <h2 id="faq-child-heading" className="text-base font-extrabold text-gray-800 mb-1 text-center">よくある質問</h2>
          <p className="text-xs text-gray-500 mb-5 text-center">子育て費用診断についてよく寄せられる疑問にお答えします</p>
          <div className="divide-y divide-gray-100">
            <FaqItem
              q="この試算はどこまで正確ですか？"
              a="文部科学省の「子供の学習費調査」や各種教育費調査の平均値をもとにした参考情報です。実際の費用は学校・地域・家庭によって大きく異なります。目安として活用し、詳細はFP（ファイナンシャルプランナー）にご相談ください。"
            />
            <FaqItem
              q="教育費はいつから貯め始めるべきですか？"
              a="できるだけ早く、理想は生まれた直後から始めるのがベストです。大学入学まで18年あれば、月2〜3万円の積立で200万円以上を準備できます。始める時期が遅いほど月々の積立額が増えるため、早期スタートが有利です。"
            />
            <FaqItem
              q="学資保険とNISA、どちらがおすすめですか？"
              a="どちらにも一長一短があります。学資保険は元本保証で確実に受け取れる安心感がある一方、返戻率は低め。NISAは長期運用でリターンが期待できますが、元本割れのリスクもあります。必要額の一部を学資保険、残りをNISAで運用するハイブリッド戦略が一般的です。"
            />
            <FaqItem
              q="住宅ローンと教育費の両立は可能ですか？"
              a="世帯年収1,000〜1,500万円であれば両立は十分可能です。ただし、子どもが中高私立＋大学進学と重なる時期（15〜22歳）に住宅ローン返済が重なると家計が厳しくなります。子どもの年齢と返済終了時期を合わせてキャッシュフローを確認しましょう。"
            />
            <FaqItem
              q="子どもが複数人いる場合の注意点は？"
              a="2〜3人の場合、費用は単純に人数倍になりますが、上の子が大学卒業する頃に下の子が入学するケースでは費用の山が重なりにくくなります。一方、年齢が近い兄弟では費用ピークが重なるため、より早い時期からの準備が必要です。"
            />
          </div>
        </section>

        {/* ─── フッター ─── */}
        <footer className="text-center text-xs text-gray-400 pb-4 space-y-1">
          <p>本ツールは参考情報の提供を目的としています。投資・金融アドバイスではありません。</p>
          <p>© 2025 30Lab</p>
        </footer>

      </div>
    </div>
  );
}
