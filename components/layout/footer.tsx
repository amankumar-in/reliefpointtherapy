import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

// TikTok icon (custom SVG)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-900 pt-20 pb-10 border-t border-slate-200 relative overflow-hidden">
      {/* Background Decor - Subtle Light Gradients */}
      <div className="absolute -top-[200px] -right-[200px] w-[500px] h-[500px] bg-teal-50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-[200px] -left-[200px] w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          
          {/* Column 1: Brand & Social */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
               <Image
                src="/assets/images/rpt-logo.png"
                alt="Relief Point Therapy Logo"
                width={180}
                height={60}
                className="h-14 w-auto" 
              />
            </Link>
            <p className="text-slate-600 font-sans text-base leading-relaxed max-w-sm">
              Empowering you to heal with non-invasive, nurse-led pain relief solutions in the comfort of your home.
            </p>
            <div className="flex gap-4 pt-2">
              {[
                { icon: Instagram, href: "https://www.instagram.com/reliefpoint.therapy/", label: "Instagram" },
                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61572679007304", label: "Facebook" },
                { icon: TikTokIcon, href: "https://www.tiktok.com/@nursegenis", label: "TikTok" }
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all duration-300 shadow-sm"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:pl-8 lg:pl-16 space-y-6">
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "NFPM Pain Relief", href: "/nfpm" },
                { name: "Cellular Activation", href: "/nrf2" },
                { name: "Shop Products", href: "/products" },
                { name: "About Us", href: "/about" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-teal-600 transition-colors font-sans text-base inline-block transform hover:translate-x-1 duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">Contact Information</h3>
            <div className="space-y-4 font-sans text-slate-600">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-1" />
                <p>East Bay, California<br /><span className="text-sm text-slate-500">Serving the greater East Bay area</span></p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-teal-600 shrink-0" />
                <a href="tel:9255153710" className="hover:text-teal-800 transition-colors">
                  (925) 515-3710
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-teal-600 shrink-0" />
                <a href="mailto:contact@reliefpointtherapy.com" className="hover:text-teal-800 transition-colors">
                  contact@reliefpointtherapy.com
                </a>
              </div>
              <div className="pt-2">
                 <span className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-bold">
                    RN License #95206892
                 </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 font-sans">
          <p>© {new Date().getFullYear()} Relief Point Therapy. All rights reserved.</p>
          <div className="flex gap-8">
             <Link href="/privacy" className="hover:text-teal-600 transition-colors">Privacy Policy</Link>
             <Link href="/terms" className="hover:text-teal-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
