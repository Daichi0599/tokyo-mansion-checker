import { sendGAEvent } from "@next/third-parties/google";
import type { EntryIntent, CarPlan } from "@/types/lifePlan";

/**
 * GA4送信を1ファイルに集約する。
 *
 * ルール（README「GA4計測ルール」参照）:
 * - 送ってよいのは intent種別・ステップ番号・プラン種別・遷移元/先ツール名などのカテゴリ値のみ
 * - 年収・貯蓄・住宅価格・年齢・出産予定時期・市区町村など、入力値そのものは送らない
 *
 * 型を絞ることで「具体値を渡したくても渡せない」設計にしている。
 * 新しいイベントを追加するときも、パラメータの型は必ずカテゴリ値（union型）にすること。
 */

type PlanEventMap = {
  plan_start: { entry_intent: EntryIntent };
  plan_step_view: { step: number; step_key: "household" | "housing" | "family" | "car"; total_steps: number; entry_intent: EntryIntent };
  plan_step_complete: { step: number; entry_intent: EntryIntent };
  plan_complete: { entry_intent: EntryIntent; included_topics: string };
  scenario_change: { field_group: "housing" | "family" | "car" };
  scenario_compare: { adjustment_type: "car" | "price" | "none" };
  detail_tool_open: { tool: "mansion" | "birth" | "child" | "car" | "check"; source: "plan_result" | "top" };
  case_open: { case_slug: string; category: "housing" | "family" | "car" | "combined" };
  case_to_plan: { case_slug: string };
  result_share: { platform: "x" | "line" | "copy" };
  outbound_click: { program: string; source: string };
};

export type PlanEventName = keyof PlanEventMap;

function safeSendGAEvent(name: string, params: Record<string, string | number>): void {
  try {
    sendGAEvent("event", name, params);
  } catch {
    // GAスクリプト未読込・ブロック時などはサイレントに無視する（診断機能自体は継続する）
  }
}

export function trackPlanEvent<T extends PlanEventName>(name: T, params: PlanEventMap[T]): void {
  safeSendGAEvent(name, params as unknown as Record<string, string | number>);
}

/**
 * 物件価格（万円）を、個人を特定しにくい価格帯カテゴリへ変換する。
 * PropertyDiagnosis.tsx が具体の価格そのものをGA4へ送っていたのを、
 * v2のGA4ルール（入力値そのものは送らない）に合わせて修正するために追加した。
 */
export function priceBand(priceMan: number): string {
  if (priceMan < 3000) return "under_3000";
  if (priceMan < 5000) return "3000_5000";
  if (priceMan < 7000) return "5000_7000";
  if (priceMan < 9000) return "7000_9000";
  if (priceMan < 12000) return "9000_12000";
  return "over_12000";
}

/** 車プランをGA4に送る際のラベル。個人を特定しない固定カテゴリ */
export function carPlanLabel(plan: CarPlan): string {
  switch (plan) {
    case "none": return "none";
    case "carshare": return "carshare";
    case "used": return "used";
    case "new": return "new";
  }
}
