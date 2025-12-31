import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Nurse-led in-home care",
  "FDA-cleared treatment",
  "Medicare accepted",
  "Non-invasive & drug-free",
];

export function BenefitStrip() {
  return (
    <section className="bg-muted py-8 md:py-10 border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2.5">
              <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-primary shrink-0" />
              <span className="text-sm md:text-base font-medium text-foreground/90 font-sans">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
