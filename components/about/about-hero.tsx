import Image from "next/image"

export function AboutHero() {
  return (
    <section className="py-20 md:py-32 bg-[#F6FAFA]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image - First on mobile, right on desktop */}
            <div className="relative flex justify-center order-1 lg:order-2 lg:justify-end">
              <div className="relative w-full max-w-md flex justify-center">
                <Image
                  src="/assets/images/genis-headshot.png"
                  alt="Genis Matel, RN - Founder of Relief Point Therapy"
                  width={400}
                  height={500}
                  className="object-contain drop-shadow-2xl rounded-lg mx-auto"
                  priority
                />
              </div>
            </div>

            {/* Text - Second on mobile, left on desktop */}
            <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl font-heading text-primary">
                Meet Your Nurse
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
