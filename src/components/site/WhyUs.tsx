import { Clock, BadgeCheck, FileCheck2, Wallet, Zap, MapPin } from "lucide-react";

const items = [
  { icon: Clock, title: "24/7 Emergency Response", desc: "Burst pipe at 2am? We answer." },
  { icon: BadgeCheck, title: "Certified & Qualified Plumbers", desc: "Trained pros, not handymen." },
  { icon: FileCheck2, title: "Certificate of Compliance", desc: "COC issued on every install." },
  { icon: Wallet, title: "Affordable, Fair Pricing", desc: "Transparent quotes — no surprises." },
  { icon: Zap, title: "Fast & Reliable Service", desc: "Same-day arrival across Gauteng." },
  { icon: MapPin, title: "All Gauteng Areas Covered", desc: "Centurion, Pretoria, Joburg & beyond." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Why Choose Us</span>
            <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">Trusted by hundreds of Gauteng homeowners</h2>
            <p className="mt-4 text-muted-foreground">
              We've built our reputation on doing the job right the first time — with the paperwork, professionalism and prices to match.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <Stat n="10+" l="Years" />
              <Stat n="1.2k+" l="Jobs done" />
              <Stat n="24/7" l="Available" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {items.map((it) => (
              <div key={it.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <it.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold text-foreground">{it.title}</div>
                  <div className="text-sm text-muted-foreground">{it.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="rounded-xl bg-card p-3 text-center shadow-card">
      <div className="text-2xl font-extrabold text-primary">{n}</div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
    </div>
  );
}
