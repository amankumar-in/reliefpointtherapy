import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function SupportingProducts() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-semibold border border-amber-100">
             <Sparkles className="h-4 w-4" />
             <span>Enhance Your Recovery</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Want to Start Supporting Your Healing Today?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-light">
            Daily cellular activation products like Protandim Nrf2, GlowStack, and Dual or Tri Synergizer can support inflammation reduction, recovery, and cellular health.
          </p>
          <div className="pt-4">
            <Button asChild size="lg" variant="outline" className="border-slate-200 text-slate-900 hover:bg-slate-50 hover:text-teal-700 rounded-full h-12 px-8 text-lg hover:border-teal-200 transition-all">
              <Link href="/nrf2">
                Learn More About Cellular Activation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
