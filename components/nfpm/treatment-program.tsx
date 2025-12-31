import { CheckCircle2 } from "lucide-react"

export function TreatmentProgram() {
  const programItems = [
    "Two 60-minute sessions each week",
    "In-home care by a registered nurse",
    "Progressive neuromodulation treatment",
    "Pain tracking and mobility monitoring",
    "Lifestyle guidance to support healing",
    "IV hydration",
    "Optional cellular activation recommendations",
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-heading text-primary text-center">
            What Your NFPM Program Includes
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed text-center">
            The NFPM program is structured over <strong>8 weeks</strong> and includes:
          </p>
          <div className="bg-white border border-border rounded-lg p-8 md:p-10 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {programItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-7 w-7 text-primary mt-0.5" />
                  </div>
                  <span className="text-foreground/80 text-lg leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-lg text-foreground/80 leading-relaxed text-center pt-4">
            Your treatment plan is personalized based on your pain, function goals, and medical history.
          </p>
        </div>
      </div>
    </section>
  )
}
