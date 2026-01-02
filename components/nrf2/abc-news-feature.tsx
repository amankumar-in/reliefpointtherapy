"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"

// Helper function to convert YouTube URL to embed format
function getYouTubeEmbedUrl(youtubeUrl: string): string {
  const videoId = youtubeUrl.includes("youtu.be/")
    ? youtubeUrl.split("youtu.be/")[1].split("?")[0]
    : youtubeUrl.split("v=")[1]?.split("&")[0]
  return `https://www.youtube.com/embed/${videoId}`
}

export function ABCNewsFeature() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const youtubeUrl = "https://youtu.be/6Wqbl1hxOso?si=Nt3P4zIp5a8I1YVA"

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
              <div
                className="cursor-pointer group"
                onClick={() => setIsVideoOpen(true)}
              >
                <div className="relative aspect-video flex items-center justify-center rounded-lg overflow-hidden">
                  <Image
                    src="/assets/images/abc-news-thumb.png"
                    alt="ABC News Feature on Protandim Nrf2"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 1024px"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="relative z-10 bg-primary/95 rounded-full p-4 group-hover:bg-primary group-hover:scale-110 transition-all shadow-lg">
                    <Play className="h-8 w-8 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
          <DialogContent className="max-w-4xl p-0 [&>button]:left-4 [&>button]:top-4 [&>button]:right-auto [&>button]:z-50 [&>button]:bg-white/95 [&>button]:backdrop-blur-sm [&>button]:rounded-full [&>button]:p-2 [&>button]:shadow-lg [&>button]:hover:bg-white [&>button]:opacity-100 [&>button>svg]:stroke-[3] [&>button>svg]:h-5 [&>button>svg]:w-5">
            <div className="aspect-video w-full relative">
              <iframe
                src={getYouTubeEmbedUrl(youtubeUrl)}
                className="w-full h-full rounded-lg"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="ABC News Feature on Protandim Nrf2"
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
