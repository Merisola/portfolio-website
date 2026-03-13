"use client";
import { motion } from "framer-motion";
import { usePersona } from "@/context/PersonaContext";
import { ProjectCard } from "@/components/ui/ProjectCard";
import SkillCloud from "@/components/sections/SkillCloud";
import CodeShowcase from "@/components/sections/CodeShowcase";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/layout/ContactForm";
import AboutMe from "@/components/sections/AboutMe";
// CLEAN IMPORT: Using the TS file, not the JSON
import { devProjects, pmProjects } from "@/data/projects";

export default function PersonaPage() {
  const { persona, setPersona } = usePersona();

  const activePersona = (persona === "neutral" ? "dev" : persona) as
    | "pm"
    | "dev";
  const projects = activePersona === "dev" ? devProjects : pmProjects;

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Header persona={activePersona} setPersona={setPersona} />
      <main className="pt-4">
        <AboutMe />

        {/* SECTION 1: THE LAB (Skills) */}
        <section
          id="skills"
          className="relative min-h-[90vh] flex flex-col justify-center border-b border-white/5"
        >
          <div className="absolute top-15 left-1/2 -translate-x-1/2 z-10 text-center pointer-events-none w-full">
            <motion.h2
              key={activePersona + "-title"}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-mono tracking-[0.3em] text-[#D4AF37] uppercase"
            >
              {activePersona === "dev"
                ? "Technical_Core.init()"
                : "Strategic_Engine.init()"}
            </motion.h2>
          </div>
          <SkillCloud persona={activePersona} />
        </section>

        {/* SECTION 2: THE PROOF (Portfolio) */}
        <section id="portfolio" className="p-8 md:p-20 bg-black/40">
          <header className="mb-16 border-l-4 border-[#D4AF37] pl-6">
            <h1 className="text-4xl font-mono font-bold uppercase tracking-tighter">
              {activePersona === "dev" ? "System." : "Strategy."}
              <span className="text-[#D4AF37]">build</span>()
            </h1>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title + activePersona}
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

        {/* ... (Snippets & Contact remain the same) ... */}
        <section id="snippets">
          {activePersona === "dev" ? (
            <CodeShowcase />
          ) : (
            <div className="py-20 text-center border-t border-white/5 bg-[#080808]">
              <p className="text-slate-600 font-mono text-xs uppercase tracking-widest">
                Strategic_Frameworks.loading...
              </p>
            </div>
          )}
        </section>

        <section id="contact" className="border-t border-white/5 bg-[#050505]">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}
