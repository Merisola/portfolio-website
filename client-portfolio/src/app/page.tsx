"use client";
import Link from "next/link";
import { motion } from "framer-motion"; // We'll assume you'll install this (npm install framer-motion)

export default function GatewayPage() {
  return (
    <main className="relative flex h-screen w-full overflow-hidden bg-alchemy-dark font-sans">
      {/* PM PATH - The Strategist */}
      <Link
        href="/pm"
        className="group relative flex w-1/2 items-center justify-center transition-all duration-700 hover:w-[60%]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-alchemy-gold/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
        <div className="z-10 text-center">
          <h2 className="text-sm tracking-[0.3em] text-alchemy-gold uppercase mb-2">
            The Strategist
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white group-hover:scale-105 transition-transform">
            PROJECT
            <br />
            MANAGER
          </h1>
          <p className="mt-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity max-w-xs mx-auto text-sm">
            Transforming chaos into clarity through structured roadmaps and
            stakeholder alignment.
          </p>
        </div>
        <div className="absolute bottom-10 left-10 text-alchemy-gold/30 text-8xl font-black select-none pointer-events-none">
          01
        </div>
      </Link>

      {/* VERTICAL DIVIDER */}
      <div className="absolute left-1/2 top-0 h-full w-[1px] bg-white/10 z-20" />

      {/* DEV PATH - The Architect */}
      <Link
        href="/dev"
        className="group relative flex w-1/2 items-center justify-center transition-all duration-700 hover:w-[60%]"
      >
        <div className="absolute inset-0 bg-gradient-to-bl from-alchemy-cyan/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
        <div className="z-10 text-center">
          <h2 className="text-sm tracking-[0.3em] text-alchemy-cyan uppercase mb-2">
            The Architect
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white group-hover:scale-105 transition-transform font-mono italic">
            FULL-STACK
            <br />
            DEV
          </h1>
          <p className="mt-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity max-w-xs mx-auto text-sm font-mono">
            Building scalable digital assets with clean code and
            high-performance architecture.
          </p>
        </div>
        <div className="absolute bottom-10 right-10 text-alchemy-cyan/30 text-8xl font-black select-none pointer-events-none">
          02
        </div>
      </Link>
    </main>
  );
}
