import { Tag, Truck, Ban } from "lucide-react"

export function CostSavingTips() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="bg-gradient-to-br from-indigo-50 to-teal-50 rounded-2xl p-8 md:p-12 border border-indigo-100 shadow-sm relative overflow-hidden">
             
             <div className="flex flex-col md:flex-row items-start gap-8 relative z-10">
                <div className="bg-white p-4 rounded-xl shadow-sm text-indigo-500 shrink-0">
                    <Tag className="h-8 w-8" />
                </div>
                
                <div className="space-y-6 flex-1">
                    <h3 className="text-2xl font-bold text-slate-900">How to Get the Best Price</h3>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="flex gap-3">
                            <Truck className="h-5 w-5 text-indigo-600 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-slate-900">Choose Subscription</h4>
                                <p className="text-sm text-slate-600">Save up to 20% on every order + Free Shipping.</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <Ban className="h-5 w-5 text-indigo-600 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-slate-900">Cancel Anytime</h4>
                                <p className="text-sm text-slate-600">No long-term contracts. Pause or cancel easily.</p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>

             {/* Decor */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
