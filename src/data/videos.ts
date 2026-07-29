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

// Janne Sakkinen's ALL REAL published YouTube videos
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
    id: "tmj-intraoral-palpation-hidden-pain",
    youtubeId: "YKKgu3ZdNpA",
    title: "Finger Inside, Jaw Lateral: How to Palpate Hidden TMJ Trigger Points",
    promiseDescription: "Intraoral palpation technique to isolate joint capsular tightness and pterygoid muscles safely.",
    categoryId: "tmj-bruxism",
    duration: "01:00",
    publishedAt: "2024-07-19",
    thumbnailUrl: "https://i2.ytimg.com/vi/YKKgu3ZdNpA/hqdefault.jpg",
    isShort: true,
  },
  {
    id: "submandibular-muscles-masseter-mylohyoid",
    youtubeId: "P-gSDH6IByQ",
    title: "Three Submandibular Muscles Every Practitioner Must Differentiate in TMD",
    promiseDescription: "Masseter, mylohyoid, and medial pterygoid. Precise anatomical landmarks and palpation angles.",
    categoryId: "tmj-bruxism",
    duration: "01:00",
    publishedAt: "2024-07-20",
    thumbnailUrl: "https://i1.ytimg.com/vi/P-gSDH6IByQ/hqdefault.jpg",
    isShort: true,
  },
  {
    id: "tmj-traction-mobilization-limited-opening",
    youtubeId: "N7IcS9YLcVY",
    title: "Millimeters, Not Meters: Safe TMJ Joint Mobilization for Restricted Opening",
    promiseDescription: "Downwards caudal traction mobilization for locked or severely restricted jaw opening.",
    categoryId: "tmj-bruxism",
    duration: "01:00",
    publishedAt: "2024-07-22",
    thumbnailUrl: "https://i3.ytimg.com/vi/N7IcS9YLcVY/hqdefault.jpg",
    isShort: true,
  },
  {
    id: "digastricus-geniohyoid-palpation",
    youtubeId: "ybyLbSDOwiI",
    title: "Dual-Route Palpation: Accessing Digastricus & Geniohyoid Muscles",
    promiseDescription: "External and intraoral landmarks to evaluate anterior neck and floor of mouth tension.",
    categoryId: "tmj-bruxism",
    duration: "01:00",
    publishedAt: "2024-07-21",
    thumbnailUrl: "https://i2.ytimg.com/vi/ybyLbSDOwiI/hqdefault.jpg",
    isShort: true,
  },
  {
    id: "tmj-physical-therapy-tools",
    youtubeId: "wW61YrBCT2A",
    title: "Vibration Wand & Toothbrush: Creative Low-Cost Tools for TMJ Home Care",
    promiseDescription: "Innovative home therapy modifications for masseter relaxation and jaw muscle proprioception.",
    categoryId: "tmj-bruxism",
    duration: "01:00",
    publishedAt: "2024-07-18",
    thumbnailUrl: "https://i4.ytimg.com/vi/wW61YrBCT2A/hqdefault.jpg",
    isShort: true,
  },
];
