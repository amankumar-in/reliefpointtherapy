"use client"

import Link from "next/link"
import Image from "next/image"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { Check, ArrowRight, Info, Heart, Wallet, ChevronRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const products = [
  // Row 1
  {
    id: "protandim-nrf2",
    name: "Protandim® Nrf2 Synergizer",
    tagline: "The Foundation",
    image: "/assets/images/Product-Images/Protandim Nrf2/nrf2.png", 
    link: "https://genismatel.lifevantage.com/us-en/shop/protandim-nrf2",
    overview: "Protandim Nrf2 is a nutrigenomic supplement that activates the body’s own antioxidant and detoxification pathways, rather than supplying antioxidants directly. It’s designed to support inflammation balance, cellular repair, energy, and healthy aging at the cellular level.",
    bestFor: [
      "Chronic inflammation",
      "Low energy or sluggish recovery",
      "Mental fog",
      "Healthy aging and longevity support",
      "Daily foundational wellness",
      "Pairing with collagen (glowstack) or NFPM"
    ],
    saveTips: [
      "Subscribe & Save: 10% off (cancel anytime)",
      "3-pack option: Lowers cost to approximately $50/month",
      "Important: Update delivery to every 3 months if ordering for one individual",
      "30-day money-back guarantee"
    ],
    ingredients: "Turmeric, Green Tea, Bacopa, Milk Thistle, Ashwagandha. Patented synergy."
  },
  {
    id: "glowstack",
    name: "GlowStack",
    tagline: "Liquid Collagen + Nrf2",
    image: "/assets/images/Product-Images/Glowstack collagen/glow stack.png",
    link: "https://genismatel.lifevantage.com/us-en/shop/healthy-glow-essentials-stack",
    overview: "GlowStack combines Protandim Nrf2 with liquid collagen and a blend of 10 bioactive peptides to support skin elasticity, hydration, firmness, joint comfort, gut health, eye health, and connective tissue integrity from the inside out.",
    bestFor: [
      "Skin elasticity, tone, glow",
      "Hair and nails",
      "Joint health",
      "Recovery",
      "Aesthetic + internal wellness benefits"
    ],
    saveTips: [
      "Collagen Loading Month strategy available",
      "Pure Subscription: Subscribe & Save (10% off)",
      "Cancel anytime"
    ],
    ingredients: "10 Bioactive Peptides, Liquid Collagen, Nrf2 activators."
  },
  // Row 2
  {
    id: "dual-synergizer",
    name: "Dual Synergizer",
    tagline: "Nrf1 + Nrf2",
    image: "/assets/images/Product-Images/Dual synergizer.WEBP",
    link: "https://genismatel.lifevantage.com/us-en/shop/protandim-dual",
    overview: "Supports mitochondria (Nrf1) + reduces oxidative stress (Nrf2). Mitochondria naturally decline with age, affecting energy, metabolism, and cognition.",
    bestFor: [
      "Low energy",
      "Brain fog",
      "Metabolism",
      "Active lifestyles",
      "Anti-aging"
    ],
    saveTips: [
      "Subscribe & Save",
      "Purchase Tri Synergizer if NAD is desired"
    ],
    ingredients: "Nrf1 activators + Nrf2 activators."
  },
  {
    id: "tri-synergizer",
    name: "Tri Synergizer",
    tagline: "Nrf1 + Nrf2 + NAD",
    image: "/assets/images/Product-Images/Tri synergizer/Tri synergizer.WEBP",
    link: "https://genismatel.lifevantage.com/us-en/shop/protandim-tri",
    overview: "LifeVantage’s most complete cellular activation system. NAD levels drop ~50% by age 40. This system is clinically proven to increase NAD by 100% in 24 hours.",
    bestFor: [
      "Faster or deeper results",
      "Longevity + anti-aging",
      "Cognitive performance",
      "Recovery + resilience"
    ],
    saveTips: [
      "Cheaper bundled vs individual bottles",
      "Subscribe & Save (10% off)",
      "30-day guarantee"
    ],
    ingredients: "Full spectrum activation: Nrf1, Nrf2, NAD."
  }
]

export function ProductCards() {
  return (
    <section id="products" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Recommended <span className="text-teal-600">Protocols</span>
            </h2>
            <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">
                Select the path that matches your health goals.
            </p>
        </div>

        {/* 2 Rows x 3 Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            
            {/* ROW 1 */}
            
            {/* Product 1: Nrf2 */}
            <ProductCard product={products[0]} />

            {/* Product 2: GlowStack */}
            <ProductCard product={products[1]} />

            {/* Decision Guide Part 1 - Redesigned as clean list panel */}
            <div className="lg:col-span-1 pl-4 flex flex-col justify-center">
                <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">My Nurse&apos;s Guide</h3>
                    <p className="text-teal-600 font-bold uppercase tracking-wider text-xs">Part 1: The Essentials</p>
                </div>

                <div className="space-y-8 relative">
                    {/* Vertical line connector */}
                    <div className="absolute left-[11px] top-6 bottom-6 w-0.5 bg-slate-200" />

                    <div className="relative pl-8">
                        <span className="absolute left-0 top-0 h-6 w-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-bold ring-4 ring-slate-50">1</span>
                        <h4 className="font-bold text-slate-900 mb-2 text-lg">Scientific Foundation</h4>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            If you want ONE simple daily foundation, start with <strong>Protandim Nrf2</strong>. It&apos;s the only product proven to reduce oxidative stress by 40% in 30 days.
                        </p>
                    </div>

                    <div className="relative pl-8">
                         <span className="absolute left-0 top-0 h-6 w-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold ring-4 ring-slate-50">2</span>
                        <h4 className="font-bold text-slate-900 mb-2 text-lg">Beauty & Joints</h4>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            If you want skin, hair, joint, or collagen support, choose <strong>GlowStack</strong>. Combining Nrf2 with liquid collagen gives deeper structural results.
                        </p>
                    </div>
                </div>
            </div>


            {/* ROW 2 */}

            {/* Product 3: Dual */}
            <ProductCard product={products[2]} />

            {/* Product 4: Tri */}
            <ProductCard product={products[3]} />
            
             {/* Decision Guide Part 2 - Redesigned as clean list panel */}
             <div className="lg:col-span-1 pl-4 flex flex-col justify-center">
                <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Advanced Protocols</h3>
                    <p className="text-indigo-600 font-bold uppercase tracking-wider text-xs">Part 2: Deep Activation</p>
                </div>

                <div className="space-y-8 relative">
                   {/* Vertical line connector */}
                   <div className="absolute left-[11px] top-6 bottom-6 w-0.5 bg-slate-200" />

                    <div className="relative pl-8">
                        <span className="absolute left-0 top-0 h-6 w-6 rounded-full bg-teal-900 text-teal-100 flex items-center justify-center text-xs font-bold ring-4 ring-slate-50">3</span>
                        <h4 className="font-bold text-slate-900 mb-2 text-lg">Energy & Aging (&gt;40)</h4>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            If you&apos;re over 40, feel low energy, or recover slowly, upgrade to <strong>Dual Synergizer</strong>. Nrf1 supports mitochondrial energy which naturally declines with age.
                        </p>
                    </div>

                    <div className="relative pl-8">
                        <span className="absolute left-0 top-0 h-6 w-6 rounded-full bg-indigo-900 text-indigo-100 flex items-center justify-center text-xs font-bold ring-4 ring-slate-50">4</span>
                        <h4 className="font-bold text-slate-900 mb-2 text-lg">Maximum Performance</h4>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            For faster, deeper results and cognitive performance, <strong>Tri Synergizer</strong> adds NAD support. NAD levels drop ~50% by age 40; this system restores them by 100% in 24 hrs.
                        </p>
                    </div>
                </div>
            </div>

        </div>

         <div className="mt-12 text-center text-sm text-slate-400 font-light max-w-2xl mx-auto">
            Wellness products are not intended to diagnose, treat, cure, or prevent disease. Results vary.
        </div>

      </div>
    </section>
  )
}

function ProductCard({ product }: { product: any }) {
    return (
        <div 
            id={product.id} 
            className="group bg-white rounded-3xl border border-slate-200 flex flex-col overflow-hidden h-full scroll-mt-32"
        >
            {/* Header / Image */}
            <div className="p-6 pb-0 flex items-start gap-4">
                <div className="relative w-24 h-24 shrink-0 bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
                         <Image 
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="96px"
                            className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                        />
                </div>
                <div className="pt-2">
                    <div className="bg-teal-50 text-teal-700 text-[10px] font-bold px-2 py-0.5 rounded-full inline-block mb-2 uppercase tracking-wider">
                        {product.tagline}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                        {product.name}
                    </h3>
                </div>
            </div>
            
            {/* Tabbed Content */}
            <div className="p-6 flex-1 flex flex-col">
                <Tabs defaultValue="overview" className="w-full flex-1 flex flex-col">
                    <TabsList className="w-full grid grid-cols-3 mb-6 bg-slate-100/50 p-1 rounded-xl">
                        <TabsTrigger value="overview" className="text-xs rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Overview</TabsTrigger>
                        <TabsTrigger value="details" className="text-xs rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Details</TabsTrigger>
                        <TabsTrigger value="save" className="text-xs rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Save</TabsTrigger>
                    </TabsList>

                    <div className="flex-1 min-h-[160px]">
                        <TabsContent value="overview" className="mt-0 h-full animate-in fade-in slide-in-from-bottom-2 duration-300">
                            <div className="space-y-4">
                                <p className="text-sm text-slate-600 leading-relaxed font-light">
                                    {product.overview}
                                </p>
                                <div className="text-xs text-slate-400 pt-2 border-t border-slate-50">
                                    <span className="font-semibold text-slate-600">Key Ingredients:</span> {product.ingredients}
                                </div>
                            </div>
                        </TabsContent>
                        
                        <TabsContent value="details" className="mt-0 h-full animate-in fade-in slide-in-from-bottom-2 duration-300">
                             <div className="space-y-3">
                                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-2 flex items-center gap-1">
                                    <Heart className="h-3 w-3 text-teal-500" /> Best Used For
                                </h4>
                                <ul className="space-y-2">
                                    {product.bestFor.map((item: string, i: number) => (
                                        <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                                            <Check className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                                            <span className="leading-snug">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>

                        <TabsContent value="save" className="mt-0 h-full animate-in fade-in slide-in-from-bottom-2 duration-300">
                            <div className="space-y-3">
                                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-2 flex items-center gap-1">
                                    <Wallet className="h-3 w-3 text-teal-500" /> Smart Savings
                                </h4>
                                 <ul className="space-y-2">
                                    {product.saveTips.map((item: string, i: number) => (
                                        <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                                            <span className="h-1.5 w-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0" />
                                            <span className="leading-snug">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>

                <div className="mt-8 pt-6 border-t border-slate-100">
                    <Link href={product.link} target="_blank" className="block w-full">
                        <ShimmerButton className="w-full h-12 text-sm font-bold shadow-md" background="#0F8B8D" shimmerColor="#ffffff" noShimmer={true}>
                            Order Now <ArrowRight className="h-4 w-4 ml-2" />
                        </ShimmerButton>
                    </Link>
                </div>
            </div>
        </div>
    )
}
