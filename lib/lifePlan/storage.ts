import { useSyncExternalStore } from "react";
import type {
  BirthPlan, CarPlan, EducationPolicy, EntryIntent, HousingIntent,
  IncomeGrowthScenario, LifeProfile, UniversityType,
} from "@/types/lifePlan";
import { createDefaultProfile } from "./defaults";

const STORAGE_KEY = "30lab:life-profile:v2";
const LEGACY_STORAGE_KEY = "30lab:life-profile:v1";
type UnknownRecord = Record<string, unknown>;

function record(value: unknown): UnknownRecord {
  return typeof value === "object" && value !== null ? (value as UnknownRecord) : {};
}

function finite(value: unknown, fallback: number): number {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function oneOf<T extends string>(value: unknown, choices: readonly T[], fallback: T): T {
  return typeof value === "string" && choices.includes(value as T) ? (value as T) : fallback;
}

/** v1や開発途中の保存データを、現在の初期値で安全に補完する。 */
export function migrateLifeProfile(value: unknown): LifeProfile | null {
  const root = record(value);
  if (root.version !== 1 && root.version !== 2) return null;

  const entryIntent = oneOf<EntryIntent>(root.entryIntent, ["housing", "family", "car", "all"], "all");
  const base = createDefaultProfile(entryIntent);
  const household = record(root.household);
  const housing = record(root.housing);
  const family = record(root.family);
  const car = record(root.car);

  return {
    version: 2,
    entryIntent,
    household: {
      userAge: finite(household.userAge, base.household.userAge),
      partnerAge: typeof household.partnerAge === "number" && Number.isFinite(household.partnerAge)
        ? household.partnerAge : undefined,
      userIncome: finite(household.userIncome, base.household.userIncome),
      partnerIncome: finite(household.partnerIncome, base.household.partnerIncome),
      userBonusAnnual: finite(household.userBonusAnnual, 0),
      partnerBonusAnnual: finite(household.partnerBonusAnnual, 0),
      savings: finite(household.savings, base.household.savings),
      monthlyLivingCost: finite(household.monthlyLivingCost, base.household.monthlyLivingCost),
      currentRent: finite(household.currentRent, base.household.currentRent),
      incomeGrowthScenario: oneOf<IncomeGrowthScenario>(
        household.incomeGrowthScenario, ["flat", "moderate", "strong"], base.household.incomeGrowthScenario
      ),
      monthlyInvestment: finite(household.monthlyInvestment, 0),
    },
    housing: {
      intent: oneOf<HousingIntent>(housing.intent, ["none", "considering", "planned"], base.housing.intent),
      targetPrice: finite(housing.targetPrice, base.housing.targetPrice),
      downPayment: finite(housing.downPayment, base.housing.downPayment),
      interestRate: finite(housing.interestRate, base.housing.interestRate),
      repaymentYears: finite(housing.repaymentYears, base.housing.repaymentYears),
      managementFee: finite(housing.managementFee, base.housing.managementFee),
      purchaseInYears: finite(housing.purchaseInYears, 0),
    },
    family: {
      children: [0, 1, 2, 3].includes(family.children as number)
        ? (family.children as 0 | 1 | 2 | 3) : base.family.children,
      firstChildInYears: finite(family.firstChildInYears, base.family.firstChildInYears),
      leaveTakerIncome: finite(family.leaveTakerIncome, base.family.leaveTakerIncome),
      leaveMonths: finite(family.leaveMonths, base.family.leaveMonths),
      partnerLeaveMonths: finite(family.partnerLeaveMonths, 0),
      birthPlan: oneOf<BirthPlan>(family.birthPlan, ["none", "standard", "premium"], base.family.birthPlan),
      educationPolicy: oneOf<EducationPolicy>(
        family.educationPolicy, ["all_public", "junior_private", "elem_private"], base.family.educationPolicy
      ),
      university: oneOf<UniversityType>(
        family.university, ["national", "private_arts", "private_science"], base.family.university
      ),
    },
    car: {
      plan: oneOf<CarPlan>(car.plan, ["none", "carshare", "used", "new"], base.car.plan),
      parkingFee: finite(car.parkingFee, base.car.parkingFee),
      monthlyUseDays: finite(car.monthlyUseDays, base.car.monthlyUseDays),
    },
  };
}

export function isLifeProfileCalculable(profile: LifeProfile): boolean {
  const groups = [profile.household, profile.housing, profile.family, profile.car];
  return groups.every((group) =>
    Object.values(group).every((value) => typeof value !== "number" || Number.isFinite(value))
  );
}

function hasWindow(): boolean { return typeof window !== "undefined"; }

function readRaw(): string | null {
  if (!hasWindow()) return null;
  return window.localStorage.getItem(STORAGE_KEY) ?? window.localStorage.getItem(LEGACY_STORAGE_KEY);
}

export function loadLifeProfile(): LifeProfile | null {
  if (!hasWindow()) return null;
  try {
    const raw = readRaw();
    if (!raw) return null;
    const migrated = migrateLifeProfile(JSON.parse(raw));
    if (!migrated) return null;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
    return migrated;
  } catch { return null; }
}

export function saveLifeProfile(profile: LifeProfile): void {
  if (!hasWindow()) return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(migrateLifeProfile(profile) ?? createDefaultProfile()));
  } catch {
    // 保存できなくても診断自体は継続できる
  } finally { emitLifeProfileChange(); }
}

export function clearLifeProfile(): void {
  if (!hasWindow()) return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
    window.localStorage.removeItem(LEGACY_STORAGE_KEY);
  } catch {
    // no-op
  } finally { emitLifeProfileChange(); }
}

export function loadOrCreateLifeProfile(): LifeProfile {
  return loadLifeProfile() ?? createDefaultProfile();
}

type Listener = () => void;
const listeners = new Set<Listener>();
let cachedRaw: string | null | undefined;
let cachedSnapshot: LifeProfile | null = null;

function emitLifeProfileChange(): void {
  cachedRaw = undefined;
  listeners.forEach((listener) => listener());
}

function subscribeLifeProfile(callback: Listener): () => void {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getLifeProfileSnapshot(): LifeProfile | null {
  if (!hasWindow()) return null;
  let raw: string | null;
  try { raw = readRaw(); } catch { raw = null; }
  if (raw === cachedRaw) return cachedSnapshot;
  cachedRaw = raw;
  if (!raw) return (cachedSnapshot = null);
  try { cachedSnapshot = migrateLifeProfile(JSON.parse(raw)); }
  catch { cachedSnapshot = null; }
  return cachedSnapshot;
}

function getLifeProfileServerSnapshot(): undefined { return undefined; }

export function useLifeProfile(): LifeProfile | null | undefined {
  return useSyncExternalStore(subscribeLifeProfile, getLifeProfileSnapshot, getLifeProfileServerSnapshot);
}
