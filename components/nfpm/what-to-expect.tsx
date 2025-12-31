export function WhatToExpect() {
  const sensations = ["Gentle", "Warm", "Tingling", "Never painful"]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-heading text-primary text-center">
            What to Expect
          </h2>
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              During treatment, you&apos;ll relax in a comfortable seated or reclined position while high-pulse electrical currents stimulate pain pathways, muscles, and supporting tissues.
            </p>
            <div>
              <p className="font-semibold mb-4 text-xl">Most people describe the sensation as:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {sensations.map((sensation, index) => (
                  <div key={index} className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all">
                    <p className="font-semibold text-foreground text-lg">{sensation}</p>
                  </div>
                ))}
              </div>
            </div>
            <p>
              Before and after each session, we assess your pain, mobility, and overall progress.
            </p>
            <p>
              As part of your care plan, IV hydration is often included every other treatment session to support hydration, circulation, and the body&apos;s healing response.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
