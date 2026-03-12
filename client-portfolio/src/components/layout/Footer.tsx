"use client";
import { motion } from "framer-motion";
import { Twitter, Send, Linkedin, Github } from "lucide-react";

const socialLinks = [
  {
    name: "Twitter",
    url: "https://twitter.com/TheMeronWay",
    icon: <Twitter size={12} />,
    label: "X / Twitter",
  },
  {
    name: "Telegram",
    url: "https://t.me/Danytt00",
    icon: <Send size={12} />,
    label: "Telegram",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/merontsegay/",
    icon: <Linkedin size={12} />,
    label: "LinkedIn",
  },
  {
    name: "GitHub",
    url: "https://github.com/Merisola",
    icon: <Github size={12} />,
    label: "GitHub",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-[#050505] border-t border-white/5 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#D4AF37]/30 to-transparent" />

      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* The Alchemist's Affirmation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-[#D4AF37] font-mono text-[9px] uppercase tracking-[0.5em] opacity-70">
            Intention_Manifest
          </h3>
          <p className="text-slate-200 font-serif italic text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
            &ldquo;I am grateful for the continuous evolution of my intelligence
            and the clarity with which I transmute every challenge into
            empowered growth.&rdquo;
          </p>
        </motion.div>

        {/* Improved Social Links: High Visibility */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
          {socialLinks.map((social, idx) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -2 }}
              className="group flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-slate-400 hover:text-[#D4AF37] transition-all"
            >
              <span className="text-slate-600 group-hover:text-[#D4AF37] transition-colors">
                {social.icon}
              </span>
              <span className="uppercase">{social.label}</span>
            </motion.a>
          ))}
        </div>

        <div className="h-[1px] w-8 bg-[#D4AF37]/20 mx-auto" />

        {/* Metadata Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
          <p>© {currentYear} — Alchemist of Potential</p>
        </div>
      </div>
    </footer>
  );
}
