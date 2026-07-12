import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SiteHeader, SiteFooter } from "./index";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Hair Harmony Store" },
      { name: "description", content: "Get in touch with Hair Harmony Store. Visit our flagship boutique, call, or send us a message — we usually reply within one business day." },
      { property: "og:title", content: "Contact — Hair Harmony Store" },
      { property: "og:description", content: "Questions about extensions, wigs or accessories? Reach our customer care team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="bg-ink py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">We'd love to hear from you</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">Get in Touch</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-primary-foreground/70">
            Whether you have a question about extensions, colors or a custom bridal look — our team is here to help.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Contact Info</p>
            <h2 className="mt-3 font-display text-4xl">Visit or Call</h2>
            <ul className="mt-8 space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-gold/15 text-gold"><Phone className="h-4 w-4" /></span>
                <div>
                  <p className="font-medium">+1 (415) 555-0134</p>
                  <p className="text-muted-foreground">Mon–Sat, 9am–7pm</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-gold/15 text-gold"><Mail className="h-4 w-4" /></span>
                <div>
                  <p className="font-medium">hello@hairharmony.com</p>
                  <p className="text-muted-foreground">Customer care</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-gold/15 text-gold"><MapPin className="h-4 w-4" /></span>
                <div>
                  <p className="font-medium">218 Powell Street, San Francisco, CA</p>
                  <p className="text-muted-foreground">Flagship Boutique</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-gold/15 text-gold"><Clock className="h-4 w-4" /></span>
                <div>
                  <p className="font-medium">Mon–Sat: 9am–7pm</p>
                  <p className="text-muted-foreground">Sunday: by appointment</p>
                </div>
              </li>
            </ul>
          </div>
          <form className="rounded-lg border border-border bg-card p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Enquiry Form</p>
            <h3 className="mt-2 font-display text-3xl">Send us a Message</h3>
            <div className="mt-6 grid gap-4">
              <input placeholder="Your Name" className="rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold" />
              <input type="email" placeholder="Email Address" className="rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold" />
              <input placeholder="Subject" className="rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold" />
              <textarea placeholder="Message" rows={5} className="rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold" />
              <button className="mt-2 rounded-sm bg-gold px-6 py-3 text-xs font-medium uppercase tracking-widest text-gold-foreground">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
