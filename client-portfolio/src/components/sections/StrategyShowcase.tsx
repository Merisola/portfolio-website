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
          {/* UPDATED: Added responsive text sizes and break-words for mobile safety */}
          <h2 className="text-[10px] sm:text-xs md:text-sm font-mono tracking-[0.2em] md:tracking-[0.4em] text-[#D4AF37] uppercase mb-4 break-words">
            Strategic_Framework.execute()
          </h2>
          <p className="text-slate-400 font-mono text-xs max-w-xl leading-relaxed">
            {/* Transforming organizational friction into engineering momentum */}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center relative">
          {transformations.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 p-6 md:p-8 bg-white/5 border border-white/10 rounded-sm text-center"
            >
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2">
                {item.stage}
              </span>
              <h3
                className={`text-base md:text-lg font-mono font-bold uppercase ${item.color} break-all md:break-normal`}
              >
                {item.label}
              </h3>
            </motion.div>
          ))}

          {/* Desktop Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent -translate-y-1/2" />

          {/* Mobile Line: Centered between the boxes */}
          <div className="block md:hidden absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent -translate-x-1/2" />
        </div>
      </div>
    </section>
  );
}
