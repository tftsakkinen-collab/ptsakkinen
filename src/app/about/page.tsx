import { SITE_CONFIG } from "@/data/config";
import { Award, GraduationCap, Briefcase, BookOpen, CheckCircle2, ShieldCheck, FileCheck, ArrowRight, User, MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Janne Sakkinen | OMT Physical Therapist & Instructor",
  description: "Learn about Janne Sakkinen, specialized OMT Physical Therapist (SOMTY) and clinical ergonomics instructor at the University of Oulu Faculty of Dentistry (since 2017).",
  alternates: {
    canonical: "https://www.ptsakkinen.com/about",
    languages: {
      "en": "https://www.ptsakkinen.com/about",
      "fi": "https://www.ftsakkinen.com/tietoa-minusta",
      "x-default": "https://www.ftsakkinen.com/tietoa-minusta",
    },
  },
};

export default function AboutPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "mainEntity": {
        "@type": "Person",
        "name": "Janne Sakkinen",
        "jobTitle": "OMT Physical Therapist",
        "url": "https://www.ptsakkinen.com/about",
        "description": "Specialized OMT Physical Therapist and Clinical Ergonomics Instructor at the University of Oulu Faculty of Dentistry since 2017.",
        "worksFor": {
          "@type": "Organization",
          "name": "PT Sakkinen",
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
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.ptsakkinen.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://www.ptsakkinen.com/about"
        }
      ]
    }
  ];

  const degrees = [
    {
      degree: "OMT Physical Therapy Specialization (2.5 years)",
      institution: "Finnish Society of Orthopedic Manual Therapy (SOMTY)",
      duration: "1/2018 – 8/2020",
      description: "Highest postgraduate specialization in musculoskeletal manual physical therapy.",
    },
    {
      degree: "B.Sc. Physical Therapy (3.5 years)",
      institution: "Rovaniemi University of Applied Sciences (RAMK)",
      duration: "9/2007 – 12/2010",
      description: "Bachelor of Science in Physical Therapy.",
    },
    {
      degree: "Electronics & Electrical Technician (3 years)",
      institution: "Koillis-Pohjanmaa Vocational College",
      duration: "8/2001 – 5/2004",
    },
  ];

  const workExp = [
    { title: "Occupational Physical Therapist", organization: "Norre Occupational Health — Kempele", period: "2/2025 – Present" },
    { title: "Clinical Course Instructor (TMJ Therapy)", organization: "Summer University of Northern Ostrobothnia", period: "2024 – Present" },
    { title: "Digital Occupational Physical Therapist", organization: "Terveystalo", period: "8/2023 – Present" },
    { title: "Visiting University Lecturer & Ergonomics Specialist", organization: "University of Oulu, Faculty of Dentistry", period: "1/2017 – Present" },
    { title: "Occupational Physical Therapist", organization: "Terveystalo", period: "1/2014 – Present" },
  ];

  return (
    <div className="py-12 bg-[#000a18] min-h-screen text-gray-200 space-y-16">
      <Script
        id="json-ld-about-en"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header / Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#00AEEF] shadow-glow">
              <img
                src="/janne-sakkinen.jpg"
                alt="Janne Sakkinen OMT Physical Therapist"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000d21] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#000d21]/90 border border-[#00AEEF] backdrop-blur-md flex items-center gap-3 text-[#00AEEF] text-xs font-bold shadow-glow">
                <Award className="w-5 h-5 shrink-0" />
                <span>OMT Physical Therapist (SOMTY 2018–2020)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
              <User className="w-4 h-4" />
              <span>About &amp; Clinical Background</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-display text-white tracking-wide leading-tight">
              JANNE SAKKINEN <span className="text-[#00AEEF]">— OMT PHYSICAL THERAPIST</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium">
              Specialized Orthopedic Manual Physical Therapist (OMT) and clinical ergonomics instructor at the University of Oulu Faculty of Dentistry.
            </p>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                My clinical practice focuses on non-surgical rehabilitation of temporomandibular disorders (TMD), masseter hypertonicity, cervicogenic headaches, and complex spine dysfunction.
              </p>
              <p>
                Since 2017, I have instructed dental ergonomics for dental students at the University of Oulu Faculty of Dentistry and conducted post-graduate TMJ physical therapy workshops for healthcare professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#000d21] border border-[#0C66B4]/60 flex items-start gap-3">
                <GraduationCap className="w-6 h-6 text-[#00AEEF] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-bold text-sm">University Instructor (2017–)</h3>
                  <p className="text-xs text-gray-400 mt-1">University of Oulu, Faculty of Dentistry</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#000d21] border border-[#0C66B4]/60 flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-[#00AEEF] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-bold text-sm">OMT Specialization</h3>
                  <p className="text-xs text-gray-400 mt-1">SOMTY 2.5 Years (2018–2020)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed CV Sections */}
        <div className="space-y-10 pt-8 border-t border-[#0C66B4]/30">
          <div className="space-y-6">
            <h2 className="text-2xl font-display text-white flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-[#00AEEF]" />
              <span>Education &amp; Credentials</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {degrees.map((deg, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#000d21] border border-[#0C66B4]/50 space-y-2">
                  <span className="text-xs font-mono text-[#00AEEF] px-2.5 py-1 rounded-md bg-[#014489]/30 inline-block">
                    {deg.duration}
                  </span>
                  <h3 className="text-base font-bold text-white pt-1">{deg.degree}</h3>
                  <p className="text-xs text-gray-300 font-medium">{deg.institution}</p>
                  {deg.description && <p className="text-xs text-gray-400 pt-2 leading-relaxed">{deg.description}</p>}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-display text-white flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-[#00AEEF]" />
              <span>Clinical Experience &amp; Appointments</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {workExp.map((work, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#000d21] border border-[#0C66B4]/50 space-y-2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-white">{work.title}</h3>
                      <span className="text-xs font-mono text-[#00AEEF] bg-[#014489]/30 px-2.5 py-1 rounded-md">
                        {work.period}
                      </span>
                    </div>
                    <p className="text-xs text-gray-300 font-medium pt-1">{work.organization}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
