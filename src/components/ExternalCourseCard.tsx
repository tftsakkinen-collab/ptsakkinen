"use client";

import { ExternalLink, GraduationCap, Award, ShieldCheck } from "lucide-react";

export default function ExternalCourseCard() {
  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#001433] via-[#001026] to-[#000814] border-2 border-amber-500/50 shadow-2xl shadow-amber-950/20 max-w-4xl mx-auto space-y-6">
      
      {/* Audience Badge */}
      <div className="flex items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold uppercase tracking-wider">
          <GraduationCap className="w-4 h-4 text-amber-400" />
          <span>For German &amp; International Professionals</span>
        </div>
        <span className="text-xs font-mono font-bold text-gray-400 bg-[#000814] px-3 py-1 rounded-full border border-gray-800">
          foxstudy.de Platform
        </span>
      </div>

      {/* Course Title & Subtitle */}
      <div className="space-y-2">
        <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
          Craniomandibular Dysfunction (CMD): Assessment &amp; Treatment
        </h3>
        <p className="text-amber-200 text-sm font-semibold">
          240 min comprehensive clinical course · ZVK / DVE Approved for CE Credits
        </p>
      </div>

      {/* Course Overview Text */}
      <p className="text-gray-300 text-sm leading-relaxed">
        Comprehensive clinical TMD course for German-speaking and international physical therapists, osteopaths, and dental professionals. Hosted on the official <strong className="text-white">foxstudy.de</strong> marketplace with automatic CE credit certification.
      </p>

      {/* Details Bar & External Buy Link */}
      <div className="pt-4 border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-xs text-gray-300">
          <span className="font-bold text-white font-mono text-base">119 €</span>
          <span>•</span>
          <span>4 Hours Video Content</span>
          <span>•</span>
          <span className="text-emerald-400 font-semibold">CE-Certified</span>
        </div>

        <a
          href="https://foxstudy.de"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-[#000a18] font-extrabold text-sm hover:from-white hover:to-amber-100 transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] flex items-center justify-center gap-2 cursor-pointer shrink-0"
        >
          <span>Enroll on foxstudy.de</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

    </div>
  );
}
