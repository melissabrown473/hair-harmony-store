import { ShoppingBag, Star } from "lucide-react";

export type Product = { title: string; price: string; img: string; tag?: string };

export function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group relative overflow-hidden rounded-sm bg-background transition hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.35)]">
      <div className="relative overflow-hidden bg-muted">
        <img src={p.img} alt={p.title} loading="lazy" width={640} height={768}
          className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        {p.tag && (
          <span className="absolute left-3 top-3 rounded-sm bg-gold px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-gold-foreground">{p.tag}</span>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <button
          type="button"
          className="pointer-events-auto absolute inset-x-4 bottom-4 translate-y-4 rounded-sm bg-gold py-2.5 text-[11px] font-medium uppercase tracking-widest text-gold-foreground opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 hover:brightness-110"
        >
          <span className="inline-flex items-center justify-center gap-2">
            <ShoppingBag className="h-3.5 w-3.5" /> Add to Cart
          </span>
        </button>
      </div>
      <div className="p-4 text-center">
        <h4 className="font-display text-lg">{p.title}</h4>
        <div className="mt-1 flex items-center justify-center gap-0.5 text-gold">
          {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
        </div>
        <p className="mt-1 text-sm font-medium">{p.price}</p>
      </div>
    </article>
  );
}
