"use client";
import { usePersona } from "@/context/PersonaContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkillCloud from "@/components/sections/SkillCloud";
import StrategyShowcase from "@/components/sections/StrategyShowcase";
import CaseStudySection from "@/components/sections/CaseStudySection";
import { ProjectCard } from "@/components/ui/ProjectCard";
import ContactForm from "@/components/layout/ContactForm";

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

export default function PMContent() {
  const { persona, setPersona } = usePersona();
  const activePersona =
    persona === "neutral" ? "pm" : (persona as "pm" | "dev");

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header persona={activePersona} setPersona={setPersona} />

      <div className="pt-24 px-6 max-w-7xl mx-auto space-y-32">
        {/* 1. Skills */}
        <section id="skills">
          <SkillCloud persona="pm" />
        </section>

        {/* 2. Portfolio/Projects */}
        <section
          id="portfolio"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {pmProjects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </section>

        {/* 3. Methodology */}
        <section id="methodology">
          <StrategyShowcase />
        </section>

        {/* 4. Cases (Last before footer/contact) */}
        <section id="cases" className="pb-20">
          <CaseStudySection />
        </section>
      </div>

      <section id="contact" className="border-t border-white/5">
        <ContactForm />
      </section>

      {/* Fixing the error requires checking the Footer.tsx file definition */}
      <Footer/>
    </main>
  );
}
