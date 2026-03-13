"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Terminal as TerminalIcon } from "lucide-react";
import Image from "next/image";

export const ProjectCard = ({ project }: { project: any }) => {
  const [showTerminal, setShowTerminal] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setShowTerminal(true)}
      onMouseLeave={() => setShowTerminal(false)}
      className="group relative h-80 w-full overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] transition-all hover:border-[#D4AF37]/50"
    >
      {/* 1. THE VISUAL LAYER (The "Gold") */}
      <div className="absolute inset-0 z-0">
        <Image
          src={project.img || "/placeholder-alchemy.jpg"}
          alt={project.title}
          fill // Tells Next.js to fill the parent container
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
          priority={false} // Only load when in viewport
        />
        {/* Alchemical Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
      </div>

      {/* 2. THE CONTENT LAYER */}
      <div className="relative z-10 flex h-full flex-col justify-between p-6">
        <header>
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-mono font-bold text-white uppercase tracking-tight group-hover:text-[#D4AF37] transition-colors">
              {project.title}
            </h3>
            <TerminalIcon
              size={14}
              className="text-[#D4AF37]/30 group-hover:text-[#D4AF37] transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            {project.stack.map((s: string) => (
              <span
                key={s}
                className="text-[9px] font-mono text-[#D4AF37] border border-[#D4AF37]/20 px-2 py-0.5 rounded bg-black/40 backdrop-blur-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </header>

        {/* 3. THE ACTION LAYER (Always accessible on hover) */}
        <footer className="flex justify-between items-center">
          <div className="flex gap-4">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[#D4AF37] transition-colors flex items-center gap-1 text-[10px] font-mono"
              >
                <Github size={16} /> <span>SOURCE</span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[#D4AF37] transition-colors flex items-center gap-1 text-[10px] font-mono"
              >
                <ExternalLink size={16} /> <span>VISIT</span>
              </a>
            )}
          </div>
        </footer>
      </div>

      {/* 4. THE BASH OVERLAY (The "Process") */}
      <AnimatePresence>
        {showTerminal && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(4px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="absolute inset-0 z-20 bg-black/80 p-6 font-mono text-[11px] flex flex-col justify-center"
          >
            <div className="text-green-500 mb-2 opacity-70">
              ➜ {project.title.toLowerCase()} --info
            </div>
            <p className="text-slate-300 leading-relaxed border-l border-[#D4AF37]/30 pl-4 py-1">
              {project.description}
            </p>
            <div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-1 text-[10px]">
              <span className="text-slate-500">
                BUILD_STATUS: <span className="text-[#D4AF37]">SUCCESS</span>
              </span>
              <span className="text-slate-500">
                DEPLOYMENT: <span className="text-blue-400">VERCEL_EDGE</span>
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
