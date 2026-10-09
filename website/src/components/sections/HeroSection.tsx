import { HERO } from "@/lib/content/home";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-cream to-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-heading text-5xl lg:text-7xl leading-tight text-charcoal">
            {HERO.headline}
          </h1>
          <p className="text-xl lg:text-2xl text-charcoal-light mt-6 max-w-2xl mx-auto">
            {HERO.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button cta={HERO.primaryCta} />
            <Button cta={HERO.secondaryCta} />
          </div>
        </div>
        <div className="mt-16 h-1 w-24 mx-auto bg-terracotta rounded-full" />
      </div>
    </section>
  );
}
