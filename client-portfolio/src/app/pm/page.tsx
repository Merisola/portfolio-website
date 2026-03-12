"use client";
import { usePersona } from "@/context/PersonaContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkillCloud from "@/components/sections/SkillCloud";
import StrategyShowcase from "@/components/sections/StrategyShowcase";
import { ProjectCard } from "@/components/ui/ProjectCard";

// Mock data for PM projects
const pmProjects = [
  {
    title: "Agile Transformation Lab",
    description:
      "Optimizing engineering velocity by 40% through custom workflows.",
    stack: ["Scrum", "Jira", "Stakeholder Management"],
    live: "#",
    github: "#",
  },
];

export default function PMPage() {
  const { persona, setPersona } = usePersona();

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header persona={persona} setPersona={setPersona} />

      <div className="pt-24 px-6 max-w-7xl mx-auto space-y-32">
        {/* Phase 1: Skills (The Elements) */}
        <section id="skills">
          <SkillCloud persona="pm" />
        </section>

        {/* Phase 2: Methodology (The Process) */}
        <section id="methodology">
          <StrategyShowcase />
        </section>

        {/* Phase 3: Portfolio (The Results) */}
        <section
          id="portfolio"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {pmProjects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </section>
      </div>

      <Footer persona={persona} setPersona={setPersona} />
    </main>
  );
}
