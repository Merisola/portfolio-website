"use client";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

// The Alchemist's Elements: Divided by Persona
const skillManifest = {
  dev: [
    { name: "Node.js", type: "core", x: 0, y: 0 },
    { name: "PostgreSQL", type: "core", x: -120, y: 40 },
    { name: "Prisma", type: "core", x: 120, y: -40 },
    { name: "Python", type: "core", x: 0, y: -100 },
    { name: "React", type: "catalyst", x: -250, y: -80 },
    { name: "Next.js", type: "catalyst", x: 250, y: 80 },
    { name: "Tailwind", type: "catalyst", x: -180, y: 150 },
    { name: "TypeScript", type: "catalyst", x: 0, y: 180 },
  ],
  pm: [
    { name: "Agile/Scrum", type: "core", x: 0, y: 0 },
    { name: "Stakeholder Alignment", type: "core", x: -140, y: 50 },
    { name: "ROI Mapping", type: "core", x: 140, y: -50 },
    { name: "Product Strategy", type: "core", x: 0, y: -110 },
    { name: "User Story Mapping", type: "catalyst", x: -260, y: -90 },
    { name: "Risk Mitigation", type: "catalyst", x: 260, y: 90 },
    { name: "Conflict Resolution", type: "catalyst", x: -190, y: 160 },
    { name: "Strategic Growth", type: "catalyst", x: 0, y: 190 },
  ],
};

interface SkillCloudProps {
  persona: "dev" | "pm";
}

export default function TechnicalSkillCloud({ persona }: SkillCloudProps) {
  const controls = useAnimationControls();
  const currentSkills = skillManifest[persona];
  const themeColor = persona === "pm" ? "#D4AF37" : "#00f3ff"; // Gold for PM, Cyan for Dev

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      scale: 1,
      x: currentSkills[i]?.x || 0,
      y: [
        (currentSkills[i]?.y || 0) - 10,
        (currentSkills[i]?.y || 0) + 10,
        (currentSkills[i]?.y || 0) - 10,
      ],
      transition: {
        x: { type: "spring", stiffness: 50, delay: i * 0.05 },
        y: { duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut" },
      },
    }));
  }, [controls, persona, currentSkills]);

  const handleDragEnd = (event: any, info: any, i: number) => {
    setTimeout(() => {
      controls.start((index) =>
        index === i
          ? {
              x: currentSkills[i].x,
              y: currentSkills[i].y,
              transition: { type: "spring", stiffness: 30, damping: 10 },
            }
          : {},
      );
    }, 6000);
  };

  return (
    <section className="relative min-h-[700px] flex items-center justify-center bg-[#050505] py-20 overflow-hidden">
      {/* BACKGROUND ASSETS */}
      <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
        <div
          className="w-[500px] h-[500px] border rounded-full animate-pulse"
          style={{ borderColor: themeColor }}
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute w-[350px] h-[350px] border border-dashed rounded-full"
          style={{ borderColor: `${themeColor}66` }}
        />
      </div>

      <div className="relative w-full max-w-5xl h-[500px] flex items-center justify-center">
        {currentSkills.map((skill, i) => (
          <motion.div
            key={`${persona}-${skill.name}`} // Force re-render on persona switch
            custom={i}
            animate={controls}
            drag
            onDragEnd={(e, info) => handleDragEnd(e, info, i)}
            whileHover={{ scale: 1.1, zIndex: 50 }}
            className={`absolute px-5 py-2 rounded-md font-mono text-[10px] cursor-grab active:cursor-grabbing border whitespace-nowrap transition-colors duration-700
              ${skill.type === "core" ? "text-white shadow-lg" : "bg-white/5 border-white/10 text-slate-500"}
            `}
            style={{
              backgroundColor:
                skill.type === "core" ? `${themeColor}33` : undefined,
              borderColor: skill.type === "core" ? themeColor : undefined,
            }}
          >
            <span className="mr-2" style={{ color: `${themeColor}88` }}>
              {skill.type === "core" ? "●" : "○"}
            </span>
            {skill.name}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
