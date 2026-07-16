import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { SiteHeader, SiteFooter, ProductCard } from "./index";
import { ALL_PRODUCTS, CATEGORIES } from "@/constants/data/products";




const bannerHair = "/assets/banner-hair.jpg";


export const Route = createFileRoute("/shop")({
  component: ShopPage,
});


function ShopPage() {

  const [active, setActive] =
    useState<(typeof CATEGORIES)[number]>("All");

  const [query,setQuery] = useState("");


  const filtered = useMemo(()=>{

    return ALL_PRODUCTS.filter((product)=>{

      const categoryMatch =
        active === "All" ||
        product.category === active;


      const searchMatch =
        product.title
        .toLowerCase()
        .includes(query.toLowerCase());


      return categoryMatch && searchMatch;

    });

  },[active,query]);



  return (

    <div className="min-h-screen bg-background">

      <SiteHeader />


     <section className="relative min-h-[620px] overflow-hidden">

  <img
    src={bannerHair}
    alt=""
    className="
    absolute inset-0
    h-full w-full
    object-cover
    opacity-40
    "
  />


  <div className="absolute inset-0 bg-black/40"/>


  <div className="
  relative flex min-h-[620px]
  items-center justify-center
  text-center px-6
  ">

    <div className="max-w-3xl">

      <p className="text-xs uppercase tracking-[0.4em] text-gold">
        The Boutique
      </p>


      <h1 className="
      mt-5
      font-display
      text-6xl
      text-white
      ">
        Shop All Hair
      </h1>


      <p className="
      mx-auto
      mt-6
      max-w-xl
      text-base
      leading-8
      text-white/75
      ">
        Explore our luxury collection of premium hair extensions, wigs,
        hair care essentials, accessories, braiding styles, and spa
        treatments designed to enhance your beauty and confidence.
      </p>


    </div>

  </div>

</section>



      <div className="
      sticky top-0 z-20
      border-b bg-background/90
      backdrop-blur
      ">

        <div className="
        mx-auto max-w-7xl
        flex flex-wrap gap-3
        px-6 py-5
        ">


        {CATEGORIES.map(category=>(

          <button
            key={category}
            onClick={()=>setActive(category)}
            className={`
            rounded-full px-5 py-2
            text-xs uppercase tracking-widest
            ${
              active === category
              ?
              "bg-black text-white"
              :
              "border"
            }
            `}
          >

            {category}

          </button>

        ))}



        <div className="
        ml-auto
        flex items-center
        gap-2 border rounded-full
        px-4
        ">

          <Search size={16}/>

          <input
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            placeholder="Search..."
            className="
            bg-transparent
            outline-none
            "
          />

        </div>


        </div>

      </div>



      <section className="py-16">

        <div className="
        mx-auto max-w-7xl
        grid gap-6
        px-6
        sm:grid-cols-2
        lg:grid-cols-4
        ">


        {filtered.map(product=>(

          <ProductCard
            key={product.title}
            p={product}
          />

        ))}


        </div>

      </section>



      <SiteFooter />

    </div>

  );

}