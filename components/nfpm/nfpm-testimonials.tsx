"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"

const testimonials = [
  {
    name: "Ed",
    vimeoUrl: "https://vimeo.com/937856275",
    thumbnail: "/assets/images/ed-video-thumb.png",
    title: "Ed – Peripheral Neuropathy",
    caption: "Ed's Story: Peripheral neuropathy (DBN, DB2)",
  },
  {
    name: "Robert",
    vimeoUrl: "https://vimeo.com/937943380",
    thumbnail: "/assets/images/robert-video-thumb.png",
    title: "Robert – Plantar Fasciitis & Neuropathy",
    caption: "Robert's Story: Plantar fasciitis & neuropathy",
  },
  {
    name: "Wanda",
    vimeoUrl: "https://vimeo.com/938218963",
    thumbnail: "/assets/images/wanda-video-thumb.png",
    title: "Wanda – Knee & Leg Pain",
    caption: "Wanda's Story: Knee and leg pain",
  },
  {
    name: "Hayward",
    vimeoUrl: "https://vimeo.com/938258497",
    thumbnail: "/assets/images/hayward-video-thumb.png",
    title: "Hayward – Spinal Stenosis & Leg Pain",
    caption: "Hayward's Story: Work accident",
  },
]

// Helper function to convert Vimeo URL to embed format
function getVimeoEmbedUrl(vimeoUrl: string): string {
  const videoId = vimeoUrl.split("/").pop()
  return `https://player.vimeo.com/video/${videoId}`
}

export function NFPMTestimonials() {
  const [openVideo, setOpenVideo] = useState<number | null>(null)

  return (
    <>
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading text-primary">
                Real NFPM Patient Stories
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                NFPM has helped many people reduce pain, regain mobility, and restore their quality of life — especially after other treatments failed. These patient stories come directly from the Relatyv national NFPM program.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="cursor-pointer group"
                  onClick={() => setOpenVideo(index)}
                >
                  <div className="relative aspect-video flex items-center justify-center rounded-lg overflow-hidden">
                    <Image
                      src={testimonial.thumbnail}
                      alt={`${testimonial.name}'s Story`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <div className="relative z-10 bg-primary/95 rounded-full p-4 group-hover:bg-primary group-hover:scale-110 transition-all shadow-lg">
                      <Play className="h-8 w-8 text-white fill-white ml-1" />
                    </div>
                  </div>
                  <p className="text-sm text-foreground/80 mt-3 text-center">
                    <span className="text-primary font-semibold">
                      {testimonial.name}&apos;s Story:
                    </span>{" "}
                    {testimonial.caption.split(": ")[1]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {openVideo !== null && (
        <Dialog open={openVideo !== null} onOpenChange={() => setOpenVideo(null)}>
          <DialogContent className="max-w-4xl p-0 [&>button]:left-4 [&>button]:top-4 [&>button]:right-auto [&>button]:z-50 [&>button]:bg-white/95 [&>button]:backdrop-blur-sm [&>button]:rounded-full [&>button]:p-2 [&>button]:shadow-lg [&>button]:hover:bg-white [&>button]:opacity-100 [&>button>svg]:stroke-[3] [&>button>svg]:h-5 [&>button>svg]:w-5">
            <div className="aspect-video w-full relative">
              <iframe
                src={getVimeoEmbedUrl(testimonials[openVideo].vimeoUrl)}
                className="w-full h-full rounded-lg"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={testimonials[openVideo].title}
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
