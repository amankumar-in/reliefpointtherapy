import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";

// TikTok icon is not in standard Lucide set yet, or we can use a generic video icon / svg
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
    <footer className="bg-muted pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Logo & Tagline */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
               <Image
                src="/assets/images/rpt-logo.png"
                alt="Relief Point Therapy Logo"
                width={150}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-foreground/80 font-sans text-base leading-relaxed max-w-xs">
              Non-invasive, nurse-led pain relief in the East Bay.
            </p>
          </div>

          {/* Column 2: Pages */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading text-primary">Pages</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "NFPM", href: "/nfpm" },
                { name: "Nrf2", href: "/nrf2" },
                { name: "Products", href: "/products" },
                { name: "About", href: "/about" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground/80 hover:text-primary transition-colors font-sans"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading text-primary">Contact</h3>
            <div className="space-y-2 font-sans text-foreground/80">
              <p>📍 East Bay, California</p>
              <p>
                <a href="tel:9255153710" className="hover:text-primary transition-colors">
                  📞 (925) 515-3710
                </a>
              </p>
              <p>
                <a href="mailto:contact@reliefpointtherapy.com" className="hover:text-primary transition-colors">
                  📧 contact@reliefpointtherapy.com
                </a>
              </p>
              <p>RN License #95206892</p>
            </div>
          </div>

          {/* Column 4: Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading text-primary">Follow Us</h3>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/reliefpoint.therapy/"
                target="_blank"
                className="p-2 bg-white rounded-full shadow-sm hover:shadow-md hover:text-primary transition-all text-foreground/80"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61572679007304"
                target="_blank"
                className="p-2 bg-white rounded-full shadow-sm hover:shadow-md hover:text-primary transition-all text-foreground/80"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.tiktok.com/@nursegenis" /* Fixed URL based on handle */
                target="_blank"
                className="p-2 bg-white rounded-full shadow-sm hover:shadow-md hover:text-primary transition-all text-foreground/80"
                aria-label="TikTok"
              >
                <TikTokIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-sans">
          <p>© {new Date().getFullYear()} Relief Point Therapy. All rights reserved.</p>
          <div className="flex gap-6">
             <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
             <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
