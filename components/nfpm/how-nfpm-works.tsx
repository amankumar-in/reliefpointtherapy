import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Activity, Heart, Zap, Dumbbell, Bandage, TrendingUp } from "lucide-react"

const benefits = [
  { icon: Activity, text: "Reduce pain signal activity" },
  { icon: Heart, text: "Promote circulation and oxygenation" },
  { icon: Zap, text: "Decrease inflammation" },
  { icon: Dumbbell, text: "Relax tight or overactive muscles" },
  { icon: Bandage, text: "Support tissue repair" },
  { icon: TrendingUp, text: "Accelerate wound healing" },
]

export function HowNFPMWorks() {
  return (
    <>
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading text-primary">
              How NFPM Works
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              NFPM uses high-pulse electrical currents to:
            </p>
          </div>

          {/* Icon Grid - 2 rows: 4 items + 3 items */}
          <div className="space-y-6">
            {/* First row: 4 items */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {benefits.slice(0, 4).map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-lg border border-border shadow-sm hover:shadow-md transition-all">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-sm md:text-base text-foreground/80 font-medium">{benefit.text}</p>
                  </div>
                )
              })}
            </div>
            {/* Second row: 3 items */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {benefits.slice(4).map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index + 4} className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-lg border border-border shadow-sm hover:shadow-md transition-all">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-sm md:text-base text-foreground/80 font-medium">{benefit.text}</p>
                  </div>
                )
              })}
              <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-lg border border-border shadow-sm hover:shadow-md transition-all">
                <div className="p-4 bg-primary/10 rounded-full">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm md:text-base text-foreground/80 font-medium">Improve mobility</p>
              </div>
            </div>
          </div>

          <p className="text-center text-lg text-foreground/80 leading-relaxed">
            Most people begin noticing relief within the first several sessions, with deeper improvements during the full 8-week program.
          </p>
        </div>
      </div>
    </section>

    {/* Resource CTA Banner - Full Width (separate section) */}
    <section className="w-full bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center space-y-6">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white">
            The Chronic Pain Antidote
          </h3>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Download the Relatyv NFPM eBook to learn more about this evidence-based treatment.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded h-14 px-10 text-lg shadow-lg">
            <Link 
              href="https://drive.google.com/file/d/1yajdZCW-UA0bMiRje4-H41-MbUFVE4Tf/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download eBook
            </Link>
          </Button>
        </div>
      </div>
    </section>
    </>
  )
}
