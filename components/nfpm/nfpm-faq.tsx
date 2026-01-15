"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What does NFPM feel like?",
    answer: "Most people feel gentle pulses, tingling, or warmth. It should never feel sharp or painful. Many patients even fall asleep during treatment because it can be deeply relaxing. Some patients even choose to work at their desk during treatment.",
  },
  {
    question: "How soon will I notice results?",
    answer: "Some people notice improvements after a few sessions. Most begin experiencing meaningful changes during the 8-week program as mobility increases and pain decreases.",
  },
  {
    question: "Is NFPM safe?",
    answer: "Yes. NFPM uses FDA-cleared electroanalgesia. It's non-invasive, drug-free, and safe for a wide range of patients. A provider will review your medical history to ensure there are no contraindications.",
  },
  {
    question: "Is NFPM covered by insurance?",
    answer: "Yes — NFPM is covered by Medicare and many PPO insurance plans. Cash-pay options are also available.",
  },
  {
    question: "Can I continue my current treatments?",
    answer: "Yes. NFPM can typically complement physical therapy, medications, or other treatments. Your provider will coordinate care safely.",
  },
  {
    question: "How long do appointments take?",
    answer: "Each NFPM session lasts up to 60 minutes (a little longer if receiving IV therapy). You'll receive two treatments per week for 8 weeks — 16 sessions total. If opting for IV hydration (recommended for most patients), every other session will include IV hydration.",
  },
  {
    question: "Do I need a referral?",
    answer: "Before starting treatment, we will verify your insurance benefits to confirm whether a referral is required for coverage. If your plan does require one, we will walk you step-by-step through how to request it from your provider. We also work with partner providers who may be able to issue a referral after a telehealth consultation, when appropriate.",
  },
  {
    question: "What conditions does NFPM help?",
    answer: "NFPM commonly helps: Knee pain, Back pain, Neuropathy, Sciatica, Arthritis, Muscle tightness, Post-surgical pain, Slow-healing wounds …and more. If you don't see your condition listed, feel free to message me to see if NFPM may help.",
  },
  {
    question: "What should I expect after a session?",
    answer: "Most patients feel relaxed afterward. Some may experience temporary soreness or increased circulation. Hydration and light movement are encouraged to support recovery.",
  },
  {
    question: "How long do results last?",
    answer: "Results vary and can last three months to over a year. Many patients experience sustained improvement due to reduced inflammation, improved circulation, and neuromuscular retraining. Maintenance may include movement, hydration, and/or cellular support.",
  },
  {
    question: "Why haven't I heard of NFPM before?",
    answer: (
      <>
        NFPM has been around for many years, but several factors kept it from becoming widely known:
        <br /><br />
        <strong>1. It doesn't involve surgeries or prescriptions.</strong> Because NFPM is non-invasive and drug-free, it doesn't fall into the traditional &quot;procedure-first&quot; model used by many pain clinics.
        <br /><br />
        <strong>2. Twice-weekly clinic visits used to make it hard to access.</strong> Before in-home care became available, many patients with chronic pain or mobility issues struggled to attend treatments consistently.
        <br /><br />
        <strong>3. NFPM focuses on healing, not temporary symptom-masking.</strong> Treatments that don't involve procedures or ongoing prescriptions often receive less mainstream attention.
        <br /><br />
        <strong>4. Most patients don't learn about NFPM until they've tried everything else.</strong> Many of my patients discover NFPM only after years of injections, medications, PT, and procedures that didn't bring lasting relief. As in-home NFPM expands, more people are finally getting access to this evidence-based, FDA-cleared option.
      </>
    ),
  },
]

export function NFPMFAQ() {
  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center tracking-tight">
            Frequently Asked <span className="text-teal-600">Questions</span>
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border text-slate-700 border-[#E2E8E8] rounded-2xl px-6 shadow-sm hover:shadow-md transition-all [&[data-state=open]]:border-teal-200 [&[data-state=open]]:shadow-lg"
              >
                <AccordionTrigger className="text-left font-medium text-lg text-slate-900 py-6 hover:no-underline hover:text-teal-700 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base md:text-lg leading-relaxed pb-6">
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
