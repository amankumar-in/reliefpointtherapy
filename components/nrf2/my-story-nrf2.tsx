import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function MyStoryNrf2() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading text-primary">
              In Case We Haven&apos;t Met Yet…
            </h2>
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                Hi, I&apos;m Genis Matel — a registered nurse and founder of Relief Point Therapy.
              </p>
              <p>
                Before I became a provider, I was a pain patient myself. After <strong>five knee surgeries</strong> and stage-4 arthritis, I saw how often traditional care focuses on masking pain rather than helping the body repair. Later, I worked in <strong>post-operative care</strong>, watching dozens of patients cycle through procedures and medications with limited relief.
              </p>
              <p>
                I became passionate about natural, science-backed solutions that genuinely help the body heal.
              </p>
              <p>
                A turning point for me was seeing a patient experience dramatic improvement after trying Nrf2 activation — and then seeing results in my own family. That&apos;s when I brought these products into my practice.
              </p>
              <p className="text-primary font-semibold italic">
                Your body already knows how to heal — sometimes it just needs the right support.
              </p>
            </div>
            <div className="pt-4">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-muted rounded">
                <Link href="/about">
                  Learn More About My Story
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative aspect-[3/4] w-full max-w-sm rounded-lg overflow-hidden shadow-lg ring-1 ring-border">
              <Image
                src="/assets/images/placeholder-image-portrait.jpeg"
                alt="Genis Matel, RN - Relief Point Therapy"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
