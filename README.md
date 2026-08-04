# Flame Forge

# Texas Flame — Website Generation Prompt

Real details below (menu categories, dishes, locations, contact) pulled from
their current site/socials/reviews — so the AI tool has real content to work
with instead of inventing generic placeholders.

Copy everything in the code block into Lovable, v0, Bolt, or any similar AI
website builder.

```
Build a modern, high-converting single-page website for "Texas Flame" — a
premium Texan-style steakhouse with two locations in Dhaka, Bangladesh
(Banani and Gulshan). Tagline: "Feel the True Taste of Texas."

BRAND / VIBE
- Bold, smoky, upscale-cowboy aesthetic: dark charred wood, leather, iron, and
  fire — modern and premium, not kitschy or cluttered.
- Color palette: charcoal black (#0F0D0C) and deep espresso brown (#241A15)
  as base, flame orange/red (#E8551B–#FF7A1A) and warm amber (#F4A623) as
  accent, off-white/cream (#F5EFE6) for text on dark sections.
- Typography: a bold condensed serif or slab-serif for headings (rugged,
  confident, Texan feel — e.g. something in the style of "Bebas Neue" or
  "Anton" for display, "Playfair Display" for elegant subheads), paired with
  a clean modern sans-serif for body text (e.g. "Inter" or "Manrope"). Large,
  confident headline sizes.
- Subtle ember/fire gradient accents, wood-grain or grill-grate textures used
  sparingly as section backgrounds — never overwhelming, keep it premium.

STRUCTURE / SECTIONS (single page, smooth-scroll nav)

1. Sticky navbar — "TEXAS FLAME" logo/wordmark, links to Home / Menu / About /
   Gallery / Reservation / Locations / Contact, plus a prominent amber
   "Reserve a Table" button. Transparent over hero, solid charcoal on scroll.

2. Hero — full-bleed image or looping video of a flame-grilled tomahawk steak
   with a dark gradient overlay. Headline: "Feel the True Taste of Texas."
   Subheadline: bold, hearty Texan-style steaks, flame-grilled to perfection
   in the heart of Dhaka. Two CTAs: "Reserve a Table" (filled amber button)
   and "View Menu" (outlined button). Small trust row underneath: star
   rating + "Rated Dhaka's Best Steakhouse."

3. About/Story — two-column layout (image + text). Copy angle: Texas Flame
   brings authentic West Texas-style steaks to Dhaka — top-quality cuts,
   expert flame-grilling, rustic-meets-modern décor with cowboy-themed
   details and a warm, welcoming atmosphere. Mention it's become one of
   Dhaka's most-loved steakhouses, known for portion size and bold seasoning.

4. Menu highlights — tabbed or grid layout across these real categories,
   each with 3-4 signature items, short mouthwatering descriptions, and a
   price placeholder ("৳---"):
   - PRIME CUTS: Ribeye Steak, Tomahawk Steak (showstopper — colossal bone-in
     cut), Porterhouse Steak (tenderloin + strip in one cut), Filet Mignon,
     T-Bone, Sirloin
   - TIDAL TASTE (seafood): grilled/pan-seared seafood selections, and the
     signature Surf & Turf Steak (steak + seafood combo)
   - PLATTERS (built for sharing): Double Trouble Platter (mixed beef &
     chicken, well-seasoned, serves 2+), Back Ribs, larger platters for
     groups of 4-5
   - ALSO INCLUDE: Appetizers, Econo Cuts (budget-friendly steaks),
     Chickenista (chicken-based mains), Beverages, and Sides (mashed potato,
     Mexican rice, poutine)
   Include a "Download Full Menu (PDF)" button.

5. Gallery — masonry/grid of food and interior photography (steaks on the
   grill, plated tomahawk, cozy cowboy-themed interior, flame close-ups) with
   a subtle hover-zoom effect.

6. Why Texas Flame — 3-4 icon-based feature blocks: Authentic Texas-Style
   Recipes, Premium & Fresh Cuts Only, Expert Flame-Grilling, Rustic-Yet-
   Elegant Ambience — Perfect for Dates, Family Nights & Celebrations.

7. Testimonials — rotating carousel of 3-4 real-feeling customer quotes
   praising the tomahawk/ribeye/back ribs, generous portions, bold
   seasoning, and service (e.g. "best steak I've had in Bangladesh").

8. Offers/Events banner — a slot for seasonal promotions (Texas Flame runs
   festival discounts like a Bangla New Year steak/seafood offer up to 33%
   off) — style it as a bold, limited-time strip so it's easy for the owner
   to update text/dates later.

9. Reservation section — simple form (name, phone, date, time, party size,
   location preference: Banani or Gulshan) plus a big tap-to-call button for
   +880 1722-233926.

10. Locations/Contact — two location cards side by side:
    - Banani: Point Eleven (BFC Building), 8th Floor (Lift 7), House No. 25,
      Road 11, Banani, Dhaka 1213
    - Gulshan location (label as "Gulshan Branch" — address to be confirmed
      by the owner)
    Include an embedded Google Map for the Banani location, opening hours,
    phone number, and social links (Facebook & Instagram: @texasflamebd).

11. Footer — logo, quick links, social icons, both addresses, copyright.

INTERACTIONS / POLISH
- Smooth scroll-triggered fade/slide-in animations on each section (subtle,
  not distracting).
- Sticky "Reserve a Table" button/bar that stays visible on scroll, especially
  on mobile (thumb-reachable at the bottom).
- Fully responsive, mobile-first — hamburger nav on small screens, menu tabs
  become a horizontal scroll or accordion on mobile.
- Fast-loading, optimized images, generous whitespace, no visual clutter —
  let the food photography be the star.
- Subtle hover states: buttons glow amber/orange, menu cards lift slightly
  with a soft shadow, gallery images zoom gently.
- Add basic SEO: descriptive page title ("Texas Flame — Best Steakhouse in
  Dhaka | Banani & Gulshan"), meta description, and alt text on all images
  built around "steakhouse Dhaka," "Texan steak Banani," "tomahawk steak
  Dhaka."

TECHNICAL
- Use React + Tailwind CSS.
- Component-based structure: Navbar, Hero, About, Menu, Gallery, WhyUs,
  Testimonials, Offers, Reservation, Locations, Footer.
- Use placeholder images from Unsplash (search terms: "grilled tomahawk
  steak", "steakhouse interior dark", "flame grill closeup", "ribeye steak
  plated") until real photography is supplied.
- Keep copy concise, confident, and appetite-driving — avoid generic stock
  restaurant phrases like "delicious food in a great atmosphere."

GOAL
The result should feel like a premium steakhouse brand site — the kind that
makes someone crave a steak and book a table on the spot — not a generic
restaurant template.
```

## A few notes before you run it
- **Swap in real photos** of the food/interior once generated — placeholder images will only get you so far toward the "premium" feel; food photography is what actually sells a steakhouse site.
- Confirm the **Gulshan branch address** with the owner before publishing — I found it referenced but not the exact address, so the prompt flags it as a placeholder rather than guessing.
- If the tool asks for a starting template, pick something dark-themed/restaurant if offered — saves the AI some guesswork.
- You can trim sections you don't need — e.g. drop the built-in reservation form if you'd rather just link out to a booking platform like ReserveIt.
- Good follow-up prompts once you have a first draft:
  - *"Make the hero more dramatic — full-screen looping video of flames/grilling, darker overlay, bigger type."*
  - *"Add a subtle animated flame/ember particle effect near the hero CTA buttons."*
  - *"Make the menu section tabbed instead of one long grid, with a smooth tab-switch animation."*

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b2faefb2-dd2c-498f-be83-10d6c1a7dcc6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
