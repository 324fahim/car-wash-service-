import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className={`fixed left-0 right-0 z-[9990] transition-all duration-500 ${
          scrolled ? 'glass-dark py-3 top-0' : 'py-5 top-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 border border-[#00d4ff]/40 rounded-full animate-spin" style={{ animationDuration: '8s' }} />
              <div className="absolute inset-1 border border-[#00d4ff]/20 rounded-full animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-orbitron font-black text-xs text-white">HM</span>
              </div>
            </div>
            <div>
              <div className="font-orbitron font-bold text-white text-sm tracking-wider leading-tight">H&M</div>
              <div className="font-rajdhani text-[#00d4ff] text-[10px] tracking-[0.3em] uppercase leading-tight">Car Polishing</div>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="nav-link"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0526888889"
              className="flex items-center gap-2 font-rajdhani text-sm font-600 text-white/70 hover:text-[#00d4ff] transition-colors tracking-wider"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              052 688 8889
            </a>
            <button
              onClick={() => handleNavClick('#booking')}
              className="btn-primary px-5 py-2.5 rounded text-sm"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden flex flex-col gap-1.5 cursor-pointer p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
              className="block w-6 h-px bg-white"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="block w-6 h-px bg-white"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
              className="block w-6 h-px bg-white"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-[9980] glass-dark flex flex-col items-center justify-center gap-8"
          >
            <div className="absolute inset-0 grid-bg opacity-20" />
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => handleNavClick(link.href)}
                className="font-orbitron text-2xl font-bold text-white hover:text-[#00d4ff] transition-colors tracking-wider uppercase"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center gap-4 mt-4"
            >
              <a href="tel:0526888889" className="btn-primary px-8 py-3 rounded text-base">
                Call Now
              </a>
              <a
                href="https://wa.me/9710526888889"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-8 py-3 rounded text-base"
              >
                WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
