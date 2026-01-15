"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { AuroraText } from "@/components/ui/aurora-text"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function NFPMHero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const videoUrl = "https://www.youtube.com/watch?v=P2DyKBV_dUs"

  return (
    <>
      <section className="relative py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
        {/* Premium Background */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-teal-500/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/40 rounded-full blur-[100px]" />
            <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-[0.03]" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left space-y-8">
              
              <div className="inline-block animate-fade-in-up">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-600 text-sm font-medium tracking-wide shadow-sm backdrop-blur-sm">
                      <span className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
                      Non-Invasive Pain Relief
                  </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-slate-900 leading-[1.1]">
                <AuroraText colors={["#0F766E", "#0F8B8D", "#14B8A6", "#0F766E"]} speed={0.8}>
                   Neurofunctional
                </AuroraText>
                <br />
                Pain Management
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                Drug-free, non-invasive, nurse-led pain relief in the comfort of your home.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center lg:justify-start items-center">
                <ShimmerButton className="h-14 px-8 text-lg font-semibold shadow-xl shadow-teal-900/10" background="#0F8B8D" shimmerColor="#ffffff">
                    <Link 
                      href="https://relatyv.formstack.com/forms/insurance_details" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Verify My Insurance
                    </Link>
                </ShimmerButton>
                
                <Button asChild variant="ghost" size="lg" className="text-slate-600 hover:text-teal-700 hover:bg-teal-50/50 text-lg font-medium px-8 h-14 rounded-full">
                  <Link href="/nrf2">
                    Learn About Cellular Activation
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right side - Video Thumbnail */}
            <div className="relative group cursor-pointer order-first lg:order-last mx-auto w-full max-w-2xl lg:max-w-none" onClick={() => setIsVideoOpen(true)}>
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-100 transform group-hover:scale-[1.02] transition-all duration-500">
                <Image
                  src="/assets/images/nfpm-hero-thumb.png"
                  alt="Neurofunctional Pain Management Treatment"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors" />
                
                {/* Play Button - Centered */}
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-6 group-hover:bg-white/30 group-hover:scale-110 transition-all shadow-xl">
                    <div className="bg-white rounded-full p-4 shadow-lg text-teal-600">
                         <Play className="h-8 w-8 fill-current ml-1" />
                    </div>
                  </div>
                </div>
                
                {/* Text - Bottom */}
                <div className="absolute bottom-0 left-0 right-0 z-10 text-center p-6 md:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="space-y-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Patient Experience</h3>
                    <p className="text-white/90 text-sm md:text-base max-w-lg mx-auto leading-relaxed hidden sm:block">
                      Hear testimonials of real patients who have gotten out of pain.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Back Glows */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-5xl p-0 border-0 bg-black overflow-hidden aspect-video">
          <DialogHeader className="sr-only">
            <DialogTitle>Patient Experience</DialogTitle>
          </DialogHeader>
          <iframe
            src={videoUrl.replace("watch?v=", "embed/") + "?autoplay=1"}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Patient Experience"
          />
        </DialogContent>
      </Dialog>
    </>
  )
}
