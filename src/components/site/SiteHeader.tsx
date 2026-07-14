import { Link } from "@tanstack/react-router";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const nav = [
    { label: "Home", to: "/" as const },
    { label: "Shop", to: "/shop" as const },
    { label: "About", to: "/about" as const },
    { label: "Contact", to: "/contact" as const },
  ];

  const iconColor = scrolled ? "text-foreground" : "text-white";

  return (
    <header
      className={`
      fixed top-0 left-0 z-50 w-full
      transition-all duration-300
      ${scrolled ? "border-b border-border/60 bg-background/95 backdrop-blur-xl" : "bg-transparent"}
      `}
    >
      <div
        className="
        mx-auto flex max-w-7xl
        items-center justify-between
        px-5 py-4
        "
      >
        {/* LOGO */}

        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
          <span
            className="
            grid h-10 w-10
            place-items-center
            rounded-full
            border border-gold
            text-gold
            "
          >
            <span className="font-display text-lg">H</span>
          </span>

          <span
            className={`
            font-display text-xl tracking-wide
            sm:text-2xl
            ${scrolled ? "text-foreground" : "text-white"}
            `}
          >
            Hair Harmony
          </span>
        </Link>

        {/* DESKTOP NAV */}

        <nav className="hidden items-center gap-10 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              activeOptions={{ exact: true }}
              activeProps={{
                className: "text-gold",
              }}
              className={`
              text-sm font-medium
              transition hover:text-gold
              ${scrolled ? "text-foreground/80" : "text-white/90"}
              `}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ACTIONS */}

        <div className={`flex items-center gap-4 ${iconColor}`}>
          <button aria-label="Search">
            <Search className="h-5 w-5" />
          </button>

          <button className="hidden sm:block" aria-label="Account">
            <User className="h-5 w-5" />
          </button>

          <button aria-label="Cart" className="relative">
            <ShoppingBag className="h-5 w-5" />

            <span
              className="
              absolute -right-2 -top-2
              grid h-4 w-4
              place-items-center
              rounded-full
              bg-gold
              text-[10px]
              text-black
              "
            >
              2
            </span>
          </button>

          {/* MOBILE MENU BUTTON */}

          <button onClick={() => setOpen(!open)} className="lg:hidden" aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}

      <div
        className={`
        absolute left-0 top-full
        w-full
        overflow-hidden
        bg-background
        shadow-xl
        transition-all duration-300
        lg:hidden
        ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav
          className="
          flex flex-col
          gap-6
          px-6
          py-8
          "
        >
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setOpen(false)}
              className="
              text-lg
              font-medium
              text-foreground
              transition
              hover:text-gold
              "
            >
              {item.label}
            </Link>
          ))}

          <div className="border-t border-border pt-5">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Luxury Hair Collection
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
