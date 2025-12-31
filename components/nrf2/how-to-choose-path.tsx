import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, Zap, Heart, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"

const paths = [
  {
    title: "Start with Protandim Nrf2",
    description: "If you want ONE simple daily foundation",
    icon: Sparkles,
    link: "https://genismatel.lifevantage.com/us-en/shop/protandim-nrf2",
  },
  {
    title: "Dual Synergizer (Nrf1 + Nrf2)",
    description: "If you're over 40, feel low energy, recover slowly, or want faster, deeper results",
    details: [
      "Nrf2 (cell protection & antioxidant response)",
      "Nrf1 (mitochondrial function & cellular energy)",
    ],
    note: "As we age, mitochondrial function naturally declines, which can affect energy and recovery. Dual Synergizer helps support this at the cellular level.",
    icon: Zap,
    link: "https://genismatel.lifevantage.com/us-en/shop/protandim-dual",
  },
  {
    title: "GlowStack",
    description: "If you want skin, hair, joint, or collagen support",
    icon: Heart,
    link: "https://genismatel.lifevantage.com/us-en/shop/healthy-glow-essentials-stack",
  },
]

export function HowToChoosePath() {
  return (
    <section className="py-20 md:py-32 bg-[#F6FAFA]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading text-primary">
              Start Here: What&apos;s the Right Fit for You?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paths.map((path, index) => {
              const Icon = path.icon
              return (
                <Card key={index} className="p-6 flex flex-col space-y-4 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading text-primary">
                      {path.title}
                    </h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    {path.description}
                  </p>
                  {path.details && (
                    <div className="space-y-2">
                      <p className="font-semibold text-sm text-foreground">Supports both:</p>
                      <ul className="space-y-1">
                        {path.details.map((detail, idx) => (
                          <li key={idx} className="text-sm text-foreground/80 flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      {path.note && (
                        <p className="text-sm text-foreground/70 italic pt-2">
                          {path.note}
                        </p>
                      )}
                    </div>
                  )}
                  <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-muted rounded mt-auto">
                    <Link href={path.link} target="_blank" rel="noopener noreferrer">
                      Learn More
                    </Link>
                  </Button>
                </Card>
              )
            })}
          </div>

          <div className="bg-white rounded-lg border border-border p-6 text-center space-y-3">
            <p className="font-semibold text-foreground">Most popular options:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-foreground/80">Protandim Nrf2</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-foreground/80">GlowStack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
