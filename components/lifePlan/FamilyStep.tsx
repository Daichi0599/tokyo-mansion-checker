"use client";

import type { LifeProfile, BirthPlan, EducationPolicy, UniversityType } from "@/types/lifePlan";
import { PlanNumberField, PlanChoiceField } from "./PlanField";

interface Props {
  family: LifeProfile["family"];
  onChange: (family: LifeProfile["family"]) => void;
  errors: Record<string, string>;
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

export default function FamilyStep({ family, onChange, errors }: Props) {
  const set = <K extends keyof LifeProfile["family"]>(key: K, value: LifeProfile["family"][K]) => {
    onChange({ ...family, [key]: value });
  };

  const noChildren = family.children === 0;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-black text-white">子ども・育休・教育</h2>
        <p className="text-sm text-slate-400 mt-1">
          今回は考えない場合は、人数を0のままにしてください。
        </p>
      </div>

      <PlanNumberField
        label="子どもの人数"
        unit="人"
        value={family.children}
        options={[0, 1, 2, 3]}
        onChange={(v) => set("children", v as LifeProfile["family"]["children"])}
        error={errors.children}
      />

      {!noChildren && <div className="space-y-6">
        <PlanChoiceField
          label="出産の方針"
          value={family.birthPlan}
          options={BIRTH_OPTIONS}
          onChange={(v) => set("birthPlan", v)}
        />

        <details className="group rounded-xl border border-slate-700 bg-slate-900/40 p-4">
          <summary className="cursor-pointer list-none text-sm font-bold text-slate-300 flex items-center justify-between">
            <span>育休・教育の条件を調整する</span>
            <span className="text-slate-500 group-open:rotate-180 transition-transform">⌄</span>
          </summary>
          <p className="mt-2 text-xs text-slate-500">まだ決まっていなければ、目安のままで大丈夫です。</p>
          <div className="mt-4 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
          <PlanNumberField
            label="出産まで（または最初の子どもまで）"
            unit="年後"
            value={family.firstChildInYears}
            options={[0, 1, 2, 3, 4, 5]}
            onChange={(v) => set("firstChildInYears", v)}
            isDefault={noChildren}
          />
          <PlanNumberField
            label="育休を取る方の年収"
            unit="万円"
            desc="育休中の収支計算に使います"
            value={family.leaveTakerIncome}
            options={[0, 200, 300, 400, 500, 600, 700, 800]}
            onChange={(v) => set("leaveTakerIncome", v)}
            isDefault={noChildren}
          />
          <PlanNumberField
            label="育休の期間"
            unit="ヶ月"
            value={family.leaveMonths}
            options={[0, 3, 6, 10, 12, 18, 24]}
            onChange={(v) => set("leaveMonths", v)}
            isDefault={noChildren}
          />
        </div>
        <PlanChoiceField
          label="教育方針"
          value={family.educationPolicy}
          options={EDUCATION_OPTIONS}
          onChange={(v) => set("educationPolicy", v)}
        />
        <PlanChoiceField
          label="進学先（大学）"
          value={family.university}
          options={UNIVERSITY_OPTIONS}
          onChange={(v) => set("university", v)}
        />
          </div>
        </details>
      </div>}
    </div>
  );
}
