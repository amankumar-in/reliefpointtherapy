"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Card } from "@/components/ui/card"

export function ABCNewsFeature() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const videoUrl = "https://lfvn.co/qvnr9dgymi/"

  return (
    <>
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading text-primary">
                As Seen on ABC News
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                Protandim Nrf2 gained national attention when ABC News aired an investigative report on oxidative stress and the science behind activating the body&apos;s own antioxidant pathways. This segment highlighted Protandim&apos;s unique mechanism of action and sparked national interest in cellular activation.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
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
                      <h3 className="text-2xl md:text-3xl font-heading text-primary">ABC News Investigative Report</h3>
                      <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
                        Watch the segment that brought Protandim Nrf2 to national attention
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>ABC News Feature: Protandim Nrf2</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full">
            <iframe
              src={videoUrl}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="ABC News Feature on Protandim Nrf2"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
