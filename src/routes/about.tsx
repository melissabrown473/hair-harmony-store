import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "./index";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hair Harmony Store" },
      {
        name: "description",
        content:
          "Hair Harmony Store crafts luxury hair extensions, wigs and accessories from ethically sourced Remy human hair.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}

      <section className="relative min-h-[650px] overflow-hidden bg-ink text-white">
        <img
          src="/assets/hero-model.jpg"
          alt="Hair Harmony model"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.45em] text-[#caa15b]">About Hair Harmony</p>

            <h1 className="mt-6 font-display text-6xl leading-tight md:text-7xl">
              Beauty crafted
              <br />
              with purpose.
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-8 text-white/70">
              We create luxury hair collections designed to enhance confidence, celebrate
              individuality, and deliver timeless beauty.
            </p>

            <Link
              to="/shop"
              className="mt-10 inline-flex rounded-sm bg-[#caa15b] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-black transition hover:bg-[#d8b16d]"
            >
              Shop Collection
            </Link>
          </div>
        </div>
      </section>

      {/* STORY */}

      <section className="py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          {/* Images */}

          <div className="relative grid grid-cols-2 gap-5">
            <img
              src="/assets/mission-1.jpg"
              alt=""
              className="h-[420px] w-full rounded-2xl object-cover"
            />

            <img
              src="/assets/Facial.jpg"
              alt=""
              className="mt-16 h-[420px] w-full rounded-2xl object-cover"
            />

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 rounded-xl bg-white px-8 py-5 text-center shadow-xl">
              <p className="font-display text-3xl text-[#caa15b]">1k+</p>

              <p className="text-xs uppercase tracking-widest text-neutral-500">Happy Clients</p>
            </div>
          </div>

        {/* Content */}

<div>
  <p className="text-xs uppercase tracking-[0.35em] text-[#caa15b]">
    Our Story
  </p>

  <h2 className="mt-5 font-display text-5xl leading-tight">
     Hair Harmony.
    <br />
    Relaxing Spa.
    <br />
    Exceptional Care.
  </h2>

  <p className="mt-8 text-lg leading-9 text-muted-foreground">
    Hair Harmony was founded on a simple belief: everyone deserves to look and
    feel their best. From premium, ethically sourced hair collections to
    rejuvenating spa treatments, we provide a complete beauty and wellness
    experience tailored to you.
  </p>

  <p className="mt-5 text-lg leading-9 text-muted-foreground">
    Whether you're transforming your style with luxury extensions, braids,
    coloring, and wigs, or taking time to unwind with our relaxing spa
    therapies, every service is delivered with exceptional craftsmanship,
    quality, and care.
  </p>

  <div className="mt-12 grid grid-cols-3 gap-6">
    {[
      ["100%", "Premium Hair"],
      ["Spa", "Wellness Treatments"],
      ["5+", "Years Experience"],
    ].map(([number, label]) => (
      <div key={label}>
        <p className="font-display text-3xl text-[#caa15b]">{number}</p>

        <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
          {label}
        </p>
      </div>
    ))}
  </div>
</div>
        </div>
      </section>

      {/* VALUES */}

      <section className="bg-[#f8f5ef] py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#caa15b]">Our Values</p>

          <h2 className="mt-5 font-display text-5xl">What we believe in</h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Ethically sourced",
                desc: "Responsible sourcing from trusted partners with complete transparency.",
              },
              {
                title: "Hand inspected",
                desc: "Every bundle is carefully checked for quality and consistency.",
              },
              {
                title: "Made to last",
                desc: "Luxury products designed beyond seasonal trends.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="
                rounded-2xl bg-white p-8
                shadow-sm transition
                hover:-translate-y-2
                hover:shadow-xl
                "
              >
                <h3 className="font-display text-2xl">{item.title}</h3>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="bg-[#111] py-20 text-center text-white">
        <p className="text-xs uppercase tracking-[0.35em] text-[#caa15b]">Experience Luxury Hair</p>

        <h2 className="mt-5 font-display text-5xl">Find your perfect style</h2>

        <Link
          to="/shop"
          className="mt-8 inline-flex rounded-sm bg-[#caa15b] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-black"
        >
          Shop Now
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
