import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
  {
    kicker: "Premium Hair Boutique",
    title: "Look Great with",
    accent: "Extensions",
    desc: "100% Remy human hair, hand-tied and tangle free. Length, volume and shine — on demand.",
    img: "/assets/hero-model1.jpg",
    cta: "Shop Extensions",
  },
  {
    kicker: "HD Lace Collection",
    title: "Wigs that feel",
    accent: "invisible",
    desc: "Glueless, pre-plucked HD lace wigs in every texture — ready to wear straight out of the box.",
    img: "/assets/program-3.jpg",
    cta: "Shop Wigs",
  },
  {
    kicker: "Little details, big impact",
    title: "Luxury Hair",
    accent: "Accessories",
    desc: "Pearl pins, gilded combs, silk scrunchies and bridal tiaras — the finishing touch on any look.",
    img: "/assets/accessories8.jpg",
    cta: "Shop Accessories",
  },
{
  kicker: "Relax, Restore & Renew",
  title: "Luxury",
  accent: "Spa Experience",
  desc: "Indulge in premium spa treatments designed to relax your body, refresh your mind, and leave you feeling beautifully renewed.",
  img: "/assets/spa.jpg",
  cta: "Book Spa Treatment",
},
  {
    kicker: "New Season Edit",
    title: "Curls that",
    accent: "bounce back",
    desc: "Defined, moisture-locked curls and coils — extensions and wigs styled for natural texture.",
    img: "/assets/program-2.jpg",
    cta: "Explore Collection",
  },
];

export function HeroSlider() {
  const [i, setI] = useState(0);
  const total = heroSlides.length;
  const go = (n: number) => setI((n + total) % total);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % total), 6000);
    return () => clearInterval(t);
  }, [total]);

  return (
    <section className="relative overflow-hidden bg-ink text-primary-foreground">
      <div className="relative h-screen">
        {heroSlides.map((s, idx) => (
          <div
            key={s.accent}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === i
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
            aria-hidden={idx !== i}
          >
            <img
              src={s.img}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
              <div className="max-w-xl animate-fade-in">
                <span className="mb-4 inline-block text-xs uppercase tracking-[0.3em] text-gold">
                  {s.kicker}
                </span>

                <h1 className="font-display text-5xl leading-[1.05] md:text-7xl">
                  {s.title}
                  <br />
                  <em className="not-italic text-gold">{s.accent}</em>
                </h1>

                <p className="mt-6 max-w-md text-sm text-primary-foreground/80">
                  {s.desc}
                </p>

                <div className="mt-8 flex gap-3">
                  <Link
                    to="/shop"
                    className="inline-flex items-center rounded-sm bg-gold px-6 py-3 text-sm font-medium text-gold-foreground transition hover:brightness-110"
                  >
                    {s.cta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={() => go(i - 1)}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-primary-foreground/30 bg-ink/40 text-primary-foreground backdrop-blur transition hover:bg-gold hover:text-gold-foreground md:left-8"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={() => go(i + 1)}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-primary-foreground/30 bg-ink/40 text-primary-foreground backdrop-blur transition hover:bg-gold hover:text-gold-foreground md:right-8"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => go(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                idx === i
                  ? "w-8 bg-gold"
                  : "w-4 bg-primary-foreground/40 hover:bg-primary-foreground/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}