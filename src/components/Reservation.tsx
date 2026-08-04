import { useState } from "react";
import { Phone } from "lucide-react";
import { toast } from "sonner";
import { PHONE, PHONE_HREF } from "@/lib/site-data";
import { Reveal } from "./Reveal";

const field =
  "w-full rounded-md border border-input bg-charcoal/60 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40";

export function Reservation() {
  const [submitting, setSubmitting] = useState(false);

  return (
    <section id="reservation" className="grill-texture bg-charcoal py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Reservation</p>
          <h2 className="mt-4 text-4xl leading-tight text-cream sm:text-5xl">
            BOOK YOUR TABLE BY THE FIRE
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream/70">
            Weekends fill fast — especially the corner booths. Send a request and our team confirms by
            phone, or just call us directly.
          </p>
          <a
            href={PHONE_HREF}
            className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-md bg-primary px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-flame hover:brightness-110 sm:w-auto"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call {PHONE}
          </a>
        </Reveal>

        <Reveal delay={120}>
          <form
            className="grid gap-4 rounded-lg border border-border bg-espresso/70 p-6 sm:grid-cols-2 sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitting(true);
              const form = e.currentTarget;
              setTimeout(() => {
                setSubmitting(false);
                form.reset();
                toast.success("Reservation request sent", {
                  description: "Our team will call you shortly to confirm.",
                });
              }, 600);
            }}
          >
            <div className="sm:col-span-2">
              <label htmlFor="name" className="text-xs uppercase tracking-wider text-cream/60">
                Full name
              </label>
              <input id="name" name="name" required placeholder="Your name" className={`mt-2 ${field}`} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone" className="text-xs uppercase tracking-wider text-cream/60">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="01XXXXXXXXX"
                className={`mt-2 ${field}`}
              />
            </div>
            <div>
              <label htmlFor="date" className="text-xs uppercase tracking-wider text-cream/60">
                Date
              </label>
              <input id="date" name="date" type="date" required className={`mt-2 ${field}`} />
            </div>
            <div>
              <label htmlFor="time" className="text-xs uppercase tracking-wider text-cream/60">
                Time
              </label>
              <input id="time" name="time" type="time" required className={`mt-2 ${field}`} />
            </div>
            <div>
              <label htmlFor="party" className="text-xs uppercase tracking-wider text-cream/60">
                Party size
              </label>
              <select id="party" name="party" className={`mt-2 ${field}`} defaultValue="2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "guest" : "guests"}
                  </option>
                ))}
                <option value="9+">9+ guests</option>
              </select>
            </div>
            <div>
              <label htmlFor="branch" className="text-xs uppercase tracking-wider text-cream/60">
                Location
              </label>
              <select id="branch" name="branch" className={`mt-2 ${field}`} defaultValue="Banani">
                <option value="Banani">Banani</option>
                <option value="Gulshan">Gulshan</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-2 rounded-md bg-primary py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-flame hover:brightness-110 disabled:opacity-60 sm:col-span-2"
            >
              {submitting ? "Sending…" : "Request Reservation"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
