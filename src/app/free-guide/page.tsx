import EmailLeadForm from "@/components/EmailLeadForm";
import { BookOpen, ShieldCheck, Sparkles, FolderDown } from "lucide-react";

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

    </div>
  );
}
