import { Sparkles, Heart, Zap, TrendingUp } from "lucide-react"

export function WhyCellularActivation() {
  const benefits = [
    { icon: Sparkles, text: "Produce more of its own antioxidants" },
    { icon: Heart, text: "Reduce inflammation" },
    { icon: Zap, text: "Support energy and cellular health" },
    { icon: TrendingUp, text: "Improve skin, joint, and tissue support over time" },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading text-primary">
              Why Cellular Activation?
            </h2>
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                Your body already knows how to heal. Cellular activation works by turning on your body&apos;s own antioxidant and repair systems, rather than adding something artificial from the outside.
              </p>
              <p>
                These products help activate natural pathways that tell your body to:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-foreground/80 text-base leading-relaxed">{benefit.text}</span>
                    </div>
                  )
                })}
              </div>
              <p>
                All of the ingredients are plant-based, completely vegan, and naturally sourced. They are designed to work with your body, not override it.
              </p>
              <p>
                Because this process works at the cellular level, it isn&apos;t instant. While some people notice changes sooner, the most meaningful benefits typically build over 3–6 months. That&apos;s because cells need time to repair, renew, and function better.
              </p>
              <p>
                The good news is you can start cellular activation right away — on its own as daily wellness support, or alongside NFPM.
              </p>
            </div>
          </div>

          {/* Right Column: Image/Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20 p-8 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                  <Sparkles className="h-12 w-12 text-primary" />
                </div>
                <p className="text-foreground/60 text-sm italic">
                  Cellular activation at work
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
