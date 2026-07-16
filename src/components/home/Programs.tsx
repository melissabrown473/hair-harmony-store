import { Link } from "@tanstack/react-router";

const programs = [
  {
    title: "Long Wavy Hair",
    desc: "Voluminous waves with natural movement and shine.",
    img: "/assets/program-1.jpg",
  },
  {
    title: "Natural Curly Hair",
    desc: "Defined curls with softness, bounce and texture.",
    img: "/assets/program-2.jpg",
  },
  {
    title: "Glossy Straight Hair",
    desc: "A sleek, silky finish for timeless elegance.",
    img: "/assets/program-3.jpg",
  },
];

export function Programs() {
  return (
    <section className="bg-[#f8f5ef] py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <p className="text-xs uppercase tracking-[0.35em] text-[#caa15b]">
            Explore Collections
          </p>

          <h2 className="mt-4 font-display text-5xl text-[#111]">
            Find Your Perfect Texture
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-neutral-600">
            Discover premium hair collections designed to match your style,
            personality and everyday beauty routine.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-3">

          {programs.map((program) => (
            <div
              key={program.title}
              className="group relative h-[520px] overflow-hidden rounded-2xl"
            >

              {/* Image */}

              <img
                src={program.img}
                alt={program.title}
                loading="lazy"
                className="
                  h-full w-full object-cover
                  transition duration-700
                  group-hover:scale-110
                "
              />

              {/* Overlay */}

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/85
                  via-black/20
                  to-transparent
                "
              />

              {/* Content */}

              <div
                className="
                  absolute bottom-0 left-0 right-0
                  p-8 text-white
                "
              >

                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#d4b06a]">
                  Hair Collection
                </p>

                <h3 className="font-display text-3xl">
                  {program.title}
                </h3>

                <p className="mt-3 max-w-xs text-sm leading-6 text-white/75">
                  {program.desc}
                </p>

                <Link
                  to="/shop"
                  className="
                    mt-6 inline-flex
                    rounded-sm
                    border border-[#caa15b]
                    px-6 py-3
                    text-xs font-medium
                    uppercase tracking-widest
                    text-[#d4b06a]
                    transition
                    hover:bg-[#caa15b]
                    hover:text-black
                  "
                >
                  Shop Collection
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}