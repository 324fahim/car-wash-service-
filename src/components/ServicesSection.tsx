import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Ceramic Coating',
    description: 'Ultra-hydrophobic nano ceramic protection providing mirror-like gloss and years of paint protection for your luxury vehicle.',
    icon: '◈',
    gradient: 'from-[#00d4ff]/20 to-[#0066cc]/10',
    border: 'border-[#00d4ff]/20',
    glow: 'rgba(0, 212, 255, 0.15)',
    image: '/images/ceramic-coating.jpg',
    features: ['9H Hardness', '5-Year Warranty', 'Self-Cleaning', 'UV Protection'],
  },
  {
    id: 2,
    title: 'Paint Protection Film',
    description: 'Military-grade PPF shields your paintwork from stone chips, scratches and environmental damage with self-healing technology.',
    icon: '◉',
    gradient: 'from-[#c9a84c]/20 to-[#8b6914]/10',
    border: 'border-[#c9a84c]/20',
    glow: 'rgba(201, 168, 76, 0.15)',
    image: '/images/ppf-film.jpg',
    features: ['Self-Healing', 'Invisible Protection', '10-Year Warranty', 'Anti-Yellowing'],
  },
  {
    id: 3,
    title: 'Window Tinting',
    description: 'Premium nano-ceramic window films blocking UV rays and heat, enhancing privacy and interior comfort with crystal clarity.',
    icon: '◧',
    gradient: 'from-[#6600ff]/20 to-[#330080]/10',
    border: 'border-[#6600ff]/20',
    glow: 'rgba(102, 0, 255, 0.15)',
    image: '/images/window-tint.jpg',
    features: ['99% UV Block', 'Heat Rejection', '3M & Llumar Films', 'Privacy Options'],
  },
  {
    id: 4,
    title: 'Car Wrapping',
    description: 'Transform your vehicle with premium vinyl wraps in unlimited colors and finishes — matte, gloss, satin, chrome, and more.',
    icon: '◫',
    gradient: 'from-[#ff4400]/20 to-[#8b1a00]/10',
    border: 'border-[#ff4400]/20',
    glow: 'rgba(255, 68, 0, 0.15)',
    image: '/images/car-wrap.jpg',
    features: ['Unlimited Colors', 'Removable', 'Paint Protection', 'Custom Designs'],
  },
  {
    id: 5,
    title: 'Paint Correction',
    description: 'Multi-stage machine polishing process eliminating swirl marks, scratches, water spots and oxidation for flawless results.',
    icon: '◎',
    gradient: 'from-[#00ff88]/20 to-[#006633]/10',
    border: 'border-[#00ff88]/20',
    glow: 'rgba(0, 255, 136, 0.15)',
    image: '/images/paint-correction.jpg',
    features: ['Swirl Removal', 'Scratch Removal', 'Multi-Stage Polish', 'Showroom Finish'],
  },
  {
    id: 6,
    title: 'Interior Detailing',
    description: 'Deep cleaning and conditioning of every interior surface — leather treatment, steam cleaning, odor elimination and protection.',
    icon: '◐',
    gradient: 'from-[#ff00aa]/20 to-[#660044]/10',
    border: 'border-[#ff00aa]/20',
    glow: 'rgba(255, 0, 170, 0.15)',
    image: '/images/interior-detail.jpg',
    features: ['Leather Treatment', 'Steam Clean', 'Odor Removal', 'UV Protection'],
  },
  {
    id: 7,
    title: 'Exterior Detailing',
    description: 'Complete exterior transformation including decontamination, clay bar treatment, hand wash, and premium wax application.',
    icon: '◑',
    gradient: 'from-[#00d4ff]/15 to-[#004466]/10',
    border: 'border-[#00d4ff]/15',
    glow: 'rgba(0, 212, 255, 0.12)',
    features: ['Clay Bar', 'Decontamination', 'Hand Wash', 'Wax Finish'],
  },
  {
    id: 8,
    title: 'Headlight Restoration',
    description: 'Professional UV-cut headlight restoration bringing clarity back to yellowed, foggy headlights for improved visibility.',
    icon: '◒',
    gradient: 'from-[#ffcc00]/20 to-[#664d00]/10',
    border: 'border-[#ffcc00]/20',
    glow: 'rgba(255, 204, 0, 0.15)',
    features: ['UV Protection', 'Crystal Clear', 'Wet Sand & Polish', 'Long Lasting'],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative rounded-xl overflow-hidden service-card cursor-pointer"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Animated border on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
        style={{
          background: `linear-gradient(135deg, ${service.glow}, transparent)`,
          border: `1px solid ${service.glow.replace('0.15', '0.4')}`,
        }}
      />

      {/* Glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl blur-xl -z-10"
        style={{ background: service.glow }}
      />

      {/* Content */}
      <div className="relative z-10 p-7">
        {/* Icon & Number */}
        <div className="flex items-start justify-between mb-6">
          <div
            className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.gradient} border ${service.border} flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110`}
          >
            <span className="text-white/80">{service.icon}</span>
          </div>
          <span className="font-orbitron text-5xl font-black text-white/5 group-hover:text-white/10 transition-colors">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-orbitron font-bold text-lg text-white mb-3 group-hover:text-[#00d4ff] transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="font-inter text-white/50 text-sm leading-relaxed mb-5 group-hover:text-white/70 transition-colors">
          {service.description}
        </p>

        {/* Divider */}
        <div className="luxury-divider mb-5 opacity-30 group-hover:opacity-60 transition-opacity" />

        {/* Features */}
        <div className="grid grid-cols-2 gap-2">
          {service.features.map((f) => (
            <div key={f} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-[#00d4ff] flex-shrink-0" />
              <span className="font-rajdhani text-xs text-white/40 group-hover:text-white/60 transition-colors tracking-wider">
                {f}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-6 flex items-center gap-2 text-[#00d4ff] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span className="font-rajdhani font-600 text-sm tracking-wider uppercase">Learn More</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className="absolute top-0 right-0 w-32 h-32 -translate-x-8 -translate-y-8 rotate-45"
          style={{ background: `linear-gradient(135deg, ${service.glow}, transparent)` }}
        />
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="relative py-28 bg-[#050505] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px luxury-divider" />

      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00d4ff]/3 blur-[120px] pointer-events-none" />

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
            <span className="section-label">Our Services</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#00d4ff]" />
          </div>
          <h2 className="font-orbitron font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Premium Automotive<br />
            <span className="gradient-text">Protection Services</span>
          </h2>
          <p className="font-rajdhani text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            World-class car care solutions crafted for Dubai's most discerning luxury vehicle owners.
            Every service is delivered with precision, passion and unmatched expertise.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#booking"
            onClick={(e) => { e.preventDefault(); document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-primary px-10 py-4 rounded text-sm inline-flex items-center gap-3"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Get a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
