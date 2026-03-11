"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePersona } from "@/context/PersonaContext";

export default function GatewayPage() {
  const { setPersona } = usePersona();

  // We remove the JS-based window detection and use simple opacity/y
  // to avoid hydration mismatches.
  const sideVariants = {
    initial: { opacity: 0, y: 20 }, // Minimal Y movement for both
    animate: { opacity: 1, y: 0 },
  };

  return (
    <main className="relative flex h-screen w-full flex-col md:flex-row overflow-hidden bg-[#050505] font-sans">
      {/* PM PATH */}
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
          className="flex h-full w-full items-center justify-center transition-all duration-700 hover:bg-alchemy-gold/[0.02]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-alchemy-gold/10 to-transparent opacity-30 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="z-10 text-center px-6 transition-transform duration-500 group-hover:scale-105">
            {/* ... content remains same ... */}
            <h2 className="text-[10px] tracking-[0.5em] text-alchemy-gold uppercase mb-2 md:mb-4 font-light opacity-70">
              The Strategist
            </h2>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter">
              PROJECT
              <br />
              MANAGER
            </h1>
            <p className="mt-4 md:mt-6 text-slate-500 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 md:translate-y-2 group-hover:translate-y-0 max-w-xs mx-auto text-[9px] md:text-[10px] uppercase tracking-widest">
              Mastering alignment & execution.
            </p>
          </div>
        </Link>
      </motion.div>

      {/* CENTER ALCHEMY ORB */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none flex flex-row md:flex-col items-center">
        <div className="w-16 md:w-[1px] h-[1px] md:h-32 bg-gradient-to-r md:bg-gradient-to-t from-white/20 to-transparent" />
        <div className="h-2 w-2 md:h-3 md:w-3 rounded-full border border-white/40 bg-black shadow-[0_0_15px_rgba(255,255,255,0.3)] mx-2 md:mx-0" />
        <div className="w-16 md:w-[1px] h-[1px] md:h-32 bg-gradient-to-l md:bg-gradient-to-b from-white/20 to-transparent" />
      </div>

      {/* DEV PATH */}
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
          className="flex h-full w-full items-center justify-center transition-all duration-700 hover:bg-alchemy-cyan/[0.02]"
        >
          <div className="absolute inset-0 bg-gradient-to-bl from-alchemy-cyan/10 to-transparent opacity-30 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="z-10 text-center px-6 transition-transform duration-500 group-hover:scale-105">
            {/* ... content remains same ... */}
            <h2 className="text-[10px] tracking-[0.5em] text-alchemy-cyan uppercase mb-2 md:mb-4 font-light opacity-70">
              The Architect
            </h2>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter font-mono italic">
              FULL-STACK
              <br />
              DEV
            </h1>
            <p className="mt-4 md:mt-6 text-slate-500 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 md:translate-y-2 group-hover:translate-y-0 max-w-xs mx-auto text-[9px] md:text-[10px] font-mono">
              building_scalable_systems.exe
            </p>
          </div>
        </Link>
      </motion.div>
    </main>
  );
}
