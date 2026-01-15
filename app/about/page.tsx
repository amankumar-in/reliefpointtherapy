import type { Metadata } from "next";
import { AboutProfile } from "@/components/about/about-profile"
import { Credentials } from "@/components/about/credentials"
import { OurMission } from "@/components/about/our-mission"
import { WhatMakesDifferent } from "@/components/about/what-makes-different"
import { ServiceArea } from "@/components/about/service-area"
import { WhyIBelieve } from "@/components/about/why-i-believe"
import { AboutFinalCTA } from "@/components/about/about-final-cta"

export const metadata: Metadata = {
  title: "Meet Your Nurse | About Relief Point Therapy",
  description: "Meet Genis Matel, RN - Founder of Relief Point Therapy. Learn about our mission to provide safe, non-invasive, nurse-led pain relief that helps people restore mobility, comfort, and confidence. Serving the East Bay area.",
  keywords: [
    "Genis Matel",
    "registered nurse",
    "East Bay pain relief",
    "nurse-led pain care",
    "Relief Point Therapy about",
    "NFPM provider",
    "Relatyv certified",
    "East Bay service area",
    "Brentwood",
    "Oakley",
    "Antioch",
    "Pittsburg",
    "Concord",
    "Walnut Creek",
    "Danville",
    "San Ramon",
    "Dublin",
    "Pleasanton",
    "Livermore",
  ],
  openGraph: {
    title: "Meet Your Nurse | About Relief Point Therapy",
    description: "Meet Genis Matel, RN - Founder of Relief Point Therapy. Learn about our mission to provide safe, non-invasive, nurse-led pain relief in the East Bay.",
    url: "/about",
    images: [
      {
        url: "/assets/images/genis-headshot.png",
        width: 800,
        height: 1000,
        alt: "Genis Matel, RN - Founder of Relief Point Therapy",
      },
    ],
  },
  twitter: {
    title: "Meet Your Nurse | About Relief Point Therapy",
    description: "Meet Genis Matel, RN - Founder of Relief Point Therapy. Learn about our mission to provide safe, non-invasive, nurse-led pain relief.",
    images: ["/assets/images/genis-headshot.png"],
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutProfile />
      <Credentials />
      <OurMission />
      <WhatMakesDifferent />
      <ServiceArea />
      <WhyIBelieve />
      <AboutFinalCTA />
    </div>
  )
}
