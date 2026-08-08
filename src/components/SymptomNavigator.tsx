"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Activity,
  Play,
  ShoppingBag,
  Download,
  ArrowRight,
  Sparkles,
  ChevronRight,
  ShieldCheck
} from "lucide-react";

export interface SymptomTopic {
  id: string;
  name: string;
  iconName: string;
  summary: string;
  recommendedVideos: {
    id: string;
    title: string;
  }[];
  recommendedGear: {
    name: string;
    url: string;
    note: string;
  }[];
  pdfGuide: string;
}

const SYMPTOM_DATA: SymptomTopic[] = [
  {
    id: "tmj-jaw",
    name: "TMJ & Jaw Pain",
    iconName: "😬",
    summary: "Teeth grinding (bruxism), jaw clicking/popping, masseter tightness, or jaw joint pain.",
    recommendedVideos: [
      { id: "Qh8uK23HSAQ", title: "Masseter Muscle & TMJ Relief Protocol" },
      { id: "D9g_8OtqRk8", title: "Jaw Clicking & Trigeminal Nerve Calming" },
    ],
    recommendedGear: [
      { name: "Mutjutin Masseter & Fascia Tool", url: "/gear", note: "Physical therapist recommended tool for self-myofascial jaw release" },
      { name: "FaceImage Facial Kinesiology Tape", url: "/gear", note: "Gentle taping for trigeminal nerve and jaw joint decompression" },
    ],
    pdfGuide: "TMJ & Jaw Joint Self-Care PDF Guide",
  },
  {
    id: "neck-headache",
    name: "Neck Pain & Headaches",
    iconName: "🧠",
    summary: "Cervical stiffness, tension headaches, suboccipital tightness, and dizziness.",
    recommendedVideos: [
      { id: "t8iCnAUr4pU", title: "Cervicogenic Headache & Neck Relief" },
      { id: "8H_k0lrebJ0", title: "Upper Cervical Mobility & Decompression" },
    ],
    recommendedGear: [
      { name: "Cervical Traction Neck Pillow", url: "/gear", note: "Relieves upper cervical pressure and opens thoracic spine" },
      { name: "Acupressure Mat & Pillow Set", url: "/gear", note: "Releases suboccipital muscle tension" },
    ],
    pdfGuide: "Cervical Spine & Headache Home Guide PDF",
  },
  {
    id: "tennis-elbow",
    name: "Tennis & Golf Elbow",
    iconName: "💪",
    summary: "Lateral or medial epicondylitis, forearm tendon tightness, and grip weakness.",
    recommendedVideos: [
      { id: "0MKwbFkXQ2w", title: "Eccentric Strengthening for Tennis Elbow" },
      { id: "TqVWQND9g64", title: "Forearm Fascial Release & Stretching" },
    ],
    recommendedGear: [
      { name: "TheraBand FlexBar Elbow Exerciser", url: "/gear", note: "Clinically proven eccentric exercise tool for tendinopathy" },
      { name: "Elbow Compression Support Strap", url: "/gear", note: "Reduces peak load at the tendon insertion" },
    ],
    pdfGuide: "Tennis Elbow Rehabilitation PDF Guide",
  },
  {
    id: "plantar-fasciitis",
    name: "Plantar Fasciitis & Heel Pain",
    iconName: "🦶",
    summary: "Morning heel stiffness, plantar fascia pain, and calf muscle tightness.",
    recommendedVideos: [
      { id: "Qh8uK23HSAQ", title: "Plantar Fascia Self-Care & Stretching" },
      { id: "D9g_8OtqRk8", title: "Calf & Plantar Mobilization Protocol" },
    ],
    recommendedGear: [
      { name: "TriggerPoint Foot Massage Ball", url: "/gear", note: "Deep tissue massage for plantar fascia tightness" },
      { name: "Plantar Fasciitis Night Splint", url: "/gear", note: "Maintains passive stretch during rest" },
    ],
    pdfGuide: "Plantar Fasciitis Rehab PDF Guide",
  },
  {
    id: "back-sciatica",
    name: "Lower Back & Sciatica",
    iconName: "🧘",
    summary: "Lumbar tightness, piriformis sciatica radiating to glute/leg, and spinal stiffness.",
    recommendedVideos: [
      { id: "t8iCnAUr4pU", title: "Lower Back Pain & Sciatica Decompression" },
      { id: "8H_k0lrebJ0", title: "Lumbar Spine Mobility & Core Stabilization" },
    ],
    recommendedGear: [
      { name: "High-Density Foam Roller", url: "/gear", note: "Releases gluteal and thoracic fascial restriction" },
      { name: "Lumbar Compression Support Belt", url: "/gear", note: "Provides stability during heavy daily activities" },
    ],
    pdfGuide: "Lower Back & Sciatica Home Guide PDF",
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
            <span>Interactive Clinical Navigator</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl text-white tracking-wide">
            FIND YOUR <span className="text-[#00AEEF]">REHABILITATION PROTOCOL</span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Select your symptom area below to view recommended clinical videos, rehab tools, and free downloadable guides by OMT Physical Therapist Janne Sakkinen.
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
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#000d21] to-[#00050f] border border-[#00AEEF]/40 shadow-glow grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Col 1: Summary & PDF Download */}
          <div className="space-y-6 flex flex-col justify-between h-full">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#00AEEF] text-xs font-bold uppercase tracking-wider h-6">
                <Activity className="w-4 h-4 text-[#00AEEF]" />
                <span>Condition Overview</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{activeSymptom.iconName}</span>
                <h3 className="text-2xl font-bold text-white">{activeSymptom.name}</h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {activeSymptom.summary}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#014489]/20 border border-[#00AEEF]/40 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#00AEEF] uppercase tracking-wider">
                <Download className="w-4 h-4" />
                <span>Free Rehab PDF Guide</span>
              </div>
              <p className="text-xs text-gray-200 font-semibold">{activeSymptom.pdfGuide}</p>
              <Link
                href="/free-guide"
                className="w-full py-2.5 px-4 rounded-xl bg-[#00AEEF] text-black font-bold text-xs hover:bg-[#33C2F5] transition-all flex items-center justify-center gap-2 shadow-glow"
              >
                <span>Download Free PDF Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Col 2: Clinical Video Recommendations */}
          <div className="space-y-4 flex flex-col justify-between h-full">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#00AEEF] text-xs font-bold uppercase tracking-wider h-6">
                <Play className="w-4 h-4" />
                <span>Recommended Videos</span>
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
                      <span className="text-[10px] text-gray-400">Watch Clinical Guide →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Col 3: Recommended Rehab Tools */}
          <div className="space-y-4 flex flex-col justify-between h-full">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider h-6">
                <ShoppingBag className="w-4 h-4" />
                <span>Recommended Tools</span>
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
                        <span>Explore</span>
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
    </div>
  );
}
