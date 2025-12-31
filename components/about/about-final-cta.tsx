import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutFinalCTA() {
  return (
    <section className="py-20 md:py-32 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-heading text-white">
            Ready to Begin Your Healing Journey?
          </h2>
          
          <p className="text-xl text-white/90 leading-relaxed">
            Whether you&apos;re exploring NFPM or starting with cellular activation, I&apos;m here to help guide you every step of the way.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              asChild
              variant="ghost"
              className="bg-white text-primary hover:bg-white/90 border-2 border-white rounded"
            >
              <Link href="https://relatyv.formstack.com/forms/insurance_details" target="_blank" rel="noopener noreferrer">
                Verify My Insurance Benefits
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="bg-transparent text-white hover:bg-white/10 border-2 border-white rounded"
            >
              <Link href="/nrf2">Start My Cellular Healing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
