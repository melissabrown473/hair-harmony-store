import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function TopStrip() {
  return (
    <div className="bg-ink text-primary-foreground text-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <span className="opacity-80">Welcome to Hair Harmony Store — Free shipping on orders over $150</span>
        <div className="hidden items-center gap-4 opacity-80 md:flex">
          <a href="#" aria-label="Facebook"><Facebook className="h-3.5 w-3.5" /></a>
          <a href="#" aria-label="Instagram"><Instagram className="h-3.5 w-3.5" /></a>
          <a href="#" aria-label="Twitter"><Twitter className="h-3.5 w-3.5" /></a>
          <a href="#" aria-label="Youtube"><Youtube className="h-3.5 w-3.5" /></a>
          <span className="ml-2 rounded bg-gold px-2 py-0.5 text-gold-foreground">EN</span>
        </div>
      </div>
    </div>
  );
}
