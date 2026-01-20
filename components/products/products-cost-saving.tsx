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
    <section className="py-20 md:py-24 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Smart Ways to <span className="text-teal-400">Save</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Get the most value out of your activation protocol.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
            {tips.map((tip, index) => {
              const Icon = tip.icon
              return (
                <div key={index} className="flex flex-row items-start text-left gap-3 group">
                  <div className="shrink-0 p-2.5 bg-slate-800 rounded-xl border border-slate-700 shadow-sm text-teal-400 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm md:text-base mb-1">{tip.title}</h3>
                    <p className="text-slate-400 leading-tight text-xs md:text-sm">
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
