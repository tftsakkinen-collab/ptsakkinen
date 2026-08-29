import { CheckCircle2, Shield, Activity, Target } from "lucide-react";

export default function Roadmap() {
  const steps = [
    {
      number: "01",
      title: "Identify Triggers & Self-Test",
      description: "Isolate the root mechanical cause of jaw tension, clicking, or neck stiffness with clinical self-evaluations.",
      icon: Target,
    },
    {
      number: "02",
      title: "Execute Guided Protocols",
      description: "Follow anatomically precise exercise routines led by an OMT physical therapist.",
      icon: Activity,
    },
    {
      number: "03",
      title: "Restore Lasting Comfort",
      description: "Retrain neuromuscular habits to interrupt subconscious daytime clenching and prevent symptom recurrence.",
      icon: Shield,
    },
  ];

  return (
    <section className="py-16 bg-[#000d21] border-b border-[#0C66B4]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#67e8f9] text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4" />
            <span>Rehabilitation Pathway</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display text-white tracking-wide">
            THE 3-STEP <span className="text-[#67e8f9]">REHABILITATION ROADMAP</span>
          </h2>
          <p className="text-gray-300 text-base">
            A structured, clinical progression designed for safe home execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#000a18] border border-[#0C66B4] relative space-y-4 shadow-panel hover:border-[#00AEEF] transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#014489]/50 border border-[#00AEEF]/50 text-[#67e8f9] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-display text-4xl text-[#67e8f9]/40 group-hover:text-[#67e8f9] transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-wide">
                  {step.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
