import { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";

const BASE_URL = "https://30lab.vercel.app";

/** app/articles 配下の実在する記事スラッグを列挙する（削除・追加に自動追従） */
function getArticleSlugs(): string[] {
  const dir = path.join(process.cwd(), "app", "articles");
  try {
    return fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((e) => e.isDirectory() && fs.existsSync(path.join(dir, e.name, "page.tsx")))
      .map((e) => e.name)
      .sort();
  } catch {
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  // 更新日を正確に管理できないため lastModified は送らない。
  // デプロイ日を全URLの更新日として送ると、Googleが変更検知のシグナルとして信頼できなくなる。

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/plan`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/mansion`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/loan`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/check`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/articles`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/car`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/child`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/birth`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/birth/checklist`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/privacy-policy`, changeFrequency: "monthly", priority: 0.3 },
  ];

  const articlePages: MetadataRoute.Sitemap = getArticleSlugs().map((slug) => ({
    url: `${BASE_URL}/articles/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...articlePages];
}
