import { Metadata } from "next";
import PuristusPoisClient from "./PuristusPoisClient";

export const metadata: Metadata = {
  title: "PURISTUS POIS — Jaw Relaxation & Neck Mobility | PT Sakkinen",
  description:
    "An 8-week clinical online course for desk workers suffering from jaw tension, neck stiffness, and afternoon headaches. By Janne Säkkinen, OMT Physical Therapist.",
  openGraph: {
    title: "PURISTUS POIS — Jaw Relaxation & Neck Mobility | PT Sakkinen",
    description:
      "5 minutes a day. 56 videos. One underlying clinical mechanism. Pilot group 49 €.",
    url: "https://www.ptsakkinen.com/puristus-pois",
    siteName: "PT Sakkinen",
    locale: "en_US",
    type: "website",
  },
};

export default function PuristusPoisPage() {
  return <PuristusPoisClient />;
}
