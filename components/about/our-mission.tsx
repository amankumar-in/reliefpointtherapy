export function OurMission() {
  return (
    <section className="py-24 md:py-36 bg-white relative overflow-hidden">
      {/* Subtle Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none opacity-[0.03]">
        <span className="text-[20vw] font-bold leading-none text-slate-900">MISSION</span>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          <div className="space-y-4">
            <span className="text-teal-600 font-bold tracking-widest uppercase text-sm">Our Purpose</span>
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-slate-900 leading-tight">
              To provide simple, safe, nurse-led pain relief.
            </h2>
          </div>
          
          <div className="space-y-8 text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
            <p>
              We help people restore mobility, comfort, and confidence in their bodies — <span className="text-slate-900 font-medium">without relying on medications or surgery.</span>
            </p>
            
            <div className="w-16 h-px bg-slate-200 mx-auto" />

            <p className="text-lg md:text-xl text-slate-500 italic">
              "I believe healing should feel empowering, not overwhelming. My mission is to bring advanced pain relief and whole-body wellness directly into your home, with care that meets you exactly where you are."
            </p>

            <p className="text-lg md:text-xl text-slate-500">
               My hope is that one day, nurse-led, non-invasive pain care like this becomes the <span className="text-teal-600 font-medium underline underline-offset-4 decoration-teal-200">first option</span> people turn to when pain begins, not the last.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
