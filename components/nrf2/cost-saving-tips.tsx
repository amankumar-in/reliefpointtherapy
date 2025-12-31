"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function CostSavingTips() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-heading text-primary text-center">
            Cost-Saving Tips
          </h2>

          <Accordion type="single" collapsible className="w-full space-y-2 max-w-3xl mx-auto">
            <AccordionItem value="subscriptions" className="border border-[#E2E8E8] rounded-lg px-4 bg-white">
              <AccordionTrigger className="font-sans text-base md:text-lg text-foreground hover:no-underline">
                Subscriptions
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 font-sans text-base md:text-lg leading-relaxed">
                <p>All products are 10% off with Subscribe & Save.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="nrf2-3pack" className="border border-[#E2E8E8] rounded-lg px-4 bg-white">
              <AccordionTrigger className="font-sans text-base md:text-lg text-foreground hover:no-underline">
                Nrf2 3-Pack Strategy
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 font-sans text-base md:text-lg leading-relaxed">
                <ul className="space-y-2 list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Drops cost to ~$50/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Must adjust delivery to <strong>every 3 months</strong></span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="glowstack-maintenance" className="border border-[#E2E8E8] rounded-lg px-4 bg-white">
              <AccordionTrigger className="font-sans text-base md:text-lg text-foreground hover:no-underline">
                GlowStack Maintenance Strategy
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 font-sans text-base md:text-lg leading-relaxed">
                <ul className="space-y-2 list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Take daily for 1 month and then drop down to Nrf2 only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Or add-on 10-pack of collagen and take every 3 days</span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="money-back" className="border border-[#E2E8E8] rounded-lg px-4 bg-white">
              <AccordionTrigger className="font-sans text-base md:text-lg text-foreground hover:no-underline">
                Money-Back Guarantee
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 font-sans text-base md:text-lg leading-relaxed">
                <p>All LifeVantage orders include a 30-day guarantee.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
