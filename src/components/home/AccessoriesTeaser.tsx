import { Link } from "@tanstack/react-router";
import accessoriesImg from "@/assets/accessories.jpg";

export function AccessoriesTeaser() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Hair Accessories</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Little details, big impact.</h2>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            From pearl-tipped pins to gilded combs, our accessories collection is designed to finish any look — bridal, everyday or after-hours.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {["Pearl Hair Pins","Gold Hair Clips","Tortoise Combs","Silk Scrunchies","Bridal Tiaras","Vintage Barrettes"].map((a) => (
              <li key={a} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-gold" /> {a}
              </li>
            ))}
          </ul>
          <Link to="/shop" className="mt-8 inline-block rounded-sm bg-ink px-6 py-3 text-xs font-medium uppercase tracking-widest text-primary-foreground transition hover:bg-ink/90">
            Shop Accessories
          </Link>
        </div>
        <div className="order-1 md:order-2">
          <img src={accessoriesImg} alt="Luxury hair accessories flat lay" loading="lazy" width={640} height={768}
            className="h-[520px] w-full rounded-sm object-cover" />
        </div>
      </div>
    </section>
  );
}
