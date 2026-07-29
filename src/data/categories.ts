export interface Category {
  id: string;
  name: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  { id: "all", name: "All Videos", description: "Explore the complete video library" },
  { id: "jaw-tmd", name: "Jaw / TMD", description: "TMJ pain, clicky jaw, lockjaw, and chewing discomfort" },
  { id: "bruxism", name: "Bruxism", description: "Nighttime teeth grinding, jaw clenching, and masseter tightness" },
  { id: "trigeminal", name: "Trigeminal Neuralgia", description: "Facial nerve discomfort, sensitivity, and complementary care" },
  { id: "neck-dizziness", name: "Neck & Dizziness", description: "Cervicogenic dizziness, upper neck stiffness, and balance" },
  { id: "posture", name: "Posture", description: "Forward head posture, spinal alignment, and ergonomic relief" },
];
