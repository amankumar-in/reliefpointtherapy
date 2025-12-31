import { CheckCircle2 } from "lucide-react"

export function WhyChooseNFPM() {
  const benefits = [
    "100% non-invasive",
    "Drug-free",
    "No downtime",
    "Nurse-led care",
    "Covered by Medicare & many PPOs",
    "Helps people who haven't found relief elsewhere",
    "Designed to promote actual healing, not just masking symptoms",
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="space-y-12">
          <h2 className="text-3xl md:text-4xl font-heading text-primary text-center">
            Why People Choose NFPM
          </h2>
          <div className="bg-white rounded-lg border border-border p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <CheckCircle2 className="h-7 w-7 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-foreground/80 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Outcome Highlight */}
          <div className="bg-primary/10 border-2 border-primary rounded-lg p-8 text-center space-y-2">
            <div className="text-5xl md:text-6xl font-heading text-primary">85%</div>
            <p className="text-xl md:text-2xl font-semibold text-foreground">
              of NFPM patients experience a 50% or greater reduction in pain.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
