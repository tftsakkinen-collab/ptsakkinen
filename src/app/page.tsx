import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import VideoCard from "@/components/VideoCard";
import EmailLeadForm from "@/components/EmailLeadForm";
import TrainingsSection from "@/components/TrainingsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AppointmentBookingSection from "@/components/AppointmentBookingSection";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { fetchYouTubeVideos } from "@/lib/youtube";
import Script from "next/script";
import type { Metadata } from "next";

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
        "telephone": "+358407675529",
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
      "telephone": "+358407675529",
      "email": "tiedottajanne@gmail.com",
      "url": "https://www.ptsakkinen.com"
    }
  ];

  return (
    <div>
      <Script
        id="homepage-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Appointment Booking Instructions */}
      <AppointmentBookingSection />

      {/* 3. Workshops & Clinical Experience (Truncated) */}
      <TrainingsSection />

      {/* 4. About Section */}
      <AboutSection />

      {/* 5. Lecture & Workshop Reviews */}
      <TestimonialsSection />

      {/* 6. YouTube Clinical Video Library */}
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

          {/* YouTube Video Grid Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>

        </div>
      </section>

      {/* 7. Lead Magnet Banner */}
      <EmailLeadForm />
    </div>
  );
}
