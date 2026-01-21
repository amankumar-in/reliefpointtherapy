"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export function Hero() {
  return (
    <section className="relative overflow-hidden h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/image2.png"
          alt="World Art Day Celebration"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay for text readability - Visible on mobile/tablet, hidden on desktop */}
        <div className="absolute inset-0 bg-white/70 sm:bg-white/60 lg:hidden" />
      </div>

      {/* Decorative Glows - Keep subtle */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
        
        {/* Main Content */}
        <div className="max-w-4xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-slate-900 tracking-tight leading-[1.1] font-bold">
              Pain Relief That <br />
              <AuroraText colors={["#0F8B8D", "#20B2AA", "#40E0D0", "#0F8B8D"]} speed={0.8}>
                Helps You Heal
              </AuroraText>
              <span className="block mt-2 font-bold">Not Just Cope</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto font-sans leading-relaxed font-medium">
              Experience non-invasive, drug-free pain relief covered by Medicare, provided in the professional comfort of your home.
            </p>
          </div>

          <div className="flex flex-row gap-2 sm:gap-4 justify-center lg:justify-start pt-4">
            <ShimmerButton className="h-11 sm:h-14 px-4 sm:px-8 text-sm sm:text-lg font-semibold shadow-xl shadow-teal-900/10" background="#0F8B8D" shimmerColor="#ffffff">
              <Link href="/nfpm">Learn About NFPM</Link>
            </ShimmerButton>
            
            <Button asChild variant="outline" size="lg" className="bg-white/80 backdrop-blur-sm border-slate-200 text-slate-900 hover:bg-white text-xs sm:text-lg h-11 sm:h-14 px-4 sm:px-8 rounded-full transition-all shadow-sm hover:shadow-md">
              <Link href="/nrf2">Start My Cellular Healing</Link>
            </Button>
          </div>
          
          <div className="hidden lg:flex items-center justify-center lg:justify-start gap-4 pt-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden ring-1 ring-slate-900/5">
                  <Image src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="User" width={40} height={40} />
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-600 font-sans">
              <span className="text-slate-900 font-bold">Thousands of</span> patients treated nationwide
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
