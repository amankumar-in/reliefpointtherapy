import { CheckCircle2 } from "lucide-react"

const benefits = [
  "Reduce pain",
  "Improve mobility",
  "Support healing at the cellular level",
  "Enhance energy and recovery",
  "Help people reclaim independence",
]

export function WhyIBelieve() {
  return (
    <section className="py-20 md:py-32 bg-[#F6FAFA]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-heading text-primary">
            Why I Brought NFPM and Cellular Activation Into My Practice
          </h2>
          
          <p className="text-xl text-foreground/80 leading-relaxed">
            NFPM and cellular activation aren&apos;t just treatments — they&apos;re <strong>hope</strong> for people who&apos;ve felt dismissed or out of options.
          </p>
          
          <p className="text-lg text-foreground/80 leading-relaxed">
            I&apos;ve seen firsthand how these solutions can:
          </p>
          
          <ul className="space-y-3">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-lg text-foreground/80">{benefit}</span>
              </li>
            ))}
          </ul>
          
          <p className="text-lg text-foreground/80 leading-relaxed pt-4">
            There&apos;s nothing quick-fix about my approach — it&apos;s grounded in science, compassion, and real results.
          </p>
        </div>
      </div>
    </section>
  )
}
