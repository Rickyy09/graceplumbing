import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Projects } from "@/components/site/Projects";
import { EmergencyBanner } from "@/components/site/EmergencyBanner";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingCTAs } from "@/components/site/FloatingCTAs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grace Plumbing Solution | 24/7 Emergency Plumbers in Centurion, Gauteng" },
      { name: "description", content: "Reliable, affordable & certified 24/7 plumbing, geyser, drainage and tiling services in Centurion and across Gauteng. Call 081 707 4661 for fast response." },
      { property: "og:title", content: "Grace Plumbing Solution | 24/7 Plumbers in Gauteng" },
      { property: "og:description", content: "Certified emergency plumbing, geysers, drainage, solar & bathroom renovations in Centurion." },
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
        <Contact />
      </main>
      <Footer />
      <FloatingCTAs />
    </div>
  );
}
