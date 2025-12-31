"use client"

import Link from "next/link"
import { Play } from "lucide-react"
import { Card } from "@/components/ui/card"

const testimonials = [
  {
    name: "Ed",
    url: "https://relatyv.com/treatments/neuragenex-nfpm/testimonials/ed/",
    conditions: [
      "Peripheral neuropathy (DBN, DB2)",
      "Pain in hands and feet",
      "Symptom reduction and improved function",
    ],
  },
  {
    name: "Robert",
    url: "https://relatyv.com/treatments/neuragenex-nfpm/testimonials/robert/",
    conditions: [
      "Plantar fasciitis & neuropathy",
      "Pain, stiffness in legs",
      "Difficulty walking",
      "Neuropathy relief",
    ],
  },
  {
    name: "Wanda",
    url: "https://relatyv.com/treatments/neuragenex-nfpm/testimonials/wanda/",
    conditions: [
      "Knee and leg pain",
      "Pins & needles; throbbing; sleep disturbance",
      "Relief without surgery or medications",
    ],
  },
  {
    name: "Hayward",
    url: "https://relatyv.com/treatments/neuragenex-nfpm/testimonials/hayward-smith/",
    conditions: [
      "Work accident",
      "Spinal stenosis & leg pain",
      "Severe muscle spasms",
      "Returned sensation in feet",
      "Progressed from walker → cane",
    ],
  },
]

export function NFPMTestimonials() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading text-primary">
              Real NFPM Patient Stories
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              NFPM has helped many people reduce pain, regain mobility, and restore their quality of life — especially after other treatments failed. These patient stories come directly from the Relatyv national NFPM program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Link
                key={index}
                href={testimonial.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="cursor-pointer hover:shadow-lg transition-shadow border border-border rounded-lg overflow-hidden h-full">
                  <div className="relative aspect-video bg-muted flex items-center justify-center group">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <div className="relative z-10 bg-primary/90 rounded-full p-4 group-hover:bg-primary transition-colors">
                      <Play className="h-8 w-8 text-white fill-white ml-1" />
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-heading text-primary">
                      {testimonial.name}&apos;s Story
                    </h3>
                    <ul className="space-y-2">
                      {testimonial.conditions.map((condition, idx) => (
                        <li key={idx} className="text-sm text-foreground/80 flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{condition}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
