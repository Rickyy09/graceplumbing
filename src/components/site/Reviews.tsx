import { Star, ExternalLink } from "lucide-react";

const reviews = [
  { name: "Stewart Mackay", text: "Top quality work, on time every day, clean and competitive rates. I will certainly be using NK and his team with Grace Plumbing again." },
  { name: "Ndione Maluwa", text: "Very professional. He assessed the work, quoted, and completed it so professionally. I couldn't be happier." },
  { name: "Lawrence Zimba", text: "They assisted me within 20 minutes of contacting them. Reliable, transparent upfront, and no hidden costs." },
  { name: "Andre Steenberg", text: "Exceptional service, arranged to replace a burst geyser on a public holiday within a few hours." },
];

export function Reviews() {
  return (
    <section id="reviews" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-8 bg-burgundy" /> Google Reviews <span className="h-px w-8 bg-burgundy" />
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">Trusted by Local Homeowners & Businesses</h2>
          <p className="mt-3 text-muted-foreground">
            Real feedback from customers who have used Grace Plumbing Solution - Pty Ltd for repairs, renovations, blocked drains, geysers and ongoing plumbing work.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <article key={r.name} className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition hover:border-burgundy/40 hover:shadow-elegant">
              <div className="flex items-center gap-1 text-amber-500">
                {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/90">"{r.text}"</p>
              <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {r.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">{r.name}</div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Google Review</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://g.page/r/CS9u2AiwNA3OEAE/review"
            target="_blank" rel="noopener"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-card transition hover:border-burgundy/50 hover:text-primary"
          >
            View More Google Reviews <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
