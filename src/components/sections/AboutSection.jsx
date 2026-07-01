import { motion } from 'framer-motion';

export function AboutSection() {
  const domains = ["MERN Stack", "REST APIs", "React.js", "Node.js", "MongoDB"];

  const highlights = [
    "Build responsive and modern web applications",
    "Design RESTful APIs and backend services",
    "Develop clean, reusable React components",
    "Create MongoDB database schemas",
    "Learn quickly and adapt to new technologies"
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">
            About <span className="text-secondary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 rounded-2xl border-gradient"
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
              <span className="w-8 h-8 rounded bg-primary/20 text-primary flex items-center justify-center text-sm font-mono">01</span>
              The Architecture
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              I'm an aspiring MERN Stack Developer specialize in building full-stack web applications using the MERN stack, with hands-on experience in responsive UI development, RESTful APIs, authentication, and database design. I enjoy creating applications that solve real-world problems while writing clean, maintainable, and scalable code.
            </p>

            <div className="flex flex-wrap gap-2">
              {domains.map((domain, i) => (
                <span key={i} className="px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded-md text-sm font-mono">
                  {domain}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent opacity-30" />

            <div className="space-y-8 relative">
              <div className="glass p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors group">
                <div className="text-primary font-mono font-bold text-xl mb-3">What I Bring</div>
                <p className="text-foreground mb-4">Build responsive and modern web applications</p>
                <ul className="space-y-3 text-foreground text-lg list-none">
                  {highlights.slice(1).map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 text-primary">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
