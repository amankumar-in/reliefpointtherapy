import { CheckCircle2 } from "lucide-react"

export function WhyChooseNFPM() {
  const benefits = [
    "100% Non-Invasive & Drug-Free",
    "No Downtime or Recovery Period",
    "Nurse-Led Care in Your Home",
    "Coverage available through Original Medicare & Many PPOs",
    "Effective for Treatment-Resistant Pain",
    "Promotes Actual Healing, Not Masking",
  ]

  return (
    <section className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-[0.05]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="space-y-10 order-last lg:order-first">
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                    Why Patients <br />
                    <span className="text-teal-400">Choose NFPM</span>
                </h2>
                
                {/* 2-Column List - No Cards */}
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-4 group">
                            <div className="p-1 rounded-full bg-teal-500/10 text-teal-400 mt-1 shrink-0 group-hover:bg-teal-500/20 transition-colors">
                                <CheckCircle2 className="h-5 w-5" />
                            </div>
                            <span className="text-lg text-slate-300 font-light leading-snug group-hover:text-white transition-colors">
                                {benefit}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="order-first lg:order-last">
                <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-3xl p-10 md:p-14 text-center shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-10" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[60px] pointer-events-none group-hover:scale-110 transition-transform duration-700" />
                    
                    <div className="relative z-10 space-y-4">
                        <div className="text-7xl md:text-9xl font-bold text-white tracking-tighter drop-shadow-sm">
                            85%
                        </div>
                        <div className="text-teal-100 text-xl md:text-2xl font-medium max-w-sm mx-auto leading-relaxed">
                            of NFPM patients experience a 50% or greater reduction in pain.
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  )
}
