"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

// Define a type for our particle data
interface Particle {
  id: number;
  x: string;
  duration: number;
  delay: number;
}

export default function NotFound() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particle data ONLY on the client after mount
    const newParticles = [...Array(15)].map((_, i) => ({
      id: i,
      x: `${Math.random() * 100}vw`,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <main className="relative flex h-screen w-full flex-col items-center justify-center bg-[#050505] overflow-hidden text-center px-6">
      {/* Background "Smoke" - Safe because it uses fixed arrays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-alchemy-gold/5 blur-[120px] rounded-full"
        />
      </div>

      <div className="z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative mb-8"
        >
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-9xl font-black text-white/5 select-none"
          >
            404
          </motion.div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(212,175,55,0.2)",
                  "0 0 50px rgba(212,175,55,0.5)",
                  "0 0 20px rgba(212,175,55,0.2)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-20 w-20 rounded-full border-2 border-alchemy-gold/50 flex items-center justify-center bg-black"
            >
              <span className="text-2xl text-alchemy-gold">⌬</span>
            </motion.div>
          </div>
        </motion.div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Transmutation <span className="text-alchemy-gold italic">Failed</span>
        </h1>

        <p className="text-slate-500 max-w-md mx-auto mb-8 leading-relaxed">
          The coordinates you're looking for have dissolved back into the ether.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <Button variant="primary">Return to Portal</Button>
          </Link>
          <Link href="/pm">
            <Button variant="ghost" className="text-xs">
              Consult the Strategist
            </Button>
          </Link>
        </div>
      </div>

      {/* Floating Particles - Now using the stable state */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: "100vh", x: p.x, opacity: 0 }}
          animate={{ y: "-10vh", opacity: [0, 1, 0] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
          }}
          className="absolute w-1 h-1 bg-alchemy-gold/30 rounded-full"
        />
      ))}
    </main>
  );
}
