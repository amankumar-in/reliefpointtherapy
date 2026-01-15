import { GraduationCap, Briefcase, Award, Heart, Stethoscope, BookOpen, Users } from "lucide-react"

const credentials = [
  {
    icon: GraduationCap,
    label: "License",
    text: "Registered Nurse, California — #95206892",
    highlight: true
  },
  {
    icon: Briefcase,
    label: "Role",
    text: "Founder, Relief Point Therapy",
    highlight: true
  },
  {
    icon: Award,
    label: "Certification",
    text: "Relatyv-certified NFPM Provider",
  },
  {
    icon: Stethoscope,
    label: "Experience",
    text: "Post-operative nursing experience",
  },
  {
    icon: BookOpen,
    label: "Training",
    text: "Specialized training in electroanalgesia + neuromodulation",
  },
  {
    icon: Users,
    label: "Focus",
    text: "Chronic pain management & holistic support",
  },
  {
    icon: Heart,
    label: "Wellness",
    text: "Provider of cellular activation programs (LifeVantage)",
  },
]

export function Credentials() {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden text-left">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left: Section Header */}
          <div className="lg:col-span-4 space-y-8">
             <div>
                <span className="text-teal-500 font-bold tracking-widest uppercase text-sm mb-2 block">Background</span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Clinical<br/>Excellence
                </h2>
             </div>
             <p className="text-slate-400 text-lg leading-relaxed">
                Relief Point Therapy is built on a foundation of rigorous medical training and specialized certifications.
             </p>
             <div className="w-12 h-1 bg-teal-600 rounded-full" />
          </div>

          {/* Right: The List (No Cards) */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-slate-800 border-t border-b border-slate-800">
                {credentials.map((item, idx) => {
                    const Icon = item.icon
                    return (
                        <div key={idx} className="py-6 md:py-8 flex gap-6 md:gap-10 items-start group">
                            {/* Icon */}
                            <div className={`mt-1 ${item.highlight ? 'text-teal-400' : 'text-slate-500 group-hover:text-teal-400'} transition-colors duration-300`}>
                                <Icon className="h-6 w-6" />
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8">
                                <span className="text-sm font-semibold uppercase tracking-wider text-slate-500 pt-1">
                                    {item.label}
                                </span>
                                <span className={`md:col-span-2 text-lg md:text-xl font-medium leading-relaxed ${item.highlight ? 'text-white' : 'text-slate-300 group-hover:text-white'} transition-colors`}>
                                    {item.text}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
