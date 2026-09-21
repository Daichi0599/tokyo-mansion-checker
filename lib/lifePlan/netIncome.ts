/**
 * 額面年収から手取り額を概算する。
 * 実際の税・社会保険料は控除の内容・自治体・扶養状況などで変わるため、ここでは
 * 日本の一般的な手取り率の目安を年収帯ごとに線形補間するだけの簡易概算とする
 * （詳細な所得税・住民税・社会保険料の計算はしない）。
 */
const NET_RATE_TABLE: [income: number, rate: number][] = [
  [0, 1],
  [300, 0.78],
  [400, 0.77],
  [500, 0.76],
  [600, 0.75],
  [700, 0.74],
  [800, 0.73],
  [900, 0.71],
  [1000, 0.7],
  [1200, 0.68],
  [1500, 0.65],
  [2000, 0.6],
  [3000, 0.55],
];

export function estimateNetRate(annualIncomeMan: number): number {
  if (annualIncomeMan <= 0) return 1;
  const table = NET_RATE_TABLE;
  if (annualIncomeMan <= table[0][0]) return table[0][1];
  for (let i = 1; i < table.length; i++) {
    const [prevIncome, prevRate] = table[i - 1];
    const [income, rate] = table[i];
    if (annualIncomeMan <= income) {
      const ratio = (annualIncomeMan - prevIncome) / (income - prevIncome);
      return prevRate + (rate - prevRate) * ratio;
    }
  }
  return table[table.length - 1][1];
}

export function estimateNetAnnualIncome(annualIncomeMan: number): number {
  return Math.round(annualIncomeMan * estimateNetRate(annualIncomeMan) * 100) / 100;
}

/**
 * 個人の額面年収を「月給部分」と「賞与部分」に分け、それぞれの手取りを概算する。
 * 手取り率は賞与を含めた年収総額から求め、月給・賞与の両方に同じ率を適用する
 * （賞与だけ見ると少額になり手取り率を過大評価してしまうのを避けるため）。
 */
export function splitNetIncome(annualIncomeMan: number, annualBonusMan: number) {
  const rate = estimateNetRate(annualIncomeMan);
  const bonus = Math.min(Math.max(0, annualBonusMan), annualIncomeMan);
  const salary = annualIncomeMan - bonus;
  return {
    netSalaryAnnual: Math.round(salary * rate * 100) / 100,
    netBonusAnnual: Math.round(bonus * rate * 100) / 100,
  };
}
