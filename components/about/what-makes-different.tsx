import { User, Heart, Sparkles } from "lucide-react"

const differences = [
  {
    icon: User,
    title: "Nurse-Led & Personalized",
    description: "You receive in-home care from a registered nurse who understands your goals, history, and journey with pain.",
  },
  {
    icon: Heart,
    title: "Non-Invasive, Drug-Free Pain Relief",
    description: "NFPM supports the body's natural healing systems without surgery, medications, or downtime. Covered by Medicare.",
  },
  {
    icon: Sparkles,
    title: "Whole-Person Support",
    description: "From cellular activation guidance to lifestyle coaching, everything is designed to help you heal Not Just Cope.",
  },
]

export function WhatMakesDifferent() {
  return (
    <section className="py-20 md:py-32 bg-[#F6FAFA]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-heading text-primary text-center">
            What Makes Relief Point Therapy Different
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differences.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="p-8 bg-white border border-[#E2E8E8] rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading text-primary mb-4">
                    {item.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
