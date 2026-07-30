import AppointmentBookingSection from "@/components/AppointmentBookingSection";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Appointments | OMT Physical Therapist Janne Sakkinen",
  description: "Contact OMT Physical Therapist Janne Sakkinen or book clinical consultations at Terveystalo or Norre Occupational Health.",
  alternates: {
    canonical: "https://www.ptsakkinen.com/contact",
    languages: {
      "en": "https://www.ptsakkinen.com/contact",
      "fi": "https://www.ftsakkinen.com/yhteystiedot",
      "x-default": "https://www.ftsakkinen.com/yhteystiedot",
    },
  },
};

export default function ContactPage() {
  return (
    <div className="py-16 bg-[#000a18] min-h-screen text-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-display text-white tracking-wide">
            CONTACT &amp; <span className="text-[#00AEEF]">APPOINTMENTS</span>
          </h1>
          <p className="text-gray-300 text-base max-w-xl mx-auto">
            Questions regarding physical therapy, university lectures, or corporate ergonomics? Get in touch using the details below.
          </p>
        </div>

        {/* Contact Info Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#000d21] border border-[#0C66B4] shadow-glow space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#00AEEF]" />
                Tiedottajanne Oy
              </h2>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#00AEEF] shrink-0" />
                  <span>Lipunkantajantie 21 G, 90670 Oulu, Finland</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#00AEEF] shrink-0" />
                  <a href="mailto:tiedottajanne@gmail.com" className="hover:underline text-white font-medium">
                    tiedottajanne@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#00AEEF] shrink-0" />
                  <a href="tel:+358413274967" className="hover:underline text-white font-medium">
                    +358 41 327 4967
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#000a18] border border-[#0C66B4]/40 space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">OMT Physical Therapist Janne Sakkinen</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Clinical Specialization: Temporomandibular joint disorders (TMJ/TMD), masseter pain, orofacial therapy, and spinal joint disorders. University instructor at University of Oulu since 2017.
              </p>
            </div>

          </div>
        </div>

        {/* How do I book an appointment? section */}
        <AppointmentBookingSection />
      </div>
    </div>
  );
}
