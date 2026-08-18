export interface DiagnosisInput {
  annualIncome: number;   // 世帯年収（万円）
  age: number;            // 年齢（歳）
  downPayment: number;    // 頭金（万円）
  interestRate: number;   // 金利（年率 %）
  repaymentYears: number; // 返済年数（年）
  monthlyLiving: number;  // 月の生活費（万円）
  managementFee: number;  // 管理費・修繕積立金（月額、万円）
  currentRent?: number;   // 現在の家賃（月額、万円）。0 なら比較しない
  /** 住宅ローン控除の借入限度額（万円）。物件の省エネ性能で決まる。0 なら控除を見込まない */
  deductionLimit?: number;
}

/** 「今の家賃と比べてどうか」を出すための内訳（安全購入価格ベース・月額・万円） */
export interface RentComparison {
  loanPayment: number;      // ローン返済
  managementFee: number;    // 管理費・修繕積立金
  propertyTax: number;      // 固定資産税・都市計画税の月割概算
  grossMonthly: number;     // 上記の合計＝実際に出ていく額
  deduction: number;        // 住宅ローン控除の月割相当（13年間のみ）
  netMonthly: number;       // 控除を引いた実質
  principal: number;        // 返済のうち元金部分（資産として残る）
  disappearing: number;     // 本当に消えるお金（grossMonthly − principal）
  rent: number;             // 比較対象の家賃
  diffGross: number;        // 家賃との差（控除前）
  diffNet: number;          // 家賃との差（控除後）
}

export type DiagnosisLevel = "safe" | "caution" | "warning" | "danger" | "critical";

/** 金利が上がったときに返済額がどうなるかの試算 */
export interface RateStressCase {
  rate: number;               // 想定金利（年率 %）
  monthlyPayment: number;     // その金利での月返済額（万円）
  diff: number;               // 現在の金利との月額差（万円）
  burdenRate: number;         // その金利での住居費負担率（%）
  level: DiagnosisLevel;
}

export interface DiagnosisResult {
  safePrice: number;          // 安全購入価格（万円）
  aggressivePrice: number;    // 背伸び購入価格（万円）
  dangerPrice: number;        // 注意ライン（万円）
  burdenRate: number;         // 住居費負担率（%）：ローン+管理費ベース
  monthlyPayment: number;     // 月々のローン返済額（万円）：安全価格ベース
  monthlyTotal: number;       // 月々の住居費合計（ローン+管理費）（万円）
  comment: string;            // 診断コメント
  level: DiagnosisLevel;
  incomeMultiple: number;     // 安全購入価格が年収の何倍か
  cappedByMultiple: boolean;  // 返済比率ではなく年収倍率の上限で決まったか
  rateStress: RateStressCase[]; // 金利上昇時の試算（安全購入価格ベース）
  rentComparison?: RentComparison; // 家賃を入力したときだけ返す
}

export interface PriceMetrics {
  price: number;          // 購入価格（万円）
  loanAmount: number;     // 借入額（万円）
  monthlyPayment: number; // 月返済額（万円）
  burdenRate: number;     // 住居費負担率（%）
  level: DiagnosisLevel;
}
