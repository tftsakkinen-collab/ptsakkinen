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
  {
    id: "stop-daytime-jaw-clenching",
    youtubeId: "QW76j-RlQrw",
    title: "Stop Daytime Jaw Clenching & Bruxism — Masseter Release",
    promiseDescription: "Learn clinical self-myofascial release techniques to relieve jaw soreness and cheek tightness.",
    categoryId: "tmj-bruxism",
    duration: "18:30",
    publishedAt: "2024-03-15",
    thumbnailUrl: "/janne-sakkinen.jpg",
    isShort: false,
  },
  {
    id: "tmj-clicking-alignment-protocol",
    youtubeId: "QW76j-RlQrw",
    title: "TMJ Clicking & Joint Alignment: 3-Step Physical Therapy Protocol",
    promiseDescription: "Step-by-step joint alignment and motor control exercises for clicking and locking jaws.",
    categoryId: "tmj-bruxism",
    duration: "15:45",
    publishedAt: "2024-04-10",
    thumbnailUrl: "/hero-bg.jpg",
    isShort: false,
  },
  {
    id: "dental-ergonomics-desk-workers",
    youtubeId: "QW76j-RlQrw",
    title: "Ergonomics for Dental Professionals & Remote Desk Workers",
    promiseDescription: "Postural correction and micro-break routines designed to prevent chronic back and neck strain.",
    categoryId: "ergonomics",
    duration: "22:15",
    publishedAt: "2024-05-12",
    thumbnailUrl: "/janne-sakkinen.jpg",
    isShort: false,
  },
  {
    id: "computer-neck-shoulder-routine",
    youtubeId: "QW76j-RlQrw",
    title: "Neck & Shoulder Relief for Computer Users: 5-Minute Daily Routine",
    promiseDescription: "Quick, effective movement breaks to perform right at your desk without equipment.",
    categoryId: "ergonomics",
    duration: "09:40",
    publishedAt: "2024-05-28",
    thumbnailUrl: "/hero-bg.jpg",
    isShort: false,
  },
];
