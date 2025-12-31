import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Nrf2FinalCTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white">
            Ready to Support Your Healing?
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Daily cellular activation can help you begin feeling better from the inside out.
          </p>
          <div className="pt-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded shadow-lg hover:shadow-xl transition-all h-14 px-10 text-lg">
              <Link href="/products">
                Shop Products
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
