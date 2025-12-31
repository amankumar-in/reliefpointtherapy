import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Activity, ShieldCheck, HeartPulse, Zap } from "lucide-react";

export function NFPMPreview() {
  return (
    <section className="py-20 bg-muted/50 border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading text-primary">
            Neurofunctional Pain Management (NFPM)
          </h2>
          <p className="text-lg md:text-xl font-medium text-foreground/80 font-sans">
            In-home, non-invasive pain treatment covered by Medicare and most major PPOs.
          </p>
          <p className="text-foreground/70 leading-relaxed font-sans max-w-3xl mx-auto">
            NFPM uses FDA-cleared electroanalgesia to calm overactive pain pathways, promote circulation, and support your body’s natural ability to heal. It is safe, drug-free, and ideal for chronic knee, back, and nerve-related pain — especially when other treatments haven’t helped.
          </p>
          
          <div className="flex justify-center gap-8 py-8">
             <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-white rounded-full shadow-sm text-primary">
                   <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium">Non-invasive</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-white rounded-full shadow-sm text-primary">
                   <Activity className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium">Medicare Accepted</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-white rounded-full shadow-sm text-primary">
                   <HeartPulse className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium">Nurse Provided</span>
             </div>
          </div>

          <Button asChild size="lg" className="bg-primary hover:bg-secondary text-primary-foreground px-8">
            <Link href="/nfpm">Learn More About NFPM</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function Nrf2Preview() {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
             <div className="inline-block px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium mb-2">
                Daily Wellness
             </div>
            <h2 className="text-3xl md:text-4xl font-heading text-primary">
              Cellular Activation & Wellness Support
            </h2>
            <p className="text-foreground/70 leading-relaxed font-sans max-w-3xl mx-auto text-lg">
              Daily cellular activation products like Nrf2, GlowStack, and Dual Synergizer support inflammation reduction, energy, recovery, and healthy aging. They’re an excellent option for those wanting to begin supporting their health immediately.
            </p>
            
            <div className="py-6 flex justify-center">
                <Zap className="w-12 h-12 text-accent" />
            </div>
  
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-muted px-8">
              <Link href="/nrf2">Learn About Nrf2 & Cellular Activation</Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }
