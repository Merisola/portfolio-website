"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-4 z-[90] flex flex-col items-center gap-2 group"
          aria-label="Scroll to top"
        >
          <span className="text-[8px] font-mono text-[#D4AF37]/40 uppercase tracking-[0.3em] group-hover:text-[#D4AF37] transition-colors">
            Ascend_Init
          </span>
          <div className="p-3 bg-[#050505] border border-white/10 group-hover:border-[#D4AF37]/50 transition-all shadow-2xl">
            <ChevronUp
              size={16}
              className="text-[#D4AF37] group-hover:-translate-y-1 transition-transform"
            />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
