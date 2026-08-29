import { HeartPulse, Quote, Star } from "lucide-react";

export default function PatientTestimonialsSection() {
  const patientReviews = [
    {
      name: "TMJ & Bruxism Patient",
      condition: "Jaw Pain, Masseter Tension & TMJ Clicking",
      review: "I had suffered from jaw clicking and morning stiffness for years. Janne's OMT physical therapy and targeted jaw joint exercises completely eliminated the tightness and pain within three weeks.",
      stars: 5,
    },
    {
      name: "Spine Rehabilitation Patient",
      condition: "Post-Surgical Lumbar Rehabilitation",
      review: "I was suffering from post-surgical back pain and feared being stuck in a chronic cycle. Thanks to Janne's assessment and precise movement protocols, normal active life returned within months.",
      stars: 5,
    },
    {
      name: "Chronic Back Pain Patient",
      condition: "Facet Joint Locking & Sciatica Pain",
      review: "I suffered from back pain for years, and previous care only masked symptoms. Janne's thorough OMT evaluation identified the root cause, and targeted movements eliminated the pain completely without medication.",
      stars: 5,
    },
    {
      name: "Occupational Health Client (Field Technician)",
      condition: "Lower Back Pain, Lifting Technique & Exercises",
      review: "I visited your clinic for lower back pain. Under your guidance, I learned the correct lifting technique, and I have had virtually no lower back issues since. Whenever mild tightness appears, I do the physical therapy exercises you taught me and get immediate relief. Thank you for your work – fantastic to see results that last!",
      stars: 5,
    },
    {
      name: "Occupational Health Patient",
      condition: "Neck-Shoulder Pain & Video Exercise Guides",
      review: "Usually you get a stack of paper exercises that end up sitting on a desk. Janne recorded tailored exercise videos directly on my smartphone! It made executing the rehabilitation plan at home effortless.",
      stars: 5,
    },
    {
      name: "Telehealth Therapy Patient",
      condition: "Sciatic Radiation & Neck Pain (Remote)",
      review: "I was skeptical about telehealth physical therapy at first, but it surpassed all expectations. Janne diagnosed my leg radiation pain seamlessly over video and guided precise movement vectors. I had my first pain-free day in months.",
      stars: 5,
    },
    {
      name: "Knee Osteoarthritis Patient",
      condition: "Knee Joint Osteoarthritis & Strength Training",
      review: "Janne provided targeted strengthening and stability exercises for my knee osteoarthritis. By spring, targeted progressive training enabled me to comfortably run a half-marathon pain-free!",
      stars: 5,
    },
  ];

  return (
    <section className="py-20 bg-[#000a18] border-b border-[#0C66B4]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#67e8f9] text-xs font-bold uppercase tracking-wider">
            <HeartPulse className="w-4 h-4" />
            <span>Authentic Patient Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display text-white tracking-wide">
            CLINICAL <span className="text-[#67e8f9]">PATIENT REVIEWS</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            See how Janne Sakkinen's OMT physical therapy, TMJ rehabilitation, and targeted exercise guides have helped patients overcome jaw, neck, and spinal conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {patientReviews.map((review, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-[#000d21] border border-[#0C66B4]/40 hover:border-[#00AEEF] transition-all space-y-4 shadow-panel flex flex-col justify-between group text-center items-center"
            >
              <div className="space-y-4 w-full flex flex-col items-center">
                <div className="flex items-center justify-center gap-1 text-amber-400">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-gray-200 leading-relaxed italic text-center break-words">
                  "{review.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#0C66B4]/30 space-y-1 w-full text-center">
                <div className="text-sm font-bold text-white group-hover:text-[#67e8f9] transition-colors text-center">
                  {review.name}
                </div>
                <div className="text-xs text-[#67e8f9] font-medium text-center">
                  {review.condition}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
