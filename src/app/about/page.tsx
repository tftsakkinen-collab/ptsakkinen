import { SITE_CONFIG } from "@/data/config";
import { Award, GraduationCap, Briefcase, BookOpen, CheckCircle2, ShieldCheck, FileCheck, ArrowRight, User, MapPin, Mail, Phone, Users, HeartHandshake, Target, Compass } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Janne Sakkinen & Philosophy | OMT Physical Therapist",
  description: "Learn about Janne Sakkinen, specialized OMT Physical Therapist (SOMTY), Occupational Physical Therapy Specialist, University Instructor at the University of Oulu Faculty of Dentistry (since 2017), and practice philosophy.",
  alternates: {
    canonical: "https://www.ptsakkinen.com/about",
    languages: {
      "en": "https://www.ptsakkinen.com/about",
      "fi": "https://www.ftsakkinen.com/tietoa-minusta",
      "x-default": "https://www.ftsakkinen.com/tietoa-minusta",
    },
  },
  openGraph: {
    title: "About Janne Sakkinen & Philosophy | OMT Physical Therapist",
    description: "Learn about Janne Sakkinen, specialized OMT Physical Therapist (SOMTY), Occupational Physical Therapy Specialist, University Instructor at the University of Oulu Faculty of Dentistry (since 2017), and practice philosophy.",
    url: "https://www.ptsakkinen.com/about",
    siteName: "PT Sakkinen - OMT Physical Therapist",
    locale: "en_US",
    type: "profile",
    images: [{ url: "https://www.ptsakkinen.com/janne-sakkinen.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Janne Sakkinen & Philosophy | OMT Physical Therapist",
    description: "Learn about Janne Sakkinen, specialized OMT Physical Therapist (SOMTY), Occupational Physical Therapy Specialist, University Instructor at the University of Oulu Faculty of Dentistry (since 2017), and practice philosophy.",
    images: ["https://www.ptsakkinen.com/janne-sakkinen.jpg"],
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
        "jobTitle": "OMT Physical Therapist & Occupational Health Specialist",
        "url": "https://www.ptsakkinen.com/about",
        "description": "Specialized OMT Physical Therapist, Occupational Health Specialist, and Clinical Ergonomics Instructor at the University of Oulu Faculty of Dentistry since 2017. Driven by a deep passion for promoting physical capacity and functional well-being in work environments. Specialized in treating complex musculoskeletal issues and temporomandibular disorders (TMD). I believe the best client experience comes from open communication, trust, evidence-based manual therapy, and tailored active movement coaching.",
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
          "https://www.youtube.com/@pt_sakkinen",
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
          "name": "About & Philosophy",
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
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
                <span>OMT Physical Therapist &amp; Occupational Health Specialist</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
              <User className="w-4 h-4" />
              <span>Professional Profile &amp; Background</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-display text-white tracking-wide leading-tight">
              JANNE SAKKINEN <span className="text-[#00AEEF]">— OMT PHYSICAL THERAPIST</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium">
              Experienced OMT Physical Therapist, Occupational Health Specialist, and Clinical Ergonomics Instructor at the University of Oulu Faculty of Dentistry.
            </p>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                My clinical practice centers on non-surgical prevention and rehabilitation of temporomandibular disorders (TMD), masseter hypertonicity, cervicogenic headaches, and occupational musculoskeletal disorders.
              </p>
              <p>
                As an independent practitioner at Terveystalo (digital and clinical occupational health) and Norre Occupational Health, I combine open communication, evidence-based manual therapy, and active movement coaching.
              </p>
              <p>
                For over 7 years (since 2017), I have served as a visiting lecturer and ergonomics specialist at the University of Oulu Faculty of Dentistry, developing clinical ergonomic protocols for dental practitioners.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#000d21] border border-[#0C66B4]/60 flex items-start gap-3">
                <GraduationCap className="w-6 h-6 text-[#00AEEF] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-bold text-sm">University Instructor (2017–)</h3>
                  <p className="text-xs text-gray-400 mt-1">University of Oulu, Faculty of Dentistry (7+ years)</p>
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

        {/* Section: Why I do this work & Practice Philosophy */}
        <div className="space-y-10 p-8 sm:p-10 rounded-3xl bg-[#000d21] border border-[#0C66B4]/60 shadow-panel">
          
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#014489]/40 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>Why I do this work</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-display text-white">
              PASSION FOR PHYSICAL PERFORMANCE &amp; <span className="text-[#00AEEF]">TAILORED SOLUTIONS</span>
            </h2>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed max-w-4xl">
              <p>
                I&apos;m driven by a deep passion for promoting physical capacity and functional well-being — especially in work environments. Since 2010, I&apos;ve worked extensively in occupational physiotherapy and musculoskeletal rehabilitation, and I currently practice in both traditional and digital occupational health at Terveystalo.
              </p>
              <p>
                My core expertise lies in orthopedic manual therapy (OMT), ergonomics, and evidence-based physiotherapy. Over the years, I&apos;ve specialized in treating complex musculoskeletal issues and guiding individuals toward sustainable physical performance in their everyday lives and professions. Whether it&apos;s a dentist with chronic neck pain or a desk worker battling lower back stiffness, I&apos;m driven by the challenge of finding practical, tailored solutions.
              </p>
              <p>
                In addition to clinical work, I&apos;ve spent over seven years as a visiting lecturer at the University of Oulu&apos;s Faculty of Dentistry, teaching ergonomic strategies to future professionals. I also lecture nationwide on TMJ (temporomandibular joint) dysfunction and its therapy — an area I&apos;ve developed deep specialization in. My aim is always the same: to bridge high-level knowledge with concrete tools that empower both professionals and patients.
              </p>
            </div>
          </div>

          {/* Cards: Trust & Collaboration */}
          <div className="pt-6 border-t border-[#0C66B4]/30 space-y-6">
            <h3 className="text-xl font-display text-white flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-[#00AEEF]" />
              <span>Trust &amp; Collaboration</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#000a18] border border-[#0C66B4]/40 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Solution-Focused Approach</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  I&apos;ve received consistent feedback from colleagues and clients about my positive attitude and solution-focused approach. I believe the best client experience comes from open communication, trust, and careful planning.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#000a18] border border-[#0C66B4]/40 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Empowering Professionals &amp; Patients</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  These experiences serve me daily in clinical practice and university instruction by bridging academic research with practical, real-world tools.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Clinical Practice Gallery */}
        <div className="space-y-6 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display text-white">
              CLINICAL PRACTICE &amp; <span className="text-[#00AEEF]">TREATMENT TECHNIQUES</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Authentic clinical photography of OMT physical therapy assessment, TMJ manual therapy, and digital ergonomics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#0C66B4]/60 group shadow-panel">
              <img
                src="/janne-tmd-intraoral.jpg"
                alt="Intraoral TMJ physical therapy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000d21] via-transparent to-transparent opacity-85" />
              <span className="absolute bottom-3 left-3 right-3 text-xs font-bold text-white leading-tight">
                Temporomandibular (TMD) Intraoral Therapy
              </span>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#0C66B4]/60 group shadow-panel">
              <img
                src="/janne-cervical-treatment.jpg"
                alt="Cervical spine OMT mobilization"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000d21] via-transparent to-transparent opacity-85" />
              <span className="absolute bottom-3 left-3 right-3 text-xs font-bold text-white leading-tight">
                Upper Cervical OMT Mobilization
              </span>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#0C66B4]/60 group shadow-panel">
              <img
                src="/janne-tmd-examination.jpg"
                alt="TMJ and masseter palpation and examination"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000d21] via-transparent to-transparent opacity-85" />
              <span className="absolute bottom-3 left-3 right-3 text-xs font-bold text-white leading-tight">
                Masseter &amp; TMJ Joint Palpation
              </span>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#0C66B4]/60 group shadow-panel">
              <img
                src="/janne-workstation.jpg"
                alt="Digital telehealth & workplace ergonomics"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000d21] via-transparent to-transparent opacity-85" />
              <span className="absolute bottom-3 left-3 right-3 text-xs font-bold text-white leading-tight">
                Digital Telehealth &amp; Ergonomics
              </span>
            </div>
          </div>
        </div>

        {/* Detailed CV Sections */}
        <div className="space-y-12 pt-8 border-t border-[#0C66B4]/30">
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
