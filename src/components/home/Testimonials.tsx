import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Emma R.",
    role: "Verified Buyer",
    text: "Hair Harmony completely transformed my look. The hair feels unbelievably soft and natural.",
  },
  {
    name: "Sophia L.",
    role: "Professional Stylist",
    text: "I've worked with dozens of brands, but this is the one I confidently recommend to every client.",
  },
  {
    name: "Amelia W.",
    role: "Bride",
    text: "My wedding hairstyle stayed flawless all day. The quality exceeded every expectation.",
  },
  {
    name: "Jessica K.",
    role: "Beauty Influencer",
    text: "The bundles are thick from root to tip and last incredibly well after multiple installs.",
  },
  {
    name: "Olivia M.",
    role: "Salon Owner",
    text: "Packaging, customer service and quality are all premium. Worth every penny.",
  },
  {
    name: "Grace T.",
    role: "Verified Buyer",
    text: "The lace melted perfectly. Everyone thought it was my natural hair.",
  },
  {
    name: "Charlotte D.",
    role: "Hair Enthusiast",
    text: "Silky, luxurious and tangle-free. I couldn't be happier with my purchase.",
  },
  {
    name: "Lily P.",
    role: "Returning Customer",
    text: "I've ordered four times already. The consistency is unmatched.",
  },
  {
    name: "Victoria A.",
    role: "Content Creator",
    text: "These extensions photograph beautifully and hold curls for days.",
  },
  {
    name: "Mia J.",
    role: "Verified Buyer",
    text: "Luxury quality from the first touch. I recommend Hair Harmony to everyone.",
  },
];

function TestimonialCard({
  name,
  role,
  text,
}: (typeof testimonials)[number]) {
  return (
   <div
  className="
    group mx-3 w-[290px] shrink-0 rounded-2xl
    border border-[#caa15b]/20
    bg-gradient-to-br 
    from-[#2a241c]
    via-[#17130f]
    to-[#0d0d0d]
    p-5
    shadow-[0_20px_50px_rgba(0,0,0,0.35)]
    backdrop-blur-md
    transition-all
    duration-500
    hover:-translate-y-2
    hover:border-[#caa15b]/60
    hover:shadow-[0_25px_60px_rgba(202,161,91,0.18)]
  "
>
      <Quote className="mb-3 h-7 w-7 text-[#caa15b]" />

      <div className="mb-3 flex text-[#caa15b]">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-current" />
        ))}
      </div>

      <p className="line-clamp-4 text-sm leading-6 text-white/75">
        "{text}"
      </p>

      <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#caa15b] text-sm font-semibold text-black">
          {name[0]}
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">{name}</h4>
          <p className="text-xs text-white/50">{role}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const top = testimonials.slice(0, 5);
  const bottom = testimonials.slice(5);

  return (
    <section className="overflow-hidden bg-black py-28 text-white">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-[#caa15b]">
          Testimonials
        </p>

        <h2 className="mt-4 font-display text-5xl">
          Loved Around The World
        </h2>

        <div className="mt-6 flex items-center justify-center gap-1 text-[#caa15b]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}

          <span className="ml-3 text-white/60">
            4.9/5 from 2,300+ happy customers
          </span>
        </div>
      </div>

      {/* TOP ROW */}
      <div className="relative flex overflow-hidden">
        <div className="flex animate-[marquee_35s_linear_infinite]">
          {[...top, ...top].map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="relative mt-8 flex overflow-hidden">
        <div className="flex animate-[marquee-reverse_35s_linear_infinite]">
          {[...bottom, ...bottom].map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}