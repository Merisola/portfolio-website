"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePersona } from "@/context/PersonaContext";

export default function GatewayPage() {
  const { setPersona } = usePersona();

  const sideVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <main className="relative flex h-screen w-full flex-col md:flex-row overflow-hidden bg-[#050505] font-sans">
      {/* PM PATH - The Strategist */}
      <motion.div
        variants={sideVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative h-1/2 md:h-full md:w-1/2 group border-b md:border-b-0 md:border-r border-white/5"
      >
        <Link
          href="/pm"
          onClick={() => setPersona("pm")}
          className="flex h-full w-full items-center justify-center transition-all duration-700 hover:bg-[#D4AF37]/[0.02]"
        >
          {/* Alchemical Aura for PM */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent opacity-30 md:opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <div className="z-10 text-center px-6 transition-all duration-500 group-hover:scale-[1.02]">
            <h2 className="text-[10px] tracking-[0.5em] text-[#D4AF37] uppercase mb-4 font-light opacity-70">
              The Strategist
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter">
              PROJECT
              <br />
              MANAGER
            </h1>
            <p className="mt-6 text-slate-500 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-700 md:translate-y-4 group-hover:translate-y-0 max-w-xs mx-auto text-[9px] uppercase tracking-[0.3em]">
              Synchronizing Strategy & Operational Delivery
            </p>
          </div>
        </Link>
      </motion.div>

      {/* CENTER ALCHEMY ORB - The Equilibrium */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none flex flex-row md:flex-col items-center">
        <div className="w-16 md:w-[1px] h-[1px] md:h-40 bg-gradient-to-r md:bg-gradient-to-t from-[#D4AF37]/40 to-transparent" />
        <div className="h-3 w-3 rounded-full border border-white/20 bg-black shadow-[0_0_20px_rgba(212,175,55,0.4)] mx-4 md:mx-0" />
        <div className="w-16 md:w-[1px] h-[1px] md:h-40 bg-gradient-to-l md:bg-gradient-to-b from-cyan-500/40 to-transparent" />
      </div>

      {/* DEV PATH - The Architect */}
      <motion.div
        variants={sideVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="relative h-1/2 md:h-full md:w-1/2 group"
      >
        <Link
          href="/dev"
          onClick={() => setPersona("dev")}
          className="flex h-full w-full items-center justify-center transition-all duration-700 hover:bg-cyan-500/[0.02]"
        >
          {/* Alchemical Aura for DEV */}
          <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/10 to-transparent opacity-30 md:opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <div className="z-10 text-center px-6 transition-all duration-500 group-hover:scale-[1.02]">
            <h2 className="text-[10px] tracking-[0.5em] text-cyan-400 uppercase mb-4 font-light opacity-70">
              The Architect
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter font-mono italic">
              FULL-STACK
              <br />
              DEVELOPER
            </h1>
            <p className="mt-6 text-slate-500 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-700 md:translate-y-4 group-hover:translate-y-0 max-w-xs mx-auto text-[10px] font-mono">
              building_scalable_systems.exe
            </p>
          </div>
        </Link>
      </motion.div>
    </main>
  );
}
