import { DiagnosisInput, DiagnosisLevel, DiagnosisResult, PriceMetrics, RateStressCase, RentComparison } from "@/types";

/**
 * 年収倍率の上限。
 *
 * 返済比率だけで購入価格を逆算すると、金利が低いほど「同じ返済額で借りられる額」が
 * 膨らむため、金利0.7%・35年では負担率25%でも年収7.7倍が「安全」として出てしまう。
 * 低金利が続く前提が結果に埋め込まれてしまうので、倍率側からも上限をかける。
 */
const MAX_INCOME_MULTIPLE = 7;

/** 金利上昇のストレステストで見る上げ幅（%ポイント） */
const RATE_STRESS_STEPS = [0.5, 1.0];

/**
 * 固定資産税・都市計画税の年額を物件価格から概算する率。
 * 土地の小規模住宅用地特例や建物の経年減価で実際は幅が出るため、
 * 都内マンションでよく見る水準（7,000万円で年17万円前後）に寄せた目安。
 */
const PROPERTY_TAX_RATE = 0.0025;

/** 住宅ローン控除の控除率。年末残高（限度額まで）に対して13年間 */
const LOAN_DEDUCTION_RATE = 0.007;

/**
 * 「今の家賃と比べてどうか」を出す。
 *
 * 賃貸では大家が負担していた管理費・修繕積立金・固定資産税が、購入すると自分の
 * 支出になる。「ローン返済＝家賃」で組むと月の実支出は家賃を数万円上回るため、
 * 返済額だけを家賃と並べても比較にならない。
 */
function calcRentComparison(
  input: DiagnosisInput,
  price: number,
  loanAmount: number,
  monthlyPayment: number,
): RentComparison | undefined {
  const rent = input.currentRent ?? 0;
  if (rent <= 0 || monthlyPayment <= 0) return undefined;

  const fee = input.managementFee ?? 0;
  const propertyTax = (price * PROPERTY_TAX_RATE) / 12;
  const grossMonthly = monthlyPayment + fee + propertyTax;

  // 控除は年末残高と限度額の小さいほうが対象。納税額が上限になる点は画面で注記する
  const limit = input.deductionLimit ?? 0;
  const deduction = limit > 0 ? (Math.min(loanAmount, limit) * LOAN_DEDUCTION_RATE) / 12 : 0;
  const netMonthly = grossMonthly - deduction;

  // 初月の元金部分。ここは資産として残るので「消えるお金」から除く
  const interest = loanAmount * (input.interestRate / 100 / 12);
  const principal = Math.max(0, monthlyPayment - interest);

  const round = (v: number) => Math.round(v * 10) / 10;
  return {
    loanPayment: round(monthlyPayment),
    managementFee: round(fee),
    propertyTax: round(propertyTax),
    grossMonthly: round(grossMonthly),
    deduction: round(deduction),
    netMonthly: round(netMonthly),
    principal: round(principal),
    disappearing: round(grossMonthly - principal),
    rent: round(rent),
    diffGross: round(grossMonthly - rent),
    diffNet: round(netMonthly - rent),
  };
}

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
  const safeByBurden    = Math.floor(safeLoan + downPayment);
  const aggressivePrice = Math.floor(aggressiveLoan + downPayment);
  const dangerPrice     = Math.floor(dangerLoan + downPayment);

  // 返済比率と年収倍率の両方を満たす額を採用する（小さいほう）
  const safeByMultiple  = Math.floor(annualIncome * MAX_INCOME_MULTIPLE);
  const safePrice       = Math.min(safeByBurden, safeByMultiple);
  const cappedByMultiple = safeByMultiple < safeByBurden;

  // 安全購入価格ベースの月返済額・総住居費・負担率
  const loanForSafe    = Math.max(0, safePrice - downPayment);
  const monthlyPayment = loanForSafe > 0 ? calcMonthlyPayment(loanForSafe, interestRate, repaymentYears) : 0;
  const monthlyTotal   = monthlyPayment + fee;
  const burdenRate     = (monthlyTotal * 12 / annualIncome) * 100;

  const { level, comment: baseComment } = getComment(burdenRate, age, safePrice);
  const comment = cappedByMultiple
    ? `${baseComment} なお今回は、月々の返済比率よりも先に「年収の${MAX_INCOME_MULTIPLE}倍」の上限に達したため、そちらを安全購入価格としています。低金利では返済比率だけを見ると借入額が膨らみやすいためです。`
    : baseComment;

  // 金利が上がった場合、同じ借入額で返済額がどう変わるか
  const rateStress: RateStressCase[] = RATE_STRESS_STEPS.map((step) => {
    const rate = interestRate + step;
    const m = loanForSafe > 0 ? calcMonthlyPayment(loanForSafe, rate, repaymentYears) : 0;
    const total = m + fee;
    return {
      rate: Math.round(rate * 100) / 100,
      monthlyPayment: Math.round(m * 10) / 10,
      diff: Math.round((m - monthlyPayment) * 10) / 10,
      burdenRate: (total * 12 / annualIncome) * 100,
      level: getBurdenLevel((total * 12 / annualIncome) * 100),
    };
  });

  return {
    safePrice,
    aggressivePrice,
    dangerPrice,
    burdenRate,
    monthlyPayment: Math.round(monthlyPayment * 10) / 10,
    monthlyTotal:   Math.round(monthlyTotal   * 10) / 10,
    comment,
    level,
    rentComparison: calcRentComparison(input, safePrice, loanForSafe, monthlyPayment),
    incomeMultiple: Math.round((safePrice / annualIncome) * 10) / 10,
    cappedByMultiple,
    rateStress,
  };
}
