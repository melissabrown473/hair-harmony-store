import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Star, ShoppingBag, Search } from "lucide-react";
import { SiteHeader, SiteFooter, ProductCard } from "./index";

import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";
import program1 from "@/assets/program-1.jpg";
import program2 from "@/assets/program-2.jpg";
import program3 from "@/assets/program-3.jpg";
import mission1 from "@/assets/mission-1.jpg";
import mission2 from "@/assets/mission-2.jpg";
import accessoriesImg from "@/assets/accessories.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import bannerHair from "@/assets/banner-hair.jpg";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Premium Hair, Wigs & Accessories — Hair Harmony Store" },
      { name: "description", content: "Shop our full collection of Remy hair extensions, lace wigs, hair care, and hair accessories. Curly, straight, wavy — every texture and length." },
      { property: "og:title", content: "Shop — Hair Harmony Store" },
      { property: "og:description", content: "Extensions, wigs, care and hair accessories, curated for every texture and every occasion." },
    ],
  }),
  component: ShopPage,
});

type Product = { title: string; price: string; img: string; tag?: string; category: string };

const CATEGORIES = [
  "All",
  "Straight Hair",
  "Wavy Hair",
  "Curly Hair",
  "Coily Hair",
  "Lace Wigs",
  "Hair Care",
  "Hair Accessories",
] as const;

const ALL_PRODUCTS: Product[] = [
  // Straight
  { title: "Silky Black Straight 20\"", price: "$119.00", img: product2, tag: "Best", category: "Straight Hair" },
  { title: "Platinum Blonde Straight 22\"", price: "$149.00", img: product3, tag: "Hot", category: "Straight Hair" },
  { title: "Chocolate Brown Straight 18\"", price: "$109.00", img: collection2, category: "Straight Hair" },
  { title: "Auburn Straight Silk 24\"", price: "$159.00", tag: "New", img: mission2, category: "Straight Hair" },

  // Wavy
  { title: "Caramel Wavy Bundle 22\"", price: "$99.00", img: product4, tag: "New", category: "Wavy Hair" },
  { title: "Beach Wave Ombre 20\"", price: "$129.00", img: collection3, category: "Wavy Hair" },
  { title: "Honey Body Wave 18\"", price: "$119.00", tag: "Hot", img: program1, category: "Wavy Hair" },
  { title: "Golden Loose Wave 24\"", price: "$149.00", img: mission1, category: "Wavy Hair" },

  // Curly
  { title: "Curly Auburn Extension 18\"", price: "$89.00", img: product1, tag: "New", category: "Curly Hair" },
  { title: "Deep Curl Natural 20\"", price: "$139.00", img: program2, tag: "Best", category: "Curly Hair" },
  { title: "Spiral Curl Bounce 16\"", price: "$99.00", img: collection1, category: "Curly Hair" },

  // Coily
  { title: "Kinky Coily Afro 14\"", price: "$129.00", tag: "New", img: program2, category: "Coily Hair" },
  { title: "4C Natural Coil 16\"", price: "$139.00", img: mission1, category: "Coily Hair" },

  // Wigs
  { title: "HD Lace Straight Wig", price: "$299.00", img: program3, tag: "Best", category: "Lace Wigs" },
  { title: "Loose Wave Lace Front", price: "$249.00", img: program1, tag: "Hot", category: "Lace Wigs" },
  { title: "Deep Curl Full Lace Wig", price: "$279.00", img: program2, category: "Lace Wigs" },
  { title: "Body Wave Glueless Wig", price: "$229.00", img: collection2, tag: "New", category: "Lace Wigs" },

  // Hair Care
  { title: "Argan Repair Shampoo", price: "$28.00", img: collection1, tag: "Best", category: "Hair Care" },
  { title: "Silk Hydration Conditioner", price: "$32.00", img: collection3, category: "Hair Care" },
  { title: "Keratin Hair Mask", price: "$44.00", tag: "Hot", img: mission1, category: "Hair Care" },
  { title: "Rose Nourishing Hair Oil", price: "$36.00", tag: "New", img: mission2, category: "Hair Care" },

  // Accessories
  { title: "Pearl Hair Pins Set", price: "$24.00", img: accessoriesImg, tag: "New", category: "Hair Accessories" },
  { title: "Gold Hair Clip Duo", price: "$18.00", img: blog1, tag: "Hot", category: "Hair Accessories" },
  { title: "Tortoise Wide-Tooth Comb", price: "$22.00", img: blog2, category: "Hair Accessories" },
  { title: "Silk Scrunchie Trio", price: "$16.00", img: blog3, tag: "Best", category: "Hair Accessories" },
  { title: "Bridal Pearl Tiara", price: "$68.00", tag: "New", img: accessoriesImg, category: "Hair Accessories" },
  { title: "Vintage Barrette Set", price: "$28.00", img: blog1, category: "Hair Accessories" },
];

function ShopPage() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return ALL_PRODUCTS.filter((p) => {
      const matchCat = active === "All" || p.category === active;
      const matchQ = !query || p.title.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQ;
    });
  }, [active, query]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Page Hero */}
      <section className="relative overflow-hidden bg-ink text-primary-foreground">
        <img src={bannerHair} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">The Boutique</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">Shop All Hair</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-primary-foreground/70">
            Every texture, every length, every finish. Ethically sourced Remy human hair, luxury wigs, care and accessories.
          </p>
        </div>
      </section>

      {/* Toolbar */}
      <div className="sticky top-[68px] z-30 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-widest transition ${
                  active === c
                    ? "bg-ink text-primary-foreground"
                    : "border border-border bg-background text-foreground/70 hover:border-gold hover:text-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 lg:w-72">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products…"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
        </div>
      </div>

      {/* Products grid */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="font-display text-2xl">
              {active}{" "}
              <span className="ml-2 text-sm text-muted-foreground">({filtered.length} items)</span>
            </h2>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-lg border border-dashed border-border p-16 text-center text-muted-foreground">
              No products match your search.
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((p) => (
                <ProductCard key={p.title} p={p} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Category quick chips as breadcrumbs at bottom */}
      <section className="border-t border-border bg-cream py-14">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Not sure where to start?</p>
          <h3 className="mt-2 font-display text-3xl">Browse by texture</h3>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "Straight", img: product2 },
              { label: "Wavy", img: product4 },
              { label: "Curly", img: product1 },
              { label: "Coily", img: program2 },
            ].map((t) => (
              <button
                key={t.label}
                onClick={() => setActive(`${t.label} Hair` as (typeof CATEGORIES)[number])}
                className="group overflow-hidden rounded-sm bg-background text-left"
              >
                <img src={t.img} alt={t.label} className="h-40 w-full object-cover transition group-hover:scale-105" />
                <div className="p-3 text-center font-display text-lg">{t.label}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
