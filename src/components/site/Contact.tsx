import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const phone = data.get("phone");
    const message = data.get("message");
    const wa = `https://wa.me/27817074661?text=${encodeURIComponent(
      `Hi Grace Plumbing,\nName: ${name}\nPhone: ${phone}\n\n${message}`
    )}`;
    window.open(wa, "_blank");
    setSent(true);
    form.reset();
  }

  return (
    <section id="contact" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Contact</span>
          <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">Get a free quote today</h2>
          <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-emergency/10 px-3 py-1 text-sm font-semibold text-emergency">
            <Clock className="h-4 w-4" /> Available 24/7 for emergencies
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <ContactCard icon={Phone} title="Call us" lines={[<a key="t" href="tel:0817074661" className="font-bold text-primary">081 707 4661</a>]} />
            <ContactCard icon={Mail} title="Email" lines={[<a key="e" href="mailto:info@graceplumbingsolution.co.za" className="font-medium text-foreground break-all">info@graceplumbingsolution.co.za</a>]} />
            <ContactCard icon={MapPin} title="Location" lines={["Heuwelsig Estate, Shira Ridge,", "Brilwewer Cres, Heuweloord,", "Centurion, 0157"]} />
            <div className="overflow-hidden rounded-2xl border border-border shadow-card">
              <iframe
                title="Grace Plumbing Solution - Pty Ltd location"
                src="https://www.google.com/maps?q=Heuwelsig%20Estate%2C%20Shira%20Ridge%2C%20Brilwewer%20Cres%2C%20Heuweloord%2C%20Centurion%2C%200157&output=embed"
                className="h-56 w-full"
                loading="lazy"
              />
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-card lg:col-span-3">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="name" label="Your name" required />
              <Field name="phone" label="Phone" type="tel" required />
            </div>
            <Field name="email" label="Email (optional)" type="email" />
            <div>
              <label className="text-sm font-medium text-foreground">How can we help?</label>
              <textarea name="message" required rows={5} placeholder="Briefly describe the issue or project…" className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/20" />
            </div>
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 font-bold text-primary-foreground shadow-elegant transition hover:opacity-95">
              <Send className="h-4 w-4" /> Send via WhatsApp
            </button>
            {sent && <p className="text-sm text-primary">Opening WhatsApp with your message…</p>}
            <p className="text-center text-xs text-muted-foreground">Or call <a href="tel:0817074661" className="font-semibold text-primary">081 707 4661</a> for an instant response.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, title, lines }: { icon: React.ComponentType<{ className?: string }>; title: string; lines: React.ReactNode[] }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-sm font-semibold text-muted-foreground">{title}</div>
        <div className="mt-0.5 space-y-0.5 text-sm">{lines.map((l, i) => <div key={i}>{l}</div>)}</div>
      </div>
    </div>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">{label}{required && <span className="text-emergency"> *</span>}</label>
      <input name={name} type={type} required={required} className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/20" />
    </div>
  );
}
