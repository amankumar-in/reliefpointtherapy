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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

// Placeholder testimonials - replace with actual images from the Google Drive folder
const testimonials = [
  {
    id: 1,
    image: "/assets/images/placeholder-image-landscape.avif",
    text: "Testimonial text will appear here. Last names will be blurred.",
    name: "First Name",
  },
  {
    id: 2,
    image: "/assets/images/placeholder-image-landscape.avif",
    text: "Testimonial text will appear here. Last names will be blurred.",
    name: "First Name",
  },
  {
    id: 3,
    image: "/assets/images/placeholder-image-landscape.avif",
    text: "Testimonial text will appear here. Last names will be blurred.",
    name: "First Name",
  },
  {
    id: 4,
    image: "/assets/images/placeholder-image-landscape.avif",
    text: "Testimonial text will appear here. Last names will be blurred.",
    name: "First Name",
  },
  {
    id: 5,
    image: "/assets/images/placeholder-image-landscape.avif",
    text: "Testimonial text will appear here. Last names will be blurred.",
    name: "First Name",
  },
]

export function Nrf2Testimonials() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const videoUrl = "https://www.youtube.com/watch?v=swaeIXZ3u60"

  return (
    <>
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading text-primary">
                What People Are Saying
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {/* Featured Video Testimonial */}
              <Card 
                className="cursor-pointer hover:shadow-lg transition-shadow border border-border rounded-lg overflow-hidden"
                onClick={() => setIsVideoOpen(true)}
              >
                <div className="relative aspect-video bg-muted flex items-center justify-center group">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="relative z-10 text-center space-y-4 p-6">
                    <div className="bg-primary/90 rounded-full p-4 w-fit mx-auto group-hover:bg-primary transition-colors">
                      <Play className="h-8 w-8 text-white fill-white ml-1" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-heading text-white">A Firefighter&apos;s Story</h3>
                      <p className="text-white/90 max-w-2xl">
                        A local firefighter fell three stories and struggled with ongoing injuries and pain. After starting Nrf2 and liquid collagen, he experienced meaningful improvements in recovery and daily function.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Testimonials Carousel */}
              <div className="relative">
                <Carousel
                  opts={{
                    align: "start",
                    loop: false,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {testimonials.map((testimonial) => (
                      <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                        <Card className="border border-[#E2E8E8] rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                          <div className="relative aspect-[4/3] bg-muted">
                            <Image
                              src={testimonial.image}
                              alt={`Testimonial from ${testimonial.name}`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          </div>
                          <div className="p-4 space-y-2">
                            <p className="text-sm text-foreground/80 leading-relaxed">
                              {testimonial.text}
                            </p>
                            <p className="text-sm font-semibold text-primary">
                              — {testimonial.name}
                            </p>
                          </div>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-0 md:-left-12" />
                  <CarouselNext className="right-0 md:-right-12" />
                </Carousel>
              </div>
            </div>
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
