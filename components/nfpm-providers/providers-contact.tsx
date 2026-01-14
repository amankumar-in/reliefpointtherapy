"use client"

import Image from "next/image"
import { Mail, Phone } from "lucide-react"

export function ProvidersContact() {
  return (
    <section id="contact" className="py-12 md:py-16 relative overflow-hidden bg-slate-900">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-5" />

      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        
        <div className="text-center mb-8 md:mb-12 space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Start a <span className="text-teal-400">Conversation</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Direct access for clinical partnerships. I am available to discuss complex cases.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
             {/* Email Card */}
             <a href="mailto:info@reliefpointtherapy.com" className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 flex flex-col items-center">
                 <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                 <div className="relative z-10 flex flex-col items-center text-center">
                     <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform group-hover:bg-teal-500 group-hover:shadow-[0_0_20px_rgba(45,212,191,0.4)]">
                         <Mail className="h-5 w-5" />
                     </div>
                     <h3 className="text-lg font-bold text-white mb-1">Email Direct</h3>
                     <p className="text-slate-400 text-sm md:text-base group-hover:text-teal-200 transition-colors">info@reliefpointtherapy.com</p>
                 </div>
             </a>

             {/* Phone Card */}
             <a href="tel:9258139495" className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 flex flex-col items-center">
                 <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                 <div className="relative z-10 flex flex-col items-center text-center">
                     <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform group-hover:bg-indigo-500 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                         <Phone className="h-5 w-5" />
                     </div>
                     <h3 className="text-lg font-bold text-white mb-1">Call Office</h3>
                     <p className="text-slate-400 text-sm md:text-base group-hover:text-indigo-200 transition-colors">925-813-9495</p>
                 </div>
             </a>
        </div>

        {/* Profile Footer */}
        <div className="mt-8 md:mt-12 bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 md:gap-8 backdrop-blur-sm justify-center">
             <div className="relative shrink-0">
                  <div className="h-16 w-16 md:h-20 md:w-20 rounded-full border-2 border-white/10 shadow-lg overflow-hidden relative">
                      <Image 
                        src="/assets/images/genis-headshot-transparent-bg.png" 
                        alt="Genis Matel" 
                        fill 
                        className="object-cover bg-teal-900"
                      />
                  </div>
             </div>
             <div className="text-center md:text-left space-y-1">
                  <blockquote className="text-base md:text-lg text-slate-300 italic font-light max-w-lg">
                      &quot;We don't just treat pain; we partner with you to rebuild the patient's quality of life.&quot;
                  </blockquote>
                  <div className="pt-1 flex flex-col md:flex-row gap-1 md:gap-3 items-center md:items-baseline justify-center md:justify-start">
                      <div className="text-white font-bold text-sm">Genis Matel, RN</div>
                      <div className="hidden md:block text-slate-600 text-xs">•</div>
                      <div className="text-teal-400 text-xs uppercase tracking-wide">Founder, Relief Point Therapy</div>
                  </div>
             </div>
        </div>

      </div>
    </section>
  )
}
