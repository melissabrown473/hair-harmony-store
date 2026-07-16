import { createFileRoute } from "@tanstack/react-router";

import { TopStrip } from "@/components/site/TopStrip";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { HeroSlider } from "@/components/home/HeroSlider";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { HairCareStat } from "@/components/home/HairCareStat";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { AccessoriesTeaser } from "@/components/home/AccessoriesTeaser";
import { MakeAMoveBanner } from "@/components/home/MakeAMoveBanner";
import { Mission } from "@/components/home/Mission";
import { Programs } from "@/components/home/Programs";
import { Blog } from "@/components/home/Blog";
import { Testimonials } from "@/components/home/Testimonials";
import { Newsletter } from "@/components/home/Newsletter";
import { SpaBanner } from "@/components/home/SpaBanner";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopStrip />
      <SiteHeader />
      <HeroSlider />
      <FeaturedCollections />
      {/* <HairCareStat /> */}
      <SpaBanner/>
      <FeaturedProducts />
      <AccessoriesTeaser />
      
      <MakeAMoveBanner />
      <Programs />
      <Mission />
      <Blog />
      <Testimonials />
      <Newsletter />
      <SiteFooter />
    </div>
  );
}

// Re-exports for backwards compatibility with other routes.
export { SiteHeader } from "@/components/site/SiteHeader";
export { SiteFooter } from "@/components/site/SiteFooter";
export { ProductCard } from "@/components/products/ProductCard";
