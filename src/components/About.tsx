import { IMAGES } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="bg-espresso py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <img
            src={IMAGES.about}
            alt="Rustic steakhouse Dhaka interior with cowboy details at Texas Flame Banani"
            loading="lazy"
            className="aspect-4/5 w-full rounded-lg object-cover shadow-flame"
          />
        </Reveal>

        <Reveal delay={120}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Our Story</p>
          <h2 className="mt-4 text-4xl leading-tight text-cream sm:text-5xl">
            WEST TEXAS FIRE, <br />
            <span className="font-serif-elegant text-3xl font-medium italic tracking-normal text-primary sm:text-4xl">
              plated in Dhaka
            </span>
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-cream/75">
            <p>
              Texas Flame started with one obsession: real West Texas-style steak, cooked over live
              fire, without compromise. We source top-quality cuts, age and season them boldly, then
              hand them to grill cooks who understand exactly when to pull a steak off the flame.
            </p>
            <p>
              Inside, it's rustic-meets-modern — charred wood, iron, leather booths and cowboy-themed
              details under warm low light. Big enough for a family night, intimate enough for a
              date.
            </p>
            <p>
              Two branches later, we've become one of Dhaka's most-loved steakhouses, known for
              portion sizes that surprise people and seasoning that never plays it safe.
            </p>
          </div>

          <dl className="mt-9 grid grid-cols-3 gap-4 border-t border-border pt-7">
            {[
              ["2", "Dhaka branches"],
              ["12+", "Signature cuts"],
              ["100%", "Flame-grilled"],
            ].map(([v, k]) => (
              <div key={k}>
                <dt className="font-display text-3xl text-primary">{v}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-cream/60">{k}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
