export interface DiagnosisInput {
  annualIncome: number;   // 世帯年収（万円）
  age: number;            // 年齢（歳）
  downPayment: number;    // 頭金（万円）
  interestRate: number;   // 金利（年率 %）
  repaymentYears: number; // 返済年数（年）
  monthlyLiving: number;  // 月の生活費（万円）
}

export type DiagnosisLevel = "safe" | "caution" | "warning" | "danger" | "critical";

export interface DiagnosisResult {
  safePrice: number;          // 安全購入価格（万円）
  aggressivePrice: number;    // やや攻めの価格（万円）
  dangerPrice: number;        // 危険ライン（万円）
  burdenRate: number;         // 住居費負担率（%）：安全購入価格ベース
  monthlyPayment: number;     // 月々の返済額（万円）：安全購入価格ベース
  comment: string;            // 診断コメント
  level: DiagnosisLevel;
}

export interface PriceMetrics {
  price: number;          // 購入価格（万円）
  loanAmount: number;     // 借入額（万円）
  monthlyPayment: number; // 月返済額（万円）
  burdenRate: number;     // 住居費負担率（%）
  level: DiagnosisLevel;
}
