"use client";

import { useState } from "react";
import { Category } from "@/data/categories";
import { Video } from "@/data/videos";
import VideoCard from "@/components/VideoCard";
import { PlayCircle, Search } from "lucide-react";

interface VideoLibraryClientProps {
  videos: Video[];
  categories: Category[];
}

export default function VideoLibraryClient({ videos, categories }: VideoLibraryClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("kaikki");
  const [searchQuery, setSearchQuery] = useState("");

  const tmjVideos = videos.filter(v => v.categoryId === "tmj-bruxism");
  const ergonomicsVideos = videos.filter(v => v.categoryId === "ergonomics");
  const spineVideos = videos.filter(v => v.categoryId === "cervicogenic-neck");

  const filteredVideos = videos.filter((v) => {
    const matchesCat = selectedCategory === "kaikki" || v.categoryId === selectedCategory;
    const matchesSearch =
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.promiseDescription.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCat && matchesSearch;
  });

  return (
    <div className="py-12 md:py-20 bg-[#000a18] min-h-screen text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
            <PlayCircle className="w-4 h-4" />
            <span>ALL 68 CLINICAL REHABILITATION VIDEOS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display text-white tracking-wide">
            COMPLETE <span className="text-[#00AEEF]">CLINICAL VIDEO LIBRARY</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Explore OMT Physical Therapist Janne Sakkinen's full library of 68 published physical therapy videos and AEO-optimized articles organized into three clinical specializations.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="space-y-6">
          {/* Search bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search across all 68 videos (e.g. jaw, TMJ, neck)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#000d21] border border-[#0C66B4] text-white placeholder-gray-400 focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] text-sm font-sans"
            />
          </div>

          {/* 3 Main Category Filter Tabs */}
          <div className="flex items-center justify-start md:justify-center gap-3 overflow-x-auto pb-4 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              let count = videos.length;
              if (cat.id === "tmj-bruxism") count = tmjVideos.length;
              if (cat.id === "ergonomics") count = ergonomicsVideos.length;
              if (cat.id === "cervicogenic-neck") count = spineVideos.length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap border shrink-0 flex items-center gap-2 ${
                    active
                      ? "bg-[#00AEEF] text-black border-[#00AEEF] shadow-glow"
                      : "bg-[#000d21] text-gray-300 border-[#0C66B4]/50 hover:border-[#00AEEF] hover:text-white"
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                    active ? "bg-black/20 text-black" : "bg-[#014489] text-[#00AEEF]"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Display Mode */}
        {selectedCategory === "kaikki" && searchQuery === "" ? (
          <div className="space-y-16">
            
            {/* Section 1: TMJ & Orofacial */}
            <section className="space-y-6 pt-4 border-t border-[#0C66B4]/30">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-1">
                  <h2 className="text-2xl sm:text-3xl font-display text-white flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center text-sm font-bold">1</span>
                    TMJ &amp; OROFACIAL THERAPY ({tmjVideos.length} videos)
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-400">
                    TMJ joint clicking, masseter myofascial release, tooth clenching, and facial pain.
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCategory("tmj-bruxism")}
                  className="text-xs text-[#00AEEF] hover:underline font-semibold self-start sm:self-auto"
                >
                  Filter TMJ only →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tmjVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </section>

            {/* Section 2: Ergonomics */}
            <section className="space-y-6 pt-8 border-t border-[#0C66B4]/30">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-1">
                  <h2 className="text-2xl sm:text-3xl font-display text-white flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center text-sm font-bold">2</span>
                    ERGONOMICS &amp; WORKPLACE WELLNESS ({ergonomicsVideos.length} videos)
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Dental ergonomics, posture correction, and workplace micro-break routines.
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCategory("ergonomics")}
                  className="text-xs text-[#00AEEF] hover:underline font-semibold self-start sm:self-auto"
                >
                  Filter Ergonomics only →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ergonomicsVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </section>

            {/* Section 3: Spine & Joint Care */}
            <section className="space-y-6 pt-8 border-t border-[#0C66B4]/30">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-1">
                  <h2 className="text-2xl sm:text-3xl font-display text-white flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center text-sm font-bold">3</span>
                    SPINE &amp; MUSCULOSKELETAL CARE ({spineVideos.length} videos)
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Back pain, sciatica, shoulder impingement, joint osteoarthritis, and inflammation.
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCategory("cervicogenic-neck")}
                  className="text-xs text-[#00AEEF] hover:underline font-semibold self-start sm:self-auto"
                >
                  Filter Spine &amp; Joint Care only →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {spineVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </section>

          </div>
        ) : (
          /* Filtered Grid View */
          <div className="space-y-6">
            <div className="flex items-center justify-between text-xs text-gray-400 border-b border-[#0C66B4]/30 pb-3">
              <span>Showing {filteredVideos.length} videos</span>
              {(selectedCategory !== "kaikki" || searchQuery !== "") && (
                <button
                  onClick={() => {
                    setSelectedCategory("kaikki");
                    setSearchQuery("");
                  }}
                  className="text-[#00AEEF] hover:underline font-semibold"
                >
                  Show all 68 videos
                </button>
              )}
            </div>

            {filteredVideos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-[#000d21] rounded-2xl border border-[#0C66B4]/30 space-y-3">
                <p className="text-gray-300 font-medium">No videos found matching your filter.</p>
                <button
                  onClick={() => {
                    setSelectedCategory("kaikki");
                    setSearchQuery("");
                  }}
                  className="px-4 py-2 rounded-lg bg-[#00AEEF] text-black font-bold text-xs"
                >
                  Show all 68 videos
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
