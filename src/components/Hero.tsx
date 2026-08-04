import { Star } from "lucide-react";
import { IMAGES } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden">
      <img
        src={IMAGES.hero}
        alt="Flame-grilled tomahawk steak Dhaka served at Texas Flame steakhouse"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/70 to-charcoal" />
      <div className="grill-texture absolute inset-0 opacity-60" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-5 pb-20 pt-32 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-primary">
          Banani · Gulshan · Dhaka
        </p>
        <h1 className="mt-5 max-w-3xl text-5xl leading-[0.92] text-cream sm:text-7xl lg:text-8xl">
          FEEL THE TRUE
          <br />
          TASTE OF <span className="text-gradient-ember">TEXAS</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
          Bold, hearty Texan-style steaks — flame-grilled to perfection in the heart of Dhaka.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#reservation"
            className="rounded-md bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-flame hover:brightness-110"
          >
            Reserve a Table
          </a>
          <a
            href="#menu"
            className="rounded-md border border-cream/40 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-cream transition-all hover:border-primary hover:text-primary"
          >
            View Menu
          </a>
        </div>

        <div className="mt-10 flex items-center gap-3">
          <div className="flex gap-0.5" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-sm text-cream/70">
            <span className="font-semibold text-cream">4.7/5</span> · Rated Dhaka's Best Steakhouse
          </span>
        </div>
      </div>
    </section>
  );
}
