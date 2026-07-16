import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ProductCard, type Product } from "@/components/products/ProductCard";



const featuredByCategory: Record<string, Product[]> = {

Extensions: [
  { title: "Curly Auburn Extension", price: "$80.00", img: "/assets/product-1.jpg", tag: "New" },
  { title: "Wavy Slavic Tape-In Hair Extensions", price: "$119.00", img: "/assets/product-2.jpg", tag: "Best" },
  { title: "Hair Extensions | From Thin to Thick Hair", price: "$149.00", img: "/assets/product-3.jpg", tag: "Hot" },
  { title: "32-Inch Ombre Clip-On Ponytail", price: "$99.00", img: "/assets/product-4.jpg", tag: "New" },
  { title: "Tape-In Extensions", price: "$89.00", img: "/assets/product-5.jpg", tag: "New" },
],

Wigs: [
  { title: "Water Wave 5x5 Closure HD Lace Glueless Free Part Long Wig", price: "$249.00", img: "/assets/program-1.jpg", tag: "New" },
  { title: " Glueless Custom Wigs ", price: "$279.00", img: "/assets/program-2.jpg", tag: "Hot" },
  { title: "Silk Straight HD Lace", price: "$299.00", img: "/assets/program-3.jpg", tag: "Best" },
  { title: "Body Wave Glueless", price: "$229.00", img: "/assets/collection-2.jpg", tag: "New" },
],

"Hair Care": [
  { title: "Argan Repair Shampoo", price: "$28.00", img: "/assets/collection-1.jpg", tag: "Best" },
  { title: "GOT2B Glued", price: "$32.00", img: "/assets/collection-3.jpg", tag: "New" },
  { title: "Hair Vitamins", price: "$44.00", img: "/assets/mission-5.jpg", tag: "Hot" },
  { title: "Oil Control Shampoo Refreshing ", price: "$36.00", img: "/assets/mission-6.png", tag: "New" },
],




Accessories: [
  { title: "Hair Brush Set with Hair Spray Bottle", price: "$24.00", img: "/assets/accessories6.jpg", tag: "New" },
  { title: "Gold Hair Clip", price: "$18.00", img: "/assets/accessories7.jpg", tag: "Hot" },
  { title: "Hair Straightener LCD", price: "$22.00", img: "/assets/accessories8.jpg", tag: "Best" },
  { title: "Elite Hair Steamer", price: "$16.00", img: "/assets/accessories9.jpg", tag: "New" },
],

Braiding: [
  { title: "5-Pack Synthetic Jumbo Braided Hair Extensions", price: "$120.00", img: "/assets/braiding.png", tag: "Popular" },
  { title: "Curly Fulani Boho Deep Wave Crochet Hypoallergenic", price: "$95.00", img: "/assets/braiding4.png", tag: "Trending" },
  { title: "Pre-Stretched Braiding Hair", price: "$150.00", img: "/assets/braiding1.png", tag: "Best Seller" },
  { title: "braiding2", price: "$65.00", img: "/assets/braiding2.png", tag: "New" },
],

Spa: [
  { title: "Swedish Full Body Massage", price: "$85.00", img: "/assets/sweden.jpg", tag: "Relaxing" },
  { title: "Deep Cleansing Facial", price: "$70.00", img: "/assets/Facial.jpg", tag: "Popular" },
  { title: "Aromatherapy Spa Package", price: "$110.00", img: "/assets/Aromatherapy.jpg", tag: "Best Value" },
  { title: "Luxury Manicure & Pedicure", price: "$55.00", img: "/assets/ManicurePedicure.jpg", tag: "New" },
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
