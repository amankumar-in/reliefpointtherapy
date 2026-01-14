"use client"

import { Building2, Stethoscope, UserPlus, Users } from "lucide-react"

export function PartnerRelationships() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
                Who We Partner With
            </h2>
            <div className="w-full h-px bg-slate-200" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Primary Care Card - Large Left */}
            <div className="md:col-span-2 p-10 bg-white rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between group hover:shadow-md transition-all">
                <div className="space-y-4">
                    <div className="h-12 w-12 bg-teal-50 rounded-2xl flex items-center justify-center">
                        <Stethoscope className="h-6 w-6 text-teal-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Primary Care & Specialists</h3>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-md">
                        We support providers looking for reliable options when standard approaches like medications or injections have hit a ceiling.
                    </p>
                </div>
                <div className="mt-8 flex gap-3 flex-wrap">
                    {["Primary Care", "Pain Management", "Orthopedics", "Geriatrics"].map(tag => (
                        <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Relationship Card - Tall Right */}
            <div className="md:row-span-2 p-10 bg-slate-900 rounded-3xl text-white flex flex-col relative overflow-hidden group">
                 {/* Abstract glowing orb */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-[80px]" />
                 
                 <div className="relative z-10 space-y-6 h-full flex flex-col">
                    <div className="h-12 w-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                         <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Extension of Your Team</h3>
                    <p className="text-slate-300 leading-relaxed flex-1">
                        We don&apos;t just treat; we collaborate. Our nurses handle the in-home delivery while keeping you informed, ensuring a continuum of care that restores patient confidence.
                    </p>
                    <div className="pt-8 border-t border-white/10">
                        <div className="text-4xl font-bold text-white mb-1">100%</div>
                        <div className="text-teal-400 font-medium">Partnership Satisfaction</div>
                    </div>
                 </div>
            </div>

            {/* Bottom Left Card */}
            <div className="md:col-span-2 p-10 bg-teal-50/50 rounded-3xl border border-teal-100 flex items-center gap-8 group hover:bg-teal-50 transition-colors">
                <div className="h-16 w-16 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0">
                    <UserPlus className="h-8 w-8 text-teal-600" />
                </div>
                <div>
                     <h3 className="text-xl font-bold text-slate-900 mb-2">Patient Growth & Retention</h3>
                     <p className="text-slate-600">
                        Drive practice growth and profitability while significantly improving patient outcomes—without adding overhead.
                     </p>
                </div>
            </div>

        </div>
      </div>
    </section>
  )
}
