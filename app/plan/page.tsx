"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import type { LifeProfile, EntryIntent } from "@/types/lifePlan";
import { createDefaultProfile, loadLifeProfile, saveLifeProfile } from "@/lib/lifePlan";
import { validateHousehold, validateHousing, hasErrors } from "@/lib/lifePlan/validation";
import { trackPlanEvent } from "@/lib/analytics";
import PlanProgress from "@/components/lifePlan/PlanProgress";
import HouseholdStep from "@/components/lifePlan/HouseholdStep";
import HousingStep from "@/components/lifePlan/HousingStep";
import FamilyStep from "@/components/lifePlan/FamilyStep";
import CarStep from "@/components/lifePlan/CarStep";

type StepId = "household" | "housing" | "family" | "car";

const STEP_LABELS: Record<StepId, string> = {
  household: "わが家の現在",
  housing: "住まい",
  family: "子ども・育休・教育",
  car: "車・確認",
};

function stepsFor(intent: EntryIntent): StepId[] {
  if (intent === "housing") return ["household", "housing"];
  if (intent === "family") return ["household", "family"];
  if (intent === "car") return ["household", "car"];
  return ["household", "housing", "family", "car"];
}

function isEntryIntent(value: string | null): value is EntryIntent {
  return value === "housing" || value === "family" || value === "car" || value === "all";
}

function PlanPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [profile, setProfile] = useState<LifeProfile | null>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const startedRef = useRef(false);

  // 初回マウント時にlocalStorageから復元、無ければintentから初期値を作る（SSR中はwindowに触れない）
  useEffect(() => {
    const intentParam = searchParams.get("intent");
    const intent = isEntryIntent(intentParam) ? intentParam : "all";
    const restored = loadLifeProfile();
    // A situation link starts a focused calculation. Preserve only the shared
    // household values; unrelated plans must not leak in from a previous run.
    if (isEntryIntent(intentParam)) {
      const focused = createDefaultProfile(intent);
      setProfile(restored ? { ...focused, household: restored.household } : focused);
    } else {
      setProfile(restored ?? createDefaultProfile(intent));
    }

    if (!startedRef.current) {
      startedRef.current = true;
      trackPlanEvent("plan_start", { entry_intent: intent });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 入力変更のたびに保存する（サーバー送信はしない、localStorageのみ）
  useEffect(() => {
    if (profile) saveLifeProfile(profile);
  }, [profile]);

  if (!profile) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <p className="text-slate-400 text-sm">読み込み中…</p>
      </div>
    );
  }

  const steps = stepsFor(profile.entryIntent);
  const currentStep = steps[stepIndex];
  const step = stepIndex + 1;
  const totalSteps = steps.length;

  const goToStep = (nextIndex: number) => {
    if (nextIndex > stepIndex) {
      // 前進する場合だけバリデーションする（戻る操作は入力を保持したまま自由に戻れる）
      let stepErrors: Record<string, string> = {};
      if (currentStep === "household") stepErrors = validateHousehold(profile.household);
      if (currentStep === "housing") stepErrors = validateHousing(profile.housing);
      if (hasErrors(stepErrors)) {
        setErrors(stepErrors);
        return;
      }
      trackPlanEvent("plan_step_complete", { step, entry_intent: profile.entryIntent });
    }
    setErrors({});
    setStepIndex(nextIndex);
  };

  const handleFinish = () => {
    const householdErrors = validateHousehold(profile.household);
    const housingErrors = validateHousing(profile.housing);
    const allErrors = { ...householdErrors, ...housingErrors };
    if (hasErrors(allErrors)) {
      setErrors(allErrors);
      return;
    }
    trackPlanEvent("plan_step_complete", { step, entry_intent: profile.entryIntent });
    saveLifeProfile(profile);
    router.push("/plan/result");
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        <nav className="flex items-center gap-1.5 text-sm text-slate-400">
          <Link href="/" className="hover:text-blue-300">ホーム</Link>
          <span>/</span>
          <span className="text-slate-200">わが家のプラン</span>
        </nav>

        <PlanProgress step={step} totalSteps={totalSteps} label={STEP_LABELS[currentStep]} />

        <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6">
          {currentStep === "household" && (
            <HouseholdStep
              household={profile.household}
              onChange={(household) => setProfile({ ...profile, household })}
              errors={errors}
            />
          )}
          {currentStep === "housing" && (
            <HousingStep
              housing={profile.housing}
              onChange={(housing) => setProfile({ ...profile, housing })}
              errors={errors}
            />
          )}
          {currentStep === "family" && (
            <FamilyStep
              family={profile.family}
              onChange={(family) => setProfile({ ...profile, family })}
              errors={errors}
            />
          )}
          {currentStep === "car" && <CarStep car={profile.car} onChange={(car) => setProfile({ ...profile, car })} />}
        </div>

        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => goToStep(Math.max(0, stepIndex - 1))}
            disabled={stepIndex === 0}
            className="px-5 py-3 rounded-xl text-sm font-bold text-slate-300 border border-slate-600 disabled:opacity-30 disabled:cursor-not-allowed hover:border-slate-500 transition-colors"
          >
            ← 戻る
          </button>

          {stepIndex < totalSteps - 1 ? (
            <button
              type="button"
              onClick={() => goToStep(stepIndex + 1)}
              className="flex-1 sm:flex-none px-6 py-3 rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
            >
              次へ →
            </button>
          ) : (
            <button
              type="button"
              onClick={handleFinish}
              className="flex-1 sm:flex-none px-6 py-3 rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
            >
              5つの時点で確認する →
            </button>
          )}
        </div>

        <p className="text-xs text-slate-500 text-center">
          入力内容はこの端末のブラウザにのみ保存されます。外部には送信されません。
        </p>
      </div>
    </div>
  );
}

export default function PlanPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
          <p className="text-slate-400 text-sm">読み込み中…</p>
        </div>
      }
    >
      <PlanPageInner />
    </Suspense>
  );
}
