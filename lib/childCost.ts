/**
 * 子育て費用の計算ロジック。
 *
 * 「出産」と「育てる」を別モジュールとして扱えるよう、出産まわりの費用・給付は
 * calcBirth() に閉じている（将来 /birth として独立ツールに切り出す前提）。
 *
 * 金額はすべて万円単位。都内在住の世帯を想定した相場を既定値にしている。
 */

export type NumChildren = 1 | 2 | 3;
export type NurseryType = "hoiku_public" | "hoiku_private";
export type SchoolPolicy = "all_public" | "junior_private" | "elem_private";
export type UniversityType = "national" | "private_arts" | "private_science";
export type ExtracurricularsLevel = "none" | "light" | "standard" | "enriched" | "intensive";
/** 出産費用は「実費」ではなく総額で入力させ、一時金は自動で差し引く */
export type BirthCost = "none" | "standard" | "premium";
/** 中学受験塾（小4〜小6）に通わせるか */
export type JukenPlan = "none" | "juken";

export interface ChildInput {
  numChildren: NumChildren;
  nursery: NurseryType;
  schoolPolicy: SchoolPolicy;
  university: UniversityType;
  extracurriculars: ExtracurricularsLevel;
  birthCost: BirthCost;
  juken: JukenPlan;
  childCurrentAge: number;
  /** 産休・育休を取る親の年収（万円）。0 なら給付を計算しない */
  parentIncome: number;
}

/* ───────── 出産（1人あたり・万円） ───────── */

/** 出産費用の総額。出産育児一時金50万円を差し引く前の金額 */
export const BIRTH_GROSS: Record<BirthCost, number> = {
  none: 0,
  standard: 65,  // 都内の正常分娩：室料差額・自費分を含めた総額
  premium: 140,  // 無痛分娩・人気産院：総額130〜150万が相場
};

/** 出産育児一時金（国・健保）。2023年4月から50万円 */
export const BIRTH_LUMP_SUM = 50;
/** 出産・子育て応援ギフト（妊娠時5万＋出生時5万） */
export const BIRTH_GIFT = 10;
/** 妊婦健診費補助（14回分の券）*/
export const CHECKUP_SUBSIDY = 10;

/** 育児休業給付金の月額上限（概算）。毎年8月に改定されるため目安値 */
const IKUKYU_CAP_67 = 31;
const IKUKYU_CAP_50 = 23;

export interface BirthResult {
  /** 出産費用の総額（人数分） */
  grossCost: number;
  /** 出産育児一時金の合計 */
  lumpSum: number;
  /** 応援ギフト＋妊婦健診補助の合計 */
  gifts: number;
  /** 出産手当金（産休98日・健保）の概算 */
  maternityAllowance: number;
  /** 育児休業給付金（育休10ヶ月）の概算 */
  parentalLeaveBenefit: number;
  /** 出産費用 − 一時金。マイナスにはしない（実際の自己負担） */
  netCost: number;
  /** 給付まで含めた収支。プラスなら手元に残る */
  netBalance: number;
}

export function calcBirth(input: ChildInput): BirthResult {
  const { birthCost, numChildren, parentIncome } = input;

  const grossCost = BIRTH_GROSS[birthCost] * numChildren;
  const lumpSum = birthCost === "none" ? 0 : BIRTH_LUMP_SUM * numChildren;
  const gifts = birthCost === "none" ? 0 : (BIRTH_GIFT + CHECKUP_SUBSIDY) * numChildren;
  const netCost = Math.max(0, grossCost - lumpSum);

  // 給付は「産休・育休を取る親の年収」を入れたときだけ計算する
  let maternityAllowance = 0;
  let parentalLeaveBenefit = 0;
  if (parentIncome > 0) {
    const monthly = parentIncome / 12;
    // 出産手当金：標準報酬日額の2/3 × 98日 ≒ 月給 × 2.18
    maternityAllowance = Math.round(monthly * (2 / 3) * (98 / 30) * numChildren);
    // 育児休業給付金：最初180日は67%、以降50%。産後休業を除いた約10ヶ月で概算
    const first = Math.min(monthly * 0.67, IKUKYU_CAP_67) * 6;
    const later = Math.min(monthly * 0.5, IKUKYU_CAP_50) * 4;
    parentalLeaveBenefit = Math.round((first + later) * numChildren);
  }

  const netBalance = lumpSum + gifts + maternityAllowance + parentalLeaveBenefit - grossCost;

  return { grossCost, lumpSum, gifts, maternityAllowance, parentalLeaveBenefit, netCost, netBalance };
}

/* ───────── 育てる（1人あたり・万円） ───────── */

/** 中学受験塾：小4〜小6の3年間。都内大手（SAPIX・早稲アカ等）で300万前後 */
export const JUKEN_COST = 300;

const EXTRA_MONTHLY: Record<ExtracurricularsLevel, number> = {
  none: 0, light: 1, standard: 2, enriched: 3, intensive: 5,
};

export interface PhaseBreakdown {
  label: string;
  ageRange: string;
  costPerChild: number;
}

export interface ChildResult {
  phases: PhaseBreakdown[];
  /** 出産費用を除いた、1人を育てるのにかかる額 */
  totalPerChild: number;
  /** 全員分＋出産の自己負担を含めた総額 */
  grandTotal: number;
  monthlyBurden: number;
  monthlyFromNow: number;
  monthsRemaining: number;
  extraCostPerChild: number;
  jukenCostPerChild: number;
  birth: BirthResult;
}

export function calculateCosts(input: ChildInput): ChildResult {
  const { nursery, schoolPolicy, university, extracurriculars, numChildren, childCurrentAge, juken } = input;

  const birth = calcBirth(input);

  // 0〜5歳：保育料（0〜2歳）＋ベビー用品。3〜5歳は幼保無償化で副食費等の実費のみ
  const nurseryCost = (nursery === "hoiku_public" ? 4 : 7) * 36;
  const babyGoods = 50;
  const phase0to5 = nurseryCost + babyGoods + 0.5 * 36;

  // 小学期：公立は給食費・教材費・PTA等で月0.8万、私立は月5万
  const elemRate = schoolPolicy === "elem_private" ? 5 : 0.8;
  const phase6to11 = elemRate * 72;

  // 中高期：都内私立は年100〜120万（月8.5〜10万）が相場
  const juniorRate = schoolPolicy === "all_public" ? 0.5 : 8.5;
  const highRate = schoolPolicy === "all_public" ? 2 : 8;
  const phase12to17 = juniorRate * 36 + highRate * 36;

  let univCost: number;
  if (university === "national") univCost = 54 * 4 + 28;
  else if (university === "private_arts") univCost = 80 * 4 + 30;
  else univCost = 120 * 4 + 30;

  // 中学受験塾は小4〜6に集中するため、習い事（12年の一定額）とは別枠で持つ。
  // 小学校から私立の場合は受験しない前提で計上しない。
  const jukenCostPerChild = juken === "juken" && schoolPolicy !== "elem_private" ? JUKEN_COST : 0;
  const extraCostPerChild = EXTRA_MONTHLY[extracurriculars] * 144;

  const phases: PhaseBreakdown[] = [
    { label: "乳幼児期", ageRange: "0〜5歳", costPerChild: phase0to5 },
    { label: "小学期", ageRange: "6〜11歳", costPerChild: phase6to11 + jukenCostPerChild },
    { label: "中高期", ageRange: "12〜17歳", costPerChild: phase12to17 },
    { label: "大学期", ageRange: "18〜21歳", costPerChild: univCost },
  ];

  const basePerChild = phases.reduce((sum, p) => sum + p.costPerChild, 0);
  const totalPerChild = basePerChild + extraCostPerChild;
  // 出産の自己負担はここで一度だけ加算する（旧実装ではフェーズと総額で二重計上していた）
  const grandTotal = totalPerChild * numChildren + birth.netCost;

  const monthlyBurden = Math.round(grandTotal / 264);
  const monthsRemaining = Math.max(1, (22 - childCurrentAge) * 12);
  const monthlyFromNow = Math.ceil(grandTotal / monthsRemaining);

  return {
    phases, totalPerChild, grandTotal, monthlyBurden, monthlyFromNow,
    monthsRemaining, extraCostPerChild, jukenCostPerChild, birth,
  };
}

/* ───────── もらえる側（支援制度） ───────── */

/** 児童手当 0〜18歳の累計（2024年10月拡充後の概算） */
export const CHILD_ALLOWANCE_TOTAL = 246;
/** 高校就学支援金＋東京都の私立高校授業料助成の概算 */
export const HIGHSCHOOL_SUPPORT = 35;
/** 018サポート（東京都・月5,000円 × 0〜18歳・所得制限なし） */
export const TOKYO_018_TOTAL = 108;

export interface SubsidyResult {
  childAllowance: number;
  highSchoolSupport: number;
  tokyo018: number;
  birthLumpSum: number;
  birthGifts: number;
  maternityAllowance: number;
  parentalLeaveBenefit: number;
  total: number;
}

export function calcSubsidies(input: ChildInput, birth: BirthResult): SubsidyResult {
  const n = input.numChildren;
  const childAllowance = CHILD_ALLOWANCE_TOTAL * n;
  const highSchoolSupport = HIGHSCHOOL_SUPPORT * n;
  const tokyo018 = TOKYO_018_TOTAL * n;

  const total =
    childAllowance + highSchoolSupport + tokyo018 +
    birth.lumpSum + birth.gifts + birth.maternityAllowance + birth.parentalLeaveBenefit;

  return {
    childAllowance,
    highSchoolSupport,
    tokyo018,
    birthLumpSum: birth.lumpSum,
    birthGifts: birth.gifts,
    maternityAllowance: birth.maternityAllowance,
    parentalLeaveBenefit: birth.parentalLeaveBenefit,
    total,
  };
}
