"use client"

import { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { AuroraText } from "@/components/ui/aurora-text"


import { NewsletterForm } from "./newsletter-form"

export function LeadMagnetPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Time delay trigger: 60-90 seconds (using 75 seconds as middle)
    const timeDelay = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true)
        setHasShown(true)
      }
    }, 75000) 

    // Exit intent trigger (desktop only)
    const handleMouseLeave = (e: MouseEvent) => {
      if (window.innerWidth > 768) {
        if (e.clientY <= 0 && !hasShown) {
          setIsOpen(true)
          setHasShown(true)
        }
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      clearTimeout(timeDelay)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [hasShown])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-lg p-0 border-0 bg-transparent shadow-2xl overflow-hidden">
        <div className="relative bg-white/90 backdrop-blur-xl border border-white/20 p-8 md:p-10 rounded-3xl shadow-2xl overflow-hidden">
            
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-[60px] pointer-events-none" />

            <div className="relative z-10 space-y-8">
              <DialogHeader className="space-y-4 text-center">
                <DialogTitle className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  Struggling With <br />
                  <span className="text-slate-900">Chronic Pain?</span>
                </DialogTitle>
                <div className="space-y-2 text-lg text-slate-600">
                  <p>Get our nurse-created guide for free:</p>
                  <div className="font-bold text-xl">
                      <AuroraText colors={["#0F8B8D", "#20B2AA", "#40E0D0", "#0F8B8D"]} speed={0.8}>
                        Your Natural Healing Checklist
                      </AuroraText>
                  </div>
                </div>
              </DialogHeader>

              <NewsletterForm 
                buttonText="Get Free Guide"
                onSuccess={() => {
                  // Optional: could keep modal open for a few seconds then close
                  // setTimeout(() => setIsOpen(false), 5000)
                }}
              />
              
              <div className="text-center pt-2">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-slate-600 font-medium text-sm transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
