import Link from "next/link";
import Image from "next/image";
import { Play, Sparkles, Youtube, CheckCircle2, ArrowRight, Eye, Users } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] bg-[#0c0c0c] text-white flex items-center overflow-x-hidden border-b border-white/10 py-16 sm:py-24">
      {/* Background Cinematic Glow Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#00AEEF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#014489]/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-glow">
              <Sparkles className="w-4 h-4 text-[#00AEEF]" />
              <span>@pt_sakkinen • Global YouTube Channel &amp; Physical Therapy</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[1.08] break-words">
                Evidence-Based <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00AEEF] to-[#014489]">
                  Movement &amp; Pain Solutions
                </span>
              </h1>

              <p className="text-gray-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Specialized clinical rehabilitation for TMJ disorders, cervical spine mechanics, and spinal pain by OMT Physical Therapist &amp; Faculty Lecturer Janne Sakkinen.
              </p>
            </div>

            {/* CTAs & YouTube Link */}
            <div className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start items-center">
              <a
                href={SITE_CONFIG.youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-2xl bg-gradient-to-r from-[#00AEEF] to-[#014489] hover:from-[#33C2F5] hover:to-[#0C66B4] text-white font-bold text-sm sm:text-base shadow-[0_0_30px_rgba(0,174,239,0.4)] hover:shadow-[0_0_40px_rgba(0,174,239,0.6)] transition-all flex items-center gap-3 transform active:scale-95 group cursor-pointer"
              >
                <Youtube className="w-5 h-5 text-red-500 fill-current group-hover:scale-110 transition-transform" />
                <span>Watch @pt_sakkinen YouTube</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                href="/videos"
                className="px-6 py-4 rounded-2xl bg-white/5 border border-white/15 hover:border-[#00AEEF] text-white font-semibold text-sm sm:text-base hover:bg-white/10 transition-all backdrop-blur-md flex items-center gap-2"
              >
                <Play className="w-4 h-4 text-[#00AEEF] fill-current" />
                <span>Explore Video Library</span>
              </Link>
            </div>

            {/* Trust Bullets & Stats */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-gray-400 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0" /> Valvira / Terhikki Licensed OMT
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0" /> University of Oulu Lecturer
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-[#00AEEF] shrink-0" /> 1.1M+ YouTube Views
              </span>
            </div>

          </div>

          {/* Right Column: Liquid Glass Card with Janne Sakkinen Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] p-4 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-md shadow-2xl space-y-4 hover:border-[#00AEEF]/50 transition-all group">
              {/* Image Frame */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/janne-sakkinen.jpg"
                  alt="Janne Sakkinen - OMT Physical Therapist"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Channel Badge Overlay */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 border border-[#00AEEF]/40 text-[#00AEEF] text-[11px] font-bold uppercase tracking-wider backdrop-blur-md">
                  @pt_sakkinen
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-left space-y-0.5">
                  <h3 className="text-sm font-bold text-white">Janne Sakkinen</h3>
                  <p className="text-[11px] text-[#00AEEF] font-semibold">OMT Physical Therapist &amp; Specialist</p>
                  <p className="text-[10px] text-gray-400">Faculty Lecturer, University of Oulu (2017–)</p>
                </div>
              </div>

              {/* Mini Channel Metric Card */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center font-bold">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">5,380+ Subscribers</span>
                    <span className="text-[10px] text-gray-400">Global Movement Community</span>
                  </div>
                </div>
                <a
                  href={SITE_CONFIG.youtubeChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-[#00AEEF]/20 text-[#00AEEF] hover:bg-[#00AEEF] hover:text-black font-bold text-[10px] transition-all"
                >
                  Subscribe ↗
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
