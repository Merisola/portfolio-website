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
          className="group flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          {/* Logo Animation Container */}
          <div className="relative flex items-center justify-center">
            {/* Pulsing Aura around the seal */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-[#D4AF37]/20 rounded-full blur-md"
            />

            <motion.img
              src="/meron.png"
              alt="The MeronWay Logo"
              className="h-9 w-9 relative z-10 brightness-110 contrast-125"
              whileHover={{
                rotate: 15,
                scale: 1.1,
                filter: "drop-shadow(0px 0px 8px rgba(212, 175, 55, 0.5))",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>

          <div className="flex flex-col">
            <div className="text-[10px] leading-tight tracking-[0.4em] text-slate-500 group-hover:text-[#D4AF37] transition-colors">
              THE<span className="text-white">MERONWAY</span>()
            </div>
            <div className="text-[7px] tracking-[0.6em] text-[#D4AF37]/40 uppercase">
              Alchemist_Active
            </div>
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

        {/* Mobile Toggle */}
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
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
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
