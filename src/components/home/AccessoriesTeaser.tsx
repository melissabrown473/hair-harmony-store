import { Link } from "@tanstack/react-router";
import {
  Sparkles,
  Gem,
  Crown,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Gem,
    title: "Luxury Clips",
  },
  {
    icon: Sparkles,
    title: "Pearl Pins",
  },
  {
    icon: Crown,
    title: "Bridal Pieces",
  },
];

export function AccessoriesTeaser() {
  return (
    <section className="bg-[#f8f6f3] py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        {/* Image */}

        <div className="relative">
          <img
            src="/assets/accessories.jpg"
            alt="Luxury Hair Accessories"
            className="h-[620px] w-full rounded-2xl object-cover shadow-2xl"
          />

          {/* Floating Card */}

          <div className="absolute -bottom-10 -right-8 hidden w-72 rounded-2xl bg-white p-8 shadow-2xl lg:block">
            <p className="text-xs uppercase tracking-[0.35em] text-[#caa15b]">
              New Collection
            </p>

            <h3 className="mt-3 font-display text-2xl text-[#111]">
              Premium Accessories
            </h3>

            <p className="mt-3 text-sm leading-7 text-neutral-600">
              Carefully selected pieces that elevate every hairstyle.
            </p>
          </div>
        </div>

        {/* Content */}

        <div>
          <span className="inline-block h-[2px] w-20 bg-[#caa15b]" />

          <p className="mt-6 text-xs uppercase tracking-[0.35em] text-[#caa15b]">
            Hair Accessories
          </p>

          <h2 className="mt-5 font-display text-5xl leading-tight text-[#111]">
            Luxury Finishing
            <br />
            Touches
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-9 text-neutral-600">
            Complete your hairstyle with timeless accessories crafted for
            elegance. From bridal occasions to everyday sophistication,
            discover pieces designed to complement every look.
          </p>

          {/* Feature Cards */}

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-neutral-200 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-[#caa15b] hover:shadow-xl"
                >
                  <Icon className="h-8 w-8 text-[#caa15b]" />

                  <h3 className="mt-5 font-medium text-[#111]">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* CTA */}

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded-md bg-[#111] px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-black"
            >
              Shop Collection
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}