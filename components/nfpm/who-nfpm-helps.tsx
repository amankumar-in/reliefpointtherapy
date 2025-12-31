import { 
  Bone, 
  Zap, 
  Heart, 
  Activity, 
  Stethoscope, 
  User, 
  Pill, 
  Bandage,
  AlertCircle
} from "lucide-react"

export function WhoNFPMHelps() {
  const conditions = [
    { icon: Bone, text: "Chronic knee, back, neck, or shoulder pain" },
    { icon: Zap, text: "Neuropathy" },
    { icon: Activity, text: "Sciatica" },
    { icon: Bone, text: "Hip or joint pain" },
    { icon: Stethoscope, text: "Post-surgical pain" },
    { icon: Heart, text: "Arthritis" },
    { icon: Activity, text: "Muscle tension or spasms" },
    { icon: User, text: "Mobility limitations" },
    { icon: Pill, text: "Pain that returns after injections, PT, or medications" },
    { icon: Bandage, text: "Slow-healing wounds (i.e. pressure or diabetic ulcers)" },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading text-primary">
              Who NFPM Helps
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              NFPM is ideal for people with:
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 md:gap-6">
            {conditions.map((condition, index) => {
              const Icon = condition.icon
              return (
                <div key={index} className="flex items-center gap-3 md:items-start md:gap-4 p-2 md:p-6 md:bg-white md:rounded-lg md:border md:border-border md:shadow-sm md:hover:shadow-md transition-all">
                  <div className="flex-shrink-0 p-1.5 md:p-3 bg-primary/10 rounded-lg">
                    <Icon className="h-4 w-4 md:h-6 md:w-6 text-primary" />
                  </div>
                  <span className="text-foreground/80 flex-1 text-sm md:text-lg leading-relaxed">{condition.text}</span>
                </div>
              )
            })}
          </div>

          <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6 flex items-start gap-4">
            <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-foreground/80 text-lg leading-relaxed">
              <strong className="text-primary">And many more</strong> — if you don&apos;t see your condition listed, feel free to message me to see if NFPM may help.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
