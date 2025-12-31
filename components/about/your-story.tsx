import Link from "next/link"
import { Button } from "@/components/ui/button"

export function YourStory() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-heading text-primary">
            My Journey to Relief Point Therapy
          </h2>
          
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              Hi, I&apos;m Genis — a registered nurse, chronic pain survivor, and the founder of Relief Point Therapy.
            </p>
            
            <p>
              My journey into this field began long before I ever held a nursing license. After <strong>five knee surgeries</strong> and stage-4 arthritis, I learned firsthand what it feels like to live with pain every single day — the fear, the frustration, the constant search for something that actually helps.
            </p>
            
            <p>
              Years later, I spent several years working in <strong>post-operative care</strong>, and I cared for dozens of patients who were back again for their second, third, or even fourth pain procedure. They were often struggling with side effects from medications, complications from injections, or temporary relief that never lasted.
            </p>
            
            <p className="font-semibold text-primary text-xl">
              I started to ask myself: Why aren&apos;t we offering people options that help the body heal — not just cope?
            </p>
            
            <p>
              When I discovered NFPM and cellular activation, everything changed. I saw patients who had been dismissed or overlooked finally get real relief. I watched mobility return. I saw progress that felt meaningful — not just temporary.
            </p>
            
            <p>
              Most of the people who find me have &quot;tried everything.&quot;
            </p>
            
            <p className="text-xl font-semibold text-primary">
              If that&apos;s you, you are not alone — and you are not out of options.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded">
              <Link href="/nfpm">Explore NFPM</Link>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-muted rounded">
              <Link href="/nrf2">Start My Cellular Healing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
