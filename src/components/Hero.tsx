import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/data/config";
import { ShieldCheck, Play, ArrowRight, Award, GraduationCap, CheckCircle2, Eye, Users, Video } from "lucide-react";

export default function Hero() {
  const stats = [
    {
      label: "Over 1.1M+",
      sublabel: "YouTube Views",
      icon: Eye,
    },
    {
      label: "5,380+ Subscribers",
      sublabel: "Active Community",
      icon: Users,
    },
    {
      label: `${SITE_CONFIG.totalVideosCount} Clinical Videos`,
      sublabel: "Free Articles & Guides",
      icon: Video,
    },
    {
      label: "15+ Specializations",
      sublabel: "Continuing Education",
      icon: GraduationCap,
    },
  ];

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 bg-[#000a18] border-b border-[#0C66B4]/30 overflow-hidden">
      {/* Background Hero Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Image
          src="/hero-bg.jpg"
          alt="Janne Sakkinen OMT Physical Therapist"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000a18] via-[#000a18]/90 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* OMT Authority Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0C66B4]/30 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-[#00AEEF]" />
              <span>{SITE_CONFIG.authorTitle} • OMT Physical Therapist</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-display font-normal text-white tracking-wide leading-[1.1]">
              SPECIALIZED IN <span className="text-[#00AEEF]">TEMPOROMANDIBULAR DISORDERS (TMD)</span> &amp; SPINE CARE
            </h1>

            {/* Subtitle / Promise */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Expert diagnosis and physical therapy for jaw joint pain (TMJ), masseter muscle tightness, cervical spine, and workplace ergonomics.
            </p>

            {/* Authority Pills */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-gray-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#000d21] border border-[#0C66B4]/50">
                <ShieldCheck className="w-4 h-4 text-[#00AEEF]" />
                <span>Licensed Healthcare Professional (Valvira / Terhikki Registered)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#000d21] border border-[#0C66B4]/50">
                <GraduationCap className="w-4 h-4 text-[#00AEEF]" />
                <span>University of Oulu (Faculty of Dentistry) since 2017</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#000d21] border border-[#0C66B4]/50">
                <Award className="w-4 h-4 text-[#00AEEF]" />
                <span>SOMTY OMT Specialized</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/free-guide"
                className="px-8 py-4 rounded-xl bg-[#00AEEF] text-black font-bold text-base hover:bg-[#33C2F5] transition-all shadow-glow flex items-center justify-center gap-2 group"
              >
                <span>Get Free PDF Guides</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/videos"
                className="px-8 py-4 rounded-xl bg-[#000d21] border border-[#0C66B4] text-white font-bold text-base hover:border-[#00AEEF] hover:bg-[#001533] transition-all flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 text-[#00AEEF] fill-[#00AEEF]" />
                <span>Explore {SITE_CONFIG.totalVideosCount} Free Videos</span>
              </Link>
            </div>

            {/* Trust Micro-Bullet */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-[#00AEEF]" /> Valvira / Terhikki Registered</span>
              <span>•</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-[#00AEEF]" /> Tiedottajanne Oy</span>
              <span>•</span>
              <a
                href={SITE_CONFIG.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#00AEEF] transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-[#00AEEF]" />
                <span>YouTube: {SITE_CONFIG.youtubeHandle}</span>
              </a>
            </div>

          </div>

          {/* Janne Sakkinen Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl p-2 bg-gradient-to-b from-[#0C66B4] to-[#000a18] shadow-panel">
              <div className="relative rounded-[22px] overflow-hidden aspect-[4/5] bg-[#000d21]">
                <Image
                  src="/janne-sakkinen.jpg"
                  alt="Janne Sakkinen OMT Physical Therapist"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  priority
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000a18] via-transparent to-transparent opacity-80" />

                {/* Floating Bio Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#000d21]/90 backdrop-blur-md border border-[#0C66B4]/60 space-y-1">
                  <h3 className="text-lg font-bold text-white">Janne Sakkinen</h3>
                  <p className="text-xs text-[#00AEEF] font-mono">OMT Physical Therapist &amp; Instructor</p>
                  <p className="text-[11px] text-gray-300 leading-tight">
                    Tiedottajanne Oy • Clinical focus: TMJ joint physical therapy &amp; spinal pain.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 2. CREDIBILITY STATS BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-[#000d21] border border-[#0C66B4]/50 shadow-panel">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex items-center gap-3.5 p-2">
                <div className="w-10 h-10 rounded-xl bg-[#014489]/40 border border-[#00AEEF]/40 text-[#00AEEF] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-bold text-white leading-tight font-display">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-400">
                    {stat.sublabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
