import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Ahmed Al Mansouri',
    role: 'Lamborghini Urus Owner',
    location: 'Dubai Marina',
    rating: 5,
    text: 'Exceptional ceramic coating service on my Urus. The team\'s attention to detail is unmatched. My car looks better than it did from the showroom. H&M is the only place I trust with my vehicles.',
    avatar: 'A',
    color: '#00d4ff',
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    role: 'Ferrari 488 Owner',
    location: 'Downtown Dubai',
    rating: 5,
    text: 'The PPF installation on my Ferrari was flawless. You can\'t even tell it\'s there, but the protection is incredible. Professional team, premium results. Absolutely worth every dirham.',
    avatar: 'S',
    color: '#c9a84c',
  },
  {
    id: 3,
    name: 'Mohammed Al Rashid',
    role: 'Rolls Royce Owner',
    location: 'Palm Jumeirah',
    rating: 5,
    text: 'I wouldn\'t trust anyone else with my Ghost. The full detail and ceramic coating they did exceeded all my expectations. The team treats every car like their own. Outstanding service.',
    avatar: 'M',
    color: '#9b59b6',
  },
  {
    id: 4,
    name: 'James Blackwood',
    role: 'Porsche GT3 Owner',
    location: 'DIFC',
    rating: 5,
    text: 'Paint correction on my GT3 RS brought it back to life. Years of swirl marks gone in a day. The results speak for themselves — showroom quality. H&M is Dubai\'s best kept secret.',
    avatar: 'J',
    color: '#e74c3c',
  },
  {
    id: 5,
    name: 'Fatima Al Zaabi',
    role: 'Range Rover Owner',
    location: 'Jumeirah',
    rating: 5,
    text: 'The window tinting service was perfect. They used premium 3M film and the installation was bubble-free. The heat reduction is remarkable. Great value and incredible professionalism.',
    avatar: 'F',
    color: '#27ae60',
  },
  {
    id: 6,
    name: 'David Chen',
    role: 'BMW M8 Owner',
    location: 'Business Bay',
    rating: 5,
    text: 'Incredible wrap job on my M8! The matte black finish is absolutely stunning. The team was meticulous and the quality is like nothing I\'ve seen in Dubai. 100% recommend.',
    avatar: 'D',
    color: '#3498db',
  },
  {
    id: 7,
    name: 'Khalid Al Falasi',
    role: 'Bugatti Owner',
    location: 'Emirates Hills',
    rating: 5,
    text: 'Trusted H&M with my Bugatti for full PPF protection. A decision I\'ll never regret. Absolute professionals who understand the value of what they\'re working on. Magnificent results.',
    avatar: 'K',
    color: '#f39c12',
  },
  {
    id: 8,
    name: 'Elena Petrov',
    role: 'McLaren Owner',
    location: 'Dubai Hills',
    rating: 5,
    text: 'The interior detailing on my McLaren was transformative. Every surface was treated with such care. The leather conditioning, the steam cleaning — every detail was perfect. Highly recommend.',
    avatar: 'E',
    color: '#ff6b9d',
  },
];

// Duplicate for seamless infinite scroll
const allTestimonials = [...testimonials, ...testimonials];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? 'text-[#c9a84c]' : 'text-white/20'}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div
      className="flex-shrink-0 w-80 glass rounded-2xl p-6 border border-white/5 hover:border-[#00d4ff]/20 transition-all duration-300 mx-3 group"
    >
      {/* Quote icon */}
      <div className="text-[#00d4ff]/20 text-4xl font-serif mb-4 leading-none group-hover:text-[#00d4ff]/40 transition-colors">"</div>

      {/* Rating */}
      <StarRating rating={testimonial.rating} />

      {/* Text */}
      <p className="font-inter text-white/60 text-sm leading-relaxed mt-4 mb-6 group-hover:text-white/80 transition-colors">
        {testimonial.text}
      </p>

      {/* Divider */}
      <div className="luxury-divider mb-5 opacity-20" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-orbitron font-bold text-sm flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${testimonial.color}40, ${testimonial.color}20)`, border: `1px solid ${testimonial.color}40` }}
        >
          {testimonial.avatar}
        </div>
        <div>
          <div className="font-orbitron font-bold text-white text-xs">{testimonial.name}</div>
          <div className="font-rajdhani text-white/40 text-xs tracking-wider">{testimonial.role}</div>
          <div className="flex items-center gap-1 mt-0.5">
            <svg className="w-2.5 h-2.5 text-[#00d4ff]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-rajdhani text-[#00d4ff]/60 text-[10px]">{testimonial.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-28 bg-black overflow-hidden">
      <div className="absolute inset-0 carbon-fiber opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px luxury-divider" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#00d4ff]/4 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#c9a84c]/3 rounded-full blur-[100px] pointer-events-none" />

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
            <span className="section-label">Client Reviews</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#00d4ff]" />
          </div>
          <h2 className="font-orbitron font-black text-4xl md:text-5xl text-white mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="font-rajdhani text-lg text-white/50 max-w-xl mx-auto">
            Join hundreds of satisfied luxury car owners across Dubai who trust H&M Car Polishing
            with their most prized possessions.
          </p>

          {/* Rating summary */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="flex flex-col items-center">
              <span className="font-orbitron font-black text-5xl text-white">5.0</span>
              <div className="flex gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#c9a84c]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="font-rajdhani text-white/40 text-sm mt-1 tracking-wider">Average Rating</span>
            </div>
            <div className="w-px h-16 bg-white/10" />
            <div className="flex flex-col items-center">
              <span className="font-orbitron font-black text-5xl text-[#00d4ff]">500+</span>
              <span className="font-rajdhani text-white/40 text-sm mt-2 tracking-wider">Verified Reviews</span>
            </div>
            <div className="w-px h-16 bg-white/10" />
            <div className="flex flex-col items-center">
              <span className="font-orbitron font-black text-5xl text-white">98%</span>
              <span className="font-rajdhani text-white/40 text-sm mt-2 tracking-wider">Would Recommend</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Carousel - edge to edge */}
      <div className="relative overflow-hidden">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="carousel-track">
          {allTestimonials.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
          ))}
        </div>
      </div>

      {/* Second row - opposite direction */}
      <div className="relative overflow-hidden mt-6">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="carousel-track" style={{ animationDirection: 'reverse', animationDuration: '35s' }}>
          {[...allTestimonials].reverse().map((t, i) => (
            <TestimonialCard key={`rev-${t.id}-${i}`} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
