
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { CATEGORIES } from "@/lib/game-data";

type GameMode = 'presenter' | 'auto' | 'solo';

interface SetupState {
  mode: GameMode;
  timerSeconds: number;
  categories: string[];
  team1Name: string;
  team2Name: string;
}

export default function SetupPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [setup, setSetup] = useState<SetupState>({
    mode: 'auto',
    timerSeconds: 30,
    categories: ['name', 'animal', 'plant', 'object', 'country'],
    team1Name: 'الفريق الأخضر',
    team2Name: 'الفريق الأحمر',
  });

  const modes = [
    { id: 'auto' as GameMode, label: 'بدون مقدم', desc: 'النظام يدير اللعبة تلقائياً', icon: '🤖' },
    { id: 'presenter' as GameMode, label: 'مع مقدم', desc: 'مقدم يدير اللعبة', icon: '🎤' },
    { id: 'solo' as GameMode, label: 'فردي', desc: 'العب لوحدك ضد الوقت', icon: '🎯' },
  ];

  const timerOptions = [15, 30, 45, 60];

  const toggleCategory = (catId: string) => {
    setSetup(prev => ({
      ...prev,
      categories: prev.categories.includes(catId)
        ? prev.categories.filter(c => c !== catId)
        : [...prev.categories, catId],
    }));
  };

  const startGame = () => {
    const params = new URLSearchParams({
      mode: setup.mode,
      timer: setup.timerSeconds.toString(),
      cats: setup.categories.join(','),
      t1: setup.team1Name,
      t2: setup.team2Name,
    });
    router.push(`/play?${params.toString()}`);
  };

  return (
    <main className="game-bg min-h-screen flex flex-col items-center px-4 py-8">
      <motion.div
        className="w-full max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black gold-text mb-2">إعداد اللعبة</h1>
          <div className="flex justify-center gap-2 mt-4">
            {[1, 2, 3].map(s => (
              <div
                key={s}
                className={`w-3 h-3 rounded-full transition-all ${
                  s <= step ? 'bg-primary-500 scale-110' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Step 1: Mode */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <h2 className="text-xl font-bold text-center mb-6">اختر نوع اللعبة</h2>
            <div className="grid gap-4">
              {modes.map(m => (
                <motion.button
                  key={m.id}
                  className={`glass-card p-6 text-right w-full transition-all ${
                    setup.mode === m.id 
                      ? 'border-primary-500 bg-primary-500/10 shadow-lg shadow-primary-500/20' 
                      : 'hover:bg-white/5'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSetup({ ...setup, mode: m.id })}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{m.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold">{m.label}</h3>
                      <p className="text-gray-400 text-sm">{m.desc}</p>
                    </div>
                    {setup.mode === m.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="mr-auto w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center"
                      >
                        <span className="text-white text-sm">✓</span>
                      </motion.div>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <motion.button
                className="btn-primary px-8 py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStep(2)}
              >
                التالي ←
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Categories & Timer */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-xl font-bold text-center mb-4">اختر الفئات</h2>
            <div className="grid grid-cols-2 gap-3">
              {CATEGORIES.map(cat => (
                <motion.button
                  key={cat.id}
                  className={`glass-card p-4 transition-all ${
                    setup.categories.includes(cat.id)
                      ? 'border-primary-500 bg-primary-500/10'
                      : 'opacity-50 hover:opacity-75'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggleCategory(cat.id)}
                >
                  <span className="text-2xl">{cat.icon}</span>
                  <span className="text-sm font-bold mr-2">{cat.label}</span>
                </motion.button>
              ))}
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-center">⏱️ الوقت</h3>
              <div className="flex justify-center gap-3">
                {timerOptions.map(t => (
                  <motion.button
                    key={t}
                    className={`glass-card px-5 py-3 font-bold transition-all ${
                      setup.timerSeconds === t
                        ? 'border-primary-500 bg-primary-500/10 text-primary-400'
                        : 'hover:bg-white/5'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSetup({ ...setup, timerSeconds: t })}
                  >
                    {t}ث
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                className="btn-secondary px-6 py-3"
                whileTap={{ scale: 0.95 }}
                onClick={() => setStep(1)}
              >
                → السابق
              </motion.button>
              <motion.button
                className="btn-primary px-8 py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStep(3)}
              >
                التالي ←
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Teams */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-xl font-bold text-center mb-4">أسماء الفرق</h2>

            {setup.mode !== 'solo' && (
              <div className="space-y-4">
                <div className="glass-card p-4">
                  <label className="block text-sm text-green-400 font-bold mb-2">🟢 الفريق الأول</label>
                  <input
                    type="text"
                    value={setup.team1Name}
                    onChange={e => setSetup({ ...setup, team1Name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="اسم الفريق الأول"
                  />
                </div>
                <div className="glass-card p-4">
                  <label className="block text-sm text-red-400 font-bold mb-2">🔴 الفريق الثاني</label>
                  <input
                    type="text"
                    value={setup.team2Name}
                    onChange={e => setSetup({ ...setup, team2Name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="اسم الفريق الثاني"
                  />
                </div>
              </div>
            )}

            {/* Summary */}
            <div className="glass-card p-6 space-y-3">
              <h3 className="font-bold text-primary-400">ملخص الإعدادات</h3>
              <div className="text-sm text-gray-300 space-y-1">
                <p>النوع: <span className="text-white font-bold">{modes.find(m => m.id === setup.mode)?.label}</span></p>
                <p>الوقت: <span className="text-white font-bold">{setup.timerSeconds} ثانية</span></p>
                <p>الفئات: <span className="text-white font-bold">{setup.categories.length} فئات</span></p>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                className="btn-secondary px-6 py-3"
                whileTap={{ scale: 0.95 }}
                onClick={() => setStep(2)}
              >
                → السابق
              </motion.button>
              <motion.button
                className="btn-primary px-10 py-4 text-xl font-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={startGame}
              >
                🎮 يلا نلعب!
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </main>
  );
}
