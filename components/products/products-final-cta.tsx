"use client"

import Link from "next/link"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { ArrowRight, Sparkles } from "lucide-react"

export function ProductsFinalCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-slate-50 border-t border-slate-200">
      {/* Background Elements - Subtle and Light */}
      <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-[0.03]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-200/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-teal-600 text-sm font-bold uppercase tracking-wider shadow-sm">
               <Sparkles className="h-4 w-4" />
               Start Your Journey
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
              Ready to Begin Your <br className="hidden md:block"/>
              <span className="text-teal-600">Healing?</span>
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Whether you're starting NFPM or exploring cellular activation, we're here to guide you every step of the way.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Link href="/nrf2" className="w-full sm:w-auto">
                <ShimmerButton className="w-full sm:w-auto h-16 px-10 text-lg font-bold shadow-xl shadow-teal-900/10" background="#0F8B8D" shimmerColor="#ffffff">
                    Start Cellular Healing <ArrowRight className="ml-3 h-5 w-5" />
                </ShimmerButton>
            </Link>
            
            <Link href="/nfpm" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto h-16 px-10 rounded-full border-2 border-slate-200 bg-white text-slate-700 font-bold hover:border-teal-600 hover:text-teal-600 transition-all duration-300 flex items-center justify-center shadow-sm">
                    Explore NFPM
                </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
