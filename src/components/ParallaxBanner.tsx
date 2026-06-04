import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxBanner() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative h-[400px] md:h-[500px] overflow-hidden flex items-center justify-center">
      {/* Parallax bg */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full"
      >
        <img
          src="/images/hero-car.jpg"
          alt="Luxury Car Detailing Dubai"
          className="w-full h-[130%] object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6"
      >
        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#00d4ff]" />
          <span className="section-label">Premium Promise</span>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#00d4ff]" />
        </div>

        <h2 className="font-orbitron font-black text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
          Your Car Deserves<br />
          <span className="gradient-text">Nothing But The Best</span>
        </h2>

        <p className="font-rajdhani text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Every vehicle that enters our studio leaves as a masterpiece. We treat your car
          with the same passion and precision as the engineers who built it.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-primary px-10 py-4 rounded text-sm inline-flex items-center gap-3 justify-center"
          >
            Explore Services
          </a>
          <a
            href="tel:0526888889"
            className="btn-outline px-10 py-4 rounded text-sm inline-flex items-center gap-3 justify-center"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            052 688 8889
          </a>
        </div>
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
}
