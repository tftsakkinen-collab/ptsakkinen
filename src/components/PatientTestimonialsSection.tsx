import { Star, HeartPulse, UserCheck } from "lucide-react";

export default function PatientTestimonialsSection() {
  const patientReviews = [
    {
      name: "Matthew K.",
      condition: "TMJ Joint Pain & Clenching",
      review: "Suffered for years from morning jaw stiffness and joint clicking. Janne's OMT therapy and targeted TMJ exercises relieved my jaw tightness within three weeks.",
      stars: 5,
    },
    {
      name: "Sarah M.",
      condition: "Masseter Muscle Tension",
      review: "Facial ache mimicking toothache turned out to originate from masseter muscle trigger points. Clear videos and exercise guides made recovery straightforward.",
      stars: 5,
    },
    {
      name: "John T.",
      condition: "Dental Ergonomics & Neck Pain",
      review: "As a dentist suffering from chronic neck strain, Janne provided immediate ergonomic adjustments and micro-break routines that completely transformed my clinical day.",
      stars: 5,
    },
    {
      name: "Laura S.",
      condition: "Spine & Joint Inflammation",
      review: "A highly professional and thorough OMT Physical Therapist. Clear explanations on long-term joint rehabilitation without unnecessary medical jargon.",
      stars: 5,
    },
  ];

  return (
    <section className="py-20 bg-[#000a18] border-b border-[#0C66B4]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
            <HeartPulse className="w-4 h-4" />
            <span>Patient Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display text-white tracking-wide">
            CLINICAL <span className="text-[#00AEEF]">PATIENT REVIEWS</span>
          </h2>

          <p className="text-gray-300 text-base leading-relaxed">
            See how Janne Sakkinen's specialized OMT physical therapy and clinical guides have helped patients with TMJ disorders, jaw pain, and spinal health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {patientReviews.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#000d21] border border-[#0C66B4]/50 space-y-4 shadow-panel flex flex-col justify-between hover:border-[#00AEEF] transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed italic">
                  "{item.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#0C66B4]/30 space-y-0.5">
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-[#00AEEF]" />
                  <span>{item.name}</span>
                </div>
                <div className="text-[11px] text-[#00AEEF] font-mono">
                  {item.condition}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
