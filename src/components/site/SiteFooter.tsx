import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-primary-foreground/80">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-gold text-gold">
              <span className="font-display">H</span>
            </span>
            <span className="font-display text-2xl text-primary-foreground">Hair Harmony</span>
          </div>
          <p className="mt-4 text-sm">Luxury hair extensions, care and accessories for those who love a beautiful finish.</p>
        </div>
        <div>
          <h4 className="font-display text-lg text-primary-foreground">Shop</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/shop">Extensions</Link></li>
            <li><Link to="/shop">Wigs</Link></li>
            <li><Link to="/shop">Accessories</Link></li>
            <li><Link to="/shop">Hair Care</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg text-primary-foreground">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg text-primary-foreground">Follow</h4>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/20 hover:border-gold hover:text-gold"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/20 hover:border-gold hover:text-gold"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/20 hover:border-gold hover:text-gold"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="Youtube" className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/20 hover:border-gold hover:text-gold"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Hair Harmony Store. Crafted with care.
        </div>
      </div>
    </footer>
  );
}
