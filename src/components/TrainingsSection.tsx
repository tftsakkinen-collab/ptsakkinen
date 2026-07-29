import { SITE_CONFIG } from "@/data/config";
import { CV_DATA_EN } from "@/data/cv";
import { GraduationCap, Award, Briefcase, BookOpen, CheckCircle2, ShieldCheck, FileCheck } from "lucide-react";

export default function TrainingsSection() {
  const mainTrainings = [
    {
      title: "Temporomandibular Joint & TMD Physical Therapy",
      target: "Dental Students & Physical Therapists",
      description: "University lecturer at the Institute of Dentistry, University of Oulu since 2017. Specializing in TMJ dysfunction, jaw clenching, and orofacial pain.",
      icon: GraduationCap,
    },
    {
      title: "TMJ Physical Therapy Seminars",
      target: "Northern Ostrobothnia Summer University & Healthcare Bodies",
      description: "Instructing specialized post-graduate seminars for physical therapists and healthcare practitioners on TMJ disorders (2024–).",
      icon: BookOpen,
    },
    {
      title: "Musculoskeletal OMT Physical Therapy",
      target: "Physical Therapy Practitioners",
      description: "Advanced clinical examination and manual therapy techniques for spinal disorders, neck pain, and joint biomechanics.",
      icon: Award,
    },
  ];

  return (
    <section className="py-20 bg-[#000d21] border-b border-[#0C66B4]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section 1: What Workshops & Lectures Janne Teaches */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Teaching &amp; Keynotes</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display text-white tracking-wide">
              WORKSHOPS &amp; <span className="text-[#00AEEF]">LECTURES</span>
            </h2>
            <p className="text-gray-300 text-base">
              Educating dental students at the University of Oulu and instructing post-graduate physical therapy courses on TMJ rehabilitation and dental ergonomics.
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

        {/* Section 2: Full Clinical CV & Experience */}
        <div className="pt-12 border-t border-[#0C66B4]/30 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
              <Briefcase className="w-4 h-4" />
              <span>Curriculum Vitae &amp; Experience</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display text-white tracking-wide">
              CAREER TIMELINE &amp; <span className="text-[#00AEEF]">DEGREES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Degrees & Basic Education */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-[#00AEEF]" />
                Degrees &amp; Specializations
              </h3>

              <div className="space-y-4">
                {CV_DATA_EN.degrees.map((deg, idx) => (
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
                    {deg.description && (
                      <p className="text-xs text-gray-400 pt-1 leading-relaxed">{deg.description}</p>
                    )}
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
                {CV_DATA_EN.workExperience.map((work, idx) => (
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

        {/* Section 3: Continuing Education & Specialization List */}
        <div className="pt-12 border-t border-[#0C66B4]/30 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-[#00AEEF] text-sm font-semibold uppercase tracking-widest">
                <FileCheck className="w-4 h-4" />
                <span>Certifications &amp; Courses</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display text-white tracking-wide">
                CONTINUING EDUCATION <span className="text-[#00AEEF]">(2011–2026)</span>
              </h3>
            </div>
            <span className="text-xs font-mono text-gray-400">20+ Advanced Post-Graduate Modules</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CV_DATA_EN.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#000a18] border border-[#0C66B4]/40 flex items-start gap-3"
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
        </div>

      </div>
    </section>
  );
}
