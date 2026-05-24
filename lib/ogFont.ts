/**
 * OGP画像生成用 Noto Sans JP フォントローダー
 * Google Fonts API → woff2 バッファを返す（Edge Runtime 対応）
 */
export async function loadNotoSansJP(text: string): Promise<ArrayBuffer | null> {
  try {
    const api = `https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&text=${encodeURIComponent(text)}`;
    const css = await fetch(api, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      },
    }).then((r) => r.text());

    const match = css.match(/src:\s*url\(([^)]+)\)\s*format\('woff2'\)/);
    if (!match) return null;

    return fetch(match[1]).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}
