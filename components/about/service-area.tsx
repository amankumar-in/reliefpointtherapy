import { MapPin, Navigation } from "lucide-react"

const cities = [
  "Brentwood", "Oakley", "Antioch", "Pittsburg", "Disc. Bay",
  "Concord", "Walnut Creek", "Pleasant Hill", "Martinez", 
  "Alamo", "Danville", "San Ramon", "Dublin", "Pleasanton", "Livermore"
]

export function ServiceArea() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Map Graphic (Abstract) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-300 rounded-full" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-slate-300 rounded-full" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-teal-200 rounded-full bg-teal-50/50" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          <div className="space-y-4">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-bold uppercase tracking-wider mb-2">
                <Navigation className="h-4 w-4" />
                <span>Service Radius</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Serving the East Bay Area
             </h2>
             <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                Bringing specialized pain care directly to your doorstep in these communities.
             </p>
          </div>

          {/* Cities Grid */}
          <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-3xl p-8 md:p-12 shadow-xl">
             <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {cities.map((city, idx) => (
                    <span 
                        key={idx} 
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-medium hover:bg-teal-50 hover:border-teal-200 hover:text-teal-700 transition-colors cursor-default"
                    >
                        <MapPin className="h-4 w-4 text-teal-500" />
                        {city}
                    </span>
                ))}
             </div>
             
             <p className="mt-8 text-sm text-slate-400 italic">
                *Don&apos;t see your city listed? Contact us to inquire about availability.
             </p>
          </div>

        </div>
      </div>
    </section>
  )
}
