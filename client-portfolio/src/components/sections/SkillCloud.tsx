"use client";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { PanInfo } from "framer-motion";

// ... skillManifest stays exactly the same ...
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
  const themeColor = persona === "pm" ? "#D4AF37" : "#00f3ff";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate positions: Use hardcoded for Desktop, Radial for Mobile to prevent clutter
  const skillsWithPositions = useMemo(() => {
    return currentSkills.map((skill, i) => {
      if (!isMobile) return { ...skill, finalX: skill.x, finalY: skill.y };

      // Radial logic for mobile: Arrange in a circle so they never overlap
      if (i === 0) return { ...skill, finalX: 0, finalY: 0 };
      const angle = i * (360 / (currentSkills.length - 1)) * (Math.PI / 180);
      const radius = 120; // Enough space to prevent collisions on small screens
      return {
        ...skill,
        finalX: Math.cos(angle) * radius,
        finalY: Math.sin(angle) * radius,
      };
    });
  }, [currentSkills, isMobile]);

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      scale: 1,
      x: skillsWithPositions[i].finalX,
      y: [
        skillsWithPositions[i].finalY - 10,
        skillsWithPositions[i].finalY + 10,
        skillsWithPositions[i].finalY - 10,
      ],
      transition: {
        x: { type: "spring", stiffness: 50, delay: i * 0.05 },
        y: { duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut" },
      },
    }));
  }, [controls, persona, skillsWithPositions]);

 const handleDragEnd = (
   event: MouseEvent | TouchEvent | PointerEvent,
   info: PanInfo,
   i: number,
 ) => {
   setTimeout(() => {
     controls.start((index) =>
       index === i
         ? {
             x: skillsWithPositions[i].finalX,
             y: skillsWithPositions[i].finalY,
             transition: { type: "spring", stiffness: 30, damping: 10 },
           }
         : {},
     );
   }, 6000);
 };

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center bg-[#050505] py-9 overflow-hidden">
      <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
        <div
          className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] border-2 rounded-full animate-pulse"
          style={{ borderColor: themeColor }}
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute w-[220px] h-[220px] md:w-[350px] md:h-[350px] border-4 border-dashed rounded-full"
          style={{ borderColor: `${themeColor}66` }}
        />
      </div>

      <div className="relative w-full max-w-5xl h-[450px] flex items-center justify-center">
        {skillsWithPositions.map((skill, i) => (
          <motion.div
            key={`${persona}-${skill.name}`}
            custom={i}
            animate={controls}
            drag
            onDragEnd={(e, info) => handleDragEnd(e, info, i)}
            whileHover={{ scale: 1.1, zIndex: 50 }}
            className={`absolute px-4 py-1.5 md:px-5 md:py-2 rounded-md font-mono text-[9px] md:text-[10px] cursor-grab active:cursor-grabbing border whitespace-nowrap transition-colors duration-700
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
