import { motion } from 'framer-motion';
import { certifications } from '@/lib/data';
import { Award, ExternalLink } from 'lucide-react';

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Professional <span className="text-primary">Credentials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </motion.div>

        <div className="max-w-xl mx-auto grid grid-cols-1 gap-6">
          {certifications.map((cert, idx) => {
            const content = (
              <>
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                <div className="w-full flex flex-col items-center text-center">
                  <h3 className="w-full font-bold text-foreground leading-tight mb-1 group-hover:text-primary transition-colors flex items-center justify-center gap-2 text-center">
                    {cert.title}
                    {cert.credentialUrl && <ExternalLink className="w-4 h-4 shrink-0" />}
                  </h3>
                  <p className="text-sm text-muted-foreground font-mono">Verified Credential</p>
                </div>
              </>
            );

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-4 border border-border/50 hover:border-primary/50 transition-colors group h-full"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-4 border border-border/50 hover:border-primary/50 transition-colors group h-full">
                    {content}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
