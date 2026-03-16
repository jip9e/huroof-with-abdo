
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

function FloatingHex({ delay, x, y }: { delay: number; x: string; y: string }) {
  return (
    <motion.div
      className="absolute text-primary-500/10 text-6xl font-bold pointer-events-none select-none"
      style={{ left: x, top: y }}
      animate={{
        y: [0, -20, 0],
        opacity: [0.05, 0.15, 0.05],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      ⬡
    </motion.div>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const letters = ['أ', 'ب', 'ت', 'ج', 'ح', 'خ', 'ع', 'ف'];
  const hexPositions = [
    { x: '10%', y: '20%' }, { x: '80%', y: '15%' }, { x: '25%', y: '60%' },
    { x: '70%', y: '70%' }, { x: '5%', y: '80%' }, { x: '90%', y: '50%' },
    { x: '40%', y: '10%' }, { x: '60%', y: '85%' },
  ];

  return (
    <main className="game-bg min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Floating decorations */}
      {mounted && hexPositions.map((pos, i) => (
        <FloatingHex key={i} delay={i * 0.5} x={pos.x} y={pos.y} />
      ))}

      {/* Main content */}
      <motion.div 
        className="text-center z-10 space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated letters */}
        <div className="flex justify-center gap-3 mb-4">
          {letters.map((letter, i) => (
            <motion.div
              key={i}
              className="w-12 h-14 flex items-center justify-center text-xl font-bold rounded-lg"
              style={{
                background: 'linear-gradient(135deg, rgba(0,212,170,0.2) 0%, rgba(0,212,170,0.05) 100%)',
                border: '1px solid rgba(0,212,170,0.3)',
              }}
              initial={{ opacity: 0, y: -30, rotate: -10 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5, type: 'spring' }}
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              {letter}
            </motion.div>
          ))}
        </div>

        {/* Title */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
        >
          <h1 className="text-5xl md:text-7xl font-black title-stretched mb-2">
            <span className="gold-text">حـــروف</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-400 mt-2">
            مـــع
          </h2>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            عـبـدو
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-gray-400 text-lg max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          لعبة الحروف العربية - تحدى أصدقاءك في خلية الحروف!
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <Link href="/setup">
            <motion.button
              className="btn-primary text-xl px-12 py-4 rounded-2xl font-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🎮 إنشاء لعبة
            </motion.button>
          </Link>
        </motion.div>

        {/* Footer credits */}
        <motion.p
          className="text-gray-600 text-sm mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          حروف مع عبدو © {new Date().getFullYear()}
        </motion.p>
      </motion.div>
    </main>
  );
}
