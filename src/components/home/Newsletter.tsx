import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-[#111] py-16">
      {/* Glow */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#caa15b]/20 blur-3xl" />
      <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[#caa15b]/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">

        <p className="text-xs uppercase tracking-[0.35em] text-[#caa15b]">
          Join The Harmony Circle
        </p>

        <h2 className="mt-4 font-display text-4xl text-white md:text-5xl">
          Get 10% Off Your First Order
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm text-white/60">
          Subscribe for exclusive offers, new collection drops, and luxury
          hair inspiration.
        </p>


        <form className="mx-auto mt-8 max-w-xl">

          <div className="flex flex-col gap-3 rounded-lg border border-white/10 bg-white/5 p-2 backdrop-blur sm:flex-row">

            <div className="flex flex-1 items-center gap-3 px-4">
              <Mail className="h-4 w-4 text-[#caa15b]" />

              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/40"
              />
            </div>


            <button
              type="submit"
              className="rounded-md bg-[#caa15b] px-8 py-3 text-xs font-semibold uppercase tracking-widest text-black transition hover:bg-[#d8b16d]"
            >
              Subscribe
            </button>

          </div>

        </form>

        <p className="mt-4 text-[11px] text-white/40">
          No spam. Only luxury hair updates and exclusive offers.
        </p>

      </div>
    </section>
  );
}