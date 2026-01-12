import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope } from "lucide-react";

export function MeetNurse() {
  return (
    <section className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-50/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-12 left-12 w-64 h-64 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
            
            {/* Mobile "Social Profile" Header */}
            <div className="flex items-center gap-5 w-full lg:hidden border-b border-slate-200 pb-8 mb-4">
               <div className="relative w-20 h-20 shrink-0">
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-teal-500 shadow-lg">
                    <Image
                      src="/assets/images/genis-headshot-transparent-bg.png"
                      alt="Genis Matel"
                      fill
                      className="object-cover bg-teal-50"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-teal-600 text-white p-1 rounded-full border-2 border-white">
                     <Stethoscope className="w-3 h-3" />
                  </div>
               </div>
               <div>
                  <div className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-1">Meet Your Nurse</div>
                  <h2 className="text-2xl font-bold text-slate-900 leading-none">Genis Matel, RN</h2>
                  <p className="text-slate-500 text-sm mt-1">Founder, Relief Point Therapy</p>
               </div>
            </div>

            {/* Left Column: Text (Desktop & Mobile Content) */}
            <div className="flex-1 space-y-6">
               {/* Desktop Only header */}
               <div className="hidden lg:block space-y-4 mb-2">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-100/50 text-teal-800 rounded-full text-sm font-bold tracking-wide uppercase">
                     <Stethoscope className="w-4 h-4" /> Meet Your Nurse
                 </div>
                 <h2 className="text-4xl text-slate-900 font-bold tracking-tight">
                    Genis Matel, RN
                 </h2>
               </div>

              <p className="text-lg text-slate-600 leading-relaxed font-sans">
                I'm a registered nurse and the founder of Relief Point Therapy. After navigating five knee surgeries of my own, I became passionate about helping others find pain relief that goes deeper than temporary fixes.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-sans">
                 Today, I bring nurse-led, science-backed, in-home care to the East Bay to help you restore comfort, mobility, and confidence in your body again.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-slate-900 text-white hover:bg-slate-800 font-bold rounded-full px-8 shadow-lg hover:shadow-xl transition-all">
                  <Link href="/about">
                    Read My Full Story
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column: Image (Desktop Only) */}
            <div className="hidden lg:flex flex-1 w-full justify-end">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-teal-200/20 rounded-full blur-3xl transform scale-90" />
                <div className="relative w-full h-full rounded-full border-4 border-white shadow-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                  <Image
                    src="/assets/images/genis-headshot-transparent-bg.png"
                    alt="Genis Matel, RN - Relief Point Therapy"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                {/* Floating Badge */}
                 <div className="absolute bottom-4 -left-4 bg-white px-4 py-2 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-bounce-slow">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-xs text-slate-400 font-bold uppercase">Experience</p>
                       <p className="text-sm font-bold text-slate-900">Registered Nurse</p>
                    </div>
                 </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
