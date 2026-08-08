"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Activity,
  Sparkles,
  Play,
  ShoppingBag,
  Download,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface SymptomCategory {
  id: string;
  name: string;
  iconName: string;
  summary: string;
  recommendedVideos: { id: string; title: string }[];
  recommendedGear: { name: string; url: string; note: string }[];
  pdfGuide: string;
}

const SYMPTOM_DATA: SymptomCategory[] = [
  {
    id: "tmj-jaw",
    name: "Jaw Pain & Bruxism",
    iconName: "😬",
    summary: "Clenching teeth at night, jaw clicking, or temporomandibular joint (TMJ) tightness.",
    recommendedVideos: [
      { id: "D9g_8OtqRk8", title: "TMJ & Jaw Muscle Self-Release Protocol" },
      { id: "t8iCnAUr4pU", title: "Jaw Clicking & Trigeminal Nerve Relief Exercises" },
    ],
    recommendedGear: [
      { name: "Mutjutin Myofascial & Jaw Release Tool", url: "/gear", note: "Targeted release for jaw & neck tightness" },
      { name: "FaceImage Gentle Kinesiology Tape", url: "/gear", note: "Soothes jaw joint and trigeminal area" },
    ],
    pdfGuide: "Jaw & TMJ Self-Care PDF Guide",
  },
  {
    id: "neck-headache",
    name: "Neck Pain & Headaches",
    iconName: "💆‍♂️",
    summary: "Forward head posture, upper trapezius stiffness, or tension headaches from desk work.",
    recommendedVideos: [
      { id: "Qh8uK23HSAQ", title: "5-Minute Desk Ergonomics & Neck Decompression" },
      { id: "t8iCnAUr4pU", title: "Cervical Spine Mobility & Suboccipital Release" },
    ],
    recommendedGear: [
      { name: "ErgoWork Ergonomic Monitor Arm", url: "/gear", note: "Raises display to eye level to stop neck strain" },
      { name: "Myofascial Trigger Point Balls", url: "/gear", note: "Suboccipital & neck muscle knot release" },
    ],
    pdfGuide: "Desk Ergonomics & Neck Rehab PDF",
  },
  {
    id: "elbow-wrist",
    name: "Tennis & Golf Elbow",
    iconName: "🎾",
    summary: "Pain on the outside (tennis) or inside (golf) of the elbow during gripping or lifting.",
    recommendedVideos: [
      { id: "Qh8uK23HSAQ", title: "Tennis & Golf Elbow Load Management Exercises" },
    ],
    recommendedGear: [
      { name: "Janne Säkkinen Forearm Reliever Tool", url: "/gear", note: "Specific rotational resistance for elbow tendon loading" },
      { name: "Heavy-Duty Loop Resistance Bands", url: "/gear", note: "Eccentric wrist extension & flexion exercises" },
    ],
    pdfGuide: "Elbow Tendonitis Rehabilitation Protocol PDF",
  },
  {
    id: "heel-plantar",
    name: "Plantar Fasciitis & Heel Pain",
    iconName: "🦶",
    summary: "Sharp heel pain during early morning steps, Achilles tendon stiffness, or calf tightness.",
    recommendedVideos: [
      { id: "D9g_8OtqRk8", title: "Plantar Fascia Loading & High-Load Calf Calf Stretches" },
    ],
    recommendedGear: [
      { name: "JVT Wellness Calf Slant Board", url: "/gear", note: "Heavy-duty adjustable incline board for Achilles & plantar loading" },
      { name: "Adjustable Slant Rehab Board", url: "/gear", note: "Precision angle adjustment for plantar fasciitis" },
    ],
    pdfGuide: "Plantar Fasciitis & Heel Rehab PDF",
  },
  {
    id: "back-sciatica",
    name: "Lower Back & Sciatica",
    iconName: "🧍‍♂️",
    summary: "Lower back stiffness, glute tightness, or radiating discomfort down the leg.",
    recommendedVideos: [
      { id: "Qh8uK23HSAQ", title: "Lumbar Decompression & Hip Internal Rotation Exercises" },
    ],
    recommendedGear: [
      { name: "Targeted Myofascial Trigger Balls", url: "/gear", note: "Deep piriformis & glute muscle release" },
      { name: "Shokz Open-Ear Workout Headphones", url: "/gear", note: "Stay active safely during walking rehab" },
    ],
    pdfGuide: "Lower Back & Core Stability PDF Guide",
  },
];

export default function SymptomNavigator() {
  const [selectedId, setSelectedId] = useState<string>("tmj-jaw");
  const activeSymptom = SYMPTOM_DATA.find((s) => s.id === selectedId) || SYMPTOM_DATA[0];

  return (
    <div className="py-12 bg-gradient-to-b from-[#000a18] via-[#000d21] to-[#000a18] border-y border-[#0C66B4]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
            <Activity className="w-4 h-4 text-[#00AEEF]" />
            <span>Interactive Rehabilitation Helper</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl text-white tracking-wide">
            FIND YOUR <span className="text-[#00AEEF]">REHAB ROUTINE</span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Select your symptom area below to instantly get Janne Sakkinen's recommended clinical videos, rehab tools, and free exercise guides.
          </p>
        </div>

        {/* Symptom Tab Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {SYMPTOM_DATA.map((sym) => {
            const isActive = sym.id === selectedId;
            return (
              <button
                key={sym.id}
                onClick={() => setSelectedId(sym.id)}
                className={`p-4 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between gap-3 ${
                  isActive
                    ? "bg-[#014489]/40 border-[#00AEEF] shadow-[0_0_20px_rgba(0,174,239,0.3)] scale-[1.02]"
                    : "bg-[#000d21] border-[#0C66B4]/30 hover:border-[#00AEEF]/50 text-gray-300"
                }`}
              >
                <div className="text-2xl">{sym.iconName}</div>
                <div className="font-bold text-sm text-white">{sym.name}</div>
              </button>
            );
          })}
        </div>

        {/* Interactive Active Content Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#000d21] to-[#00050f] border border-[#00AEEF]/40 shadow-glow grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Col 1: Summary & PDF Download */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-block text-3xl">{activeSymptom.iconName}</div>
              <h3 className="text-2xl font-bold text-white">{activeSymptom.name}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {activeSymptom.summary}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#014489]/20 border border-[#00AEEF]/40 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#00AEEF] uppercase tracking-wider">
                <Download className="w-4 h-4" />
                <span>Free Exercise Guide</span>
              </div>
              <p className="text-xs text-gray-200 font-semibold">{activeSymptom.pdfGuide}</p>
              <Link
                href="/free-guide"
                className="w-full py-2.5 px-4 rounded-xl bg-[#00AEEF] text-black font-bold text-xs hover:bg-[#33C2F5] transition-all flex items-center justify-center gap-2"
              >
                <span>Download PDF Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Col 2: Clinical Video Recommendations */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
              <Play className="w-4 h-4" />
              <span>Recommended OMT Videos</span>
            </div>

            <div className="space-y-3">
              {activeSymptom.recommendedVideos.map((vid) => (
                <Link
                  key={vid.id}
                  href={`/videos/${vid.id}`}
                  className="p-4 rounded-2xl bg-[#000814] border border-[#0C66B4]/40 hover:border-[#00AEEF] hover:bg-[#000d21] transition-all flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#00AEEF] group-hover:text-black transition-all">
                    <Play className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white group-hover:text-[#00AEEF] transition-colors leading-snug">
                      {vid.title}
                    </h4>
                    <span className="text-[10px] text-gray-400">Watch Step-by-Step Exercise →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Recommended Rehab Tools */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <ShoppingBag className="w-4 h-4" />
              <span>Recommended Rehab Tools</span>
            </div>

            <div className="space-y-3">
              {activeSymptom.recommendedGear.map((gear, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#000814] border border-[#0C66B4]/40 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{gear.name}</span>
                    <Link
                      href={gear.url}
                      className="text-[11px] text-[#00AEEF] font-semibold hover:underline flex items-center gap-1"
                    >
                      <span>View</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <p className="text-[11px] text-gray-400 italic leading-tight">
                    "{gear.note}"
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
