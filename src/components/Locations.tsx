import { MapPin, Clock, Phone, Facebook, Instagram } from "lucide-react";
import { LOCATIONS, PHONE, PHONE_HREF } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function Locations() {
  return (
    <section id="locations" className="bg-espresso py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl" >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Locations &amp; Contact
          </p>
          <h2 className="mt-4 text-4xl leading-tight text-cream sm:text-5xl">FIND US IN DHAKA</h2>
        </Reveal>

        <div id="contact" className="mt-12 grid gap-6 lg:grid-cols-2">
          {LOCATIONS.map((loc, i) => (
            <Reveal key={loc.name} delay={i * 90}>
              <div className="flex h-full flex-col rounded-lg border border-border bg-charcoal/60 p-7">
                <h3 className="text-2xl text-cream">{loc.name.toUpperCase()}</h3>
                <ul className="mt-5 space-y-4 text-sm text-cream/70">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    <span>{loc.address}</span>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    <span>{loc.hours}</span>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    <a href={PHONE_HREF} className="transition-colors hover:text-primary">
                      {PHONE}
                    </a>
                  </li>
                </ul>
                {loc.note && (
                  <p className="mt-5 rounded-md bg-accent/10 px-4 py-3 text-xs text-accent">
                    {loc.note}
                  </p>
                )}
                <div className="mt-auto flex gap-3 pt-7">
                  <a
                    href="https://www.facebook.com/texasflamebd"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Texas Flame on Facebook"
                    className="rounded-md border border-border p-2.5 text-cream/70 transition-colors hover:border-primary hover:text-primary"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/texasflamebd"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Texas Flame on Instagram"
                    className="rounded-md border border-border p-2.5 text-cream/70 transition-colors hover:border-primary hover:text-primary"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <iframe
            title="Map showing Texas Flame steakhouse in Banani, Dhaka"
            src="https://www.google.com/maps?q=Road%2011%20Banani%20Dhaka%201213&output=embed"
            loading="lazy"
            className="h-[380px] w-full rounded-lg border border-border"
          />
        </Reveal>
      </div>
    </section>
  );
}
