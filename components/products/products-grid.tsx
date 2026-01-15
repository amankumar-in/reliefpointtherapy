"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { Activity, CheckCircle2, ArrowRight, ShieldCheck, Zap, Sparkles } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

const products = [
  {
    id: "nfpm",
    name: "NFPM (Neurofunctional Pain Management)",
    images: [
      "/assets/images/Product-Images/NFPM Machine/NFPM clipart - glowing no background.jpeg",
      "/assets/images/Product-Images/NFPM Machine/NFPM clipart - glowing.jpeg",
      "/assets/images/Product-Images/NFPM Machine/nfpm machine with glowstack.jpg",
      "/assets/images/Product-Images/NFPM Machine/NFPM Clipart.png",
    ],
    summary: "In-home, non-invasive electroanalgesia treatments that help reduce pain, improve mobility, and support long-term healing. Medicare-covered.",
    includes: [
      "8-week personalized program",
      "2 treatments per week",
      "IV hydration (every other session)",
      "Nurse-led care",
      "Lifestyle guidance",
    ],
    ctas: [
      { text: "Verify Your Insurance Benefits", link: "https://relatyv.formstack.com/forms/insurance_details", primary: true },
      { text: "Explore NFPM", link: "/nfpm", primary: false },
    ],
    icon: Activity,
  },
  {
    id: "nrf2",
    name: "Protandim Nrf2 Synergizer",
    images: [
      "/assets/images/Product-Images/Protandim Nrf2/nrf2.png",
      "/assets/images/Product-Images/Protandim Nrf2/1080x1080-NRF2-Cam-06.png",
      "/assets/images/Product-Images/Protandim Nrf2/nrf2 2.png",
      "/assets/images/Product-Images/Protandim Nrf2/nrf2 - 2.png",
      "/assets/images/Product-Images/Protandim Nrf2/IMG_1466.WEBP",
      "/assets/images/Product-Images/Protandim Nrf2/IMG_6143.WEBP",
    ],
    summary: "Activates your body's antioxidant pathways, reducing oxidative stress and increasing glutathione up to 300%. Supports inflammation, energy, and healthy aging.",
    bestFor: [
      "Daily inflammation support",
      "Energy",
      "Wellness",
    ],
    cta: { text: "Order Nrf2", link: "https://genismatel.lifevantage.com/us-en/shop/protandim-nrf2" },
  },
  {
    id: "glowstack",
    name: "GlowStack (Liquid Collagen + Nrf2)",
    images: [
      "/assets/images/Product-Images/Glowstack collagen/glow stack.png",
      "/assets/images/Product-Images/Glowstack collagen/collagen.png",
      "/assets/images/Product-Images/Glowstack collagen/collagen 2.png",
      "/assets/images/Product-Images/Glowstack collagen/LFVN-TS-Collagen-Stevie-Award_CO_01.jpg.png",
    ],
    summary: "10 peptides + collagen + Nrf2. Supports skin elasticity, joints, hair, nails, and recovery. Clinically shown to increase bone density and improve skin firmness in 6–8 weeks.",
    cta: { text: "Order GlowStack", link: "https://genismatel.lifevantage.com/us-en/shop/healthy-glow-essentials-stack" },
  },
  {
    id: "dual",
    name: "Dual Synergizer (Nrf1 + Nrf2)",
    images: [
      "/assets/images/Product-Images/Dual synergizer.WEBP",
      "/assets/images/Product-Images/nrf1.png",
      "/assets/images/Product-Images/Protandim Nrf2/nrf2.png",
    ],
    summary: "Mitochondria support + inflammation reduction. Helps energy, metabolism, and cognitive clarity.",
    cta: { text: "Order Dual Synergizer", link: "https://genismatel.lifevantage.com/us-en/shop/protandim-dual" },
  },
  {
    id: "tri",
    name: "Tri Synergizer (Nrf1 + Nrf2 + NAD)",
    images: [
      "/assets/images/Product-Images/Tri synergizer/Tri synergizer.WEBP",
      "/assets/images/Product-Images/Tri synergizer/tri-synergizer.png",
      "/assets/images/Product-Images/nad.png",
      "/assets/images/Product-Images/nrf1.png",
      "/assets/images/Product-Images/Protandim Nrf2/nrf2.png",
    ],
    summary: "Full system support. Clinically increases NAD by 100% in 24 hours. Best for deeper results and longevity.",
    cta: { text: "Order Tri Synergizer", link: "https://genismatel.lifevantage.com/us-en/shop/protandim-tri" },
  },
]

function ProductImageGallery({ images, productName }: { images: string[]; productName: string }) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  if (images.length === 1) {
    return (
        <div className="relative aspect-square bg-slate-50 overflow-hidden group-hover:bg-slate-100 transition-colors duration-300">
            <Image
            src={images[0]}
            alt={productName}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
            />
        </div>
    )
  }

  return (
    <div className="w-full bg-slate-50 overflow-hidden group-hover:bg-slate-100 transition-colors duration-300">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {images.map((image, idx) => (
            <CarouselItem key={idx} className="pl-0 basis-full">
               {/* Inner container defines height -> aspect-square makes it robust */}
               <div className="relative w-full aspect-square">
                <Image
                  src={image}
                  alt={`${productName} - Image ${idx + 1}`}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
               </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Always visible controls */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 pointer-events-none z-10">
            <CarouselPrevious 
            className="pointer-events-auto bg-white/80 hover:bg-white border-0 shadow-md h-8 w-8 text-slate-800 relative left-0 translate-y-0" 
            variant="outline"
            />
            <CarouselNext 
            className="pointer-events-auto bg-white/80 hover:bg-white border-0 shadow-md h-8 w-8 text-slate-800 relative right-0 translate-y-0" 
            variant="outline"
            />
        </div>
      </Carousel>
      
      {/* Image Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 pointer-events-none">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${
              idx === current ? "w-6 bg-teal-600" : "w-1.5 bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export function ProductsGrid() {
  const nfpm = products[0]
  const otherProducts = products.slice(1)

  return (
    <section id="products-services" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-12">
          
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Products & <span className="text-teal-600">Services</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need for pain relief and long-term cellular health.
            </p>
          </div>

          <div className="space-y-8">
            {/* Row 1: NFPM (Featured) + Marketing Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* NFPM Featured Card (Columns 1-8) */}
              <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row group min-h-[450px]">
                
                {/* Left: Product Carousel (40% width) */}
                <div className="w-full md:w-5/12 border-r border-slate-100">
                    <ProductImageGallery images={nfpm.images} productName={nfpm.name} />
                </div>

                {/* Right: Content */}
                <div className="flex-1 p-8 flex flex-col space-y-6">
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-bold text-slate-900">{nfpm.name}</h3>
                            <div className="p-2 bg-teal-50 rounded-lg text-teal-600">
                                <nfpm.icon className="h-6 w-6" />
                            </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-base">
                            {nfpm.summary}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {nfpm.includes?.map((item, idx) => (
                             <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                                 <CheckCircle2 className="h-4 w-4 text-teal-500 shrink-0" />
                                 <span>{item}</span>
                             </div>
                        ))}
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row gap-4 mt-auto">
                        {nfpm.ctas?.map((cta, idx) => (
                             cta.primary ? (
                                <Link key={idx} href={cta.link} className="flex-1" target={cta.link.startsWith("http") ? "_blank" : "_self"}>
                                    <ShimmerButton 
                                        className="w-full h-12 text-base font-bold shadow-md" 
                                        background="#0D9488" 
                                        shimmerColor="#ffffff"
                                        noShimmer={true}
                                        borderRadius="9999px" 
                                    >
                                        {cta.text} <ArrowRight className="ml-2 h-4 w-4" />
                                    </ShimmerButton>
                                </Link>
                             ) : (
                                <Button
                                    key={idx}
                                    asChild
                                    variant="outline"
                                    className="flex-1 h-12 border-2 border-slate-200 text-slate-700 hover:border-teal-600 hover:text-teal-600 hover:bg-white rounded-full text-base font-bold transition-all"
                                >
                                    <Link href={cta.link} target={cta.link.startsWith("http") ? "_blank" : "_self"}>
                                        {cta.text}
                                    </Link>
                                </Button>
                             )
                        ))}
                    </div>
                </div>

              </div>

              {/* Marketing / Intro Card (Columns 9-12) */}
              <div className="lg:col-span-4 bg-slate-900 rounded-2xl shadow-xl text-white relative overflow-hidden p-8 flex flex-col justify-center h-full min-h-[400px]">
                 {/* Decorative background */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10 space-y-6">
                    <div className="p-3 bg-white/10 w-fit rounded-xl backdrop-blur-sm">
                        <Sparkles className="h-8 w-8 text-teal-300" />
                    </div>
                    
                    <h3 className="text-3xl font-bold leading-tight">
                        Complete<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-400">Wellness System</span>
                    </h3>
                    
                    <p className="text-slate-300 leading-relaxed text-lg">
                        Combines clinical-grade electroanalgesia with powerful cellular activation.
                    </p>

                    <div className="space-y-4 pt-4">
                        <div className="flex items-center gap-3 text-slate-200">
                             <div className="p-1.5 rounded-full bg-teal-500/20 text-teal-400"><Zap className="h-4 w-4" /></div>
                             <span className="font-semibold">Pain Relief</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-200">
                             <div className="p-1.5 rounded-full bg-blue-500/20 text-blue-400"><ShieldCheck className="h-4 w-4" /></div>
                             <span className="font-semibold">Cellular Defense</span>
                        </div>
                    </div>
                </div>
              </div>

            </div>

             {/* Row 2: Supplements (4 Columns) */}
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                {otherProducts.map((product) => (
                    <div key={product.id} className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group h-full">
                        {/* Compact Image Area */}
                        <div className="aspect-[4/3] w-full">
                            <ProductImageGallery images={product.images} productName={product.name} />
                        </div>

                        <div className="p-5 flex flex-col flex-1 space-y-3">
                            <h3 className="text-lg font-bold text-slate-900 leading-tight min-h-[3rem] pb-1 border-b border-slate-50">
                                {product.name}
                            </h3>
                            
                            <p className="text-slate-600 text-sm leading-relaxed flex-1">
                                {product.summary}
                            </p>

                            {/* Best For Tags (Restored) */}
                            {product.bestFor && (
                                <div className="py-2 flex flex-wrap gap-2">
                                    {product.bestFor.map((item, idx) => (
                                        <span key={idx} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <div className="mt-4">
                                <Link href={product.cta!.link} target="_blank" className="block w-full">
                                    <ShimmerButton 
                                        className="w-full h-10 text-sm font-bold shadow-sm" 
                                        background="#0F766E" 
                                        shimmerColor="#ffffff"
                                        noShimmer={true}
                                        borderRadius="9999px"
                                    >
                                        {product.cta!.text}
                                    </ShimmerButton>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
             </div>

          </div>
        </div>
      </div>
    </section>
  )
}
