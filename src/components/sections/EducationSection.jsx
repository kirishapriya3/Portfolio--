import { motion } from 'framer-motion';
import { education } from '@/lib/data';
import { GraduationCap } from 'lucide-react';

export function EducationSection() {
  return (
    <section id="education" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Academic <span className="text-secondary">Background</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="glass-card p-6 md:p-8 rounded-2xl border-gradient flex gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="text-primary font-mono font-bold mb-2">{edu.period}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-1 text-foreground">{edu.degree}</h3>
                <h4 className="text-lg text-secondary mb-2 font-medium">{edu.institution}, {edu.location}</h4>
                <p className="text-muted-foreground">{edu.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
