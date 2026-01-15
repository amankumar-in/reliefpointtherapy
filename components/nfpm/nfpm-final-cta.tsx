import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { ArrowRight } from "lucide-react"

export function NFPMFinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
       {/* Background */}
       <div className="absolute inset-0 bg-slate-900" />
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
       
       <div className="container mx-auto px-4 md:px-6 relative z-10">
         <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter">
                Ready to Begin Your <br />
                <span className="text-teal-400">Healing Journey?</span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed font-light max-w-2xl mx-auto">
                I&apos;m here to support you with nurse-led, non-invasive care that helps your body heal — not just mask pain.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                <ShimmerButton className="h-16 px-10 text-xl font-semibold shadow-2xl shadow-teal-500/20" background="#0F8B8D" shimmerColor="#ffffff">
                    <Link 
                        href="https://relatyv.formstack.com/forms/insurance_details"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                    >
                        Verify My Insurance Benefits
                    </Link>
                </ShimmerButton>
                
                <Link href="/nrf2" className="group flex items-center gap-2 text-white hover:text-teal-400 transition-colors text-lg font-medium px-4">
                    Start My Cellular Healing
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
         </div>
       </div>
    </section>
  )
}
