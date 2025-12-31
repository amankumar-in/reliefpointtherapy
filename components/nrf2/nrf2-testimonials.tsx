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

// All testimonial images from Nrf2_Testimonial folder
const testimonials = [
  { id: 1, image: "/assets/images/Nrf2_Testimonial/energy_ back pain, migraines.png" },
  { id: 2, image: "/assets/images/Nrf2_Testimonial/energy_ sleep.png" },
  { id: 3, image: "/assets/images/Nrf2_Testimonial/energy-back-pain-migraines-AzGMLa8Gl7HoWZqb.png" },
  { id: 4, image: "/assets/images/Nrf2_Testimonial/energy-sleep-A1azxVQaJeF56R2b.png" },
  { id: 5, image: "/assets/images/Nrf2_Testimonial/general_ eyes.png" },
  { id: 6, image: "/assets/images/Nrf2_Testimonial/general_ migraine (2).png" },
  { id: 7, image: "/assets/images/Nrf2_Testimonial/general_ migraine (3).png" },
  { id: 8, image: "/assets/images/Nrf2_Testimonial/general_ migraine.png" },
  { id: 9, image: "/assets/images/Nrf2_Testimonial/general_ off meds.png" },
  { id: 10, image: "/assets/images/Nrf2_Testimonial/general-migraine-2-YNqM7zpqQou9Rvyw.png" },
  { id: 11, image: "/assets/images/Nrf2_Testimonial/general-sleep-fatigue-brain-fog-aches-YNqM7zpLaQFk6LGP.png" },
  { id: 12, image: "/assets/images/Nrf2_Testimonial/general.png" },
  { id: 13, image: "/assets/images/Nrf2_Testimonial/nrf2 allergies.png" },
  { id: 14, image: "/assets/images/Nrf2_Testimonial/nrf2 allergy (2).png" },
  { id: 15, image: "/assets/images/Nrf2_Testimonial/nrf2 allergy (3).png" },
  { id: 16, image: "/assets/images/Nrf2_Testimonial/nrf2 allergy (4).png" },
  { id: 17, image: "/assets/images/Nrf2_Testimonial/nrf2 allergy.png" },
  { id: 18, image: "/assets/images/Nrf2_Testimonial/nrf2 nrf1 allergy.png" },
  { id: 19, image: "/assets/images/Nrf2_Testimonial/nrf2_ eyes.png" },
  { id: 20, image: "/assets/images/Nrf2_Testimonial/nrf2-allergies-mv0PBM408GHvGvPR.png" },
  { id: 21, image: "/assets/images/Nrf2_Testimonial/off pain meds.png" },
  { id: 22, image: "/assets/images/Nrf2_Testimonial/off pain meds(1).png" },
  { id: 23, image: "/assets/images/Nrf2_Testimonial/RA.png" },
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

            <div className="space-y-8">
              {/* Featured Video Testimonial */}
              <div className="max-w-4xl mx-auto">
                <Card 
                  className="cursor-pointer hover:shadow-xl transition-all border border-border rounded-lg overflow-hidden"
                  onClick={() => setIsVideoOpen(true)}
                >
                  <div className="relative aspect-video group">
                    <Image
                      src="/assets/images/firefighter-story-1.png"
                      alt="A Firefighter's Recovery Story"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
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

              {/* Testimonials Carousel - Full Width */}
              <div className="w-full">
                <Carousel
                  opts={{
                    align: "start",
                    loop: false,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {testimonials.map((testimonial) => (
                      <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-[85%] sm:basis-[70%] md:basis-1/2 lg:basis-1/3 xl:basis-1/3">
                        <Card className="relative border border-[#E2E8E8] rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden aspect-[2/1]">
                          <Image
                            src={testimonial.image}
                            alt={`Nrf2 Testimonial ${testimonial.id}`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 640px) 85vw, (max-width: 768px) 70vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                          />
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 md:left-4 bg-primary text-white border-primary hover:bg-primary/90 hover:text-white" />
                  <CarouselNext className="right-2 md:right-4 bg-primary text-white border-primary hover:bg-primary/90 hover:text-white" />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl p-0 [&>button]:left-4 [&>button]:top-4 [&>button]:right-auto [&>button]:z-50 [&>button]:bg-white/95 [&>button]:backdrop-blur-sm [&>button]:rounded-full [&>button]:p-2 [&>button]:shadow-lg [&>button]:hover:bg-white [&>button]:opacity-100 [&>button>svg]:stroke-[3] [&>button>svg]:h-5 [&>button>svg]:w-5">
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
