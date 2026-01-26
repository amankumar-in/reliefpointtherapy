"use client"

import { Zap, Pill, Brain, ChevronRight } from "lucide-react"

export function ClinicalOverview() {
  const pillars = [
    {
      icon: Zap,
      title: "High-Pulse Electroanalgesia",
      description: "FDA-cleared high-pulse electroanalgesia delivered using advanced neuromodulation protocols designed to calm overactive pain pathways, improve circulation, and support nerve recovery."
    },
    {
      icon: Pill, 
      title: "IV Nutritional Hydration Therapy",
      description: "Personalized IV nutritional hydration therapy using vitamin and antioxidant support to enhance cellular energy, neurological function, and metabolic health while supporting the biochemical foundation of pain recovery."
    },
    {
      icon: Brain,
      title: "Patient Education & Lifestyle Coaching",
      description: "Guided coaching for long-term pain relief resilience and wellness"
    }
  ]

  return (
    <section id="clinical-overview" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
            
            {/* Left Header */}
            <div className="md:w-1/3 space-y-6 md:sticky md:top-24 h-fit">
                <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider rounded-full">
                    The Methodology
                </div>
                <h2 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                    Three Pillars of<br />
                    <span className="text-teal-600">NFPM Therapy</span>
                </h2>
                <p className="text-slate-600 leading-relaxed">
                    A comprehensive approach combining advanced technology with physiological support and behavioral change.
                </p>
            </div>

            {/* Right List */}
            <div className="md:w-2/3 space-y-8">
                {pillars.map((pillar, index) => (
                    <div key={index} className="group relative pl-8 pb-8 border-l border-slate-200 last:border-0 last:pb-0">
                        {/* Timeline Dot */}
                        <div className="absolute top-0 left-[-4.5px] w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-teal-500 transition-colors ring-4 ring-white" />
                        
                        <div className="bg-slate-50 rounded-2xl p-8 hover:bg-teal-50/30 transition-colors border border-transparent hover:border-teal-100">
                             <div className="flex items-start gap-6">
                                 <div className="h-12 w-12 shrink-0 bg-white rounded-xl shadow-sm flex items-center justify-center text-teal-600 border border-slate-100 group-hover:scale-110 transition-transform">
                                    <pillar.icon className="h-6 w-6" />
                                 </div>
                                 <div className="space-y-3">
                                     <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                        {pillar.title}
                                        <ChevronRight className="h-4 w-4 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                                     </h3>
                                     <p className="text-slate-600 leading-relaxed">
                                        {pillar.description}
                                     </p>
                                 </div>
                             </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
      </div>
    </section>
  )
}
