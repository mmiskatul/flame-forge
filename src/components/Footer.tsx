import { Flame, Facebook, Instagram } from "lucide-react";
import { LOCATIONS, PHONE, PHONE_HREF } from "@/lib/site-data";

const LINKS = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reservation", label: "Reservation" },
  { href: "#locations", label: "Locations" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-charcoal pb-28 pt-16 lg:pb-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <Flame className="h-6 w-6 text-accent" aria-hidden />
            <span className="font-display text-2xl tracking-[0.18em] text-cream">TEXAS FLAME</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/60">
            Feel the true taste of Texas — flame-grilled steaks, sharing platters and bold seasoning,
            served in Banani and Gulshan, Dhaka.
          </p>
          <div className="mt-6 flex gap-3">
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

        <div>
          <h3 className="text-sm uppercase tracking-[0.2em] text-primary">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/65">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[0.2em] text-primary">Visit Us</h3>
          <ul className="mt-4 space-y-4 text-sm text-cream/65">
            {LOCATIONS.map((l) => (
              <li key={l.name}>
                <span className="block font-semibold text-cream/85">{l.name}</span>
                {l.address}
              </li>
            ))}
            <li>
              <a href={PHONE_HREF} className="transition-colors hover:text-primary">
                {PHONE}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-border px-5 pt-6 lg:px-8">
        <p className="text-xs text-cream/45">
          © {new Date().getFullYear()} Texas Flame. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
