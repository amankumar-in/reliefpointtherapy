import type { Metadata } from "next";
import { Nrf2Hero } from "@/components/nrf2/nrf2-hero"
import { WhyCellularActivation } from "@/components/nrf2/why-cellular-activation"
import { ABCNewsFeature } from "@/components/nrf2/abc-news-feature"
import { MyStoryNrf2 } from "@/components/nrf2/my-story-nrf2"

import { ProductCards } from "@/components/nrf2/product-cards"
import { CostSavingTips } from "@/components/nrf2/cost-saving-tips"
import { Nrf2FAQ } from "@/components/nrf2/nrf2-faq"
import { Nrf2Testimonials } from "@/components/nrf2/nrf2-testimonials"
import { PersonalizedPlan } from "@/components/nrf2/personalized-plan"
import { Nrf2FinalCTA } from "@/components/nrf2/nrf2-final-cta"
import { NFPMTeaser } from "@/components/nrf2/nfpm-teaser"

export const metadata: Metadata = {
  title: "Cellular Activation & Daily Wellness Support | Nrf2 Products",
  description: "Nurse-recommended, science-backed products that support inflammation reduction, energy, recovery, and healthy aging. Cellular activation with Nrf2, GlowStack, and Dual Synergizer. Start immediately on your own or alongside NFPM.",
  keywords: [
    "Nrf2",
    "cellular activation",
    "cellular health",
    "Nrf2 products",
    "Protandim Nrf2",
    "GlowStack",
    "Dual Synergizer",
    "inflammation reduction",
    "energy support",
    "healthy aging",
    "cellular wellness",
    "LifeVantage",
    "wellness products",
    "daily supplements",
  ],
  openGraph: {
    title: "Cellular Activation & Daily Wellness Support | Nrf2 Products",
    description: "Nurse-recommended, science-backed products that support inflammation reduction, energy, recovery, and healthy aging. Start immediately on your own or alongside NFPM.",
    url: "/nrf2",
    images: [
      {
        url: "/assets/images/rpt-logo.png",
        width: 1200,
        height: 630,
        alt: "Relief Point Therapy - Cellular Activation Products",
      },
    ],
  },
  twitter: {
    title: "Cellular Activation & Daily Wellness Support | Nrf2 Products",
    description: "Nurse-recommended, science-backed products that support inflammation reduction, energy, recovery, and healthy aging.",
    images: ["/assets/images/rpt-logo.png"],
  },
};

export default function Nrf2Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nrf2Hero />
      <WhyCellularActivation />
      <ABCNewsFeature />
      <MyStoryNrf2 />

      <ProductCards />
      <CostSavingTips />
      <Nrf2FAQ />
      <Nrf2Testimonials />
      <PersonalizedPlan />
      <Nrf2FinalCTA />
      <NFPMTeaser />
    </div>
  )
}
