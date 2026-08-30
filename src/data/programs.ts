export interface Program {
  id: string;
  name: string;
  promiseDescription: string;
  details: string[];
  pricePlaceholder: string;
  checkoutUrl: string;
  badge?: string;
  isPlaceholder?: boolean;
}

export const PROGRAMS: Program[] = [
  {
    id: "jaw-clenching-tmj-reset",
    name: "Jaw Clenching & TMJ Reset",
    promiseDescription: "Overcome chronic jaw tension, clicking, and teeth grinding with a structured clinical rehabilitation system.",
    details: [
      "Targeted masseter & pterygoid self-release techniques",
      "Neuromuscular retraining to interrupt subconscious clenching",
      "Step-by-step video guides for day and night jaw positioning",
      "Complete exercise progression to restore smooth jaw tracking",
    ],
    pricePlaceholder: "Free Video Guide",
    checkoutUrl: "/free-guide",
    badge: "Free Clinical Material",
    isPlaceholder: true,
  },
  {
    id: "trigeminal-neuralgia-support",
    name: "Trigeminal Neuralgia Support Program",
    promiseDescription: "Calm facial nerve sensitivity and reduce trigger-zone reactivity with gentle, non-surgical physical therapy protocols.",
    details: [
      "Complementary non-surgical physical therapy protocol",
      "Desensitization routines for facial nerve branches",
      "Upper cervical spinal positioning to decrease nerve irritation",
      "Designed to safely complement medical care without replacing it",
    ],
    pricePlaceholder: "Free Video Guide",
    checkoutUrl: "/free-guide",
    badge: "Free Clinical Material",
    isPlaceholder: true,
  },
  {
    id: "cervicogenic-dizziness",
    name: "Cervicogenic Dizziness & Neck Care",
    promiseDescription: "Targeted neck-dizziness self-assessment and cervical spine stabilization protocols.",
    details: [
      "Neck-dizziness screening & movement testing",
      "Suboccipital muscle release & proprioceptive exercises",
      "Step-by-step video exercise progression",
    ],
    pricePlaceholder: "Free Video Guide",
    checkoutUrl: "/free-guide",
    badge: "Free Clinical Material",
    isPlaceholder: true,
  },
];
