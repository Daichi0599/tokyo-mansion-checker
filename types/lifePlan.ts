/**
 * v2 横断診断（/plan）の共通プロフィール型。
 *
 * 金額は既存ロジック（lib/calculator.ts, lib/childCost.ts）に合わせてすべて万円単位。
 * localStorage に保存する形式なので version を必ず持ち、将来の形式変更に備える。
 */

export type HousingIntent = "none" | "considering" | "planned";
export type CarPlan = "none" | "carshare" | "used" | "new";
export type BirthPlan = "none" | "standard" | "premium";
export type EducationPolicy = "all_public" | "junior_private" | "elem_private";
export type UniversityType = "national" | "private_arts" | "private_science";
export type EntryIntent = "housing" | "family" | "car" | "all";
export type IncomeGrowthScenario = "flat" | "moderate" | "strong";

export interface LifeProfile {
  version: 2;
  entryIntent: EntryIntent;

  household: {
    userAge: number;
    partnerAge?: number;
    /** 額面年収（賞与込みの合計）。住宅ローンの返済負担率など、既存の年収ベース計算はこの合計値を使う */
    userIncome: number;
    partnerIncome: number;
    /** userIncome/partnerIncomeのうち賞与が占める額面年間分。月次収支の計算では月給部分と切り離し、
     *  賞与は頭金・特別支出用の別枠（年間の手取り目安）として扱う */
    userBonusAnnual: number;
    partnerBonusAnnual: number;
    savings: number;
    monthlyLivingCost: number;
    currentRent: number;
    /** 昇給の見込み。年間の収入成長率シナリオとして選ばせる（自由入力の予測は精度を装いすぎるため避ける） */
    incomeGrowthScenario: IncomeGrowthScenario;
    /** NISA・株など金融資産への毎月の積立額。運用リターンは見込まず、元本の積み上げのみを追跡する */
    monthlyInvestment: number;
  };

  housing: {
    intent: HousingIntent;
    targetPrice: number;
    downPayment: number;
    interestRate: number;
    repaymentYears: number;
    managementFee: number;
    /** 購入までの年数。0=今すぐ。資産推移シミュレーションで、この年までは家賃・以降はローンを計上する */
    purchaseInYears: number;
  };

  family: {
    children: 0 | 1 | 2 | 3;
    firstChildInYears: number;
    /** 育休を取る方（本人側）の賞与を除いた額面月給×12。給付金は賞与を算定に含めないため別入力 */
    leaveTakerIncome: number;
    leaveMonths: number;
    /** パートナー側の育休期間。0なら取らない前提。年収から賞与を除いた月給部分を使う */
    partnerLeaveMonths: number;
    birthPlan: BirthPlan;
    educationPolicy: EducationPolicy;
    university: UniversityType;
  };

  car: {
    plan: CarPlan;
    parkingFee: number;
    monthlyUseDays: number;
  };
}
