import { Marquee } from "@/components/ui/marquee"
import { 
  Bone, 
  Zap, 
  Activity, 
  User, 
  Plus
} from "lucide-react"

export function WhoNFPMHelps() {
  const conditions = [
    "Chronic Knee Pain",
    "Lower Back Pain",
    "Neck & Shoulder Tension",
    "Peripheral Neuropathy",
    "Sciatica",
    "Hip & Joint Pain",
    "Post-Surgical Pain",
    "Arthritis",
    "Muscle Spasms",
    "Mobility Limitations",
    "Failed Back Surgery Syndrome",
    "Slow-Healing Wounds",
    "Fibromyalgia",
    "Sports Injuries",
  ]

  const firstRow = conditions.slice(0, Math.ceil(conditions.length / 2));
  const secondRow = conditions.slice(Math.ceil(conditions.length / 2));

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-slate-100">
      
      <div className="container mx-auto px-4 md:px-6 mb-16 relative z-10">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Who <span className="text-teal-600">NFPM Helps</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Targeted relief for a wide spectrum of neuropathic and musculoskeletal conditions.
            </p>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        
        <Marquee pauseOnHover className="[--duration:40s]">
          {firstRow.map((condition) => (
            <div key={condition} className="mx-4 md:mx-8 flex items-center gap-3">
               <div className="p-2 rounded-full bg-teal-50 text-teal-600">
                  <Activity className="h-6 w-6" />
               </div>
               <span className="text-2xl md:text-3xl font-medium text-slate-400 hover:text-slate-900 transition-colors cursor-default">
                  {condition}
               </span>
            </div>
          ))}
        </Marquee>
        
        <Marquee reverse pauseOnHover className="[--duration:40s] mt-8 md:mt-12">
          {secondRow.map((condition) => (
            <div key={condition} className="mx-4 md:mx-8 flex items-center gap-3">
               <div className="p-2 rounded-full bg-teal-50 text-teal-600">
                  <Zap className="h-6 w-6" />
               </div>
               <span className="text-2xl md:text-3xl font-medium text-slate-400 hover:text-slate-900 transition-colors cursor-default">
                  {condition}
               </span>
            </div>
          ))}
        </Marquee>

        {/* Gradient Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-16 text-center">
            <p className="text-slate-500 flex items-center justify-center gap-2">
                <Plus className="h-4 w-4" />
                <span>And many other complex pain conditions</span>
            </p>
      </div>

    </section>
  )
}
