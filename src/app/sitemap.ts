import { MetadataRoute } from "next";
import { FALLBACK_VIDEOS } from "@/data/videos";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.ptsakkinen.com";

  const videoUrls = FALLBACK_VIDEOS.map((video) => ({
    url: `${baseUrl}/videos/${video.id}`,
    lastModified: new Date(video.publishedAt || "2024-01-15"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const topicDates: Record<string, string> = {
    "tmj-and-jaw-pain": "2024-07-24",
    "neck-pain-and-headaches": "2024-08-10",
    "back-pain-and-sciatica": "2024-09-15",
    "ergonomics-and-wellness": "2024-10-01",
  };

  const topicUrls = Object.entries(topicDates).map(([slug, dateStr]) => ({
    url: `${baseUrl}/topic/${slug}`,
    lastModified: new Date(dateStr),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const staticUrls = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date("2026-07-30"),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-07-30"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/videos`,
      lastModified: new Date("2026-07-29"),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gear`,
      lastModified: new Date("2026-08-08"),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/free-guide`,
      lastModified: new Date("2024-06-15"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/workshops`,
      lastModified: new Date("2024-11-01"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2024-05-01"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/legal`,
      lastModified: new Date("2024-01-01"),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  return [...staticUrls, ...topicUrls, ...videoUrls];
}
