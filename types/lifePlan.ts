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

export interface LifeProfile {
  version: 1;
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
  };

  housing: {
    intent: HousingIntent;
    targetPrice: number;
    downPayment: number;
    interestRate: number;
    repaymentYears: number;
    managementFee: number;
  };

  family: {
    children: 0 | 1 | 2 | 3;
    firstChildInYears: number;
    leaveTakerIncome: number;
    leaveMonths: number;
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
