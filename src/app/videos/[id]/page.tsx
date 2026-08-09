import { FALLBACK_VIDEOS, Video } from "@/data/videos";
import { getAllVideos, getVideoById } from "@/lib/youtube";
import { CATEGORIES } from "@/data/categories";
import Link from "next/link";
import { ArrowLeft, Download, Sparkles, Globe, Play, ChevronRight, HelpCircle, Home } from "lucide-react";
import { notFound } from "next/navigation";
import Script from "next/script";
import VideoCard from "@/components/VideoCard";
import TranscriptViewer from "@/components/TranscriptViewer";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const videos = await getAllVideos();
  return videos.map((v) => ({
    id: v.id,
  }));
}

// 1. VIDEO-SPECIFIC DYNAMIC META TAGS + HREFLANG FOR SEO & AEO
export async function generateMetadata(props: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const params = await props.params;
  const video = await getVideoById(params.id);

  if (!video) {
    return {};
  }

  const cleanTitle = video.title.length > 45 ? `${video.title.slice(0, 45)}...` : video.title;
  const metaTitle = `${cleanTitle} | PT Sakkinen`;
  const metaDescription = video.promiseDescription.slice(0, 155);
  const canonicalUrl = `https://www.ptsakkinen.com/videos/${video.id}`;
  const pairedFiUrl = video.pairVideoId
    ? `https://www.ftsakkinen.com/videot/${video.pairVideoId}`
    : `https://www.ftsakkinen.com/videot/${video.id}`;
  const imageUrl = video.thumbnailUrl || `https://i2.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`;

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
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 675,
          alt: video.title,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [imageUrl],
    },
  };
}

export default async function SingleVideoPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const video = await getVideoById(params.id);

  if (!video) {
    notFound();
  }

  const category = CATEGORIES.find((c) => c.id === video.categoryId);

  // Related videos from all available videos
  const allVideos = await getAllVideos();
  const relatedVideos = allVideos.filter(
    (v) => v.categoryId === video.categoryId && v.id !== video.id
  ).slice(0, 3);

  // Dynamic video-specific FAQ items
  const cleanTitle = video.title.trim();
  
  const formatCategoryEN = (catId: string) => {
    if (catId === "tmj-bruxism") return "TMJ and jaw rehabilitation";
    if (catId === "ergonomics") return "ergonomics and workplace wellness";
    return "cervical and musculoskeletal rehabilitation";
  };
  const categoryFormatted = formatCategoryEN(video.categoryId);

  // Content type detection for non-exercise videos (Task 2)
  const videoText = (video.title + " " + video.promiseDescription).toLowerCase();
  let contentType = "exercise";
  if (videoText.includes("food") || videoText.includes("diet") || videoText.includes("nutrition") || videoText.includes("inflammation") || videoText.includes("eat")) {
    contentType = "nutrition";
  } else if (videoText.includes("interview") || videoText.includes("story") || videoText.includes("myth") || videoText.includes("qa") || videoText.includes("q&a")) {
    contentType = "interview";
  } else if (videoText.includes("lecture") || videoText.includes("presentation") || videoText.includes("statistic") || videoText.includes("data")) {
    contentType = "lecture";
  }

  let q2Answer = video.transcript
    ? `The video demonstrates specific movement patterns and clinical exercise progressions: ${video.transcript.slice(0, 220).trim()}...`
    : `OMT Physical Therapist Janne Sakkinen guides step-by-step clinical protocols and self-care exercises tailored for ${categoryFormatted}.`;

  if (contentType === "nutrition") {
    q2Answer = `The video provides targeted dietary recommendations, anti-inflammatory nutrition guidelines, and practical lifestyle adjustments. ${video.transcript ? video.transcript.slice(0, 180).trim() + "..." : ""}`;
  } else if (contentType === "interview") {
    q2Answer = `The video features a clinical expert discussion, real-world case analysis, and actionable self-care insights. ${video.transcript ? video.transcript.slice(0, 180).trim() + "..." : ""}`;
  } else if (contentType === "lecture") {
    q2Answer = `The video presents a clinical lecture session with evidence-based data, educational materials, and ergonomic posture guidance. ${video.transcript ? video.transcript.slice(0, 180).trim() + "..." : ""}`;
  }

  const faqItems = [
    {
      question: `What clinical topics are covered in "${cleanTitle}"?`,
      answer: video.promiseDescription,
    },
    {
      question: `How are the instructions in "${cleanTitle}" applied to ${categoryFormatted}?`,
      answer: q2Answer,
    },
    {
      question: `When should you seek an OMT physical therapy consultation for symptoms related to this topic?`,
      answer: `If symptoms relating to "${cleanTitle}" persist for more than 1–2 weeks, interfere with sleep or daily function, an in-person OMT evaluation is recommended to identify the root cause and ensure proper rehabilitation.`,
    },
  ];

  // 2. STRUCTURED DATA (JSON-LD) SCHEMAS: Article, VideoObject, FAQPage, BreadcrumbList
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
      "dateModified": video.publishedAt,
      "mainEntityOfPage": `https://www.ptsakkinen.com/videos/${video.id}`
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": video.title,
      "description": video.promiseDescription,
      "thumbnailUrl": video.thumbnailUrl || `https://i2.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`,
      "uploadDate": video.publishedAt,
      "duration": video.isShort ? "PT59S" : "PT12M30S",
      "embedUrl": `https://www.youtube.com/embed/${video.youtubeId}`,
      "transcript": video.transcript || video.promiseDescription
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
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
          "name": "Videos",
          "item": "https://www.ptsakkinen.com/videos"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": category?.name || "Physical Therapy",
          "item": "https://www.ptsakkinen.com/videos"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": video.title,
          "item": `https://www.ptsakkinen.com/videos/${video.id}`
        }
      ]
    }
  ];

  return (
    <div className="py-12 bg-[#000a18] min-h-screen text-gray-200">
      {/* Inject Video-Specific AEO Structured JSON-LD Data */}
      <Script
        id={`json-ld-schemas-${video.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Navigation & Language Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
          <Link
            href="/videos"
            className="inline-flex items-center gap-2 text-sm text-[#00AEEF] hover:underline font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Video Library</span>
          </Link>
        </div>
        <div className="space-y-4">
          {/* Visible Breadcrumb Navigation - Directly Above Title */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-gray-400 font-medium pb-1">
            <Link href="/" className="hover:text-[#00AEEF] flex items-center gap-1 transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600 shrink-0" />
            <Link href="/videos" className="hover:text-[#00AEEF] transition-colors">
              Videos
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600 shrink-0" />
            <span className="text-[#00AEEF] font-semibold truncate max-w-[150px] sm:max-w-none">
              {category?.name || "Physical Therapy"}
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600 shrink-0" />
            <span className="text-gray-300 truncate max-w-[200px] sm:max-w-xs font-normal">
              {video.title}
            </span>
          </nav>

          <div className="inline-block px-3 py-1 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-semibold uppercase tracking-wider">
            {category?.name || "Physical Therapy"}
          </div>

          <h1 className="text-3xl sm:text-5xl font-display text-white tracking-wide leading-tight">
            {video.title}
          </h1>

          {/* Author E-E-A-T Badge */}
          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-gray-400 border-b border-[#0C66B4]/30 pb-4">
            <span className="font-semibold text-white">Written by Janne Sakkinen</span>
            <span>•</span>
            <span>OMT Physical Therapist, University Instructor</span>
            <span>•</span>
            <span>Updated {video.publishedAt}</span>
          </div>
        </div>

        {/* AEO Direct Answer Box */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#000d21] via-[#014489]/30 to-[#000d21] border border-[#00AEEF]/50 shadow-panel space-y-3">
          <div className="flex items-center gap-2 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>AEO Direct Answer / Key Summary</span>
          </div>
          <p className="text-base text-gray-200 leading-relaxed font-medium">
            {video.promiseDescription}
          </p>
        </div>

        {/* Responsive YouTube Embed Container */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#00AEEF] uppercase tracking-wider">
            <Play className="w-4 h-4" />
            <span>Watch Clinical Video</span>
          </div>
          <div className="relative aspect-video rounded-2xl bg-black border border-[#0C66B4] overflow-hidden shadow-glow">
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Full Text / Video Transcript Section with Expandable View & 100% HTML for Crawlers */}
        <TranscriptViewer transcript={video.transcript || video.promiseDescription} />

        {/* FAQ Section & FAQPage Schema */}
        <div className="space-y-6 pt-6 border-t border-[#0C66B4]/30">
          <div className="flex items-center gap-2 text-white font-display text-2xl">
            <HelpCircle className="w-6 h-6 text-[#00AEEF]" />
            <h2>Frequently Asked Questions (FAQ)</h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#000d21] border border-[#0C66B4]/40 space-y-2"
              >
                <h3 className="text-base font-bold text-white flex items-start gap-2">
                  <span className="text-[#00AEEF]">Q:</span> {faq.question}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cross-linking: Related Videos in Same Category */}
        {relatedVideos.length > 0 && (
          <div className="space-y-6 pt-8 border-t border-[#0C66B4]/30">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Related Physical Therapy Videos &amp; Articles</h3>
              <Link href="/videos" className="text-xs text-[#00AEEF] hover:underline flex items-center gap-1">
                <span>View all</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedVideos.map((rel) => (
                <VideoCard key={rel.id} video={rel} />
              ))}
            </div>
          </div>
        )}

        {/* Lead Magnet CTA Card */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#000d21] via-[#014489]/40 to-[#000d21] border border-[#00AEEF]/50 shadow-glow space-y-4 text-center">
          <div className="w-12 h-12 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center mx-auto">
            <Download className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white">Download Free Exercise PDF Guides</h3>
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

        <p className="text-xs text-gray-400 italic pt-2">
          Medical Disclaimer: The information presented in this article is strictly for educational purposes and does not replace a clinical physical therapy evaluation, medical diagnosis, or individualized treatment plan.
        </p>

      </div>
    </div>
  );
}
