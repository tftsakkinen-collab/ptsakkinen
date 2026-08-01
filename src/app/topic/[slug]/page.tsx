import { FALLBACK_VIDEOS, Video } from "@/data/videos";
import VideoCard from "@/components/VideoCard";
import Link from "next/link";
import { ArrowLeft, BookOpen, Sparkles, Home, ChevronRight, Download } from "lucide-react";
import { notFound } from "next/navigation";
import Script from "next/script";
import type { Metadata } from "next";

interface TopicData {
  slug: string;
  title: string;
  fiSlug: string;
  categoryId: string;
  introSummary: string;
  synthesisHtml: string[];
}

const TOPICS_EN: Record<string, TopicData> = {
  "tmj-and-jaw-pain": {
    slug: "tmj-and-jaw-pain",
    title: "TMJ Disorders, Jaw Joint Clicking & Masseter Pain",
    fiSlug: "leukakipu-ja-tmd",
    categoryId: "tmj-bruxism",
    introSummary: "Comprehensive clinical guide on Temporomandibular Disorders (TMD), masseter myofascial release, joint clicking, and bruxism physical therapy.",
    synthesisHtml: [
      "Temporomandibular Disorders (TMD) are a widespread cause of facial pain, jaw joint clicking, and headaches. The masseter muscle is one of the strongest muscles in the human body, enduring immense mechanical loads during mastication and nocturnal teeth clenching (bruxism).",
      "Common symptoms include morning jaw tightness, limited mouth opening, ear fullness, and teeth misalignment sensations. These originate from anatomical muscle tightness, cervical spine posture, and articular disc displacement within the temporomandibular joint.",
      "Orthopedic Manual Therapy (OMT) approaches TMD holistically through intraoral myofascial release, joint mobilization, cervical spine alignment, and patient-specific home exercises. Clinical physical therapy typically reduces jaw clicking and tightness within 2 to 4 weeks."
    ],
  },
  "neck-pain-and-headaches": {
    slug: "neck-pain-and-headaches",
    title: "Neck Strain, Suboccipital Tightness & Cervicogenic Headaches",
    fiSlug: "niskakipu-ja-päänsärky",
    categoryId: "cervicogenic-neck",
    introSummary: "Clinical synthesis on upper cervical spine dysfunction, neck stiffness, and cervicogenic headache rehabilitation.",
    synthesisHtml: [
      "Neck pain and upper back tightness represent primary complaints treated by OMT Physical Therapists. Upper cervical spine joints (C0–C3) often refer pain to the head, creating cervicogenic headaches felt unilaterally behind the eye, temple, or occiput.",
      "A tight neurological and biomechanical relationship exists between the cervical spine and the temporomandibular joint. Forward head posture in desk work increases masseter and suboccipital muscle activation, requiring paired evaluation of both jaw and neck.",
      "Physical therapy focuses on deep cervical flexor endurance, thoracic spine mobilization, and targeted posture retraining to achieve lasting relief from tension headaches and neck pain."
    ],
  },
  "back-pain-and-sciatica": {
    slug: "back-pain-and-sciatica",
    title: "Low Back Pain, Lumbar Facets & Sciatica Nerve Relief",
    fiSlug: "selkäkipu-ja-iskias",
    categoryId: "cervicogenic-neck",
    introSummary: "Expert guide on lumbar spine biomechanics, facet joint locks, disc herniations, and nerve root decompression.",
    synthesisHtml: [
      "Low back pain and sciatic nerve irritation affect most adults during their lifetime. Sciatica manifests as sharp or burning pain radiating through the gluteal muscle down the leg.",
      "Most low back episodes are mechanical and non-dangerous. Lumbar facet joint restrictions, movement control deficits, and core muscle imbalances are primary triggers.",
      "Active movement is the single most effective intervention. OMT physical therapy assesses directional preference and instructs specific lumbar stabilization exercises to relieve disc pressure."
    ],
  },
  "ergonomics-and-wellness": {
    slug: "ergonomics-and-wellness",
    title: "Dental Ergonomics, Posture Retraining & Micro-breaks",
    fiSlug: "ergonomia-ja-työhyvinvointi",
    categoryId: "ergonomics",
    introSummary: "Clinical ergonomics guide for dental practitioners and desk workers: workload distribution and posture routines.",
    synthesisHtml: [
      "Dental practitioners – dentists and dental hygienists – work daily in asymmetrical, static, forward-bent postures, causing repetitive stress on the cervical spine, upper back, and wrists.",
      "Effective ergonomics combines active posture awareness, equipment adjustment, and targeted micro-break stretches to prevent chronic musculoskeletal disorders.",
      "Janne Sakkinen instructs dental ergonomics at the University of Oulu Faculty of Dentistry and conducts post-graduate ergonomics workshops for healthcare professionals."
    ],
  },
};

const TOPIC_FAQS_EN: Record<string, Array<{ question: string; answer: string }>> = {
  "tmj-and-jaw-pain": [
    {
      question: "What causes jaw pain, TMJ clicking, and bruxism (TMD)?",
      answer: "Temporomandibular Disorders (TMD) are caused by anatomical and functional tightness in jaw muscles, neck-shoulder postural issues, and disc displacement in the temporomandibular joint. The masseter muscle bears significant mechanical stress during chewing and nighttime teeth grinding (bruxism)."
    },
    {
      question: "What are the most common symptoms of temporomandibular disorders (TMD)?",
      answer: "Common symptoms include morning jaw joint tightness, restricted mouth opening, ear fullness or radiating pain, and sensations that teeth do not align properly."
    },
    {
      question: "How are TMJ and jaw disorders treated with Orthopedic Manual Therapy (OMT)?",
      answer: "Treatment includes intraoral myofascial release, joint mobilization, specific cervical spine alignment, and patient-specific home exercises. Targeted physical therapy typically reduces jaw clicking and tightness within 2 to 4 weeks."
    }
  ],
  "neck-pain-and-headaches": [
    {
      question: "What causes cervicogenic (neck-related) headaches?",
      answer: "Dysfunction and stiffness in upper cervical spine joints (C0–C3) can cause cervicogenic headaches, typically felt as unilateral pain behind the eye, temple, or occiput."
    },
    {
      question: "How are neck-shoulder tension and jaw/TMJ disorders connected?",
      answer: "There is a close neurological and anatomical connection between the cervical spine and the temporomandibular joint. Forward head posture in desk work increases masseter and suboccipital muscle activation, requiring paired evaluation of both jaw and neck."
    },
    {
      question: "How is neck pain and cervicogenic headache treated with physical therapy?",
      answer: "Physical therapy focuses on deep cervical flexor endurance, thoracic spine mobilization, and targeted posture retraining to achieve lasting relief from tension headaches and neck pain."
    }
  ],
  "back-pain-and-sciatica": [
    {
      question: "What is sciatica and what are its symptoms?",
      answer: "Sciatica refers to sharp or burning pain caused by nerve root compression in the lumbar spine, radiating through the gluteal muscle down the leg."
    },
    {
      question: "What are common causes of lower back pain?",
      answer: "Most lower back pain is mechanical and benign. Lumbar facet joint restrictions, movement control deficits, and core muscle imbalances are primary triggers."
    },
    {
      question: "What is the most effective physical therapy treatment for back pain and sciatica?",
      answer: "Active movement is the single most effective intervention. OMT physical therapy assesses directional preference and instructs specific lumbar stabilization exercises to relieve disc pressure."
    }
  ],
  "ergonomics-and-wellness": [
    {
      question: "Why are dental professionals particularly prone to neck and back strain?",
      answer: "Dentists and dental hygienists work daily in asymmetrical, static, forward-bent postures, causing repetitive stress on the cervical spine, upper back, and wrists."
    },
    {
      question: "What are key strategies to prevent chronic musculoskeletal disorders in clinical work?",
      answer: "Effective ergonomics combines active posture awareness, equipment adjustment, and targeted micro-break stretches to prevent chronic musculoskeletal disorders."
    },
    {
      question: "Who conducts ergonomic training at the University of Oulu?",
      answer: "OMT Physical Therapist Janne Sakkinen instructs dental ergonomics at the University of Oulu Faculty of Dentistry and conducts post-graduate ergonomics workshops for healthcare professionals."
    }
  ]
};

export async function generateStaticParams() {
  return Object.keys(TOPICS_EN).map((slug) => ({ slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const topic = TOPICS_EN[params.slug] || TOPICS_EN["tmj-and-jaw-pain"];

  const metaTitle = `${topic.title.slice(0, 50)} | PT Sakkinen`;
  const metaDescription = topic.introSummary.slice(0, 155);
  const canonicalUrl = `https://www.ptsakkinen.com/topic/${topic.slug}`;
  const pairedFiUrl = `https://www.ftsakkinen.com/aihe/${topic.fiSlug}`;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en": canonicalUrl,
        "fi": pairedFiUrl,
        "x-default": pairedFiUrl,
      },
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: "PT Sakkinen - Physical Therapy",
      locale: "en_US",
      type: "article",
    },
  };
}

export default async function TopicHubPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const topic = TOPICS_EN[params.slug];

  if (!topic) {
    notFound();
  }

  // Filter related videos by category
  const topicVideos = FALLBACK_VIDEOS.filter((v) => v.categoryId === topic.categoryId);
  const faqs = TOPIC_FAQS_EN[params.slug] || TOPIC_FAQS_EN["tmj-and-jaw-pain"];

  const topicMedicalConditionsEN: Record<string, string> = {
    "tmj-and-jaw-pain": "Temporomandibular Disorders (TMD)",
    "neck-pain-and-headaches": "Neck Pain and Cervicogenic Headaches",
    "back-pain-and-sciatica": "Lower Back Pain and Sciatica",
    "ergonomics-and-wellness": "Clinical Ergonomics for Dental and Office Workers"
  };

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": ["Article", "MedicalWebPage"],
      "headline": topic.title,
      "description": topic.introSummary,
      "medicalAudience": {
        "@type": "MedicalAudience",
        "audienceType": "Patient"
      },
      "lastReviewed": "2026-07-30",
      "reviewedBy": {
        "@type": "Person",
        "name": "Janne Sakkinen",
        "jobTitle": "OMT Physical Therapist",
        "url": "https://www.ptsakkinen.com/about"
      },
      "about": {
        "@type": "MedicalCondition",
        "name": topicMedicalConditionsEN[params.slug] || topic.title
      },
      "author": {
        "@type": "Person",
        "name": "Janne Sakkinen",
        "jobTitle": "OMT Physical Therapist",
        "url": "https://www.ptsakkinen.com/about",
        "worksFor": {
          "@type": "Organization",
          "name": "PT Sakkinen"
        }
      },
      "publisher": {
        "@type": "Organization",
        "name": "PT Sakkinen",
        "url": "https://www.ptsakkinen.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.ptsakkinen.com/logo-whitebg.png",
          "width": 600,
          "height": 60
        }
      },
      "datePublished": "2024-07-24",
      "dateModified": "2026-07-30"
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
          "name": "Topic Hubs",
          "item": "https://www.ptsakkinen.com/videos"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": topic.title,
          "item": `https://www.ptsakkinen.com/topic/${topic.slug}`
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ];

  return (
    <div className="py-12 bg-[#000a18] min-h-screen text-gray-200">
      <Script
        id={`json-ld-topic-${topic.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-gray-400 font-medium">
          <Link href="/" className="hover:text-[#00AEEF] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-600 shrink-0" />
          <Link href="/videos" className="hover:text-[#00AEEF] transition-colors">
            Videos &amp; Topics
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-600 shrink-0" />
          <span className="text-[#00AEEF] font-semibold">{topic.title}</span>
        </nav>

        {/* Top Header */}
        <div className="space-y-4">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-semibold uppercase tracking-wider">
            Clinical Topic Hub &amp; Resource
          </div>

          <h1 className="text-3xl sm:text-5xl font-display text-white tracking-wide leading-tight">
            {topic.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-medium">
            {topic.introSummary}
          </p>
        </div>

        {/* Written Synthesis Article */}
        <article className="p-8 rounded-3xl bg-[#000d21] border border-[#0C66B4]/50 space-y-6 text-sm sm:text-base leading-relaxed text-gray-200 shadow-panel">
          <div className="flex items-center gap-2 text-white font-display text-2xl border-b border-[#0C66B4]/30 pb-3">
            <BookOpen className="w-6 h-6 text-[#00AEEF]" />
            <h2>Clinical Assessment &amp; Rehabilitation Synthesis</h2>
          </div>

          {topic.slug === "tmj-and-jaw-pain" && (
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#0C66B4]/60 my-4 shadow-panel">
              <img src="/janne-tmd-intraoral.jpg" alt="TMJ intraoral physical therapy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000d21] via-transparent to-transparent opacity-80" />
              <span className="absolute bottom-3 left-4 text-xs font-bold text-white">Photo: Intraoral temporomandibular (TMD) manual physical therapy</span>
            </div>
          )}

          {topic.slug === "neck-pain-and-headaches" && (
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#0C66B4]/60 my-4 shadow-panel">
              <img src="/janne-cervical-treatment.jpg" alt="Upper cervical spine OMT mobilization" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000d21] via-transparent to-transparent opacity-80" />
              <span className="absolute bottom-3 left-4 text-xs font-bold text-white">Photo: Upper cervical spine mobilization for cervicogenic headaches</span>
            </div>
          )}

          {topic.slug === "ergonomics-and-wellness" && (
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#0C66B4]/60 my-4 shadow-panel">
              <img src="/janne-workstation.jpg" alt="Digital telehealth & workplace ergonomics" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000d21] via-transparent to-transparent opacity-80" />
              <span className="absolute bottom-3 left-4 text-xs font-bold text-white">Photo: Clinical ergonomics & digital occupational health consultation</span>
            </div>
          )}

          {topic.synthesisHtml.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>

        {/* Video Grid Section */}
        <div className="space-y-6 pt-6 border-t border-[#0C66B4]/30">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-display text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#00AEEF]" />
              <span>Related Clinical Videos ({topicVideos.length} videos)</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topicVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>

        {/* CTA Lead Magnet */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#000d21] via-[#014489]/40 to-[#000d21] border border-[#00AEEF]/50 shadow-glow space-y-4 text-center">
          <div className="w-12 h-12 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center mx-auto">
            <Download className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white">Download Free Topic Exercise PDF Guides</h3>
          <p className="text-sm text-gray-300 max-w-lg mx-auto">
            Get instant access to Janne Sakkinen's official Google Drive folder with exercise guides and rehabilitation protocols.
          </p>
          <Link
            href="/free-guide"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#00AEEF] text-black font-bold text-sm hover:bg-[#33C2F5] transition-all shadow-glow"
          >
            <span>Get Free PDF Guides (Google Drive)</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
