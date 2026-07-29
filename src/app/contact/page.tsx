import { SITE_CONFIG } from "@/data/config";
import { Mail, Phone, MapPin, Send, ShieldCheck, Stethoscope } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="py-12 md:py-20 bg-[#000a18] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
            <Mail className="w-4 h-4" />
            <span>Contact &amp; Inquiries</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display text-white tracking-wide">
            GET IN TOUCH OR <span className="text-[#00AEEF]">SEND AN INQUIRY</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg">
            Have questions about workshops, guides, or professional consultations?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#000d21] border border-[#0C66B4] space-y-6 shadow-panel">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Stethoscope className="w-6 h-6 text-[#00AEEF]" />
                Contact Details
              </h2>

              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#00AEEF] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Location</span>
                    <span className="text-xs font-mono text-[#00AEEF]">{SITE_CONFIG.clinicAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#00AEEF] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Email</span>
                    <span className="text-xs font-mono text-[#00AEEF]">{SITE_CONFIG.contactEmail}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#00AEEF] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Phone</span>
                    <span className="text-xs font-mono text-[#00AEEF]">{SITE_CONFIG.contactPhone}</span>
                  </div>
                </div>
              </div>

              {/* Single Authority Proof Rule */}
              <div className="pt-4 border-t border-[#0C66B4]/30 text-xs text-gray-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00AEEF]" />
                <span>{SITE_CONFIG.authorityProofs.teaching}</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form className="p-8 rounded-3xl bg-[#000d21] border border-[#0C66B4] space-y-6 shadow-panel">
              <h2 className="text-2xl font-bold text-white">Send a Message</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    className="w-full px-4 py-3 rounded-xl bg-[#000a18] border border-[#0C66B4] text-white placeholder-gray-500 focus:outline-none focus:border-[#00AEEF] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#000a18] border border-[#0C66B4] text-white placeholder-gray-500 focus:outline-none focus:border-[#00AEEF] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl bg-[#000a18] border border-[#0C66B4] text-white focus:outline-none focus:border-[#00AEEF] text-sm">
                    <option>PDF Guides &amp; Materials</option>
                    <option>Workshops &amp; Keynotes</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-[#000a18] border border-[#0C66B4] text-white placeholder-gray-500 focus:outline-none focus:border-[#00AEEF] text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#00AEEF] text-black font-bold text-base hover:bg-[#33C2F5] transition-all shadow-glow flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
