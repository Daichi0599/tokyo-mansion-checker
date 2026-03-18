export interface AssetScoreInput {
  area: string;                    // 区名
  walkMinutes: number;             // 駅徒歩（分）
  buildingAge: number;             // 築年数
  floor: number;                   // 階数
  direction: "南" | "南東" | "南西" | "東" | "西" | "北" | "その他";
}

export interface AssetScoreResult {
  total: number; // 0〜100点
  breakdown: {
    area: number;      // max 30
    walk: number;      // max 25
    age: number;       // max 25
    floor: number;     // max 10
    direction: number; // max 10
  };
  grade: "S" | "A" | "B" | "C" | "D";
  label: string;
  futureRatio: number; // 10年後推定価格倍率
  comment: string;
}

/** 区別エリアスコア（/30） */
const AREA_SCORES: Record<string, number> = {
  "港区": 30,    "渋谷区": 28,   "千代田区": 28,
  "目黒区": 26,  "中央区": 25,   "文京区": 25,
  "品川区": 24,  "新宿区": 24,
  "世田谷区": 22, "台東区": 20,  "大田区": 20,
  "豊島区": 20,  "杉並区": 19,   "中野区": 19,
  "江東区": 18,  "墨田区": 16,
  "荒川区": 14,  "北区": 14,
  "板橋区": 13,  "練馬区": 12,
  "江戸川区": 10, "葛飾区": 9,   "足立区": 9,
};

export function calcAssetScore(input: AssetScoreInput): AssetScoreResult {
  // ① エリアスコア（/30）
  const areaScore = AREA_SCORES[input.area] ?? 10;

  // ② 駅徒歩スコア（/25）
  const walkScore =
    input.walkMinutes <= 3  ? 25 :
    input.walkMinutes <= 5  ? 23 :
    input.walkMinutes <= 7  ? 20 :
    input.walkMinutes <= 10 ? 17 :
    input.walkMinutes <= 15 ? 12 :
    input.walkMinutes <= 20 ? 7  : 3;

  // ③ 築年数スコア（/25）
  const ageScore =
    input.buildingAge <= 2  ? 25 :
    input.buildingAge <= 5  ? 23 :
    input.buildingAge <= 10 ? 20 :
    input.buildingAge <= 15 ? 17 :
    input.buildingAge <= 20 ? 14 :
    input.buildingAge <= 25 ? 11 :
    input.buildingAge <= 30 ? 8  :
    input.buildingAge <= 40 ? 5  : 3;

  // ④ 階数スコア（/10）
  const floorScore =
    input.floor >= 16 ? 10 :
    input.floor >= 11 ? 9  :
    input.floor >= 7  ? 8  :
    input.floor >= 4  ? 7  :
    input.floor >= 2  ? 5  : 3;

  // ⑤ 向きスコア（/10）
  const directionMap: Record<string, number> = {
    "南": 10, "南東": 8, "南西": 8,
    "東": 6,  "西": 5,  "北": 2, "その他": 4,
  };
  const directionScore = directionMap[input.direction] ?? 4;

  const total = areaScore + walkScore + ageScore + floorScore + directionScore;

  let grade: AssetScoreResult["grade"];
  let label: string;
  let futureRatio: number;
  let comment: string;

  if (total >= 85) {
    grade = "S"; label = "超優良物件"; futureRatio = 1.10;
    comment = "資産価値が非常に高く、10年後も値上がりが期待できます。都内でも希少な物件です。";
  } else if (total >= 70) {
    grade = "A"; label = "優良物件"; futureRatio = 1.03;
    comment = "資産価値が安定しており、長期保有に向いた物件です。売却時も買い手を見つけやすいでしょう。";
  } else if (total >= 55) {
    grade = "B"; label = "標準的"; futureRatio = 0.93;
    comment = "市場平均並みの資産性です。住み心地重視で選ぶなら問題ありませんが、売却時は時間がかかる可能性があります。";
  } else if (total >= 40) {
    grade = "C"; label = "やや注意"; futureRatio = 0.82;
    comment = "資産価値が落ちやすい要素があります。売却時に苦労する可能性があるため、長期保有が前提の場合は注意が必要です。";
  } else {
    grade = "D"; label = "要注意"; futureRatio = 0.70;
    comment = "長期保有・投資目的には不向きです。自分が住む（実需）目的に絞って検討してください。売却を前提とした購入はリスクが高い状態です。";
  }

  return {
    total,
    breakdown: {
      area: areaScore,
      walk: walkScore,
      age: ageScore,
      floor: floorScore,
      direction: directionScore,
    },
    grade,
    label,
    futureRatio,
    comment,
  };
}
