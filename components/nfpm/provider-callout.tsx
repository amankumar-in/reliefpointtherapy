"use client"

import Link from "next/link"
import { ArrowRight, Stethoscope } from "lucide-react"

export function ProviderCallout() {
  return (
    <div className="w-full bg-[#0F172A] border-b border-white/10 text-white py-3 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left text-sm">
        <div className="flex items-center gap-2 text-[#0F8B8D]">
          <Stethoscope className="h-4 w-4" />
          <span className="font-semibold uppercase tracking-wide text-xs">Healthcare Providers</span>
        </div>
        <div className="flex flex-wrap justify-center gap-1.5 items-center">
          <span className="text-white/80">Looking to refer a patient or learn more about NFPM?</span>
          <Link 
            href="/nfpm/providers" 
            className="inline-flex items-center gap-1 font-semibold text-white hover:text-[#0F8B8D] transition-colors group"
          >
            Visit our Provider Resource Page 
            <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}
