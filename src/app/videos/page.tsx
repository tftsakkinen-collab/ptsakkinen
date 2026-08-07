import { CATEGORIES } from "@/data/categories";
import { getAllVideos } from "@/lib/youtube";
import VideoLibraryClient from "@/components/VideoLibraryClient";
import type { Metadata } from "next";

export const revalidate = 3600;

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
  openGraph: {
    title: "Clinical Video Library | 68 Video Articles | PT Sakkinen",
    description: "Explore all 68 physical therapy videos and AEO articles by Janne Sakkinen covering TMJ disorders, dental ergonomics, spine and joint care.",
    url: "https://www.ptsakkinen.com/videos",
    siteName: "PT Sakkinen - OMT Physical Therapist",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://www.ptsakkinen.com/logo-whitebg.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinical Video Library | 68 Video Articles | PT Sakkinen",
    description: "Explore all 68 physical therapy videos and AEO articles by Janne Sakkinen covering TMJ disorders, dental ergonomics, spine and joint care.",
    images: ["https://www.ptsakkinen.com/logo-whitebg.png"],
  },
};

export default async function VideoLibraryPage() {
  const videos = await getAllVideos();
  return <VideoLibraryClient videos={videos} categories={CATEGORIES} />;
}

