import { Link } from "@tanstack/react-router";
import bannerHair from "@/assets/banner-hair.jpg";

export function MakeAMoveBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <img
        src={bannerHair}
        alt="Luxury human hair extensions"
        loading="lazy"
        width={1600}
        height={700}
        className="h-[520px] w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

      {/* Content */}
      <div className="absolute inset-0">
        <div className="mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-xl">
            <span className="inline-block rounded-full border border-[#caa15b]/40 bg-[#caa15b]/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-[#d6b16a]">
              Premium Hair Collection
            </span>

            <h2 className="mt-6 font-display text-4xl font-light leading-tight text-white md:text-6xl">
              Transform Your Look
              <br />
              With Luxury Hair
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/75">
              Discover ethically sourced premium human hair extensions,
              wigs, and accessories crafted for confidence, elegance,
              and lasting beauty.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="rounded-sm bg-[#caa15b] px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#d7b46c]"
              >
                Shop Collection
              </Link>

              <Link
                to="/about"
                className="rounded-sm border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}