import { SITE_CONFIG } from "@/data/config";
import { ShieldCheck, FileText } from "lucide-react";

export default function LegalPage() {
  return (
    <div className="py-12 md:py-20 bg-[#000a18] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>Legal Documentation</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-display text-white tracking-wide">
            PRIVACY POLICY & <span className="text-[#00AEEF]">MEDICAL DISCLAIMER</span>
          </h1>
        </div>

        <div className="p-8 rounded-3xl bg-[#000d21] border border-[#0C66B4]/40 space-y-8 text-gray-300 text-sm leading-relaxed">
          
          {/* Medical Disclaimer */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#00AEEF]" />
              1. Medical Disclaimer
            </h2>
            <p>
              The content provided on {SITE_CONFIG.domain} and related media channels (including the PT Sakkinen YouTube channel) is intended strictly for educational and informational purposes.
            </p>
            <p>
              The materials, exercises, and recommendations on this site do not establish a patient-therapist relationship and should not be used as a substitute for professional medical diagnosis or treatment. Always consult a qualified physician or licensed physical therapist before beginning any new exercise routine.
            </p>
            <p>
              Stop performing exercises immediately if you experience sharp pain, severe clicking, dizziness, or numbness.
            </p>
          </section>

          {/* Privacy & GDPR */}
          <section className="space-y-3 pt-6 border-t border-[#0C66B4]/30">
            <h2 className="text-xl font-bold text-white">2. Privacy & GDPR Compliance</h2>
            <p>
              We comply with applicable global privacy standards and the EU General Data Protection Regulation (GDPR). We collect personal data (such as email addresses) only with explicit consent for guide delivery and program notifications via Beacons.ai.
            </p>
            <p>
              Your data will never be sold or transferred to unauthorized third parties. You may request deletion of your stored data at any time.
            </p>
          </section>

          {/* Cookie Policy */}
          <section className="space-y-3 pt-6 border-t border-[#0C66B4]/30">
            <h2 className="text-xl font-bold text-white">3. Cookie Policy</h2>
            <p>
              We use essential cookies strictly required for core website functionality and anonymous analytics to improve content delivery.
            </p>
          </section>

          {/* FTC & Amazon Affiliate Disclosure */}
          <section className="space-y-3 pt-6 border-t border-[#0C66B4]/30">
            <h2 className="text-xl font-bold text-white">4. FTC &amp; Amazon Affiliate Disclosure</h2>
            <p>
              PT Sakkinen (ptsakkinen.com) participates in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com (Associate Tag: <code className="text-[#00AEEF] font-mono bg-[#0C66B4]/30 px-1 py-0.5 rounded">ptsakkinen-20</code>).
            </p>
            <p>
              As an Amazon Associate, I earn from qualifying purchases. Clicking on affiliate links or purchasing products through these links does not incur any additional cost to you, but generates a small commission that supports our free physical therapy educational content and video creation.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
