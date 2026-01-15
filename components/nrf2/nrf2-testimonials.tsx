"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"

// Testimonial Images
const testimonials = [
  { id: 1, image: "/assets/images/product-testimonial/collagen back injections.png" },
  { id: 2, image: "/assets/images/product-testimonial/collagen back pain_ injections.png" },
  { id: 3, image: "/assets/images/product-testimonial/collagen back pain.png" },
  { id: 4, image: "/assets/images/product-testimonial/collagen fibromyalgia.png" },
  { id: 5, image: "/assets/images/product-testimonial/collagen, post op knee.png" },
  { id: 6, image: "/assets/images/product-testimonial/nrf1 nrf2 collagen; knees.png" },
]

export function Nrf2Testimonials() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const videoUrl = "https://www.youtube.com/embed/swaeIXZ3u60"

  const [loaded, setLoaded] = useState<Set<number>>(new Set())

  useEffect(() => {
    if (!api) return

    const updateLoaded = () => {
      const visibleCount = api.slidesInView().length
      // Current snap index
      const currentIndex = api.selectedScrollSnap()
      
      // Calculate a generous window of "loaded" slides around the current view
      // This prevents white flashes during quick scrolls
      const indicesToLoad = new Set<number>()
      
      // Load current view + buffer
      for (let i = -1; i <= visibleCount + 1; i++) {
        const rawIdx = currentIndex + i
        // Handle wrapping for infinite loop
        const normalizedIdx = (rawIdx + testimonials.length * 10) % testimonials.length
        indicesToLoad.add(normalizedIdx)
      }

      setLoaded(prev => {
        const next = new Set(prev)
        let hasNew = false
        indicesToLoad.forEach(idx => {
          if (!next.has(idx)) {
            next.add(idx)
            hasNew = true
          }
        })
        return hasNew ? next : prev
      })
    }

    // Initial load
    updateLoaded()
    
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
      updateLoaded()
    })
    
    // Also listen to scroll to load slightly ahead
    api.on("scroll", updateLoaded)

  }, [api])

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">


        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            {/* Video Story */}
            <div className="space-y-6">
                <div className="inline-block px-3 py-1 bg-teal-50 text-teal-700 border border-teal-100 rounded-full text-xs font-bold tracking-wider uppercase">
                    Featured Story
                </div>
                <h3 className="text-3xl font-bold text-slate-900 leading-tight">
                    A Firefighter&apos;s Return to Duty
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                    After falling three stories, this firefighter used NFPM and cellular activation to recover. Hear his incredible journey back to health.
                </p>
            </div>

            <div 
                className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200 cursor-pointer group"
                onClick={() => setIsVideoOpen(true)}
            >
                <Image
                  src="/assets/images/firefighter-story-1.png"
                  alt="Firefighter Recovery Story"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-20 w-20 bg-white/90 rounded-full flex items-center justify-center text-teal-600 shadow-xl group-hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 fill-current ml-1" />
                    </div>
                </div>
            </div>
        </div>

        {/* Carousel Section */}
        <div className="w-full">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Community Success Stories</h3>
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((testimonial, idx) => {
                  return (
                    <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white group">
                         {/* Persistent Lazy Load: Only render if it has been visible at least once */}
                        {loaded.has(idx) && (
                          <Image
                            src={testimonial.image}
                            alt={`Testimonial ${testimonial.id}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                            className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                          />
                        )}
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 border-teal-200 text-teal-700 hover:bg-teal-50 hover:text-teal-900" />
              <CarouselNext className="hidden md:flex -right-12 border-teal-200 text-teal-700 hover:bg-teal-50 hover:text-teal-900" />
            </Carousel>
        </div>

      </div>

      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl p-0 bg-black aspect-video border-none">
            <DialogHeader className="sr-only">
                <DialogTitle>Firefighter Recovery Story</DialogTitle>
            </DialogHeader>
            <iframe 
                src={videoUrl + "?autoplay=1"} 
                className="w-full h-full" 
                allow="autoplay; encrypted-media" 
                allowFullScreen 
            />
        </DialogContent>
      </Dialog>
    </section>
  )
}
