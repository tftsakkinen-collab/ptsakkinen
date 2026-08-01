import TrainingsSection from "@/components/TrainingsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BeaconsWidget from "@/components/BeaconsWidget";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshops, Lectures & CV | PT Sakkinen",
  description: "Explore OMT Physical Therapist Janne Sakkinen's university teaching at University of Oulu, clinical work history, and workshop reviews.",
  alternates: {
    canonical: "https://www.ptsakkinen.com/workshops",
    languages: {
      "en": "https://www.ptsakkinen.com/workshops",
      "fi": "https://www.ftsakkinen.com/koulutukset",
      "x-default": "https://www.ftsakkinen.com/koulutukset",
    },
  },
  openGraph: {
    title: "Workshops, Lectures & CV | PT Sakkinen",
    description: "Explore OMT Physical Therapist Janne Sakkinen's university teaching at University of Oulu, clinical work history, and workshop reviews.",
    url: "https://www.ptsakkinen.com/workshops",
    siteName: "PT Sakkinen - OMT Physical Therapist",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://www.ptsakkinen.com/janne-sakkinen.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Workshops, Lectures & CV | PT Sakkinen",
    description: "Explore OMT Physical Therapist Janne Sakkinen's university teaching at University of Oulu, clinical work history, and workshop reviews.",
    images: ["https://www.ptsakkinen.com/janne-sakkinen.jpg"],
  },
};

export default function WorkshopsPage() {
  return (
    <div className="py-12 bg-[#000a18] min-h-screen space-y-12">
      <TrainingsSection />
      <TestimonialsSection />
      <BeaconsWidget />
    </div>
  );
}
