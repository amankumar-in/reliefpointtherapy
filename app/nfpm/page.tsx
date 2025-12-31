import { NFPMHero } from "@/components/nfpm/nfpm-hero"
import { WhatIsNFPM } from "@/components/nfpm/what-is-nfpm"
import { HowNFPMWorks } from "@/components/nfpm/how-nfpm-works"
import { WhoNFPMHelps } from "@/components/nfpm/who-nfpm-helps"
import { InsuranceCoverage } from "@/components/nfpm/insurance-coverage"
import { TreatmentProgram } from "@/components/nfpm/treatment-program"
import { WhyChooseNFPM } from "@/components/nfpm/why-choose-nfpm"
import { WhatToExpect } from "@/components/nfpm/what-to-expect"
import { NFPMFAQ } from "@/components/nfpm/nfpm-faq"
import { NFPMTestimonials } from "@/components/nfpm/nfpm-testimonials"
import { NFPMFinalCTA } from "@/components/nfpm/nfpm-final-cta"
import { SupportingProducts } from "@/components/nfpm/supporting-products"

export default function NFPMPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NFPMHero />
      <WhatIsNFPM />
      <HowNFPMWorks />
      <WhoNFPMHelps />
      <InsuranceCoverage />
      <TreatmentProgram />
      <WhyChooseNFPM />
      <WhatToExpect />
      <NFPMFAQ />
      <NFPMTestimonials />
      <NFPMFinalCTA />
      <SupportingProducts />
    </div>
  )
}
