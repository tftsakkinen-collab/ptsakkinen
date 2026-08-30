import { PROGRAMS } from "@/data/programs";
import ProgramCard from "@/components/ProgramCard";
import TMJGuideSection from "@/components/TMJGuideSection";
import { GraduationCap, HelpCircle } from "lucide-react";
import BeaconsWidget from "@/components/BeaconsWidget";

export default function ProgramsPage() {
  return (
    <div className="py-12 md:py-20 bg-[#000a18] min-h-screen space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#67e8f9] text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>Clinical Video Guides &amp; Programs</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display text-white tracking-wide">
            STRUCTURED <span className="text-[#67e8f9]">REHABILITATION SYSTEMS</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg">
            Evidence-based digital protocols and video guides for jaw tension, TMJ disorders, suboccipital head pain, and spinal rehabilitation.
          </p>
        </div>

        {/* Featured $29 TMJ Video Guide Product Section */}
        <TMJGuideSection />

        {/* Other Programs Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white text-center">
            UPCOMING <span className="text-[#67e8f9]">REHABILITATION SYSTEMS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROGRAMS.slice(1).map((prog) => (
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
              <h3 className="font-bold text-white">How long do I have access to the protocol?</h3>
              <p className="text-xs leading-relaxed">
                You receive lifetime digital access, allowing you to watch and progress completely at your own pace.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-[#014489]/20 border border-[#0C66B4]/30">
              <h3 className="font-bold text-white">Does this replace medical care?</h3>
              <p className="text-xs leading-relaxed">
                No. These protocols provide physical rehabilitation guidance and complement your existing dental or medical care.
              </p>
            </div>
          </div>
        </div>

      </div>

      <BeaconsWidget />
    </div>
  );
}
