"use client";
import { motion } from "framer-motion";

const transformations = [
  { stage: "Input", label: "Ambiguity", color: "text-slate-500" },
  { stage: "Process", label: "Agile_Alchemy", color: "text-[#D4AF37]" },
  { stage: "Output", label: "Empowered_Value", color: "text-white" },
];

export default function StrategyShowcase() {
  return (
    <section className="py-24 bg-[#080808] border-y border-white/5 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-mono tracking-[0.4em] text-[#D4AF37] uppercase mb-4">
            Strategic_Framework.execute()
          </h2>
          <p className="text-slate-400 font-mono text-xs max-w-xl leading-relaxed">
             {/* Transforming organizational friction into engineering momentum */}
            {/* through disciplined Agile methodologies and stakeholder alignment. */}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center relative">
          {transformations.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 p-8 bg-white/5 border border-white/10 rounded-sm text-center"
            >
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2">
                {item.stage}
              </span>
              <h3
                className={`text-lg font-mono font-bold uppercase ${item.color}`}
              >
                {item.label}
              </h3>
            </motion.div>
          ))}

          {/* Connecting Line (The "Flow") */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent -translate-y-1/2" />
        </div>
      </div>
    </section>
  );
}
