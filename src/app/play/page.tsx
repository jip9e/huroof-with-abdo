
"use client";

import { useReducer, useEffect, useState, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HEX_BOARD_LETTERS, getRandomQuestion, CATEGORIES, checkAnswer } from "@/lib/game-data";
import type { Question } from "@/lib/game-data";
import { gameReducer, createBoard, DEFAULT_SETTINGS } from "@/lib/game-engine";
import type { GameState, GameSettings, Team, HexCell } from "@/lib/game-engine";
import { sounds } from "@/lib/sounds";

function GameContent() {
  const searchParams = useSearchParams();

  const initialState: GameState = {
    board: [],
    currentTeam: 'team1',
    team1Score: 0,
    team2Score: 0,
    selectedCell: null,
    phase: 'setup',
    settings: DEFAULT_SETTINGS,
    round: 1,
    totalRounds: 25,
    winner: null,
    usedQuestions: new Set(),
  };

  const [state, dispatch] = useReducer(gameReducer, initialState);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [answer, setAnswer] = useState('');
  const [showResult, setShowResult] = useState<'correct' | 'wrong' | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Initialize game from URL params
  useEffect(() => {
    const mode = (searchParams.get('mode') || 'auto') as GameSettings['mode'];
    const timer = parseInt(searchParams.get('timer') || '30');
    const cats = (searchParams.get('cats') || 'name,animal,plant,object,country').split(',');
    const t1 = searchParams.get('t1') || 'الفريق الأخضر';
    const t2 = searchParams.get('t2') || 'الفريق الأحمر';

    const settings: GameSettings = {
      mode,
      timerSeconds: timer,
      categories: cats,
      team1Name: t1,
      team2Name: t2,
      boardSize: 5,
    };

    const board = createBoard(HEX_BOARD_LETTERS, 5);
    dispatch({ type: 'START_GAME', settings, board });
  }, [searchParams]);

  // Timer
  useEffect(() => {
    if (state.phase !== 'question') return;

    setTimeLeft(state.settings.timerSeconds);
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          handleTimeout();
          return 0;
        }
        if (prev <= 6 && soundEnabled) sounds.tick();
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [state.phase, state.settings.timerSeconds]);

  const handleCellClick = useCallback((row: number, col: number) => {
    if (state.phase !== 'playing') return;
    const cell = state.board[row]?.[col];
    if (!cell || cell.state !== 'empty') return;

    if (soundEnabled) sounds.click();
    dispatch({ type: 'SELECT_CELL', row, col });

    // Get a random question for this letter
    const q = getRandomQuestion(cell.letter, []);
    if (q) {
      setCurrentQuestion(q);
      setAnswer('');
      setShowResult(null);
    }
  }, [state.phase, state.board, soundEnabled]);

  const handleSubmitAnswer = useCallback(() => {
    if (!currentQuestion || !answer.trim()) return;

    const isCorrect = checkAnswer(answer, currentQuestion.answers);

    if (isCorrect) {
      setShowResult('correct');
      if (soundEnabled) sounds.correct();
      dispatch({ type: 'CORRECT_ANSWER', team: state.currentTeam });
    } else {
      setShowResult('wrong');
      if (soundEnabled) sounds.wrong();
      dispatch({ type: 'WRONG_ANSWER' });
    }

    // Auto advance after reveal
    setTimeout(() => {
      setShowResult(null);
      setCurrentQuestion(null);
      setAnswer('');
      dispatch({ type: 'NEXT_TURN' });
    }, 2000);
  }, [currentQuestion, answer, state.currentTeam, soundEnabled]);

  const handleTimeout = useCallback(() => {
    if (soundEnabled) sounds.timeout();
    setShowResult('wrong');
    dispatch({ type: 'TIMEOUT' });

    setTimeout(() => {
      setShowResult(null);
      setCurrentQuestion(null);
      setAnswer('');
      dispatch({ type: 'NEXT_TURN' });
    }, 2000);
  }, [soundEnabled]);

  const handleSkip = useCallback(() => {
    setShowResult(null);
    setCurrentQuestion(null);
    setAnswer('');
    dispatch({ type: 'WRONG_ANSWER' });
    setTimeout(() => dispatch({ type: 'NEXT_TURN' }), 100);
  }, []);

  const timerPercent = (timeLeft / state.settings.timerSeconds) * 100;
  const timerColor = timeLeft <= 5 ? '#ef4444' : timeLeft <= 10 ? '#eab308' : '#00d4aa';

  if (state.phase === 'setup') {
    return <div className="game-bg min-h-screen flex items-center justify-center"><div className="text-2xl text-primary-400 animate-pulse">جاري التحميل...</div></div>;
  }

  return (
    <main className="game-bg min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 glass-card mx-2 mt-2 rounded-xl">
        {/* Team 1 Score */}
        <motion.div 
          className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all ${
            state.currentTeam === 'team1' ? 'bg-green-500/20 ring-2 ring-green-500' : ''
          }`}
          animate={state.currentTeam === 'team1' ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="w-4 h-4 rounded-full bg-green-500" />
          <div>
            <p className="text-xs text-gray-400">{state.settings.team1Name}</p>
            <p className="text-2xl font-black text-green-400">{state.team1Score}</p>
          </div>
        </motion.div>

        {/* Center: Round info */}
        <div className="text-center">
          <p className="text-xs text-gray-500">الجولة</p>
          <p className="text-lg font-bold text-primary-400">{state.round}</p>
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="text-xs text-gray-500 hover:text-gray-300"
          >
            {soundEnabled ? '🔊' : '🔇'}
          </button>
        </div>

        {/* Team 2 Score */}
        <motion.div 
          className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all ${
            state.currentTeam === 'team2' ? 'bg-red-500/20 ring-2 ring-red-500' : ''
          }`}
          animate={state.currentTeam === 'team2' ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="text-xs text-gray-400">{state.settings.team2Name}</p>
            <p className="text-2xl font-black text-red-400">{state.team2Score}</p>
          </div>
          <div className="w-4 h-4 rounded-full bg-red-500" />
        </motion.div>
      </div>

      {/* Current team indicator */}
      <motion.div 
        className="text-center py-2"
        key={state.currentTeam}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className={`text-sm font-bold ${
          state.currentTeam === 'team1' ? 'text-green-400' : 'text-red-400'
        }`}>
          دور {state.currentTeam === 'team1' ? state.settings.team1Name : state.settings.team2Name}
        </span>
      </motion.div>

      {/* Hex Board */}
      <div className="flex-1 flex items-center justify-center px-4 py-4">
        <div className="hex-grid">
          {state.board.map((row, ri) => (
            <div key={ri} className="hex-row">
              {row.map((cell, ci) => (
                <motion.div
                  key={`${ri}-${ci}`}
                  className={`hexagon ${
                    cell.state === 'team1' ? 'hex-team1' :
                    cell.state === 'team2' ? 'hex-team2' :
                    cell.isActive ? 'hex-active' : 'hex-default'
                  }`}
                  whileHover={cell.state === 'empty' ? { scale: 1.15 } : {}}
                  whileTap={cell.state === 'empty' ? { scale: 0.95 } : {}}
                  onClick={() => handleCellClick(ri, ci)}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (ri * 5 + ci) * 0.05, type: 'spring' }}
                >
                  <div className="hexagon-inner">
                    {cell.letter}
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Question Modal */}
      <AnimatePresence>
        {state.phase === 'question' && currentQuestion && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="glass-card w-full max-w-lg p-8 space-y-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring' }}
            >
              {/* Timer */}
              <div className="flex justify-center">
                <div className="relative w-20 h-20">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle cx="40" cy="40" r="36" className="fill-none stroke-white/10" strokeWidth="4" />
                    <circle
                      cx="40" cy="40" r="36"
                      className="fill-none"
                      stroke={timerColor}
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 36}`}
                      strokeDashoffset={`${2 * Math.PI * 36 * (1 - timerPercent / 100)}`}
                      style={{ transition: 'stroke-dashoffset 1s linear, stroke 0.3s' }}
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-2xl font-black" style={{ color: timerColor }}>
                    {timeLeft}
                  </span>
                </div>
              </div>

              {/* Category & Question */}
              <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 text-sm">
                  <span>{CATEGORIES.find(c => c.id === currentQuestion.category)?.icon}</span>
                  <span className="text-primary-400 font-bold">{currentQuestion.categoryLabel}</span>
                </div>
                <h2 className="text-2xl font-black leading-relaxed">
                  {currentQuestion.question}
                </h2>
                <div className="text-6xl font-black gold-text">
                  {currentQuestion.letter}
                </div>
              </div>

              {/* Answer Input */}
              <div className="space-y-3">
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubmitAnswer()}
                  className="w-full bg-white/5 border border-white/20 rounded-xl px-6 py-4 text-xl text-center font-bold focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
                  placeholder="اكتب إجابتك..."
                  autoFocus
                  dir="rtl"
                />
                <div className="flex gap-3">
                  <motion.button
                    className="btn-primary flex-1 py-4 text-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSubmitAnswer}
                    disabled={!answer.trim()}
                  >
                    ✅ تأكيد
                  </motion.button>
                  <motion.button
                    className="btn-secondary px-6 py-4"
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSkip}
                  >
                    تخطي
                  </motion.button>
                </div>
              </div>

              {/* Result Flash */}
              <AnimatePresence>
                {showResult && (
                  <motion.div
                    className={`absolute inset-0 flex items-center justify-center rounded-2xl ${
                      showResult === 'correct' ? 'bg-green-500/20' : 'bg-red-500/20'
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-center"
                    >
                      <span className="text-8xl">
                        {showResult === 'correct' ? '✅' : '❌'}
                      </span>
                      <p className={`text-3xl font-black mt-4 ${
                        showResult === 'correct' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {showResult === 'correct' ? 'صحيح! 🎉' : 'خطأ!'}
                      </p>
                      {showResult === 'wrong' && currentQuestion && (
                        <p className="text-lg text-gray-300 mt-2">
                          الإجابة: <span className="text-gold font-bold">{currentQuestion.answers[0]}</span>
                        </p>
                      )}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Winner Screen */}
      <AnimatePresence>
        {state.phase === 'finished' && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="text-center space-y-8"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', bounce: 0.5 }}
            >
              <motion.div
                className="text-8xl"
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: 2 }}
              >
                🏆
              </motion.div>
              <h1 className="text-4xl font-black gold-text">
                {state.winner === 'draw' ? 'تعادل!' : 
                  state.winner === 'team1' ? `${state.settings.team1Name} فاز!` : 
                  `${state.settings.team2Name} فاز!`}
              </h1>
              <div className="flex justify-center gap-8 text-2xl font-bold">
                <div className="text-green-400">{state.settings.team1Name}: {state.team1Score}</div>
                <div className="text-red-400">{state.settings.team2Name}: {state.team2Score}</div>
              </div>
              <div className="flex gap-4 justify-center">
                <motion.button
                  className="btn-primary px-8 py-3"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => window.location.href = '/setup'}
                >
                  🎮 لعبة جديدة
                </motion.button>
                <motion.button
                  className="btn-secondary px-8 py-3"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => window.location.href = '/'}
                >
                  🏠 الرئيسية
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default function PlayPage() {
  return (
    <Suspense fallback={
      <div className="game-bg min-h-screen flex items-center justify-center">
        <div className="text-2xl text-primary-400 animate-pulse">جاري التحميل...</div>
      </div>
    }>
      <GameContent />
    </Suspense>
  );
}
