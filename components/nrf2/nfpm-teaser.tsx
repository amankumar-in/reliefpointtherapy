import Link from "next/link"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { Stethoscope, ArrowRight } from "lucide-react"

export function NFPMTeaser() {
  return (
    <section className="py-24 bg-teal-900 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-[0.05]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-teal-500/30 text-center shadow-2xl">
            
            <div className="mx-auto w-16 h-16 bg-teal-500/20 rounded-2xl flex items-center justify-center mb-8 text-teal-300">
                <Stethoscope className="h-8 w-8" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Looking for <span className="text-teal-400">Covered Pain Relief?</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-light mb-10">
                NFPM is our nurse-led, in-home pain relief program available locally in the East Bay. It helps retrain your nerves to stop chronic pain signals. <br className="hidden md:block" />
                <span className="text-white font-medium mt-2 block">Covered by Original Medicare.</span>
            </p>

            <Link href="/nfpm" className="inline-block">
                <ShimmerButton className="h-14 px-10 text-lg font-semibold" background="#0F8B8D" shimmerColor="#ffffff">
                     <span className="flex items-center gap-2">
                        Explore Clinical Care <ArrowRight className="h-4 w-4" />
                     </span>
                </ShimmerButton>
            </Link>

        </div>
        
        <p className="text-center text-slate-500 text-sm mt-8">
            *Available for qualifying patients in the San Francisco East Bay area.
        </p>
      </div>
    </section>
  )
}
