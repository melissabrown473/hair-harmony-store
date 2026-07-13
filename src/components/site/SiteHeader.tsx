import { Link } from "@tanstack/react-router";
import { Search, ShoppingBag, User } from "lucide-react";

export function SiteHeader() {
  const nav = [
    { label: "Home", to: "/" as const },
    { label: "Shop", to: "/shop" as const },
    { label: "About", to: "/about" as const },
    { label: "Contact", to: "/contact" as const },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-gold text-gold">
            <span className="font-display text-lg">H</span>
          </span>
          <span className="font-display text-2xl tracking-wide">Hair Harmony</span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-gold" }}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-foreground/80">
          <button aria-label="Search"><Search className="h-5 w-5" /></button>
          <button aria-label="Account"><User className="h-5 w-5" /></button>
          <button aria-label="Cart" className="relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-gold text-[10px] text-gold-foreground">2</span>
          </button>
        </div>
      </div>
    </header>
  );
}
