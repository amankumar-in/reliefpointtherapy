import { Smile, Sun, Zap, ThumbsUp } from "lucide-react"

export function WhatToExpect() {
  const sensations = [
    { text: "Gentle", icon: Smile, color: "from-blue-50 to-blue-100", border: "border-blue-200", textCol: "text-blue-700" },
    { text: "Warm", icon: Sun, color: "from-amber-50 to-amber-100", border: "border-amber-200", textCol: "text-amber-700" },
    { text: "Tingling", icon: Zap, color: "from-purple-50 to-purple-100", border: "border-purple-200", textCol: "text-purple-700" },
    { text: "Never Painful", icon: ThumbsUp, color: "from-teal-50 to-teal-100", border: "border-teal-200", textCol: "text-teal-700" },
  ]

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-12 text-center">
          
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                What to <span className="text-teal-600">Expect</span>
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed max-w-3xl mx-auto">
              During treatment, you&apos;ll relax in a comfortable seated or reclined position while high-pulse electrical currents stimulate pain pathways, muscles, and supporting tissues.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sensations.map((item, index) => (
                <div key={index} className={`bg-gradient-to-br ${item.color} border ${item.border} rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md transition-all`}>
                    <item.icon className={`h-8 w-8 ${item.textCol}`} />
                    <p className={`font-bold text-lg ${item.textCol}`}>{item.text}</p>
                </div>
            ))}
          </div>

          <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light bg-slate-50 p-8 rounded-2xl border border-slate-100">
             <p>
                As part of your care plan, <strong className="text-teal-700 font-medium">IV hydration</strong> is often included every other treatment session to support hydration, circulation, and the body&apos;s healing response.
             </p>
             <p className="text-sm text-slate-500">
                Before and after each session, we assess your pain, mobility, and overall progress.
             </p>
          </div>

        </div>
      </div>
    </section>
  )
}
