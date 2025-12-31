import { GraduationCap, Briefcase, Award, Heart, Stethoscope, BookOpen, Users } from "lucide-react"

const credentials = [
  {
    icon: GraduationCap,
    text: "Registered Nurse, California — License #95206892",
  },
  {
    icon: Briefcase,
    text: "Founder, Relief Point Therapy",
  },
  {
    icon: Stethoscope,
    text: "Post-operative nursing experience",
  },
  {
    icon: Award,
    text: "Relatyv-certified NFPM Provider",
  },
  {
    icon: BookOpen,
    text: "Specialized training in electroanalgesia + neuromodulation",
  },
  {
    icon: Users,
    text: "Experienced in patient education, chronic pain management, and holistic support",
  },
  {
    icon: Heart,
    text: "Provider of cellular activation programs (LifeVantage)",
  },
]

export function Credentials() {
  return (
    <section className="py-20 md:py-32 bg-[#F6FAFA]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-heading text-primary text-center">
            Credentials & Background
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {credentials.map((credential, idx) => {
              const Icon = credential.icon
              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-6 bg-white border border-[#E2E8E8] rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-foreground/80 leading-relaxed pt-1">
                    {credential.text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
