const STEP_LABELS = ["わが家の現在", "住まい", "子ども・育休・教育", "車・確認"];

export default function PlanProgress({ step }: { step: number }) {
  const percent = Math.round((step / STEP_LABELS.length) * 100);
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
        <span>
          STEP {step} / {STEP_LABELS.length}：{STEP_LABELS[step - 1]}
        </span>
        <span>{percent}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-slate-700 overflow-hidden">
        <div
          className="h-full rounded-full bg-blue-500 transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
