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
    question: "What is Electroanalgesia (EA)?",
    answer: "Electroanalgesia is a gentle treatment that uses safe, controlled electrical pulses to help calm nerves, reduce pain, and relax the body. These pulses are not harmful; they help the nervous system reset and release natural feel-good chemicals.",
  },
  {
    question: "How does it help with pain?",
    answer: (
      <>
        EA supports pain relief in several ways:
        <ol className="list-decimal pl-6 mt-3 space-y-4">
          <li>
            <strong>Calms overactive nerves through sustained depolarization</strong>
            <p className="mt-1">Depolarization reduces the nerve&apos;s ability to continuously send pain signals to the brain. This helps interrupt the chronic pain and inflammation cycle often seen in long-standing conditions. When nerves have been irritated for extended periods, they may continue signaling pain even when no active injury is present.</p>
          </li>
          <li>
            <strong>Boosts the body&apos;s natural pain relievers</strong>
            <p className="mt-1">During treatment, the body releases:</p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Endorphins (natural &quot;feel-good&quot; chemicals)</li>
              <li>Enkephalins and dynorphins (built-in pain relievers)</li>
              <li>GABA (promotes relaxation)</li>
            </ul>
            <p className="mt-1">Many patients report feeling lighter, calmer, or less tense afterward.</p>
          </li>
          <li>
            <strong>Increases local blood flow</strong>
            <p className="mt-1">Improved circulation brings oxygen and nutrients to affected areas while helping clear inflammatory byproducts.</p>
          </li>
          <li>
            <strong>Supports healthier muscle movement</strong>
            <p className="mt-1">Certain settings can gently activate muscles, helping prevent stiffness and weakness.</p>
          </li>
        </ol>
      </>
    ),
  },
  {
    question: "Is it safe?",
    answer: "Yes. The device is FDA-cleared and safe for most people. Your clinician will review your health history to ensure it's appropriate for you. EA should not be used over open wounds, certain implanted devices, or during pregnancy unless specifically approved.",
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
    answer: (
      <>
        Patients often use electroanalgesia for:
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>Chronic pain</li>
          <li>Joint pain</li>
          <li>Nerve pain</li>
          <li>Muscle tension</li>
          <li>Post-surgical or injury-related pain</li>
          <li>Conditions involving inflammation or hypersensitivity</li>
        </ul>
        <p className="mt-3">Your clinician will select the appropriate settings based on your condition.</p>
      </>
    ),
  },
  {
    question: "What will I feel after?",
    answer: (
      <>
        Many patients report:
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>Less pain</li>
          <li>Greater relaxation</li>
          <li>Looser muscles</li>
          <li>Improved movement</li>
          <li>A sense of calm</li>
        </ul>
        <p className="mt-3">Relief may be immediate or may build gradually over multiple sessions.</p>
        <p className="mt-3">In some cases, patients experience a brief return of symptoms a few days later, sometimes referred to as &quot;relearning of pain signals.&quot; This can occur as the brain recalibrates after a long-standing pain pattern is interrupted. While uncommon, it is a known part of the healing process and typically resolves as the body adjusts.</p>
      </>
    ),
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
