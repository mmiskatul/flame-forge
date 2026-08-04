import { useState } from "react";
import { Download } from "lucide-react";
import { MENU } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Menu() {
  const [active, setActive] = useState(MENU[0].id);
  const cat = MENU.find((c) => c.id === active) ?? MENU[0];

  return (
    <section id="menu" className="grill-texture bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">The Menu</p>
          <h2 className="mt-4 text-4xl leading-tight text-cream sm:text-5xl">
            CUTS WORTH CROSSING TOWN FOR
          </h2>
          <p className="mt-4 text-base text-cream/70">
            Every steak hits the open flame, gets rested properly, and lands on the plate still
            crackling.
          </p>
        </Reveal>

        <div className="mt-10 -mx-5 overflow-x-auto px-5 pb-2 lg:mx-0 lg:px-0">
          <div role="tablist" aria-label="Menu categories" className="flex w-max gap-2 lg:w-auto lg:flex-wrap">
            {MENU.map((c) => (
              <button
                key={c.id}
                role="tab"
                type="button"
                aria-selected={active === c.id}
                onClick={() => setActive(c.id)}
                className={cn(
                  "shrink-0 rounded-md border px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all",
                  active === c.id
                    ? "border-transparent bg-primary text-primary-foreground shadow-flame"
                    : "border-border text-cream/70 hover:border-primary/60 hover:text-primary",
                )}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-7 font-serif-elegant text-lg italic text-cream/60">{cat.blurb}</p>

        <ul key={cat.id} className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cat.items.map((item, i) => (
            <Reveal as="li" key={item.name} delay={i * 60}>
              <article className="group h-full rounded-lg border border-border bg-espresso/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-flame">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl leading-snug text-cream transition-colors group-hover:text-primary">
                    {item.name}
                  </h3>
                  <span className="shrink-0 font-display text-lg text-primary">{item.price}</span>
                </div>
                {item.tag && (
                  <span className="mt-3 inline-block rounded-full bg-accent/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent">
                    {item.tag}
                  </span>
                )}
                <p className="mt-3 text-sm leading-relaxed text-cream/65">{item.desc}</p>
              </article>
            </Reveal>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-primary/60 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <Download className="h-4 w-4" aria-hidden />
            Download Full Menu (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
