import { useSyncExternalStore } from "react";
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
  } finally {
    emitLifeProfileChange();
  }
}

export function clearLifeProfile(): void {
  if (!hasWindow()) return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // no-op
  } finally {
    emitLifeProfileChange();
  }
}

/** 保存済みが無い・壊れている場合は新しい初期値を返す（保存はしない＝呼び出し側の入力操作で保存させる） */
export function loadOrCreateLifeProfile(): LifeProfile {
  return loadLifeProfile() ?? createDefaultProfile();
}

/**
 * useSyncExternalStore用のストア実装。
 *
 * localStorageの読み込みをuseEffect+setStateで行うと react-hooks/set-state-in-effect
 * に引っかかるうえ、eslint-disableでの抑制は今回避けたい。useSyncExternalStoreは
 * 「サーバーとクライアントで結果が異なりうる外部ストア」を読むためにReactが用意している
 * 標準の仕組みで、setStateを使わずに済み、ハイドレーション不整合も発生しない
 * （getServerSnapshotをSSR・初回ハイドレーション時に使い、その後getSnapshotに切り替わる）。
 */
type Listener = () => void;
const listeners = new Set<Listener>();

function emitLifeProfileChange(): void {
  listeners.forEach((listener) => listener());
}

function subscribeLifeProfile(callback: Listener): () => void {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

// localStorageの生値が前回と同じなら同じオブジェクト参照を返す（getSnapshotの無限ループ防止）
let cachedRaw: string | null = null;
let cachedSnapshot: LifeProfile | null = null;

function getLifeProfileSnapshot(): LifeProfile | null {
  if (!hasWindow()) return null;
  let raw: string | null;
  try {
    raw = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    raw = null;
  }
  if (raw === cachedRaw) return cachedSnapshot;
  cachedRaw = raw;
  if (!raw) {
    cachedSnapshot = null;
    return cachedSnapshot;
  }
  try {
    const parsed = JSON.parse(raw);
    cachedSnapshot = isLifeProfileShape(parsed) ? parsed : null;
  } catch {
    cachedSnapshot = null;
  }
  return cachedSnapshot;
}

// SSR・初回ハイドレーション時は常に「読み込み中」を表すundefinedを返す
function getLifeProfileServerSnapshot(): undefined {
  return undefined;
}

/**
 * 保存済みLifeProfileを購読するフック。
 * 戻り値: undefined=読み込み中（SSR/初回ハイドレーション）, null=データ無し, LifeProfile=データあり
 */
export function useLifeProfile(): LifeProfile | null | undefined {
  return useSyncExternalStore(subscribeLifeProfile, getLifeProfileSnapshot, getLifeProfileServerSnapshot);
}
