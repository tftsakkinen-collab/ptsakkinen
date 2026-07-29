import { FALLBACK_VIDEOS } from "@/data/videos";
import { CATEGORIES } from "@/data/categories";
import Link from "next/link";
import { ArrowLeft, Download, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";
import Script from "next/script";

export async function generateStaticParams() {
  return FALLBACK_VIDEOS.map((v) => ({
    id: v.id,
  }));
}

export default async function SingleVideoPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const video = FALLBACK_VIDEOS.find((v) => v.id === params.id) || FALLBACK_VIDEOS[0];

  if (!video) {
    notFound();
  }

  const category = CATEGORIES.find((c) => c.id === video.categoryId);

  // JSON-LD Schemas for AEO & SEO (Article, VideoObject, FAQPage)
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": video.title,
      "description": video.promiseDescription,
      "author": {
        "@type": "Person",
        "name": "Janne Sakkinen",
        "jobTitle": "OMT Physical Therapist",
        "worksFor": {
          "@type": "Organization",
          "name": "PT Sakkinen"
        },
        "description": "OMT Physical Therapist, University Trainer in Orofacial Therapy since 2017."
      },
      "publisher": {
        "@type": "Organization",
        "name": "PT Sakkinen",
        "url": "https://www.ptsakkinen.com"
      },
      "datePublished": video.publishedAt,
      "mainEntityOfPage": `https://www.ptsakkinen.com/videos/${video.id}`
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": video.title,
      "description": video.promiseDescription,
      "thumbnailUrl": video.thumbnailUrl || `https://i2.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`,
      "uploadDate": video.publishedAt,
      "duration": "PT07M01S",
      "embedUrl": `https://www.youtube.com/embed/${video.youtubeId}`
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does it take for dietary changes to reduce joint pain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Initial improvements in energy levels and reduced morning stiffness are typically noted within 2 to 4 weeks of consistent anti-inflammatory nutrition."
          }
        },
        {
          "@type": "Question",
          "name": "Does an anti-inflammatory diet replace physical therapy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Nutrition does not replace targeted mechanical exercise or clinical physical therapy assessment, but it provides the essential biological environment for tissues to repair."
          }
        },
        {
          "@type": "Question",
          "name": "Why are EPA and DHA omega-3s critical for inflammation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The human body requires EPA and DHA to produce resolvins and protectins—molecules that actively terminate the inflammatory response."
          }
        }
      ]
    }
  ];

  return (
    <div className="py-12 bg-[#000a18] min-h-screen text-gray-200">
      {/* Inject AEO Structured JSON-LD Data */}
      <Script
        id="json-ld-schemas"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Back navigation */}
        <Link
          href="/videos"
          className="inline-flex items-center gap-2 text-sm text-[#00AEEF] hover:underline font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Video Library</span>
        </Link>

        {/* Article Header */}
        <div className="space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-semibold uppercase tracking-wider">
            {category?.name || "Musculoskeletal Therapy"}
          </div>

          <h1 className="text-3xl sm:text-5xl font-display text-white tracking-wide leading-tight">
            {video.title}
          </h1>

          {/* Author E-E-A-T Badge */}
          <div className="flex items-center gap-3 pt-2 text-xs text-gray-400 border-b border-[#0C66B4]/30 pb-4">
            <span className="font-semibold text-white">Written by Janne Sakkinen</span>
            <span>•</span>
            <span>OMT Physical Therapist, University Instructor</span>
            <span>•</span>
            <span>Published {video.publishedAt}</span>
          </div>
        </div>

        {/* AEO Direct Answer Box */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#000d21] via-[#014489]/30 to-[#000d21] border border-[#00AEEF]/50 shadow-panel space-y-3">
          <div className="flex items-center gap-2 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>AEO Direct Answer / Executive Summary</span>
          </div>
          <p className="text-base text-gray-200 leading-relaxed font-medium">
            Persistent tendon, joint, or spinal pain that fails to heal is often perpetuated by low-grade systemic chronic inflammation. This silent inflammation heightens pain sensitivity and delays tissue repair. Incorporating fatty fish (omega-3s), colorful vegetables, and extra virgin olive oil while eliminating ultra-processed foods effectively calms systemic inflammation.
          </p>
        </div>

        {/* Responsive YouTube Embed Container */}
        <div className="relative aspect-video rounded-2xl bg-black border border-[#0C66B4] overflow-hidden shadow-glow">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {/* Main Article Body */}
        <article className="space-y-8 text-base leading-relaxed text-gray-300">
          
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display text-white">
              What Is Low-Grade Chronic Inflammation?
            </h2>
            <p className="font-semibold text-gray-200">
              Low-grade chronic inflammation is a persistent, low-level activation of the immune system that does not cause acute swelling but keeps body tissues hypersensitive.
            </p>
            <p>
              Unlike acute inflammation (such as an ankle sprain with immediate redness and repair completing in a week), chronic inflammation operates like a low-burning stove in the background. It does not show up clearly in a mirror, but blood tests often reveal elevated systemic inflammatory markers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display text-white">
              Why Does Systemic Inflammation Delay Tissue Healing?
            </h2>
            <p className="font-semibold text-gray-200">
              Persistent inflammation sensitizes the central nervous system and impairs the ability of tendons, joints, and muscles to repair themselves after rehabilitation exercise.
            </p>
            <p>
              When your body stays in a constant state of low-grade inflammation, normal mechanical stress on joints and tendons triggers a higher pain signal, and recovery slows down noticeably.
            </p>
            
            <div className="p-4 rounded-xl bg-[#000d21] border border-[#0C66B4]/50 space-y-2">
              <h3 className="font-bold text-white text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00AEEF]" />
                Clinical Insight:
              </h3>
              <p className="text-xs text-gray-300">
                You cannot exercise away chronic inflammation if your diet feeds it every day. Nutrition creates the biological foundation for exercise loading to succeed.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display text-white">
              3 Science-Backed Dietary Changes to Lower Pain
            </h2>

            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-[#000d21] border border-[#0C66B4]/40 space-y-2">
                <h3 className="text-lg font-bold text-[#00AEEF] flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#00AEEF]" />
                  1. Eat Fatty Fish at Least Twice a Week
                </h3>
                <p className="text-sm">
                  Salmon, mackerel, and sardines are rich sources of EPA and DHA omega-3 fatty acids that actively signal inflammation to shut down.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#000d21] border border-[#0C66B4]/40 space-y-2">
                <h3 className="text-lg font-bold text-[#00AEEF] flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#00AEEF]" />
                  2. Add More Colors to Your Plate
                </h3>
                <p className="text-sm">
                  The pigment in every vegetable, berry, and fruit supplies your body with diverse biochemical tools to downregulate inflammation.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#000d21] border border-[#0C66B4]/40 space-y-2">
                <h3 className="text-lg font-bold text-[#00AEEF] flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#00AEEF]" />
                  3. Switch Your Primary Cooking Fat to Extra Virgin Olive Oil
                </h3>
                <p className="text-sm">
                  Extra virgin olive oil contains oleocanthal, which inhibits inflammatory enzymes along the exact same pathway as ibuprofen.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="space-y-6 pt-6 border-t border-[#0C66B4]/30">
            <h2 className="text-2xl sm:text-3xl font-display text-white">
              Frequently Asked Questions (FAQ)
            </h2>

            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-[#000d21] border border-[#0C66B4]/30 space-y-2">
                <h3 className="font-bold text-white text-base">
                  How long does it take for dietary changes to reduce joint pain?
                </h3>
                <p className="text-sm text-gray-300">
                  Initial improvements in energy levels and reduced morning stiffness are typically noted within 2 to 4 weeks of consistent anti-inflammatory nutrition.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#000d21] border border-[#0C66B4]/30 space-y-2">
                <h3 className="font-bold text-white text-base">
                  Does an anti-inflammatory diet replace physical therapy?
                </h3>
                <p className="text-sm text-gray-300">
                  No. Nutrition does not replace targeted mechanical exercise or clinical physical therapy assessment, but it provides the essential biological environment for tissues to repair.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#000d21] border border-[#0C66B4]/30 space-y-2">
                <h3 className="font-bold text-white text-base">
                  Why are EPA and DHA omega-3s critical for inflammation?
                </h3>
                <p className="text-sm text-gray-300">
                  The human body requires EPA and DHA to produce resolvins and protectins—molecules that actively terminate the inflammatory response.
                </p>
              </div>
            </div>
          </section>

          {/* Lead Magnet CTA Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-[#000d21] via-[#014489]/40 to-[#000d21] border border-[#00AEEF]/50 shadow-glow space-y-4 text-center">
            <div className="w-12 h-12 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center mx-auto">
              <Download className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Download Free PDF Physical Therapy Guides</h3>
            <p className="text-sm text-gray-300 max-w-lg mx-auto">
              Get instant access to Janne Sakkinen's official Google Drive folder with exercise guides and rehabilitation protocols.
            </p>
            <Link
              href="/free-guide"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#00AEEF] text-black font-bold text-sm hover:bg-[#33C2F5] transition-all shadow-glow"
            >
              <span>Download Free PDF Guides</span>
            </Link>
          </div>

          <p className="text-xs text-gray-400 italic pt-4">
            Medical Disclaimer: The information presented in this article is strictly for educational purposes and does not replace a clinical physical therapy evaluation, medical diagnosis, or individualized treatment plan.
          </p>

        </article>

      </div>
    </div>
  );
}
