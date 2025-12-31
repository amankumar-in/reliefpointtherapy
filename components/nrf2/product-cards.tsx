"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

const products = [
  {
    id: "nrf2",
    name: "Protandim Nrf2 Synergizer",
    cta: "Order Protandim Nrf2",
    link: "https://genismatel.lifevantage.com/us-en/shop/protandim-nrf2",
    whatItIs: (
      <>
        <p className="mb-4">
          Protandim Nrf2 is a nutrigenomic supplement that activates the body&apos;s own antioxidant and detoxification pathways, rather than supplying antioxidants directly. It&apos;s designed to support inflammation balance, cellular repair, energy, and healthy aging at the cellular level.
        </p>
        <div className="space-y-3">
          <p className="font-semibold">What Makes It Different</p>
          <p>
            Unlike traditional antioxidants, Protandim Nrf2 activates the <strong>Nrf2 pathway</strong>, signaling your body to produce its own protective enzymes.
          </p>
          <p className="font-semibold">Clinical studies have shown Protandim Nrf2 can:</p>
          <ul className="space-y-2 list-none">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Increase <strong>glutathione</strong> levels by up to <strong>300%</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Increase <strong>SOD</strong> and <strong>catalase</strong> activity</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Reduce <strong>oxidative stress</strong> by approximately <strong>40% in 30 days</strong></span>
            </li>
          </ul>
        </div>
      </>
    ),
    bestFor: [
      "Chronic inflammation",
      "Low energy or sluggish recovery",
      "Mental fog",
      "Healthy aging and longevity support",
      "Daily foundational wellness",
      "Pairing with collagen (glowstack) or NFPM",
    ],
    whatToExpect: "Some people notice subtle improvements sooner, but meaningful and lasting cellular benefits typically develop over 3–6 months. This timeline reflects normal biology — cellular turnover, mitochondrial repair, and inflammation regulation take time. I don't recommend starting Nrf2 unless you're willing to give your body that window to respond.",
    howToSave: (
      <>
        <ul className="space-y-2 list-none">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span><strong>Subscribe & Save:</strong> 10% off (cancel anytime)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span><strong>3-pack option:</strong> Lowers cost to approximately <strong>$50/month</strong></span>
            <br />
            <span className="text-sm text-foreground/70 ml-6">Important: Update delivery to <strong>every 3 months</strong> if ordering for one individual</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span><strong>30-day money-back guarantee</strong></span>
          </li>
        </ul>
      </>
    ),
    ingredients: (
      <>
        <p className="mb-4">
          Protandim Nrf2 contains five plant-based, vegan-friendly ingredients:
        </p>
        <ul className="space-y-2 list-none mb-4">
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
        <p className="text-sm text-foreground/70">
          While many people take these individually, <strong>the ingredients alone do not activate the Nrf2 pathway</strong>. The clinically studied results come from the patented synergy and ratios used in Protandim Nrf2.
        </p>
      </>
    ),
  },
  {
    id: "glowstack",
    name: "GlowStack (Liquid Collagen + Nrf2)",
    cta: "Order GlowStack",
    link: "https://genismatel.lifevantage.com/us-en/shop/healthy-glow-essentials-stack",
    whatItIs: (
      <>
        <p className="mb-4">
          GlowStack combines Protandim Nrf2 with liquid collagen and a blend of 10 bioactive peptides to support skin elasticity, hydration, firmness, joint comfort, gut health, eye health, and connective tissue integrity from the inside out.
        </p>
        <div className="space-y-3">
          <p className="font-semibold">Clinically shown to (highlights):</p>
          <ul className="space-y-2 list-none">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Visible results in <strong>6–8 weeks</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Collagen density <strong>+100%</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Crow&apos;s feet depth <strong>−22%</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Skin moisture <strong>+18%</strong></span>
            </li>
          </ul>
          <p className="text-sm text-foreground/70 italic">
            Results may vary. Skin turnover takes at least 28 days and can take longer as we age.
          </p>
        </div>
      </>
    ),
    bestFor: [
      "Skin elasticity, tone, glow",
      "Hair and nails",
      "Joint health",
      "Recovery",
      "Aesthetic + internal wellness benefits",
    ],
    whatToExpect: "Many people begin noticing improvements in skin hydration, elasticity, and joint comfort within 6–8 weeks. Deeper structural support — including collagen remodeling, joint resilience, and bone support — continues to develop over 3–6 months, especially when used consistently.",
    howToSave: (
      <>
        <p className="mb-3 font-semibold">Two strategies:</p>
        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-2">1. Collagen Loading Month (if cost is a concern)</p>
            <ul className="space-y-2 list-none">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Use GlowStack daily for 1 month to jump-start collagen production</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Then switch to Protandim Nrf2 only and add the 10-pack liquid collagen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Take collagen every 3 days to help maintain collagen support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Or, after the first month, continue with Protandim Nrf2 alone</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">2. Pure Subscription</p>
            <ul className="space-y-2 list-none">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Subscribe & Save (10% off)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Cancel anytime</span>
              </li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "dual",
    name: "Dual Synergizer (Nrf1 + Nrf2)",
    cta: "Order Dual Synergizer",
    link: "https://genismatel.lifevantage.com/us-en/shop/protandim-dual",
    whatItIs: "Supports mitochondria (Nrf1) + reduces oxidative stress (Nrf2). Mitochondria naturally decline with age, affecting energy, metabolism, and cognition.",
    bestFor: [
      "Low energy",
      "Brain fog",
      "Metabolism",
      "Active lifestyles",
      "Anti-aging",
    ],
    howToSave: (
      <>
        <ul className="space-y-2 list-none">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Subscribe & Save</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Purchase Tri Synergizer if NAD is desired</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "tri",
    name: "Tri Synergizer (Nrf1 + Nrf2 + NAD)",
    cta: "Order Tri Synergizer",
    link: "https://genismatel.lifevantage.com/us-en/shop/protandim-tri",
    whatItIs: (
      <>
        <p className="mb-4">
          LifeVantage&apos;s most complete cellular activation system.
        </p>
        <ul className="space-y-2 list-none mb-4">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>NAD levels drop ~50% by age 40</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>This system is <strong>clinically proven to increase NAD by 100% in 24 hours</strong></span>
          </li>
        </ul>
        <p className="font-semibold mb-2">Supports:</p>
        <ul className="space-y-2 list-none">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Longevity pathways</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Energy, focus, performance</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>DNA repair</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Inflammation reduction</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Recovery</span>
          </li>
        </ul>
      </>
    ),
    bestFor: [
      "Faster or deeper results",
      "Longevity + anti-aging",
      "Cognitive performance",
      "Recovery + resilience",
    ],
    howToSave: (
      <>
        <ul className="space-y-2 list-none">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Cheaper bundled vs individual bottles</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Subscribe & Save (10% off)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>30-day guarantee</span>
          </li>
        </ul>
      </>
    ),
  },
]

export function ProductCards() {
  return (
    <section id="products" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div key={product.id} id={product.id} className="p-6 md:p-8 flex flex-col space-y-6 bg-white border border-[#E2E8E8] rounded-lg shadow-sm hover:shadow-md transition-shadow scroll-mt-20">
              <h3 className="text-2xl md:text-3xl font-heading text-primary">
                {product.name}
              </h3>

              <Accordion type="single" collapsible className="w-full space-y-2">
                <AccordionItem value={`what-it-is-${product.id}`} className="border border-[#E2E8E8] rounded-lg px-4">
                  <AccordionTrigger className="font-sans text-base md:text-lg text-foreground hover:no-underline">
                    What It Is
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 font-sans text-base md:text-lg leading-relaxed">
                    {typeof product.whatItIs === "string" ? <p>{product.whatItIs}</p> : product.whatItIs}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value={`best-for-${product.id}`} className="border border-[#E2E8E8] rounded-lg px-4">
                  <AccordionTrigger className="font-sans text-base md:text-lg text-foreground hover:no-underline">
                    Best For
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 font-sans text-base md:text-lg leading-relaxed">
                    <ul className="space-y-2 list-none">
                      {product.bestFor.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {product.whatToExpect && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <p className="font-semibold mb-2">What to Expect:</p>
                        <p>{product.whatToExpect}</p>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value={`how-to-save-${product.id}`} className="border border-[#E2E8E8] rounded-lg px-4">
                  <AccordionTrigger className="font-sans text-base md:text-lg text-foreground hover:no-underline">
                    How to Save
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 font-sans text-base md:text-lg leading-relaxed">
                    {typeof product.howToSave === "string" ? <p>{product.howToSave}</p> : product.howToSave}
                  </AccordionContent>
                </AccordionItem>

                {product.ingredients && (
                  <AccordionItem value={`ingredients-${product.id}`} className="border border-[#E2E8E8] rounded-lg px-4">
                    <AccordionTrigger className="font-sans text-base md:text-lg text-foreground hover:no-underline">
                      Ingredients
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80 font-sans text-base md:text-lg leading-relaxed">
                      {product.ingredients}
                    </AccordionContent>
                  </AccordionItem>
                )}
              </Accordion>

              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded mt-auto">
                <Link href={product.link} target="_blank" rel="noopener noreferrer">
                  {product.cta}
                </Link>
              </Button>
            </div>
          ))}
          </div>
        </div>
        
        <p className="text-center text-sm text-foreground/60 italic mt-12">
          Wellness products are not intended to diagnose, treat, cure, or prevent disease. Results vary.
        </p>
      </div>
    </section>
  )
}
