import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { Gallery } from "@/components/Gallery";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Offers } from "@/components/Offers";
import { Reservation } from "@/components/Reservation";
import { Locations } from "@/components/Locations";
import { Footer } from "@/components/Footer";
import { PHONE_HREF } from "@/lib/site-data";

const TITLE = "Texas Flame — Best Steakhouse in Dhaka | Banani & Gulshan";
const DESCRIPTION =
  "Feel the true taste of Texas. Flame-grilled tomahawk, ribeye and porterhouse steaks at Texas Flame steakhouse Dhaka — Banani & Gulshan. Reserve a table.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Texas Flame",
          servesCuisine: ["Steakhouse", "American", "Texan"],
          priceRange: "৳৳৳",
          telephone: "+8801722233926",
          url: "https://texasflamebd.com/",
          slogan: "Feel the True Taste of Texas.",
          address: [
            {
              "@type": "PostalAddress",
              streetAddress:
                "Point Eleven (BFC Building), 8th Floor (Lift 7), House No. 25, Road 11, Banani",
              addressLocality: "Dhaka",
              postalCode: "1213",
              addressCountry: "BD",
            },
            {
              "@type": "PostalAddress",
              streetAddress: "Gulshan",
              addressLocality: "Dhaka",
              addressCountry: "BD",
            },
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="bg-charcoal">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <WhyUs />
        <Testimonials />
        <Offers />
        <Reservation />
        <Locations />
      </main>
      <Footer />

      {/* Mobile sticky reserve bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-charcoal/95 p-3 backdrop-blur-md lg:hidden">
        <div className="flex gap-3">
          <a
            href={PHONE_HREF}
            className="flex-1 rounded-md border border-primary/60 py-3 text-center text-xs font-bold uppercase tracking-wider text-primary"
          >
            Call Us
          </a>
          <a
            href="#reservation"
            className="flex-[1.4] rounded-md bg-primary py-3 text-center text-xs font-bold uppercase tracking-wider text-primary-foreground"
          >
            Reserve a Table
          </a>
        </div>
      </div>

      <Toaster />
    </div>
  );
}
