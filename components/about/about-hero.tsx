import Image from "next/image"

export function AboutHero() {
  return (
    <section className="py-20 md:py-32 bg-[#F6FAFA]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image - First on mobile, right on desktop */}
            <div className="relative flex justify-center order-1 lg:order-2 lg:justify-end">
              <div className="relative w-[225px] h-[300px] md:w-[300px] md:h-[400px] lg:w-full lg:max-w-md lg:aspect-[3/4] lg:h-auto rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/assets/images/genis-wiastlevel-prof.jpeg"
                  alt="Genis Matel, RN - Founder of Relief Point Therapy"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 225px, (max-width: 1024px) 300px, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Text - Second on mobile, left on desktop */}
            <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-heading text-foreground/70">
                Meet Your Nurse
              </h2>
              <h1 className="text-4xl md:text-5xl font-heading text-primary relative inline-block">
                Genis Matel, RN
                <svg
                  className="absolute -bottom-2 left-0 w-full h-4 text-primary"
                  viewBox="0 0 400 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M5,15 Q50,5 100,12 T200,10 T300,8 T380,12"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
                Nurse-led care rooted in experience, compassion, and healing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
