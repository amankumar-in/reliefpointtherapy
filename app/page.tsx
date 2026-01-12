import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { BenefitStrip } from "@/components/home/benefit-strip";
import { MeetNurse } from "@/components/home/meet-nurse";
import { NFPMPreview, Nrf2Preview } from "@/components/home/service-previews";
import { DecisionGuide } from "@/components/home/decision-guide";
import { Testimonials } from "@/components/home/testimonials";
import { FinalCTA } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "Pain Relief That Helps You Heal Not Just Cope",
  description: "Non-invasive, drug-free pain relief covered by Medicare, provided in the comfort of your home. NFPM treatments and cellular activation for chronic pain, knee pain, back pain, and nerve-related conditions in the East Bay.",
  keywords: [
    "pain relief",
    "non-invasive pain treatment",
    "NFPM",
    "neurofunctional pain management",
    "East Bay pain relief",
    "Medicare pain treatment",
    "in-home pain therapy",
    "nurse-led pain care",
    "chronic pain treatment",
    "drug-free pain relief",
    "cellular activation",
    "knee pain",
    "back pain",
    "nerve pain",
  ],
  openGraph: {
    title: "Pain Relief That Helps You Heal Not Just Cope | Relief Point Therapy",
    description: "Non-invasive, drug-free pain relief covered by Medicare, provided in the comfort of your home. NFPM treatments and cellular activation for chronic pain.",
    url: "/",
    images: [
      {
        url: "/assets/images/genis-homepage-hero.png",
        width: 1200,
        height: 630,
        alt: "Genis Matel, RN - Relief Point Therapy",
      },
    ],
  },
  twitter: {
    title: "Pain Relief That Helps You Heal Not Just Cope",
    description: "Non-invasive, drug-free pain relief covered by Medicare, provided in the comfort of your home.",
    images: ["/assets/images/genis-homepage-hero.png"],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <BenefitStrip />
      <MeetNurse />
      <NFPMPreview />
      <Nrf2Preview />
      <DecisionGuide />
      <Testimonials />
      {/* Email Lead Magnet Pop-up would be injected here or in Layout */}
      <FinalCTA />
    </div>
  );
}
