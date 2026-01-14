"use client"

import { Check, X, Zap } from "lucide-react"

export function TechnologyDistinction() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                Not Just Another TENS Unit
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Understanding the clinical difference between consumer-grade devices and FDA-cleared Electroanalgesia.
            </p>
        </div>

        <div className="relative grid grid-cols-2 gap-2 md:gap-8 lg:gap-12">
            {/* The "Center" Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 -translate-x-1/2" />
            
            {/* Left: Conventional */}
            <div className="pr-4 md:pr-8 text-right">
                <h3 className="text-xs md:text-xl font-bold text-slate-400 mb-6 uppercase tracking-wider">Conventional Modalities</h3>
                <ul className="space-y-4 md:space-y-6">
                    {[
                        "Consumer Wellness Devices",
                        "Standard TENS (Low Frequency)",
                        "Symptom Masking Only",
                        "Superficial Stimulation",
                        "Generic Protocols"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center justify-end gap-2 md:gap-4 text-slate-400">
                             <span className="text-xs md:text-base leading-tight">{item}</span>
                             <div className="h-4 w-4 md:h-6 md:w-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                                <X className="h-2 w-2 md:h-3 md:w-3 text-slate-400" />
                             </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right: NFPM */}
            <div className="pl-4 md:pl-8">
                <h3 className="text-xs md:text-xl font-bold text-teal-600 mb-6 uppercase tracking-wider flex items-center gap-2">
                    <Zap className="h-3 w-3 md:h-5 md:w-5 fill-current" />
                    NFPM Therapy
                </h3>
                <ul className="space-y-4 md:space-y-6">
                    {[
                        "FDA-Cleared Medical Device",
                        "High Pulse Frequencies (Up to 10,000Hz)",
                        "Restores Nerve Function",
                        "Deep Neuromuscular Penetration",
                        "Customized Clinical Protocols"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 md:gap-4 text-slate-900 font-medium">
                             <div className="h-4 w-4 md:h-6 md:w-6 rounded-full bg-teal-100 flex items-center justify-center shrink-0 shadow-sm">
                                <Check className="h-2 w-2 md:h-3 md:w-3 text-teal-600" />
                             </div>
                             <span className="text-xs md:text-base leading-tight">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
      </div>
    </section>
  )
}
