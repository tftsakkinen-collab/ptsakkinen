export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  promiseDescription: string;
  categoryId: string;
  duration: string;
  publishedAt: string;
}

export const FALLBACK_VIDEOS: Video[] = [
  {
    id: "stop-jaw-clenching-masseter",
    youtubeId: "dQw4w9WgXcQ",
    title: "Stop Daytime Jaw Clenching with This Simple Tongue Trigger",
    promiseDescription: "Reset your masseter muscles in seconds and break the habit of unconscious daytime teeth clenching.",
    categoryId: "bruxism",
    duration: "11:40",
    publishedAt: "2024-02-10",
  },
  {
    id: "tmj-clicking-alignment",
    youtubeId: "dQw4w9WgXcQ",
    title: "Fix TMJ Clicking & Popping when Opening Your Mouth",
    promiseDescription: "Re-align your articular disc with 3 gentle tracking exercises to eliminate painful jaw popping.",
    categoryId: "jaw-tmd",
    duration: "15:20",
    publishedAt: "2024-03-05",
  },
  {
    id: "cervicogenic-dizziness-neck",
    youtubeId: "dQw4w9WgXcQ",
    title: "Relieve Cervicogenic Dizziness From Upper Neck Stiffness",
    promiseDescription: "Mobilize the C1-C2 joint to restore balance and clear off-balance sensations caused by neck tightness.",
    categoryId: "neck-dizziness",
    duration: "13:45",
    publishedAt: "2024-01-18",
  },
  {
    id: "trigeminal-neuralgia-desensitization",
    youtubeId: "dQw4w9WgXcQ",
    title: "Facial Nerve Sensitivity: Gentle Desensitization Protocol",
    promiseDescription: "Calm hypersensitive facial zones with safe, non-invasive nerve gliding techniques.",
    categoryId: "trigeminal",
    duration: "18:10",
    publishedAt: "2024-04-12",
  },
  {
    id: "forward-head-posture-tmj",
    youtubeId: "dQw4w9WgXcQ",
    title: "How Forward Head Posture Causes TMJ Pain & Jaw Strain",
    promiseDescription: "Correct postural neck angle to instantly reduce mechanical compression on the jaw joints.",
    categoryId: "posture",
    duration: "14:15",
    publishedAt: "2024-05-08",
  },
];
