"use client"

import { Wallet, Package, Sparkles, ShieldCheck } from "lucide-react"

export function ProductsCostSaving() {
  const tips = [
    {
      icon: Wallet,
      title: "Subscriptions",
      description: "Save 10% with Subscribe & Save. Update delivery frequency or cancel anytime."
    },
    {
      icon: Package,
      title: "Nrf2 3-Pack Strategy",
      description: "Drops cost to ~$50/month when you set delivery to every 3 months. Perfect for long-term consistency."
    },
    {
      icon: Sparkles,
      title: "GlowStack Maintenance",
      description: "Start daily for month 1, then switch to Nrf2-only or space out collagen intake to save long-term."
    },
    {
      icon: ShieldCheck,
      title: "30-Day Guarantee",
      description: "All products include a simple, risk-free money-back guarantee if you don't love the results."
    }
  ]

  return (
    <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Smart Ways to <span className="text-teal-600">Save</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Get the most value out of your activation protocol.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {tips.map((tip, index) => {
              const Icon = tip.icon
              return (
                <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex gap-5 items-start">
                  <div className="shrink-0 p-3 bg-teal-50 rounded-xl text-teal-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{tip.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {tip.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
