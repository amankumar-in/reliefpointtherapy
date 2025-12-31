"use client"

import { useState } from "react"
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
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/10 flex items-center justify-center group">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                <div className="relative z-10 text-center space-y-6 p-8">
                  <div className="bg-primary/95 rounded-full p-5 w-fit mx-auto group-hover:bg-primary group-hover:scale-110 transition-all shadow-lg">
                    <Play className="h-10 w-10 text-white fill-white ml-1" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-heading text-primary">A Firefighter&apos;s Recovery Story</h3>
                    <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
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
