import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const blogPosts = [
  { date: "MAR 08", title: "The complete guide to hair extension care", img: blog1 },
  { date: "MAR 12", title: "How to choose the right hair color for you", img: blog2 },
  { date: "MAR 18", title: "Salon secrets for red-carpet worthy waves", img: blog3 },
];

export function Blog() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">From the journal</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Stay Tuned for Updates</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((b) => (
            <article key={b.title} className="overflow-hidden rounded-sm bg-background shadow-[0_10px_40px_-20px_rgba(0,0,0,0.15)]">
              <img src={b.img} alt={b.title} loading="lazy" width={720} height={560} className="h-56 w-full object-cover" />
              <div className="p-6">
                <span className="text-xs uppercase tracking-widest text-gold">{b.date}</span>
                <h3 className="mt-2 font-display text-xl leading-snug">{b.title}</h3>
                <button className="mt-4 rounded-sm bg-gold px-4 py-2 text-[10px] font-medium uppercase tracking-widest text-gold-foreground">
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
