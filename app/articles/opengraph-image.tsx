import { ImageResponse } from "next/og";
import { loadNotoSansJP } from "@/lib/ogFont";

export const runtime = "edge";
export const alt = "マンション購入コラム | 30Lab";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CHARS =
  "マンション購入コラム住宅ローン年収頭金返済比率買い時変動固定金利借り換え審査落ちた流れ手順特徴後悔しない完全無料Lab";

const ARTICLES = [
  { icon: "💰", title: "年収別マンション購入可能額" },
  { icon: "📊", title: "返済比率は何%が安全？" },
  { icon: "🏦", title: "金利比較【2026年最新】" },
  { icon: "📅", title: "買い時はいつ？2026年版" },
  { icon: "🔄", title: "変動vs固定どっちがいい？" },
  { icon: "🚩", title: "買ってはいけない物件10選" },
];

export default async function OgImage() {
  const fontData = await loadNotoSansJP(CHARS);
  const fonts = fontData
    ? [{ name: "NotoJP", data: fontData, weight: 700 as const }]
    : [];

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f8fafc",
          fontFamily: fontData ? "NotoJP, sans-serif" : "sans-serif",
          padding: "48px 56px",
          position: "relative",
        }}
      >
        {/* ヘッダー */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
          <div style={{
            backgroundColor: "#2563eb",
            color: "white",
            fontSize: 16,
            fontWeight: 700,
            borderRadius: 999,
            padding: "5px 18px",
          }}>
            30Lab コラム
          </div>
          <div style={{ fontSize: 16, color: "#64748b" }}>
            マンション購入・住宅ローンの基礎知識
          </div>
        </div>

        {/* タイトル */}
        <div style={{ fontSize: 52, fontWeight: 900, color: "#0f172a", marginBottom: 12, lineHeight: 1.2 }}>
          マンション購入コラム
        </div>
        <div style={{ fontSize: 22, color: "#475569", marginBottom: 36 }}>
          数字で理解できる、買う前に読みたい記事集
        </div>

        {/* 記事グリッド */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {ARTICLES.map((a) => (
            <div
              key={a.title}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                backgroundColor: "white",
                border: "1px solid #e2e8f0",
                borderRadius: 12,
                padding: "10px 16px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              }}
            >
              <span style={{ fontSize: 22 }}>{a.icon}</span>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#1e293b" }}>{a.title}</span>
            </div>
          ))}
        </div>

        {/* フッター */}
        <div style={{
          position: "absolute",
          bottom: 32,
          right: 56,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}>
          <div style={{
            backgroundColor: "#1d4ed8",
            color: "white",
            fontSize: 14,
            fontWeight: 900,
            borderRadius: 8,
            padding: "4px 12px",
          }}>
            30Lab
          </div>
          <span style={{ fontSize: 14, color: "#94a3b8" }}>30lab.vercel.app</span>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
