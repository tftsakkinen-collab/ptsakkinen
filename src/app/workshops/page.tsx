import TrainingsSection from "@/components/TrainingsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BeaconsWidget from "@/components/BeaconsWidget";

export const metadata = {
  title: "Workshops, Lectures & Clinical Background — PT Sakkinen",
  description: "Explore OMT physical therapist Janne Sakkinen's professional workshops, university teaching at the University of Oulu, career history, and lecture feedback.",
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
