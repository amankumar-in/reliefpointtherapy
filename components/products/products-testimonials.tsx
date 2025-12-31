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

export function ProductsTestimonials() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading text-primary">
              What People Are Saying
            </h2>
            <p className="text-sm text-foreground/60 italic">
              Activation-related testimonials only (Nrf2, GlowStack, Tri Synergizer)
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
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
    </section>
  )
}
