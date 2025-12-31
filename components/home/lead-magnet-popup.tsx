"use client"

import { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function LeadMagnetPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    // Check if popup has been shown before (using localStorage)
    const hasShownBefore = localStorage.getItem("leadMagnetShown")
    if (hasShownBefore === "true") {
      return
    }

    // Time delay trigger: 60-90 seconds (using 75 seconds as middle)
    const timeDelay = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true)
        setHasShown(true)
        localStorage.setItem("leadMagnetShown", "true")
      }
    }, 75000) // 75 seconds

    // Exit intent trigger (desktop only)
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger on desktop (window width > 768px)
      if (window.innerWidth > 768) {
        // Check if mouse is leaving the top of the viewport
        if (e.clientY <= 0 && !hasShown) {
          setIsOpen(true)
          setHasShown(true)
          localStorage.setItem("leadMagnetShown", "true")
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
    const email = formData.get("email") as string
    const firstName = formData.get("firstName") as string

    try {
      // Call MailerLite API with subscriber data and tag
      const response = await fetch("/api/mailerlite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          firstName: firstName || undefined,
          tags: ["Healing Checklist Lead"], // Tag as specified in design doc
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error("MailerLite API error:", errorData)
        // Still continue to download PDF (graceful degradation)
      }

      // Download PDF directly after form submission
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
      // Still download PDF even if MailerLite fails
      try {
        const pdfUrl = "/assets/Your Natural Healing Checklist - File Placeholder.pdf"
        const link = document.createElement("a")
        link.href = pdfUrl
        link.download = "Your Natural Healing Checklist.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } catch (pdfError) {
        console.error("Error downloading PDF:", pdfError)
      }
      setIsSubmitted(true)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-heading text-primary text-center">
                Struggling With Chronic Pain?
              </DialogTitle>
              <DialogDescription className="text-base text-foreground/80 text-center pt-2 space-y-2">
                <p>
                  Download your free nurse-created guide:
                </p>
                <p className="font-semibold text-primary">
                  &ldquo;Your Natural Healing Checklist&rdquo;
                </p>
                <p>
                  Simple, practical ways to support your body&apos;s healing — starting today.
                </p>
                <p className="pt-2">
                  Enter your email to get it instantly.
                </p>
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                  First Name <span className="text-muted-foreground">(optional)</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  placeholder="First Name"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded"
              >
                Download My Free Guide
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center py-4 space-y-4">
            <DialogHeader>
              <DialogTitle className="text-2xl font-heading text-primary">
                Thank You!
              </DialogTitle>
              <DialogDescription className="text-base text-foreground/80 pt-2">
                <p>
                  Your free guide: &ldquo;Your Natural Healing Checklist&rdquo; is downloading now!
                </p>
                <p className="pt-2">
                  Check your downloads folder if it didn&apos;t start automatically.
                </p>
              </DialogDescription>
            </DialogHeader>
            <Button
              onClick={() => setIsOpen(false)}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded"
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
