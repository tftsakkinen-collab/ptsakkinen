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
  title: "OMT Physical Therapist Janne Sakkinen | Oulu | TMJ & Jaw Rehabilitation",
  description: "Specialized OMT Physical Therapist Janne Sakkinen in Oulu, Finland. TMJ disorders, masseter myofascial therapy, and dental ergonomics university instructor since 2017.",
  alternates: {
    canonical: "https://www.ptsakkinen.com/",
    languages: {
      "en": "https://www.ptsakkinen.com/",
      "fi": "https://www.ftsakkinen.com/",
      "x-default": "https://www.ftsakkinen.com/",
    },
  },
};

export default async function HomePage() {
  const videos = await fetchYouTubeVideos();
  const featuredVideos = videos.slice(0, 6);

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
        "https://www.youtube.com/@ft_sakkinen",
        "https://www.instagram.com/sakkinenjanne",
        "https://www.tiktok.com/@sakkinenjanne",
        "https://beacons.ai/sakkinenjanne",
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
      "telephone": "+358413274967",
      "email": "tiedottajanne@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Lipunkantajantie 21 G",
        "addressLocality": "Oulu",
        "postalCode": "90670",
        "addressCountry": "FI"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 65.0065,
        "longitude": 25.5415
      },
      "openingHours": [
        "Mo-Fr 08:00-16:00"
      ],
      "priceRange": "€€",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": 12,
        "bestRating": "5"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Physical Therapy Professional" },
          "reviewBody": "An absolute top-tier course! I'm thrilled to apply these clinical assessment and manual tools directly with my patients. Janne teaches with exceptional clarity and an approachable style.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "TMJ Patient" },
          "reviewBody": "Olin kärsinyt leukanivelen naksumisesta ja aamuisesta leuan kireydestä vuosia. Jannen OMT-fysioterapialla ja täsmällisillä leukanivelharjoitteilla leuan kireys ja säryt helpottivat täysin jo kolmessa viikossa.",
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
          "reviewBody": "Olin kärsinyt leikkauksen jälkeisestä selkäkivusta ja pelkäsin jo joutuvani uudelleen leikkauskierteeseen. Jannen tutkimuksen ja täsmällisten liikeohjeiden ansiosta normaali arki ja kivuton liikkuminen palasivat parissa kuukaudessa.",
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
          "reviewBody": "Olen kärsinyt selkäkivuista vuosia ja aiemmin hoito oli vain oireiden peittelyä. Jannen perusteellisessa tutkimuksessa löydettiin vaivan syy, ja täsmällisillä liikeohjeilla selkäkivut kaikkosivat kokonaan ilman lääkkeitä.",
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
          "reviewBody": "Monesti fysioterapiasta saa paperinipun, joka jää pöydälle lojumaan. Janne kuvasi täsmälliset kuntoutusliikkeet suoraan puhelimellani videolle minua varten! Täydellinen tapa varmistaa että liikkeet tekee kotona oikein.",
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
      <Script
        id="homepage-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />

      <section className="py-12 bg-[#000d21] border-b border-[#0C66B4]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
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
              View all 68 clinical videos →
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

      <section className="py-20 bg-[#000a18] border-b border-[#0C66B4]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
                <PlayCircle className="w-4 h-4" />
                <span>Clinical Video Guides</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display text-white tracking-wide">
                POPULAR <span className="text-[#00AEEF]">REHABILITATION VIDEOS</span>
              </h2>
              <p className="text-gray-300 text-sm sm:text-base max-w-xl">
                Evidence-based self-care exercises for temporomandibular joint, masseter, and spinal health.
              </p>
            </div>
            <Link
              href="/videos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#000d21] border border-[#00AEEF] text-[#00AEEF] font-semibold text-sm hover:bg-[#00AEEF] hover:text-[#000a18] transition-all shadow-glow self-start md:self-auto"
            >
              <span>Browse All Videos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      <PatientTestimonialsSection />
      <TrainingsSection />
      <TestimonialsSection />

      <section className="py-16 bg-[#000d21] border-b border-[#0C66B4]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmailLeadForm
            title="DOWNLOAD FREE TMJ & JAW SELF-CARE GUIDE"
            subtitle="Enter your email to receive Janne Sakkinen's clinical 5-page PDF guide (Jaw pain, clicking & bruxism management)."
          />
        </div>
      </section>

      <AppointmentBookingSection />
    </div>
  );
}
