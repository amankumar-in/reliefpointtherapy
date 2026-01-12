"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white h-[calc(100vh-80px)] min-h-[600px] flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-indigo-50/30 to-teal-50/30 z-0" />
      
      {/* Decorative Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 h-full py-8 md:py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center h-full">
          {/* Right Column: Image Presentation (Above content on mobile) */}
          <div className="relative flex items-center justify-center lg:justify-end lg:order-2 py-4 lg:py-0">
            <div className="relative group perspective-[1000px]">
              {/* Glass Card Effect */}
              <div className="relative z-10 bg-white/60 backdrop-blur-md border border-white/40 rounded-3xl p-1 md:p-2 overflow-hidden shadow-2xl transform transition-all duration-700 group-hover:[transform:rotateY(6deg)_scale(1.02)] ring-1 ring-slate-900/5">
                <div className="relative aspect-[3/2] w-[280px] xs:w-[320px] md:w-[450px] lg:w-[500px] xl:w-[600px] overflow-hidden rounded-2xl">
                  <Image
                    src="/assets/images/hand-holding.png"
                    alt="Compassionate Care - Relief Point Therapy"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                  {/* Subtle overlay to help white text pop if needed, though here we want the colors */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40" />
                </div>
              </div>

              {/* Decorative elements behind image */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>
          </div>

          {/* Left Column: TextContent */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8 text-center lg:text-left lg:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl text-slate-900 tracking-tight leading-[1.1] font-bold">
                Pain Relief That <br />
                <AuroraText colors={["#0F8B8D", "#20B2AA", "#40E0D0", "#0F8B8D"]} speed={0.8}>
                  Helps You Heal
                </AuroraText>
                <span className="block mt-2 font-bold">Not Just Cope</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed font-medium">
                Experience non-invasive, drug-free pain relief covered by Medicare, provided in the professional comfort of your home.
              </p>
            </div>

            <div className="flex flex-row gap-2 sm:gap-4 justify-center lg:justify-start pt-4">
              <ShimmerButton className="h-11 sm:h-14 px-4 sm:px-8 text-sm sm:text-lg font-semibold shadow-xl shadow-teal-900/10" background="#0F8B8D" shimmerColor="#ffffff">
                <Link href="/nfpm">Learn About NFPM</Link>
              </ShimmerButton>
              
              <Button asChild variant="outline" size="lg" className="bg-white border-slate-200 text-slate-900 hover:bg-slate-50 text-xs sm:text-lg h-11 sm:h-14 px-4 sm:px-8 rounded-full transition-all shadow-sm hover:shadow-md">
                <Link href="/nrf2">Start My Cellular Healing</Link>
              </Button>
            </div>
            
            <div className="hidden lg:flex items-center justify-center lg:justify-start gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden ring-1 ring-slate-900/5">
                    <Image src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="User" width={40} height={40} />
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500 font-sans">
                <span className="text-slate-900 font-bold">500+</span> patients treated in East Bay
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
