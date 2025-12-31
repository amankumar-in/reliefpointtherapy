import Link from "next/link"
import { Button } from "@/components/ui/button"

export function NFPMFinalCTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            I&apos;m here to support you with nurse-led, non-invasive care that helps your body heal — not just mask pain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded shadow-lg hover:shadow-xl transition-all h-14 px-10 text-lg">
              <Link 
                href="https://relatyv.formstack.com/forms/insurance_details"
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify My Insurance Benefits
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="border-2 border-white text-white hover:bg-white/10 rounded h-14 px-10 text-lg">
              <Link href="/nrf2">
                Start My Cellular Healing
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
