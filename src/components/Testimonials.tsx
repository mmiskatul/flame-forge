import { useEffect, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Testimonials() {
  const [i, setI] = useState(0);
  const total = TESTIMONIALS.length;

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % total), 6000);
    return () => clearInterval(t);
  }, [total]);

  const t = TESTIMONIALS[i]!;

  return (
    <section className="bg-espresso py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Guest Reviews
          </p>
          <Quote className="mx-auto mt-8 h-9 w-9 text-accent/70" aria-hidden />
          <blockquote className="mt-6 font-serif-elegant text-2xl leading-relaxed text-cream sm:text-3xl">
            “{t.quote}”
          </blockquote>
          <p className="mt-6 text-sm uppercase tracking-widest text-cream/60">
            {t.name} · {t.detail}
          </p>

          <div className="mt-9 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous review"
              onClick={() => setI((v) => (v - 1 + total) % total)}
              className="rounded-full border border-border p-2 text-cream/70 transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((item, idx) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Review ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    idx === i ? "w-7 bg-primary" : "w-3 bg-cream/25",
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next review"
              onClick={() => setI((v) => (v + 1) % total)}
              className="rounded-full border border-border p-2 text-cream/70 transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
