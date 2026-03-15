import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://jcoco.org";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about/executive-committee`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about/board-of-trustees`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/events`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/media`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/donate`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/membership`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
  ];
}
