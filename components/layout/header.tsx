"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu, Stethoscope } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "NFPM Pain Relief", href: "/nfpm" },
  { name: "Cellular Activation", href: "/nrf2" },
  { name: "Shop Products", href: "/products" },
  { name: "About", href: "/about" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/images/rpt-logo.png"
            alt="Relief Point Therapy Logo"
            width={180}
            height={60}
            className="h-10 w-auto md:h-12"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-slate-600 hover:text-teal-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="h-10 px-6 text-sm font-bold shadow-lg bg-[#0F8B8D] hover:bg-[#0d7a7b] text-white rounded-full transition-all hover:scale-105">
              <Link href="https://relatyv.formstack.com/forms/insurance_details" target="_blank">
                Verify My Insurance Benefits
              </Link>
          </Button>
        </nav>

        {/* Tablet Button and Mobile Menu */}
        <div className="flex items-center gap-3 xl:hidden">
          {/* Tablet Button - Visible on md and lg */}
          <div className="hidden md:flex items-center">
            <Button asChild className="bg-primary hover:bg-secondary text-primary-foreground rounded-full px-6 font-bold text-sm shadow-md">
              <Link href="https://relatyv.formstack.com/forms/insurance_details" target="_blank">
                Verify My Insurance Benefits
              </Link>
            </Button>
          </div>
          
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-900 hover:bg-slate-100/50">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-slate-50/95 backdrop-blur-xl border-l border-white/20 p-0">
              <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
              <SheetDescription className="sr-only">Navigation menu</SheetDescription>
              
              <div className="flex flex-col h-full">
                {/* Social Profile Header */}
                <div className="p-6 pb-8 border-b border-slate-200/60 bg-white/50">
                   <div className="flex items-center gap-4">
                       <div className="relative w-14 h-14 shrink-0">
                          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-teal-500 shadow-sm">
                            <Image
                              src="/assets/images/genis-headshot-transparent-bg.png"
                              alt="Genis Matel"
                              fill
                              className="object-cover bg-teal-50"
                            />
                          </div>
                          <div className="absolute -bottom-1 -right-1 bg-teal-600 text-white p-0.5 rounded-full border border-white">
                             <Stethoscope className="w-2.5 h-2.5" />
                          </div>
                       </div>
                       <div>
                          <div className="text-[10px] font-bold text-teal-600 uppercase tracking-wider mb-0.5">Your Nurse</div>
                          <h2 className="text-lg font-bold text-slate-900 leading-tight">Genis Matel, RN</h2>
                       </div>
                   </div>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 overflow-y-auto py-6 px-6">
                    <nav className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                        <Link
                        key={link.name}
                        href={link.href}
                        className="py-3 px-4 text-lg font-bold text-slate-700 hover:text-teal-700 hover:bg-teal-50/50 rounded-xl transition-all"
                        onClick={() => setIsOpen(false)}
                        >
                        {link.name}
                        </Link>
                    ))}
                    </nav>
                </div>

                {/* Footer / CTA */}
                <div className="p-6 border-t border-slate-200/60 bg-white/50">
                   <Button asChild className="w-full bg-slate-900 text-white hover:bg-slate-800 font-bold h-12 rounded-xl shadow-lg">
                        <Link href="https://relatyv.formstack.com/forms/insurance_details" target="_blank" onClick={() => setIsOpen(false)}>
                        Verify My Insurance Benefits
                        </Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
