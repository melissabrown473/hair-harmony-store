import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import bannerHair from "@/assets/banner-hair.jpg";

export function MakeAMoveBanner() {
  return (
    <section className="relative">
      <img src={bannerHair} alt="Flowing hair banner" loading="lazy" width={1600} height={720}
        className="h-[420px] w-full object-cover" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 grid place-items-center">
        <div className="grid h-64 w-64 place-items-center rounded-full bg-background text-center shadow-2xl">
          <div>
            <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-full border border-gold">
              <Sparkles className="h-5 w-5 text-gold" />
            </div>
            <p className="font-display text-2xl">Make a Move</p>
            <p className="mt-1 text-xs text-muted-foreground">Discover the new season</p>
            <Link to="/shop" className="mt-4 inline-block rounded-sm bg-gold px-5 py-2 text-xs font-medium uppercase tracking-widest text-gold-foreground">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
