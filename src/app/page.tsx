import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import VideoCard from "@/components/VideoCard";
import EmailLeadForm from "@/components/EmailLeadForm";
import TrainingsSection from "@/components/TrainingsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PatientTestimonialsSection from "@/components/PatientTestimonialsSection";
import AppointmentBookingSection from "@/components/AppointmentBookingSection";
import Link from "next/link";
import { ArrowRight, PlayCircle, BookOpen } from "lucide-react";
import { fetchYouTubeVideos } from "@/lib/youtube";
import Script from "next/script";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "OMT Physical Therapist Janne Sakkinen | Orofacial & TMJ Care",
  description: "Specialized OMT Physical Therapist and University Instructor Janne Sakkinen. TMJ disorders, masseter pain, and physical therapy guides. Explore videos & clinical articles.",
  alternates: {
    canonical: "https://www.ptsakkinen.com/",
    languages: {
      "en": "https://www.ptsakkinen.com/",
      "fi": "https://www.ftsakkinen.com/",
    },
  },
};

export default async function HomePage() {
  const videos = await fetchYouTubeVideos();
  const featuredVideos = videos.slice(0, 6);

  // 5. ORGANIZATION & PERSON JSON-LD SCHEMA FOR HOMEPAGE
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Janne Sakkinen",
      "jobTitle": "OMT Physical Therapist",
      "worksFor": {
        "@type": "Organization",
        "name": "Tiedottajanne Oy",
        "legalName": "Tiedottajanne Oy",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Lipunkantajantie 21 G",
          "addressLocality": "Oulu",
          "postalCode": "90670",
          "addressCountry": "FI"
        },
        "telephone": "+358413274967",
        "email": "tiedottajanne@gmail.com",
        "url": "https://www.ptsakkinen.com"
      },
      "alumniOf": "University of Oulu",
      "sameAs": [
        "https://www.youtube.com/@ftsakkinen",
        "https://www.ftsakkinen.com"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Tiedottajanne Oy - PT Sakkinen",
      "description": "OMT Physical Therapy and Orofacial Rehabilitation Workshops.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Lipunkantajantie 21 G",
        "addressLocality": "Oulu",
        "postalCode": "90670",
        "addressCountry": "FI"
      },
      "telephone": "+358413274967",
      "email": "tiedottajanne@gmail.com",
      "url": "https://www.ptsakkinen.com"
    }
  ];

  const topics = [
    {
      title: "TMJ & Jaw Joint Pain",
      slug: "tmj-and-jaw-pain",
      desc: "Jaw clicking, masseter muscle release, and bruxism rehabilitation.",
    },
    {
      title: "Neck Pain & Headaches",
      slug: "neck-pain-and-headaches",
      desc: "Suboccipital tension, cervical spine mobility, and tension headaches.",
    },
    {
      title: "Back Pain & Sciatica",
      slug: "back-pain-and-sciatica",
      desc: "Lumbar facet joints, disc herniation, and nerve root irritation.",
    },
    {
      title: "Ergonomics & Posture",
      slug: "ergonomics-and-wellness",
      desc: "Dental practitioner ergonomics, desk posture, and micro-break routines.",
    },
  ];

  return (
    <div>
      <Script
        id="homepage-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero Section + Credibility Statistics Bar */}
      <Hero />

      {/* 2. Topic Hubs Quick Links */}
      <section className="py-12 bg-[#000d21] border-b border-[#0C66B4]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>Clinical Topic Hubs</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display text-white">
                EXPLORE <span className="text-[#00AEEF]">TOPIC HUBS</span>
              </h2>
            </div>
            <Link href="/videos" className="text-xs text-[#00AEEF] hover:underline font-semibold">
              Explore all 68 videos →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topics.map((t, idx) => (
              <Link
                key={idx}
                href={`/topic/${t.slug}`}
                className="p-5 rounded-2xl bg-[#000a18] border border-[#0C66B4]/50 hover:border-[#00AEEF] transition-all space-y-2 group"
              >
                <h3 className="text-base font-bold text-white group-hover:text-[#00AEEF] transition-colors flex items-center justify-between">
                  <span>{t.title}</span>
                  <ArrowRight className="w-4 h-4 text-[#00AEEF] group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {t.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Appointment Booking Instructions */}
      <AppointmentBookingSection />

      {/* 4. Patient Testimonials */}
      <PatientTestimonialsSection />

      {/* 5. Workshops & Clinical History */}
      <TrainingsSection />

      {/* 6. About Section */}
      <AboutSection />

      {/* 7. Lecture Reviews */}
      <TestimonialsSection />

      {/* 8. YouTube Clinical Video Library */}
      <section className="py-20 bg-[#000a18] border-b border-[#0C66B4]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-[#00AEEF] text-sm font-semibold uppercase tracking-widest">
                <PlayCircle className="w-4 h-4" />
                <span>Clinical Video Library</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display text-white tracking-wide">
                FULL <span className="text-[#00AEEF]">PHYSICAL THERAPY VIDEOS</span>
              </h2>
            </div>

            <Link
              href="/videos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0C66B4]/20 border border-[#0C66B4] text-[#00AEEF] font-bold text-sm hover:bg-[#00AEEF] hover:text-black transition-all shadow-panel shrink-0"
            >
              <span>Explore all 68 clinical videos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>

        </div>
      </section>

      {/* 9. Lead Magnet Banner */}
      <EmailLeadForm />
    </div>
  );
}
