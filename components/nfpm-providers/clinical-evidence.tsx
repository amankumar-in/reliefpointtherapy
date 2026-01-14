"use client"

import { Quote } from "lucide-react"

export function ClinicalEvidence() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
       {/* Background */}
       <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-[0.05]" />
       <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-teal-900/20 to-transparent pointer-events-none" />

       <div className="container mx-auto px-4 md:px-6 relative z-10">
          
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              {/* Left: Stats */}
              <div className="space-y-12">
                  <div>
                      <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
                          Outcomes That <br />
                          <span className="text-teal-400">Speak Volumes</span>
                      </h2>
                      <p className="text-slate-400 text-lg">
                          Proven efficacy across a wide range of chronic conditions.
                      </p>
                  </div>

                  <div className="grid gap-2">
                      <div className="p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                          <div className="flex items-baseline gap-2 mb-2">
                              <span className="text-5xl md:text-6xl font-bold text-white">85%</span>
                              <span className="text-teal-400 font-medium">+</span>
                          </div>
                          <p className="text-lg font-medium text-white mb-1">Patient Improvement Rate</p>
                          <p className="text-sm text-slate-500">"Of my patients experience &gt;50% improvement" — Dr. Johnny Ross, MD</p>
                      </div>
                      
                      <div className="p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                          <div className="flex items-baseline gap-2 mb-2">
                              <span className="text-5xl md:text-6xl font-bold text-white">2</span>
                              <span className="text-teal-400 font-medium">Sessions</span>
                          </div>
                          <p className="text-lg font-medium text-white mb-1">Time to Initial Relief</p>
                          <p className="text-sm text-slate-500">"Many patients experience relief within two sessions" — Dr. John D. Mikuzis, DO</p>
                      </div>
                  </div>
              </div>

              {/* Right: Testimonials Slider/Grid */}
              <div className="relative">
                  {/* Decorative quote mark */}
                  <div className="absolute -top-12 -left-8 text-teal-800/30">
                      <Quote size={120} />
                  </div>

                  <div className="bg-slate-800/50 rounded-3xl p-8 md:p-10 border border-white/5 relative backdrop-blur-xl">
                       <Quote className="h-8 w-8 text-teal-500 mb-6" />
                       <blockquote className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light mb-8">
                           "Before RELATYV NFPM, my patients relied on medications with significant side effects and addiction risk... Approximately 85% of my patients now experience pain relief."
                       </blockquote>
                       <div className="flex items-center gap-4">
                           <div className="h-12 w-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white font-bold text-lg">
                               JM
                           </div>
                           <div>
                               <div className="text-white font-bold">Dr. John D. Mikuzis</div>
                               <div className="text-teal-400 text-sm">Doctor of Osteopathic Medicine</div>
                           </div>
                       </div>
                  </div>

                  {/* Secondary small testimonial */}
                  <div className="mt-6 ml-12 bg-slate-800/30 rounded-2xl p-6 border border-white/5 backdrop-blur-sm">
                       <p className="text-sm text-slate-400 mb-4">
                           "Traditional pain management often traps patients... NFPM offers broad applications with consistent improvements."
                       </p>
                       <div className="text-slate-200 font-medium text-sm">- Dr. Christopher Williams, MD</div>
                  </div>
              </div>

          </div>
       </div>
    </section>
  )
}
