import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { CheckCircle2, ShieldCheck, CreditCard, Clock } from "lucide-react"

export function InsuranceCoverage() {
  return (
    <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
       {/* Background Decor */}
       <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[80px] pointer-events-none" />
       
      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/50 border border-teal-200 text-teal-700 text-sm font-semibold">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Coverage Verified</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                    Start Your Journey <br />
                    <span className="text-teal-600">Covered by Insurance</span>
                </h2>
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed font-light">
                    <p>
                        We know that navigating insurance can be complex. That&apos;s why our team handles the entire verification process for you.
                    </p>
                    <p>
                        NFPM treatments are covered by <strong>Original Medicare</strong> (red-white-blue card) and many PPO plans.
                    </p>
                </div>
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <ShimmerButton className="h-14 px-8 text-lg font-semibold shadow-lg shadow-teal-900/10" background="#0F8B8D" shimmerColor="#ffffff">
                        <Link 
                            href="https://relatyv.formstack.com/forms/insurance_details"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Verify My Benefits
                        </Link>
                    </ShimmerButton>
                    <div className="flex items-center gap-2 text-slate-500 text-sm px-4">
                        <Clock className="h-4 w-4" />
                        <span>Typically verified within 24 hours</span>
                    </div>
                </div>
            </div>

            {/* Right Content - Ticket Layout */}
            <div className="grid gap-6">
                {/* Card 1: Medicare */}
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xl shadow-teal-900/5 flex items-start gap-5 relative overflow-hidden group hover:-translate-y-1 transition-transform">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-teal-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
                    <div className="h-12 w-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0 relative z-10">
                        <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Original Medicare</h3>
                        <p className="text-slate-600">Full primary coverage under Part B. We accept assignment, meaning simplified billing for you.</p>
                    </div>
                </div>

                {/* Card 2: PPO */}
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xl shadow-teal-900/5 flex items-start gap-5 relative overflow-hidden group hover:-translate-y-1 transition-transform">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
                    <div className="h-12 w-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 relative z-10">
                        <CreditCard className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">PPO Insurance Plans</h3>
                        <p className="text-slate-600">Many major carriers provide coverage. Our team will verify your specific plan benefits before treatment begins.</p>
                    </div>
                </div>

                 {/* Card 3: Cash Pay */}
                 <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xl shadow-teal-900/5 flex items-start gap-5 relative overflow-hidden group hover:-translate-y-1 transition-transform">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
                    <div className="h-12 w-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0 relative z-10">
                        <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Cash-Pay Options</h3>
                        <p className="text-slate-600">Transparent pricing is available for patients without qualifying insurance coverage.</p>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  )
}
