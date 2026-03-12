"use client";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import SkillCloud from "@/components/sections/SkillCloud";
// Import the new Code Showcase section
import CodeShowcase from "@/components/sections/CodeShowcase";

const projects = [
  {
    title: "Alchemize-UI",
    description:
      "A headless component library built with Radix UI and Tailwind CSS, focusing on accessibility and motion.",
    stack: ["Next.js", "TypeScript", "Framer Motion"],
    github: "https://github.com/youruser/alchemize",
    live: "https://alchemize.dev",
  },
  {
    title: "Nexus Ledger",
    description:
      "Full-stack financial tracking app with real-time data visualization and automated expense categorization.",
    stack: ["Node.js", "PostgreSQL", "Prisma", "Chart.js"],
    github: "https://github.com/youruser/nexus-ledger",
    live: "https://nexus-ledger.app",
  },
];

export default function DevPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* SECTION 1: THE LAB (Skills) */}
      <section className="relative min-h-screen flex flex-col justify-center border-b border-white/5">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 z-10 text-center pointer-events-none">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-mono tracking-[0.3em] text-[#D4AF37] uppercase"
          >
            Technical_Core.init()
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[10px] text-slate-500 font-mono mt-2"
          >
            {/* Disrupt the equilibrium to reveal the architecture. */}
          </motion.p>
        </div>

        <SkillCloud />

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <p className="text-[9px] font-mono uppercase tracking-widest text-slate-400">
            Scroll for Methodology
          </p>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent" />
        </div>
      </section>

      {/* SECTION 2: THE BLUEPRINT (Clean Code Showcase) */}
      <CodeShowcase />

      {/* SECTION 3: THE PROOF (Projects) */}
      <section className="p-8 md:p-20 bg-black/40">
        <header className="mb-16 border-l-4 border-[#D4AF37] pl-6">
          <h1 className="text-4xl font-mono font-bold uppercase tracking-tighter">
            System.<span className="text-[#D4AF37]">build</span>()
          </h1>
          <p className="text-slate-500 mt-2 font-mono text-sm">
            {/* Transforming raw logic into scalable, user-centric outcomes. */}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
