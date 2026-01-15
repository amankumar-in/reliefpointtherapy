"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import { Card } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function ProductsVideoTestimonial() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const videoUrl = "https://www.youtube.com/watch?v=swaeIXZ3u60"

  return (
    <>
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
              
              {/* Left Column: Text Content */}
              <div className="space-y-8 order-2 lg:order-1">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                    Real Stories, <br/>
                    <span className="text-teal-600">Real Results</span>
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-teal-500 pl-6">
                    "These stories reflect real people using NFPM and cellular activation together as part of a whole-person approach."
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">A Firefighter&apos;s Recovery Story</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    After falling three stories on duty, a local firefighter struggled with pain and mobility issues. After beginning NFPM, Protandim Nrf2, and liquid collagen, he experienced meaningful improvements in recovery and daily function.
                  </p>
                </div>
              </div>

              {/* Right Column: Video Card */}
              <div className="order-1 lg:order-2">
                <Card 
                  className="cursor-pointer hover:shadow-2xl transition-all duration-300 border-none rounded-2xl overflow-hidden group shadow-xl bg-slate-900"
                  onClick={() => setIsVideoOpen(true)}
                >
                  <div className="relative aspect-video">
                    <Image
                      src="/assets/images/firefighter-story-1.png"
                      alt="A Firefighter's Recovery Story"
                      fill
                      className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-6 group-hover:scale-110 transition-all duration-300 shadow-2xl">
                        <div className="bg-white rounded-full p-4 shadow-lg text-teal-600 pl-5">
                             <Play className="h-8 w-8 fill-current" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl bg-black border-slate-800 p-0 overflow-hidden">
          <DialogHeader className="sr-only">
            <DialogTitle>A Firefighter&apos;s Recovery Story</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full">
            <iframe
              src={videoUrl.replace("watch?v=", "embed/")}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Firefighter Recovery Story"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
