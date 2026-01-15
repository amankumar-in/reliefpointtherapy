import { CheckCircle2, Calendar, Activity, User, HeartPulse, Droplets } from "lucide-react"

export function TreatmentProgram() {
  const programItems = [
    { icon: Calendar, text: "Two 60-minute sessions each week" },
    { icon: User, text: "In-home care by a registered nurse" },
    { icon: Activity, text: "Progressive neuromodulation treatment" },
    { icon: Activity, text: "Pain tracking and mobility monitoring" },
    { icon: HeartPulse, text: "Lifestyle guidance to support healing" },
    { icon: Droplets, text: "IV hydration included" },
  ]

  return (
    <section className="py-24 md:py-32 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Your <span className="text-teal-600">Treatment Plan</span>
            </h2>
            <p className="text-xl text-slate-600 font-light">
                Structured care designed for long-term relief.
            </p>
        </div>

        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
             
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-100/40 rounded-full blur-[80px] pointer-events-none" />

             <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative z-10">
                 <div className="space-y-6">
                     <h3 className="text-2xl font-bold text-slate-900">
                        The 8-Week Program
                     </h3>
                     <p className="text-slate-600 leading-relaxed text-lg">
                        Your personalized plan is tailored to your pain, function goals, and medical history. We combine advanced technology with compassionate nurse-led care.
                     </p>
                     <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                        <div className="text-4xl font-bold text-teal-600 mb-2">8 Weeks</div>
                        <div className="text-slate-900 font-medium">Comprehensive Care Cycle</div>
                     </div>
                 </div>

                 <div className="grid gap-4">
                    {programItems.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300 group">
                            <div className="h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-colors shadow-sm">
                                <item.icon className="h-5 w-5" />
                            </div>
                            <span className="text-lg text-slate-700 group-hover:text-slate-900 transition-colors font-medium">{item.text}</span>
                        </div>
                    ))}
                 </div>
             </div>
        </div>
      </div>
    </section>
  )
}
