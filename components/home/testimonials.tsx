"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ed",
    initial: "E",
    content: "My hands and feet were constantly painful due to neuropathy. After the program, I've seen a huge reduction in symptoms and I can actually function again.",
  },
  {
    name: "Robert",
    initial: "R",
    content: "I had difficulty walking because of the stiffness and pain in my legs. The relief I feel now is something I didn't think was possible without surgery.",
  },
  {
    name: "Wanda",
    initial: "W",
    content: "I was dealing with pins and needles and throbbing knee pain that disrupted my sleep. Now I'm finding relief and sleeping through the night.",
  },
  {
    name: "Hayward",
    initial: "H",
    content: "After my work accident, I went from a walker to a cane. The sensation in my feet returned and the muscle spasms have finally stopped.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-heading text-primary text-center mb-12">
           Patient Stories
        </h2>
        
        <div className="max-w-4xl mx-auto px-8"> {/* Added padding for arrows */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full border-border/60 shadow-sm">
                      <CardContent className="flex flex-col p-6 h-full">
                        <Quote className="h-8 w-8 text-primary/20 mb-4" />
                        <p className="text-foreground/80 leading-relaxed text-sm md:text-base mb-6 flex-1 italic">
                          "{testimonial.content}"
                        </p>
                        <div className="flex items-center gap-3 mt-auto">
                           <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold font-heading">
                              {testimonial.initial}
                           </div>
                           <div>
                              <p className="font-bold text-foreground font-heading">{testimonial.name}</p>
                              <p className="text-xs text-muted-foreground">Verified Patient</p>
                           </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
