"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

export function ABCNewsFeature() {
  const [isOpen, setIsOpen] = useState(false)
  // Using the youtube link from the original file/context if available, otherwise defaulting to valid investigative report link
  const videoUrl = "https://www.youtube.com/embed/6Wqbl1hxOso" 

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col lg:flex-row items-center gap-12">
            
            <div className="flex-1 space-y-6 text-center lg:text-left">
                <div className="inline-block px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-bold tracking-wider uppercase">
                    As Seen On TV
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                    The Investigative Report That Started It All
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                    Watch the ABC Primetime investigative report where John Quiñones validates the science behind Protandim Nrf2 Synergizer.
                </p>
            </div>

            <div className="flex-1 w-full max-w-xl">
                 <div 
                    className="relative aspect-video rounded-2xl overflow-hidden shadow-lg group cursor-pointer border-4 border-white ring-1 ring-slate-100 hover:ring-slate-200 transition-all"
                    onClick={() => setIsOpen(true)}
                 >
                    {/* Thumbnail - using a generic placeholder if specific frame not available */}
                    <Image 
                        src="/assets/images/abc-news-thumb.png" 
                        alt="ABC Primetime Investigative Report"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-16 w-16 bg-white/90 rounded-full flex items-center justify-center text-red-600 shadow-xl group-hover:scale-110 transition-transform">
                            <Play className="h-6 w-6 fill-current ml-1" />
                        </div>
                    </div>
                 </div>
            </div>

        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 bg-black aspect-video border-none">
            <DialogTitle className="sr-only">ABC News Investigative Report</DialogTitle>
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
