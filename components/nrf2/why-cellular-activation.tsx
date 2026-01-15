import { Zap, Shield, Activity, Clock } from "lucide-react"

export function WhyCellularActivation() {
  const benefits = [
    {
      icon: Shield,
      title: "Reduce Oxidative Stress",
      desc: "Lowers oxidative stress by 40% in just 30 days (verified by peer-reviewed studies)."
    },
    {
        icon: Zap,
        title: "Lower Inflammation",
        desc: "Combats the root cause of many chronic health issues by regulating inflammatory pathways."
    },
    {
        icon: Activity,
        title: "Boost Mitochondria",
        desc: "Increases production of mitochondria for better energy and cellular repair."
    },
    {
        icon: Clock,
        title: "Support Healthy Aging",
        desc: "Keeps your cells functioning like they did when you were younger."
    }
  ]

  return (
    <section id="science" className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
       {/* Background */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px]" />
       </div>

       <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                    Why <span className="text-teal-400">Cellular Activation?</span>
                </h2>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                    Most supplements just provide nutrients. Activation flips a switch in your DNA to help your body produce its own powerful enzymes.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {benefits.map((item, i) => (
                    <div key={i} className="flex gap-5 group">
                        <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                            <item.icon className="h-6 w-6" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
       </div>
    </section>
  )
}
