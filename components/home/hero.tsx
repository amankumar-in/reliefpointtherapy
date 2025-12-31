import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white h-[calc(100vh-80px)] min-h-[50vh] md:min-h-[75vh] flex items-center">
        {/* Soft Teal Gradient on Right Edge */}
        <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 h-full py-8 md:py-12 lg:py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-6 md:gap-8 lg:gap-20 h-full">
          {/* Left Column: Text */}
          <div className="flex-1 space-y-4 md:space-y-6 lg:space-y-8 text-center lg:text-left flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading text-foreground leading-[1.15]">
              Pain Relief That Helps You Heal — <span className="text-primary block mt-2">Not Just Cope</span>
            </h1>
            <p className="text-base md:text-base lg:text-xl text-foreground/80 max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed">
              Non-invasive, drug-free pain relief covered by Medicare, provided in the comfort of your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Button asChild size="lg" className="bg-primary hover:bg-secondary text-primary-foreground text-base md:text-lg h-12 px-8 shadow-md hover:shadow-lg transition-all">
                <Link href="/nfpm">Learn About NFPM</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-muted text-base md:text-lg h-12 px-8">
                <Link href="/nrf2">Start My Cellular Healing</Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Image Card */}
          <div className="flex-1 h-full w-full flex items-center justify-center lg:justify-end">
            {/* Teal card with 4:5 portrait ratio and rounded corners */}
            <div className="relative w-full max-w-xs md:max-w-md aspect-[4/5] bg-primary/50 rounded-lg overflow-hidden p-0">
              <Image
                src="/assets/images/genis-headshot-transparent-bg.png"
                alt="Genis Matel - Relief Point Therapy"
                fill
                className="object-contain object-bottom"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
