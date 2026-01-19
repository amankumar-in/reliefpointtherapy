import { User, Heart, Sparkles, CheckCircle } from "lucide-react"

const differences = [
  {
    icon: User,
    title: "Nurse-Led & Personalized",
    description: "You receive in-home care from a registered nurse who understands your goals, history, and journey with pain.",
  },
  {
    icon: Heart,
    title: "Non-Invasive, Drug-Free Pain Relief",
    description: "NFPM supports the body's natural healing systems without surgery, medications, or downtime. Coverage available through Original Medicare.",
  },
  {
    icon: Sparkles,
    title: "Whole-Person Support",
    description: "From cellular activation guidance to lifestyle coaching, everything is designed to help you heal Not Just Cope.",
  },
]

export function WhatMakesDifferent() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left: Sticky Header */}
            <div className="space-y-8 lg:sticky lg:top-32">
                <div>
                    <span className="text-teal-400 font-bold uppercase tracking-wider text-sm mb-2 block">Why Choose Relief Point</span>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        A Different <br/> 
                        <span className="text-white">Approach to Care</span>
                    </h2>
                </div>
                <p className="text-lg text-slate-400 leading-relaxed max-w-md">
                    We bridge the gap between clinical excellence and compassionate home care, offering a solution that treats you as a whole person.
                </p>
                
                {/* Visual Accent */}
                <div className="h-64 w-64 bg-teal-500/20 rounded-full blur-[80px] absolute -z-10 -left-20 top-0 pointer-events-none" />
            </div>

            {/* Right: Feature List (No Cards) */}
            <div className="space-y-12">
                {differences.map((diff, index) => {
                    const Icon = diff.icon
                    return (
                        <div key={index} className="flex gap-6 group">
                            {/* Icon Column */}
                            <div className="flex flex-col items-center gap-4 pt-1">
                                <div className="w-12 h-12 rounded-full border border-teal-500/30 bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(20,184,166,0.3)]">
                                    <Icon className="h-6 w-6" />
                                </div>
                                {index !== differences.length - 1 && (
                                    <div className="w-px h-full bg-slate-800 group-hover:bg-teal-900/50 transition-colors" />
                                )}
                            </div>

                            {/* Text Content */}
                            <div className="pb-8 space-y-3">
                                <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">
                                    {diff.title}
                                </h3>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                    {diff.description}
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
