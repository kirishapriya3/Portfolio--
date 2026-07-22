import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
// Education section removed per request
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-grid-pattern selection:bg-primary/30 selection:text-primary relative">
      <Navigation />
      <main className="relative z-10 pt-20 md:pt-24">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <footer className="py-8 text-center border-t border-border/30 glass">
        <p className="text-muted-foreground font-mono text-sm">
          © {new Date().getFullYear()} Kirisha Priya. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
