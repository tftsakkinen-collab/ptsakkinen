import EmailLeadForm from "@/components/EmailLeadForm";
import { BookOpen, ShieldCheck, Sparkles, FolderDown } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Rehabilitation PDF Guides & Materials | PT Sakkinen",
  description: "Access official physical therapy exercise PDF guides and clinical TMJ rehabilitation resources via Janne Sakkinen's Google Drive folder.",
  alternates: {
    canonical: "https://www.ptsakkinen.com/free-guide",
    languages: {
      "en": "https://www.ptsakkinen.com/free-guide",
      "fi": "https://www.ftsakkinen.com/ilmaisopas",
      "x-default": "https://www.ftsakkinen.com/ilmaisopas",
    },
  },
  openGraph: {
    title: "Free Rehabilitation PDF Guides & Materials | PT Sakkinen",
    description: "Access official physical therapy exercise PDF guides and clinical TMJ rehabilitation resources via Janne Sakkinen's Google Drive folder.",
    url: "https://www.ptsakkinen.com/free-guide",
    siteName: "PT Sakkinen - OMT Physical Therapist",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://www.ptsakkinen.com/logo-whitebg.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Rehabilitation PDF Guides & Materials | PT Sakkinen",
    description: "Access official physical therapy exercise PDF guides and clinical TMJ rehabilitation resources via Janne Sakkinen's Google Drive folder.",
    images: ["https://www.ptsakkinen.com/logo-whitebg.png"],
  },
};

export default function FreeGuidePage() {
  return (
    <div className="py-12 md:py-20 bg-[#000a18] min-h-screen space-y-16">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-4 h-4" />
          <span>Physical Therapy &amp; Rehab Materials</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-display text-white tracking-wide">
          FREE <span className="text-[#00AEEF]">PDF GUIDES &amp; MATERIALS</span>
        </h1>

        <p className="text-gray-300 text-base sm:text-lg">
          Subscribe to receive instant access to Janne Sakkinen's official Google Drive folder. New PDF guides will be added to the folder as new videos and materials are released.
        </p>
      </div>

      {/* Main Email Lead Capture Form */}
      <EmailLeadForm />

      {/* Trust & Drive Info Box */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-[#000d21] border border-[#0C66B4]/40 flex flex-col md:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-[#014489]/30 border border-[#00AEEF]/40 text-[#00AEEF] flex items-center justify-center shrink-0">
            <FolderDown className="w-7 h-7" />
          </div>
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-white">Google Drive Folder Updates</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              When you enter your name and email address above, you will instantly receive the direct link to the English Google Drive folder. All new physical therapy PDF guides (TMJ, bruxism, posture, spine) will be placed inside as they are released.
            </p>
          </div>
        </div>
      </div>

      {/* What's Included in the PDF Guides Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-display text-white uppercase tracking-wide">
            WHAT IS INCLUDED IN <span className="text-[#00AEEF]">YOUR PDF GUIDES</span>
          </h2>
          <p className="text-sm text-gray-300">
            Clinical protocols developed by OMT Physical Therapist Janne Sakkinen for home practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#000d21] to-[#000814] border border-[#0C66B4]/40 hover:border-[#00AEEF]/60 transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#014489]/40 border border-[#00AEEF]/40 text-[#00AEEF] flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="font-bold text-lg text-white">TMJ &amp; Masseter Protocols</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Step-by-step intraoral and extraoral masseter myofascial release, pterygoid decompression, and tongue resting alignment for jaw pain and teeth clenching.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#000d21] to-[#000814] border border-[#0C66B4]/40 hover:border-[#00AEEF]/60 transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#014489]/40 border border-[#00AEEF]/40 text-[#00AEEF] flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="font-bold text-lg text-white">Ergonomics &amp; Workstation Alignment</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Calculated chair heights, monitor distances, pipetting &amp; lab posture adjustments, and 30-second micro-break routines for remote desk workers and dental professionals.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#000d21] to-[#000814] border border-[#0C66B4]/40 hover:border-[#00AEEF]/60 transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#014489]/40 border border-[#00AEEF]/40 text-[#00AEEF] flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="font-bold text-lg text-white">Spine &amp; Cervicogenic Headache Release</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Thoracic rotation drills, chin tucks, sciatic nerve glides, and lumbar decompression protocols to restore full mobility.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
