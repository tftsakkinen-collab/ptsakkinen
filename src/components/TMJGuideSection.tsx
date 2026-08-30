"use client";

import { Video, Check, Star, ShieldCheck, CreditCard, Lock, Sparkles } from "lucide-react";

export default function TMJGuideSection() {
  const STRIPE_29_USD_URL = "https://buy.stripe.com/dRm14n2C8cM65lEeYl0Ny03";

  const contentItems = [
    "TMJ anatomy, mechanics, and symptom classification",
    "Articular (joint) vs. myogenic (muscle) issue differentiation",
    "Jaw closer muscles: anatomy, palpation, and tension release",
    "Targeted stretching and mobilization protocols",
    "Long-term habits and essential self-care cues",
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#000814] relative overflow-hidden border-t border-b border-[#0C66B4]/30">
      {/* Background Lighting Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00AEEF]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Category Badge & Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#67e8f9] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Video className="w-4 h-4 text-[#67e8f9]" />
            <span>17-Minute Targeted Video Guide &amp; Self-Care Protocol</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Relief for Stiff Jaw &amp; TMJ Pain!
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            A comprehensive, practical, and evidence-based guide to managing jaw tension, stiffness, and TMJ-related discomfort. Learn the biomechanics of the jaw joint, differentiate root causes, and master actionable self-care exercises you can perform anywhere.
          </p>
        </div>

        {/* Product Card Container */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#001433] via-[#00122e] to-[#000d21] border-2 border-[#00AEEF]/60 shadow-2xl shadow-cyan-950/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Details & Bullet Points (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center gap-3 text-xs font-mono font-bold text-[#67e8f9] uppercase tracking-wider">
              <span className="px-3 py-1 rounded-md bg-[#014489]/60 border border-[#00AEEF]/40">
                17 Min Video + Exercise Guide
              </span>
              <span>•</span>
              <span className="text-gray-300">Instant Digital Access</span>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-extrabold text-white">
                What&apos;s Included in This Protocol:
              </h3>

              <ul className="space-y-3">
                {contentItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-200">
                    <div className="p-1 rounded-full bg-[#014489] text-[#67e8f9] shrink-0 mt-0.5 border border-[#00AEEF]/40">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonial Box */}
            <div className="p-5 rounded-2xl bg-[#000814]/80 border border-[#0C66B4]/50 space-y-2 relative">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-gray-200 italic leading-relaxed">
                &ldquo;Clear, highly actionable, and easy to follow. The visual breakdowns make complex jaw mechanics simple to understand, and the exercises provide immediate relief.&rdquo;
              </p>
              <span className="text-xs font-bold text-[#67e8f9] block">
                – Verified Client Review
              </span>
            </div>

          </div>

          {/* Right Column: Pricing & Checkout Button (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#000814] border-2 border-[#00AEEF]/50 text-center space-y-6 shadow-xl">
            
            <div className="space-y-1">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block font-mono">
                PROTOCOL INVESTMENT
              </span>
              <div className="text-5xl font-display font-extrabold text-[#67e8f9]">
                $29
              </div>
              <span className="text-xs text-gray-300 font-medium block pt-1">
                One-Time Payment · Lifetime Access
              </span>
            </div>

            <div className="pt-2">
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

      </div>
    </section>
  );
}
