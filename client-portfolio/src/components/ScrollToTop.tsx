"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function ScrollToTop() {
  const [isNearTop, setIsNearTop] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleNavigationState = () => {
      const scrollY = window.scrollY;

      // 1. Visibility: Show after 1000px.
      // This is about 1.5 screens down. It feels earned but helpful.
      setIsVisible(scrollY > 1000);

      // 2. The Logic Flip: Keep "Descend" active until 1800px.
      // After 1800px, the user is "Deep" and likely wants to go UP.
      setIsNearTop(scrollY < 1800);
    };

    window.addEventListener("scroll", handleNavigationState);
    return () => window.removeEventListener("scroll", handleNavigationState);
  }, []);

  const toggleScroll = () => {
    if (isNearTop) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: 20 }}
          onClick={toggleScroll}
          // Changed right-3 to right-6 for better "safe area" spacing
          className="fixed bottom-16 right-6 z-[90] flex flex-col items-center gap-2 group"
        >
          <span className="text-[8px] font-mono text-[#D4AF37]/50 uppercase tracking-[0.4em] group-hover:text-[#D4AF37] transition-colors">
            {isNearTop ? "Descend_Init" : "Ascend_Init"}
          </span>

          <div className="p-3 bg-[#050505]/80 backdrop-blur-sm border border-white/10 group-hover:border-[#D4AF37]/50 transition-all shadow-2xl relative overflow-hidden rounded-sm">
            <motion.div
              key={isNearTop ? "down" : "up"}
              initial={{ y: isNearTop ? -5 : 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              {isNearTop ? (
                <ChevronDown size={14} className="text-[#D4AF37]" />
              ) : (
                <ChevronUp size={14} className="text-[#D4AF37]" />
              )}
            </motion.div>

            {/* Scanning Light Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-transparent via-[#D4AF37]/5 to-transparent w-full h-full"
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
