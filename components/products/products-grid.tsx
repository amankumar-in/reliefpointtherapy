"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Activity, CheckCircle2 } from "lucide-react"
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
      <div className="relative aspect-square bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5 overflow-hidden group-hover:from-primary/10 group-hover:via-primary/15 group-hover:to-secondary/10 transition-all duration-300">
        <Image
          src={images[0]}
          alt={productName}
          fill
          className="object-contain p-6 group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
    )
  }

  return (
    <div className="relative aspect-square bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5 overflow-hidden group-hover:from-primary/10 group-hover:via-primary/15 group-hover:to-secondary/10 transition-all duration-300">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full h-full"
      >
        <CarouselContent className="-ml-0">
          {images.map((image, idx) => (
            <CarouselItem key={idx} className="pl-0 basis-full">
              <div className="relative aspect-square w-full bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5">
                <Image
                  src={image}
                  alt={`${productName} - Image ${idx + 1}`}
                  fill
                  className="object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious 
          className="left-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white border-0 shadow-md" 
          variant="outline"
        />
        <CarouselNext 
          className="right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white border-0 shadow-md" 
          variant="outline"
        />
      </Carousel>
      
      {/* Image Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 pointer-events-none">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`h-1.5 rounded-full transition-all ${
              idx === current ? "w-6 bg-primary" : "w-1.5 bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export function ProductsGrid() {
  return (
    <section id="products-services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading text-primary">
              Products & Services
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Everything we offer — from in-home pain relief to daily wellness support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-[#E2E8E8] rounded-lg shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col group"
              >
                {/* Product Image Gallery */}
                <ProductImageGallery images={product.images} productName={product.name} />

                {/* Icon Badge */}
                {product.icon && (
                  <div className="absolute top-4 right-4 p-2.5 bg-white/95 rounded-lg shadow-md group-hover:shadow-lg transition-shadow z-20">
                    <product.icon className="h-5 w-5 text-primary" />
                  </div>
                )}

                {/* Product Content */}
                <div className="p-6 flex flex-col flex-1 space-y-4">
                  <h3 className="text-xl md:text-2xl font-heading text-primary">
                    {product.name}
                  </h3>

                  <div className="flex-1 space-y-4">
                    <p className="text-foreground/80 leading-relaxed">
                      {product.summary}
                    </p>

                    {/* Includes or Best For */}
                    {product.includes && (
                      <div className="space-y-2 pt-2">
                        <p className="font-semibold text-sm text-foreground">Includes:</p>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                          {product.includes.map((item, idx) => (
                            <li key={idx} className="text-sm text-foreground/80 flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {product.bestFor && (
                      <div className="space-y-2 pt-2">
                        <p className="font-semibold text-sm text-foreground">Best For:</p>
                        <ul className="space-y-1">
                          {product.bestFor.map((item, idx) => (
                            <li key={idx} className="text-sm text-foreground/80 flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* CTAs */}
                  <div className="pt-4 space-y-2 mt-auto">
                    {product.ctas ? (
                      product.ctas.map((cta, idx) => (
                        <Button
                          key={idx}
                          asChild
                          variant={cta.primary ? "default" : "outline"}
                          className={`w-full ${cta.primary ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border-primary text-primary hover:bg-muted"} rounded`}
                        >
                          <Link href={cta.link} target={cta.link.startsWith("http") ? "_blank" : "_self"} rel={cta.link.startsWith("http") ? "noopener noreferrer" : undefined}>
                            {cta.text}
                          </Link>
                        </Button>
                      ))
                    ) : (
                      <Button
                        asChild
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded"
                      >
                        <Link href={product.cta.link} target="_blank" rel="noopener noreferrer">
                          {product.cta.text}
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
