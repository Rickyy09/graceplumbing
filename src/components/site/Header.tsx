import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Grace Plumbing Solution" className="h-11 w-11 object-contain" />
          <div className="leading-tight">
            <div className="font-display text-base font-extrabold text-primary md:text-lg">Grace Plumbing</div>
            <div className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Solution · Centurion</div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 transition hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:0817074661"
            className="hidden items-center gap-2 rounded-full bg-gradient-emergency px-5 py-2.5 text-sm font-semibold text-emergency-foreground shadow-elegant transition hover:opacity-95 md:inline-flex"
          >
            <Phone className="h-4 w-4" /> 081 707 4661
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-foreground lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="flex flex-col px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm font-medium text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:0817074661"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-emergency px-4 py-3 text-sm font-semibold text-emergency-foreground"
            >
              <Phone className="h-4 w-4" /> Call 081 707 4661
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
