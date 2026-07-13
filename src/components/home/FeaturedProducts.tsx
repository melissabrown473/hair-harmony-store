import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ProductCard, type Product } from "@/components/products/ProductCard";

import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import accessoriesImg from "@/assets/accessories.jpg";
import mission1 from "@/assets/mission-1.jpg";
import mission2 from "@/assets/mission-2.jpg";
import program1 from "@/assets/program-1.jpg";
import program2 from "@/assets/program-2.jpg";
import program3 from "@/assets/program-3.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const featuredByCategory: Record<string, Product[]> = {
  Extensions: [
    { title: "Curly Auburn Extension", price: "$89.00", img: product1, tag: "New" },
    { title: "Silky Black Straight", price: "$119.00", img: product2, tag: "Best" },
    { title: "Platinum Blonde 22\"", price: "$149.00", img: product3, tag: "Hot" },
    { title: "Caramel Wavy Bundle", price: "$99.00", img: product4, tag: "New" },
  ],
  Wigs: [
    { title: "Loose Wave Lace Wig", price: "$249.00", img: program1, tag: "New" },
    { title: "Deep Curl Full Wig", price: "$279.00", img: program2, tag: "Hot" },
    { title: "Silk Straight HD Lace", price: "$299.00", img: program3, tag: "Best" },
    { title: "Body Wave Glueless", price: "$229.00", img: collection2, tag: "New" },
  ],
  "Hair Care": [
    { title: "Argan Repair Shampoo", price: "$28.00", img: collection1, tag: "Best" },
    { title: "Silk Conditioner", price: "$32.00", img: collection3, tag: "New" },
    { title: "Keratin Hair Mask", price: "$44.00", img: mission1, tag: "Hot" },
    { title: "Rose Hair Oil", price: "$36.00", img: mission2, tag: "New" },
  ],
  Accessories: [
    { title: "Pearl Hair Pins Set", price: "$24.00", img: accessoriesImg, tag: "New" },
    { title: "Gold Hair Clip", price: "$18.00", img: blog1, tag: "Hot" },
    { title: "Tortoise Comb", price: "$22.00", img: blog2, tag: "Best" },
    { title: "Silk Scrunchie Trio", price: "$16.00", img: blog3, tag: "New" },
  ],
};

export function FeaturedProducts() {
  const categories = Object.keys(featuredByCategory);
  const [active, setActive] = useState<string>(categories[0]);

  return (
    <section id="shop" className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Bestsellers</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Featured Products</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Browse our favorites by category — extensions, wigs, care and accessories chosen by our stylists.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-xs font-medium uppercase tracking-widest transition ${
                active === cat
                  ? "bg-ink text-primary-foreground shadow-md"
                  : "border border-border bg-background text-foreground/70 hover:border-gold hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredByCategory[active].map((p) => (
            <ProductCard key={p.title} p={p} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 rounded-sm border border-ink bg-transparent px-8 py-3 text-xs font-medium uppercase tracking-widest text-ink transition hover:bg-ink hover:text-primary-foreground"
          >
            See More Products →
          </Link>
        </div>
      </div>
    </section>
  );
}
