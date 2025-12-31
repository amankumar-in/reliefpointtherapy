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
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading text-primary">
                Real Stories, Real Results
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed italic">
                These stories reflect real people using NFPM and cellular activation together as part of a whole-person approach.
              </p>
            </div>

            <Card 
              className="cursor-pointer hover:shadow-xl transition-all border border-border rounded-lg overflow-hidden"
              onClick={() => setIsVideoOpen(true)}
            >
              <div className="relative aspect-video group">
                <Image
                  src="/assets/images/firefighter-story-1.png"
                  alt="A Firefighter's Recovery Story"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1024px"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                
                {/* Play Button - Centered */}
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <div className="bg-primary/95 rounded-full p-4 md:p-5 w-fit mx-auto group-hover:bg-primary group-hover:scale-110 transition-all shadow-lg">
                    <Play className="h-8 w-8 md:h-10 md:w-10 text-white fill-white ml-1" />
                  </div>
                </div>
                
                {/* Text - Bottom */}
                <div className="absolute bottom-0 left-0 right-0 z-10 text-center p-4 md:p-8">
                  <div className="space-y-1 md:space-y-2">
                    <h3 className="text-base md:text-3xl font-heading text-white drop-shadow-lg">A Firefighter&apos;s Recovery Story</h3>
                    <p className="text-white/90 text-xs md:text-lg max-w-2xl mx-auto drop-shadow-md hidden md:block">
                      After falling three stories on duty, a local firefighter struggled with pain and mobility issues. After beginning NFPM, Protandim Nrf2, and liquid collagen, he experienced meaningful improvements in recovery and daily function.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>A Firefighter&apos;s Recovery Story</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full">
            <iframe
              src={videoUrl.replace("watch?v=", "embed/")}
              className="w-full h-full rounded-lg"
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
