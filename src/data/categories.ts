export interface Category {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "kaikki",
    name: "All 70 Videos",
    description: "All clinical physical therapy videos published by Janne Sakkinen.",
  },
  {
    id: "tmj-bruxism",
    name: "TMJ & Orofacial",
    description: "TMJ clicking, masseter myofascial release, tooth clenching, and facial pain.",
  },
  {
    id: "ergonomics",
    name: "Ergonomics",
    description: "Dental ergonomics, posture correction, and workplace micro-break routines.",
  },
  {
    id: "cervicogenic-neck",
    name: "Spine, Joint & Pelvic Floor",
    description: "Pelvic floor health, urinary incontinence, back pain, sciatica, shoulder impingement, joint osteoarthritis, and inflammation.",
  },
];
