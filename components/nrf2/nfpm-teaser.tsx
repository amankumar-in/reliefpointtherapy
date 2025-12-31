import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function NFPMTeaser() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="p-8 md:p-12 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-heading text-primary">
            Looking for covered pain relief instead?
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            NFPM is a nurse-led, in-home pain relief program available locally in the East Bay. It&apos;s covered by Original Medicare (red-white-blue card), with cash-pay options available.
          </p>
          <div className="pt-4">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-muted rounded">
              <Link href="/nfpm">
                Explore NFPM
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
