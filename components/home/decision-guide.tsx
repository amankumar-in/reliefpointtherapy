import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export function DecisionGuide() {
  return (
    <section className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl text-slate-900 font-bold tracking-tight">
            Start Here: Choose Your Path
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
            Select the option that best fits your current health needs
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-gradient-to-br from-primary/90 to-teal-900 relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-10 z-0" />
          <div className="grid md:grid-cols-2 relative z-10">
            
            {/* Center Divider */}
            <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-white/20 transform -translate-x-1/2 z-20" />
            <div className="md:hidden absolute top-1/2 left-8 right-8 h-px bg-white/20 transform -translate-y-1/2 z-20" />

            {/* Option 1: NFPM */}
            <Link href="/nfpm" className="group relative p-8 md:p-12 lg:p-16 hover:bg-white/5 transition-colors duration-500">
              <div className="flex flex-col h-full items-center text-center space-y-6">
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold tracking-wider uppercase backdrop-blur-md">
                  Option 1
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                  NFPM (Pain Relief Program)
                </h3>
                <p className="text-teal-50/90 text-lg leading-relaxed flex-1">
                  Best for moderate to severe pain, mobility issues, neuropathy, sciatica, knee or back pain, and other chronic pain conditions.
                </p>
                <div className="w-full pt-4">
                    <div className="text-sm text-teal-100 font-medium mb-8">
                        📍 Available to patients local to the East Bay (Coverage available through Original Medicare).
                    </div>
                    <ShimmerButton className="w-full text-primary font-bold h-12 text-lg group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all" background="#ffffff" shimmerColor="#0F8B8D">
                         <Link href="/nfpm" className="flex items-center justify-center w-full h-full gap-2">
                            Explore NFPM <ArrowRight className="h-4 w-4" />
                         </Link>
                    </ShimmerButton>
                </div>
              </div>
            </Link>

            {/* Option 2: Cellular Activation */}
            <Link href="/nrf2" className="group relative p-8 md:p-12 lg:p-16 hover:bg-white/5 transition-colors duration-500">
              <div className="flex flex-col h-full items-center text-center space-y-6">
                <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-200/20 text-indigo-50 text-sm font-bold tracking-wider uppercase backdrop-blur-md">
                  Option 2
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                  Cellular Activation (Daily Wellness)
                </h3>
                <p className="text-teal-50/90 text-lg leading-relaxed flex-1">
                  Best for mild to moderate inflammation, low energy, healthy aging, recovery, and many other wellness goals — especially for those who want to start supporting their health right away.
                </p>
                <div className="w-full pt-4">
                    <div className="text-sm text-teal-100 font-medium mb-8">
                        📦 Ships directly to your doorstep.
                    </div>
                    <Button variant="outline" className="w-full bg-transparent border-white text-white hover:bg-white hover:text-primary font-bold h-12 text-lg rounded-[100px] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all">
                        <Link href="/nrf2" className="flex items-center justify-center w-full h-full gap-2">
                            Explore Cellular Activation <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
