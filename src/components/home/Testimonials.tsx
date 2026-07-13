import { Quote, Star } from "lucide-react";

const testimonials = [
  { name: "Emma R.", role: "Verified Buyer", text: "Hair Harmony completely transformed my hair. The extensions blend seamlessly and feel like my own — I honestly can't tell where mine ends and theirs begins." },
  { name: "Sophia L.", role: "Stylist", text: "Beautiful quality, beautiful packaging, beautiful people. As a professional stylist, this is the only brand I recommend to my clients now." },
  { name: "Amelia W.", role: "Bridal Client", text: "The accessories collection is exquisite — I wore the pearl pins for my wedding and got compliments every single time I turned around." },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-primary-foreground">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full border border-gold/20" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full border border-gold/10" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Testimonials</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Loved by thousands worldwide</h2>
          <div className="mt-4 flex items-center justify-center gap-1 text-gold">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
            <span className="ml-2 text-sm text-primary-foreground/70">4.9 average from 2,300+ reviews</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <figure
              key={t.name}
              className={`group relative rounded-lg border border-primary-foreground/10 bg-gradient-to-br from-primary-foreground/[0.07] to-primary-foreground/[0.02] p-8 backdrop-blur transition hover:-translate-y-1 hover:border-gold/40 ${
                idx === 1 ? "md:-translate-y-4" : ""
              }`}
            >
              <Quote className="absolute -top-4 left-6 h-10 w-10 rounded-full bg-gold p-2 text-gold-foreground shadow-lg" />
              <div className="mb-4 flex gap-0.5 text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="text-sm leading-relaxed text-primary-foreground/85">"{t.text}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-primary-foreground/10 pt-4">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gold/20 font-display text-gold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-display text-base text-primary-foreground">{t.name}</p>
                  <p className="text-xs text-primary-foreground/60">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
