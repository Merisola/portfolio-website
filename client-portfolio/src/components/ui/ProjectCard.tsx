"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ProjectCard = ({ project }: { project: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-80 w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-alchemy-gold/50"
    >
      {/* Static Content: Title & Tags */}
      <div className="relative z-10">
        <h3 className="text-xl font-mono font-bold text-white mb-2 uppercase tracking-tight">
          {project.title}
        </h3>
        <div className="flex gap-2 mb-4">
          {project.stack.slice(0, 2).map((s: string) => (
            <span
              key={s}
              className="text-[10px] font-mono text-alchemy-gold border border-alchemy-gold/20 px-2 py-0.5 rounded"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Terminal Overlay */}
      <AnimatePresence>
        {isHovered ? (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="absolute inset-0 z-20 bg-black/95 p-4 font-mono text-[11px] text-green-400"
          >
            <div className="flex gap-1.5 mb-3 border-b border-white/10 pb-2">
              <div className="w-2 h-2 rounded-full bg-red-500/50" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
              <div className="w-2 h-2 rounded-full bg-green-500/50" />
              <span className="text-slate-500 ml-2">
                bash — {project.title.toLowerCase()}
              </span>
            </div>
            <div className="space-y-1">
              <p>
                <span className="text-alchemy-gold">➜</span>{" "}
                <span className="text-blue-400">~/projects</span> npm install
              </p>
              <p className="text-slate-500 animate-pulse">
                ... indexing dependencies
              </p>
              <p>
                <span className="text-alchemy-gold">➜</span>{" "}
                <span className="text-blue-400">~/projects</span> npm run build
              </p>
              <p className="text-white">✓ optimized production build</p>
              <p className="text-white">● index.js (42kB)</p>
              <p className="mt-4 text-alchemy-gold underline cursor-pointer">
                View Source Code _
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-slate-400 text-sm leading-relaxed"
          >
            {project.description}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
