import { AboutHero } from "@/components/about/about-hero"
import { YourStory } from "@/components/about/your-story"
import { Credentials } from "@/components/about/credentials"
import { OurMission } from "@/components/about/our-mission"
import { WhatMakesDifferent } from "@/components/about/what-makes-different"
import { ServiceArea } from "@/components/about/service-area"
import { WhyIBelieve } from "@/components/about/why-i-believe"
import { AboutFinalCTA } from "@/components/about/about-final-cta"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero />
      <YourStory />
      <Credentials />
      <OurMission />
      <WhatMakesDifferent />
      <ServiceArea />
      <WhyIBelieve />
      <AboutFinalCTA />
    </div>
  )
}
