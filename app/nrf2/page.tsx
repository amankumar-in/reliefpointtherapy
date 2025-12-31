import { Nrf2Hero } from "@/components/nrf2/nrf2-hero"
import { WhyCellularActivation } from "@/components/nrf2/why-cellular-activation"
import { ABCNewsFeature } from "@/components/nrf2/abc-news-feature"
import { MyStoryNrf2 } from "@/components/nrf2/my-story-nrf2"
import { HowToChoosePath } from "@/components/nrf2/how-to-choose-path"
import { ProductCards } from "@/components/nrf2/product-cards"
import { CostSavingTips } from "@/components/nrf2/cost-saving-tips"
import { Nrf2FAQ } from "@/components/nrf2/nrf2-faq"
import { Nrf2Testimonials } from "@/components/nrf2/nrf2-testimonials"
import { PersonalizedPlan } from "@/components/nrf2/personalized-plan"
import { Nrf2FinalCTA } from "@/components/nrf2/nrf2-final-cta"
import { NFPMTeaser } from "@/components/nrf2/nfpm-teaser"

export default function Nrf2Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nrf2Hero />
      <WhyCellularActivation />
      <ABCNewsFeature />
      <MyStoryNrf2 />
      <HowToChoosePath />
      <ProductCards />
      <CostSavingTips />
      <Nrf2FAQ />
      <Nrf2Testimonials />
      <PersonalizedPlan />
      <Nrf2FinalCTA />
      <NFPMTeaser />
    </div>
  )
}
