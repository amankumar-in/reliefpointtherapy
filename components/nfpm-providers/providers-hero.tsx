"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AuroraText } from "@/components/ui/aurora-text"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { CheckCircle2, ArrowDown } from "lucide-react"

export function ProvidersHero() {
  return (
    <section className="relative w-full py-12 md:py-32 lg:py-32 bg-white overflow-hidden flex flex-col items-center justify-center text-center">
      
      {/* Background - Distinct from homepage, using more radial centric glows */}
      <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-teal-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/40 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-[0.03]" />
      </div>

      <div className="container px-4 md:px-6 relative z-10 max-w-5xl mx-auto space-y-8 md:space-y-12">
        
        {/* Badge */}
        <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-teal-600 to-teal-500 text-white text-sm font-medium tracking-wide shadow-lg shadow-teal-500/20 border border-teal-400/20 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                For Licensed Healthcare Providers
            </span>
        </div>

        {/* Heading - Centered and Massive */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-slate-900 leading-[1.1]">
          A Clinical Partner for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-500 to-indigo-500">
             Chronic Pain
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
           Extend your care into the home with Neurofunctional Pain Management.
           <span className="block mt-2 font-medium text-slate-900">Real. Safe. Rapid. 100% Non-Invasive.</span>
        </p>

        {/* CTA Group - Center Aligned */}
        <div className="flex flex-row gap-3 sm:gap-5 justify-center items-center pt-4 w-full px-2 sm:px-0">
             <div className="w-1/2 sm:w-auto">
                 <Link href="mailto:refer@reliefpointtherapy.com" className="w-full block">
                     <ShimmerButton className="h-12 sm:h-14 px-4 sm:px-10 text-sm sm:text-lg font-semibold shadow-xl shadow-teal-900/5 w-full text-center flex justify-center items-center" background="#0F8B8D" shimmerColor="#ffffff">
                         Refer a Patient
                     </ShimmerButton>
                 </Link>
             </div>
             <Button asChild variant="ghost" size="lg" className="text-slate-600 hover:text-teal-700 hover:bg-teal-50/50 text-sm sm:text-lg font-medium px-2 sm:px-8 h-12 sm:h-14 rounded-full w-1/2 sm:w-auto">
                 <Link href="#clinical-overview" className="flex items-center justify-center gap-1 sm:gap-2">
                    Clinical Overview <ArrowDown className="h-3 w-3 sm:h-4 sm:w-4" />
                 </Link>
             </Button>
        </div>

        {/* Features Row - Unique to this page */}
        <div className="pt-12 md:pt-16 grid grid-cols-3 gap-2 sm:gap-8 border-t border-slate-100 max-w-4xl mx-auto w-full">
            {[
                { label: "Medicare Covered", desc: "& Major PPOs" },
                { label: "Zero Practice Cost", desc: "Turnkey Implementation" },
                { label: "Nurse-Led Care", desc: "100% At-Home Delivery" }
            ].map((item, i) => (
                <div key={i} className="flex flex-col items-center justify-start p-2 sm:p-4 text-center">
                    <div className="font-bold text-slate-900 text-sm sm:text-lg flex flex-col sm:flex-row items-center gap-1 sm:gap-2 leading-tight mb-1 sm:mb-0">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-teal-500 shrink-0" />
                        <span>{item.label}</span>
                    </div>
                    <div className="text-slate-500 text-xs sm:text-sm leading-tight hidden xs:block">{item.desc}</div>
                </div>
            ))}
        </div>

      </div>
    </section>
  )
}
