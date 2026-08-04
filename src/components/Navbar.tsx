import { useEffect, useState } from "react";
import { Menu, X, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reservation", label: "Reservation" },
  { href: "#locations", label: "Locations" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-charcoal/95 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-2">
          <Flame className="h-6 w-6 shrink-0 text-accent" aria-hidden />
          <span className="truncate font-display text-xl tracking-[0.18em] text-cream sm:text-2xl">
            TEXAS FLAME
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium tracking-wide text-cream/75 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#reservation"
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-flame hover:brightness-110"
          >
            Reserve a Table
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="shrink-0 rounded-md border border-border p-2 text-cream lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}

        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-charcoal/98 px-5 pb-6 pt-2 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/50 py-3 text-base font-medium text-cream/85"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#reservation"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-md bg-primary py-3 text-center text-sm font-bold uppercase tracking-wider text-primary-foreground"
          >
            Reserve a Table
          </a>
        </div>
      )}
    </header>
  );
}
