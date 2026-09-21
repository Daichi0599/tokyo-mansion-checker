import type { LifeProfile, EntryIntent } from "@/types/lifePlan";

/**
 * 未入力状態の初期値。
 * 「入っていない」を意味する項目は intent/plan/policy 側で表現し、数値の 0 とは区別する
 * （例: 車を持たない = car.plan: "none"。car.parkingFee: 0 は「駐車場代がかからない」の意味になってしまうため）。
 */
export const DEFAULT_LIFE_PROFILE: LifeProfile = {
  version: 1,
  entryIntent: "all",

  household: {
    userAge: 30,
    partnerAge: undefined,
    userIncome: 500,
    partnerIncome: 300,
    userBonusAnnual: 100,
    partnerBonusAnnual: 60,
    savings: 500,
    monthlyLivingCost: 20,
    currentRent: 15,
    incomeGrowthScenario: "moderate",
    monthlyInvestment: 5,
  },

  housing: {
    intent: "considering",
    targetPrice: 6000,
    downPayment: 500,
    interestRate: 1.0,
    repaymentYears: 35,
    managementFee: 3,
    purchaseInYears: 0,
  },

  family: {
    children: 1,
    firstChildInYears: 1,
    leaveTakerIncome: 300,
    leaveMonths: 10,
    partnerLeaveMonths: 0,
    birthPlan: "standard",
    educationPolicy: "all_public",
    university: "national",
  },

  car: {
    plan: "none",
    parkingFee: 3,
    monthlyUseDays: 4,
  },
};

export function createDefaultProfile(entryIntent: EntryIntent = "all"): LifeProfile {
  const profile: LifeProfile = {
    ...DEFAULT_LIFE_PROFILE,
    entryIntent,
    household: { ...DEFAULT_LIFE_PROFILE.household },
    housing: { ...DEFAULT_LIFE_PROFILE.housing },
    family: { ...DEFAULT_LIFE_PROFILE.family },
    car: { ...DEFAULT_LIFE_PROFILE.car },
  };

  // The selected entry point is a promise about what will be calculated.
  // Do not silently include unrelated default plans in the result.
  if (entryIntent !== "all") {
    if (entryIntent !== "housing") profile.housing.intent = "none";
    if (entryIntent !== "family") profile.family.children = 0;
    if (entryIntent !== "car") profile.car.plan = "none";
  }

  return profile;
}
