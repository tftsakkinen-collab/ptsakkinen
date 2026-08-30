import Hero from "@/components/Hero";
import SingleProductLandingSection from "@/components/SingleProductLandingSection";
import ExternalCourseCard from "@/components/ExternalCourseCard";
import AboutSection from "@/components/AboutSection";
import FeaturedMediaSection from "@/components/FeaturedMediaSection";
import VideoCard from "@/components/VideoCard";
import EmailLeadForm from "@/components/EmailLeadForm";
import PatientTestimonialsSection from "@/components/PatientTestimonialsSection";
import AppointmentBookingSection from "@/components/AppointmentBookingSection";
import Link from "next/link";
import { ArrowRight, PlayCircle, BookOpen, GraduationCap } from "lucide-react";
import { fetchYouTubeVideos } from "@/lib/youtube";
import { PersonPhysicianSchema } from "@/components/JsonLdSchemas";
import type { Metadata } from "next";
import Script from "next/script";
import dynamicImport from "next/dynamic";

const SymptomNavigator = dynamicImport(() => import("@/components/SymptomNavigator"), {
  ssr: true,
});

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "OMT Physical Therapist Janne Sakkinen | TMJ & Jaw Therapy",
  description: "OMT Physical Therapist Janne Sakkinen in Oulu, Finland. Specializing in TMJ disorders, jaw pain, and dental ergonomics. University instructor since 2017.",
  alternates: {
    canonical: "https://www.ptsakkinen.com/",
    languages: {
      "en": "https://www.ptsakkinen.com/",
      "fi": "https://www.ftsakkinen.com/",
      "x-default": "https://www.ftsakkinen.com/",
    },
  },
  openGraph: {
    title: "OMT Physical Therapist Janne Sakkinen | TMJ & Jaw Therapy",
    description: "OMT Physical Therapist Janne Sakkinen in Oulu, Finland. Specializing in TMJ disorders, jaw pain, and dental ergonomics. University instructor since 2017.",
    url: "https://www.ptsakkinen.com/",
    siteName: "PT Sakkinen - Physical Therapy",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://www.ptsakkinen.com/janne-sakkinen.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OMT Physical Therapist Janne Sakkinen | TMJ & Jaw Therapy",
    description: "OMT Physical Therapist Janne Sakkinen in Oulu, Finland. Specializing in TMJ disorders, jaw pain, and dental ergonomics. University instructor since 2017.",
    images: ["https://www.ptsakkinen.com/janne-sakkinen.jpg"],
  },
};

export default async function HomePage() {
  const videos = await fetchYouTubeVideos();
  const featuredVideos = videos.slice(0, 3);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Janne Sakkinen",
      "jobTitle": "OMT Physical Therapist",
      "url": "https://www.ptsakkinen.com/about",
      "worksFor": {
        "@type": "Organization",
        "name": "Tiedottajanne Oy",
        "legalName": "Tiedottajanne Oy",
        "image": "https://www.ptsakkinen.com/logo-whitebg.png",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Oulu",
          "addressCountry": "FI"
        },
        "telephone": "+358413274967",
        "email": "tiedottajanne@gmail.com",
        "url": "https://www.ptsakkinen.com"
      },
    }
  ];

  const topics = [
    {
      title: "TMJ Disorders & Bruxism",
      slug: "tmj-and-jaw-pain",
      desc: "Jaw joint clicking, masseter muscle tightness, and facial pain rehabilitation.",
    },
    {
      title: "Neck Pain & Headaches",
      slug: "neck-pain-and-headaches",
      desc: "Cervical spine dysfunction, tension headaches, and cervicogenic pain.",
    },
    {
      title: "Back Pain & Sciatica",
      slug: "back-pain-and-sciatica",
      desc: "Lumbar disc issues, facet joint dysfunction, and sciatic nerve release.",
    },
    {
      title: "Ergonomics & Work Wellness",
      slug: "ergonomics-and-wellness",
      desc: "Clinical ergonomics for dental professionals and remote workstation alignment.",
    },
  ];

  return (
    <div>
      <PersonPhysicianSchema />
      <Script
        id="homepage-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <Hero />

      {/* 1. Single Product Landing Section ($29 USD Core Product per Blueprint) */}
      <SingleProductLandingSection />

      {/* 2. Free TMD & Neck Resources (YouTube Ecosystem Hub) */}
      <SymptomNavigator />

      <section className="py-12 bg-[#000d21] border-b border-[#0C66B4]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-[#67e8f9] text-xs font-bold uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>Symptom Knowledge Hubs</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display text-white">
                EXPLORE <span className="text-[#67e8f9]">CLINICAL TOPIC HUBS</span>
              </h2>
            </div>
            <Link href="/videos" className="text-xs text-[#67e8f9] hover:underline font-semibold">
              View all 69 clinical videos →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topics.map((t, idx) => (
              <Link
                key={idx}
                href={`/topic/${t.slug}`}
                className="p-5 rounded-2xl bg-[#000a18] border border-[#0C66B4]/50 hover:border-[#00AEEF] transition-all space-y-2 group"
              >
                <h3 className="text-base font-bold text-white group-hover:text-[#67e8f9] transition-colors flex items-center justify-between">
                  <span>{t.title}</span>
                  <ArrowRight className="w-4 h-4 text-[#67e8f9] transform group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">{t.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About @pt_sakkinen (Credibility, not CV) */}
      <AboutSection />
      <FeaturedMediaSection />

      {/* 4. For Professionals Section: foxstudy.de External Course Card */}
      <section className="py-16 bg-[#000d21] border-b border-[#0C66B4]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>For Healthcare Professionals</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display text-white">
              PROFESSIONAL <span className="text-amber-400">CMD TRAINING COURSE</span>
            </h2>
          </div>
          <ExternalCourseCard />
        </div>
      </section>

      {/* 5. Featured Clinical Videos */}
      <section className="py-16 bg-[#000a18] border-b border-[#0C66B4]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#67e8f9] text-xs font-bold uppercase tracking-wider">
                <PlayCircle className="w-4 h-4" />
                <span>Clinical Video Guides</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display text-white tracking-wide">
                POPULAR <span className="text-[#67e8f9]">REHABILITATION VIDEOS</span>
              </h2>
            </div>
            <Link
              href="/videos"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#000d21] border border-[#00AEEF] text-[#67e8f9] font-semibold text-xs hover:bg-[#00AEEF] hover:text-[#000a18] transition-all shadow-glow self-start md:self-auto"
            >
              <span>Browse All 69 Videos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Patient Testimonials & Booking */}
      <PatientTestimonialsSection />

      <section className="py-16 bg-[#000d21] border-b border-[#0C66B4]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmailLeadForm
            title="JOIN THE NEWSLETTER & ACCESS FREE EXTRA GUIDES"
            subtitle="Enter your first name and email address below. You'll get immediate access to free additional exercise guides, clinical rehabilitation materials, and new PDF resources as they are published."
          />
        </div>
      </section>

      <AppointmentBookingSection />
    </div>
  );
}
