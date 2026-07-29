import type { Metadata } from "next";
import { Luckiest_Guy, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const luckiestGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-luckiest-guy",
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
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${luckiestGuy.variable} ${roboto.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#000a18] text-white selection:bg-[#00AEEF] selection:text-black">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
