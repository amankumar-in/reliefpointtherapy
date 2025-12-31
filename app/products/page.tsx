import { ProductsHero } from "@/components/products/products-hero"
import { ProductsStartHere } from "@/components/products/products-start-here"
import { ProductsVideoTestimonial } from "@/components/products/products-video-testimonial"
import { ProductsGrid } from "@/components/products/products-grid"
import { ProductsCostSaving } from "@/components/products/products-cost-saving"
import { ProductsTestimonials } from "@/components/products/products-testimonials"
import { ProductsPersonalizedPlan } from "@/components/products/products-personalized-plan"
import { ProductsFinalCTA } from "@/components/products/products-final-cta"

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
