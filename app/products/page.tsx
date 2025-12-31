import type { Metadata } from "next";
import { ProductsHero } from "@/components/products/products-hero"
import { ProductsStartHere } from "@/components/products/products-start-here"
import { ProductsVideoTestimonial } from "@/components/products/products-video-testimonial"
import { ProductsGrid } from "@/components/products/products-grid"
import { ProductsCostSaving } from "@/components/products/products-cost-saving"
import { ProductsTestimonials } from "@/components/products/products-testimonials"
import { ProductsPersonalizedPlan } from "@/components/products/products-personalized-plan"
import { ProductsFinalCTA } from "@/components/products/products-final-cta"

export const metadata: Metadata = {
  title: "Products & Services | Pain Relief & Wellness Support",
  description: "Pain relief, wellness support, and cellular activation options — all in one place. Shop NFPM treatments, Nrf2 products, GlowStack, Dual Synergizer, Tri Synergizer, and more. Personalized plans available.",
  keywords: [
    "pain relief products",
    "wellness products",
    "Nrf2 products",
    "Protandim Nrf2",
    "GlowStack",
    "Dual Synergizer",
    "Tri Synergizer",
    "NFPM treatment",
    "cellular activation products",
    "wellness supplements",
    "health products",
    "pain management products",
    "inflammation support",
    "energy products",
    "recovery products",
  ],
  openGraph: {
    title: "Products & Services | Pain Relief & Wellness Support",
    description: "Pain relief, wellness support, and cellular activation options — all in one place. Shop NFPM treatments, Nrf2 products, and more.",
    url: "/products",
    images: [
      {
        url: "/assets/images/rpt-logo.png",
        width: 1200,
        height: 630,
        alt: "Relief Point Therapy - Products & Services",
      },
    ],
  },
  twitter: {
    title: "Products & Services | Pain Relief & Wellness Support",
    description: "Pain relief, wellness support, and cellular activation options — all in one place.",
    images: ["/assets/images/rpt-logo.png"],
  },
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ProductsHero />
      <ProductsStartHere />
      <ProductsVideoTestimonial />
      <ProductsGrid />
      <ProductsCostSaving />
      <ProductsTestimonials />
      <ProductsPersonalizedPlan />
      <ProductsFinalCTA />
    </div>
  )
}
