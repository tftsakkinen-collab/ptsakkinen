import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedMediaSection from "@/components/FeaturedMediaSection";
import VideoCard from "@/components/VideoCard";
import EmailLeadForm from "@/components/EmailLeadForm";
import TrainingsSection from "@/components/TrainingsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PatientTestimonialsSection from "@/components/PatientTestimonialsSection";
import AppointmentBookingSection from "@/components/AppointmentBookingSection";
import Link from "next/link";
import { ArrowRight, PlayCircle, BookOpen } from "lucide-react";
import { fetchYouTubeVideos } from "@/lib/youtube";
import { PersonPhysicianSchema } from "@/components/JsonLdSchemas";
import type { Metadata } from "next";
import Script from "next/script";
import dynamicImport from "next/dynamic";

const SymptomNavigator = dynamicImport(() => import("@/components/SymptomNavigator"), {
  ssr: true,
});

const PhysioAiSearch = dynamicImport(() => import("@/components/PhysioAiSearch"), {
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
      "alumniOf": [
        "Finnish Society of Orthopedic Manual Therapy (SOMTY)",
        "Rovaniemi University of Applied Sciences (RAMK)"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "degree",
          "name": "OMT Physical Therapist (SOMTY 2018–2020)"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "degree",
          "name": "B.Sc. Physical Therapy (RAMK 2007–2010)"
        }
      ],
      "sameAs": [
        "https://www.youtube.com/channel/UCbIWSnSD_k3YoTQSqrzi5Bw",
        "https://www.instagram.com/ptsakkinen/",
        "https://www.tiktok.com/@ptsakkinen",
        "https://beacons.ai/ptsakkinen",
        "https://www.ftsakkinen.com",
        "https://www.ptsakkinen.com"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Tiedottajanne Oy - PT Sakkinen",
      "description": "OMT Physical Therapy and Orofacial Rehabilitation Workshops.",
      "url": "https://www.ptsakkinen.com",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.ptsakkinen.com/janne-sakkinen.jpg",
        "width": 800,
        "height": 1000
      },
      "telephone": "+358413274967",
      "email": "tiedottajanne@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Oulu",
        "addressCountry": "FI"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 65.0121,
        "longitude": 25.4688
      },
      "openingHours": [
        "Mo-Fr 08:00-16:00"
      ],
      "priceRange": "€€",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": 13,
        "bestRating": "5"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Occupational Health Client (Field Technician)" },
          "reviewBody": "I visited your clinic for lower back pain. Under your guidance, I learned the correct lifting technique, and I have had virtually no lower back issues since. Whenever mild tightness appears, I do the physical therapy exercises you taught me and get immediate relief. Thank you for your work – fantastic to see results that last!",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Physical Therapy Professional" },
          "reviewBody": "An absolute top-tier course! I'm thrilled to apply these clinical assessment and manual tools directly with my patients. Janne teaches with exceptional clarity and an approachable style.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "TMJ Patient" },
          "reviewBody": "I had suffered from jaw joint clicking and morning jaw tightness for years. With Janne's OMT physical therapy and precise jaw exercises, the jaw tightness and pain were completely relieved in just three weeks.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Dental Student / University of Oulu" },
          "reviewBody": "An energetic, engaging lecturer! Fantastic presentation, extremely interesting and delivered with great humor. Kept everyone fully focused.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Post-Op Back Pain Patient" },
          "reviewBody": "I had suffered from post-operative back pain and feared I might end up in a cycle of surgeries. Thanks to Janne's thorough clinical examination and targeted movement instructions, my normal daily life and pain-free movement returned in a couple of months.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Orofacial Therapy Workshop Attendee" },
          "reviewBody": "A fresh, inspiring, and deep-dive experience! Clarified complex jaw mechanics and hands-on techniques. The 2-day format is outstanding.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Chronic Back Pain Patient" },
          "reviewBody": "I had suffered from chronic back pain for years and previous care only covered up symptoms. Janne's detailed evaluation identified the root cause, and with precise movement exercises, the back pain disappeared completely without medication.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Dental Healthcare Personnel" },
          "reviewBody": "The most engaging online lecture of the whole series! Practical, highly applicable clinical tools for daily practice. Keep up the great work!",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Occupational Health Client (Video Home Guides)" },
          "reviewBody": "Often you just get a stack of paper exercise sheets from physical therapy that sit on a desk. Janne recorded exact rehabilitation exercise videos directly on my phone for me! A perfect way to ensure exercises are done correctly at home.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        }
      ]
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

      <Hero />

      <SymptomNavigator />

      <section className="py-12 bg-[#000d21] border-b border-[#0C66B4]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>Symptom Knowledge Hubs</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display text-white">
                EXPLORE <span className="text-[#00AEEF]">CLINICAL TOPIC HUBS</span>
              </h2>
            </div>
            <Link href="/videos" className="text-xs text-[#00AEEF] hover:underline font-semibold">
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
                <h3 className="text-base font-bold text-white group-hover:text-[#00AEEF] transition-colors flex items-center justify-between">
                  <span>{t.title}</span>
                  <ArrowRight className="w-4 h-4 text-[#00AEEF] transform group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">{t.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />
      <FeaturedMediaSection />

      <section className="py-16 bg-[#000a18] border-b border-[#0C66B4]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
                <PlayCircle className="w-4 h-4" />
                <span>Clinical Video Guides</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display text-white tracking-wide">
                POPULAR <span className="text-[#00AEEF]">REHABILITATION VIDEOS</span>
              </h2>
              <p className="text-gray-300 text-sm max-w-xl">
                Evidence-based self-care exercises for temporomandibular joint, masseter, and spinal health.
              </p>
            </div>
            <Link
              href="/videos"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#000d21] border border-[#00AEEF] text-[#00AEEF] font-semibold text-xs hover:bg-[#00AEEF] hover:text-[#000a18] transition-all shadow-glow self-start md:self-auto"
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

      <PatientTestimonialsSection />
      <TrainingsSection />

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
