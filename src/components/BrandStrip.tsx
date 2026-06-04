import { motion } from 'framer-motion';

const brands = [
  'LAMBORGHINI', 'FERRARI', 'ROLLS-ROYCE', 'PORSCHE', 'BUGATTI',
  'MCLAREN', 'BENTLEY', 'MERCEDES', 'BMW', 'AUDI', 'RANGE ROVER', 'LEXUS',
];

const allBrands = [...brands, ...brands];

export default function BrandStrip() {
  return (
    <section className="relative py-12 bg-[#070707] overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-transparent to-[#070707] z-10 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-6"
      >
        <span className="font-rajdhani text-white/25 text-xs tracking-[0.4em] uppercase">
          Trusted by owners of the world's finest automobiles
        </span>
      </motion.div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#070707] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#070707] to-transparent z-20 pointer-events-none" />
        
        <div
          className="flex items-center"
          style={{
            animation: 'carousel-left 25s linear infinite',
          }}
        >
          {allBrands.map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="flex-shrink-0 mx-10 flex items-center gap-2 opacity-25 hover:opacity-60 transition-opacity duration-300"
            >
              <div className="w-1 h-1 rounded-full bg-[#00d4ff]" />
              <span className="font-orbitron font-bold text-white text-xs tracking-[0.25em]">
                {brand}
              </span>
              <div className="w-1 h-1 rounded-full bg-[#00d4ff]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
