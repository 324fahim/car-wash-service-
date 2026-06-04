import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const galleryItems = [
  {
    id: 1,
    src: '/images/gallery-1.jpg',
    title: 'Lamborghini Urus',
    service: 'Ceramic Coating',
    span: 'row-span-2',
  },
  {
    id: 2,
    src: '/images/ceramic-coating.jpg',
    title: 'Mercedes S-Class',
    service: 'Paint Correction',
  },
  {
    id: 3,
    src: '/images/ppf-film.jpg',
    title: 'BMW M5',
    service: 'PPF Protection',
  },
  {
    id: 4,
    src: '/images/gallery-2.jpg',
    title: 'Rolls Royce Ghost',
    service: 'Full Detail',
    span: 'col-span-2',
  },
  {
    id: 5,
    src: '/images/window-tint.jpg',
    title: 'Range Rover Sport',
    service: 'Window Tinting',
  },
  {
    id: 6,
    src: '/images/gallery-3.jpg',
    title: 'Ferrari SF90',
    service: 'Paint Correction',
    span: 'row-span-2',
  },
  {
    id: 7,
    src: '/images/car-wrap.jpg',
    title: 'Porsche 911',
    service: 'Car Wrapping',
  },
  {
    id: 8,
    src: '/images/paint-correction.jpg',
    title: 'Audi RS7',
    service: 'Exterior Detail',
  },
  {
    id: 9,
    src: '/images/interior-detail.jpg',
    title: 'Bentley Bentayga',
    service: 'Interior Detailing',
    span: 'col-span-2',
  },
];

function GalleryCard({ item, index, onClick }: { item: typeof galleryItems[0]; index: number; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      onClick={onClick}
      className={`relative group overflow-hidden rounded-xl cursor-pointer ${item.span || ''}`}
      style={{ aspectRatio: item.span?.includes('row-span-2') ? '9/16' : item.span?.includes('col-span-2') ? '16/7' : '4/3' }}
    >
      {/* Image */}
      <img
        src={item.src}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <span className="section-label text-[10px] mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.service}</span>
        <h3 className="font-orbitron font-bold text-white text-sm">{item.title}</h3>
        <div className="w-8 h-0.5 bg-[#00d4ff] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Zoom icon */}
      <div className="absolute top-4 right-4 w-8 h-8 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100">
        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
        </svg>
      </div>

      {/* Neon border on hover */}
      <div className="absolute inset-0 border border-[#00d4ff]/0 group-hover:border-[#00d4ff]/30 transition-colors duration-300 rounded-xl pointer-events-none" />
    </motion.div>
  );
}

function Lightbox({ item, onClose, onPrev, onNext }: {
  item: typeof galleryItems[0];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.title}
          className="w-full rounded-xl object-cover max-h-[75vh]"
        />
        <div className="mt-4 text-center">
          <h3 className="font-orbitron font-bold text-white text-xl">{item.title}</h3>
          <p className="section-label mt-1">{item.service}</p>
        </div>
      </motion.div>

      {/* Navigation */}
      <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 glass rounded-full flex items-center justify-center hover:border-[#00d4ff] transition-colors">
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 glass rounded-full flex items-center justify-center hover:border-[#00d4ff] transition-colors">
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Close */}
      <button onClick={onClose} className="absolute top-6 right-6 z-20 w-10 h-10 glass rounded-full flex items-center justify-center hover:border-[#00d4ff] transition-colors">
        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </motion.div>
  );
}

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevItem = () => setLightboxIndex(prev => prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null);
  const nextItem = () => setLightboxIndex(prev => prev !== null ? (prev + 1) % galleryItems.length : null);

  return (
    <section id="gallery" className="relative py-28 bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute top-0 left-0 right-0 h-px luxury-divider" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#00d4ff]" />
            <span className="section-label">Our Work</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#00d4ff]" />
          </div>
          <h2 className="font-orbitron font-black text-4xl md:text-5xl text-white mb-6">
            Premium <span className="gradient-text">Gallery</span>
          </h2>
          <p className="font-rajdhani text-lg text-white/50 max-w-xl mx-auto">
            Browse our portfolio of luxury vehicle transformations. Each project reflects our
            unwavering commitment to excellence.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-auto"
          style={{ gridAutoRows: '200px' }}
        >
          {galleryItems.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              index={index}
              onClick={() => openLightbox(index)}
            />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12 flex justify-center gap-4 flex-wrap"
        >
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-8 py-3 rounded text-sm inline-flex items-center gap-3"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            View Instagram
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            item={galleryItems[lightboxIndex]}
            onClose={closeLightbox}
            onPrev={prevItem}
            onNext={nextItem}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
