import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { Github, Mail, MapPin, Linkedin } from 'lucide-react';

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
                Available for full-time opportunities — let's talk about what you're building.
              </p>
            </div>

            <ContactForm />

            <div className="pt-4 flex justify-center gap-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all hover:-translate-y-1">
                <Github className="w-5 h-5" />
              </a>

              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
              </a>

              <a href={`mailto:${personalInfo.email}`} className="w-12 h-12 rounded-full glass border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all hover:-translate-y-1">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('invalid');
      return;
    }

    const isValidEmail = (em) => /^\S+@\S+\.\S+$/.test(em);
    if (!isValidEmail(email)) {
      setStatus('invalid-email');
      return;
    }

    // Build mailto link so the message opens in the user's mail client
    const to = encodeURIComponent(personalInfo.email);
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const mailto = `mailto:${to}?subject=${subject}&body=${body}`;

    // Redirect to mail client
    window.location.href = mailto;
    setStatus('sent');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-xl bg-background/60 glass p-8 rounded-2xl shadow-lg">
      <div className="grid gap-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-border p-4 bg-transparent text-foreground placeholder:text-muted-foreground"
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-border p-4 bg-transparent text-foreground placeholder:text-muted-foreground"
        />

        <textarea
          rows={6}
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-lg border border-border p-4 bg-transparent text-foreground placeholder:text-muted-foreground resize-none"
        />

        <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'invalid' && <div className="text-sm text-red-500">Please fill in all fields.</div>}
      </div>
    </form>
  );
}
