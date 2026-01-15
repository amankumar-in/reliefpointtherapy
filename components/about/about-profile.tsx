import Image from "next/image"
import Link from "next/link"
import { AuroraText } from "@/components/ui/aurora-text"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { Quote, Sparkles, ArrowRight } from "lucide-react"

export function AboutProfile() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-slate-950 border-b border-slate-900">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left Column: Profile Card (Sticky) */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 order-1">
                <div className="relative group">
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-tr from-teal-500 to-indigo-500 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-700 rounded-3xl" />
                    
                    {/* Image Container */}
                    <div className="relative w-[250px] h-[250px] mx-auto lg:w-full lg:h-auto lg:mx-0 lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-800">
                        <Image
                            src="/assets/images/genis-wiastlevel-prof.jpeg"
                            alt="Genis Matel, RN - Founder of Relief Point Therapy"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 500px"
                            priority
                        />
                        {/* Overlay Gradient for Text Readability at bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                        
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                            <div className="w-12 h-1 bg-teal-500 rounded-full mb-4" />
                            <h2 className="text-3xl font-bold leading-none mb-1">Genis Matel, RN</h2>
                            <p className="text-teal-400 font-medium tracking-wide uppercase text-sm">Founder & Provider</p>
                        </div>
                    </div>
                </div>

                {/* Mobile-only Intro Text (Show here on mobile, hide on desktop) */}
                <div className="mt-8 lg:hidden text-center">
                     <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-teal-400 text-sm font-bold uppercase tracking-wider mb-4">
                        Meet Your Nurse
                    </span>
                    <h1 className="text-4xl font-bold text-white mb-4">
                        <AuroraText className="font-bold">My Journey</AuroraText>
                    </h1>
                </div>
            </div>

            {/* Right Column: Narrative Content */}
            <div className="lg:col-span-7 order-2 space-y-10">
                
                {/* Desktop Header */}
                <div className="hidden lg:block space-y-6 mb-12">
                     <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-teal-400 text-sm font-bold uppercase tracking-wider">
                        Meet Your Nurse
                    </span>
                    <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-none">
                        Driven by <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-500">Experience.</span>
                    </h1>
                </div>

                {/* Narrative Text Block */}
                <div className="prose prose-lg prose-invert text-slate-300 leading-relaxed font-light">
                    <p className="text-2xl text-white font-medium mb-8 leading-snug">
                        Hi, I&apos;m Genis — a registered nurse, chronic pain survivor, and the founder of Relief Point Therapy.
                    </p>

                    <p>
                        My journey into this field began long before I ever held a nursing license. After <strong>five knee surgeries</strong> and stage-4 arthritis, I learned firsthand what it feels like to live with pain every single day — the fear, the frustration, the constant search for something that actually helps.
                    </p>
                    
                    <p>
                        Years later, I spent several years working in <span className="text-white font-semibold">post-operative care</span>, and I cared for dozens of patients who were back again for their second, third, or even fourth pain procedure. They were often struggling with side effects from medications, complications from injections, or temporary relief that never lasted.
                    </p>

                     {/* Highlight Quote Box */}
                    <div className="my-10 pl-6 border-l-4 border-teal-500 bg-slate-900/50 p-6 rounded-r-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Quote size={40} className="text-teal-500" />
                        </div>
                        <p className="text-xl font-medium text-white italic relative z-10 my-0">
                            "I started to ask myself: Why aren&apos;t we offering people options that help the body heal Not Just Cope?"
                        </p>
                    </div>

                    <p>
                        When I discovered NFPM and cellular activation, everything changed. I saw patients who had been dismissed or overlooked finally get real relief. I watched mobility return. I saw progress that felt meaningful — not just temporary.
                    </p>

                    <p className="text-lg">
                        Most of the people who find me have "tried everything." <br/>
                        <span className="text-teal-400 font-semibold text-xl block mt-2">
                            If that&apos;s you, you are not alone — and you are not out of options.
                        </span>
                    </p>
                </div>

                {/* Call to Actions */}
                <div className="flex flex-row gap-4 pt-4 border-t border-slate-900/50 mt-8">
                     <Link href="/nrf2" className="flex-1">
                        <ShimmerButton className="h-12 sm:h-14 px-4 sm:px-8 w-full font-bold text-sm sm:text-base" background="#0F8B8D">
                           Start Cellular Healing
                        </ShimmerButton>
                     </Link>
                     <Link href="/nfpm" className="flex-1">
                        <button className="h-12 sm:h-14 px-4 sm:px-8 w-full rounded-full border border-slate-700 bg-slate-900 text-slate-300 hover:text-white hover:border-teal-500/50 hover:bg-slate-800 transition-all font-semibold flex items-center justify-center text-sm sm:text-base">
                            Explore NFPM
                        </button>
                    </Link>
                </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
