"use client";
import { usePersona } from "@/context/PersonaContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkillCloud from "@/components/sections/SkillCloud";
import StrategyShowcase from "@/components/sections/StrategyShowcase";
import CaseStudySection from "@/components/sections/CaseStudySection";
import { ProjectCard } from "@/components/ui/ProjectCard";
import ContactForm from "@/components/layout/ContactForm"; // Added Import

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
        <section id="skills">
          <SkillCloud persona="pm" />
        </section>

        <section id="methodology">
          <StrategyShowcase />
        </section>

        <section id="cases">
          <CaseStudySection />
        </section>

        <section
          id="portfolio"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20"
        >
          {pmProjects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </section>
      </div>

      {/* Added the Contact Section here */}
      <section id="contact" className="border-t border-white/5">
        <ContactForm />
      </section>

      <Footer persona={activePersona} setPersona={setPersona} />
    </main>
  );
}