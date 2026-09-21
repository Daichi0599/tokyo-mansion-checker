"use client";

import { useState } from "react";
import type { LifeProfile, EducationPolicy, UniversityType, BirthPlan, CarPlan, IncomeGrowthScenario } from "@/types/lifePlan";
import { INCOME_GROWTH_LABEL } from "@/lib/lifePlan/wealthProjection";
import { PlanNumberField, PlanChoiceField, range } from "./PlanField";

interface Props {
  profile: LifeProfile;
  onChange: (profile: LifeProfile, fieldGroup: "household" | "housing" | "family" | "car") => void;
}

const BIRTH_OPTIONS: { value: BirthPlan; label: string }[] = [
  { value: "none", label: "今回は考えない" },
  { value: "standard", label: "標準的な分娩" },
  { value: "premium", label: "無痛分娩など" },
];

const EDUCATION_OPTIONS: { value: EducationPolicy; label: string }[] = [
  { value: "all_public", label: "公立中心" },
  { value: "junior_private", label: "中学から私立" },
  { value: "elem_private", label: "小学校から私立" },
];

const UNIVERSITY_OPTIONS: { value: UniversityType; label: string }[] = [
  { value: "national", label: "国公立" },
  { value: "private_arts", label: "私立文系" },
  { value: "private_science", label: "私立理系" },
];

const CAR_OPTIONS: { value: CarPlan; label: string }[] = [
  { value: "none", label: "持たない" },
  { value: "carshare", label: "カーシェア" },
  { value: "used", label: "中古車" },
  { value: "new", label: "新車" },
];

const INCOME_GROWTH_OPTIONS: { value: IncomeGrowthScenario; label: string }[] = [
  { value: "flat", label: INCOME_GROWTH_LABEL.flat },
  { value: "moderate", label: INCOME_GROWTH_LABEL.moderate },
  { value: "strong", label: INCOME_GROWTH_LABEL.strong },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">{children}</p>;
}

/** 結果画面から入力済みの全項目を直接変更できるパネル。変更時は再計算のみ行いページ遷移しない */
export default function PlanEditPanel({ profile, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const noChildren = profile.family.children === 0;
  const carDisabled = profile.car.plan === "none";

  return (
    <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <span className="text-sm font-bold text-white">条件を変えて試す</span>
        <span className="text-slate-400 text-sm">{open ? "閉じる ▲" : "開く ▼"}</span>
      </button>

      {open && (
        <div className="px-5 pb-5 space-y-6 border-t border-slate-700 pt-4">
          {/* ─── 世帯 ─── */}
          <div className="space-y-4">
            <SectionLabel>世帯</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
              <PlanNumberField
                label="ご本人の年収"
                unit="万円"
                value={profile.household.userIncome}
                options={[0, 300, 400, 500, 600, 700, 800, 900, 1000, 1200, 1500, 2000]}
                onChange={(v) => onChange({ ...profile, household: { ...profile.household, userIncome: v } }, "household")}
              />
              <PlanNumberField
                label="パートナーの年収"
                unit="万円"
                value={profile.household.partnerIncome}
                options={[0, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1200]}
                onChange={(v) => onChange({ ...profile, household: { ...profile.household, partnerIncome: v } }, "household")}
              />
              <PlanNumberField
                label="ご本人の年間賞与"
                unit="万円"
                value={profile.household.userBonusAnnual}
                options={[0, 30, 50, 80, 100, 150, 200, 300, 400]}
                onChange={(v) => onChange({ ...profile, household: { ...profile.household, userBonusAnnual: v } }, "household")}
              />
              <PlanNumberField
                label="パートナーの年間賞与"
                unit="万円"
                value={profile.household.partnerBonusAnnual}
                options={[0, 30, 50, 80, 100, 150, 200, 300]}
                onChange={(v) => onChange({ ...profile, household: { ...profile.household, partnerBonusAnnual: v } }, "household")}
              />
              <PlanNumberField
                label="貯蓄"
                unit="万円"
                value={profile.household.savings}
                options={[0, 100, 200, 300, 500, 700, 1000, 1500, 2000, 3000, 5000]}
                onChange={(v) => onChange({ ...profile, household: { ...profile.household, savings: v } }, "household")}
              />
              <PlanNumberField
                label="月の生活費"
                unit="万円"
                value={profile.household.monthlyLivingCost}
                options={[10, 15, 20, 25, 30, 35, 40, 50, 60]}
                onChange={(v) => onChange({ ...profile, household: { ...profile.household, monthlyLivingCost: v } }, "household")}
              />
              <PlanNumberField
                label="いまの家賃"
                unit="万円/月"
                value={profile.household.currentRent}
                options={[0, 5, 8, 10, 12, 14, 16, 18, 20, 25, 30]}
                onChange={(v) => onChange({ ...profile, household: { ...profile.household, currentRent: v } }, "household")}
              />
            </div>
          </div>

          {/* ─── 住宅 ─── */}
          <div className="space-y-4 border-t border-slate-700 pt-4">
            <SectionLabel>住宅</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
              <PlanNumberField
                label="購入する時期"
                unit="年後"
                value={profile.housing.purchaseInYears}
                options={[0, 1, 2, 3, 5, 7, 10]}
                optionLabels={{ 0: "今すぐ" }}
                onChange={(v) => onChange({ ...profile, housing: { ...profile.housing, purchaseInYears: v } }, "housing")}
              />
              <PlanNumberField
                label="住宅価格"
                unit="万円"
                value={profile.housing.targetPrice}
                options={[2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 12000, 15000]}
                onChange={(v) => onChange({ ...profile, housing: { ...profile.housing, targetPrice: v } }, "housing")}
              />
              <PlanNumberField
                label="頭金"
                unit="万円"
                value={profile.housing.downPayment}
                options={[0, 100, 200, 300, 500, 700, 1000, 1500, 2000, 3000]}
                onChange={(v) => onChange({ ...profile, housing: { ...profile.housing, downPayment: v } }, "housing")}
              />
              <PlanNumberField
                label="金利（年率）"
                unit="%"
                value={profile.housing.interestRate}
                options={[0.5, 0.7, 0.9, 1.0, 1.1, 1.3, 1.5, 1.8, 2.0, 2.5, 3.0, 3.3, 3.5]}
                onChange={(v) => onChange({ ...profile, housing: { ...profile.housing, interestRate: v } }, "housing")}
              />
              <PlanNumberField
                label="返済年数"
                unit="年"
                value={profile.housing.repaymentYears}
                options={range(5, 50, 5)}
                onChange={(v) => onChange({ ...profile, housing: { ...profile.housing, repaymentYears: v } }, "housing")}
              />
              <PlanNumberField
                label="管理費・修繕積立金"
                unit="万円/月"
                value={profile.housing.managementFee}
                options={[0, 1, 2, 3, 4, 5, 6, 8, 10]}
                onChange={(v) => onChange({ ...profile, housing: { ...profile.housing, managementFee: v } }, "housing")}
              />
            </div>
          </div>

          {/* ─── 子育て ─── */}
          <div className="space-y-4 border-t border-slate-700 pt-4">
            <SectionLabel>子育て</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
              <PlanNumberField
                label="子どもの人数"
                unit="人"
                value={profile.family.children}
                options={[0, 1, 2, 3]}
                onChange={(v) =>
                  onChange({ ...profile, family: { ...profile.family, children: v as LifeProfile["family"]["children"] } }, "family")
                }
              />
              {!noChildren && (
                <>
                  <PlanNumberField
                    label="出産まで（または最初の子どもまで）"
                    unit="年後"
                    value={profile.family.firstChildInYears}
                    options={[0, 1, 2, 3, 4, 5]}
                    onChange={(v) => onChange({ ...profile, family: { ...profile.family, firstChildInYears: v } }, "family")}
                  />
                  <PlanNumberField
                    label="育休を取る方の年収"
                    unit="万円"
                    value={profile.family.leaveTakerIncome}
                    options={[0, 200, 300, 400, 500, 600, 700, 800]}
                    onChange={(v) => onChange({ ...profile, family: { ...profile.family, leaveTakerIncome: v } }, "family")}
                  />
                  <PlanNumberField
                    label="育休の期間"
                    unit="ヶ月"
                    value={profile.family.leaveMonths}
                    options={range(0, 24, 3)}
                    onChange={(v) => onChange({ ...profile, family: { ...profile.family, leaveMonths: v } }, "family")}
                  />
                </>
              )}
            </div>
            {!noChildren && (
              <>
                <PlanChoiceField
                  label="出産の方針"
                  value={profile.family.birthPlan}
                  options={BIRTH_OPTIONS}
                  onChange={(v) => onChange({ ...profile, family: { ...profile.family, birthPlan: v } }, "family")}
                />
                <PlanChoiceField
                  label="教育方針"
                  value={profile.family.educationPolicy}
                  options={EDUCATION_OPTIONS}
                  onChange={(v) => onChange({ ...profile, family: { ...profile.family, educationPolicy: v } }, "family")}
                />
                <PlanChoiceField
                  label="進学先（大学）"
                  value={profile.family.university}
                  options={UNIVERSITY_OPTIONS}
                  onChange={(v) => onChange({ ...profile, family: { ...profile.family, university: v } }, "family")}
                />
              </>
            )}
          </div>

          {/* ─── 車 ─── */}
          <div className="space-y-4 border-t border-slate-700 pt-4">
            <SectionLabel>車</SectionLabel>
            <PlanChoiceField
              label="車の持ち方"
              value={profile.car.plan}
              options={CAR_OPTIONS}
              onChange={(v) => onChange({ ...profile, car: { ...profile.car, plan: v } }, "car")}
            />
            {!carDisabled && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
                <PlanNumberField
                  label="駐車場代"
                  unit="万円/月"
                  value={profile.car.parkingFee}
                  options={[0, 1, 2, 3, 4, 5]}
                  onChange={(v) => onChange({ ...profile, car: { ...profile.car, parkingFee: v } }, "car")}
                />
                <PlanNumberField
                  label="月の利用日数"
                  unit="日"
                  value={profile.car.monthlyUseDays}
                  options={[2, 4, 8, 12, 16, 20]}
                  onChange={(v) => onChange({ ...profile, car: { ...profile.car, monthlyUseDays: v } }, "car")}
                />
              </div>
            )}
          </div>

          {/* ─── 資産推移シミュレーションの前提 ─── */}
          <div className="space-y-4 border-t border-slate-700 pt-4">
            <SectionLabel>資産推移シミュレーションの前提</SectionLabel>
            <PlanChoiceField
              label="今後の昇給の見込み"
              value={profile.household.incomeGrowthScenario}
              options={INCOME_GROWTH_OPTIONS}
              onChange={(v) =>
                onChange({ ...profile, household: { ...profile.household, incomeGrowthScenario: v } }, "household")
              }
            />
            <PlanNumberField
              label="NISA・株などへの毎月の積立額"
              unit="万円"
              value={profile.household.monthlyInvestment}
              options={[0, 3, 5, 8, 10, 15, 20, 30, 40]}
              onChange={(v) =>
                onChange({ ...profile, household: { ...profile.household, monthlyInvestment: v } }, "household")
              }
            />
          </div>
        </div>
      )}
    </div>
  );
}
