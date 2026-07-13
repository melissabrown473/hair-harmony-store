import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function HairCareStat() {
  return (
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
  );
}
