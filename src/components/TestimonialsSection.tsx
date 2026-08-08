import { MessageSquareQuote, Star, UserCheck, CheckCircle2 } from "lucide-react";

export default function TestimonialsSection() {
  const realTestimonials = [
    {
      category: "TMJ Physical Therapy Course",
      target: "Physical Therapy Professionals",
      text: "An absolute top-tier course! I'm thrilled to apply these clinical assessment and manual tools directly with my patients. Janne teaches with exceptional clarity and an approachable style.",
      rating: 5,
    },
    {
      category: "Dental Ergonomics Lecture",
      target: "Graduating Dental Students / University of Oulu",
      text: "An energetic, engaging lecturer! Fantastic presentation, extremely interesting and delivered with great humor. Kept everyone fully focused.",
      rating: 5,
    },
    {
      category: "2-Day Advanced TMJ Specialization",
      target: "Orofacial Therapy Attendees",
      text: "A fresh, inspiring, and deep-dive experience! Clarified complex jaw mechanics and hands-on techniques. The 2-day format is outstanding.",
      rating: 5,
    },
    {
      category: "Occupational Physical Therapy Lecture",
      target: "Dental & Healthcare Personnel",
      text: "The most engaging online lecture of the whole series! Practical, highly applicable clinical tools for daily practice. Keep up the great work!",
      rating: 5,
    },
    {
      category: "Dental Ergonomics & Jaw Health",
      target: "Dental Student Cohort",
      text: "Inspiring lecture as always! I love Janne's teaching style. Now we know exactly who to consult when neck or jaw issues arise in practice.",
      rating: 5,
    },
    {
      category: "TMJ Physical Therapy Workshop",
      target: "Clinical Workshop Attendee",
      text: "Thank you for the clear, relaxed, and highly expert teaching day. Clear terminology, practical hands-on guidance, and encouraging atmosphere!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-[#000a18] border-b border-[#0C66B4]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
            <MessageSquareQuote className="w-4 h-4" />
            <span>Authentic Workshop & Lecture Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display text-white tracking-wide">
            REAL FEEDBACK FROM <span className="text-[#00AEEF]">LECTURES & WORKSHOPS</span>
          </h2>
          <p className="text-gray-300 text-base">
            Verified feedback from attendees, physical therapy professionals, and dental students at the University of Oulu and specialty workshops.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {realTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#000d21] border border-[#0C66B4]/60 flex flex-col justify-between space-y-6 shadow-panel hover:border-[#00AEEF] transition-all text-center items-center"
            >
              <div className="space-y-4 w-full flex flex-col items-center">
                <div className="flex flex-col items-center gap-2 w-full">
                  <span className="text-xs font-bold text-[#00AEEF] uppercase tracking-wider text-center">
                    {item.category}
                  </span>
                  <div className="flex items-center justify-center gap-1 text-[#00AEEF]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-200 italic leading-relaxed text-center break-words">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#0C66B4]/30 flex items-center justify-center gap-2 text-xs text-gray-300 w-full text-center">
                <UserCheck className="w-3.5 h-3.5 text-[#00AEEF] shrink-0" />
                <span className="font-semibold text-white break-words text-center">
                  {item.target}
                </span>
                <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
