export type Product = {
  title: string;
  price: string;
  img: string;
  tag?: string;
  category: string;
};

export const CATEGORIES = [
  "All",
  "Extensions",
  "Wigs",
  "Accessories",
  "Hair Care",
  "Braiding",
  "Spa",
] as const;


export const ALL_PRODUCTS: Product[] = [

  // EXTENSIONS
  {
    title: "Curly Auburn Extension",
    price: "$80.00",
    img: "/assets/product-1.jpg",
    tag: "New",
    category: "Extensions",
  },
  {
    title: "Wavy Slavic Tape-In Hair Extensions",
    price: "$119.00",
    img: "/assets/product-2.jpg",
    tag: "Best",
    category: "Extensions",
  },
  {
    title: "Hair Extensions | From Thin to Thick Hair",
    price: "$149.00",
    img: "/assets/product-3.jpg",
    tag: "Hot",
    category: "Extensions",
  },
  {
    title: "32-Inch Ombre Clip-On Ponytail",
    price: "$99.00",
    img: "/assets/product-4.jpg",
    tag: "New",
    category: "Extensions",
  },
  {
    title: "Tape-In Extensions",
    price: "$89.00",
    img: "/assets/product-5.jpg",
    tag: "New",
    category: "Extensions",
  },


  // WIGS
  {
    title: "Water Wave 5x5 Closure HD Lace Glueless Wig",
    price: "$249.00",
    img: "/assets/program-1.jpg",
    tag: "New",
    category: "Wigs",
  },
  {
    title: "Glueless Custom Wig",
    price: "$279.00",
    img: "/assets/program-2.jpg",
    tag: "Hot",
    category: "Wigs",
  },
  {
    title: "Silk Straight HD Lace",
    price: "$299.00",
    img: "/assets/program-3.jpg",
    tag: "Best",
    category: "Wigs",
  },
  {
    title: "Body Wave Glueless",
    price: "$229.00",
    img: "/assets/collection-2.jpg",
    tag: "New",
    category: "Wigs",
  },


  // HAIR CARE
  {
    title: "Argan Repair Shampoo",
    price: "$28.00",
    img: "/assets/collection-1.jpg",
    tag: "Best",
    category: "Hair Care",
  },
  {
    title: "GOT2B Glued",
    price: "$32.00",
    img: "/assets/collection-3.jpg",
    tag: "New",
    category: "Hair Care",
  },
  {
    title: "Hair Vitamins",
    price: "$44.00",
    img: "/assets/mission-5.jpg",
    tag: "Hot",
    category: "Hair Care",
  },
  {
    title: "Oil Control Shampoo Refreshing",
    price: "$36.00",
    img: "/assets/mission-6.png",
    tag: "New",
    category: "Hair Care",
  },


  // ACCESSORIES
  {
    title: "Hair Brush Set with Spray Bottle",
    price: "$24.00",
    img: "/assets/accessories6.jpg",
    tag: "New",
    category: "Accessories",
  },
  {
    title: "Gold Hair Clip",
    price: "$18.00",
    img: "/assets/accessories7.jpg",
    tag: "Hot",
    category: "Accessories",
  },
  {
    title: "Hair Straightener LCD",
    price: "$22.00",
    img: "/assets/accessories8.jpg",
    tag: "Best",
    category: "Accessories",
  },
  {
    title: "Elite Hair Steamer",
    price: "$16.00",
    img: "/assets/accessories9.jpg",
    tag: "New",
    category: "Accessories",
  },


  // BRAIDING
  {
    title: "5-Pack Synthetic Jumbo Braided Hair Extensions",
    price: "$120.00",
    img: "/assets/braiding.png",
    tag: "Popular",
    category: "Braiding",
  },
  {
    title: "Curly Fulani Boho Deep Wave Crochet",
    price: "$95.00",
    img: "/assets/braiding4.png",
    tag: "Trending",
    category: "Braiding",
  },
  {
    title: "Pre-Stretched Braiding Hair",
    price: "$150.00",
    img: "/assets/braiding1.png",
    tag: "Best Seller",
    category: "Braiding",
  },
  {
    title: "Cornrow Stitch Design",
    price: "$65.00",
    img: "/assets/braiding2.png",
    tag: "New",
    category: "Braiding",
  },


  // SPA
  {
    title: "Swedish Full Body Massage",
    price: "$85.00",
    img: "/assets/sweden.jpg",
    tag: "Relaxing",
    category: "Spa",
  },
  {
    title: "Deep Cleansing Facial",
    price: "$70.00",
    img: "/assets/Facial.jpg",
    tag: "Popular",
    category: "Spa",
  },
  {
    title: "Aromatherapy Spa Package",
    price: "$110.00",
    img: "/assets/Aromatherapy.jpg",
    tag: "Best Value",
    category: "Spa",
  },
  {
    title: "Luxury Manicure & Pedicure",
    price: "$55.00",
    img: "/assets/ManicurePedicure.jpg",
    tag: "New",
    category: "Spa",
  },

];