import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            setTimeout(onComplete, 600);
          }, 400);
          return 100;
        }
        return prev + Math.random() * 8 + 2;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100000] bg-black flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Background grid */}
          <div className="absolute inset-0 grid-bg opacity-30" />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-center mb-16"
          >
            {/* Animated logo mark */}
            <div className="relative mb-6">
              <motion.div
                className="w-24 h-24 border border-[#00d4ff]/30 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute inset-3 border border-[#00d4ff]/20 rounded-full" />
                <div className="absolute inset-6 border border-[#00d4ff]/10 rounded-full" />
                <motion.div
                  className="absolute w-3 h-3 bg-[#00d4ff] rounded-full top-1 left-1/2 -translate-x-1/2 shadow-[0_0_10px_#00d4ff]"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-orbitron font-black text-2xl gradient-text">H&M</span>
              </div>
            </div>

            <h1 className="font-orbitron text-2xl font-bold text-white tracking-[0.3em] uppercase">
              Car Polishing
            </h1>
            <p className="font-rajdhani text-[#00d4ff]/70 tracking-[0.5em] text-sm mt-2 uppercase">
              Dubai's Premier Detailing
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="w-64 flex flex-col items-center gap-4">
            <div className="w-full h-px bg-white/10 relative overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00d4ff] to-[#0066cc] rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
              <div
                className="absolute top-0 h-full w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                style={{ left: `${progress - 5}%`, transition: 'left 0.1s' }}
              />
            </div>
            <span className="font-orbitron text-[#00d4ff] text-sm tracking-widest">
              {Math.min(Math.round(progress), 100)}%
            </span>
          </div>

          {/* Bottom tagline */}
          <motion.p
            className="absolute bottom-12 font-rajdhani text-white/20 tracking-[0.4em] text-xs uppercase"
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Initializing Premium Experience
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
