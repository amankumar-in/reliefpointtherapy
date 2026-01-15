"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"

export function ProductsPersonalizedPlan() {
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
      // Matches the POST body expected by app/api/mailerlite/route.ts
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
          tags: ["Product Interest Lead"], // Keeping the tag specific to this page
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error("MailerLite API error:", errorData)
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
      setIsSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 relative overflow-hidden bg-slate-900 border-t border-slate-800">
      <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-5" />
      <div className="absolute -top-[20%] right-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Form */}
            <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 md:p-10 shadow-2xl">
                {!isSubmitted ? (
                  <>
                  <h2 className="text-2xl font-bold text-white mb-8 tracking-tight flex items-center gap-3">
                    <span className="w-8 h-1 bg-teal-500 rounded-full"></span>
                    Still Not Sure?
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider pl-1">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all"
                          placeholder="Jane"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider pl-1">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider pl-1">Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all"
                          placeholder="jane@example.com"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider pl-1">Phone <span className="opacity-50 lowercase text-[10px] ml-1">(Optional)</span></label>
                        <input
                          type="tel"
                          name="phone"
                          className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all"
                          placeholder="(555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider pl-1">How can we help?</label>
                        <textarea
                          name="supportWith"
                          required
                          rows={3}
                          className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all resize-none"
                          placeholder="I'm looking for help with..."
                        />
                    </div>

                     <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider pl-1">Products Interesting You</label>
                        <textarea
                          name="productsInterested"
                          rows={2}
                          className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all resize-none"
                          placeholder="Nrf2, Collagen, etc..."
                        />
                    </div>

                    <div className="pt-2">
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 p-px font-semibold text-white shadow-[0_0_20px_-5px_rgba(20,184,166,0.5)] transition-all hover:shadow-[0_0_30px_-5px_rgba(20,184,166,0.6)] disabled:opacity-70"
                        >
                            <div className="relative flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-4 transition-all group-hover:bg-opacity-0">
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                        <span>Submitting...</span>
                                    </>
                                ) : (
                                    "Build My Personalized Plan"
                                )}
                            </div>
                        </button>
                    </div>
                  </form>
                  </>
                ) : (
                  <div className="py-12 flex flex-col items-center text-center space-y-6">
                    <div className="h-20 w-20 bg-teal-500/20 rounded-full flex items-center justify-center mb-2">
                        <div className="h-10 w-10 text-teal-400">
                             <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
                        <p className="text-slate-400">
                           I&apos;ll review your health goals and email you a personalized recommendation soon.
                        </p>
                    </div>
                  </div>
                )}
            </div>

            {/* Right Column: Content */}
            <div className="pt-4 lg:sticky lg:top-24">
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
                  Let&apos;s Build Your <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-400">Perfect Protocol</span>
                </h2>
                
                <div className="space-y-8 text-lg text-slate-300 leading-relaxed">
                    <p>
                      Navigating supplements can be confusing. Some people aren&apos;t sure which product makes the most sense for their specific health concerns, while others just need a little guidance at checkout.
                    </p>
                    
                    <div className="space-y-6 pl-2">
                        {[
                            "Recommending the right product based on your goals",
                            "Building a direct pre-filled checkout link for you",
                            "Adjusting subscription timing to fit your budget",
                            "Ensuring you get the best possible price"
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="flex-none pt-1">
                                    <div className="h-6 w-6 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold text-sm">
                                        {i + 1}
                                    </div>
                                </div>
                                <span className="text-slate-100">{item}</span>
                            </div>
                        ))}
                    </div>

                    <p className="pt-4 text-slate-400 text-base border-t border-slate-800/50">
                        Just enter your details, and I&apos;ll personally handle the rest to make sure your start is seamless.
                    </p>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
