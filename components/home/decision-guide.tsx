import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DecisionGuide() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-heading text-primary">
            Start Here: Choose the Path That Fits You
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Not sure where to begin? Select the option that best describes your current needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Option 1: NFPM */}
          <Link href="/nfpm" className="group h-full">
            <Card className="h-full border-border hover:border-primary transition-all hover:shadow-lg flex flex-col">
              <CardHeader>
                <div className="text-sm font-bold text-primary tracking-wide uppercase mb-2">Option 1</div>
                <CardTitle className="text-2xl font-heading text-foreground group-hover:text-primary transition-colors">
                  NFPM (Pain Relief Program)
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-foreground/80 leading-relaxed">
                  Best for moderate to severe pain, mobility issues, neuropathy, sciatica, knee or back pain, and other chronic pain conditions.
                </p>
                <p className="mt-4 text-foreground/80 font-medium bg-muted p-2 rounded-md inline-block">
                   Available to patients local to the East Bay (Medicare covered).
                </p>
              </CardContent>
              <CardFooter>
                 <Button variant="ghost" className="p-0 text-primary group-hover:translate-x-1 transition-transform">
                    Explore NFPM <ArrowRight className="ml-2 h-4 w-4" />
                 </Button>
              </CardFooter>
            </Card>
          </Link>

          {/* Option 2: Cellular Activation */}
          <Link href="/nrf2" className="group h-full">
            <Card className="h-full border-border hover:border-secondary transition-all hover:shadow-lg flex flex-col">
              <CardHeader>
                <div className="text-sm font-bold text-secondary tracking-wide uppercase mb-2">Option 2</div>
                <CardTitle className="text-2xl font-heading text-foreground group-hover:text-secondary transition-colors">
                  Cellular Activation (Daily Wellness)
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-foreground/80 leading-relaxed">
                  Best for mild to moderate inflammation, low energy, healthy aging, recovery, and many other wellness goals — especially for those who want to start supporting their health right away.
                </p>
                <p className="mt-4 text-foreground/80 font-medium bg-muted p-2 rounded-md inline-block">
                   Ships directly to your doorstep.
                </p>
              </CardContent>
              <CardFooter>
                 <Button variant="ghost" className="p-0 text-secondary group-hover:translate-x-1 transition-transform">
                    Explore Cellular Activation <ArrowRight className="ml-2 h-4 w-4" />
                 </Button>
              </CardFooter>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
}
