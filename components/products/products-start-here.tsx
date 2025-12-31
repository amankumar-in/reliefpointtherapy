import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Activity, Sparkles, Heart } from "lucide-react"

const paths = [
  {
    title: "NFPM (Neurofunctional Pain Management)",
    description: "Best For:",
    benefits: [
      "Moderate to severe chronic pain",
      "Neuropathy, sciatica, back/knee/hip pain, etc.",
      "Mobility limitations",
      "Post-surgical pain",
      "When you've \"tried everything\"",
      "Covered by Original Medicare (red, white & blue card)",
    ],
    icon: Activity,
    link: "/nfpm",
    cta: "Learn About NFPM",
  },
  {
    title: "Daily Wellness & Inflammation Support (Protandim Nrf2)",
    subtitle: "A simple daily foundation you can start today",
    description: "Best For:",
    benefits: [
      "Inflammation",
      "Low energy",
      "Brain fog",
      "Healthy aging",
      "Maintaining long-term results",
      "People who want to start TODAY",
      "Works alone or alongside NFPM",
    ],
    icon: Sparkles,
    link: "/nrf2",
    cta: "Learn About Nrf2",
  },
  {
    title: "Skin, Hair, Joints, & Collagen (GlowStack)",
    description: "Best For:",
    benefits: [
      "Skin elasticity & glow",
      "Joint support",
      "Hair & nails",
      "People who want aesthetic + internal results",
      "Faster improvement during NFPM or on its own",
    ],
    icon: Heart,
    link: "/nrf2#glowstack",
    cta: "Learn About GlowStack",
  },
]

export function ProductsStartHere() {
  return (
    <section className="py-20 md:py-32 bg-[#F6FAFA]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading text-primary">
              Start Here: What Kind of Support Are You Looking For?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paths.map((path, index) => {
              const Icon = path.icon
              return (
                <Card key={index} className="p-6 flex flex-col space-y-4 hover:shadow-lg transition-shadow cursor-pointer group">
                  <Link href={path.link} className="flex flex-col space-y-4 flex-1">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-heading text-primary">
                        {path.title}
                      </h3>
                    </div>
                    {path.subtitle && (
                      <p className="text-foreground/70 text-sm italic">
                        {path.subtitle}
                      </p>
                    )}
                    <div className="space-y-2">
                      <p className="font-semibold text-sm text-foreground">{path.description}</p>
                      <ul className="space-y-1">
                        {path.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-foreground/80 flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-muted rounded mt-auto">
                      <span>{path.cta}</span>
                    </Button>
                  </Link>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
