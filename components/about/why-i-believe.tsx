import { CheckCircle2, Quote } from "lucide-react"

const benefits = [
  "Reduce pain",
  "Improve mobility",
  "Support healing at the cellular level",
  "Enhance energy and recovery",
  "Help people reclaim independence",
]

export function WhyIBelieve() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
             
             {/* Left: The Quote/Manifesto Header */}
             <div className="space-y-8 sticky top-32">
                <Quote className="h-12 w-12 text-teal-500 opacity-50" />
                <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                    Why I Brought NFPM Into My Practice
                </h2>
                <div className="w-20 h-1 bg-teal-600 rounded-full" />
                <p className="text-2xl text-slate-300 font-light leading-relaxed">
                    It&apos;s not just a treatment.<br/>
                    It&apos;s <span className="text-white font-medium">hope</span>.
                </p>
             </div>

             {/* Right: The Detail + List */}
             <div className="lg:pt-20 space-y-12">
                <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                    <p>
                        For too long, I watched patients get dismissed when traditional methods failed. I knew there had to be a better way than just managing symptoms.
                    </p>
                    <p>
                        NFPM and cellular activation represent that better way—solutions that empower the body to heal itself.
                    </p>
                </div>

                <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
                    <h3 className="text-xl font-bold text-white mb-6">Real Results I&apos;ve Witnessed:</h3>
                    <ul className="space-y-4">
                        {benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-4 group">
                            <div className="mt-1 bg-teal-500/10 p-1 rounded-full">
                                <CheckCircle2 className="h-5 w-5 text-teal-400" />
                            </div>
                            <span className="text-lg text-slate-300 group-hover:text-white transition-colors">{benefit}</span>
                        </li>
                        ))}
                    </ul>
                </div>

                <p className="text-slate-500 italic border-l-2 border-slate-700 pl-6 py-2">
                    "There&apos;s nothing quick-fix about my approach — it&apos;s grounded in science, compassion, and real results."
                </p>
             </div>

          </div>
        </div>
      </div>
    </section>
  )
}
