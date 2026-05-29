import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Projects } from "@/components/site/Projects";
import { EmergencyBanner } from "@/components/site/EmergencyBanner";
import { About } from "@/components/site/About";
import { Reviews } from "@/components/site/Reviews";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingCTAs } from "@/components/site/FloatingCTAs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grace Plumbing Solution - Pty Ltd | Plumbers in Centurion" },
      { name: "description", content: "Registered, qualified & licensed plumbers in Centurion. Reliable and affordable plumbing, geyser, drainage and emergency services for homes and businesses. Call 081 707 4661." },
      { property: "og:title", content: "Grace Plumbing Solution - Pty Ltd | Plumbers in Centurion" },
      { property: "og:description", content: "Registered, qualified & licensed plumbers serving Centurion, Midrand, Sandton, Randburg, Pretoria Lynnwood and Kempton Park." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Projects />
        <EmergencyBanner />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingCTAs />
    </div>
  );
}
