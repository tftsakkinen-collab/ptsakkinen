"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Can these physical therapy exercises help daytime jaw clenching?",
      a: "Yes. The protocols focus on masseter relaxation and neuromuscular retraining, helping you become aware of and interrupt subconscious daytime teeth clenching.",
    },
    {
      q: "Do I need specialized equipment to follow the programs?",
      a: "No specialized equipment is needed. Exercises rely on targeted bodyweight movements and simple household items.",
    },
    {
      q: "How are international payments handled securely?",
      a: "All online program orders are processed through Stripe, supporting international credit cards and localized payment methods with high-grade encryption.",
    },
    {
      q: "Does this replace medical or dental care?",
      a: "No. Our digital rehabilitation programs provide physical therapy guidance and complement your existing medical, dental, or surgical care.",
    },
  ];

  return (
    <section className="py-20 bg-[#000a18] border-b border-[#0C66B4]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#67e8f9] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display text-white tracking-wide">
            FREQUENTLY ASKED <span className="text-[#67e8f9]">CLINICAL QUESTIONS</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#000d21] border border-[#0C66B4]/50 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left font-bold text-base sm:text-lg text-white flex items-center justify-between gap-4 hover:text-[#67e8f9] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#67e8f9] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-gray-300 leading-relaxed border-t border-[#0C66B4]/20 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
