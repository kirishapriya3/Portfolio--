import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { Github, Mail, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Initialize <span className="text-gradient">Connection</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 text-center"
          >
            <div>
              <h3 className="text-2xl font-bold mb-2">Let's build something extraordinary.</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Available for freelance projects and full-time opportunities — let's talk about what you're building.
              </p>
            </div>

            <div className="space-y-6 max-w-xl mx-auto">
              <div className="grid grid-cols-[3rem_minmax(0,1fr)] items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary border border-border group-hover:border-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 text-left">
                  <div className="text-sm text-muted-foreground font-mono mb-1">EMAIL</div>
                  <a href={`mailto:${personalInfo.email}`} className="text-foreground hover:text-primary transition-colors font-medium">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Phone contact removed as requested */}

              <div className="grid grid-cols-[3rem_minmax(0,1fr)] items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent border border-border group-hover:border-accent transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0 text-left">
                  <div className="text-sm text-muted-foreground font-mono mb-1">LOCATION</div>
                  <div className="text-foreground font-medium">
                    {personalInfo.location}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 flex justify-center gap-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all hover:-translate-y-1">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
