import { Sparkles } from "lucide-react";

export function Offers() {
  return (
    <section className="bg-ember-gradient">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-5 py-8 sm:flex sm:justify-between lg:px-8">
        <div className="flex min-w-0 items-center gap-4">
          <Sparkles className="hidden h-8 w-8 shrink-0 text-charcoal sm:block" aria-hidden />
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-charcoal/70">
              Limited-time offer
            </p>
            <h2 className="mt-1 text-2xl leading-tight text-charcoal sm:text-3xl">
              FESTIVAL FEAST — UP TO 33% OFF STEAK &amp; SEAFOOD
            </h2>
            <p className="mt-1 text-sm font-medium text-charcoal/75">
              Valid at Banani &amp; Gulshan for a limited period. Dine-in only.
            </p>
          </div>
        </div>
        <a
          href="#reservation"
          className="shrink-0 rounded-md bg-charcoal px-6 py-3 text-xs font-bold uppercase tracking-wider text-cream transition-transform hover:scale-105"
        >
          Claim Offer
        </a>
      </div>
    </section>
  );
}
