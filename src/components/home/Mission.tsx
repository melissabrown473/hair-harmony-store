import { Link } from "@tanstack/react-router";
import mission1 from "@/assets/mission-1.jpg";
import mission2 from "@/assets/mission-2.jpg";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";

export function Mission() {
  return (
    <section className="bg-ink py-20 text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Our Mission</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Mission</h2>
          <p className="mt-6 max-w-md text-sm text-primary-foreground/70">
            We are a small, passionate team obsessed with sourcing the finest ethically-collected human hair. Every bundle is inspected by hand, every accessory chosen with intent — because you deserve pieces that last far longer than a trend.
          </p>
          <Link to="/about" className="mt-8 inline-block rounded-sm bg-gold px-6 py-3 text-xs font-medium uppercase tracking-widest text-gold-foreground transition hover:brightness-110">
            Read Our Story
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src={mission1} alt="Curly hair texture" loading="lazy" width={560} height={560} className="h-56 w-full rounded-sm object-cover md:h-64" />
          <img src={mission2} alt="Wavy hair texture" loading="lazy" width={560} height={560} className="h-56 w-full rounded-sm object-cover md:h-64" />
          <img src={collection1} alt="Curly model" loading="lazy" width={600} height={700} className="h-56 w-full rounded-sm object-cover md:h-64" />
          <img src={collection2} alt="Straight model" loading="lazy" width={640} height={768} className="h-56 w-full rounded-sm object-cover md:h-64" />
        </div>
      </div>
    </section>
  );
}
