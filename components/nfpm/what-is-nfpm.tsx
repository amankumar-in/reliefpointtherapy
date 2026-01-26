import { Home, Heart, Shield, User } from "lucide-react"

export function WhatIsNFPM() {
  return (
    <section className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              What Is <span className="text-teal-400">NFPM?</span>
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-slate-300 leading-relaxed font-light">
              <p>
                Neurofunctional Pain Management (NFPM) is a comprehensive, nurse-led pain management approach delivered in partnership with Relatyv. It uses <strong className="text-white font-medium">FDA-cleared electroanalgesia</strong> and neuromodulation, along with supportive IV hydration and lifestyle guidance, to calm overactive pain pathways, improve circulation, reduce inflammation, and support the body&apos;s natural healing.
              </p>
              <p>
                NFPM is performed in your home by a registered nurse and is ideal for people seeking long-term relief without relying on medications, injections, or other invasive procedures.
              </p>
            </div>
          </div>

          {/* Right Column: Icons - Minimized, No Cards */}
          <div>
            <div className="grid grid-cols-4 gap-2 md:gap-8">
              {[
                { icon: Shield, label: "FDA Cleared", color: "text-teal-400" },
                { icon: Home, label: "In-Home Care", color: "text-indigo-400" },
                { icon: Heart, label: "Non Invasive", color: "text-pink-400" },
                { icon: User, label: "Nurse Led", color: "text-amber-400" },
              ].map((item, i) => (
                 <div key={i} className="flex flex-col items-center text-center space-y-3 group">
                    <div className={`p-3 md:p-4 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors ${item.color}`}>
                      <item.icon className="h-6 w-6 md:h-8 md:w-8" />
                    </div>
                    <h3 className="font-medium text-slate-300 text-xs md:text-base leading-tight md:leading-normal">{item.label}</h3>
                 </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
