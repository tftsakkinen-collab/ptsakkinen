"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2, RefreshCw, Play } from "lucide-react";
import Link from "next/link";

export default function SymptomQuiz() {
  const [step, setStep] = useState(1);
  const [symptom, setSymptom] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSelectSymptom = (val: string) => {
    setSymptom(val);
    setStep(2);
  };

  const handleSelectDuration = (val: string) => {
    setDuration(val);
    setSubmitted(true);
  };

  const handleReset = () => {
    setStep(1);
    setSymptom(null);
    setSymptom(null);
    setDuration(null);
    setSubmitted(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#000a18] via-[#000d21] to-[#000a18] border-b border-[#0C66B4]/30 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#000d21] border border-[#00AEEF]/40 p-8 md:p-12 shadow-glow space-y-8 relative">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00AEEF]/20 border border-[#00AEEF]/40 text-[#67e8f9] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>1-Minute Interactive Symptom Assessment</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display text-white tracking-wide">
              ASSESS YOUR SYMPTOMS &amp; <span className="text-[#67e8f9]">FIND REHABILITATION GUIDES</span>
            </h2>
            <p className="text-gray-300 text-sm max-w-xl mx-auto">
              Answer 2 quick questions to get an OMT Physical Therapist recommended guidance path.
            </p>
          </div>

          {/* Quiz Step 1: Symptom */}
          {!submitted && step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white text-center">
                1. Which area is affecting you most?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: "tmj-jaw", label: "Jaw Clenching, Bruxism & TMJ Clicking (TMD)" },
                  { id: "neck-shoulder", label: "Neck & Shoulder Tension / Tension Headaches" },
                  { id: "low-back", label: "Low Back Pain & Sciatic Nerve Discomfort" },
                  { id: "knee-hip", label: "Knee or Hip Stiffness / Osteoarthritis" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelectSymptom(item.label)}
                    className="p-5 rounded-2xl bg-[#014489]/20 border border-[#0C66B4] text-white font-semibold text-sm hover:border-[#00AEEF] hover:bg-[#00AEEF]/10 transition-all text-left flex items-center justify-between group"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#67e8f9] group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quiz Step 2: Duration */}
          {!submitted && step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white text-center">
                2. How long have you experienced these symptoms?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: "acute", label: "Less than 2 weeks (Acute)" },
                  { id: "subacute", label: "1 to 6 months" },
                  { id: "chronic", label: "Over 6 months (Persistent)" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelectDuration(item.label)}
                    className="p-5 rounded-2xl bg-[#014489]/20 border border-[#0C66B4] text-white font-semibold text-sm hover:border-[#00AEEF] hover:bg-[#00AEEF]/10 transition-all text-center flex flex-col items-center justify-center gap-2 group"
                  >
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quiz Result View */}
          {submitted && (
            <div className="space-y-6 text-center animate-fadeIn">
              <div className="inline-flex items-center gap-2 text-[#67e8f9] font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#67e8f9]" />
                <span>Assessment Complete! Recommended path ready.</span>
              </div>

              <div className="p-6 rounded-2xl bg-[#000a18] border border-[#00AEEF]/50 text-left space-y-4">
                <h4 className="text-xl font-bold text-white">
                  Recommended Path: <span className="text-[#67e8f9]">{symptom}</span>
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Based on your selected focus ({symptom}, duration: {duration}), we recommend subscribing to access the free PDF guides and watching the exercise videos.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <Link
                    href="/free-guide"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#00AEEF] text-black font-bold text-sm hover:bg-[#33C2F5] transition-all shadow-glow flex items-center justify-center gap-2"
                  >
                    <span>Download Free PDF Guides</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/videos"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0C66B4]/30 border border-[#0C66B4] text-[#67e8f9] font-bold text-sm hover:bg-[#00AEEF] hover:text-black transition-all flex items-center justify-center gap-2"
                  >
                    <Play className="w-4 h-4" />
                    <span>Watch Free Videos</span>
                  </Link>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Retake assessment</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
