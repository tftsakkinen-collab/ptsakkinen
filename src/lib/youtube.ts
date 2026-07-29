import { FALLBACK_VIDEOS, Video } from "@/data/videos";
import { SITE_CONFIG } from "@/data/config";

const CATEGORY_MAP: Record<string, string> = {
  tmj: "jaw-tmd",
  jaw: "jaw-tmd",
  clenching: "bruxism",
  bruxism: "bruxism",
  teeth: "bruxism",
  trigeminal: "trigeminal",
  neuralgia: "trigeminal",
  dizziness: "neck-dizziness",
  neck: "neck-dizziness",
  posture: "posture",
};

export async function fetchYouTubeVideos(): Promise<Video[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = SITE_CONFIG.youtubeChannelId;

  if (!apiKey || channelId.includes("PLACEHOLDER")) {
    return FALLBACK_VIDEOS;
  }

  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20&type=video`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      return FALLBACK_VIDEOS;
    }

    const data = await res.json();
    if (!data.items || data.items.length === 0) {
      return FALLBACK_VIDEOS;
    }

    return data.items.map((item: any, index: number) => {
      const title = item.snippet.title || "";
      const description = item.snippet.description || "";
      
      let categoryId = "jaw-tmd";
      const lower = (title + " " + description).toLowerCase();
      for (const [key, cat] of Object.entries(CATEGORY_MAP)) {
        if (lower.includes(key)) {
          categoryId = cat;
          break;
        }
      }

      return {
        id: item.id.videoId || `en-yt-video-${index}`,
        youtubeId: item.id.videoId || "dQw4w9WgXcQ",
        title: title,
        promiseDescription: description.slice(0, 120) || "Watch clinical rehabilitation exercises for jaw and neck pain.",
        categoryId: categoryId,
        duration: "14:00",
        publishedAt: item.snippet.publishedAt?.split("T")[0] || "2024-01-01",
      };
    });
  } catch (error) {
    console.error("Failed to fetch YouTube API videos:", error);
    return FALLBACK_VIDEOS;
  }
}
