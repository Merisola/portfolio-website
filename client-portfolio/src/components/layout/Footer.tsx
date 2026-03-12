"use client";
import { motion } from "framer-motion";
import { usePersona } from "@/context/PersonaContext"; // Ensure this path is correct

export default function Footer() {
  const currentYear = new Date().getFullYear();
  // Talk directly to the Alchemical Source (Context)
  const { persona, setPersona } = usePersona();

  return (
    <footer className="py-24 bg-[#050505] border-t border-white/5 px-6 relative overflow-hidden">
      {/* Decorative Alchemical Line */}
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

        {/* Footer Switcher: Transmutation Portal */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-[8px] font-mono uppercase tracking-[0.3em] text-slate-600">
            Switch_Perspective
          </p>
        </div>

        <div className="h-[1px] w-8 bg-[#D4AF37]/20 mx-auto" />

        {/* Core Info & Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
          <p>© {currentYear} — Alchemist of Potential</p>
          <nav className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">
              Intelligence_Log
            </a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">
              Connect
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
