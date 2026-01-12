import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-teal-900 z-0" />
      <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-10 z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center space-y-8">
        <h2 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight">
          Ready to Begin Your Healing Journey?
        </h2>
        <p className="text-teal-50 text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90 leading-relaxed">
          Whether you're exploring NFPM or starting with cellular support, I’m here to help guide you every step of the way.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <ShimmerButton className="h-14 px-8 text-lg font-bold shadow-2xl w-full sm:w-auto text-primary" background="#ffffff" shimmerColor="#0F8B8D">
            <Link href="/nrf2" className="flex items-center justify-center w-full h-full gap-2">
              Start My Cellular Healing <ArrowRight className="h-5 w-5" />
            </Link>
          </ShimmerButton>

          <Button asChild size="lg" className="h-14 px-8 text-lg font-bold bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary rounded-[100px] w-full sm:w-auto transition-all shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            <Link href="https://relatyv.formstack.com/forms/insurance_details" target="_blank" className="flex items-center justify-center gap-2">
               Verify My Insurance Benefits <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
