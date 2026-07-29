export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  promiseDescription: string;
  categoryId: string;
  duration: string;
  publishedAt: string;
  thumbnailUrl?: string;
  isShort?: boolean;
}

// Strictly Janne Sakkinen's REAL published long-form YouTube videos
export const FALLBACK_VIDEOS: Video[] = [
  {
    id: "physical-therapist-diet-pain-inflammation",
    youtubeId: "QW76j-RlQrw",
    title: "Physical Therapist Guide: How Diet Drives Chronic Pain & Low-Grade Inflammation",
    promiseDescription: "If chronic joint or spinal pain persists despite exercises, systemic low-grade inflammation may be the bottleneck.",
    categoryId: "ergonomics",
    duration: "07:01",
    publishedAt: "2024-07-24",
    thumbnailUrl: "https://i2.ytimg.com/vi/QW76j-RlQrw/hqdefault.jpg",
    isShort: false,
  },
];
