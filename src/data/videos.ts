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
    id: "stop-daytime-jaw-clenching",
    youtubeId: "dQw4w9WgXcQ",
    title: "Stop Daytime Jaw Clenching & Bruxism — Masseter Release",
    promiseDescription: "Learn clinical self-myofascial release techniques to relieve jaw soreness and cheek tightness.",
    categoryId: "tmj-bruxism",
    duration: "18:30",
    publishedAt: "2024-03-15",
  },
  {
    id: "tmj-clicking-alignment-protocol",
    youtubeId: "dQw4w9WgXcQ",
    title: "TMJ Clicking & Joint Alignment: 3-Step Physical Therapy Protocol",
    promiseDescription: "Step-by-step joint alignment and motor control exercises for clicking and locking jaws.",
    categoryId: "tmj-bruxism",
    duration: "15:45",
    publishedAt: "2024-04-10",
  },
  {
    id: "cervicogenic-dizziness-neck-stiffness",
    youtubeId: "dQw4w9WgXcQ",
    title: "Cervicogenic Dizziness & Upper Cervical Stiffness: Home Protocol",
    promiseDescription: "Target deep neck flexors and restore proprioceptive vestibular balance safely.",
    categoryId: "cervicogenic-neck",
    duration: "19:20",
    publishedAt: "2024-02-20",
  },
  {
    id: "forward-head-posture-tension-headache",
    youtubeId: "dQw4w9WgXcQ",
    title: "Fix Forward Head Posture & Tension Headaches Naturally",
    promiseDescription: "Decompress suboccipital muscles and relieve pressure behind the eyes and temples.",
    categoryId: "cervicogenic-neck",
    duration: "13:50",
    publishedAt: "2024-01-18",
  },
  {
    id: "dental-ergonomics-desk-workers",
    youtubeId: "dQw4w9WgXcQ",
    title: "Ergonomics for Dental Professionals & Remote Desk Workers",
    promiseDescription: "Postural correction and micro-break routines designed to prevent chronic back and neck strain.",
    categoryId: "ergonomics",
    duration: "22:15",
    publishedAt: "2024-05-12",
  },
  {
    id: "computer-neck-shoulder-routine",
    youtubeId: "dQw4w9WgXcQ",
    title: "Neck & Shoulder Relief for Computer Users: 5-Minute Daily Routine",
    promiseDescription: "Quick, effective movement breaks to perform right at your desk without equipment.",
    categoryId: "ergonomics",
    duration: "09:40",
    publishedAt: "2024-05-28",
  },
];
