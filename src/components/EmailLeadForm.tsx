"use client";

import { useState } from "react";
import { Download, CheckCircle2, ShieldCheck, Sparkles, ExternalLink, Play, Gift, FolderDown, AlertCircle, RefreshCw } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

interface EmailLeadFormProps {
  title?: string;
  subtitle?: string;
  lang?: "fi" | "en";
}

type FormState = "idle" | "sending" | "success" | "error";

export default function EmailLeadForm({
  title = "JOIN THE MAILING LIST & GET INSTANT ACCESS TO 4 SPECIAL VIDEOS",
  subtitle = "Enter your first name and email address below. You'll get immediate access to 4 exclusive clinical video guides and Janne Sakkinen's free PDF rehabilitation materials.",
  lang = "en"
}: EmailLeadFormProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [emailError, setEmailError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const driveFolderUrl = process.env.NEXT_PUBLIC_GUIDE_FOLDER_URL || SITE_CONFIG.googleDriveUrl || "https://drive.google.com/drive/folders/1_ptsakkinen_guides";

  const bonusVideos = [
    {
      id: "P1lZdpluD64",
      title: "1. TMJ Emergency Rehab Guide",
      desc: "Acute physical therapy relief for jaw clicking, popping, tension, and joint locking.",
      youtubeUrl: "https://www.youtube.com/watch?v=P1lZdpluD64",
      embedUrl: "https://www.youtube-nocookie.com/embed/P1lZdpluD64",
      thumbnail: "https://img.youtube.com/vi/P1lZdpluD64/mqdefault.jpg",
      badge: "Acute TMJ Relief & Clicking",
    },
    {
      id: "exfFQ0iRLiI",
      title: "2. Complex Injury Assessment & Care",
      desc: "How an OMT Physical Therapist thoroughly evaluates and treats complex musculoskeletal pain.",
      youtubeUrl: "https://www.youtube.com/watch?v=exfFQ0iRLiI",
      embedUrl: "https://www.youtube-nocookie.com/embed/exfFQ0iRLiI",
      thumbnail: "https://img.youtube.com/vi/exfFQ0iRLiI/mqdefault.jpg",
      badge: "Clinical OMT Evaluation",
    },
    {
      id: "ZFTSdUdEkC0",
      title: "3. Parasympathetic Nervous System Reset",
      desc: "Evidence-based protocols to calm the nervous system and downregulate pain signaling.",
      youtubeUrl: "https://www.youtube.com/watch?v=ZFTSdUdEkC0",
      embedUrl: "https://www.youtube-nocookie.com/embed/ZFTSdUdEkC0",
      thumbnail: "https://img.youtube.com/vi/ZFTSdUdEkC0/mqdefault.jpg",
      badge: "Nervous System & Pain Reset",
    },
    {
      id: "JyducxjS1b8",
      title: "4. Upper Cervical Spine Mobility Guide",
      desc: "Targeted physical therapy exercises to release upper neck tension and restore spinal mobility.",
      youtubeUrl: "https://www.youtube.com/watch?v=JyducxjS1b8",
      embedUrl: "https://www.youtube-nocookie.com/embed/JyducxjS1b8",
      thumbnail: "https://img.youtube.com/vi/JyducxjS1b8/mqdefault.jpg",
      badge: "Upper Neck & Headaches",
    },
  ];

  const validateEmail = (val: string) => {
    const isValid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(val.trim());
    if (!val) {
      setEmailError("Email address is required");
      return false;
    } else if (!isValid) {
      setEmailError("Please enter a valid email address (e.g. john@example.com)");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email) || !name.trim()) return;

    setState("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          lang: "en",
        }),
      });

      const json = await res.json().catch(() => ({ success: false }));

      if (res.ok && json.success === true) {
        setState("success");
      } else {
        setState("error");
        setErrorMessage("Something went wrong. Please try again or email tiedottajanne@gmail.com");
      }
    } catch (err) {
      console.error("API Error:", err);
      setState("error");
      setErrorMessage("Something went wrong. Please try again or email tiedottajanne@gmail.com");
    }
  };

  return (
    <section id="free-guide-form" className="py-16 md:py-24 bg-gradient-to-b from-[#000814] via-[#001433]/70 to-[#000814] border-b border-[#0C66B4]/30 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[#00AEEF]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-2">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#00AEEF] shadow-[0_0_20px_rgba(0,174,239,0.6)] bg-[#000d21] p-1.5 flex items-center justify-center">
              <img src="/logo-whitebg.png" alt="PT Sakkinen logo" className="w-full h-full object-contain rounded-full" />
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#67e8f9] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#67e8f9]" />
            <span>Free Lead Bonus &amp; 4 Special Videos</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto break-words">
            THESE 4 SPECIAL CLINICAL VIDEOS UNLOCK INSTANTLY WHEN YOU JOIN:
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-normal">
            Enter your first name and email address below. You'll get immediate access to these 4 special clinical video guides directly on your screen &amp; in your inbox, plus Janne Sakkinen's downloadable PDF rehabilitation guides!
          </p>
        </div>

        {state !== "success" ? (
          <div className="space-y-10">
            {/* Showcase Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {bonusVideos.map((video, idx) => (
                <div key={idx} className="rounded-3xl bg-[#00122e]/95 border-2 border-[#0C66B4]/50 overflow-hidden space-y-4 shadow-xl hover:border-[#00AEEF] transition-all duration-300 group flex flex-col justify-between backdrop-blur-md hover:-translate-y-1">
                  <div>
                    <div className="relative aspect-video w-full overflow-hidden bg-black">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#000d21] via-black/40 to-transparent" />
                      
                      <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-[#000814]/90 border border-[#00AEEF]/50 text-[#67e8f9] text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                        {video.badge}
                      </div>

                      <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-xs text-white font-medium bg-[#000814]/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#0C66B4]/40">
                        <span className="flex items-center gap-1.5 text-[#67e8f9] font-bold text-[11px]">
                          <Play className="w-3.5 h-3.5 fill-[#00AEEF]" />
                          Special Video #{idx + 1}
                        </span>
                        <span className="text-[10px] text-slate-300 font-mono">🔒 Unlocks on signup</span>
                      </div>
                    </div>

                    <div className="p-4 space-y-2">
                      <h3 className="text-sm font-bold text-white leading-snug group-hover:text-[#67e8f9] transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed font-normal">
                        {video.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-4 pb-4">
                    <div className="w-full py-2 px-3 rounded-xl bg-[#014489]/25 border border-[#0C66B4]/40 text-center text-[11px] text-[#67e8f9] font-semibold">
                      ✔ Available instantly after joining
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Error Message Box */}
            {state === "error" && (
              <div className="p-5 rounded-2xl bg-red-950/80 border-2 border-red-500 text-white flex items-start gap-3.5 shadow-lg">
                <AlertCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                <div className="space-y-2 flex-1">
                  <h4 className="font-bold text-sm text-red-200">Submission Error</h4>
                  <p className="text-xs text-slate-200 leading-relaxed">{errorMessage}</p>
                  <button
                    type="button"
                    onClick={() => setState("idle")}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500 hover:bg-red-400 text-white font-bold text-xs transition-all cursor-pointer min-h-[44px]"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Try Again</span>
                  </button>
                </div>
              </div>
            )}

            {/* Form Box */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#00122e]/95 border-2 border-[#00AEEF] space-y-6 shadow-[0_0_50px_rgba(0,174,239,0.3)] backdrop-blur-md">
              <div className="flex items-center gap-2 text-[#67e8f9] text-xs font-bold uppercase tracking-wider">
                <Gift className="w-4 h-4 text-[#67e8f9]" />
                <span>Join Mailing List – Unlock 4 Special Videos &amp; Drive Guides</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={state === "sending"}
                    className="w-full px-4 py-3.5 min-h-[44px] rounded-xl bg-[#000814] border border-[#0C66B4]/60 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-all disabled:opacity-50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) validateEmail(e.target.value);
                    }}
                    onBlur={(e) => validateEmail(e.target.value)}
                    disabled={state === "sending"}
                    className={`w-full px-4 py-3.5 min-h-[44px] rounded-xl bg-[#000814] border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 transition-all disabled:opacity-50 ${
                      emailError
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-[#0C66B4]/60 focus:border-[#00AEEF] focus:ring-[#00AEEF]"
                    }`}
                  />
                  {emailError && (
                    <p className="text-xs text-red-400 font-semibold">{emailError}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={state === "sending"}
                className="w-full py-4 px-8 min-h-[48px] rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-bold text-base hover:from-white hover:to-slate-100 transition-all duration-300 shadow-[0_0_25px_rgba(0,174,239,0.5)] flex items-center justify-center gap-3 group cursor-pointer disabled:opacity-50"
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{state === "sending" ? "Submitting..." : "Join List & Unlock 4 Special Videos (Instant Access)"}</span>
              </button>

              <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#67e8f9]" />
                  Direct video links sent to your email
                </span>
                <span>•</span>
                <span>100% Free</span>
                <span>•</span>
                <span>No Spam</span>
              </div>
            </form>
          </div>
        ) : (
          /* Instant Unlock Success View */
          <div className="p-8 sm:p-12 rounded-3xl bg-[#00122e] border-2 border-[#00AEEF] space-y-10 shadow-[0_0_50px_rgba(0,174,239,0.3)]">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#00AEEF]/20 text-[#67e8f9] flex items-center justify-center mx-auto border border-[#00AEEF]/50 shadow-[0_0_20px_rgba(0,174,239,0.5)]">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="text-3xl font-bold text-white">
                Thank you for subscribing{name ? `, ${name}` : ""}!
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Your email address <strong className="text-[#67e8f9]">{email}</strong> has been added. The link was also sent to your email, and you can watch all 4 special videos right here:
              </p>
            </div>

            {/* Embedded 4 Videos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {bonusVideos.map((video, idx) => (
                <div key={idx} className="rounded-2xl bg-[#000814] border border-[#0C66B4]/60 overflow-hidden space-y-3 flex flex-col justify-between p-4 shadow-panel">
                  <div className="space-y-3">
                    <div className="aspect-video w-full rounded-xl overflow-hidden bg-black relative border border-[#0C66B4]/30">
                      <iframe
                        src={video.embedUrl}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full border-0"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#67e8f9] uppercase tracking-wider block">
                        Part {idx + 1} of 4
                      </span>
                      <h4 className="text-sm font-bold text-white leading-snug mt-1">
                        {video.title}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {video.desc}
                      </p>
                    </div>
                  </div>

                  <a
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#014489]/40 border border-[#0C66B4] text-white font-semibold text-xs hover:border-[#00AEEF] hover:text-[#67e8f9] transition-all w-full text-center mt-2 min-h-[44px]"
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>

            {/* Extra Google Drive Link */}
            <div className="pt-6 border-t border-[#0C66B4]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <FolderDown className="w-6 h-6 text-[#67e8f9] shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white">Would you also like downloadable PDF guides?</h4>
                  <p className="text-xs text-slate-300">Access all of Janne Sakkinen's written rehabilitation guides on Google Drive. The link was also sent to your email.</p>
                </div>
              </div>

              <a
                href={driveFolderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 min-h-[48px] rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-bold text-xs sm:text-sm hover:from-white hover:to-slate-100 transition-all shadow-glow-sm cursor-pointer"
              >
                <span>Open Google Drive Folder</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
