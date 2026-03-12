"use client";
import { motion } from "framer-motion";
import { usePersona } from "@/context/PersonaContext";
import { ProjectCard } from "@/components/ui/ProjectCard";
import SkillCloud from "@/components/sections/SkillCloud";
import CodeShowcase from "@/components/sections/CodeShowcase";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/layout/ContactForm"; // Added import
import AboutMe from "@/components/sections/AboutMe"; // Added import

const devProjects = [
  {
    title: "Alchemize-UI",
    description: "A headless component library built with Radix UI and Tailwind CSS.",
    stack: ["Next.js", "TypeScript", "Framer Motion"],
    github: "https://github.com/youruser/alchemize",
    live: "https://alchemize.dev",
  },
  {
    title: "Nexus Ledger",
    description: "Full-stack financial tracking app with real-time data visualization.",
    stack: ["Node.js", "PostgreSQL", "Prisma", "Chart.js"],
    github: "https://github.com/youruser/nexus-ledger",
    live: "https://nexus-ledger.app",
  },
];

const pmProjects = [
  {
    title: "Agile Transformation Lab",
    description: "Scaling engineering velocity by 40% through custom Jira workflows and sprint optimization.",
    stack: ["Agile", "Scrum", "Jira", "Stakeholder Mgmt"],
    github: "#",
    live: "#",
  },
];

export default function PersonaPage() {
  const { persona, setPersona } = usePersona();

  // Resolved TS Error: Narrowing the type for components that don't accept "neutral"
  const activePersona = (persona === "neutral" ? "dev" : persona) as "pm" | "dev";
  const projects = activePersona === "dev" ? devProjects : pmProjects;

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Header persona={activePersona} setPersona={setPersona} />

      <main className="pt-4">

        {/* NEW SECTION 0: THE MANIFESTO (About) */}
        <AboutMe />

        {/* SECTION 1: THE LAB (Skills) */}
        <section id="skills" className="...">
          {/* ... existing skills code ... */}
        </section>
        
        {/* ... rest of your sections ... */}

        {/* SECTION 1: THE LAB (Skills) */}
        <section
          id="skills"
          className="relative min-h-[90vh] flex flex-col justify-center border-b border-white/5"
        >
          <div className="absolute top-24 left-1/2 -translate-x-1/2 z-10 text-center pointer-events-none w-full">
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
            <motion.p
              key={activePersona + "-desc"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[10px] text-slate-500 font-mono mt-2"
            >
              {activePersona === "dev"
                ? "// Manipulate the cloud to see the stack."
                : "// Interaction defines the strategy."}
            </motion.p>
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
            <p className="text-slate-500 mt-2 font-mono text-sm">
              {activePersona === "dev"
                ? "// Tangible outcomes of the alchemical process."
                : "// High-impact delivery through disciplined management."}
            </p>
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

        {/* SECTION 3: THE BLUEPRINT (Snippet) */}
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

        {/* SECTION 4: THE CONNECTION (Contact) */}
        <section id="contact" className="border-t border-white/5 bg-[#050505]">
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  );
}