"use client"

import { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { Download, X } from "lucide-react"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { AuroraText } from "@/components/ui/aurora-text"

export function LeadMagnetPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [email, setEmail] = useState("")

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const submittedEmail = formData.get("email") as string
    const firstName = formData.get("firstName") as string
    setEmail(submittedEmail)

    try {
      // Call MailerLite API
      const response = await fetch("/api/mailerlite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: submittedEmail,
          firstName: firstName || undefined,
          tags: ["Healing Checklist Lead"],
        }),
      })

      if (!response.ok) {
        console.error("MailerLite API error:", await response.json())
      }

      // Download PDF
      const pdfUrl = "/assets/Your Natural Healing Checklist - File Placeholder.pdf"
      const link = document.createElement("a")
      link.href = pdfUrl
      link.download = "Your Natural Healing Checklist.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
      // Fallback download
      try {
        const pdfUrl = "/assets/Your Natural Healing Checklist - File Placeholder.pdf"
        const link = document.createElement("a")
        link.href = pdfUrl
        link.download = "Your Natural Healing Checklist.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } catch (pdfError) { console.error(pdfError) }
      setIsSubmitted(true)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-lg p-0 border-0 bg-transparent shadow-2xl overflow-hidden">
        <div className="relative bg-white/90 backdrop-blur-xl border border-white/20 p-8 md:p-10 rounded-3xl shadow-2xl overflow-hidden">
            
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-[60px] pointer-events-none" />

            {!isSubmitted ? (
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

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-4">
                    <div className="space-y-2">
                       <input
                         type="email"
                         name="email"
                         required
                         className="w-full px-5 py-3 rounded-full border border-slate-200 bg-white/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-slate-900 placeholder:text-slate-400"
                         placeholder="Your email address"
                       />
                    </div>
                    <div className="space-y-2">
                       <input
                         type="text"
                         name="firstName"
                         className="w-full px-5 py-3 rounded-full border border-slate-200 bg-white/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-slate-900 placeholder:text-slate-400"
                         placeholder="First Name (Optional)"
                       />
                    </div>
                  </div>

                  <ShimmerButton className="w-full h-12 text-lg font-semibold shadow-lg shadow-teal-900/10" background="#0F8B8D" shimmerColor="#ffffff">
                      <span className="flex items-center gap-2">
                         Download Free Guide <Download className="w-4 h-4" />
                      </span>
                  </ShimmerButton>
                  
                  <p className="text-center text-xs text-slate-400">
                     We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </div>
            ) : (
              <div className="relative z-10 text-center py-8 space-y-6">
                 <div className="h-16 w-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-slow">
                     <Download className="h-8 w-8 text-teal-600" />
                 </div>
                 <div className="space-y-2">
                     <h3 className="text-2xl font-bold text-slate-900">Thank You!</h3>
                     <p className="text-slate-600">
                        Your guide is downloading now. Check your downloads folder.
                     </p>
                 </div>
                 <button 
                    onClick={() => setIsOpen(false)}
                    className="text-slate-400 hover:text-slate-600 font-medium text-sm transition-colors"
                 >
                    Close Window
                 </button>
              </div>
            )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
