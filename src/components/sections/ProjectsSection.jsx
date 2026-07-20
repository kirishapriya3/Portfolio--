import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import { CalendarDays, ExternalLink, Github } from 'lucide-react';

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20 py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-2xl border border-border/50 hover:border-accent/50 transition-all duration-300 group flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors" />

              <div className="relative overflow-hidden" style={{ margin: '20px 20px 0 20px', borderRadius: '12px' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  style={{ height: '224px', borderRadius: '12px' }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.35) 100%)',
                    borderRadius: '12px',
                  }}
                />
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-xs font-mono rounded bg-background border border-border text-muted-foreground group-hover:border-accent/30 group-hover:text-foreground transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-gradient transition-all">{project.title}</h3>
                <div className="mb-4 flex items-center gap-2 text-sm font-mono text-accent">
                  <CalendarDays className="h-4 w-4" />
                  <span>{project.duration}</span>
                </div>
                <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-col gap-3 mt-auto">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <div className="flex flex-wrap gap-2">
                    {project.github.map((gh) => (
                      <a
                        key={gh.label}
                        href={gh.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium hover:border-accent hover:text-accent transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        {gh.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
