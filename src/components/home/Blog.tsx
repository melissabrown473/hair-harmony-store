import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    date: "MAR 08",
    title: "The complete guide to hair extension care",
    desc: "Keep your extensions silky, healthy and beautiful with expert care tips.",
    img: "/assets/blog-1.jpg",
  },
  {
    date: "MAR 12",
    title: "How to choose the right hair color for you",
    desc: "Discover the perfect shade that complements your style and complexion.",
    img: "/assets/blog-2.jpg",
  },
  {
    date: "MAR 18",
    title: "Salon secrets for red-carpet worthy waves",
    desc: "Professional styling techniques for effortless luxury waves.",
    img: "/assets/blog-3.jpg",
  },
];

export function Blog() {
  return (
    <section className="bg-[#f8f5ef] py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#caa15b]">
            From The Journal
          </p>

          <h2 className="mt-5 font-display text-5xl">
            Hair Beauty Insights
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
            Expert advice, styling inspiration and everything you need to
            maintain your perfect look.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="
                group
                overflow-hidden
                rounded-2xl
                bg-white
                shadow-sm
                transition
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              {/* Image */}
              <div className="relative h-[320px] overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/50
                    to-transparent
                  "
                />

                <span
                  className="
                    absolute
                    left-6
                    top-6
                    rounded-full
                    bg-[#caa15b]
                    px-4
                    py-2
                    text-[10px]
                    font-semibold
                    tracking-widest
                    text-black
                  "
                >
                  {post.date}
                </span>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3
                  className="
                    font-display
                    text-2xl
                    leading-snug
                  "
                >
                  {post.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-7
                    text-muted-foreground
                  "
                >
                  {post.desc}
                </p>

                <button
                  className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-semibold
                    uppercase
                    tracking-widest
                    text-[#caa15b]
                    transition
                    group-hover:gap-4
                  "
                >
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}