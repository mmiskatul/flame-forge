export const PHONE = "+880 1722-233926";
export const PHONE_HREF = "tel:+8801722233926";

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1920&q=80",
  about:
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=80",
      alt: "Tomahawk steak Dhaka searing over an open flame grill at Texas Flame",
    },
    {
      src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
      alt: "Plated ribeye steak with sides at our steakhouse Dhaka dining room",
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
      alt: "Dark rustic steakhouse interior with leather booths in Banani, Dhaka",
    },
    {
      src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80",
      alt: "Flame grill closeup of a Texan steak Banani guests order most",
    },
    {
      src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=80",
      alt: "Sharing platter of beef and chicken at Texas Flame steakhouse Dhaka",
    },
    {
      src: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=900&q=80",
      alt: "Cowboy-themed warm lighting inside the Texas Flame Gulshan branch",
    },
  ],
};

export type MenuItem = { name: string; desc: string; price: string; tag?: string };
export type MenuCategory = { id: string; label: string; blurb: string; items: MenuItem[] };

export const MENU: MenuCategory[] = [
  {
    id: "prime",
    label: "Prime Cuts",
    blurb: "Hand-selected, dry-seasoned, seared over open fire.",
    items: [
      {
        name: "Tomahawk Steak",
        desc: "Colossal bone-in ribeye, charred crust, blushing centre. Built to be photographed before it's devoured.",
        price: "৳---",
        tag: "Showstopper",
      },
      {
        name: "Ribeye Steak",
        desc: "Heavily marbled and deeply beefy — the cut our regulars order twice.",
        price: "৳---",
      },
      {
        name: "Porterhouse Steak",
        desc: "Tenderloin and strip in one bone-in cut. Two textures, one plate.",
        price: "৳---",
      },
      {
        name: "Filet Mignon",
        desc: "Butter-tender centre-cut tenderloin, finished with smoked flame butter.",
        price: "৳---",
      },
      { name: "T-Bone", desc: "Big bone, bigger flavour, crusted in Texan spice rub.", price: "৳---" },
      { name: "Sirloin", desc: "Lean, firm, and confidently seasoned — a purist's steak.", price: "৳---" },
    ],
  },
  {
    id: "tidal",
    label: "Tidal Taste",
    blurb: "From the grill and the pan — seafood with a Texan backbone.",
    items: [
      {
        name: "Surf & Turf Steak",
        desc: "Flame-grilled steak paired with buttery garlic prawns. Our signature crossover.",
        price: "৳---",
        tag: "Signature",
      },
      { name: "Grilled Salmon Steak", desc: "Charred skin, silky flesh, citrus-herb glaze.", price: "৳---" },
      { name: "Pan-Seared Prawns", desc: "Smoked paprika butter, lemon, crackled sea salt.", price: "৳---" },
      { name: "Grilled Fish Fillet", desc: "Fresh catch over the grate with chargrilled greens.", price: "৳---" },
    ],
  },
  {
    id: "platters",
    label: "Platters",
    blurb: "Built for sharing — bring the whole table.",
    items: [
      {
        name: "Double Trouble Platter",
        desc: "Mixed beef and chicken, boldly seasoned, piled high. Serves 2+.",
        price: "৳---",
        tag: "Crowd favourite",
      },
      { name: "Back Ribs", desc: "Slow-cooked, smoke-kissed, glazed and finished on the flame.", price: "৳---" },
      { name: "Texas Flame Grand Platter", desc: "Steaks, ribs, wings and sides for groups of 4–5.", price: "৳---" },
    ],
  },
  {
    id: "appetizers",
    label: "Appetizers",
    blurb: "Start smoky.",
    items: [
      { name: "Smoked Buffalo Wings", desc: "Fire-glazed, blue-cheese dip on the side.", price: "৳---" },
      { name: "Loaded Nachos", desc: "Beef chili, molten cheese, jalapeño heat.", price: "৳---" },
      { name: "Cheesy Garlic Bread", desc: "Griddled, herbed, unapologetically buttery.", price: "৳---" },
    ],
  },
  {
    id: "econo",
    label: "Econo Cuts",
    blurb: "Same fire, friendlier price.",
    items: [
      { name: "Econo Beef Steak", desc: "Grill-marked beef steak with rice or fries.", price: "৳---" },
      { name: "Chopped Steak", desc: "Seasoned beef patty, caramelised onions, pan gravy.", price: "৳---" },
      { name: "Steak Sandwich", desc: "Sliced steak, smoked mayo, toasted bun.", price: "৳---" },
    ],
  },
  {
    id: "chickenista",
    label: "Chickenista",
    blurb: "Chicken, done the Texan way.",
    items: [
      { name: "Grilled Chicken Steak", desc: "Flattened breast, herb marinade, mushroom sauce.", price: "৳---" },
      { name: "Chicken Chimichurri", desc: "Charred chicken with bright green herb sauce.", price: "৳---" },
      { name: "Crispy Chicken Platter", desc: "Golden fried chicken with slaw and fries.", price: "৳---" },
    ],
  },
  {
    id: "sides",
    label: "Sides",
    blurb: "The supporting cast that steals scenes.",
    items: [
      { name: "Mashed Potato", desc: "Whipped smooth with cream and black pepper.", price: "৳---" },
      { name: "Mexican Rice", desc: "Tomato-spiced, fluffy, made for mopping up jus.", price: "৳---" },
      { name: "Poutine", desc: "Crisp fries, cheese curds, rich beef gravy.", price: "৳---" },
    ],
  },
  {
    id: "beverages",
    label: "Beverages",
    blurb: "Cool it down.",
    items: [
      { name: "Texas Lemonade", desc: "Hand-pressed lemon, mint, crushed ice.", price: "৳---" },
      { name: "Classic Milkshakes", desc: "Thick vanilla, chocolate or strawberry.", price: "৳---" },
      { name: "Iced Coffee", desc: "Dark roast over ice with a caramel edge.", price: "৳---" },
    ],
  },
];

export const LOCATIONS = [
  {
    name: "Banani Branch",
    address:
      "Point Eleven (BFC Building), 8th Floor (Lift 7), House No. 25, Road 11, Banani, Dhaka 1213",
    hours: "Daily · 12:00 PM – 11:00 PM",
    note: "",
  },
  {
    name: "Gulshan Branch",
    address: "Gulshan, Dhaka — exact address to be confirmed",
    hours: "Daily · 12:00 PM – 11:00 PM",
    note: "Address pending confirmation.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "The tomahawk is the best steak I've had in Bangladesh. Perfect crust, proper medium-rare, and big enough for two.",
    name: "Rakib H.",
    detail: "Banani",
  },
  {
    quote:
      "Ordered the ribeye and the back ribs — both seasoned properly bold, not shy. Portions are genuinely huge.",
    name: "Tasnim A.",
    detail: "Gulshan",
  },
  {
    quote:
      "Double Trouble Platter fed three of us comfortably. Staff kept checking in without hovering. Great date-night pick.",
    name: "Imran & Nusrat",
    detail: "Banani",
  },
  {
    quote:
      "Smoky, warm, cowboy-ish interior and steaks that actually taste flame-grilled. My default steakhouse in Dhaka now.",
    name: "Sabbir R.",
    detail: "Gulshan",
  },
];
