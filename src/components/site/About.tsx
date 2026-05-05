import { CheckCircle2 } from "lucide-react";
import logo from "@/assets/logo.png";

const points = [
  "Years of hands-on industry experience",
  "Customer satisfaction is our priority",
  "Professional, certified workmanship",
  "Quality materials & lasting results",
];

export function About() {
  return (
    <section id="about" className="bg-secondary py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center md:px-6">
        <div className="relative">
          <div className="aspect-square w-full max-w-md rounded-3xl bg-gradient-hero p-10 shadow-elegant">
            <img src={logo} alt="Grace Plumbing Solution logo" className="h-full w-full object-contain animate-float" />
          </div>
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">About Us</span>
          <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">Quality, reliable & affordable plumbing</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Grace Plumbing Solution provides quality, reliable and affordable plumbing and tiling services across Gauteng. We believe every home deserves a plumber it can actually trust.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-foreground">{p}</span>
              </li>
            ))}
          </ul>
          <blockquote className="mt-8 rounded-xl border-l-4 border-emergency bg-card p-5 italic text-foreground shadow-card">
            "We've got the solution to all your plumbing problems."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
