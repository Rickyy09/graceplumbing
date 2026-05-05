import { Phone, MessageCircle, AlertTriangle } from "lucide-react";

export function EmergencyBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-emergency py-16 text-emergency-foreground">
      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, white 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }} />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center md:flex-row md:justify-between md:text-left md:px-6">
        <div className="flex items-start gap-4">
          <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur md:flex">
            <AlertTriangle className="h-7 w-7" />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Got a Plumbing Emergency?</h2>
            <p className="mt-1 text-white/90">Burst pipe, blocked drain, no hot water? We're on standby right now.</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="tel:0817074661" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-emergency shadow-elegant transition hover:scale-105">
            <Phone className="h-5 w-5" /> Call Now
          </a>
          <a href="https://wa.me/27817074661" target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 px-6 py-3.5 font-bold text-white transition hover:bg-white/10">
            <MessageCircle className="h-5 w-5" /> WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
}
