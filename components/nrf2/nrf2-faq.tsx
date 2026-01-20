import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Nrf2FAQ() {
  const faqs = [
    {
      q: "What is Protandim Nrf2?",
      a: "Protandim Nrf2 helps your body turn on its own natural defense system. It signals your cells to make more of their own antioxidants, including glutathione. In studies, it has been shown to increase glutathione by up to 300%. Protandim® Nrf2 is also the only product on the market shown in human studies to lower oxidative stress by about 40% in 30 days. Oxidative stress is a major driver of inflammation, stress, aging, and many chronic health issues. It is made from a patented blend of plant-based ingredients that work together to support cellular health and repair. You can find the full ingredients list on the LifeVantage product page."
    },
    {
      q: "What are the ingredients in Protandim Nrf2, and why can’t I just take them separately?",
      a: "Protandim Nrf2 is made from five plant-based, vegan-friendly ingredients: Turmeric root extract, Green tea extract, Bacopa monnieri, Milk thistle, and Ashwagandha. While many people take these herbs individually, the ingredients alone do not activate the Nrf2 pathway. What makes Protandim unique is its patented formula and ingredient synergy, which clinical studies show can increase glutathione up to 300%, increase SOD and catalase, reduce oxidative stress by ~40% in 30 days, and support detoxification and cellular repair. These outcomes cannot be replicated by taking the ingredients separately."
    },
    {
        q: "How long does it take to see results?",
        a: "With Protandim® Nrf2, most people notice subtle changes within 30–60 days, but meaningful cellular support takes time. For best results, commit to Protandim® Nrf2 for 3–6 months, or about one month per decade of life.\n\nGlowStack (TrueScience® Liquid Collagen + Nrf2) is clinically shown to support visible skin and joint improvements within 6–8 weeks, since collagen turnover occurs more quickly than cellular repair."
    },
    {
        q: "What is GlowStack?",
        a: "GlowStack combines Protandim® Nrf2 with TrueScience® Liquid Collagen to support skin elasticity, joint comfort, hydration, bone density, and recovery. It is clinically shown to support visible skin and joint improvements within 6–8 weeks."
    },
    {
        q: "Which product should I start with?",
        a: "If choosing only one → Protandim Nrf2. For skin, hair, joint, collagen support, or age 40+ → GlowStack."
    },
    {
        q: "Can I take these with my current supplements?",
        a: "Yes — these are nutrigenomic, plant-based products designed to support your body’s natural cellular pathways. They are generally very well tolerated, and most people do not experience side effects. If you have specific concerns, feel free to discuss them with your healthcare provider. All ingredients are plant-based and vegan."
    },
    {
        q: "Are these treatments covered by insurance?",
        a: "No — cellular activation products are wellness supplements and are not insurance-covered."
    },
    {
        q: "Is there a money-back guarantee?",
        a: "Yes — all LifeVantage orders include a 30-day money-back guarantee."
    },
    {
        q: "Can I use these with NFPM?",
        a: "Yes. Many patients use cellular activation to support inflammation reduction, energy, recovery, and overall wellness alongside their NFPM program for faster, deeper results."
    },
    {
        q: "How do subscriptions work?",
        a: "Subscribe & Save gives 10% off and can be canceled anytime."
    },
    {
        q: "What if I’m still not sure what I need?",
        a: "You can submit your information on the products page, and I will personally build a recommendation and a direct checkout link for you."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight text-center mb-12">
            Frequently Asked Questions
        </h2>
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b-slate-100 last:border-0 px-2 hover:bg-slate-50/50 transition-colors rounded-lg">
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 py-6 hover:text-teal-600 hover:no-underline transition-colors">
                    {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-6 pr-4 font-light">
                    {faq.a}
                </AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
        </div>
      </div>
    </section>
  );
}
