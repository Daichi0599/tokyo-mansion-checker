/**
 * 車の保有方法別コスト計算。
 * 元は app/car/page.tsx にベタ書きされていたロジックを、v2横断診断（lib/lifePlan）からも
 * 呼び出せるよう純粋関数として分離した。/car の表示・計算結果は変更していない。
 */

export interface CarInputs {
  usageDaysPerMonth: number;
  hoursPerUse: number;
  parkingFeeMan: number;
}

export interface CostResult {
  label: string;
  monthlyMan: number;
  totalMan: number;
  isRecommended: boolean;
  colorClass: string;
  badgeBg: string;
  icon: string;
}

export function calculate(inputs: CarInputs): CostResult[] {
  const { usageDaysPerMonth, hoursPerUse, parkingFeeMan } = inputs;
  const parkingFeeYen = parkingFeeMan * 10000;

  const carshareMonthly = usageDaysPerMonth * hoursPerUse * 1500 + usageDaysPerMonth * 500;
  const carshareTotal = carshareMonthly * 120;

  const usedInitial = 1500000;
  const usedMonthly = parkingFeeYen + 8000 + 3000 + 8000 + 16000;
  const usedTotal = usedInitial + usedMonthly * 120;

  const newInitial = 3500000;
  const newMonthly = parkingFeeYen + 10000 + 3500 + 8000 + 13000;
  const newTotal = newInitial + newMonthly * 120;

  const totals = [carshareTotal, usedTotal, newTotal];
  const minTotal = Math.min(...totals);

  return [
    {
      label: "カーシェア",
      monthlyMan: Math.round(carshareMonthly / 1000) / 10,
      totalMan: Math.round(carshareTotal / 10000),
      isRecommended: carshareTotal === minTotal,
      colorClass: "border-blue-500/40 bg-blue-500/10",
      badgeBg: "bg-blue-600",
      icon: "🔑",
    },
    {
      label: "中古車購入",
      monthlyMan: Math.round(usedMonthly / 1000) / 10,
      totalMan: Math.round(usedTotal / 10000),
      isRecommended: usedTotal === minTotal,
      colorClass: "border-emerald-500/40 bg-emerald-500/10",
      badgeBg: "bg-emerald-600",
      icon: "🚗",
    },
    {
      label: "新車購入",
      monthlyMan: Math.round(newMonthly / 1000) / 10,
      totalMan: Math.round(newTotal / 10000),
      isRecommended: newTotal === minTotal,
      colorClass: "border-amber-500/40 bg-amber-500/10",
      badgeBg: "bg-amber-500",
      icon: "✨",
    },
  ];
}

export function getDiagnosisComment(results: CostResult[], inputs: CarInputs): { title: string; body: string } {
  const recommended = results.find((r) => r.isRecommended);

  if (recommended?.label === "カーシェア") {
    if (inputs.usageDaysPerMonth <= 4) {
      return {
        title: "都内在住なら車なしが賢い選択",
        body: "月の利用頻度が少ない場合、カーシェアが圧倒的にコスト最適です。駐車場代・保険・車検の固定費ゼロで、使った分だけ払うカーシェアが都市生活に最もフィットします。",
      };
    }
    return {
      title: "都内在住なら車なしが賢い選択",
      body: "利用頻度が高めでもカーシェアが最安です。電車・バスと組み合わせた都市型モビリティが、コストと利便性のバランスで優れています。駐車場代がかからない点が大きなアドバンテージです。",
    };
  }

  if (recommended?.label === "中古車購入") {
    return {
      title: "郊外利用が多いなら中古車が最適",
      body: `駐車場代が月${inputs.parkingFeeMan}万円でも、利用頻度を考えると中古車購入が10年トータルで有利です。週末の郊外へのドライブや子育てで車をよく使うライフスタイルなら、中古車が費用対効果の高い選択肢です。`,
    };
  }

  return {
    title: "高頻度ユーザーには新車も選択肢に",
    body: "利用頻度が非常に高く、車が生活の中心という場合は新車も検討に値します。ただし都内では維持費全体が高くなりやすいため、本当に必要かどうかを家族で話し合うことをおすすめします。",
  };
}

/**
 * v2横断診断向け：単一プランの月額（万円）を返す。
 * CarPlan は "none" | "carshare" | "used" | "new"。none は 0 円。
 * usageDaysPerMonth・hoursPerUse は横断診断では入力させていないため標準値で概算する
 * （個別診断 /car のほうが精度が高いので、v2はあくまで概算として扱う）。
 */
const V2_STANDARD_USAGE = { usageDaysPerMonth: 4, hoursPerUse: 3 };

export function calcCarMonthlyCostMan(plan: "none" | "carshare" | "used" | "new", parkingFeeMan: number): number {
  if (plan === "none") return 0;
  const results = calculate({ ...V2_STANDARD_USAGE, parkingFeeMan });
  const map: Record<"carshare" | "used" | "new", string> = {
    carshare: "カーシェア",
    used: "中古車購入",
    new: "新車購入",
  };
  const found = results.find((r) => r.label === map[plan]);
  return found?.monthlyMan ?? 0;
}
