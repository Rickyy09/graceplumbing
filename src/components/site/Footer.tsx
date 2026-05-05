import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="Grace Plumbing Solution" className="h-10 w-10 rounded bg-white/5 p-1" />
            <div className="font-display text-lg font-extrabold">Grace Plumbing Solution</div>
          </div>
          <p className="mt-3 text-sm text-background/70">Quality, reliable and affordable plumbing & tiling services across Gauteng.</p>
        </div>
        <div>
          <div className="text-sm font-bold uppercase tracking-wider text-background/90">Services</div>
          <ul className="mt-3 space-y-1.5 text-sm text-background/70">
            <li>Geyser Installations</li>
            <li>Bathroom Renovations</li>
            <li>Drainage & Pipes</li>
            <li>Solar Geysers & Heat Pumps</li>
            <li>Waterproofing & Tiling</li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-bold uppercase tracking-wider text-background/90">Contact</div>
          <ul className="mt-3 space-y-1.5 text-sm text-background/80">
            <li><a href="tel:0817074661" className="hover:text-primary-glow">081 707 4661</a></li>
            <li><a href="mailto:info@graceplumbingsolution.co.za" className="hover:text-primary-glow">info@graceplumbingsolution.co.za</a></li>
            <li>Heuweloord, Centurion, Gauteng</li>
            <li className="font-semibold text-emergency">24/7 Emergency Service</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10 py-5 text-center text-xs text-background/50">
        © {new Date().getFullYear()} Grace Plumbing Solution. All rights reserved.
      </div>
    </footer>
  );
}
