import { Link } from "@tanstack/react-router";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.png";
import collection3 from "@/assets/collection-2.jpg";

const collections = [
  { title: "Shampoo", desc: "Nourishing formulas for every hair type", img: collection1 },
  { title: "Hair Coloring", desc: "Rich, radiant colors that last", img: collection2 },
  { title: "Conditioner", desc: "Deep hydration and silky finish", img: collection3 },
];

export function FeaturedCollections() {
  return (
    <section className="relative bg-[image:radial-gradient(ellipse_at_top,var(--cream),transparent_60%)] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Curated for you</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Featured Collections</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            A thoughtful selection of our most-loved formulas and finishes — everything you need for salon-quality hair at home.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {collections.map((c) => (
            <article key={c.title} className="group flex flex-col overflow-hidden rounded-sm bg-card shadow-[0_10px_40px_-20px_rgba(0,0,0,0.15)]">
              <div className="overflow-hidden">
                <img src={c.img} alt={c.title} loading="lazy" width={640} height={768}
                  className="h-[360px] lg:h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-2xl">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                <Link to="/shop" className="mt-5 inline-flex rounded-sm bg-gold px-5 py-2 text-xs font-medium uppercase tracking-widest text-gold-foreground transition hover:brightness-110">
                  Shop Now
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
