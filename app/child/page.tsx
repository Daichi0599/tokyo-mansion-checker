"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";

/* ───────────────────────────────────────────
   Types
─────────────────────────────────────────── */

type NumChildren = 1 | 2 | 3;
type NurseryType = "hoiku_public" | "hoiku_private";
type SchoolPolicy = "all_public" | "junior_private" | "elem_private";
type UniversityType = "national" | "private_arts" | "private_science";
type ExtracurricularsLevel = "none" | "light" | "standard" | "enriched" | "intensive";
type BirthCost = "none" | "standard" | "premium";

interface ChildInput {
  numChildren: NumChildren;
  nursery: NurseryType;
  schoolPolicy: SchoolPolicy;
  university: UniversityType;
  extracurriculars: ExtracurricularsLevel;
  birthCost: BirthCost;
  childCurrentAge: number;
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
  monthlyFromNow: number;
  monthsRemaining: number;
  birthCostTotal: number;
  extraCostPerChild: number;
}

/* ───────────────────────────────────────────
   Calculation Logic
─────────────────────────────────────────── */

function calculateCosts(input: ChildInput): ChildResult {
  const { nursery, schoolPolicy, university, extracurriculars, birthCost, numChildren, childCurrentAge } = input;

  // 出産費用
  let birthCostPerChild = 0;
  if (birthCost === "standard") {
    birthCostPerChild = 10; // 実費10万
  } else if (birthCost === "premium") {
    birthCostPerChild = 40; // 実費40万
  }
  const birthCostTotal = birthCostPerChild * numChildren;

  // 0-2歳 (36ヶ月)
  const nurseryCost = nursery === "hoiku_public" ? 4 * 36 : 7 * 36; // 万円
  const babyGoods = 50; // 万円 (初期一括)
  const phase0to2 = nurseryCost + babyGoods + birthCostPerChild;

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
  let extraMonthly = 0;
  if (extracurriculars === "light") {
    extraMonthly = 1;
  } else if (extracurriculars === "standard") {
    extraMonthly = 2;
  } else if (extracurriculars === "enriched") {
    extraMonthly = 3;
  } else if (extracurriculars === "intensive") {
    extraMonthly = 5;
  }
  const extraCostPerChild = extraMonthly * 144;

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
  const totalPerChild = basePerChild + extraCostPerChild;
  const grandTotal = totalPerChild * numChildren + birthCostTotal;

  // 月換算: 0歳〜大学卒業22歳 = 264ヶ月
  const monthlyBurden = Math.round(grandTotal / 264);

  // 今から始めると月いくら
  const monthsRemaining = Math.max(1, (22 - childCurrentAge) * 12);
  const monthlyFromNow = Math.ceil(grandTotal / monthsRemaining);

  return { phases, totalPerChild, grandTotal, monthlyBurden, monthlyFromNow, monthsRemaining, birthCostTotal, extraCostPerChild };
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

function PhaseCard({ phase, index, totalPerChild }: { phase: PhaseBreakdown; index: number; totalPerChild: number }) {
  const colors = [
    { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", dot: "bg-blue-500", bar: "bg-blue-400" },
    { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", dot: "bg-emerald-500", bar: "bg-emerald-400" },
    { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700", dot: "bg-amber-500", bar: "bg-amber-400" },
    { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-700", dot: "bg-purple-500", bar: "bg-purple-400" },
  ];
  const c = colors[index % colors.length];
  const pct = totalPerChild > 0 ? Math.round((phase.costPerChild / totalPerChild) * 100) : 0;

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
      {/* プログレスバー */}
      <div className="mt-3">
        <div className="w-full bg-white bg-opacity-60 rounded-full h-1.5 overflow-hidden">
          <div
            className={`h-1.5 rounded-full ${c.bar} transition-all duration-500`}
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="text-xs text-gray-400 mt-1">全体の{pct}%</p>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────
   Subsidy Section
─────────────────────────────────────────── */

interface SubsidyItem {
  name: string;
  amount: string;
  source: string;
  note: string;
}

interface SubsidyPhase {
  phase: string;
  items: SubsidyItem[];
}

const SUBSIDY_DATA: SubsidyPhase[] = [
  {
    phase: "妊娠〜出産",
    items: [
      { name: "出産育児一時金", amount: "50万円/子", source: "国", note: "出産後に健保申請" },
      { name: "妊婦健診費補助", amount: "約10万円分/子（14回）", source: "区市町村", note: "母子手帳取得時" },
    ],
  },
  {
    phase: "0〜2歳",
    items: [
      { name: "児童手当（0〜2歳）", amount: "月1.5万円/子", source: "国", note: "出生届後に市区町村申請" },
      { name: "乳幼児医療費助成（マル乳）", amount: "医療費ほぼ無料", source: "都・区", note: "自動適用（区による）" },
      { name: "ベビーシッター補助（東京都）", amount: "月2.4万円まで", source: "都", note: "申請制" },
    ],
  },
  {
    phase: "3〜5歳",
    items: [
      { name: "幼保無償化", amount: "保育料全額（認可）", source: "国", note: "2019年〜恒久制度・自動適用" },
      { name: "こども医療費助成（マル子）", amount: "医療費ほぼ無料", source: "都・区", note: "自動適用" },
    ],
  },
  {
    phase: "小学校（6〜12歳）",
    items: [
      { name: "児童手当（3歳〜中学生）", amount: "月1万円/子（第3子以降1.5万）", source: "国", note: "継続（現況届不要に）" },
      { name: "こども医療費（区による）", amount: "医療費無料（高校まで無料の区あり）", source: "区", note: "自動" },
    ],
  },
  {
    phase: "中学〜高校（13〜18歳）",
    items: [
      { name: "高等学校就学支援金", amount: "年最大11.88万（公立）〜39.6万（私立）", source: "国", note: "学校経由で申請" },
      { name: "東京都私立高校授業料実質無償化", amount: "年最大59.4万円（所得制限なし・2024年〜）", source: "都", note: "学校経由で申請" },
      { name: "都内高校生の医療費（一部の区）", amount: "無料〜自己負担あり", source: "区", note: "区による" },
    ],
  },
  {
    phase: "大学（18〜22歳）",
    items: [
      { name: "高等教育修学支援制度", amount: "授業料免除＋給付型奨学金（低所得世帯向け）", source: "国", note: "大学経由" },
    ],
  },
];

const phaseColors: Record<string, { bg: string; border: string; badge: string; badgeText: string }> = {
  "妊娠〜出産": { bg: "bg-pink-50", border: "border-pink-200", badge: "bg-pink-100", badgeText: "text-pink-700" },
  "0〜2歳": { bg: "bg-blue-50", border: "border-blue-200", badge: "bg-blue-100", badgeText: "text-blue-700" },
  "3〜5歳": { bg: "bg-sky-50", border: "border-sky-200", badge: "bg-sky-100", badgeText: "text-sky-700" },
  "小学校（6〜12歳）": { bg: "bg-emerald-50", border: "border-emerald-200", badge: "bg-emerald-100", badgeText: "text-emerald-700" },
  "中学〜高校（13〜18歳）": { bg: "bg-amber-50", border: "border-amber-200", badge: "bg-amber-100", badgeText: "text-amber-700" },
  "大学（18〜22歳）": { bg: "bg-purple-50", border: "border-purple-200", badge: "bg-purple-100", badgeText: "text-purple-700" },
};

function SubsidySection({ result, numChildren }: { result: ChildResult | null; numChildren: NumChildren }) {
  // 概算軽減額計算
  const birthSubsidy = 50 * numChildren;
  const childAllowance = 246 * numChildren;
  const highSchoolSupport = 35 * numChildren;
  const totalSubsidy = birthSubsidy + childAllowance + highSchoolSupport;
  const netCost = result ? Math.max(0, result.grandTotal - totalSubsidy) : null;

  return (
    <section className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-6 space-y-5">
      <div>
        <p className="text-xs font-bold text-green-600 uppercase tracking-wide mb-1">補助金・支援制度</p>
        <h2 className="text-base font-extrabold text-gray-800">
          もらえる補助金・支援制度（2024年度版）
        </h2>
        <p className="text-xs text-gray-500 mt-1 leading-relaxed">
          国・都・区の主要制度を時系列でまとめました。申請しないと受け取れないものもあります。
        </p>
      </div>

      <div className="space-y-4">
        {SUBSIDY_DATA.map((group) => {
          const c = phaseColors[group.phase] ?? { bg: "bg-gray-50", border: "border-gray-200", badge: "bg-gray-100", badgeText: "text-gray-700" };
          return (
            <div key={group.phase} className={`rounded-xl border ${c.border} ${c.bg} p-4 space-y-2`}>
              <p className={`text-xs font-bold ${c.badgeText} mb-1`}>{group.phase}</p>
              {group.items.map((item) => (
                <div key={item.name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs">
                  <div className="flex-1">
                    <span className="font-semibold text-gray-800">{item.name}</span>
                    <span className="text-gray-400 ml-1">({item.note})</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${c.badge} ${c.badgeText}`}>{item.source}</span>
                    <span className="font-bold text-gray-700">{item.amount}</span>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {/* 概算軽減額（result がある時のみ） */}
      {result && (
        <div className="rounded-xl bg-green-50 border border-green-200 p-4 space-y-3">
          <p className="text-xs font-bold text-green-700">子供の人数に応じた主要制度の合計概算（{numChildren}人）</p>
          <div className="space-y-1 text-xs text-green-800">
            <div className="flex justify-between">
              <span>出産育児一時金（50万 × {numChildren}人）</span>
              <span className="font-semibold">{birthSubsidy}万円</span>
            </div>
            <div className="flex justify-between">
              <span>児童手当 0〜18歳合計（246万 × {numChildren}人）</span>
              <span className="font-semibold">{childAllowance}万円</span>
            </div>
            <div className="flex justify-between">
              <span>高校就学支援金・都補助概算（35万 × {numChildren}人）</span>
              <span className="font-semibold">{highSchoolSupport}万円</span>
            </div>
            <div className="flex justify-between border-t border-green-300 pt-1 mt-1">
              <span className="font-bold">補助金で軽減される概算額</span>
              <span className="font-extrabold text-green-700 text-sm">{totalSubsidy}万円</span>
            </div>
          </div>
          <div className="rounded-lg bg-white border border-green-200 px-3 py-2 flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-700">実質負担額（総費用 − 補助金概算）</span>
            <span className="text-lg font-extrabold text-green-700">{netCost!.toLocaleString()}<span className="text-sm font-semibold ml-0.5">万円</span></span>
          </div>
        </div>
      )}

      <div className="rounded-xl bg-yellow-50 border border-yellow-200 px-4 py-3 space-y-1">
        <p className="text-xs text-yellow-800 leading-relaxed">
          <strong>注記：</strong>
        </p>
        <ul className="text-xs text-yellow-800 space-y-1 leading-relaxed">
          <li>・自治体（区・市）によって内容が大きく異なります。</li>
          <li>・制度は毎年見直されます。申請時期を逃さないよう市区町村の窓口やWebサイトで最新情報を確認してください。</li>
          <li>・東京都の例を参考にしています。</li>
        </ul>
      </div>

      {/* 出典 */}
      <div className="border-t border-gray-100 pt-4 space-y-1.5">
        <p className="text-xs font-bold text-gray-500">出典・参考</p>
        <ul className="space-y-1">
          {[
            { label: "出産育児一時金｜厚生労働省", url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryouhoken/shussan/index.html" },
            { label: "児童手当制度｜こども家庭庁", url: "https://www.cfa.go.jp/policies/jidouteate/" },
            { label: "幼児教育・保育の無償化｜内閣府", url: "https://www8.cao.go.jp/shoushi/shinseido/musyouka/about/index.html" },
            { label: "高等学校就学支援金｜文部科学省", url: "https://www.mext.go.jp/a_menu/shotou/mushouka/" },
            { label: "東京都私立高校授業料実質無償化｜東京都", url: "https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2024/02/16/19.html" },
            { label: "高等教育の修学支援制度｜文部科学省", url: "https://www.mext.go.jp/a_menu/koutou/hutankeigen/" },
          ].map((s) => (
            <li key={s.url}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-500 hover:text-blue-700 hover:underline leading-relaxed"
              >
                ↗ {s.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-gray-400 pt-1">※ 2024年度時点の情報をもとにしています。最新情報は各公式サイトでご確認ください。</p>
      </div>
    </section>
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
    birthCost: "standard",
    childCurrentAge: 0,
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
      sendGAEvent("event", "diagnosis_run", {
        page: "child",
        num_children: input.numChildren,
        nursery: input.nursery,
        school_policy: input.schoolPolicy,
        university: input.university,
        extracurriculars: input.extracurriculars,
        grand_total_man: r.grandTotal,
      });
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

  // 習い事サマリー表示用
  const extraLabelMap: Record<ExtracurricularsLevel, string> = {
    none: "",
    light: "月1万円 × 144ヶ月",
    standard: "月2万円 × 144ヶ月",
    enriched: "月3万円 × 144ヶ月",
    intensive: "月5万円 × 144ヶ月",
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
              label="お子さんの現在の年齢"
              value={String(input.childCurrentAge)}
              onChange={(v) => update("childCurrentAge", Number(v))}
              hint="今から積み立てると月いくら必要かを計算します"
              options={Array.from({ length: 11 }, (_, i) => ({ value: String(i), label: `${i}歳` }))}
            />

            <SelectField
              label="出産費用（実費）"
              value={input.birthCost}
              onChange={(v) => update("birthCost", v as BirthCost)}
              hint="出産育児一時金50万円を差し引いた実費"
              options={[
                { value: "none", label: "含めない" },
                { value: "standard", label: "普通分娩（実費 約10万円）" },
                { value: "premium", label: "無痛分娩・高額産院（実費 約40万円）" },
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
                { value: "light", label: "月1万円（1種類）— 12年で144万円" },
                { value: "standard", label: "月2万円（2種類）— 12年で288万円" },
                { value: "enriched", label: "月3万円（充実）— 12年で432万円" },
                { value: "intensive", label: "月5万円（本格的）— 12年で720万円" },
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

              {/* 今から始めると月いくら */}
              <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold text-emerald-700">今から始めると月いくら？</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    現在{input.childCurrentAge}歳 → 残り{result.monthsRemaining}ヶ月（22歳まで）
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-2xl font-extrabold text-emerald-700">
                    {result.monthlyFromNow.toLocaleString()}
                    <span className="text-sm font-semibold ml-0.5">万円/月</span>
                  </p>
                </div>
              </div>

              {/* 出産費用の内訳 */}
              {result.birthCostTotal > 0 && (
                <div className="rounded-xl border border-pink-200 bg-pink-50 px-4 py-3 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-pink-700">出産費用（実費）</p>
                    <p className="text-xs text-gray-400">{input.numChildren}人分 — 出産育児一時金50万差し引き後</p>
                  </div>
                  <p className="text-lg font-extrabold text-pink-700">
                    {result.birthCostTotal}
                    <span className="text-sm font-semibold ml-0.5">万円</span>
                  </p>
                </div>
              )}
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
                  <PhaseCard key={phase.label} phase={phase} index={i} totalPerChild={result.totalPerChild} />
                ))}
              </div>

              {/* 習い事サマリー */}
              {input.extracurriculars !== "none" && (
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-gray-600">習い事（6〜18歳）</p>
                    <p className="text-xs text-gray-400">
                      {extraLabelMap[input.extracurriculars]}
                    </p>
                  </div>
                  <p className="text-lg font-extrabold text-gray-700">
                    {result.extraCostPerChild.toLocaleString()}
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

            {/* おかねと暮らし相談 FP CTA */}
            <div className="rounded-2xl border border-teal-200 bg-gradient-to-r from-teal-50 to-emerald-50 px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1 space-y-1">
                <p className="text-xs font-bold text-teal-600 uppercase tracking-wide">PR</p>
                <p className="text-sm font-bold text-gray-900">
                  {diagnosis && diagnosis.level !== "green"
                    ? "住宅費＋教育費の両立プランをFPに無料相談しませんか？"
                    : "学資保険・NISA・給付金活用をFPに無料で相談できます"}
                </p>
                <p className="text-xs text-gray-500">
                  お金のプロが家計全体を診断。子育て費用・積立プランを個別にアドバイス。給付金の対象かどうかも確認できます。
                </p>
              </div>
              <a
                href="https://px.a8.net/svt/ejp?a8mat=4AZGC3+FAPZCI+5UJQ+5YJRM"
                rel="nofollow noopener"
                target="_blank"
                onClick={() => sendGAEvent("event", "affiliate_click", { link_name: "おかねと暮らし相談", page: "child" })}
                className="shrink-0 inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl text-center transition-colors"
              >
                FPに無料で相談する →
              </a>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img width={1} height={1} src="https://www10.a8.net/0.gif?a8mat=4AZGC3+FAPZCI+5UJQ+5YJRM" alt="" style={{ display: "block" }} />
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

            {/* ベビープラネット 保険相談 CTA */}
            <div className="rounded-2xl border border-pink-200 bg-gradient-to-r from-pink-50 to-rose-50 px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1 space-y-1">
                <p className="text-xs font-bold text-pink-600 uppercase tracking-wide">PR</p>
                <p className="text-sm font-bold text-gray-900">
                  子育て中ママのための保険、見直していますか？
                </p>
                <p className="text-xs text-gray-500">
                  妊娠・出産・子育て期に合わせた保険プランをFPが無料で診断。20社以上から最適な保険を提案してもらえます。
                </p>
              </div>
              <a
                href="https://px.a8.net/svt/ejp?a8mat=4AZLSJ+79YQYA+503M+60H7M"
                rel="nofollow noopener"
                target="_blank"
                onClick={() => sendGAEvent("event", "affiliate_click", { link_name: "ベビープラネット", page: "child" })}
                className="shrink-0 inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl text-center transition-colors"
              >
                無料で保険を相談する →
              </a>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img width={1} height={1} src="https://www18.a8.net/0.gif?a8mat=4AZLSJ+79YQYA+503M+60H7M" alt="" style={{ display: "block" }} />
            </div>

            {/* ガーデン 学資保険 CTA */}
            <div className="rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50 px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1 space-y-1">
                <p className="text-xs font-bold text-amber-600 uppercase tracking-wide">PR</p>
                <p className="text-sm font-bold text-gray-900">
                  学資保険で教育費を確実に準備しませんか？
                </p>
                <p className="text-xs text-gray-500">
                  元本保証＋返戻率110〜120%の学資保険。子どもが生まれたら早めに始めるほど有利。無料相談で最適プランを提案してもらえます。
                </p>
              </div>
              <a
                href="https://px.a8.net/svt/ejp?a8mat=4AZLSJ+7AK6K2+4GN2+5ZEMP"
                rel="nofollow noopener"
                target="_blank"
                onClick={() => sendGAEvent("event", "affiliate_click", { link_name: "ガーデン学資保険", page: "child" })}
                className="shrink-0 inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl text-center transition-colors"
              >
                学資保険を無料で相談する →
              </a>
            </div>

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

        {/* ─── 補助金セクション ─── */}
        <SubsidySection result={result} numChildren={input.numChildren} />

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
