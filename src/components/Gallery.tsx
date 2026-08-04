import { IMAGES } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function Gallery() {
  return (
    <section id="gallery" className="bg-espresso py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Gallery</p>
          <h2 className="mt-4 text-4xl leading-tight text-cream sm:text-5xl">STRAIGHT OFF THE GRATE</h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {IMAGES.gallery.map((img, i) => (
            <Reveal
              key={img.src}
              delay={i * 70}
              className={i === 0 || i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <div className="group overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-108 lg:h-72"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
