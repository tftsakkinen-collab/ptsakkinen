import AppointmentBookingSection from "@/components/AppointmentBookingSection";
import ContactForm from "@/components/ContactForm";
import DarkLocationMap from "@/components/DarkLocationMap";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Appointments | PT Janne Sakkinen",
  description: "Contact OMT Physical Therapist Janne Sakkinen or book clinical consultations at Terveystalo or Norre Occupational Health.",
  alternates: {
    canonical: "https://www.ptsakkinen.com/contact",
    languages: {
      "en": "https://www.ptsakkinen.com/contact",
      "fi": "https://www.ftsakkinen.com/yhteystiedot",
      "x-default": "https://www.ftsakkinen.com/yhteystiedot",
    },
  },
  openGraph: {
    title: "Contact & Appointments | PT Janne Sakkinen",
    description: "Contact OMT Physical Therapist Janne Sakkinen or book clinical consultations at Terveystalo or Norre Occupational Health.",
    url: "https://www.ptsakkinen.com/contact",
    siteName: "PT Sakkinen - OMT Physical Therapist",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://www.ptsakkinen.com/janne-sakkinen.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Appointments | PT Janne Sakkinen",
    description: "Contact OMT Physical Therapist Janne Sakkinen or book clinical consultations at Terveystalo or Norre Occupational Health.",
    images: ["https://www.ptsakkinen.com/janne-sakkinen.jpg"],
  },
};

export default function ContactPage() {
  return (
    <div className="py-16 bg-[#000a18] min-h-screen text-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-display text-white tracking-wide break-words">
            CONTACT &amp; <span className="text-[#67e8f9]">APPOINTMENTS</span>
          </h1>
          <p className="text-gray-300 text-base max-w-xl mx-auto">
            Questions regarding physical therapy, university lectures, or corporate ergonomics? Book an appointment or send a message using the form below.
          </p>
        </div>

        {/* Contact Info Card & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Info Card Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-4 sm:p-8 rounded-3xl bg-[#000d21] border border-[#0C66B4] shadow-glow space-y-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#67e8f9]" />
                Tiedottajanne Oy
              </h2>
              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#67e8f9] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Practices in Oulu, Finland:</span>
                    <span className="text-xs text-gray-400">Terveystalo, Norre Occupational Health &amp; Hammasvahti</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#67e8f9] shrink-0" />
                  <a href="mailto:tiedottajanne@gmail.com" className="hover:underline text-white font-medium">
                    tiedottajanne@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#67e8f9] shrink-0" />
                  <a href="tel:+358413274967" className="hover:underline text-white font-medium">
                    +358 41 327 4967
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#000a18] border border-[#0C66B4]/40 space-y-2">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">OMT Physical Therapist Janne Sakkinen</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Clinical Specialization: Temporomandibular Disorders (TMD), masseter hypertonicity, facial pain, and spine/joint rehabilitation. University of Oulu dentistry lecturer since 2017.
                </p>
              </div>
            </div>

            {/* Interactive Dark Map Embed for Oulu Practice Locations */}
            <DarkLocationMap />
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* Booking Section */}
        <AppointmentBookingSection />
      </div>
    </div>
  );
}
