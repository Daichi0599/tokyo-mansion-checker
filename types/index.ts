export interface DiagnosisInput {
  annualIncome: number;   // 世帯年収（万円）
  age: number;            // 年齢（歳）
  downPayment: number;    // 頭金（万円）
  interestRate: number;   // 金利（年率 %）
  repaymentYears: number; // 返済年数（年）
  monthlyLiving: number;  // 月の生活費（万円）
  managementFee: number;  // 管理費・修繕積立金（月額、万円）
}

export type DiagnosisLevel = "safe" | "caution" | "warning" | "danger" | "critical";

export interface DiagnosisResult {
  safePrice: number;          // 安全購入価格（万円）
  aggressivePrice: number;    // 背伸び購入価格（万円）
  dangerPrice: number;        // 注意ライン（万円）
  burdenRate: number;         // 住居費負担率（%）：ローン+管理費ベース
  monthlyPayment: number;     // 月々のローン返済額（万円）：安全価格ベース
  monthlyTotal: number;       // 月々の住居費合計（ローン+管理費）（万円）
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
