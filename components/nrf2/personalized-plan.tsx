"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function PersonalizedPlan() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const supportWith = formData.get("supportWith") as string
    const productsInterested = formData.get("productsInterested") as string

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
          lastName: lastName || undefined,
          phone: phone || undefined,
          supportWith: supportWith || undefined,
          productsInterested: productsInterested || undefined,
          tags: ["Product Interest Lead"], // Tag as specified in design doc
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error("MailerLite API error:", errorData)
        // Still show success message (graceful degradation)
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
      setIsSubmitted(true) // Still show success message
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Form */}
          <div>
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">
              Still Not Sure — or Stuck at Checkout?
            </h2>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First and Last Name - same row on mobile, separate on desktop */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                      First Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                      Last Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                {/* Email and Phone - same row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Phone <span className="text-muted-foreground">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Support With and Products Interested - same row on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="supportWith" className="text-sm font-medium text-foreground">
                      What you want support with <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="supportWith"
                      name="supportWith"
                      required
                      rows={4}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 resize-none"
                      placeholder="Tell me about your health concerns, goals, or what you're looking for..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="productsInterested" className="text-sm font-medium text-foreground">
                      Products you are interested in
                    </label>
                    <textarea
                      id="productsInterested"
                      name="productsInterested"
                      rows={4}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 resize-none"
                      placeholder="Nrf2, GlowStack, Dual Synergizer, Tri Synergizer, or any combination..."
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded"
                >
                  {isSubmitting ? "Submitting..." : "Build My Personalized Plan"}
                </Button>
              </form>
            ) : (
              <div className="space-y-4">
                <h3 className="text-2xl font-heading text-primary">
                  Thank You!
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  I&apos;ve received your information and will personally review your request. I&apos;ll get back to you soon with personalized recommendations and a direct checkout link if needed.
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Content */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I want to make this as easy as possible for you.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Some people aren&apos;t sure which product makes the most sense for their health concerns. Others already know what they want but feel unsure at checkout, aren&apos;t sure how to set up subscriptions, or want to make sure they&apos;re choosing the most cost-effective option.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              If that&apos;s you, I can help by:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">1.</span>
                <span className="text-foreground/80">Recommending the right product based on what you&apos;re struggling with</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">2.</span>
                <span className="text-foreground/80">Building a direct checkout link for you</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">3.</span>
                <span className="text-foreground/80">Adjusting subscription timing</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">4.</span>
                <span className="text-foreground/80">Making sure you&apos;re choosing the best option for your goals and budget</span>
              </div>
            </div>
            <p className="text-base text-foreground/80 leading-relaxed pt-4">
              Just enter your information on the left, and I&apos;ll personally help guide you through the next step.
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
