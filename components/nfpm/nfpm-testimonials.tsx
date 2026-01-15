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
    caption: "Ed's Story: Peripheral neuropathy",
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
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Decor */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Real <span className="text-teal-600">Patient Stories</span>
              </h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                NFPM has helped many people reduce pain, regain mobility, and restore their quality of life — especially after other treatments failed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="cursor-pointer group relative"
                  onClick={() => setOpenVideo(index)}
                >
                  <div className="relative aspect-video flex items-center justify-center rounded-2xl overflow-hidden shadow-lg shadow-slate-200 border border-slate-100 transform group-hover:scale-[1.02] transition-all duration-500">
                    <Image
                      src={testimonial.thumbnail}
                      alt={`${testimonial.name}'s Story`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/30 transition-colors" />
                    
                    {/* Play Button */}
                    <div className="relative z-10 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                        <div className="bg-white text-teal-600 p-3 rounded-full shadow-lg">
                            <Play className="h-6 w-6 fill-current ml-1" />
                        </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                        {testimonial.name}
                    </h3>
                    <p className="text-slate-500 text-sm">
                        {testimonial.caption.split(": ")[1]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {openVideo !== null && (
        <Dialog open={openVideo !== null} onOpenChange={() => setOpenVideo(null)}>
          <DialogContent className="max-w-5xl p-0 border-0 bg-black overflow-hidden aspect-video">
            <div className="w-full h-full relative">
              <iframe
                src={getVimeoEmbedUrl(testimonials[openVideo].vimeoUrl) + "?autoplay=1"}
                className="w-full h-full"
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
