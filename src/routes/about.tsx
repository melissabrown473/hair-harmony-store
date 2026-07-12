import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "./index";
import mission1 from "@/assets/mission-1.jpg";
import mission2 from "@/assets/mission-2.jpg";
import heroModel from "@/assets/hero-model.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hair Harmony Store" },
      { name: "description", content: "Hair Harmony Store crafts luxury hair extensions, wigs and accessories from ethically sourced Remy human hair. Learn our story and mission." },
      { property: "og:title", content: "About — Hair Harmony Store" },
      { property: "og:description", content: "Our story: ethically sourced hair, hand-inspected quality, and a passion for craft." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden bg-ink text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold">About</p>
            <h1 className="mt-3 font-display text-5xl md:text-6xl">Hair, in perfect harmony.</h1>
            <p className="mt-6 max-w-md text-sm text-primary-foreground/75">
              Hair Harmony Store was founded on a simple belief: everyone deserves hair they love — sourced ethically, crafted skilfully, and made to last far beyond a season.
            </p>
            <Link to="/shop" className="mt-8 inline-block rounded-sm bg-gold px-6 py-3 text-xs font-medium uppercase tracking-widest text-gold-foreground">
              Shop the Collection
            </Link>
          </div>
          <img src={heroModel} alt="Hair Harmony model" className="h-[480px] w-full rounded-sm object-cover" />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <img src={mission1} alt="" className="h-64 w-full rounded-sm object-cover" />
            <img src={mission2} alt="" className="h-64 w-full rounded-sm object-cover" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Our Mission</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Ethical, considered, beautiful.</h2>
            <p className="mt-6 text-sm text-muted-foreground">
              Every bundle we sell is 100% Remy human hair, gathered with consent and traceable to source. Our small team inspects every strand by hand, tests every accessory, and packages every order with the care of a personal gift.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <p className="font-display text-3xl text-gold">10k+</p>
                <p className="text-xs text-muted-foreground">Happy customers</p>
              </div>
              <div>
                <p className="font-display text-3xl text-gold">100%</p>
                <p className="text-xs text-muted-foreground">Remy human hair</p>
              </div>
              <div>
                <p className="font-display text-3xl text-gold">4.9★</p>
                <p className="text-xs text-muted-foreground">Average rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Our Values</p>
          <h2 className="mt-3 font-display text-4xl">What we stand for</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { t: "Ethically sourced", d: "Traceable, consent-based sourcing from trusted partners." },
              { t: "Hand-inspected", d: "Every strand, every bundle, every accessory — checked by hand." },
              { t: "Made to last", d: "Products designed for longevity, not fast trends." },
            ].map((v) => (
              <div key={v.t} className="rounded-lg border border-border bg-background p-6">
                <h3 className="font-display text-xl">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
