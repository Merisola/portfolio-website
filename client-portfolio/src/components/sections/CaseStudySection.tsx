"use client";
import { motion } from "framer-motion";

const cases = [
  {
    title: "Project Phoenix: Legacy Migration",
    roi: "30% Reduction in OpEx",
    stakeholders: "CTO, Engineering, Customer Success",
    outcome:
      "Transformed a monolithic bottleneck into a scalable microservices architecture.",
    color: "border-[#D4AF37]/30",
  },
  {
    title: "Mobile First: Global Expansion",
    roi: "15% Increase in User Retention",
    stakeholders: "Product Owners, Marketing, UX Design",
    outcome:
      "Orchestrated cross-functional teams to launch 3 months ahead of schedule.",
    color: "border-slate-800",
  },
];

export default function CaseStudySection() {
  return (
    <div className="space-y-12">
      <div className="border-l-2 border-[#D4AF37] pl-6">
        <h2 className="text-2xl font-serif italic text-white">
          Case_Studies.vault
        </h2>
        <p className="text-slate-500 text-[10px] uppercase tracking-widest mt-2">
          Evidence of Value Transformation
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {cases.map((c, idx) => (
          <motion.div
            key={idx}
            whileHover={{ x: 10 }}
            className={`p-8 bg-white/5 border-l-4 ${c.color} transition-colors hover:bg-white/[0.07] cursor-pointer`}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                {c.title}
              </h3>
              <span className="text-[10px] font-mono text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full mt-2 md:mt-0">
                ROI: {c.roi}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div className="space-y-2">
                <h4 className="text-slate-500 uppercase text-[9px] tracking-widest">
                  Stakeholder_Map
                </h4>
                <p className="text-slate-300 font-mono text-xs">
                  {c.stakeholders}
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-slate-500 uppercase text-[9px] tracking-widest">
                  Final_Outcome
                </h4>
                <p className="text-slate-300 font-serif italic">{c.outcome}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
