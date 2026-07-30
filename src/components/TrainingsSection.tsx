"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/data/config";
import { CV_DATA_EN } from "@/data/cv";
import { GraduationCap, Award, Briefcase, BookOpen, CheckCircle2, ShieldCheck, FileCheck, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

export default function TrainingsSection() {
  const [showAllCertifications, setShowAllCertifications] = useState(false);

  const mainTrainings = [
    {
      title: "Orofacial Therapy & TMD Physical Therapy",
      target: "Dental Students & Physical Therapists",
      description: "Specialized clinical training in temporomandibular disorders (TMD), jaw joint mechanics, and facial pain rehabilitation. Lecturing at the University of Oulu since 2017.",
      icon: GraduationCap,
    },
    {
      title: "Jaw Joint Therapy Workshop",
      target: "Summer University & Professional Associations",
      description: "Course instructor for advanced physical therapy workshops focusing on orofacial pain and TMJ rehabilitation (2024–).",
      icon: BookOpen,
    },
    {
      title: "Orthopedic Manual Therapy (OMT) Seminars",
      target: "Physical Therapists & Practitioners",
      description: "Evidence-based clinical assessment and hands-on manual therapy for neck, spine, and joint dysfunctions.",
      icon: Award,
    },
  ];

  const topDegrees = CV_DATA_EN.degrees.slice(0, 3);
  const topWorkExperience = CV_DATA_EN.workExperience.slice(0, 3);
  const visibleCertifications = showAllCertifications 
    ? CV_DATA_EN.certifications 
    : CV_DATA_EN.certifications.slice(0, 3);

  return (
    <section className="py-20 bg-[#000d21] border-b border-[#0C66B4]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section 1: What Workshops & Lectures Janne Teaches */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Teaching &amp; Lecturing</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display text-white tracking-wide">
              CLINICAL WORKSHOPS <span className="text-[#00AEEF]">&amp; LECTURES</span>
            </h2>
            <p className="text-gray-300 text-base">
              I instruct physical therapists and dental students at the University of Oulu in TMJ rehabilitation and workplace ergonomics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainTrainings.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#000a18] border border-[#0C66B4] space-y-4 shadow-panel hover:border-[#00AEEF] transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#014489]/40 border border-[#00AEEF]/50 text-[#00AEEF] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-[#00AEEF] uppercase tracking-wider block">
                      {item.target}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Top CV Highlights */}
        <div className="pt-12 border-t border-[#0C66B4]/30 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
              <Briefcase className="w-4 h-4" />
              <span>Curriculum Vitae &amp; Clinical Experience</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display text-white tracking-wide">
              CAREER &amp; <span className="text-[#00AEEF]">DEGREES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Degrees & Basic Education */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-[#00AEEF]" />
                Degrees &amp; Specialization
              </h3>

              <div className="space-y-4">
                {topDegrees.map((deg, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#000a18] border border-[#0C66B4]/50 space-y-2"
                  >
                    <div className="flex items-center justify-between text-xs text-[#00AEEF] font-mono">
                      <span>{deg.duration}</span>
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <h4 className="text-lg font-bold text-white">{deg.degree}</h4>
                    <p className="text-sm text-gray-300 font-medium">{deg.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Clinical Work Experience */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-[#00AEEF]" />
                Clinical Work History
              </h3>

              <div className="space-y-3">
                {topWorkExperience.map((work, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#000a18] border border-[#0C66B4]/40 flex items-start justify-between gap-4"
                  >
                    <div>
                      <h4 className="text-base font-bold text-white">{work.title}</h4>
                      <p className="text-xs text-gray-300">{work.organization}</p>
                    </div>
                    <span className="text-xs font-mono text-[#00AEEF] shrink-0">{work.period}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Section 3: Continuing Education Highlights & Dynamic Expansion Button */}
        <div className="pt-12 border-t border-[#0C66B4]/30 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-[#00AEEF] text-sm font-semibold uppercase tracking-widest">
                <FileCheck className="w-4 h-4" />
                <span>Certifications &amp; Training</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display text-white tracking-wide">
                POST-GRADUATE COURSES <span className="text-[#00AEEF]">(20+ Courses)</span>
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleCertifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#000a18] border border-[#0C66B4]/40 flex items-start gap-3 transition-all hover:border-[#00AEEF]"
              >
                <CheckCircle2 className="w-5 h-5 text-[#00AEEF] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white leading-snug">{cert.title}</h4>
                  <p className="text-[11px] text-gray-400 mt-1">{cert.instructorOrOrg}</p>
                  <span className="text-[10px] font-mono text-[#00AEEF] mt-1 block">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Dynamic Expansion & Full Profile Link Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              onClick={() => setShowAllCertifications(!showAllCertifications)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00AEEF] text-black font-bold text-sm hover:bg-[#33C2F5] transition-all shadow-glow group cursor-pointer"
            >
              <span>
                {showAllCertifications
                  ? "Show Less"
                  : `View all post-graduate courses (${CV_DATA_EN.certifications.length} courses)`}
              </span>
              {showAllCertifications ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              )}
            </button>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-[#000a18] border border-[#0C66B4]/60 text-white font-bold text-sm hover:border-[#00AEEF] hover:text-[#00AEEF] transition-all"
            >
              <span>Read full professional philosophy &amp; background</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
