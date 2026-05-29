import { CheckCircle2 } from "lucide-react";
import logo from "@/assets/logo.png";

const points = [
  "Registered, qualified & licensed plumbers",
  "Residential, commercial & business clients",
  "Compliant with SANS standards & municipal by-laws",
  "Honest pricing & long-term plumbing solutions",
];

export function About() {
  return (
    <section id="about" className="bg-secondary py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center md:px-6">
        <div className="relative">
          <div className="aspect-square w-full max-w-md rounded-3xl bg-white p-8 shadow-elegant ring-1 ring-border">
            <img src={logo} alt="Grace Plumbing Solution - Pty Ltd logo" className="h-full w-full object-contain animate-float" />
          </div>
        </div>
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-8 bg-burgundy" /> About Us
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">Grace Plumbing Solution - Pty Ltd</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Grace Plumbing Solution - Pty Ltd was established to help homes, businesses and commercial properties maintain safe, healthy and effective plumbing systems. With years of experience, registered workmanship and a customer-focused approach, we provide reliable plumbing solutions without draining your pocket.
          </p>
          <p className="mt-3 text-muted-foreground">
            We're committed to honest service, quality workmanship, safety and reliability — working in line with South African plumbing standards, SANS standards, municipal by-laws and proper compliance requirements where applicable.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-foreground">{p}</span>
              </li>
            ))}
          </ul>
          <blockquote className="mt-8 rounded-xl border-l-4 border-burgundy bg-card p-5 italic text-foreground shadow-card">
            "Quality, Reliable & Affordable Plumbing Service. Grace Plumbing Solution is here for you."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
