import { FALLBACK_VIDEOS } from "@/data/videos";
import { CATEGORIES } from "@/data/categories";
import { SITE_CONFIG } from "@/data/config";
import Link from "next/link";
import { ArrowLeft, Download, ExternalLink, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return FALLBACK_VIDEOS.map((v) => ({
    id: v.id,
  }));
}

export default async function SingleVideoPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const video = FALLBACK_VIDEOS.find((v) => v.id === params.id) || FALLBACK_VIDEOS[0];

  if (!video) {
    notFound();
  }

  const category = CATEGORIES.find((c) => c.id === video.categoryId);

  return (
    <div className="py-12 bg-[#000a18] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back navigation */}
        <Link
          href="/videos"
          className="inline-flex items-center gap-2 text-sm text-[#00AEEF] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to video library</span>
        </Link>

        {/* Video Player Header Box */}
        <div className="space-y-4">
          <div className="inline-block px-3 py-1 rounded-md bg-[#014489] border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-semibold uppercase tracking-wider">
            {category?.name || "TMD Protocol"}
          </div>

          <h1 className="text-3xl sm:text-5xl font-display text-white tracking-wide">
            {video.title}
          </h1>

          <p className="text-gray-300 text-base sm:text-lg">
            {video.promiseDescription}
          </p>
        </div>

        {/* Responsive YouTube Embed Container */}
        <div className="relative aspect-video rounded-2xl bg-black border border-[#0C66B4] overflow-hidden shadow-glow">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboardwrite; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {/* Video Notes & PDF Lead Magnet */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6">
          <div className="md:col-span-8 space-y-6 text-gray-300 text-base leading-relaxed">
            <h2 className="text-2xl font-bold text-white">Execution Guidelines</h2>
            <p>
              In this video, OMT physical therapist Janne Sakkinen demonstrates anatomically precise movements and pacing. These protocols are safe for home execution.
            </p>
            
            <div className="p-4 rounded-xl bg-[#000d21] border border-[#0C66B4]/50 space-y-2">
              <h3 className="font-bold text-white text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00AEEF]" />
                Important Safety Principles:
              </h3>
              <ul className="list-disc list-inside text-xs text-gray-300 space-y-1">
                <li>Perform movements slowly with gentle control. Never force a locked jaw.</li>
                <li>Mild stretch sensations are normal; sharp or shooting pain is a sign to stop.</li>
                <li>If symptoms intensify, pause and seek individualized medical evaluation.</li>
              </ul>
            </div>
          </div>

          {/* Lead Magnet PDF Sidebar Card */}
          <div className="md:col-span-4">
            <div className="p-6 rounded-2xl bg-[#000d21] border border-[#00AEEF]/40 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center">
                <Download className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Download PDF Guide</h3>
              <p className="text-xs text-gray-300">
                Get target set counts, timing recommendations, and printed guides delivered to your inbox via Beacons.
              </p>
              <a
                href={SITE_CONFIG.beaconsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#00AEEF] text-black font-bold text-sm hover:bg-[#33C2F5] transition-all shadow-glow flex items-center justify-center gap-2"
              >
                <span>Get PDF Guide (Beacons)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
