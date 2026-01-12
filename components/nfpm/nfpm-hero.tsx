"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function NFPMHero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const videoUrl = "https://www.youtube.com/watch?v=P2DyKBV_dUs"

  return (
    <>
      <section className="relative py-16 md:py-20 bg-[#F6FAFA] overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #0F8B8D 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">Non-Invasive Pain Relief</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary leading-tight">
                Neurofunctional Pain Management (NFPM)
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Drug-free, non-invasive, nurse-led pain relief in the comfort of your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded shadow-lg hover:shadow-xl transition-all h-12 px-8">
                  <Link 
                    href="https://relatyv.formstack.com/forms/insurance_details" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verify My Insurance Benefits
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-muted rounded h-12 px-8">
                  <Link href="/nrf2">
                    Learn About Cellular Activation
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right side - Video Thumbnail */}
            <div className="relative group cursor-pointer order-first lg:order-last" onClick={() => setIsVideoOpen(true)}>
              <div className="relative w-full aspect-video md:aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/images/nfpm-hero-thumb.png"
                  alt="Neurofunctional Pain Management Treatment"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
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
                    <h3 className="text-base md:text-3xl font-heading text-white drop-shadow-lg">Patient Experience</h3>
                    <p className="text-white/90 text-xs md:text-lg max-w-2xl mx-auto drop-shadow-md hidden md:block leading-relaxed">
                      Hear testimonials of real patients who have gotten out of pain and learn more about how Neurofunctional Pain Management works.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Design elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Patient Experience</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full">
            <iframe
              src={videoUrl.replace("watch?v=", "embed/")}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Patient Experience"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
