export interface Category {
  id: string;
  name: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "tmj-bruxism",
    name: "TMJ & Orofacial Therapy",
    description: "Temporomandibular joint clicking, masseter muscle release, daytime clenching, and bruxism.",
  },
  {
    id: "cervicogenic-neck",
    name: "Cervicogenic Dizziness & Neck",
    description: "Upper cervical spine rehabilitation, cervicogenic dizziness, and tension headache protocols.",
  },
  {
    id: "ergonomics",
    name: "Ergonomics & Desk Workers",
    description: "Dental ergonomics, posture correction, and micro-break movement routines.",
  },
];
