"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function ProviderResource() {
  return (
    <section className="py-12 bg-teal-50 border-y border-teal-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
           <div className="flex items-center gap-6">
               <div className="hidden md:flex h-16 w-16 bg-teal-100 rounded-xl items-center justify-center text-teal-600 shrink-0">
                   <Download className="h-8 w-8" />
               </div>
               <div>
                   <h3 className="text-xl font-bold text-teal-900">Download "The Chronic Pain Antidote"</h3>
                   <p className="text-teal-700">Detailed clinical mechanisms and outcomes data PDF.</p>
               </div>
           </div>
           
           <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg shadow-teal-900/10 px-8 h-12">
               <Link href="https://drive.google.com/file/d/1zeX9QeI9dDtGTTTgp9feqb_0MEoSSWU5/view" target="_blank">
                  Download PDF
               </Link>
           </Button>
        </div>
      </div>
    </section>
  )
}
