import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { AuroraText } from "@/components/ui/aurora-text"
import { ArrowDown, Play } from "lucide-react"

export function Nrf2Hero() {
  return (
    <section className="relative pt-16 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-white">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-teal-200/20 rounded-full blur-[120px] opacity-40" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8 order-last lg:order-first">
                <div className="hidden lg:inline-block animate-fade-in-up">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-medium tracking-wide shadow-sm">
                        <span className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
                        Daily Wellness Support
                    </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 leading-[1.1]">
                    Activate Your Body&apos;s <br />
                    <AuroraText colors={["#0F8B8D", "#14B8A6", "#6366F1", "#0F8B8D"]} speed={0.8}>
                        Natural Healing
                    </AuroraText>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                    Science-backed Nrf2 activation to reduce oxidative stress, lower inflammation, and support healthy aging from the cellular level up.
                </p>

                <div className="flex flex-row flex-wrap gap-3 justify-center lg:justify-start pt-4">
                    <Link href="#products">
                        <ShimmerButton className="h-12 md:h-14 px-5 md:px-8 text-base md:text-lg font-semibold shadow-xl shadow-teal-900/10" background="#0F8B8D" shimmerColor="#ffffff">
                            Shop Collections
                        </ShimmerButton>
                    </Link>
                    <Button asChild variant="ghost" size="lg" className="text-slate-600 hover:text-teal-700 hover:bg-teal-50 rounded-full h-12 md:h-14 px-5 md:px-8 text-base md:text-lg border border-transparent hover:border-teal-100">
                        <Link href="#science" className="flex items-center gap-2">
                             The Science <ArrowDown className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Right Content - Hero Image Placement */}
            <div className="relative mx-auto lg:mr-0 max-w-[280px] md:max-w-[400px] lg:max-w-none w-full order-first lg:order-last flex justify-center -mt-6 md:mt-0">
                 <div className="relative w-full max-w-[500px]">
                    <Image 
                         src="/assets/images/teal-flower-transparent.png" 
                         alt="Natural Healing" 
                         width={600}
                         height={600}
                         className="w-full h-auto object-contain drop-shadow-2xl animate-fade-in-up"
                         priority
                    />
                 </div>
                
                {/* Decor */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-teal-500/20 rounded-full blur-[80px]" />
            </div>

        </div>
      </div>
    </section>
  )
}
