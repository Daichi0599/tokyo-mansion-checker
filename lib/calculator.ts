import { DiagnosisInput, DiagnosisLevel, DiagnosisResult, PriceMetrics } from "@/types";

/**
 * 元利均等返済で「月返済額」から「最大借入可能額」を逆算する
 */
function calcMaxLoan(monthlyPayment: number, annualRate: number, years: number): number {
  if (annualRate === 0) return monthlyPayment * years * 12;
  const r = annualRate / 100 / 12;
  const n = years * 12;
  const factor = Math.pow(1 + r, n);
  return monthlyPayment * (factor - 1) / (r * factor);
}

/**
 * 借入額から月返済額を計算する（元利均等返済）
 */
function calcMonthlyPayment(loanAmount: number, annualRate: number, years: number): number {
  if (annualRate === 0) return loanAmount / (years * 12);
  const r = annualRate / 100 / 12;
  const n = years * 12;
  const factor = Math.pow(1 + r, n);
  return loanAmount * r * factor / (factor - 1);
}

/**
 * 負担率・年齢から診断レベルとコメントを返す
 * 負担率は ローン返済 + 管理費 で計算済みの値を受け取る
 */
function getComment(
  burdenRate: number,
  age: number,
  safePrice: number,
): { level: DiagnosisResult["level"]; comment: string } {
  const ageNote = age >= 35
    ? " なお、年齢的に返済期間を長く取りにくいため、早めの資金計画がより重要です。"
    : "";

  if (burdenRate < 20) {
    return {
      level: "safe",
      comment: `住居費の月負担が収入の${burdenRate.toFixed(1)}%と、理想的な水準です。老後資金・教育費・緊急予備費を確保しながら資産形成も続けやすく、金利上昇や収入変動にも対応できる余裕があります。${ageNote}`,
    };
  } else if (burdenRate < 25) {
    return {
      level: "caution",
      comment: `住居費負担${burdenRate.toFixed(1)}%は安全圏です。共働き継続を前提にした、無理のない計画といえます。育児休業など収入が一時的に下がる場合に備えて、6ヶ月分の生活費を手元に確保しておくと安心です。${ageNote}`,
    };
  } else if (burdenRate < 30) {
    return {
      level: "warning",
      comment: `住居費負担${burdenRate.toFixed(1)}%はやや背伸びした水準です。現在の収入が安定していれば対応できますが、金利上昇・教育費増加・育休などが重なると家計が圧迫されやすくなります。頭金の上乗せや、安全購入価格（${safePrice.toLocaleString()}万円）を目安に再検討してみましょう。${ageNote}`,
    };
  } else if (burdenRate < 35) {
    return {
      level: "danger",
      comment: `住居費負担${burdenRate.toFixed(1)}%は要注意の水準です。万一の収入減や金利上昇で家計が回らなくなるリスクがあります。安全購入価格（${safePrice.toLocaleString()}万円）を目安に、頭金を増やすか購入価格を引き下げることをお勧めします。${ageNote}`,
    };
  } else {
    return {
      level: "critical",
      comment: `住居費負担${burdenRate.toFixed(1)}%は家計を圧迫するリスクが非常に高い水準です。住宅ローン審査が通りにくいケースもあります。安全購入価格（${safePrice.toLocaleString()}万円）まで引き下げるか、頭金を大幅に増やすことを強くお勧めします。${ageNote}`,
    };
  }
}

function getBurdenLevel(burdenRate: number): DiagnosisLevel {
  if (burdenRate < 20) return "safe";
  if (burdenRate < 25) return "caution";
  if (burdenRate < 30) return "warning";
  if (burdenRate < 35) return "danger";
  return "critical";
}

export function calcPriceMetrics(price: number, input: DiagnosisInput): PriceMetrics {
  const { downPayment, interestRate, repaymentYears, annualIncome, managementFee } = input;
  const fee = managementFee ?? 0;
  const loanAmount = Math.max(0, price - downPayment);
  const monthlyPayment = loanAmount > 0
    ? Math.round(calcMonthlyPayment(loanAmount, interestRate, repaymentYears) * 10) / 10
    : 0;
  // 負担率はローン返済 + 管理費ベース
  const burdenRate = ((monthlyPayment + fee) * 12 / annualIncome) * 100;
  return {
    price,
    loanAmount,
    monthlyPayment,
    burdenRate,
    level: getBurdenLevel(burdenRate),
  };
}

export function diagnose(input: DiagnosisInput): DiagnosisResult {
  const { annualIncome, age, downPayment, interestRate, repaymentYears, managementFee } = input;
  const fee = managementFee ?? 0;

  // 各閾値の月間住居費上限（万円）から管理費を差し引いた、ローン返済に充てられる上限
  const safeMonthlyLoanLimit       = annualIncome * 0.25 / 12 - fee;
  const aggressiveMonthlyLoanLimit = annualIncome * 0.30 / 12 - fee;
  const dangerMonthlyLoanLimit     = annualIncome * 0.35 / 12 - fee;

  // 最大借入額（万円）
  const safeLoan       = calcMaxLoan(Math.max(0, safeMonthlyLoanLimit),       interestRate, repaymentYears);
  const aggressiveLoan = calcMaxLoan(Math.max(0, aggressiveMonthlyLoanLimit), interestRate, repaymentYears);
  const dangerLoan     = calcMaxLoan(Math.max(0, dangerMonthlyLoanLimit),     interestRate, repaymentYears);

  // 購入価格 = 借入額 + 頭金
  const safePrice       = Math.floor(safeLoan + downPayment);
  const aggressivePrice = Math.floor(aggressiveLoan + downPayment);
  const dangerPrice     = Math.floor(dangerLoan + downPayment);

  // 安全購入価格ベースの月返済額・総住居費・負担率
  const loanForSafe    = Math.max(0, safePrice - downPayment);
  const monthlyPayment = loanForSafe > 0 ? calcMonthlyPayment(loanForSafe, interestRate, repaymentYears) : 0;
  const monthlyTotal   = monthlyPayment + fee;
  const burdenRate     = (monthlyTotal * 12 / annualIncome) * 100;

  const { level, comment } = getComment(burdenRate, age, safePrice);

  return {
    safePrice,
    aggressivePrice,
    dangerPrice,
    burdenRate,
    monthlyPayment: Math.round(monthlyPayment * 10) / 10,
    monthlyTotal:   Math.round(monthlyTotal   * 10) / 10,
    comment,
    level,
  };
}
