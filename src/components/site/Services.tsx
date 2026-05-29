import { Wrench, Flame, Waves, Hammer, Gauge, Database, Leaf, Siren, ArrowRight } from "lucide-react";

const services = [
  { icon: Wrench, title: "General Plumbing Repairs & Maintenance", desc: "Leaks, burst pipes, taps, mixers, showers, toilets and general plumbing maintenance." },
  { icon: Flame, title: "Geysers & Hot Water Systems", desc: "Electric geysers, solar geysers, heat pumps, repairs, replacements and compliance checks." },
  { icon: Waves, title: "Drainage & Blockages", desc: "Drain unblocking, sewer lines, high-pressure jetting and CCTV drain camera inspections." },
  { icon: Hammer, title: "New Installations & Renovations", desc: "Plumbing for new builds, bathroom and kitchen renovations, basins, baths, showers, toilets and sinks." },
  { icon: Gauge, title: "Water Supply & Reticulation", desc: "Water supply lines, water meters, valves, pressure testing and system checks." },
  { icon: Database, title: "Water Backup Systems", desc: "Storage tanks, pumps, control valves and backup water solutions for homes and businesses." },
  { icon: Leaf, title: "Water Conservation Solutions", desc: "Water-saving fixtures, leak checks, greywater/rainwater systems and efficient water usage advice." },
  { icon: Siren, title: "24/7 Emergency Plumbing", desc: "Rapid response for leaks, burst pipes, blocked drains and geyser failures." },
];

export function Services() {
  return (
    <section id="services" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Our Services</span>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">Complete Plumbing & Tiling Solutions</h2>
          <p className="mt-3 text-muted-foreground">From a dripping tap to a full bathroom renovation — one trusted team.</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <a
              key={s.title}
              href="#contact"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:border-burgundy/50 hover:shadow-elegant"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 transition group-hover:bg-primary/10" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="relative mt-5 text-lg font-bold text-foreground">{s.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="relative mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Get a quote <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
