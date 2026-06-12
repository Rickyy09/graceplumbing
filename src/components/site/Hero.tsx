import { Phone, MessageCircle, ShieldCheck, BadgeCheck, Wrench, Clock } from "lucide-react";
const hero = "/hero-plumber.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero text-white">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:px-6 md:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emergency opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emergency" />
            </span>
            Grace Plumbing Solution - Pty Ltd
          </div>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
            Quality and Reliable Plumbing, Maintenance & Installation Services in <span className="text-primary-glow">Centurion</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/85">
            Grace Plumbing Solution - Pty Ltd provides affordable, reliable and professional plumbing services for homes, businesses and commercial properties across Centurion and surrounding areas. Our team is registered, qualified and licensed to deliver repairs, maintenance, installations, geyser work, drainage solutions and 24/7 emergency call-outs.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:0817074661"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-emergency px-7 py-4 text-base font-bold text-emergency-foreground shadow-elegant transition hover:scale-[1.02] animate-pulse-ring"
            >
              <Phone className="h-5 w-5" /> Call 081 707 4661
            </a>
            <a
              href="https://wa.me/27817074661?text=Hi%20Grace%20Plumbing%20Solution%2C%20I%20need%20a%20free%20quote"
              target="_blank" rel="noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 bg-white/5 px-7 py-4 text-base font-bold text-white transition hover:bg-white/15"
            >
              <MessageCircle className="h-5 w-5" /> Free Quote (WhatsApp)
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
            <Trust icon={ShieldCheck} text="PIRB Registered" />
            <Trust icon={BadgeCheck} text="Qualified & Licensed" />
            <Trust icon={Clock} text="24/7 Emergency" />
            <Trust icon={Wrench} text="Affordable & Reliable" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-primary-glow/30 blur-3xl" />
          <img
            src={hero}
            alt="Certified Grace Plumbing Solution - Pty Ltd plumber working in Centurion"
            width={1920} height={1080}
            className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-elegant ring-1 ring-white/20"
          />
          <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-foreground shadow-card md:left-auto md:right-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emergency/10 text-emergency">
              <Clock className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-xs text-muted-foreground">Same-day service</div>
              <div className="text-sm font-bold">Avg. arrival under 60 min</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust({ icon: Icon, text }: { icon: React.ComponentType<{ className?: string }>; text: string }) {
  return (
    <div className="flex flex-col items-start gap-1.5 rounded-lg border border-white/15 bg-white/5 p-3 backdrop-blur">
      <Icon className="h-5 w-5 text-primary-glow" />
      <span className="font-semibold">{text}</span>
    </div>
  );
}
