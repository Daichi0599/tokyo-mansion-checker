"use client";

import { useState } from "react";
import type { LifeProfile, EducationPolicy, CarPlan, IncomeGrowthScenario } from "@/types/lifePlan";
import { INCOME_GROWTH_LABEL } from "@/lib/lifePlan/wealthProjection";
import { PlanNumberField, PlanChoiceField, range } from "./PlanField";

interface Props {
  profile: LifeProfile;
  onChange: (profile: LifeProfile, fieldGroup: "household" | "housing" | "family" | "car") => void;
}

const EDUCATION_OPTIONS: { value: EducationPolicy; label: string }[] = [
  { value: "all_public", label: "公立中心" },
  { value: "junior_private", label: "中学から私立" },
  { value: "elem_private", label: "小学校から私立" },
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

/** 結果画面から住宅価格・金利・育休期間・教育方針・車プランを直接変更できるパネル。変更時は再計算のみ行いページ遷移しない */
export default function PlanEditPanel({ profile, onChange }: Props) {
  const [open, setOpen] = useState(false);

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
        <div className="px-5 pb-5 space-y-5 border-t border-slate-700 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
            <PlanNumberField
              label="住宅価格"
              unit="万円"
              value={profile.housing.targetPrice}
              options={[2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 12000, 15000]}
              onChange={(v) =>
                onChange({ ...profile, housing: { ...profile.housing, targetPrice: v } }, "housing")
              }
            />
            <PlanNumberField
              label="金利（年率）"
              unit="%"
              value={profile.housing.interestRate}
              options={[0.5, 0.7, 0.9, 1.0, 1.1, 1.3, 1.5, 1.8, 2.0, 2.5, 3.0, 3.3, 3.5]}
              onChange={(v) =>
                onChange({ ...profile, housing: { ...profile.housing, interestRate: v } }, "housing")
              }
            />
            <PlanNumberField
              label="育休の期間"
              unit="ヶ月"
              value={profile.family.leaveMonths}
              options={range(0, 24, 3)}
              onChange={(v) => onChange({ ...profile, family: { ...profile.family, leaveMonths: v } }, "family")}
            />
          </div>

          <PlanChoiceField
            label="教育方針"
            value={profile.family.educationPolicy}
            options={EDUCATION_OPTIONS}
            onChange={(v) =>
              onChange({ ...profile, family: { ...profile.family, educationPolicy: v } }, "family")
            }
          />

          <PlanChoiceField
            label="車の持ち方"
            value={profile.car.plan}
            options={CAR_OPTIONS}
            onChange={(v) => onChange({ ...profile, car: { ...profile.car, plan: v } }, "car")}
          />

          <div className="border-t border-slate-700 pt-4 space-y-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">資産推移シミュレーションの前提</p>
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
