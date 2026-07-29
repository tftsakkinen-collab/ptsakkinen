export interface Category {
  id: string;
  name: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "kaikki",
    name: "All Videos",
    description: "All published physical therapy videos and tutorials.",
  },
  {
    id: "tmj-bruxism",
    name: "TMJ & Orofacial Therapy",
    description: "Temporomandibular joint clicking, masseter muscle release, daytime clenching, and bruxism.",
  },
  {
    id: "ergonomics",
    name: "Ergonomics & Desk Workers",
    description: "Dental ergonomics, posture correction, and micro-break movement routines.",
  },
  {
    id: "cervicogenic-neck",
    name: "Spine & Physical Therapy",
    description: "Musculoskeletal rehabilitation, inflammation, and spinal biomechanics.",
  },
];
