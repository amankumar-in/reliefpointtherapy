import Image from "next/image"
import { Quote } from "lucide-react"

export function MyStoryNrf2() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
         <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            
            <div className="relative shrink-0">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10">
                    <Image 
                        src="/assets/images/genis-headshot.png" 
                        alt="Genis Matel, RN" 
                        fill 
                        className="object-cover"
                    />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-teal-600 text-white p-4 rounded-full shadow-lg z-20">
                    <Quote className="h-6 w-6" />
                </div>
                <div className="absolute top-0 -left-4 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl -z-10" />
            </div>

            <div className="flex-1 space-y-6 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                    Why I Recommend <span className="text-teal-600">Cellular Activation</span>
                </h2>
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed font-light">
                    <p>
                        "As a nurse specializing in pain management, I've seen how chronic inflammation holds the body back from healing. While treatments like NFPM address the nerves, we also need to support the cells themselves."
                    </p>
                    <p>
                        "I personally use these products daily. I've seen them help patients—and my own family—recover faster, have more energy, and just feel <em>better</em>. It's the perfect complement to the clinical care we provide."
                    </p>
                </div>
                <div>
                    <div className="text-slate-900 font-bold text-lg">Genis Matel, RN</div>
                    <div className="text-slate-500">Founder, Relief Point Therapy</div>
                </div>
            </div>

         </div>
      </div>
    </section>
  )
}
