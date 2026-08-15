"use client";

import { ExternalLink, Newspaper, Award, Sparkles, Quote } from "lucide-react";

export default function FeaturedMediaSection() {
  const articles = [
    {
      publisher: "Apu.fi / A-lehdet",
      title: "Glute pain worsens when sitting? Try these exercises recommended by a physical therapist",
      desc: "Prolonged sitting or minor injury can irritate the piriformis muscle. OMT Physical Therapist Janne Sakkinen provides 5 targeted self-care techniques to relieve glute pain and piriformis syndrome.",
      quote: "Prolonged sitting irritates the piriformis muscle. Targeted movement therapy and physical therapy exercises relieve nerve compression and pain.",
      url: "https://www.apu.fi/artikkelit/pakarakipu-pahenee-istuessa-kokeile-naita-fysioterapeutin-suosittelemia-harjoitteita",
      badge: "National Media",
      category: "Glute Pain & Piriformis",
    },
    {
      publisher: "Kaleva.fi / Kaleva Media",
      title: "If your face stays relaxed, you are stretching correctly",
      desc: "In an expert feature in Kaleva newspaper, Janne Sakkinen explains core rehabilitation principles: stretching should never cause pain, and facial muscles must remain relaxed.",
      quote: "If your face grimaces in pain, the muscle responds with protective tension. Stretching should always support nervous system relaxation.",
      url: "https://www.kaleva.fi/jos-naama-pysyy-peruslukemilla-venyttelet-oikein-t/12341018",
      badge: "Kaleva Newspaper",
      category: "Stretching & Movement",
    },
    {
      publisher: "LinkedIn Professional Feature",
      title: "Expert Collaboration: Developing Physical Therapy & Rehabilitation Standards",
      desc: "Professional publication and expert panel discussion on developing physical therapy practices, OMT expertise, and multidisciplinary healthcare collaboration.",
      quote: "Collaborating with top experts like Mervi Niippala – multidisciplinary teamwork is key to achieving optimal patient outcomes.",
      url: "https://www.linkedin.com/posts/janne-s%C3%A4kkinen-4868bb221_ly%C3%B6tiin-mervi-niippan-kanssa-p%C3%A4%C3%A4t-yhteen-share-7440686206058790912-YuRP/",
      badge: "LinkedIn Publication",
      category: "Clinical Collaboration",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#000a18] via-[#000d21] to-[#000a18] border-b border-[#0C66B4]/30 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00AEEF]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Newspaper className="w-4 h-4 text-[#00AEEF]" />
            <span>Featured In Media &amp; Publications</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-white tracking-wide">
            JANNE SAKKINEN <span className="text-[#00AEEF]">IN THE MEDIA</span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Read expert articles, interviews, and clinical publications featuring PT Janne Sakkinen in major national press (Apu, Kaleva, professional networks).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <article
              key={idx}
              className="rounded-3xl bg-[#000d21]/90 border border-[#0C66B4]/50 p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[#00AEEF] transition-all duration-300 shadow-panel group hover:-translate-y-1 relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 border-b border-[#0C66B4]/30 pb-4">
                  <span className="text-xs font-bold text-[#00AEEF] uppercase tracking-wider flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#00AEEF]" />
                    {art.publisher}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#014489]/40 border border-[#00AEEF]/30 text-[10px] font-semibold text-gray-300">
                    {art.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-[#00AEEF] transition-colors">
                  {art.title}
                </h3>

                <div className="p-4 rounded-xl bg-[#000a18] border-l-2 border-[#00AEEF] text-xs text-gray-300 italic space-y-1">
                  <div className="flex items-center gap-1 text-[#00AEEF] font-bold not-italic text-[10px]">
                    <Quote className="w-3 h-3" />
                    <span>Key Article Quote:</span>
                  </div>
                  <p className="leading-relaxed">"{art.quote}"</p>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {art.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#0C66B4]/30">
                <a
                  href={art.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#014489]/30 border border-[#00AEEF]/50 text-white font-semibold text-xs hover:bg-[#00AEEF] hover:text-[#000a18] transition-all duration-300 shadow-glow text-center group/btn"
                >
                  <span>Read Article Online</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-[#000a18] border border-[#0C66B4]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left backdrop-blur-md">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-[#00AEEF] shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white">Clinical Research &amp; Academic Expertise</h4>
              <p className="text-xs text-gray-400">Janne Sakkinen serves as a guest lecturer at the University of Oulu and OMT physical therapy specialist.</p>
            </div>
          </div>
          <a
            href="/about"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#0C66B4]/30 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-bold hover:bg-[#00AEEF] hover:text-black transition-all"
          >
            Learn More About Janne →
          </a>
        </div>

      </div>
    </section>
  );
}
