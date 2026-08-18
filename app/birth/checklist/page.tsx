"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";

import {
  TASKS,
  PHASES,
  calcWeek,
  calcHokatsuTiming,
  visibleTasks,
  type Conditions,
  type Task,
} from "@/lib/birthTasks";

const STORAGE_KEY = "30lab-birth-checklist-v1";

type Saved = {
  dueDate: string;
  done: string[];
  conditions: Conditions;
};

const DEFAULT_CONDITIONS: Conditions = { employee: true, satogaeri: false, tokyo: true };

/** 期限までの距離で、いま出すべきかを判定する */
type Bucket = "overdue" | "now" | "soon" | "later" | "done";

function bucketOf(task: Task, week: number | null, done: boolean): Bucket {
  if (done) return "done";
  if (week === null) return "later";
  // 推奨時期を過ぎていても、遡れないもの以外は「まだやれる」ので警告にしない
  if (week > task.toWeek) return task.hardDeadline ? "overdue" : "now";
  if (week >= task.fromWeek) return "now";
  if (task.fromWeek - week <= 4) return "soon";
  return "later";
}

function TaskCard({
  task,
  done,
  onToggle,
  tone,
}: {
  task: Task;
  done: boolean;
  onToggle: () => void;
  tone: Bucket;
}) {
  const border =
    tone === "overdue" ? "border-red-500/50" : tone === "now" ? "border-pink-500/40" : "border-slate-700";

  return (
    <div className={`rounded-xl border ${border} bg-slate-800 p-4`}>
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={done}
          onChange={onToggle}
          className="mt-1 w-5 h-5 shrink-0 rounded border-slate-500 bg-slate-700 accent-pink-500 cursor-pointer"
        />
        <span className="min-w-0 flex-1">
          <span className={`block text-base font-bold leading-snug ${done ? "text-slate-400 line-through" : "text-white"}`}>
            {task.title}
          </span>

          <span className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-sm">
            <span className="text-slate-300">📍 {task.where}</span>
            <span className="text-slate-300">⏱ 約{task.minutes}分</span>
            {task.amount && <span className="text-emerald-400 font-semibold">💰 {task.amount}</span>}
          </span>

          {task.deadline && (
            <span className={`block mt-1.5 text-sm font-semibold ${tone === "overdue" ? "text-red-300" : "text-orange-300"}`}>
              ⚠️ {task.deadline}
            </span>
          )}
        </span>
      </label>

      <details className="mt-2 pl-8">
        <summary className="text-sm text-slate-400 cursor-pointer hover:text-slate-200">なぜやるのか</summary>
        <p className="text-sm text-slate-300 leading-relaxed mt-1.5">{task.detail}</p>
        {task.id === "sanin-yoyaku" && (
          <Link href="/birth" className="inline-block mt-2 text-sm font-bold text-pink-400 hover:text-pink-300">
            → 出産費用シミュレーターで予算を出す
          </Link>
        )}
        {task.id === "loan-saiken" && (
          <Link href="/mansion" className="inline-block mt-2 text-sm font-bold text-blue-400 hover:text-blue-300">
            → マンション購入診断で返済比率を引き直す
          </Link>
        )}
      </details>
    </div>
  );
}

export default function BirthChecklistPage() {
  const [dueDate, setDueDate] = useState("");
  const [done, setDone] = useState<string[]>([]);
  const [conditions, setConditions] = useState<Conditions>(DEFAULT_CONDITIONS);
  // localStorage はサーバー側に無いので、読み込みが済むまで保存値を反映しない
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const s: Saved = JSON.parse(raw);
        if (s.dueDate) setDueDate(s.dueDate);
        if (Array.isArray(s.done)) setDone(s.done);
        if (s.conditions) setConditions({ ...DEFAULT_CONDITIONS, ...s.conditions });
      }
    } catch {
      // 壊れていたら初期状態で始める
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const payload: Saved = { dueDate, done, conditions };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // 保存できなくても操作は続けられる
    }
  }, [loaded, dueDate, done, conditions]);

  const week = useMemo(() => (dueDate ? calcWeek(dueDate) : null), [dueDate]);
  // 保活だけは暦で決まるので、週数とは別に予定日から逆算して出す
  const hokatsu = useMemo(() => (dueDate ? calcHokatsuTiming(dueDate) : null), [dueDate]);
  const tasks = useMemo(() => visibleTasks(conditions), [conditions]);

  const grouped = useMemo(() => {
    const g: Record<Bucket, Task[]> = { overdue: [], now: [], soon: [], later: [], done: [] };
    for (const t of tasks) g[bucketOf(t, week, done.includes(t.id))].push(t);
    return g;
  }, [tasks, week, done]);

  const toggle = (id: string) => {
    setDone((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      if (!prev.includes(id)) sendGAEvent("event", "checklist_check", { task_id: id, tool: "birth" });
      return next;
    });
  };

  const total = tasks.length;
  const doneCount = tasks.filter((t) => done.includes(t.id)).length;
  const pct = total > 0 ? Math.round((doneCount / total) * 100) : 0;

  const weekLabel =
    week === null
      ? null
      : week > 40
      ? `産後 ${week - 40}週`
      : week < 0
      ? "妊娠前"
      : `妊娠 ${week}週`;

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        <nav className="text-xs text-slate-400 flex items-center gap-1">
          <Link href="/" className="hover:text-pink-300">ホーム</Link>
          <span>/</span>
          <Link href="/birth" className="hover:text-pink-300">出産費用</Link>
          <span>/</span>
          <span className="text-slate-200">準備チェックリスト</span>
        </nav>

        <header className="space-y-2">
          <span className="inline-block text-xs font-bold bg-pink-500/15 text-pink-200 border border-pink-500/30 px-2.5 py-1 rounded-full">
            保存されます・ログイン不要
          </span>
          <h1 className="text-2xl font-black leading-tight">出産準備チェックリスト</h1>
          <p className="text-base text-slate-200 leading-relaxed">
            出産予定日を入れると、<strong className="text-white">いまやることだけ</strong>が出ます。
            チェックはこの端末に残るので、思い出したときに開き直せます。
          </p>
        </header>

        {/* 予定日と条件 */}
        <section className="bg-slate-800 rounded-2xl border border-slate-700 p-5 space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="due" className="block text-base font-bold text-white">出産予定日</label>
            <input
              id="due"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full border border-slate-600 rounded-xl px-4 py-3.5 text-base text-white bg-slate-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            {weekLabel && (
              <p className="text-sm text-pink-300 font-bold pt-1">いまは {weekLabel} です</p>
            )}
          </div>

          <div className="space-y-2">
            <p className="text-sm font-bold text-slate-200">あてはまるもの</p>
            <div className="flex flex-wrap gap-2">
              {([
                { key: "employee", label: "会社員・公務員" },
                { key: "tokyo", label: "東京都在住" },
                { key: "satogaeri", label: "里帰り出産をする" },
              ] as { key: keyof Conditions; label: string }[]).map((c) => (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setConditions((p) => ({ ...p, [c.key]: !p[c.key] }))}
                  className={`text-sm font-semibold px-3.5 py-2 rounded-xl border transition-colors ${
                    conditions[c.key]
                      ? "bg-pink-500/20 border-pink-500/50 text-pink-200"
                      : "bg-slate-700 border-slate-600 text-slate-300"
                  }`}
                >
                  {conditions[c.key] ? "✓ " : ""}{c.label}
                </button>
              ))}
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              あてはまらないものを外すと、関係ない項目が消えます。
            </p>
          </div>

          {/* 進捗 */}
          <div className="space-y-1.5 pt-1">
            <div className="flex justify-between text-sm">
              <span className="text-slate-300">進捗</span>
              <span className="font-bold text-white">{doneCount} / {total}</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-2 bg-pink-500 rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
            </div>
          </div>
        </section>

        {/* 保活は毎年10〜12月申込・翌4月入園という暦で動くため、
            妊娠週数ベースのリストでは表現できない。ここだけ別建てで出す。 */}
        {hokatsu && (
          <section className={`rounded-2xl border p-5 space-y-2 ${hokatsu.duringPregnancy ? "border-orange-500/40 bg-orange-500/10" : "border-slate-700 bg-slate-800"}`}>
            <p className="text-base font-black text-white">🏫 あなたの保活スケジュール</p>
            <p className="text-sm text-slate-200 leading-relaxed">
              0歳4月入園を狙う場合、入園は <strong className="text-white">{hokatsu.aprilYear}年4月</strong>（そのとき生後 約{hokatsu.ageMonths}ヶ月）。
              申し込みは <strong className="text-white">{hokatsu.applyLabel}</strong> です。
            </p>

            {hokatsu.duringPregnancy && (
              <p className="text-sm font-bold text-orange-300 leading-relaxed">
                ⚠️ 申し込みの時期が<strong className="text-white">出産より前</strong>に来ます。産まれてから考えると間に合いません。
              </p>
            )}

            {hokatsu.tooYoung && (
              <p className="text-sm font-bold text-orange-300 leading-relaxed">
                ⚠️ 4月時点で生後57日に満たない可能性があります。多くの自治体で0歳4月入園の対象外になるため、1歳4月（{hokatsu.aprilYear + 1}年4月）を軸に考えたほうが現実的です。
              </p>
            )}

            <p className="text-sm text-slate-400 leading-relaxed">
              ※ 申込時期・受け入れ月齢は自治体によって前後します。お住まいの入園案内で必ずご確認ください。
            </p>
          </section>
        )}

        {!dueDate && (
          <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5">
            <p className="text-base font-bold text-white mb-1">まず出産予定日を入れてください</p>
            <p className="text-sm text-slate-300 leading-relaxed">
              入れると、いまの週数でやるべきことだけに絞られます。下は全体像として、時期順に並べたものです。
            </p>
          </div>
        )}

        {/* 期限を過ぎたもの */}
        {grouped.overdue.length > 0 && (
          <section className="space-y-3">
            <div>
              <h2 className="text-lg font-black text-red-300">⏰ 期限を過ぎています（{grouped.overdue.length}件）</h2>
              <p className="text-sm text-slate-300 leading-relaxed mt-0.5">
                遡れないものもありますが、まだ間に合うものもあります。まずここから。
              </p>
            </div>
            {grouped.overdue.map((t) => (
              <TaskCard key={t.id} task={t} done={false} tone="overdue" onToggle={() => toggle(t.id)} />
            ))}
          </section>
        )}

        {/* いまやること */}
        {dueDate && (
          <section className="space-y-3">
            <div>
              <h2 className="text-lg font-black text-white">✅ いまやること（{grouped.now.length}件）</h2>
              {grouped.now.length === 0 && (
                <p className="text-sm text-slate-300 leading-relaxed mt-0.5">
                  いまの週数でやるべきことは終わっています。次の項目は下に出ています。
                </p>
              )}
            </div>
            {grouped.now.map((t) => (
              <TaskCard key={t.id} task={t} done={false} tone="now" onToggle={() => toggle(t.id)} />
            ))}
          </section>
        )}

        {/* そろそろ */}
        {grouped.soon.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-lg font-black text-slate-200">🔜 もうすぐ（4週以内・{grouped.soon.length}件）</h2>
            {grouped.soon.map((t) => (
              <TaskCard key={t.id} task={t} done={false} tone="soon" onToggle={() => toggle(t.id)} />
            ))}
          </section>
        )}

        {/* まだ先 */}
        {grouped.later.length > 0 && (
          <details className="rounded-2xl border border-slate-700 bg-slate-800/50 p-5">
            <summary className="text-base font-bold text-slate-200 cursor-pointer">
              まだ先のこと（{grouped.later.length}件）
            </summary>
            <div className="space-y-4 mt-4">
              {PHASES.map((ph) => {
                const items = grouped.later.filter((t) => t.phase === ph.key);
                if (items.length === 0) return null;
                return (
                  <div key={ph.key} className="space-y-2">
                    <p className="text-sm font-bold text-pink-300">
                      {ph.label} <span className="text-slate-400 font-normal">（{ph.range}）</span>
                    </p>
                    {items.map((t) => (
                      <TaskCard key={t.id} task={t} done={false} tone="later" onToggle={() => toggle(t.id)} />
                    ))}
                  </div>
                );
              })}
            </div>
          </details>
        )}

        {/* 完了 */}
        {grouped.done.length > 0 && (
          <details className="rounded-2xl border border-slate-700 bg-slate-800/50 p-5">
            <summary className="text-base font-bold text-slate-200 cursor-pointer">
              完了したこと（{grouped.done.length}件）
            </summary>
            <div className="space-y-2 mt-4">
              {grouped.done.map((t) => (
                <TaskCard key={t.id} task={t} done tone="done" onToggle={() => toggle(t.id)} />
              ))}
            </div>
          </details>
        )}

        <section className="bg-slate-800 rounded-2xl border border-slate-700 p-5 space-y-3">
          <p className="text-base font-bold text-white">背景まで読みたいとき</p>
          <p className="text-sm text-slate-300 leading-relaxed">
            なぜこの順番なのか、どの制度がいくらなのかは記事のほうにまとめてあります。
          </p>
          <div className="flex flex-wrap gap-2">
            <Link href="/articles/shussan-junbi-otto" className="inline-block bg-slate-700 hover:bg-slate-600 text-white font-bold text-sm px-4 py-2.5 rounded-xl transition-colors">
              📝 夫がやる出産準備ジャーニー
            </Link>
            <Link href="/birth" className="inline-block bg-pink-600 hover:bg-pink-500 text-white font-bold text-sm px-4 py-2.5 rounded-xl transition-colors">
              🤰 出産費用シミュレーター
            </Link>
          </div>
        </section>

        <p className="text-sm text-slate-400 leading-relaxed pb-4">
          制度の内容・金額は2026年8月時点の一般的なものです。健康保険組合の付加給付や自治体の独自制度は、加入先・お住まいによって異なります。チェック状態はこの端末のブラウザにのみ保存され、外部には送信されません。
        </p>
      </div>
    </main>
  );
}
