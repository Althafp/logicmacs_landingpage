import { Navigation } from "@/components/logicmacs/navigation";
import { HeroSection } from "@/components/logicmacs/hero-section";
import { ServicesSection } from "@/components/logicmacs/services-section";
import { ProjectsSection } from "@/components/logicmacs/projects-section";
import { ContactSection } from "@/components/logicmacs/contact-section";
import { FooterSection } from "@/components/logicmacs/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
