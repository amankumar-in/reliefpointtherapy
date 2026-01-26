import Link from "next/link"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { Activity, Heart, Zap, Dumbbell, Bandage, TrendingUp, Download, ArrowRight } from "lucide-react"

const benefits = [
  { icon: Activity, title: "Reduce Pain Signaling", text: "Calms overactive nerve pathways to interrupt pain signals." },
  { icon: Heart, title: "Improve Circulation", text: "Increases blood flow and oxygenation to affected areas." },
  { icon: Zap, title: "Decrease Inflammation", text: "Reduces local swelling and inflammatory markers." },
  { icon: Dumbbell, title: "Muscle Relaxation", text: "Relieves tightness and spasms in surrounding muscle tissue." },
  { icon: Bandage, title: "Tissue Repair", text: "Supports the body's natural healing and regenerative processes." },
  { icon: TrendingUp, title: "Restore Mobility", text: "helps you regain range of motion and function." },
]

export function HowNFPMWorks() {
  return (
    <>
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              How <span className="text-teal-600">NFPM Works</span>
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed max-w-3xl">
              NFPM uses FDA-cleared high-pulse electroanalgesia, along with supportive IV hydration, to restore balance to the nervous system. By addressing inflammation, circulation, and nerve signaling, it supports true healing rather than temporary symptom relief.
            </p>
        </div>

        {/* New Layout: Minimalist List / Grid without cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                    <div key={index} className="group flex flex-col items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-teal-100/50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                            <Icon className="h-6 w-6" />
                        </div>
                        <div className="space-y-2">
                             <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                                {benefit.title}
                             </h3>
                             <p className="text-slate-600 leading-relaxed text-base">
                                {benefit.text}
                             </p>
                        </div>
                    </div>
                )
            })}
        </div>
      </div>
    </section>

    {/* Resource CTA Banner - Premium Dark */}
    <section className="w-full py-20 relative overflow-hidden bg-slate-900 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 to-indigo-900/20" />
      <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-[0.05]" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 pl-0 md:pl-8">
            <div className="flex-1 text-center md:text-left space-y-3">
                <h3 className="text-3xl font-bold text-white tracking-tight">
                    The Chronic Pain Antidote
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                    Download the free eBook to learn more about the science behind this evidence-based treatment.
                </p>
            </div>
            
            <div className="flex-shrink-0">
                <Link 
                  href="https://drive.google.com/file/d/1zeX9QeI9dDtGTTTgp9feqb_0MEoSSWU5/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                    <ShimmerButton className="h-14 px-8 text-lg font-semibold shadow-xl shadow-teal-900/20" background="#0F8B8D" shimmerColor="#ffffff">
                       <Download className="h-5 w-5" /> Download eBook
                    </ShimmerButton>
                </Link>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}
