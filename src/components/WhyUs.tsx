import { Flame, BeefIcon, ChefHat, Sofa } from "lucide-react";
import { Reveal } from "./Reveal";

const FEATURES = [
  {
    icon: Flame,
    title: "Authentic Texas-Style Recipes",
    desc: "Spice rubs, sauces and cooking method straight out of the West Texas playbook.",
  },
  {
    icon: BeefIcon,
    title: "Premium & Fresh Cuts Only",
    desc: "Marbling checked, trimmed in-house, never frozen into mediocrity.",
  },
  {
    icon: ChefHat,
    title: "Expert Flame-Grilling",
    desc: "Live fire, precise timing, and a crust you can hear when the knife goes in.",
  },
  {
    icon: Sofa,
    title: "Rustic-Yet-Elegant Ambience",
    desc: "Perfect for dates, family nights and celebrations worth dressing up for.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Why Texas Flame</p>
          <h2 className="mt-4 text-4xl leading-tight text-cream sm:text-5xl">
            NO SHORTCUTS. JUST FIRE.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="h-full rounded-lg border border-border bg-espresso/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                <span className="bg-ember-gradient inline-flex h-12 w-12 items-center justify-center rounded-md">
                  <f.icon className="h-6 w-6 text-charcoal" aria-hidden />
                </span>
                <h3 className="mt-5 text-xl leading-snug text-cream">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
