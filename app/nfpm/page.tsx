import type { Metadata } from "next";
import { NFPMHero } from "@/components/nfpm/nfpm-hero"
import { WhatIsNFPM } from "@/components/nfpm/what-is-nfpm"
import { HowNFPMWorks } from "@/components/nfpm/how-nfpm-works"
import { WhoNFPMHelps } from "@/components/nfpm/who-nfpm-helps"
import { InsuranceCoverage } from "@/components/nfpm/insurance-coverage"
import { TreatmentProgram } from "@/components/nfpm/treatment-program"
import { WhyChooseNFPM } from "@/components/nfpm/why-choose-nfpm"
import { WhatToExpect } from "@/components/nfpm/what-to-expect"
import { NFPMFAQ } from "@/components/nfpm/nfpm-faq"
import { NFPMTestimonials } from "@/components/nfpm/nfpm-testimonials"
import { NFPMFinalCTA } from "@/components/nfpm/nfpm-final-cta"
import { SupportingProducts } from "@/components/nfpm/supporting-products"
import { ProviderCallout } from "@/components/nfpm/provider-callout"

export const metadata: Metadata = {
  title: "Neurofunctional Pain Management (NFPM) | Non-Invasive Pain Relief",
  description: "Drug-free, non-invasive, nurse-led pain relief in the comfort of your home. NFPM uses FDA-cleared electroanalgesia to calm overactive pain pathways, promote circulation, and support healing. Coverage available through Original Medicare and most major PPOs.",
  keywords: [
    "NFPM",
    "neurofunctional pain management",
    "electroanalgesia",
    "non-invasive pain treatment",
    "FDA-cleared pain therapy",
    "Medicare pain treatment",
    "in-home NFPM",
    "chronic pain treatment",
    "neuromodulation",
    "pain pathway treatment",
    "drug-free pain relief",
    "East Bay NFPM",
    "Relatyv NFPM",
  ],
  openGraph: {
    title: "Neurofunctional Pain Management (NFPM) | Non-Invasive Pain Relief",
    description: "Drug-free, non-invasive, nurse-led pain relief in the comfort of your home. NFPM uses FDA-cleared electroanalgesia. Coverage available through Original Medicare and most major PPOs.",
    url: "/nfpm",
    images: [
      {
        url: "/assets/images/rpt-logo.png",
        width: 1200,
        height: 630,
        alt: "Relief Point Therapy - NFPM Pain Relief",
      },
    ],
  },
  twitter: {
    title: "Neurofunctional Pain Management (NFPM) | Non-Invasive Pain Relief",
    description: "Drug-free, non-invasive, nurse-led pain relief in the comfort of your home. Coverage available through Original Medicare and most major PPOs.",
    images: ["/assets/images/rpt-logo.png"],
  },
};

export default function NFPMPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ProviderCallout />
      <NFPMHero />
      <WhatIsNFPM />
      <HowNFPMWorks />
      <WhoNFPMHelps />
      <InsuranceCoverage />
      <TreatmentProgram />
      <WhyChooseNFPM />
      <WhatToExpect />
      <NFPMFAQ />
      <NFPMTestimonials />
      <NFPMFinalCTA />
      <SupportingProducts />
    </div>
  )
}
