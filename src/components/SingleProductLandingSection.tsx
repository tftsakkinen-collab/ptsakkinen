"use client";

import { Video, Check, Star, CreditCard, Lock, Sparkles, Clock, ArrowRight } from "lucide-react";
import ContentAccordion, { AccordionItem } from "./ContentAccordion";

export default function SingleProductLandingSection() {
  const STRIPE_29_USD_URL = "https://buy.stripe.com/dRm14n2C8cM65lEeYl0Ny03";

  const moduleItems: AccordionItem[] = [
    {
      title: "1. TMJ Anatomy & Movement Mechanics",
      duration: "4 min",
      content: "Understand the temporomandibular joint, articular disc positioning, and why your jaw clicks or locks during chewing.",
    },
    {
      title: "2. Articular vs. Myogenic Issue Differentiation",
      duration: "3 min",
      content: "Learn how to distinguish between joint-related structural issues and muscle-related tension to target the root cause.",
    },
    {
      title: "3. Jaw Closer Muscles: Palpation & Release",
      duration: "4 min",
      content: "Step-by-step masseter and temporalis myofascial release techniques to instantly decrease daytime clenching pressure.",
    },
    {
      title: "4. Targeted Stretching & Mobilization Protocols",
      duration: "4 min",
      content: "Gentle exercises for y-axis jaw opening, lateral excursion, and suboccipital cervical spine decompression.",
    },
    {
      title: "5. Habit Retraining & Self-Care Cues",
      duration: "2 min",
      content: "Practical cues (tongue posture, jaw resting state) to break subconscious clenching during work and sleep.",
    },
  ];

  return (
    <section id="course" className="py-16 sm:py-24 bg-[#000814] relative overflow-hidden border-b border-[#0C66B4]/30">
      {/* Background Lighting Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#00AEEF]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* 01 OTSIKKO: Concrete result in 1 sentence */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#67e8f9] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#67e8f9]" />
            <span>17-Minute Targeted Video Protocol</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            Relief for Stiff Jaw &amp; TMJ Pain in 17 Minutes
          </h1>

          {/* 02 ARVOLUPAUS: 2-3 lines: for whom, what you get, how long it takes */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            For individuals suffering from jaw clenching, TMJ clicking, and neck tension. Get lifetime access to Janne Sakkinen&apos;s 17-minute clinical video guide and downloadable exercise protocols.
          </p>
        </div>

        {/* 03 SISÄLTÖLISTA: Accordion closed by default, 1st item open */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#001433] via-[#00122e] to-[#000d21] border-2 border-[#00AEEF]/60 shadow-2xl shadow-cyan-950/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-extrabold text-white">
              Course Modules &amp; Curriculum
            </h3>

            <ContentAccordion items={moduleItems} defaultOpenIndex={0} />
          </div>

          {/* 05 CTA Box */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#000814] border-2 border-[#00AEEF]/50 text-center space-y-6 shadow-xl sticky top-24">
            <div className="space-y-1">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block font-mono">
                SINGLE COURSE INVESTMENT
              </span>
              <div className="text-5xl font-display font-extrabold text-[#67e8f9]">
                $29
              </div>
              <span className="text-xs text-gray-300 font-medium block pt-1">
                One-Time Payment · Lifetime Access
              </span>
            </div>

            <div>
              <a
                href={STRIPE_29_USD_URL}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-extrabold text-base hover:from-white hover:to-slate-100 transition-all shadow-[0_0_25px_rgba(0,174,239,0.5)] flex items-center justify-center gap-2 cursor-pointer group text-center min-h-[52px]"
              >
                <CreditCard className="w-5 h-5 text-[#000a18]" />
                <span>Get Instant Access ($29)</span>
              </a>
            </div>

            <div className="space-y-2 pt-2 border-t border-[#0C66B4]/30 text-xs text-gray-400">
              <div className="flex items-center justify-center gap-1.5 text-gray-300 font-medium">
                <Lock className="w-3.5 h-3.5 text-[#67e8f9]" />
                <span>Secure Stripe Checkout</span>
              </div>
              <p className="text-[11px] leading-tight">
                Instant access to 17-minute video and exercise protocols immediately after payment.
              </p>
            </div>
          </div>

        </div>

        {/* 04 PALAUTTEET: Static 3-Card Row */}
        <div className="space-y-6 pt-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center">
            What Clients Say
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#00122e] border border-[#0C66B4]/50 space-y-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-gray-200 italic leading-relaxed">
                &ldquo;Clear, highly actionable, and easy to follow. The visual breakdowns make complex jaw mechanics simple to understand.&rdquo;
              </p>
              <span className="text-xs font-bold text-[#67e8f9] block">– Sasu K.</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#00122e] border border-[#0C66B4]/50 space-y-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-gray-200 italic leading-relaxed">
                &ldquo;The masseter release and tongue alignment cues helped reduce my morning jaw tightness within a week.&rdquo;
              </p>
              <span className="text-xs font-bold text-[#67e8f9] block">– Verified Client</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#00122e] border border-[#0C66B4]/50 space-y-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-gray-200 italic leading-relaxed">
                &ldquo;Excellent clinical explanation of upper cervical spine interaction with jaw tension.&rdquo;
              </p>
              <span className="text-xs font-bold text-[#67e8f9] block">– Stiina E.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
