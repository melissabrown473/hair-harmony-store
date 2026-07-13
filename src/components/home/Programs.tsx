import { Link } from "@tanstack/react-router";
import program1 from "@/assets/program-1.jpg";
import program2 from "@/assets/program-2.jpg";
import program3 from "@/assets/program-3.jpg";

const programs = [
  { title: "Long Wavy Hair", desc: "Voluminous body and shine", img: program1 },
  { title: "Natural Curly Hair", desc: "Defined, bouncy curls", img: program2 },
  { title: "Glossy Straight Hair", desc: "Sleek, silk-smooth finish", img: program3 },
];

export function Programs() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">By hair type</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Our Programs</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Whether long, wavy, curly or sleek — we've built a routine tailored for it.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {programs.map((p) => (
            <div key={p.title} className="text-center">
              <div className="mx-auto h-56 w-56 overflow-hidden rounded-full ring-4 ring-cream">
                <img src={p.img} alt={p.title} loading="lazy" width={640} height={640} className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-6 font-display text-2xl">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              <Link to="/shop" className="mt-4 inline-block rounded-sm border border-gold px-5 py-2 text-xs font-medium uppercase tracking-widest text-gold transition hover:bg-gold hover:text-gold-foreground">
                Shop Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
