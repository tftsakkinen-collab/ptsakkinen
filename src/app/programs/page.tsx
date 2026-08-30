import { PROGRAMS } from "@/data/programs";
import ProgramCard from "@/components/ProgramCard";
import { GraduationCap, HelpCircle, BookOpen, ArrowRight, FolderDown } from "lucide-react";
import BeaconsWidget from "@/components/BeaconsWidget";
import Link from "next/link";

export default function ProgramsPage() {
  return (
    <div className="py-12 md:py-20 bg-[#000a18] min-h-screen space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#67e8f9] text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>Free Clinical Video Guides &amp; Materials</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display text-white tracking-wide">
            CLINICAL <span className="text-[#67e8f9]">VIDEO GUIDES &amp; REHABILITATION</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg">
            Access free OMT physical therapy video guides and downloadable PDF protocols for jaw tension, TMJ disorders, posture, and cervical spine health.
          </p>
        </div>

        {/* Free Materials Callout Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#001433] via-[#00122e] to-[#000d21] border-2 border-[#00AEEF]/60 shadow-2xl shadow-cyan-950/40 text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#67e8f9] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>100% Free Video &amp; PDF Library</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
            Unlock Instant Access to All Free Clinical Video Guides
          </h2>

          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Get instant access to Janne Sakkinen's special clinical video guides and downloadable PDF exercises directly in your inbox and Google Drive folder.
          </p>

          <div>
            <Link
              href="/free-guide"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-extrabold text-base hover:from-white hover:to-slate-100 transition-all shadow-[0_0_25px_rgba(0,174,239,0.5)]"
            >
              <FolderDown className="w-5 h-5" />
              <span>Get Free Video &amp; PDF Guides</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white text-center">
            FREE <span className="text-[#67e8f9]">REHABILITATION RESOURCES</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROGRAMS.map((prog) => (
              <ProgramCard key={prog.id} program={prog} />
            ))}
          </div>
        </div>

        {/* FAQ & Trust Box */}
        <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-[#000d21] border border-[#0C66B4]/40 space-y-6">
          <h2 className="text-2xl font-bold text-white text-center flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-[#67e8f9]" />
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
            <div className="space-y-2 p-4 rounded-xl bg-[#014489]/20 border border-[#0C66B4]/30">
              <h3 className="font-bold text-white">Are the video guides really free?</h3>
              <p className="text-xs leading-relaxed">
                Yes! All English video guides and PDF exercise materials are 100% free to access via our Google Drive library.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-[#014489]/20 border border-[#0C66B4]/30">
              <h3 className="font-bold text-white">Does this replace medical care?</h3>
              <p className="text-xs leading-relaxed">
                No. These materials provide physical therapy guidance for educational and home self-care purposes.
              </p>
            </div>
          </div>
        </div>

      </div>

      <BeaconsWidget />
    </div>
  );
}
