import { CATEGORIES } from "@/data/categories";
import { FALLBACK_VIDEOS } from "@/data/videos";
import VideoLibraryClient from "@/components/VideoLibraryClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinical Video Library | 68 Video Articles | PT Sakkinen",
  description: "Explore all 68 physical therapy videos and AEO articles by Janne Sakkinen covering TMJ disorders, dental ergonomics, spine and joint care.",
  alternates: {
    canonical: "https://www.ptsakkinen.com/videos",
    languages: {
      "en": "https://www.ptsakkinen.com/videos",
      "fi": "https://www.ftsakkinen.com/videot",
      "x-default": "https://www.ftsakkinen.com/videot",
    },
  },
};

export default function VideoLibraryPage() {
  return <VideoLibraryClient videos={FALLBACK_VIDEOS} categories={CATEGORIES} />;
}
