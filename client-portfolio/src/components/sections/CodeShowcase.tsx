"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const snippets = [
  {
    id: "pattern-1",
    title: "Middleware Pattern",
    description: "Extensible error handling using functional composition.",
    code: `const withErrorHandler = (fn) => async (req, res) => {
  try {
    return await fn(req, res);
  } catch (error) {
    Logger.error(error);
    return res.status(500).json({ 
      error: "Internal Alchemy Error" 
    });
  }
};`,
    language: "typescript",
  },
  {
    id: "pattern-2",
    title: "React Hook Optimization",
    description:
      "Custom hook for managing complex state with 'Mean Reversion' logic.",
    code: `function useSelfHealingState(initialValue) {
  const [state, setState] = useState(initialValue);
  
  useEffect(() => {
    if (state !== initialValue) {
      const timer = setTimeout(() => setState(initialValue), 6000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  return [state, setState];
}`,
    language: "typescript",
  },
];

export default function CodeShowcase() {
  const [activeTab, setActiveTab] = useState(snippets[0]);

  return (
    <section className="py-24 px-8 md:px-20 bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h2 className="text-2xl font-mono text-white flex items-center gap-3">
            <span className="text-[#D4AF37]">02.</span> Authoring_Logic()
          </h2>
          <p className="text-slate-500 font-mono text-sm mt-2">
            {/* Clean code is not written; it is distilled. */}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Navigation Sidebar */}
          <div className="flex flex-col gap-2">
            {snippets.map((snippet) => (
              <button
                key={snippet.id}
                onClick={() => setActiveTab(snippet)}
                className={`text-left p-4 rounded-md font-mono text-xs transition-all border ${
                  activeTab.id === snippet.id
                    ? "bg-[#D4AF37]/10 border-[#D4AF37] text-white"
                    : "border-white/5 text-slate-500 hover:border-white/20"
                }`}
              >
                {snippet.title}
              </button>
            ))}
          </div>

          {/* Code Window */}
          <div className="lg:col-span-2 bg-black border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <span className="text-[10px] font-mono text-slate-500 ml-4">
                {activeTab.id}.ts
              </span>
            </div>

            <div className="p-6 overflow-x-auto">
              <AnimatePresence mode="wait">
                <motion.pre
                  key={activeTab.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="text-sm font-mono text-blue-300 leading-relaxed"
                >
                  <code>{activeTab.code}</code>
                </motion.pre>
              </AnimatePresence>
            </div>

            <div className="px-6 py-4 bg-white/[0.02] border-t border-white/5">
              <p className="text-xs text-slate-400 font-mono">
                <span className="text-[#D4AF37]">Description:</span>{" "}
                {activeTab.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
