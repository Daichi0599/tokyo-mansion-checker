"use client";

import { useState } from "react";
import type { LifeProfile, EducationPolicy, UniversityType, BirthPlan, CarPlan, IncomeGrowthScenario } from "@/types/lifePlan";
import { INCOME_GROWTH_LABEL } from "@/lib/lifePlan/wealthProjection";
import { PlanNumberField, PlanChoiceField, range } from "./PlanField";

type FieldGroup = "household" | "housing" | "family" | "car";

interface Props {
  profile: LifeProfile;
  onChange: (profile: LifeProfile, fieldGroup: FieldGroup) => void;
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

/**
 * 結果画面から入力済みの全項目を編集できるパネル。
 * 編集内容は即座には反映せず、内部のdraftに溜めておいて「診断結果を更新する」ボタンを
 * 押した時だけonChangeを呼ぶ（自動反映だと何が効いたのか分かりづらいという運営者の指摘に対応）。
 */
export default function PlanEditPanel({ profile, onChange }: Props) {
  const [open, setOpen] = useState(false);
  // ユーザーが一度でも編集したらdraftに確定値が入り、以降は`profile`側の変化（他のUIからの
  // 変更や保存済みデータの読み込み）で上書きされない。未編集の間だけprofileをそのまま表示する。
  const [draft, setDraft] = useState<LifeProfile | null>(null);
  const [lastGroup, setLastGroup] = useState<FieldGroup>("household");
  const current = draft ?? profile;
  const isDirty = draft !== null;

  const setHousehold = <K extends keyof LifeProfile["household"]>(key: K, value: LifeProfile["household"][K]) => {
    setDraft({ ...current, household: { ...current.household, [key]: value } });
    setLastGroup("household");
  };
  const setHousing = <K extends keyof LifeProfile["housing"]>(key: K, value: LifeProfile["housing"][K]) => {
    setDraft({ ...current, housing: { ...current.housing, [key]: value } });
    setLastGroup("housing");
  };
  const setFamily = <K extends keyof LifeProfile["family"]>(key: K, value: LifeProfile["family"][K]) => {
    setDraft({ ...current, family: { ...current.family, [key]: value } });
    setLastGroup("family");
  };
  const setCar = <K extends keyof LifeProfile["car"]>(key: K, value: LifeProfile["car"][K]) => {
    setDraft({ ...current, car: { ...current.car, [key]: value } });
    setLastGroup("car");
  };

  const handleApply = () => {
    onChange(current, lastGroup);
    setDraft(null);
  };

  const noChildren = current.family.children === 0;
  const carDisabled = current.car.plan === "none";

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
                value={current.household.userIncome}
                options={[0, 300, 400, 500, 600, 700, 800, 900, 1000, 1200, 1500, 2000]}
                onChange={(v) => setHousehold("userIncome", v)}
              />
              <PlanNumberField
                label="パートナーの年収"
                unit="万円"
                value={current.household.partnerIncome}
                options={[0, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1200]}
                onChange={(v) => setHousehold("partnerIncome", v)}
              />
              <PlanNumberField
                label="ご本人の年間賞与"
                unit="万円"
                value={current.household.userBonusAnnual}
                options={[0, 30, 50, 80, 100, 150, 200, 300, 400]}
                onChange={(v) => setHousehold("userBonusAnnual", v)}
              />
              <PlanNumberField
                label="パートナーの年間賞与"
                unit="万円"
                value={current.household.partnerBonusAnnual}
                options={[0, 30, 50, 80, 100, 150, 200, 300]}
                onChange={(v) => setHousehold("partnerBonusAnnual", v)}
              />
              <PlanNumberField
                label="貯蓄"
                unit="万円"
                value={current.household.savings}
                options={[0, 100, 200, 300, 500, 700, 1000, 1500, 2000, 3000, 5000]}
                onChange={(v) => setHousehold("savings", v)}
              />
              <PlanNumberField
                label="月の生活費"
                unit="万円"
                value={current.household.monthlyLivingCost}
                options={[10, 15, 20, 25, 30, 35, 40, 50, 60]}
                onChange={(v) => setHousehold("monthlyLivingCost", v)}
              />
              <PlanNumberField
                label="いまの家賃"
                unit="万円/月"
                value={current.household.currentRent}
                options={[0, 5, 8, 10, 12, 14, 16, 18, 20, 25, 30]}
                onChange={(v) => setHousehold("currentRent", v)}
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
                value={current.housing.purchaseInYears}
                options={[0, 1, 2, 3, 5, 7, 10]}
                optionLabels={{ 0: "今すぐ" }}
                onChange={(v) => setHousing("purchaseInYears", v)}
              />
              <PlanNumberField
                label="住宅価格"
                unit="万円"
                value={current.housing.targetPrice}
                options={[2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 12000, 15000]}
                onChange={(v) => setHousing("targetPrice", v)}
              />
              <PlanNumberField
                label="頭金"
                unit="万円"
                value={current.housing.downPayment}
                options={[0, 100, 200, 300, 500, 700, 1000, 1500, 2000, 3000]}
                onChange={(v) => setHousing("downPayment", v)}
              />
              <PlanNumberField
                label="金利（年率）"
                unit="%"
                value={current.housing.interestRate}
                options={[0.5, 0.7, 0.9, 1.0, 1.1, 1.3, 1.5, 1.8, 2.0, 2.5, 3.0, 3.3, 3.5]}
                onChange={(v) => setHousing("interestRate", v)}
              />
              <PlanNumberField
                label="返済年数"
                unit="年"
                value={current.housing.repaymentYears}
                options={range(5, 50, 5)}
                onChange={(v) => setHousing("repaymentYears", v)}
              />
              <PlanNumberField
                label="管理費・修繕積立金"
                unit="万円/月"
                value={current.housing.managementFee}
                options={[0, 1, 2, 3, 4, 5, 6, 8, 10]}
                onChange={(v) => setHousing("managementFee", v)}
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
                value={current.family.children}
                options={[0, 1, 2, 3]}
                onChange={(v) => setFamily("children", v as LifeProfile["family"]["children"])}
              />
              {!noChildren && (
                <>
                  <PlanNumberField
                    label="出産まで（または最初の子どもまで）"
                    unit="年後"
                    value={current.family.firstChildInYears}
                    options={[0, 1, 2, 3, 4, 5]}
                    onChange={(v) => setFamily("firstChildInYears", v)}
                  />
                  <PlanNumberField
                    label="育休を取る方の年収（本人）"
                    unit="万円"
                    value={current.family.leaveTakerIncome}
                    options={[0, 200, 300, 400, 500, 600, 700, 800]}
                    onChange={(v) => setFamily("leaveTakerIncome", v)}
                  />
                  <PlanNumberField
                    label="育休の期間（本人）"
                    unit="ヶ月"
                    value={current.family.leaveMonths}
                    options={range(0, 24, 3)}
                    onChange={(v) => setFamily("leaveMonths", v)}
                  />
                  <PlanNumberField
                    label="育休の期間（パートナー）"
                    unit="ヶ月"
                    desc="年収は上の世帯セクションのパートナー年収を使います"
                    value={current.family.partnerLeaveMonths}
                    options={[0, 1, 2, 3, 6, 10, 12]}
                    onChange={(v) => setFamily("partnerLeaveMonths", v)}
                  />
                </>
              )}
            </div>
            {!noChildren && (
              <>
                <PlanChoiceField
                  label="出産の方針"
                  value={current.family.birthPlan}
                  options={BIRTH_OPTIONS}
                  onChange={(v) => setFamily("birthPlan", v)}
                />
                <PlanChoiceField
                  label="教育方針"
                  value={current.family.educationPolicy}
                  options={EDUCATION_OPTIONS}
                  onChange={(v) => setFamily("educationPolicy", v)}
                />
                <PlanChoiceField
                  label="進学先（大学）"
                  value={current.family.university}
                  options={UNIVERSITY_OPTIONS}
                  onChange={(v) => setFamily("university", v)}
                />
              </>
            )}
          </div>

          {/* ─── 車 ─── */}
          <div className="space-y-4 border-t border-slate-700 pt-4">
            <SectionLabel>車</SectionLabel>
            <PlanChoiceField
              label="車の持ち方"
              value={current.car.plan}
              options={CAR_OPTIONS}
              onChange={(v) => setCar("plan", v)}
            />
            {!carDisabled && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
                <PlanNumberField
                  label="駐車場代"
                  unit="万円/月"
                  value={current.car.parkingFee}
                  options={[0, 1, 2, 3, 4, 5]}
                  onChange={(v) => setCar("parkingFee", v)}
                />
                <PlanNumberField
                  label="月の利用日数"
                  unit="日"
                  value={current.car.monthlyUseDays}
                  options={[2, 4, 8, 12, 16, 20]}
                  onChange={(v) => setCar("monthlyUseDays", v)}
                />
              </div>
            )}
          </div>

          {/* ─── 資産推移シミュレーションの前提 ─── */}
          <div className="space-y-4 border-t border-slate-700 pt-4">
            <SectionLabel>資産推移シミュレーションの前提</SectionLabel>
            <PlanChoiceField
              label="今後の昇給の見込み"
              value={current.household.incomeGrowthScenario}
              options={INCOME_GROWTH_OPTIONS}
              onChange={(v) => setHousehold("incomeGrowthScenario", v)}
            />
            <PlanNumberField
              label="NISA・株などへの毎月の積立額"
              unit="万円"
              value={current.household.monthlyInvestment}
              options={[0, 3, 5, 8, 10, 15, 20, 30, 40]}
              onChange={(v) => setHousehold("monthlyInvestment", v)}
            />
          </div>

          {/* ─── 更新ボタン ─── */}
          <div className="sticky bottom-3 pt-2">
            <button
              type="button"
              onClick={handleApply}
              disabled={!isDirty}
              className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-700 disabled:text-slate-500 text-white font-bold py-3.5 rounded-xl transition-colors shadow-lg shadow-black/20"
            >
              {isDirty ? "この内容で診断結果を更新する →" : "変更するとここに更新ボタンが表示されます"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
