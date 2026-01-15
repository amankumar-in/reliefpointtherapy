"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"
import Image from "next/image"

// All testimonial images from product-testimonial folder
const testimonials = [
  { id: 1, image: "/assets/images/product-testimonial/collagen back injections.png" },
  { id: 2, image: "/assets/images/product-testimonial/collagen back pain_ injections.png" },
  { id: 3, image: "/assets/images/product-testimonial/collagen back pain.png" },
  { id: 4, image: "/assets/images/product-testimonial/collagen fibromyalgia.png" },
  { id: 5, image: "/assets/images/product-testimonial/collagen, post op knee.png" },
  { id: 6, image: "/assets/images/product-testimonial/nrf1 nrf2 collagen; knees.png" },
]

export function ProductsTestimonials() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              What People Are Saying
            </h2>
            <p className="text-sm text-foreground/60 italic">
              Activation-related testimonials only (Nrf2, GlowStack, Tri Synergizer)
            </p>
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
                    {/* Matching style to products-cost-saving.tsx: Standard border, shadow, rounded-2xl, white bg */}
                    <Card className="relative border border-slate-200 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden aspect-[2/1]">
                      <Image
                        src={testimonial.image}
                        alt={`Product Testimonial ${testimonial.id}`}
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
    </section>
  )
}
