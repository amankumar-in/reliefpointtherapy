"use client"

import { Check } from "lucide-react"

export function InsuranceInfo() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
         <div className="grid md:grid-cols-2 gap-12 items-center">
             
             <div>
                 <h2 className="text-3xl font-bold text-slate-900 mb-6">
                     Insurance &<br />Eligibility
                 </h2>
                 <p className="text-slate-600 text-lg mb-8">
                     We handle the entire verification process. Most patients with traditional Medicare coverage qualify immediately.
                 </p>
                 <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm inline-flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                          <div className="font-bold text-slate-900">Fast Verification</div>
                          <div className="text-slate-500 text-sm">Typically completed within 24–72 hours</div>
                      </div>
                 </div>
             </div>

             <div className="space-y-4">
                 {[
                     { 
                         name: "Original Medicare", 
                         desc: "Coverage available for eligible patients.",
                         bg: "bg-teal-50 border-teal-100 text-teal-900"
                     },
                     { 
                         name: "Private Insurance (PPO)", 
                         desc: "Verification Required",
                         bg: "bg-white border-slate-200 text-slate-900"
                     },
                     { 
                         name: "Cash-Pay Options", 
                         desc: "Self-pay options available",
                         bg: "bg-white border-slate-200 text-slate-900"
                     }
                 ].map((plan, i) => (
                     <div key={i} className={`p-6 rounded-xl border ${plan.bg} flex justify-between items-center`}>
                          <div>
                              <div className="font-bold text-lg">{plan.name}</div>
                              <div className="opacity-70">{plan.desc}</div>
                          </div>
                     </div>
                 ))}
             </div>

         </div>
      </div>
    </section>
  )
}
