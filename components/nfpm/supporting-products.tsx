import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SupportingProducts() {
  return (
    <section className="py-20 md:py-32 bg-[#F6FAFA]">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-heading text-primary">
            Want to Start Supporting Your Healing Today?
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            Daily cellular activation products like Protandim Nrf2, GlowStack, and Dual or Tri Synergizer can support inflammation reduction, recovery, and cellular health. They can be started on their own as daily wellness support or used alongside your NFPM program for faster, deeper results.
          </p>
          <div className="pt-4">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-muted rounded h-14 px-10 text-lg border-2">
              <Link href="/nrf2">
                Learn More About Cellular Activation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
