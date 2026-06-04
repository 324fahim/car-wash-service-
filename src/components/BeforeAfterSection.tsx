import { useRef, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';

interface ComparisonSliderProps {
  beforeLabel?: string;
  afterLabel?: string;
  beforeColor?: string;
  afterColor?: string;
  title: string;
  category: string;
}

function ComparisonSlider({ beforeLabel = 'BEFORE', afterLabel = 'AFTER', beforeColor, afterColor, title, category }: ComparisonSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSlider = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateSlider(e.clientX);
  };
  const onMouseMove = (e: React.MouseEvent) => { if (isDragging) updateSlider(e.clientX); };
  const onMouseUp = () => setIsDragging(false);
  const onTouchStart = (e: React.TouchEvent) => { setIsDragging(true); updateSlider(e.touches[0].clientX); };
  const onTouchMove = (e: React.TouchEvent) => { if (isDragging) updateSlider(e.touches[0].clientX); };
  const onTouchEnd = () => setIsDragging(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="text-center mb-2">
        <span className="section-label text-xs">{category}</span>
        <h3 className="font-orbitron font-bold text-white text-lg mt-1">{title}</h3>
      </div>
      <div
        ref={containerRef}
        className="relative rounded-xl overflow-hidden aspect-video select-none"
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* AFTER (full) */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: afterColor || 'linear-gradient(135deg, #0a2a1a 0%, #0d3d28 40%, #0a1f35 100%)' }}
        >
          <div className="text-center">
            <div className="text-6xl mb-4">✨</div>
            <div className="font-orbitron text-xl font-bold text-white">MIRROR FINISH</div>
            <div className="font-rajdhani text-green-400 text-sm mt-1 tracking-widest">CERAMIC PROTECTED</div>
          </div>
        </div>

        {/* BEFORE (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden flex items-center justify-center"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)`, background: beforeColor || 'linear-gradient(135deg, #1a0a0a 0%, #3d1a00 40%, #1f0d00 100%)' }}
        >
          <div className="text-center">
            <div className="text-6xl mb-4">😟</div>
            <div className="font-orbitron text-xl font-bold text-white">OXIDIZED PAINT</div>
            <div className="font-rajdhani text-red-400 text-sm mt-1 tracking-widest">SWIRLS & SCRATCHES</div>
          </div>
        </div>

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
        >
          {/* Slider handle */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.6)] border-2 border-[#00d4ff]"
          >
            <div className="flex gap-0.5">
              <svg className="w-3 h-3 text-[#00d4ff]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" />
              </svg>
              <svg className="w-3 h-3 text-[#00d4ff]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 glass px-3 py-1.5 rounded-full pointer-events-none">
          <span className="font-orbitron text-xs font-bold text-red-400 tracking-widest">{beforeLabel}</span>
        </div>
        <div className="absolute top-4 right-4 glass px-3 py-1.5 rounded-full pointer-events-none">
          <span className="font-orbitron text-xs font-bold text-[#00d4ff] tracking-widest">{afterLabel}</span>
        </div>

        {/* Drag hint */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass px-3 py-1 rounded-full pointer-events-none opacity-60">
          <span className="font-rajdhani text-xs text-white tracking-wider">DRAG TO COMPARE</span>
        </div>
      </div>
    </div>
  );
}

const transformations = [
  {
    title: 'Ceramic Coating',
    category: 'Paint Protection',
    beforeColor: 'linear-gradient(135deg, #1a0a0a 0%, #3d1a00 50%, #2a1500 100%)',
    afterColor: 'linear-gradient(135deg, #001a2a 0%, #00334d 50%, #001a2a 100%)',
  },
  {
    title: 'Paint Correction',
    category: 'Surface Restoration',
    beforeColor: 'linear-gradient(135deg, #1a1a1a 0%, #2d2a00 50%, #1a1500 100%)',
    afterColor: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a4d 50%, #0a0a2a 100%)',
  },
  {
    title: 'Full Detail',
    category: 'Complete Transformation',
    beforeColor: 'linear-gradient(135deg, #1a0d0d 0%, #330a0a 50%, #1a0808 100%)',
    afterColor: 'linear-gradient(135deg, #0a1a10 0%, #0d3322 50%, #081a12 100%)',
  },
];

export default function BeforeAfterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-28 bg-[#060606] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute top-0 left-0 right-0 h-px luxury-divider" />

      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00d4ff]/4 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#00d4ff]" />
            <span className="section-label">Transformations</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#00d4ff]" />
          </div>
          <h2 className="font-orbitron font-black text-4xl md:text-5xl text-white mb-6">
            See The<br />
            <span className="gradient-text">Difference</span>
          </h2>
          <p className="font-rajdhani text-lg text-white/50 max-w-xl mx-auto">
            Drag the slider to witness the incredible transformations we deliver.
            Every vehicle deserves to look its absolute best.
          </p>
        </motion.div>

        {/* Sliders */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {transformations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <ComparisonSlider
                title={item.title}
                category={item.category}
                beforeColor={item.beforeColor}
                afterColor={item.afterColor}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Process steps */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 glass rounded-2xl p-8 md:p-12 border border-white/5"
        >
          <h3 className="font-orbitron font-bold text-2xl text-white text-center mb-10">
            Our <span className="text-[#00d4ff]">4-Step</span> Process
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Inspection', desc: 'Thorough vehicle assessment & service consultation' },
              { step: '02', title: 'Preparation', desc: 'Deep cleaning, decontamination & surface prep' },
              { step: '03', title: 'Application', desc: 'Expert service application with premium products' },
              { step: '04', title: 'Quality Check', desc: 'Final inspection & client delivery' },
            ].map((step, i) => (
              <div key={step.step} className="relative text-center group">
                {i < 3 && (
                  <div className="absolute top-6 left-full w-full h-px bg-gradient-to-r from-[#00d4ff]/30 to-transparent hidden md:block -z-10" />
                )}
                <div className="w-12 h-12 rounded-full border border-[#00d4ff]/40 bg-[#00d4ff]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00d4ff]/20 transition-colors">
                  <span className="font-orbitron font-bold text-[#00d4ff] text-sm">{step.step}</span>
                </div>
                <h4 className="font-orbitron font-bold text-white text-sm mb-2">{step.title}</h4>
                <p className="font-inter text-white/40 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
