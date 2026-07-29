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
    promiseDescription: "Overcome chronic jaw tension, clicking, and teeth grinding with a 4-week structured clinical rehabilitation system.",
    details: [
      "Targeted masseter & pterygoid self-release techniques",
      "Neuromuscular retraining to interrupt subconscious clenching",
      "Step-by-step video guides for day and night jaw positioning",
      "Complete exercise progression to restore smooth jaw tracking",
    ],
    pricePlaceholder: "[PLACEHOLDER: $97 USD]",
    checkoutUrl: "[PLACEHOLDER: STRIPE_PAYMENT_LINK]",
    badge: "Most Popular Niche Program",
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
    pricePlaceholder: "[PLACEHOLDER: $127 USD]",
    checkoutUrl: "[PLACEHOLDER: STRIPE_PAYMENT_LINK]",
    badge: "Clinical Companion Program",
  },
  {
    id: "future-program",
    name: "Future Specialization Program",
    promiseDescription: "Upcoming specialized protocol for cervicogenic dizziness and complex jaw-neck interactions.",
    details: [
      "Advanced clinical protocols currently in development",
      "Join the email waitlist for early access discounts",
    ],
    pricePlaceholder: "[PLACEHOLDER: Coming Soon]",
    checkoutUrl: "#",
    badge: "Coming Soon",
    isPlaceholder: true,
  },
];
