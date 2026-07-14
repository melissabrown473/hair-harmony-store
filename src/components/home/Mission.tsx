import { Link } from "@tanstack/react-router";
import mission1 from "@/assets/mission-1.jpg";
import mission2 from "@/assets/mission-2.jpg";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";

const cards = [
  {
    image: mission1,
    title: "Luxury Curly Bundle",
    desc: "Soft, thick and long-lasting premium curls with a natural shine.",
    price: "$220",
  },
  {
    image: mission2,
    title: "Body Wave",
    desc: "Silky body wave extensions that blend beautifully with natural hair.",
    price: "$180",
  },
  {
    image: collection1,
    title: "Straight Collection",
    desc: "Premium virgin straight hair with a sleek, luxurious finish.",
    price: "$195",
  },
  {
    image: collection2,
    title: "Deep Wave",
    desc: "Voluminous deep wave bundles that hold their curl beautifully.",
    price: "$240",
  },
];

export function Mission() {
  return (
    <section className="bg-[#111] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.2fr]">
          {/* LEFT CONTENT */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#caa15b]">
              OUR MISSION
            </p>

            <h2 className="font-display text-5xl font-light">Mission</h2>

            <p className="mt-8 max-w-lg text-3xl leading-relaxed text-[#caa15b]">
              We provide every woman with luxurious premium hair that inspires
              confidence and timeless beauty.
            </p>

            <p className="mt-8 max-w-md text-base leading-8 text-white/70">
              Every bundle is ethically sourced, carefully inspected, and
              selected to ensure exceptional softness, durability, and a natural
              look you'll love for years.
            </p>

            <Link
              to="/about"
              className="mt-10 inline-flex rounded-sm bg-[#caa15b] px-8 py-4 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-[#d8b16a]"
            >
              More About Us
            </Link>
          </div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cards.map((card) => (
              <div
                key={card.title}
                className="group h-[320px] [perspective:1200px]"
              >
                <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* FRONT */}
                  <div className="absolute inset-0 overflow-hidden rounded-md [backface-visibility:hidden]">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/10" />
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 flex [transform:rotateY(180deg)] flex-col justify-center rounded-md bg-[#1b1b1b] p-8 text-center [backface-visibility:hidden]">
                    <h3 className="font-display text-2xl text-white">
                      {card.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/70">
                      {card.desc}
                    </p>

                    <span className="mt-6 text-2xl font-semibold text-[#caa15b]">
                      {card.price}
                    </span>

                    <button className="mt-8 rounded border border-[#caa15b] py-3 text-sm uppercase tracking-widest text-[#caa15b] transition-all hover:bg-[#caa15b] hover:text-white">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}