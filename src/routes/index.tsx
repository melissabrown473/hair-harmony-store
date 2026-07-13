import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Search, ShoppingBag, User, Star, Facebook, Instagram, Twitter, Youtube, Quote, Sparkles, Mail, ChevronLeft, ChevronRight } from "lucide-react";

import heroModel from "@/assets/hero-model.jpg";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import accessoriesImg from "@/assets/accessories.jpg";
import bannerHair from "@/assets/banner-hair.jpg";
import mission1 from "@/assets/mission-1.jpg";
import mission2 from "@/assets/mission-2.jpg";
import program1 from "@/assets/program-1.jpg";
import program2 from "@/assets/program-2.jpg";
import program3 from "@/assets/program-3.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const collections = [
  { title: "Shampoo", desc: "Nourishing formulas for every hair type", img: collection1 },
  { title: "Hair Coloring", desc: "Rich, radiant colors that last", img: collection2 },
  { title: "Conditioner", desc: "Deep hydration and silky finish", img: collection3 },
];

type Product = { title: string; price: string; img: string; tag?: string };

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

const programs = [
  { title: "Long Wavy Hair", desc: "Voluminous body and shine", img: program1 },
  { title: "Natural Curly Hair", desc: "Defined, bouncy curls", img: program2 },
  { title: "Glossy Straight Hair", desc: "Sleek, silk-smooth finish", img: program3 },
];

const blogPosts = [
  { date: "MAR 08", title: "The complete guide to hair extension care", img: blog1 },
  { date: "MAR 12", title: "How to choose the right hair color for you", img: blog2 },
  { date: "MAR 18", title: "Salon secrets for red-carpet worthy waves", img: blog3 },
];

const testimonials = [
  { name: "Emma R.", role: "Verified Buyer", text: "Hair Harmony completely transformed my hair. The extensions blend seamlessly and feel like my own — I honestly can't tell where mine ends and theirs begins." },
  { name: "Sophia L.", role: "Stylist", text: "Beautiful quality, beautiful packaging, beautiful people. As a professional stylist, this is the only brand I recommend to my clients now." },
  { name: "Amelia W.", role: "Bridal Client", text: "The accessories collection is exquisite — I wore the pearl pins for my wedding and got compliments every single time I turned around." },
];

function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group relative overflow-hidden rounded-sm bg-background transition hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.35)]">
      <div className="relative overflow-hidden bg-muted">
        <img src={p.img} alt={p.title} loading="lazy" width={640} height={768}
          className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        {p.tag && (
          <span className="absolute left-3 top-3 rounded-sm bg-gold px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-gold-foreground">{p.tag}</span>
        )}
        {/* Hover overlay + Add to Cart */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <button
          type="button"
          className="pointer-events-auto absolute inset-x-4 bottom-4 translate-y-4 rounded-sm bg-gold py-2.5 text-[11px] font-medium uppercase tracking-widest text-gold-foreground opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 hover:brightness-110"
        >
          <span className="inline-flex items-center justify-center gap-2">
            <ShoppingBag className="h-3.5 w-3.5" /> Add to Cart
          </span>
        </button>
      </div>
      <div className="p-4 text-center">
        <h4 className="font-display text-lg">{p.title}</h4>
        <div className="mt-1 flex items-center justify-center gap-0.5 text-gold">
          {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
        </div>
        <p className="mt-1 text-sm font-medium">{p.price}</p>
      </div>
    </article>
  );
}

function Home() {
  const categories = Object.keys(featuredByCategory);
  const [active, setActive] = useState<string>(categories[0]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top strip */}
      <div className="bg-ink text-primary-foreground text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <span className="opacity-80">Welcome to Hair Harmony Store — Free shipping on orders over $150</span>
          <div className="hidden items-center gap-4 opacity-80 md:flex">
            <a href="#" aria-label="Facebook"><Facebook className="h-3.5 w-3.5" /></a>
            <a href="#" aria-label="Instagram"><Instagram className="h-3.5 w-3.5" /></a>
            <a href="#" aria-label="Twitter"><Twitter className="h-3.5 w-3.5" /></a>
            <a href="#" aria-label="Youtube"><Youtube className="h-3.5 w-3.5" /></a>
            <span className="ml-2 rounded bg-gold px-2 py-0.5 text-gold-foreground">EN</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 py-16 md:grid-cols-2 md:py-24">
          <div className="relative z-10">
            <span className="mb-4 inline-block text-xs uppercase tracking-[0.3em] text-gold">Premium Hair Boutique</span>
            <h1 className="font-display text-5xl leading-[1.05] md:text-7xl">
              Look Great <br />with <em className="not-italic text-gold">Extensions</em>
            </h1>
            <ul className="mt-8 space-y-2 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> 100% Remy Human Hair</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> Hand-Tied & Tangle Free</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> Cruelty-Free Sourcing</li>
            </ul>
            <div className="mt-8 flex gap-3">
              <Link to="/shop" className="inline-flex items-center rounded-sm bg-gold px-6 py-3 text-sm font-medium text-gold-foreground transition hover:brightness-110">
                Shop Collection
              </Link>
              <Link to="/about" className="inline-flex items-center rounded-sm border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground/90 transition hover:bg-primary-foreground/10">
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroModel}
              alt="Woman with long flowing extensions"
              width={1400}
              height={1000}
              className="h-[480px] w-full rounded-sm object-cover md:h-[560px]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-transparent to-transparent md:from-ink/70" />
          </div>
        </div>
      </section>

      {/* Featured Collections */}
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
                    className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
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

      {/* Hair Care + Stat */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 pb-20 md:grid-cols-2">
        <div className="flex flex-col justify-center rounded-sm bg-ink p-10 text-primary-foreground md:p-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Every Strand Matters</p>
          <h3 className="mt-3 font-display text-4xl md:text-5xl">Hair Care</h3>
          <p className="mt-4 max-w-md text-sm text-primary-foreground/70">
            Thoughtful formulations with botanical oils, keratin, and vitamin complexes. Made to restore, strengthen and give back the natural shine your hair deserves.
          </p>
          <Link to="/shop" className="mt-8 w-max rounded-sm bg-gold px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-gold-foreground transition hover:brightness-110">
            Explore Care
          </Link>
        </div>
        <div className="relative flex flex-col items-center justify-center rounded-sm border border-border bg-card p-10 text-center md:p-14">
          <div className="grid h-24 w-24 place-items-center rounded-full border-2 border-gold">
            <Sparkles className="h-8 w-8 text-gold" />
          </div>
          <h3 className="mt-6 font-display text-5xl md:text-6xl">
            <span className="text-gold">$86</span> Billion
          </h3>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            The global hair care industry — and we're proudly crafting a corner of it that puts quality, ethics and craft first.
          </p>
        </div>
      </section>

      {/* Featured Products with tabs */}
      <section id="shop" className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Bestsellers</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Featured Products</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
              Browse our favorites by category — extensions, wigs, care and accessories chosen by our stylists.
            </p>
          </div>

          {/* Category Tabs */}
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

      {/* Accessories teaser */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Hair Accessories</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Little details, big impact.</h2>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              From pearl-tipped pins to gilded combs, our accessories collection is designed to finish any look — bridal, everyday or after-hours.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {["Pearl Hair Pins","Gold Hair Clips","Tortoise Combs","Silk Scrunchies","Bridal Tiaras","Vintage Barrettes"].map((a) => (
                <li key={a} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-gold" /> {a}
                </li>
              ))}
            </ul>
            <Link to="/shop" className="mt-8 inline-block rounded-sm bg-ink px-6 py-3 text-xs font-medium uppercase tracking-widest text-primary-foreground transition hover:bg-ink/90">
              Shop Accessories
            </Link>
          </div>
          <div className="order-1 md:order-2">
            <img src={accessoriesImg} alt="Luxury hair accessories flat lay" loading="lazy" width={640} height={768}
              className="h-[520px] w-full rounded-sm object-cover" />
          </div>
        </div>
      </section>

      {/* Make a Move banner */}
      <section className="relative">
        <img src={bannerHair} alt="Flowing hair banner" loading="lazy" width={1600} height={720}
          className="h-[420px] w-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 grid place-items-center">
          <div className="grid h-64 w-64 place-items-center rounded-full bg-background text-center shadow-2xl">
            <div>
              <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-full border border-gold">
                <Sparkles className="h-5 w-5 text-gold" />
              </div>
              <p className="font-display text-2xl">Make a Move</p>
              <p className="mt-1 text-xs text-muted-foreground">Discover the new season</p>
              <Link to="/shop" className="mt-4 inline-block rounded-sm bg-gold px-5 py-2 text-xs font-medium uppercase tracking-widest text-gold-foreground">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-ink py-20 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Our Mission</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Mission</h2>
            <p className="mt-6 max-w-md text-sm text-primary-foreground/70">
              We are a small, passionate team obsessed with sourcing the finest ethically-collected human hair. Every bundle is inspected by hand, every accessory chosen with intent — because you deserve pieces that last far longer than a trend.
            </p>
            <Link to="/about" className="mt-8 inline-block rounded-sm bg-gold px-6 py-3 text-xs font-medium uppercase tracking-widest text-gold-foreground transition hover:brightness-110">
              Read Our Story
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={mission1} alt="Curly hair texture" loading="lazy" width={560} height={560} className="h-56 w-full rounded-sm object-cover md:h-64" />
            <img src={mission2} alt="Wavy hair texture" loading="lazy" width={560} height={560} className="h-56 w-full rounded-sm object-cover md:h-64" />
            <img src={collection1} alt="Curly model" loading="lazy" width={600} height={700} className="h-56 w-full rounded-sm object-cover md:h-64" />
            <img src={collection2} alt="Straight model" loading="lazy" width={640} height={768} className="h-56 w-full rounded-sm object-cover md:h-64" />
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">By hair type</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Our Programs</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
              Whether long, wavy, curly or sleek — we've built a routine tailored for it.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {programs.map((p) => (
              <div key={p.title} className="text-center">
                <div className="mx-auto h-56 w-56 overflow-hidden rounded-full ring-4 ring-cream">
                  <img src={p.img} alt={p.title} loading="lazy" width={640} height={640} className="h-full w-full object-cover" />
                </div>
                <h3 className="mt-6 font-display text-2xl">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                <Link to="/shop" className="mt-4 inline-block rounded-sm border border-gold px-5 py-2 text-xs font-medium uppercase tracking-widest text-gold transition hover:bg-gold hover:text-gold-foreground">
                  Shop Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">From the journal</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Stay Tuned for Updates</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {blogPosts.map((b) => (
              <article key={b.title} className="overflow-hidden rounded-sm bg-background shadow-[0_10px_40px_-20px_rgba(0,0,0,0.15)]">
                <img src={b.img} alt={b.title} loading="lazy" width={720} height={560} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <span className="text-xs uppercase tracking-widest text-gold">{b.date}</span>
                  <h3 className="mt-2 font-display text-xl leading-snug">{b.title}</h3>
                  <button className="mt-4 rounded-sm bg-gold px-4 py-2 text-[10px] font-medium uppercase tracking-widest text-gold-foreground">
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — redesigned */}
      <section className="relative overflow-hidden bg-ink py-24 text-primary-foreground">
        {/* Decorative rings */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full border border-gold/20" />
        <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full border border-gold/10" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Testimonials</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Loved by thousands worldwide</h2>
            <div className="mt-4 flex items-center justify-center gap-1 text-gold">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
              <span className="ml-2 text-sm text-primary-foreground/70">4.9 average from 2,300+ reviews</span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <figure
                key={t.name}
                className={`group relative rounded-lg border border-primary-foreground/10 bg-gradient-to-br from-primary-foreground/[0.07] to-primary-foreground/[0.02] p-8 backdrop-blur transition hover:-translate-y-1 hover:border-gold/40 ${
                  idx === 1 ? "md:-translate-y-4" : ""
                }`}
              >
                <Quote className="absolute -top-4 left-6 h-10 w-10 rounded-full bg-gold p-2 text-gold-foreground shadow-lg" />
                <div className="mb-4 flex gap-0.5 text-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="text-sm leading-relaxed text-primary-foreground/85">"{t.text}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-primary-foreground/10 pt-4">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-gold/20 font-display text-gold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display text-base text-primary-foreground">{t.name}</p>
                    <p className="text-xs text-primary-foreground/60">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter — redesigned */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[image:radial-gradient(ellipse_at_center,var(--cream),transparent_70%)]" />
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-2xl bg-ink px-8 py-16 text-primary-foreground shadow-2xl md:px-16">
            {/* decorative */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{ backgroundImage: "radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)", backgroundSize: "24px 24px" }} />

            <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-gold">
                  <Mail className="h-3 w-3" /> Newsletter
                </div>
                <h2 className="font-display text-4xl leading-tight md:text-5xl">
                  Join the <span className="text-gold">Harmony</span> Circle
                </h2>
                <p className="mt-4 max-w-md text-sm text-primary-foreground/70">
                  Get 10% off your first order, insider styling tips, and first-access to new drops. No spam — just beautiful hair.
                </p>
                <div className="mt-6 flex items-center gap-4 text-xs text-primary-foreground/60">
                  <div className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> 10% welcome discount</div>
                  <div className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> Early access</div>
                </div>
              </div>

              <form className="space-y-3">
                <label className="block text-xs uppercase tracking-[0.3em] text-primary-foreground/60">Your email address</label>
                <div className="flex flex-col gap-3 rounded-sm bg-primary-foreground/5 p-2 sm:flex-row sm:items-center">
                  <div className="flex flex-1 items-center gap-2 px-3">
                    <Mail className="h-4 w-4 text-gold" />
                    <input
                      type="email"
                      required
                      placeholder="you@harmony.com"
                      className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-primary-foreground/40"
                    />
                  </div>
                  <button
                    type="submit"
                    className="rounded-sm bg-gold px-6 py-3 text-xs font-medium uppercase tracking-widest text-gold-foreground transition hover:brightness-110"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-[11px] text-primary-foreground/40">
                  By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

export function SiteHeader() {
  const nav = [
    { label: "Home", to: "/" as const },
    { label: "Shop", to: "/shop" as const },
    { label: "About", to: "/about" as const },
    { label: "Contact", to: "/contact" as const },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-gold text-gold">
            <span className="font-display text-lg">H</span>
          </span>
          <span className="font-display text-2xl tracking-wide">Hair Harmony</span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-gold" }}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-foreground/80">
          <button aria-label="Search"><Search className="h-5 w-5" /></button>
          <button aria-label="Account"><User className="h-5 w-5" /></button>
          <button aria-label="Cart" className="relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-gold text-[10px] text-gold-foreground">2</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-primary-foreground/80">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-gold text-gold">
              <span className="font-display">H</span>
            </span>
            <span className="font-display text-2xl text-primary-foreground">Hair Harmony</span>
          </div>
          <p className="mt-4 text-sm">Luxury hair extensions, care and accessories for those who love a beautiful finish.</p>
        </div>
        <div>
          <h4 className="font-display text-lg text-primary-foreground">Shop</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/shop">Extensions</Link></li>
            <li><Link to="/shop">Wigs</Link></li>
            <li><Link to="/shop">Accessories</Link></li>
            <li><Link to="/shop">Hair Care</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg text-primary-foreground">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg text-primary-foreground">Follow</h4>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/20 hover:border-gold hover:text-gold"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/20 hover:border-gold hover:text-gold"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/20 hover:border-gold hover:text-gold"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="Youtube" className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/20 hover:border-gold hover:text-gold"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Hair Harmony Store. Crafted with care.
        </div>
      </div>
    </footer>
  );
}

export { ProductCard };
