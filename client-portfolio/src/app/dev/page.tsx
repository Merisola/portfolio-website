"use client";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import SkillCloud from "@/components/sections/SkillCloud";

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
      <section className="relative border-b border-white/5">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-10 text-center pointer-events-none">
          <h2 className="text-sm font-mono tracking-[0.3em] text-alchemy-gold uppercase">
            Technical_Core.init()
          </h2>
          <p className="text-[10px] text-slate-500 font-mono mt-2">
            // Interact to disrupt the equilibrium
          </p>
        </div>

        <SkillCloud />
      </section>

      {/* SECTION 2: THE PROOF (Projects) */}
      <section className="p-8 md:p-20 bg-black/40">
        <header className="mb-16 border-l-4 border-alchemy-gold pl-6">
          <h1 className="text-4xl font-mono font-bold uppercase tracking-tighter">
            System.<span className="text-alchemy-gold">build</span>()
          </h1>
          <p className="text-slate-500 mt-2 font-mono text-sm">
            // Tangible outcomes of the alchemical process.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
