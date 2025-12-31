"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is Protandim Nrf2?",
    answer: (
      <>
        <p className="mb-3">
          Protandim Nrf2 helps your body turn on its own natural defense system. It signals your cells to make more of their own antioxidants, including glutathione. In studies, it has been shown to increase glutathione by up to 300%.
        </p>
        <p className="mb-3">
          Protandim Nrf2 is also the only product on the market shown in human studies to lower oxidative stress by about 40%.
        </p>
        <p className="mb-3">
          Oxidative stress is a major driver of inflammation, stress, aging, and many chronic health issues.
        </p>
        <p>
          It is made from a patented blend of plant-based ingredients that work together to support cellular health and repair. You can find the full ingredients list on the LifeVantage product page.
        </p>
      </>
    ),
  },
  {
    question: "How long does it take to see results?",
    answer: (
      <>
        <p>
          Most people begin noticing benefits in <strong>6–8 weeks</strong>, though some feel improvements sooner.
        </p>
        <p className="mt-3">
          Cellular repair naturally takes 60–90 days, but we encourage committing to Nrf2 for at least 3–6 months for a fair evaluation.
        </p>
        <p className="mt-3">
          I generally don&apos;t recommend starting Nrf2 unless you&apos;re willing to give your cells enough time to respond.
        </p>
      </>
    ),
  },
  {
    question: "What is GlowStack?",
    answer: (
      <>
        <p>
          GlowStack combines Nrf2 with liquid collagen and peptides to support skin elasticity, joint comfort, hydration, bone density, and recovery. Visible results often begin around <strong>6–8 weeks</strong>.
        </p>
      </>
    ),
  },
  {
    question: "Which product should I start with?",
    answer: (
      <>
        <ul className="space-y-2 list-none">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>If choosing only one → <strong>Protandim Nrf2</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>For 40+, energy, deeper or faster results → <strong>Dual Synergizer</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>For skin, hair, joint, and collagen support → <strong>GlowStack</strong></span>
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Can I take these with my current supplements?",
    answer: (
      <>
        <p>
          Yes — these are nutrigenomic, plant-based products designed to support your body&apos;s natural cellular pathways. They are generally very well tolerated, and most people do not experience side effects.
        </p>
        <p className="mt-3">
          If you have specific concerns, feel free to discuss them with your healthcare provider. All ingredients are plant-based and vegan.
        </p>
      </>
    ),
  },
  {
    question: "Are these treatments covered by insurance?",
    answer: (
      <>
        <p>
          No — cellular activation products are wellness supplements and are not insurance-covered.
        </p>
      </>
    ),
  },
  {
    question: "Is there a money-back guarantee?",
    answer: (
      <>
        <p>
          Yes — all LifeVantage orders include a <strong>30-day money-back guarantee</strong>.
        </p>
      </>
    ),
  },
  {
    question: "Can I use these with NFPM?",
    answer: (
      <>
        <p>
          Yes. Many patients use cellular activation to support inflammation reduction, energy, recovery, and overall wellness alongside their NFPM program for faster, deeper results.
        </p>
      </>
    ),
  },
  {
    question: "How do subscriptions work?",
    answer: (
      <>
        <p>
          Subscribe & Save gives 10% off and can be canceled anytime.
        </p>
      </>
    ),
  },
  {
    question: "What if I'm still not sure what I need?",
    answer: (
      <>
        <p>
          You can submit your information on the products page, and I will personally build a recommendation and a direct checkout link for you.
        </p>
      </>
    ),
  },
  {
    question: "What are the ingredients in Protandim Nrf2, and why can't I just take them separately?",
    answer: (
      <>
        <p className="mb-3">
          Protandim Nrf2 is made from five plant-based, vegan-friendly ingredients:
        </p>
        <ul className="space-y-2 list-none mb-3">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Turmeric root extract</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Green tea extract</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Bacopa monnieri</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Milk thistle</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Ashwagandha</span>
          </li>
        </ul>
        <p className="mb-3">
          While many people take these herbs individually, <strong>the ingredients alone do not activate the Nrf2 pathway</strong>.
        </p>
        <p className="mb-3">
          What makes Protandim unique is its <strong>patented formula and ingredient synergy</strong>, which clinical studies show can:
        </p>
        <ul className="space-y-2 list-none">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Increase glutathione up to 300%</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Increase SOD and catalase</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Reduce oxidative stress by ~40% in 30 days</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Support detoxification and cellular repair</span>
          </li>
        </ul>
        <p className="mt-3">
          These outcomes <strong>cannot be replicated</strong> by taking the ingredients separately.
        </p>
      </>
    ),
  },
]

export function Nrf2FAQ() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading text-primary">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-2 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-[#E2E8E8] rounded-lg px-4 bg-white"
              >
                <AccordionTrigger className="font-sans text-base md:text-lg text-foreground hover:no-underline text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 font-sans text-base md:text-lg leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
