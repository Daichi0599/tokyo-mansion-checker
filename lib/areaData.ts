export interface AreaData {
  name: string;
  avgPricePerSqm: number; // 万円/㎡（2024年推計）
  assetGrade: "S" | "A" | "B" | "C" | "D";
  trend: "up" | "flat" | "down";
  desc: string;
}

export const TOKYO_AREAS: AreaData[] = [
  { name: "港区",     avgPricePerSqm: 250, assetGrade: "S", trend: "up",   desc: "六本木・麻布・赤坂" },
  { name: "渋谷区",   avgPricePerSqm: 215, assetGrade: "S", trend: "up",   desc: "代々木上原・恵比寿" },
  { name: "千代田区", avgPricePerSqm: 205, assetGrade: "S", trend: "up",   desc: "神田・飯田橋・番町" },
  { name: "目黒区",   avgPricePerSqm: 178, assetGrade: "A", trend: "up",   desc: "中目黒・自由が丘" },
  { name: "中央区",   avgPricePerSqm: 165, assetGrade: "A", trend: "up",   desc: "勝どき・月島・晴海" },
  { name: "文京区",   avgPricePerSqm: 152, assetGrade: "A", trend: "flat", desc: "本郷・小石川・後楽園" },
  { name: "品川区",   avgPricePerSqm: 148, assetGrade: "A", trend: "up",   desc: "武蔵小山・大崎・西大井" },
  { name: "新宿区",   avgPricePerSqm: 145, assetGrade: "A", trend: "flat", desc: "落合・神楽坂・市ヶ谷" },
  { name: "世田谷区", avgPricePerSqm: 132, assetGrade: "B", trend: "flat", desc: "三軒茶屋・二子玉川・用賀" },
  { name: "台東区",   avgPricePerSqm: 122, assetGrade: "B", trend: "up",   desc: "浅草・上野・蔵前" },
  { name: "大田区",   avgPricePerSqm: 118, assetGrade: "B", trend: "flat", desc: "蒲田・大森・田園調布" },
  { name: "豊島区",   avgPricePerSqm: 115, assetGrade: "B", trend: "up",   desc: "池袋・駒込・巣鴨" },
  { name: "杉並区",   avgPricePerSqm: 112, assetGrade: "B", trend: "flat", desc: "高円寺・荻窪・西荻窪" },
  { name: "中野区",   avgPricePerSqm: 112, assetGrade: "B", trend: "up",   desc: "中野・東中野・新井" },
  { name: "江東区",   avgPricePerSqm: 102, assetGrade: "B", trend: "flat", desc: "豊洲・東雲・有明" },
  { name: "墨田区",   avgPricePerSqm: 98,  assetGrade: "C", trend: "flat", desc: "錦糸町・押上・両国" },
  { name: "荒川区",   avgPricePerSqm: 87,  assetGrade: "C", trend: "flat", desc: "日暮里・三河島・町屋" },
  { name: "北区",     avgPricePerSqm: 85,  assetGrade: "C", trend: "flat", desc: "赤羽・王子・田端" },
  { name: "板橋区",   avgPricePerSqm: 78,  assetGrade: "C", trend: "flat", desc: "成増・志村坂上・東武練馬" },
  { name: "練馬区",   avgPricePerSqm: 73,  assetGrade: "C", trend: "flat", desc: "練馬・大泉学園・石神井公園" },
  { name: "江戸川区", avgPricePerSqm: 65,  assetGrade: "D", trend: "flat", desc: "葛西・小岩・一之江" },
  { name: "葛飾区",   avgPricePerSqm: 60,  assetGrade: "D", trend: "flat", desc: "柴又・亀有・金町" },
  { name: "足立区",   avgPricePerSqm: 60,  assetGrade: "D", trend: "up",   desc: "北千住・西新井・綾瀬" },
];

/** エリアの平均価格（万円）を面積（㎡）から算出 */
export function calcAreaPrice(area: AreaData, sqm: number): number {
  return Math.round(area.avgPricePerSqm * sqm);
}

/** 区名からエリアデータを取得 */
export function findArea(name: string): AreaData | undefined {
  return TOKYO_AREAS.find((a) => a.name === name);
}
