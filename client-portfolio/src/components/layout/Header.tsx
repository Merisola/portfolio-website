"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header({
  persona,
  setPersona,
}: {
  persona: "dev" | "pm";
  setPersona: (p: "dev" | "pm") => void;
}) {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between font-mono">
        {/* Left: Logo Area */}
        <Link href="/" className="group flex-shrink-0">
          <div className="text-xs tracking-[0.3em] text-slate-500 group-hover:text-[#D4AF37] transition-colors">
            SYSTEM.<span className="text-white">INIT</span>()
          </div>
        </Link>

        {/* Center: Context-Aware Navigation */}
        <nav className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.2em] text-slate-400">
          <Link
            href="#skills"
            className="hover:text-[#D4AF37] transition-all hover:tracking-[0.3em]"
          >
            Skills
          </Link>

          <Link
            href="#portfolio"
            className="hover:text-[#D4AF37] transition-all hover:tracking-[0.3em]"
          >
            Portfolio
          </Link>

          {/* Conditional Link: Snippets for Dev, Methodology for PM */}
          {persona === "dev" ? (
            <Link
              href="#snippets"
              className="hover:text-[#D4AF37] transition-all hover:tracking-[0.3em]"
            >
              Snippets
            </Link>
          ) : (
            <>
              <Link
                href="#methodology"
                className="hover:text-[#D4AF37] transition-all hover:tracking-[0.3em]"
              >
                Methodology
              </Link>
              <Link
                href="#cases"
                className="hover:text-[#D4AF37] transition-all hover:tracking-[0.3em]"
              >
                Cases
              </Link>
            </>
          )}

          {/* Universal Link */}
          <Link
            href="#contact"
            className="hover:text-[#D4AF37] transition-all hover:tracking-[0.3em]"
          >
            Contact
          </Link>
        </nav>

        {/* Right Area: Optional Persona Switcher or System Status */}
        <div className="text-[9px] text-[#D4AF37]/50 uppercase tracking-widest hidden sm:block">
          Mode: {persona}_Production
        </div>
      </div>
    </header>
  );
}
