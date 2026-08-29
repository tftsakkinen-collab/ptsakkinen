import Link from "next/link";
import { Download, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";

export default function BeaconsWidget() {
  return (
    <section className="py-16 bg-[#000a18] border-b border-[#0C66B4]/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* In-House Lead Capture Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#000d21] via-[#014489]/30 to-[#000d21] border border-[#00AEEF]/50 shadow-panel relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C66B4]/30 border border-[#00AEEF]/40 text-[#67e8f9] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#67e8f9]" />
              <span>Free Physical Therapy PDF Guides</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display text-white tracking-wide">
              DOWNLOAD FREE <span className="text-[#67e8f9]">PDF GUIDES &amp; MATERIALS</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Enter your name and email to receive instant access to Janne Sakkinen's official Google Drive folder. New physical therapy guides will be added as new videos are released.
            </p>

            <div className="flex items-center gap-4 text-xs text-gray-400 pt-1">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#67e8f9]" /> Zero spam</span>
              <span>•</span>
              <span className="flex items-center gap-1.5"><Download className="w-4 h-4 text-[#67e8f9]" /> Direct Google Drive access</span>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <Link
              href="/free-guide"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#00AEEF] text-black font-bold text-base hover:bg-[#33C2F5] transition-all shadow-glow flex items-center justify-center gap-2 group text-center"
            >
              <span>Get Free PDF Guides</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
