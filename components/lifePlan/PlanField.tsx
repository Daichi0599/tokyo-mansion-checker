"use client";

interface NumberFieldProps {
  label: string;
  unit: string;
  desc?: string;
  value: number;
  options: number[];
  optionLabels?: Record<number, string>;
  onChange: (value: number) => void;
  error?: string;
  isDefault?: boolean;
}

const selectCls =
  "w-full rounded-xl border border-slate-600 bg-slate-700 px-3 py-2.5 text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition cursor-pointer";

export function PlanNumberField({
  label,
  unit,
  desc,
  value,
  options,
  optionLabels,
  onChange,
  error,
  isDefault,
}: NumberFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <div>
        <label className="text-sm font-semibold text-slate-200">
          {label}
          <span className="ml-1.5 text-xs font-normal text-slate-400">（{unit}）</span>
          {isDefault && (
            <span className="ml-1.5 text-[10px] font-normal text-amber-400/80 align-middle">目安</span>
          )}
        </label>
        {desc && <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{desc}</p>}
      </div>
      <select
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={selectCls}
        aria-invalid={!!error}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {optionLabels?.[opt] ?? `${opt} ${unit}`}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-400 mt-0.5">{error}</p>}
    </div>
  );
}

interface ChoiceFieldProps<T extends string> {
  label: string;
  desc?: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (value: T) => void;
}

export function PlanChoiceField<T extends string>({ label, desc, value, options, onChange }: ChoiceFieldProps<T>) {
  return (
    <div className="flex flex-col gap-1.5">
      <div>
        <label className="text-sm font-semibold text-slate-200">{label}</label>
        {desc && <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{desc}</p>}
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            aria-pressed={value === opt.value}
            className={`text-sm font-semibold px-3.5 py-2 rounded-xl border transition-colors ${
              value === opt.value
                ? "bg-blue-500/20 border-blue-500/50 text-blue-200"
                : "bg-slate-700 border-slate-600 text-slate-300 hover:border-slate-500"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export const range = (start: number, end: number, step = 1): number[] => {
  const arr: number[] = [];
  for (let v = start; v <= end; v = Math.round((v + step) * 1000) / 1000) arr.push(v);
  return arr;
};
