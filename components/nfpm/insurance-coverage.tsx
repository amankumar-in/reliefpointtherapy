import Link from "next/link"
import { Button } from "@/components/ui/button"

export function InsuranceCoverage() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white">
            Insurance Coverage
          </h2>
          <div className="space-y-4 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            <p>
              NFPM treatments are <strong className="text-white">covered by Original Medicare (red-white-blue card).</strong>
            </p>
            <p>
              Cash-pay options also available.
            </p>
          </div>
          <div className="pt-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded shadow-lg hover:shadow-xl transition-all h-14 px-10 text-lg">
              <Link 
                href="https://relatyv.formstack.com/forms/insurance_details"
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify My Insurance Benefits
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
