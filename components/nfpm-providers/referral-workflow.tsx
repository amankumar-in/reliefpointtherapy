"use client"

import { ClipboardList, Send, Headphones, HeartHandshake, FileCheck, ArrowRight } from "lucide-react"

export function ReferralWorkflow() {
  const steps = [
    {
      title: "Identify",
      description: "Patients with chronic pain unresponsive to standard care.",
      icon: ClipboardList,
    },
    {
      title: "Refer",
      description: "Submit a simple order form via fax or secure email.",
      icon: Send,
    },
    {
      title: "Verify",
      description: "We handle all insurance eligibility checks and intake.",
      icon: FileCheck,
    },
    {
      title: "Treat",
      description: "Our RNs deliver care directly in the patient's home.",
      icon: HeartHandshake,
    },
    {
      title: "Update",
      description: "Regular progress reports sent back to your office.",
      icon: Headphones,
    }
  ]

  return (
    <section className="py-24 bg-white md:bg-transparent relative">
      {/* Desktop Background: Dark Gradient */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-br from-slate-900 to-teal-900 z-0">
          <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-10" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <div className="md:w-1/3">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 md:text-white tracking-tight mb-4">
                    Streamlined <br /><span className="text-teal-600 md:text-teal-400">Referral Process</span>
                </h2>
                <p className="text-slate-600 md:text-slate-300">
                    We've removed the administrative burden. You refer, we handle the rest.
                </p>
            </div>
            {/* Desktop Divider */}
            <div className="hidden md:block md:w-2/3 h-px bg-white/10 relative">
                 <div className="absolute left-0 top-1/2 -translate-y-1/2 text-white/40 text-xs uppercase tracking-widest bg-slate-900 px-2">
                    Workflow
                 </div>
            </div>
        </div>

        {/* Desktop View: Teal Cards */}
        <div className="hidden md:grid grid-cols-5 gap-6">
            {steps.map((step, index) => (
                <div key={index} className="relative group">
                    {/* Connector */}
                    {index < steps.length - 1 && (
                        <div className="absolute top-8 left-1/2 w-full h-0.5 bg-white/10 z-0">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-white/20">
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    )}
                    
                    <div className="relative z-10 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all hover:-translate-y-1 h-full flex flex-col items-center text-center group-hover:shadow-[0_0_20px_rgba(45,212,191,0.2)]">
                        <div className="w-16 h-16 rounded-2xl bg-teal-500/20 flex items-center justify-center mb-4 transition-transform group-hover:scale-110 shadow-inner border border-white/10">
                            <step.icon className="w-7 h-7 text-teal-300" />
                        </div>
                        <h3 className="font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-sm text-teal-50 leading-relaxed opacity-90">
                            {step.description}
                        </p>
                        <div className="mt-auto pt-4 text-xs font-bold text-white/20 group-hover:text-teal-400/50 transition-colors">
                            0{index + 1}
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Mobile View: Compact List (No Cards) */}
        <div className="md:hidden space-y-6">
             {steps.map((step, index) => (
                 <div key={index} className="flex gap-4 items-start">
                     {/* Number Line */}
                     <div className="flex flex-col items-center gap-2">
                         <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-sm shrink-0">
                             {index + 1}
                         </div>
                         {index < steps.length - 1 && (
                             <div className="w-px h-full bg-slate-200 min-h-[40px]" />
                         )}
                     </div>

                     {/* Content */}
                     <div className="pb-4">
                         <div className="flex items-center gap-2 mb-1">
                             <step.icon className="w-4 h-4 text-teal-600" />
                             <h3 className="font-bold text-slate-900">{step.title}</h3>
                         </div>
                         <p className="text-slate-600 text-sm leading-snug">
                             {step.description}
                         </p>
                     </div>
                 </div>
             ))}
        </div>

      </div>
    </section>
  )
}
