import { DiagnosisInput, DiagnosisResult } from "@/types";

/**
 * 元利均等返済で「月返済額」から「最大借入可能額」を逆算する
 * @param monthlyPayment 月返済額（万円）
 * @param annualRate 年利（%）
 * @param years 返済年数
 */
function calcMaxLoan(monthlyPayment: number, annualRate: number, years: number): number {
  if (annualRate === 0) {
    return monthlyPayment * years * 12;
  }
  const r = annualRate / 100 / 12; // 月次金利
  const n = years * 12;            // 返済月数
  const factor = Math.pow(1 + r, n);
  return monthlyPayment * (factor - 1) / (r * factor);
}

/**
 * 借入額から月返済額を計算する（元利均等返済）
 * @param loanAmount 借入額（万円）
 * @param annualRate 年利（%）
 * @param years 返済年数
 */
function calcMonthlyPayment(loanAmount: number, annualRate: number, years: number): number {
  if (annualRate === 0) {
    return loanAmount / (years * 12);
  }
  const r = annualRate / 100 / 12;
  const n = years * 12;
  const factor = Math.pow(1 + r, n);
  return loanAmount * r * factor / (factor - 1);
}

/**
 * 負担率・年齢から診断レベルとコメントを返す
 */
function getComment(
  burdenRate: number,
  age: number,
  safePrice: number,
  annualIncome: number
): { level: DiagnosisResult["level"]; comment: string } {
  const ageNote = age >= 35 ? "※年齢的に返済期間が長く取れないため、慎重な計画が重要です。" : "";

  if (burdenRate < 20) {
    return {
      level: "safe",
      comment: `住居費負担率 ${burdenRate.toFixed(1)}% は理想的です。老後資金・教育費・緊急予備費も十分確保できます。余裕資金を資産運用に回す計画も検討してみましょう。${ageNote}`,
    };
  } else if (burdenRate < 25) {
    return {
      level: "caution",
      comment: `住居費負担率 ${burdenRate.toFixed(1)}% は安全圏です。無理のない返済計画といえます。生活費の変動に備えて 6 ヶ月分の生活費は手元に残しておきましょう。${ageNote}`,
    };
  } else if (burdenRate < 30) {
    return {
      level: "warning",
      comment: `住居費負担率 ${burdenRate.toFixed(1)}% はやや高め。収入が安定していれば対応可能ですが、共働きの場合は一方の収入が減るリスクを考慮してください。頭金を増やすことで負担率を下げられます。${ageNote}`,
    };
  } else if (burdenRate < 35) {
    return {
      level: "danger",
      comment: `住居費負担率 ${burdenRate.toFixed(1)}% はリスク水準です。年収の伸びがないと生活が厳しくなる可能性があります。頭金を増やすか、購入価格を「安全購入価格（${safePrice.toLocaleString()} 万円）」に引き下げることを検討してください。${ageNote}`,
    };
  } else {
    return {
      level: "critical",
      comment: `住居費負担率 ${burdenRate.toFixed(1)}% は危険ゾーンです。この水準では住宅ローン審査が通らない可能性もあります。安全購入価格（${safePrice.toLocaleString()} 万円）を目安に計画を見直してください。${ageNote}`,
    };
  }
}

export function diagnose(input: DiagnosisInput): DiagnosisResult {
  const { annualIncome, age, downPayment, interestRate, repaymentYears, monthlyLiving } = input;

  // 各閾値の年間返済上限（万円）
  const safeAnnualPayment = annualIncome * 0.25;
  const aggressiveAnnualPayment = annualIncome * 0.30;
  const dangerAnnualPayment = annualIncome * 0.35;

  // 月返済上限（万円）
  const safeMonthlyLimit = safeAnnualPayment / 12;
  const aggressiveMonthlyLimit = aggressiveAnnualPayment / 12;
  const dangerMonthlyLimit = dangerAnnualPayment / 12;

  // 最大借入額（万円）
  const safeLoan = calcMaxLoan(safeMonthlyLimit, interestRate, repaymentYears);
  const aggressiveLoan = calcMaxLoan(aggressiveMonthlyLimit, interestRate, repaymentYears);
  const dangerLoan = calcMaxLoan(dangerMonthlyLimit, interestRate, repaymentYears);

  // 購入価格 = 借入額 + 頭金
  const safePrice = Math.floor(safeLoan + downPayment);
  const aggressivePrice = Math.floor(aggressiveLoan + downPayment);
  const dangerPrice = Math.floor(dangerLoan + downPayment);

  // 安全購入価格ベースの月返済額・住居費負担率
  const loanForSafe = safePrice - downPayment;
  const monthlyPayment = calcMonthlyPayment(loanForSafe, interestRate, repaymentYears);
  const burdenRate = (monthlyPayment * 12 / annualIncome) * 100;

  const { level, comment } = getComment(burdenRate, age, safePrice, annualIncome);

  // monthlyLiving は将来の表示拡張用として計算に含める
  void monthlyLiving;

  return {
    safePrice,
    aggressivePrice,
    dangerPrice,
    burdenRate,
    monthlyPayment: Math.round(monthlyPayment * 10) / 10,
    comment,
    level,
  };
}
