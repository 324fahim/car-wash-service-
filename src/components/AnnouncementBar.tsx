import { motion } from 'framer-motion';

const items = [
  '🏆 Dubai\'s #1 Rated Luxury Car Detailing Studio',
  '✦ Ceramic Coating Starting from AED 1,500',
  '🔒 PPF Lifetime Warranty Available',
  '⚡ Same-Day Appointments Available',
  '📍 Al Quoz 3, Dubai — Open Sat–Thu 8AM–9PM',
  '📞 Call Now: 052 688 8889',
  '🚘 Serving Lamborghini · Ferrari · Rolls-Royce · Porsche & More',
];

const allItems = [...items, ...items];

export default function AnnouncementBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-[9995] bg-[#00d4ff]/10 border-b border-[#00d4ff]/15 backdrop-blur-sm overflow-hidden"
      style={{ height: '32px' }}
    >
      <div
        className="flex items-center h-full"
        style={{
          animation: 'carousel-left 40s linear infinite',
          whiteSpace: 'nowrap',
        }}
      >
        {allItems.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center mx-12 font-rajdhani text-[11px] text-white/60 tracking-wider whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
