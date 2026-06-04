import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  { value: 1000, suffix: '+', label: 'Cars Detailed', description: 'Luxury vehicles transformed' },
  { value: 98, suffix: '%', label: 'Customer Satisfaction', description: 'Verified client reviews' },
  { value: 5, suffix: '+', label: 'Years Experience', description: 'In premium car care' },
  { value: 50, suffix: '+', label: 'Luxury Brands', description: 'Serviced & protected' },
];

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Certified Experts',
    description: 'Our team is trained and certified in the latest detailing and protection technologies.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Premium Products',
    description: 'We exclusively use top-tier brands: 3M, Gyeon, Gtechniq, Xpel, and Llumar.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Fast Turnaround',
    description: 'We respect your time. Most services completed same-day or within 24 hours.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Warranty Protection',
    description: 'All our ceramic and PPF services come with written warranties for your peace of mind.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Supercar Specialists',
    description: 'From Lamborghini to Rolls-Royce, we handle the most exclusive vehicles with care.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Dubai-Based',
    description: 'Conveniently located in Al Quoz 3, serving all areas of Dubai and greater UAE.',
  },
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-28 overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 carbon-fiber opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      {/* Neon lines */}
      <div className="absolute top-0 left-0 right-0 h-px luxury-divider" />
      <div className="absolute bottom-0 left-0 right-0 h-px luxury-divider" />

      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <span className="font-orbitron font-black text-[20vw] text-white/[0.015] select-none">
          LUXURY
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
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
            <span className="section-label">Why Choose Us</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#00d4ff]" />
          </div>
          <h2 className="font-orbitron font-black text-4xl md:text-5xl text-white mb-4">
            Dubai's Most Trusted<br />
            <span className="gradient-text">Car Detailing Studio</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-xl p-8 text-center relative overflow-hidden group"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-[#00d4ff]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="stat-number text-4xl md:text-5xl font-black mb-2">
                {isInView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    delay={i * 0.1}
                    suffix={stat.suffix}
                  />
                ) : '0'}
              </div>
              <div className="font-orbitron font-bold text-white text-sm mb-1">{stat.label}</div>
              <div className="font-rajdhani text-white/40 text-xs tracking-wider">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group flex gap-5 p-6 rounded-xl glass border border-white/5 hover:border-[#00d4ff]/20 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center text-[#00d4ff] group-hover:bg-[#00d4ff]/20 transition-colors">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-orbitron font-bold text-white text-sm mb-2 group-hover:text-[#00d4ff] transition-colors">
                  {feature.title}
                </h3>
                <p className="font-inter text-white/40 text-xs leading-relaxed group-hover:text-white/60 transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
