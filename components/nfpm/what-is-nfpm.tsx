import { Home, Heart, Shield, User } from "lucide-react"

export function WhatIsNFPM() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading text-primary">
              What Is NFPM?
            </h2>
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                NFPM uses FDA-cleared electroanalgesia and neuromodulation to calm overactive pain pathways, improve circulation, reduce inflammation, and support the body&apos;s natural healing. It is non-invasive, drug-free, and performed in your home by a registered nurse.
              </p>
              <p>
                NFPM is ideal for people who want long-term relief without relying on medications, injections, or repeated procedures.
              </p>
            </div>
          </div>

          {/* Right Column: Icons */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col items-center text-center space-y-4 p-8 bg-white rounded-lg border border-border shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="p-4 bg-primary/10 rounded-full">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg">FDA-cleared</h3>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-8 bg-white rounded-lg border border-border shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="p-4 bg-primary/10 rounded-full">
                <Home className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg">In-home</h3>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-8 bg-white rounded-lg border border-border shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="p-4 bg-primary/10 rounded-full">
                <Heart className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg">Non-invasive</h3>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-8 bg-white rounded-lg border border-border shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="p-4 bg-primary/10 rounded-full">
                <User className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg">Nurse-led</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
