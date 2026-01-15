import Link from "next/link"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { ArrowRight, Activity, Sparkles, Heart, Check } from "lucide-react"

const paths = [
  {
    title: "Clinical Pain Relief",
    subtitle: "NFPM Treatment",
    description: "For moderate to severe chronic pain, neuropathy, and mobility issues. Covered by Medicare.",
    benefits: [
      "Severe Chronic Pain",
      "Neuropathy & Sciatica",
      "Post-Surgical Pain",
      "Mobility Issues"
    ],
    icon: Activity,
    link: "/nfpm",
    cta: "Explore Medical Treatment",
    color: "teal",
    bg: "bg-teal-50",
    border: "border-teal-100",
    text: "text-teal-700",
    iconBg: "bg-teal-100"
  },
  {
    title: "Daily Wellness",
    subtitle: "Protandim Nrf2",
    description: "The #1 foundational supplement for reducing oxidative stress, inflammation, and fatigue.",
    benefits: [
      "Inflammation Support",
      "Energy & Brain Fog",
      "Healthy Aging",
      "Daily Maintenance"
    ],
    icon: Sparkles,
    link: "/nrf2",
    cta: "View Nrf2 Options",
    color: "blue",
    bg: "bg-blue-50",
    border: "border-blue-100",
    text: "text-blue-700",
    iconBg: "bg-blue-100"
  },
  {
    title: "Beauty & Joints",
    subtitle: "GlowStack",
    description: "Liquid Collagen + Nrf2 for visible skin results, hair growth, and deep joint support.",
    benefits: [
      "Skin Elasticity & Glow",
      "Hair & Nail Growth",
      "Joint Mobility",
      "Structural Health"
    ],
    icon: Heart,
    link: "/nrf2#glowstack",
    cta: "View GlowStack",
    color: "indigo",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    text: "text-indigo-700",
    iconBg: "bg-indigo-100"
  },
]

export function ProductsStartHere() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-6 mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-bold uppercase tracking-wider mb-2">
                Start Here
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight max-w-2xl mx-auto">
              What Kind of Support Are You <span className="text-teal-600">Looking For?</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Choose the path that aligns with your current health goals.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {paths.map((path, index) => {
              const Icon = path.icon
              return (
                <div key={index} className={`group relative rounded-3xl border ${path.border} bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col`}>
                    {/* Hover Glow */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-${path.color}-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />
                    
                    <div className="relative z-10 flex flex-col h-full">
                        <div className={`w-14 h-14 rounded-2xl ${path.iconBg} ${path.text} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="h-7 w-7" />
                        </div>

                        <div className="mb-6">
                            <h4 className={`text-sm font-bold uppercase tracking-wider ${path.text} mb-2`}>{path.subtitle}</h4>
                            <h3 className="text-2xl font-bold text-slate-900">{path.title}</h3>
                        </div>

                        <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                            {path.description}
                        </p>

                        <div className="space-y-3 mb-8 flex-1">
                            {path.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                                    <div className={`shrink-0 w-5 h-5 rounded-full ${path.bg} flex items-center justify-center`}>
                                        <Check className={`h-3 w-3 ${path.text}`} />
                                    </div>
                                    {benefit}
                                </div>
                            ))}
                        </div>

                        <Link href={path.link} className="block mt-auto">
                            <ShimmerButton 
                                className="w-full h-auto min-h-12 py-3 px-3 text-sm font-bold shadow-md whitespace-normal leading-tight mx-auto" 
                                background={path.color === 'teal' ? '#0F8B8D' : path.color === 'blue' ? '#2563EB' : '#4F46E5'} 
                                shimmerColor="#ffffff" 
                                noShimmer={true}
                            >
                                <span className="text-center">{path.cta}</span> <ArrowRight className="ml-2 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                            </ShimmerButton>
                        </Link>
                    </div>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}
