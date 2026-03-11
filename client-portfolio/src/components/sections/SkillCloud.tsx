"use client";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

const skills = [
  { name: "Node.js", type: "core", x: 0, y: 0 },
  { name: "PostgreSQL", type: "core", x: -120, y: 40 },
  { name: "Prisma", type: "core", x: 120, y: -40 },
  { name: "Python", type: "core", x: 0, y: -100 },
  { name: "React", type: "catalyst", x: -250, y: -80 },
  { name: "Next.js", type: "catalyst", x: 250, y: 80 },
  { name: "Tailwind", type: "catalyst", x: -180, y: 150 },
  { name: "Framer Motion", type: "catalyst", x: 180, y: -150 },
  { name: "TypeScript", type: "catalyst", x: 0, y: 180 },
];

export default function TechnicalSkillCloud() {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      scale: 1,
      x: skills[i].x,
      y: [skills[i].y - 10, skills[i].y + 10, skills[i].y - 10],
      transition: {
        x: { type: "spring", stiffness: 50, delay: i * 0.05 },
        y: { duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut" },
      },
    }));
  }, [controls]);

  const handleDragEnd = (event: any, info: any, i: number) => {
    // UPDATED: 6-second delay (6000ms)
    setTimeout(() => {
      controls.start((index) =>
        index === i
          ? {
              x: skills[i].x,
              y: skills[i].y,
              transition: { type: "spring", stiffness: 30, damping: 10 },
            }
          : {},
      );
    }, 6000);
  };

  return (
    <section className="relative min-h-[700px] flex items-center justify-center bg-[#050505] py-20 overflow-hidden">
      {/* BACKGROUND ASSETS - Explicit Colors */}
      <div className="absolute inset-0 opacity-20 flex items-center justify-center pointer-events-none">
        {/* Outer Pulsing Circle */}
        <div className="w-[500px] h-[500px] border border-[#D4AF37] rounded-full animate-pulse" />
        {/* Inner Rotating Circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute w-[300px] h-[300px] border border-[#D4AF37]/40 rounded-full border-dashed"
        />
      </div>

      <div className="relative w-full max-w-5xl h-[500px] flex items-center justify-center">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            custom={i}
            animate={controls}
            drag
            onDragEnd={(e, info) => handleDragEnd(e, info, i)}
            whileHover={{ scale: 1.1, zIndex: 50 }}
            className={`absolute px-5 py-2 rounded-md font-mono text-xs cursor-grab active:cursor-grabbing border whitespace-nowrap
              ${skill.type === "core" ? "bg-[#D4AF37]/20 border-[#D4AF37] text-white shadow-lg" : "bg-white/5 border-white/20 text-slate-400"}
            `}
          >
            <span className="mr-2 text-[#D4AF37]/50">
              {skill.type === "core" ? "●" : "○"}
            </span>
            {skill.name}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
