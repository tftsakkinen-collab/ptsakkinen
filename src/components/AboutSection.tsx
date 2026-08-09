import Image from "next/image";
import { SITE_CONFIG } from "@/data/config";
import { UserCheck, Award, Stethoscope } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-[#000a18] border-b border-[#0C66B4]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Professional Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#0C66B4] shadow-panel group">
              <Image
                src="/janne-sakkinen.jpg"
                alt="Janne Sakkinen OMT physical therapist in clinical practice"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000d21] via-transparent to-transparent opacity-60" />

              {/* Single Authority Proof Banner on card */}
              <div className="absolute bottom-6 left-6 right-6 p-3 rounded-xl bg-[#000d21]/90 border border-[#00AEEF] backdrop-blur-md flex items-center justify-center gap-2 text-[#00AEEF] text-xs font-bold shadow-glow">
                <Award className="w-4 h-4 shrink-0" />
                <span>{SITE_CONFIG.authorityProofs.appointments}</span>
              </div>
            </div>
          </div>

          {/* Story & Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#00AEEF] text-sm font-semibold uppercase tracking-widest">
              <span>Clinical Background</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display text-white tracking-wide">
              SPECIALIZED CARE FOR <span className="text-[#00AEEF]">JAW & HEAD DISORDERS</span>
            </h2>

            <div className="space-y-4 text-gray-300 text-base leading-relaxed">
              <p>
                I am Janne Sakkinen, an OMT-certified musculoskeletal physical therapist with over 15 years of clinical practice. I specialize in complex, highly targeted conditions of the jaw, upper cervical spine, and facial nerves.
              </p>
              <p>
                TMD (Temporomandibular Disorder), subconscious jaw clenching, bruxism, and cervicogenic dizziness are often poorly understood and frustrating for patients. My goal is to demystify these mechanics and provide clear, step-by-step physical rehabilitation protocols.
              </p>
              <p>
                Since 2017, I have trained dentistry students at the University of Oulu and taught advanced physical therapy courses. On YouTube and through my online programs, I bring these clinical protocols directly to a global audience.
              </p>
            </div>

            {/* Authority Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#0C66B4]/10 border border-[#0C66B4]/40 flex items-start gap-3">
                <UserCheck className="w-6 h-6 text-[#00AEEF] shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-bold text-sm">{SITE_CONFIG.authorityProofs.qualification}</h3>
                  <p className="text-xs text-gray-400 mt-1">Specialized TMD certification (2015)</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#0C66B4]/10 border border-[#0C66B4]/40 flex items-start gap-3">
                <Award className="w-6 h-6 text-[#00AEEF] shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-bold text-sm">University Instructor</h3>
                  <p className="text-xs text-gray-400 mt-1">{SITE_CONFIG.authorityProofs.teaching}</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#0C66B4]/10 border border-[#00AEEF]/60 flex items-start gap-3 sm:col-span-2">
                <Stethoscope className="w-6 h-6 text-[#00AEEF] shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-bold text-sm">Valvira &amp; Terhikki Registration</h3>
                  <p className="text-xs text-gray-300 mt-1">{SITE_CONFIG.authorityProofs.valvira}</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
