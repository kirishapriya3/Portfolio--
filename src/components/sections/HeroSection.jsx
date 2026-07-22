import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { ParticleBackground } from '@/components/ParticleBackground';
import { ArrowRight, Download, Mail } from 'lucide-react';

const ROLES = ["Full Stack Developer", "MERN Stack Developer"];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      } else {
        setText(currentRole.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  const [firstName, lastName] = personalInfo.name.split(" ");

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden pt-12 md:pt-16"
    >
      <ParticleBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg md:text-xl mb-2 font-mono"
          >
            Hi, I'm
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6"
          >
            <span className="text-gradient leading-tight">
              {firstName}{' '}
              <span>
                <span className="text-brand">{lastName.charAt(0)}</span>
                {lastName.slice(1)}
              </span>
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl md:text-4xl font-medium text-foreground mb-10 h-[40px] md:h-[48px]"
          >
            <span className="opacity-80">Building clean, scalable web apps as a </span>
            <span className="text-secondary border-r-2 border-secondary pr-1 animate-pulse">{text}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {['MERN Stack Developer', 'GUVI HCL Certified'].map((stat, i) => (
              <span key={i} className="px-4 py-2 rounded-full glass text-sm font-medium border border-border/50 text-foreground/80 hover:text-primary transition-colors hover:border-primary/50">
                {stat}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-base transition-colors group"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="/Kirisha_Priya_Resume.pdf"
              download="Kirisha_Priya_Resume.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-md border border-primary/50 text-primary hover:bg-primary/10 font-medium text-base transition-colors group"
            >
              <Download className="mr-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </a>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-md text-foreground hover:text-primary font-medium text-base transition-colors"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
