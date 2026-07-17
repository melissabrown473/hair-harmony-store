import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import BookingModal from "../booking-modal";


export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

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
    <>
      <header
        className={`
          fixed top-0 left-0 z-50 w-full
          transition-all duration-300
          ${
            scrolled
              ? "border-b border-border/60 bg-background/95 backdrop-blur-xl"
              : "bg-transparent"
          }
        `}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full border border-gold text-gold">
              <span className="font-display text-lg">H</span>
            </span>

            <span
              className={`font-display text-xl tracking-wide sm:text-2xl ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              Hair Harmony
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                activeOptions={{ exact: true }}
                activeProps={{
                  className: "text-gold",
                }}
                className={`text-sm font-medium transition hover:text-gold ${
                  scrolled ? "text-foreground/80" : "text-white/90"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Desktop Book Button */}
            <button
              onClick={() => setBookingOpen(true)}
              className="
                hidden
                rounded-full
                bg-gold
                px-6
                py-2.5
                text-sm
                font-semibold
                text-black
                transition-all
                hover:scale-105
                hover:bg-gold/90
                lg:block
              "
            >
              Book Appointment
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className={`lg:hidden ${iconColor}`}
              aria-label="Menu"
            >
              {open ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
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
          <nav className="flex flex-col gap-6 px-6 py-8">
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

            {/* Mobile Book Button */}
            <button
              onClick={() => {
                setOpen(false);
                setBookingOpen(true);
              }}
              className="
                w-full
                rounded-full
                bg-gold
                py-3
                font-semibold
                text-black
                transition
                hover:bg-gold/90
              "
            >
              Book Appointment
            </button>

            <div className="border-t border-border pt-5">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Luxury Hair Collection
              </p>
            </div>
          </nav>
        </div>
      </header>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </>
  );
}