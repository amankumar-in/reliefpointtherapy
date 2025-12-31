import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Nrf2Hero() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary">
            Cellular Activation & Daily Wellness Support
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            Nurse-recommended, science-backed products that support inflammation reduction, energy, recovery, and healthy aging — and can be started immediately.
          </p>
          <div className="pt-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded shadow-lg hover:shadow-xl transition-all h-12 px-8">
              <Link href="#products">
                Shop Products
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
