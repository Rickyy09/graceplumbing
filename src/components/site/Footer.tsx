import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Grace Plumbing Solution - Pty Ltd" className="h-12 w-12 rounded-full bg-white object-contain p-0.5" />
            <div className="leading-tight">
              <div className="font-display text-base font-extrabold">Grace Plumbing Solution</div>
              <div className="text-[11px] font-semibold uppercase tracking-widest text-white/70">Pty Ltd · Centurion</div>
            </div>
          </div>
          <p className="mt-3 text-sm text-white/75">Registered, qualified and licensed plumbers delivering reliable and affordable plumbing solutions for homes, businesses and commercial properties.</p>
        </div>
        <div>
          <div className="text-sm font-bold uppercase tracking-wider text-white/90">Services</div>
          <ul className="mt-3 space-y-1.5 text-sm text-white/75">
            <li>General Plumbing Repairs</li>
            <li>Geysers & Hot Water Systems</li>
            <li>Drainage & Blockages</li>
            <li>Installations & Renovations</li>
            <li>Water Backup & Conservation</li>
            <li className="font-semibold text-emergency">24/7 Emergency Service</li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-bold uppercase tracking-wider text-white/90">Contact</div>
          <ul className="mt-3 space-y-1.5 text-sm text-white/85">
            <li><a href="tel:0817074661" className="hover:text-primary-glow">081 707 4661</a></li>
            <li><a href="mailto:info@graceplumbingsolution.co.za" className="hover:text-primary-glow break-all">info@graceplumbingsolution.co.za</a></li>
            <li>www.graceplumbingsolution.co.za</li>
            <li>Heuwelsig Estate, Shira Ridge,<br/>Brilwewer Cres, Heuweloord,<br/>Centurion, 0157</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Grace Plumbing Solution - Pty Ltd. All rights reserved.
      </div>
    </footer>
  );
}
