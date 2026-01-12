import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Activity, ShieldCheck, HeartPulse, Zap } from "lucide-react";

export function NFPMPreview() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-black via-neutral-900 to-teal-950 relative overflow-hidden">
      {/* Background Decor - Teal Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-800/10 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column: Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-950/50 border border-teal-900 text-teal-400 rounded-full text-sm font-bold tracking-wide uppercase shadow-sm">
              <Zap className="w-4 h-4 fill-current" />
              <span>Compassionate Care</span>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
                Neurofunctional Pain <br className="hidden lg:block"/> Management <span className="text-teal-500">(NFPM)</span>
              </h2>
              <p className="text-lg md:text-xl font-medium text-neutral-400">
                In-home, non-invasive pain treatment covered by Medicare and most major PPOs.
              </p>
            </div>
            <p className="text-neutral-400 leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0 text-base md:text-lg">
              NFPM uses FDA-cleared electroanalgesia to calm overactive pain pathways, promote circulation, and support your body's natural ability to heal. It is safe, drug-free, and ideal for chronic knee, back, and nerve-related pain — especially when other treatments haven't helped.
            </p>
          </div>

          {/* Right Column: List and Button */}
          <div className="flex flex-col gap-10">
            <ul className="space-y-6">
              {[
                { 
                  icon: ShieldCheck, 
                  label: "Non-invasive", 
                  desc: "Gentle therapy with no needles, no surgery, and zero downtime." 
                },
                { 
                  icon: Activity, 
                  label: "Medicare Accepted", 
                  desc: "Treatments are covered by Medicare and most major PPO insurance plans." 
                },
                { 
                  icon: HeartPulse, 
                  label: "Nurse Provided", 
                  desc: "Professional care delivered in your home by Registered Nurses." 
                }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-5 group/item bg-black/40 rounded-2xl p-4 border border-white/5 hover:border-teal-500/30 hover:bg-black/60 transition-colors">
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-teal-900/20 rounded-xl border border-teal-800/30 text-teal-400 transition-all duration-300 group-hover/item:bg-teal-600 group-hover/item:text-white group-hover/item:shadow-lg shadow-sm">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1 pt-1">
                    <h4 className="font-bold text-white text-lg">{item.label}</h4>
                    <p className="text-neutral-500 font-sans leading-relaxed text-sm group-hover/item:text-neutral-400 transition-colors">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Button asChild className="h-12 sm:h-14 px-8 sm:px-10 text-base sm:text-lg font-bold shadow-xl shadow-teal-900/20 w-fit mx-auto lg:mx-0 bg-[#0F8B8D] hover:bg-[#0d7a7b] text-white rounded-full transition-all hover:scale-105">
              <Link href="/nfpm">Learn More About NFPM</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Nrf2Preview() {
  const benefits = [
    { label: "Reduce Inflammation", desc: "Lower oxidative stress to support joint and muscle health.", icon: Zap },
    { label: "Boost Energy", desc: "Enhance mitochondrial function for better daily vitality.", icon: Activity },
    { label: "Healthy Aging", desc: "Support your body's natural cellular repair processes.", icon: ShieldCheck },
    { label: "Faster Recovery", desc: "Improve recovery times from physical activity and stress.", icon: HeartPulse },
  ];

  return (
    <section className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-50/50 to-transparent z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Content */}
          <div className="space-y-8 lg:order-1 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-100/50 text-teal-800 rounded-full text-sm font-bold tracking-wide uppercase mx-auto lg:mx-0">
                 <Zap className="w-4 h-4" /> Daily Wellness
              </div>
              <h2 className="text-3xl md:text-5xl text-slate-900 font-bold tracking-tight leading-tight">
                Cellular Activation & <br />
                <span className="text-teal-600">Wellness Support</span>
              </h2>

              {/* Mobile Image (Visible only on mobile, below title) */}
              <div className="lg:hidden relative w-full max-w-[350px] mx-auto my-6">
                 <div className="absolute inset-0 bg-teal-200/20 rounded-full blur-[40px] transform scale-90" />
                 <Image 
                    src="/assets/images/wellness-concept.png"
                    alt="Wellness and Relaxation Concept"
                    width={638}
                    height={350}
                    className="w-full h-auto object-contain drop-shadow-xl relative z-10"
                />
              </div>

              <p className="text-slate-600 text-lg leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0">
                Daily cellular activation products like Nrf2, GlowStack, and Dual Synergizer support inflammation reduction, energy, recovery, and healthy aging. An excellent way to start supporting your health immediately.
              </p>
            </div>

            <ul className="grid grid-cols-2 gap-4 sm:gap-6 text-left">
              {benefits.map((item, idx) => (
                <li key={idx} className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 text-teal-600">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-tight">{item.label}</h4>
                    <p className="text-slate-500 text-xs sm:text-sm leading-tight font-sans hidden sm:block">{item.desc}</p>
                    <p className="text-slate-500 text-xs leading-tight font-sans sm:hidden">{item.desc.split('.')[0]}.</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="pt-4">
               <ShimmerButton className="h-14 px-8 text-lg font-bold shadow-xl shadow-teal-900/10 w-full sm:w-fit mx-auto lg:mx-0" background="#0F8B8D" shimmerColor="#ffffff">
                  <Link href="/nrf2">Learn About Nrf2 & Cellular Activation</Link>
               </ShimmerButton>
            </div>
          </div>

          {/* Right Column: Image (Desktop Only) */}
          <div className="hidden lg:flex relative lg:order-2 justify-center">
             <div className="relative w-full max-w-[500px]">
                {/* Glow behind image */}
                <div className="absolute inset-0 bg-teal-200/20 rounded-full blur-[60px] transform scale-90" />
                
                <Image 
                    src="/assets/images/wellness-concept.png"
                    alt="Wellness and Relaxation Concept"
                    width={638}
                    height={350}
                    className="w-full h-auto object-contain drop-shadow-2xl relative z-10 hover:scale-105 transition-transform duration-700"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
