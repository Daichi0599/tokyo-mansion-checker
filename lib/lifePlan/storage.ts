import type { LifeProfile } from "@/types/lifePlan";
import { createDefaultProfile } from "./defaults";

const STORAGE_KEY = "30lab:life-profile:v1";

function isLifeProfileShape(value: unknown): value is LifeProfile {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    v.version === 1 &&
    typeof v.household === "object" &&
    typeof v.housing === "object" &&
    typeof v.family === "object" &&
    typeof v.car === "object"
  );
}

/** SSR中は window が無いので、呼び出し側はクライアントでのみ使うこと（useEffect 経由が基本） */
function hasWindow(): boolean {
  return typeof window !== "undefined";
}

export function loadLifeProfile(): LifeProfile | null {
  if (!hasWindow()) return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!isLifeProfileShape(parsed)) return null;
    return parsed;
  } catch {
    // JSON parse失敗、またはlocalStorage自体にアクセスできない（プライベートモード等）
    return null;
  }
}

export function saveLifeProfile(profile: LifeProfile): void {
  if (!hasWindow()) return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch {
    // ストレージ容量超過等は握りつぶす。保存できなくても診断自体は継続できる
  }
}

export function clearLifeProfile(): void {
  if (!hasWindow()) return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // no-op
  }
}

/** 保存済みが無い・壊れている場合は新しい初期値を返す（保存はしない＝呼び出し側の入力操作で保存させる） */
export function loadOrCreateLifeProfile(): LifeProfile {
  return loadLifeProfile() ?? createDefaultProfile();
}
