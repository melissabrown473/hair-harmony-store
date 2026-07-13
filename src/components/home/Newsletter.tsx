import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[image:radial-gradient(ellipse_at_center,var(--cream),transparent_70%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-2xl bg-ink px-8 py-16 text-primary-foreground shadow-2xl md:px-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)", backgroundSize: "24px 24px" }} />

          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-gold">
                <Mail className="h-3 w-3" /> Newsletter
              </div>
              <h2 className="font-display text-4xl leading-tight md:text-5xl">
                Join the <span className="text-gold">Harmony</span> Circle
              </h2>
              <p className="mt-4 max-w-md text-sm text-primary-foreground/70">
                Get 10% off your first order, insider styling tips, and first-access to new drops. No spam — just beautiful hair.
              </p>
              <div className="mt-6 flex items-center gap-4 text-xs text-primary-foreground/60">
                <div className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> 10% welcome discount</div>
                <div className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> Early access</div>
              </div>
            </div>

            <form className="space-y-3">
              <label className="block text-xs uppercase tracking-[0.3em] text-primary-foreground/60">Your email address</label>
              <div className="flex flex-col gap-3 rounded-sm bg-primary-foreground/5 p-2 sm:flex-row sm:items-center">
                <div className="flex flex-1 items-center gap-2 px-3">
                  <Mail className="h-4 w-4 text-gold" />
                  <input
                    type="email"
                    required
                    placeholder="you@harmony.com"
                    className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-primary-foreground/40"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-sm bg-gold px-6 py-3 text-xs font-medium uppercase tracking-widest text-gold-foreground transition hover:brightness-110"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-[11px] text-primary-foreground/40">
                By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
