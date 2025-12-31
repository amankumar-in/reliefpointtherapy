import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function MeetNurse() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Column: Text */}
          <div className="flex-1 space-y-6">
             <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-2">
                Meet Your Nurse
             </div>
            <h2 className="text-3xl md:text-4xl font-heading text-primary">
               Genis Matel, RN
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed font-sans">
              I'm Genis Matel, a registered nurse and the founder of Relief Point Therapy. After navigating five knee surgeries of my own, I became passionate about helping others find pain relief that goes deeper than temporary fixes.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed font-sans">
               Today, I bring nurse-led, science-backed, in-home care to the East Bay to help you restore comfort, mobility, and confidence in your body again.
            </p>
            <div className="pt-4">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-muted group">
                <Link href="/about">
                  Learn More About My Story
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="hidden lg:flex flex-1 w-full justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="relative w-full h-full rounded-full border-4 border-primary overflow-hidden">
                <Image
                  src="/assets/images/genis-headshot-transparent-bg.png"
                  alt="Genis Matel, RN - Relief Point Therapy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
