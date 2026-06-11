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

export default function App() {
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
