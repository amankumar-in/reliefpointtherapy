import Link from "next/link"
import { ShimmerButton } from "@/components/ui/shimmer-button"

export function Nrf2FinalCTA() {
  return (
    <section className="py-16 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 max-w-6xl mx-auto">
            
            <div className="flex-1 text-center lg:text-left space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                   Your Health Starts at the <span className="text-teal-400">Cellular Level</span>
                </h2>
                <p className="text-lg text-slate-300 font-light max-w-2xl">
                   Don&apos;t just mask symptoms. Activate your body&apos;s own ability to heal, repair, and thrive.
                </p>
            </div>
            
            <div className="shrink-0">
                <Link href="/products">
                    <ShimmerButton className="h-14 px-8 text-lg font-bold shadow-xl shadow-teal-900/40" background="#0F8B8D" shimmerColor="#ffffff">
                            Shop Products
                    </ShimmerButton>
                </Link>
            </div>

        </div>
      </div>
    </section>
  )
}
