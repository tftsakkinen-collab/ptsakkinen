import type { Metadata } from "next";
import { Outfit, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display-heading",
  display: "swap",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PT Sakkinen — OMT-Certified TMJ & Musculoskeletal Specialist",
  description:
    "Clinical solutions for jaw clenching, TMJ disorders, bruxism, trigeminal neuralgia, and cervicogenic dizziness by Janne Sakkinen.",
  openGraph: {
    title: "PT Sakkinen — Release Jaw Tension & Overcome TMJ Pain",
    description: "Evidence-based physical therapy programs and video rehabilitation guides.",
    url: "https://www.ptsakkinen.com",
    siteName: "PT Sakkinen - Physical Therapy",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://www.ptsakkinen.com/janne-sakkinen.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Sakkinen — Release Jaw Tension & Overcome TMJ Pain",
    description: "Evidence-based physical therapy programs and video rehabilitation guides.",
    images: ["https://www.ptsakkinen.com/janne-sakkinen.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${roboto.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#000a18] text-white selection:bg-[#00AEEF] selection:text-black">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
