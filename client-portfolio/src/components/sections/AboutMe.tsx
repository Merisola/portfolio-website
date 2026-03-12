"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // ADD THIS IMPORT
import { usePersona } from "@/context/PersonaContext";

export default function AboutMe() {
  const { persona } = usePersona();
  const activePersona = persona === "neutral" ? "dev" : persona;

  const content = {
    dev: {
      subtitle: "The Architect in the Machine",
      quote:
        "I don't just build systems; I transmute complexity into clarity. Where others see fragmented code, I see a high-performance ecosystem.",
      description:
        "As a Full-Stack Developer, I understand the weight of a semicolon and the elegance of scalable architecture. My focus is on writing clean, alchemical code that powers human potential.",
    },
    pm: {
      subtitle: "The Strategist of Transformation",
      quote:
        "I don't just manage tasks; I orchestrate growth. Where others see a gap between business goals and technical execution, I see a bridge.",
      description:
        "As a Project Manager, I understand the weight of a deadline and the power of Agile flow. My mission is to ensure that both the systems we build and the teams I lead are empowered to deliver excellence.",
    },
  };

  const current = content[activePersona as "pm" | "dev"];

  return (
    <section
      id="about"
      className="py-24 px-6 border-b border-white/5 relative overflow-hidden bg-black"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header Section */}
        <motion.div
          key={activePersona + "-header"}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-block max-w-4xl"
        >
          <h2 className="text-[#D4AF37] font-mono text-[10px] uppercase tracking-[0.5em] mb-4">
            Identity_File.v1
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-none">
            I am Meron Solomon. <br />
            <span className="text-slate-500">{current.subtitle}</span>
          </h1>
        </motion.div>

        {/* --- Content and Image Grid --- */}
        {/* --- Updated Content and Image Grid --- */}
        <div className="grid md:grid-cols-[2fr,1fr] gap-12 items-center">
          {/* TEXT BLOCK: The Philosophy (Now on the Left) */}
          <div className="space-y-10 order-2 md:order-1">
            <motion.div
              key={activePersona + "-quote"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="prose prose-invert prose-slate"
            >
              <p className="text-xl text-slate-200 leading-relaxed font-serif italic border-l-2 border-[#D4AF37]/30 pl-6">
                &quot;{current.quote}&quot;
              </p>
            </motion.div>

            <motion.div
              key={activePersona + "-desc"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 font-mono text-sm space-y-4 max-w-2xl"
            >
              <p>{current.description}</p>
              <p>
                My work is dedicated to ensuring that both the products I build
                and the people I touch are left more valuable and empowered.
              </p>
            </motion.div>
          </div>

          {/* IMAGE BLOCK: The "Identity Signal" (Now on the Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center md:justify-end order-1 md:order-2"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 to-cyan-500/20 rounded-full blur-3xl opacity-30 scale-125" />

            <div className="relative aspect-square w-48 h-48 sm:w-64 sm:h-64 rounded-2xl border border-white/10 overflow-hidden group">
              <Image
                src="/meron-solomon.jpg"
                alt="Meron Solomon"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
