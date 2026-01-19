"use client"

import { useState } from "react"
import { Check, Loader2, Download } from "lucide-react"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { cn } from "@/lib/utils"

interface NewsletterFormProps {
  buttonText?: string
  successMessage?: string
  onSuccess?: () => void
  formClassName?: string
  darkMode?: boolean
}

export function NewsletterForm({ 
  buttonText = "Get Free Guide", 
  successMessage = "Your guide is on its way to your inbox! Check your email.",
  onSuccess,
  formClassName = "space-y-4",
  darkMode = false
}: NewsletterFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isSubmitting) return

    setIsSubmitting(true)
    const formData = new FormData(e.currentTarget)
    const submittedEmail = formData.get("email") as string
    const firstName = formData.get("firstName") as string

    try {
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

      setIsSubmitted(true)
      if (onSuccess) onSuccess()
    } catch (error) {
      console.error("Error submitting form:", error)
      setIsSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className={cn(
        "text-center py-4 space-y-4 animate-in fade-in duration-500",
        darkMode ? "text-white" : "text-slate-900"
      )}>
        <div className={cn(
            "h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-2",
            darkMode ? "bg-teal-500/20 text-teal-400" : "bg-teal-100 text-teal-600"
        )}>
            <Check className="h-6 w-6" />
        </div>
        <div className="space-y-1">
            <h4 className="font-bold text-base">Thank You!</h4>
            <p className={cn(
                "text-sm",
                darkMode ? "text-slate-400" : "text-slate-600"
            )}>
               {successMessage}
            </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={formClassName}>
      <div className="space-y-3">
        <input
          type="email"
          name="email"
          required
          className={cn(
            "w-full px-4 py-2.5 rounded-full border focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm",
            darkMode 
                ? "bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:bg-white/10" 
                : "bg-white/80 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white"
          )}
          placeholder="Your email address"
        />
        <input
          type="text"
          name="firstName"
          className={cn(
            "w-full px-4 py-2.5 rounded-full border focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm",
            darkMode 
                ? "bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:bg-white/10" 
                : "bg-white/80 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white"
          )}
          placeholder="First Name (Optional)"
        />
      </div>
      <ShimmerButton 
        className="w-full h-11 text-sm font-semibold shadow-md disabled:opacity-70 disabled:cursor-not-allowed" 
        background="#0F8B8D" 
        shimmerColor="#ffffff"
        disabled={isSubmitting}
        type="submit"
      >
        <span className="flex items-center gap-2">
          {isSubmitting ? (
            <>Processing <Loader2 className="w-3 h-3 animate-spin" /></>
          ) : (
            <>{buttonText} <Download className="w-3 h-3" /></>
          )}
        </span>
      </ShimmerButton>
      <p className={cn(
        "text-center text-[10px]",
        darkMode ? "text-slate-500" : "text-slate-400"
      )}>
        We respect your privacy. Unsubscribe at any time.
      </p>
    </form>
  )
}
