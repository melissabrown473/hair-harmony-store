import { createFileRoute } from "@tanstack/react-router";
import { Search, ShoppingBag, User, Star, Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react";

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

const navLinks = ["Home", "Pages", "Shop", "Features", "Blog", "Accessories", "Contact"];

const collections = [
  { title: "Shampoo", desc: "Nourishing formulas for every hair type", img: collection1 },
  { title: "Hair Coloring", desc: "Rich, radiant colors that last", img: collection2 },
  { title: "Conditioner", desc: "Deep hydration and silky finish", img: collection3 },
];

const products = [
  { title: "Curly Auburn Extension", price: "$89.00", img: product1, tag: "New" },
  { title: "Silky Black Straight", price: "$119.00", img: product2, tag: "New" },
  { title: "Platinum Blonde 22\"", price: "$149.00", img: product3, tag: "New" },
  { title: "Caramel Wavy Bundle", price: "$99.00", img: product4, tag: "New" },
];

const accessories = [
  "Pearl Hair Pins",
  "Gold Hair Clips",
  "Tortoise Combs",
  "Silk Scrunchies",
  "Bridal Tiaras",
  "Vintage Barrettes",
];

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
  { name: "Emma R.", text: "Trissa completely transformed my hair. The extensions blend seamlessly and feel like my own." },
  { name: "Sophia L.", text: "Beautiful quality, beautiful packaging, beautiful people. I won't shop anywhere else." },
  { name: "Amelia W.", text: "The accessories collection is exquisite — I get compliments every single time." },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top strip */}
      <div className="bg-ink text-primary-foreground text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <span className="opacity-80">Welcome to Trissa — Free shipping on orders over $150</span>
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
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-gold text-gold">
              <span className="font-display text-lg">T</span>
            </span>
            <span className="font-display text-2xl tracking-wide">Trissa</span>
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <a key={l} href="#" className="text-sm font-medium text-foreground/80 transition-colors hover:text-gold">
                {l}
              </a>
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
              <a href="#shop" className="inline-flex items-center rounded-sm bg-gold px-6 py-3 text-sm font-medium text-gold-foreground transition hover:brightness-110">
                Shop Collection
              </a>
              <a href="#about" className="inline-flex items-center rounded-sm border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground/90 transition hover:bg-primary-foreground/10">
                Learn More
              </a>
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
                  <button className="mt-5 inline-flex rounded-sm bg-gold px-5 py-2 text-xs font-medium uppercase tracking-widest text-gold-foreground transition hover:brightness-110">
                    Shop Now
                  </button>
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
          <button className="mt-8 w-max rounded-sm bg-gold px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-gold-foreground transition hover:brightness-110">
            Explore Care
          </button>
        </div>
        <div className="relative flex flex-col items-center justify-center rounded-sm border border-border bg-card p-10 text-center md:p-14">
          <div className="grid h-24 w-24 place-items-center rounded-full border-2 border-gold">
            <span className="font-display text-3xl text-gold">T</span>
          </div>
          <h3 className="mt-6 font-display text-5xl md:text-6xl">
            <span className="text-gold">$86</span> Billion
          </h3>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            The global hair care industry — and we're proudly crafting a corner of it that puts quality, ethics and craft first.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section id="shop" className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Bestsellers</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Featured Products</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
              A rotating cast of favorites — extensions, wigs and treatments chosen by our stylists.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <article key={p.title} className="group rounded-sm bg-background p-4 transition hover:shadow-[0_15px_40px_-20px_rgba(0,0,0,0.2)]">
                <div className="relative overflow-hidden rounded-sm bg-muted">
                  <img src={p.img} alt={p.title} loading="lazy" width={640} height={768}
                    className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-sm bg-gold px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-gold-foreground">{p.tag}</span>
                </div>
                <div className="pt-4 text-center">
                  <h4 className="font-display text-lg">{p.title}</h4>
                  <div className="mt-1 flex items-center justify-center gap-0.5 text-gold">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                  </div>
                  <p className="mt-1 text-sm font-medium">{p.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories */}
      <section id="accessories" className="py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Hair Accessories</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Little details, big impact.</h2>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              From pearl-tipped pins to gilded combs, our accessories collection is designed to finish any look — bridal, everyday or after-hours.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {accessories.map((a) => (
                <li key={a} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-gold" /> {a}
                </li>
              ))}
            </ul>
            <button className="mt-8 rounded-sm bg-ink px-6 py-3 text-xs font-medium uppercase tracking-widest text-primary-foreground transition hover:bg-ink/90">
              Shop Accessories
            </button>
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
                <span className="font-display text-gold">T</span>
              </div>
              <p className="font-display text-2xl">Make a Move</p>
              <p className="mt-1 text-xs text-muted-foreground">Discover the new season</p>
              <button className="mt-4 rounded-sm bg-gold px-5 py-2 text-xs font-medium uppercase tracking-widest text-gold-foreground">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="about" className="bg-ink py-20 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Our Mission</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Mission</h2>
            <p className="mt-6 max-w-md text-sm text-primary-foreground/70">
              We are a small, passionate team obsessed with sourcing the finest ethically-collected human hair. Every bundle is inspected by hand, every accessory chosen with intent — because you deserve pieces that last far longer than a trend.
            </p>
            <button className="mt-8 rounded-sm bg-gold px-6 py-3 text-xs font-medium uppercase tracking-widest text-gold-foreground transition hover:brightness-110">
              Read Our Story
            </button>
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
                <button className="mt-4 rounded-sm border border-gold px-5 py-2 text-xs font-medium uppercase tracking-widest text-gold transition hover:bg-gold hover:text-gold-foreground">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog / Stay tuned */}
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
          <form className="mx-auto mt-14 flex max-w-2xl overflow-hidden rounded-sm border border-border bg-background">
            <input type="email" required placeholder="Subscribe to our newsletter"
              className="flex-1 bg-transparent px-5 py-3 text-sm outline-none placeholder:text-muted-foreground" />
            <button type="submit" className="bg-ink px-6 text-xs font-medium uppercase tracking-widest text-primary-foreground">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative bg-ink py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Testimonials</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Thus Spoke our Customers</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-sm border border-primary-foreground/10 bg-primary-foreground/5 p-6">
                <div className="mb-3 flex justify-center gap-0.5 text-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                </div>
                <blockquote className="text-sm text-primary-foreground/80">"{t.text}"</blockquote>
                <figcaption className="mt-4 font-display text-gold">— {t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact + Enquiry */}
      <section id="contact" className="py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Get in Touch</p>
            <h2 className="mt-3 font-display text-4xl">Contact Info</h2>
            <ul className="mt-8 space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-gold/15 text-gold"><Phone className="h-4 w-4" /></span>
                <div>
                  <p className="font-medium">+1 (415) 555-0134</p>
                  <p className="text-muted-foreground">Mon–Sat, 9am–7pm</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-gold/15 text-gold"><Mail className="h-4 w-4" /></span>
                <div>
                  <p className="font-medium">hello@trissa.com</p>
                  <p className="text-muted-foreground">Customer care</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-gold/15 text-gold"><MapPin className="h-4 w-4" /></span>
                <div>
                  <p className="font-medium">218 Powell Street, San Francisco, CA</p>
                  <p className="text-muted-foreground">Flagship Boutique</p>
                </div>
              </li>
            </ul>
          </div>
          <form className="rounded-sm border border-border bg-card p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Enquiry Form</p>
            <h3 className="mt-2 font-display text-3xl">Send us a Message</h3>
            <div className="mt-6 grid gap-4">
              <input placeholder="Your Name" className="rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold" />
              <input type="email" placeholder="Email Address" className="rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold" />
              <input placeholder="Subject" className="rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold" />
              <textarea placeholder="Message" rows={4} className="rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold" />
              <button className="mt-2 rounded-sm bg-gold px-6 py-3 text-xs font-medium uppercase tracking-widest text-gold-foreground">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-primary-foreground/80">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-gold text-gold">
                <span className="font-display">T</span>
              </span>
              <span className="font-display text-2xl text-primary-foreground">Trissa</span>
            </div>
            <p className="mt-4 text-sm">Luxury hair extensions, care and accessories for those who love a beautiful finish.</p>
          </div>
          <div>
            <h4 className="font-display text-lg text-primary-foreground">Shop</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#">Extensions</a></li>
              <li><a href="#">Wigs</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Hair Care</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg text-primary-foreground">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Journal</a></li>
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
            © {new Date().getFullYear()} Trissa. Crafted with care.
          </div>
        </div>
      </footer>
    </div>
  );
}
