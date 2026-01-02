import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function NFPMHero() {
  return (
    <section className="relative py-16 md:py-20 bg-[#F6FAFA] overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #0F8B8D 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Non-Invasive Pain Relief</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary leading-tight">
              Neurofunctional Pain Management (NFPM)
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Drug-free, non-invasive, nurse-led pain relief in the comfort of your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded shadow-lg hover:shadow-xl transition-all h-12 px-8">
                <Link 
                  href="https://relatyv.formstack.com/forms/insurance_details" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verify My Insurance Benefits
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-muted rounded h-12 px-8">
                <Link href="/nrf2">
                  Learn About Cellular Activation
                </Link>
              </Button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] order-first lg:order-last rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/assets/images/hand-holding.png"
              alt="Nurse providing compassionate care"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
