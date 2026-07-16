import { Link } from "@tanstack/react-router";

export function SpaBanner() {
  return (
    <section className="relative overflow-hidden rounded-2xl">
      {/* Background */}
      <img
        src="/assets/spa2.jpg"
        alt="Luxury spa treatment experience"
        loading="lazy"
        width={1600}
        height={700}
        className="h-[520px] w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

      {/* Content */}
      <div className="absolute inset-0">
        <div className="mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-xl">
            <span className="inline-block rounded-full border border-[#caa15b]/40 bg-[#caa15b]/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-[#d6b16a]">
              Luxury Spa Experience
            </span>

            <h2 className="mt-6 font-display text-4xl font-light leading-tight text-white md:text-6xl">
              Relax Your Body
              <br />
              Restore Your Glow
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/75">
              Indulge in premium spa treatments designed to refresh your mind,
              nourish your body, and enhance your natural beauty.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/spa"
                className="rounded-sm bg-[#caa15b] px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#d7b46c]"
              >
                Book Appointment
              </Link>

              <Link
                to="/about"
                className="rounded-sm border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}