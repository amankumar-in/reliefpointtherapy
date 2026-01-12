"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-100/50 text-teal-800 rounded-full text-sm font-bold tracking-wide uppercase">
             <Star className="w-4 h-4 fill-teal-600 text-teal-600" /> Success Stories
          </div>
          <h2 className="text-3xl md:text-5xl text-slate-900 font-bold tracking-tight">
             Real Patient Results
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
            See how our programs have helped people regain mobility and quality of life.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6 select-none cursor-grab active:cursor-grabbing">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full pt-2 pb-6 px-1">
                    <Card className="h-full border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] group">
                      <CardContent className="flex flex-col p-8 h-full relative overflow-hidden">
                        {/* Quote Watermark */}
                        <Quote className="absolute top-6 right-6 h-12 w-12 text-slate-100 rotate-180 transition-colors duration-300 group-hover:text-teal-50" />
                        
                        <div className="flex-1 relative z-10">
                            {[1,2,3,4,5].map((s) => (
                                <Star key={s} className="inline-block w-4 h-4 text-amber-400 fill-amber-400 mb-6 mr-1" />
                            ))}
                            <p className="text-slate-600 leading-relaxed text-lg italic font-medium">
                            "{testimonial.content}"
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-100">
                           <div className="h-12 w-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0">
                              {testimonial.initial}
                           </div>
                           <div>
                              <p className="font-bold text-slate-900 text-lg">{testimonial.name}</p>
                              <div className="flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                                <p className="text-xs font-bold text-teal-600 uppercase tracking-wide">Verified Patient</p>
                              </div>
                           </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 h-12 w-12 border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-white bg-white/50 backdrop-blur-sm" />
            <CarouselNext className="hidden md:flex -right-12 h-12 w-12 border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-white bg-white/50 backdrop-blur-sm" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
