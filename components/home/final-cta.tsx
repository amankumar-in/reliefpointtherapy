import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading">
          Ready to Begin Your Healing Journey?
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 font-sans">
          Whether you're exploring NFPM or starting with cellular support, I’m here to help guide you every step of the way.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-bold h-14 px-8 text-lg">
            <Link href="/nrf2">Start My Cellular Healing</Link>
          </Button>
          <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10 h-14 px-8 text-lg">
            <Link href="https://relatyv.formstack.com/forms/insurance_details" target="_blank">
               Verify My Insurance Benefits
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
