"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header({
  persona,
}: {
  persona: "dev" | "pm";
  setPersona: (p: "dev" | "pm") => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  // 0.1% Improvement: Prevent background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { href: "#skills", label: "Skills" },
    { href: "#portfolio", label: "Portfolio" },
    ...(persona === "dev"
      ? [{ href: "#snippets", label: "Snippets" }]
      : [
          { href: "#methodology", label: "Methodology" },
          { href: "#cases", label: "Cases" },
        ]),
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] border-b border-white/5 bg-[#050505]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between font-mono">
        <Link
          href="/"
          className="group flex-shrink-0"
          onClick={() => setIsOpen(false)}
        >
          <div className="text-xs tracking-[0.3em] text-slate-500 group-hover:text-[#D4AF37] transition-colors">
            SYSTEM.<span className="text-white">INIT</span>()
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.2em] text-slate-400">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-[#D4AF37] transition-all hover:tracking-[0.3em]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 z-[110] p-2"
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-6 h-px bg-[#D4AF37]"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-px bg-[#D4AF37]"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-6 h-px bg-[#D4AF37]"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }} // Subtle slide instead of just fade
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            // h-screen and fixed inset-0 ensure it fills the viewport exactly
            className="fixed inset-0 h-screen bg-[#050505] z-[105] flex flex-col items-center justify-center md:hidden"
          >
            <div className="absolute top-10 text-[9px] text-[#D4AF37]/30 uppercase tracking-[0.5em]">
              Directory
            </div>

            <nav className="flex flex-col items-center gap-10">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-mono uppercase tracking-[0.2em] text-white hover:text-[#D4AF37] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="absolute bottom-10 text-[10px] text-slate-600 font-mono tracking-widest">
              TERMINAL_ACTIVE // {persona.toUpperCase()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
