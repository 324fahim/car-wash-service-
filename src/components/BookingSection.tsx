import { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  'Ceramic Coating',
  'Paint Protection Film (PPF)',
  'Window Tinting',
  'Car Wrapping',
  'Paint Correction',
  'Interior Detailing',
  'Exterior Detailing',
  'Headlight Restoration',
  'Full Car Detailing',
  'Other / Consultation',
];

const carTypes = [
  'Sedan',
  'SUV / 4x4',
  'Sports Car / Supercar',
  'Coupe',
  'Convertible',
  'Pickup Truck',
  'Van / Minivan',
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  carType: string;
  carModel: string;
  message: string;
}

export default function BookingSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    service: '',
    carType: '',
    carModel: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hello H&M Car Polishing! I'm interested in ${form.service || 'your services'}.\n\nName: ${form.name || 'Customer'}\nCar: ${form.carModel || 'N/A'}\nMessage: ${form.message || 'Please send me a quote.'}`
    );
    window.open(`https://wa.me/9710526888889?text=${msg}`, '_blank');
  };

  return (
    <section id="booking" className="relative py-28 bg-[#060606] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute top-0 left-0 right-0 h-px luxury-divider" />

      {/* Glow orb */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#00d4ff]/4 rounded-full blur-[120px] pointer-events-none translate-x-1/2" />

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
            <span className="section-label">Book Now</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#00d4ff]" />
          </div>
          <h2 className="font-orbitron font-black text-4xl md:text-5xl text-white mb-6">
            Schedule Your <span className="gradient-text">Premium Service</span>
          </h2>
          <p className="font-rajdhani text-lg text-white/50 max-w-xl mx-auto">
            Ready to elevate your vehicle? Book a consultation or request a free quote.
            Our experts will get back to you within 2 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Panel - Contact options */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Visit card */}
            <div className="glass rounded-2xl p-8 border border-white/5">
              <h3 className="font-orbitron font-bold text-white text-lg mb-6">Get In Touch</h3>
              
              {/* Phone */}
              <a href="tel:0526888889" className="flex items-center gap-4 mb-6 group">
                <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center text-[#00d4ff] group-hover:bg-[#00d4ff]/20 transition-colors flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-rajdhani text-white/40 text-xs tracking-wider uppercase mb-0.5">Call Us</div>
                  <div className="font-orbitron font-bold text-white text-base group-hover:text-[#00d4ff] transition-colors">052 688 8889</div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center text-[#00d4ff] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-rajdhani text-white/40 text-xs tracking-wider uppercase mb-0.5">Location</div>
                  <div className="font-orbitron font-bold text-white text-sm">Al Quoz 3, Dubai, UAE</div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center text-[#00d4ff] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-rajdhani text-white/40 text-xs tracking-wider uppercase mb-0.5">Working Hours</div>
                  <div className="font-orbitron font-bold text-white text-sm">Sat–Thu: 8AM–9PM</div>
                  <div className="font-rajdhani text-white/40 text-xs">Friday: 2PM–9PM</div>
                </div>
              </div>
            </div>

            {/* Quick action buttons */}
            <a
              href="https://wa.me/9710526888889?text=Hello%20H%26M%20Car%20Polishing!%20I'd%20like%20to%20book%20a%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl border border-[#25d366]/30 bg-[#25d366]/5 hover:bg-[#25d366]/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25d366] flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <div className="font-orbitron font-bold text-white text-sm group-hover:text-[#25d366] transition-colors">Chat on WhatsApp</div>
                <div className="font-rajdhani text-white/40 text-xs">Instant response 24/7</div>
              </div>
              <svg className="w-5 h-5 text-white/30 group-hover:text-[#25d366] ml-auto transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Map placeholder */}
            <div className="glass rounded-2xl overflow-hidden border border-white/5 h-48 flex items-center justify-center relative group hover:border-[#00d4ff]/20 transition-colors">
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="relative text-center">
                <svg className="w-8 h-8 text-[#00d4ff] mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="font-orbitron text-white text-sm font-bold">Al Quoz 3</p>
                <p className="font-rajdhani text-white/40 text-xs">Dubai, UAE</p>
                <a
                  href="https://maps.google.com/?q=Al+Quoz+3+Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-3 font-rajdhani text-[#00d4ff] text-xs tracking-wider hover:underline"
                >
                  Open in Maps
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-8 md:p-10 border border-white/5">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-[#00d4ff]/20 border border-[#00d4ff]/40 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-[#00d4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-orbitron font-bold text-white text-2xl mb-3">Request Received!</h3>
                  <p className="font-rajdhani text-white/60 text-lg mb-2">Thank you, {form.name || 'valued client'}.</p>
                  <p className="font-inter text-white/40 text-sm max-w-sm mx-auto leading-relaxed">
                    Our team will contact you within 2 hours to confirm your appointment and provide a detailed quote.
                  </p>
                  <div className="mt-8 flex justify-center gap-4">
                    <a href="tel:0526888889" className="btn-primary px-6 py-3 rounded text-sm">Call Now</a>
                    <button onClick={() => setSubmitted(false)} className="btn-outline px-6 py-3 rounded text-sm">New Request</button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-orbitron font-bold text-white text-xl mb-6">
                    Book Your <span className="text-[#00d4ff]">Appointment</span>
                  </h3>

                  {/* Name + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-rajdhani text-white/50 text-xs tracking-widest uppercase mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Ahmed Al Mansouri"
                        className="luxury-input w-full rounded-lg px-4 py-3 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block font-rajdhani text-white/50 text-xs tracking-widest uppercase mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="052 XXX XXXX"
                        className="luxury-input w-full rounded-lg px-4 py-3 text-sm"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-rajdhani text-white/50 text-xs tracking-widest uppercase mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="luxury-input w-full rounded-lg px-4 py-3 text-sm"
                    />
                  </div>

                  {/* Service + Car Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-rajdhani text-white/50 text-xs tracking-widest uppercase mb-2">Service Required *</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className="luxury-input w-full rounded-lg px-4 py-3 text-sm"
                      >
                        <option value="" className="bg-[#111]">Select Service...</option>
                        {services.map(s => (
                          <option key={s} value={s} className="bg-[#111]">{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-rajdhani text-white/50 text-xs tracking-widest uppercase mb-2">Vehicle Type *</label>
                      <select
                        name="carType"
                        value={form.carType}
                        onChange={handleChange}
                        required
                        className="luxury-input w-full rounded-lg px-4 py-3 text-sm"
                      >
                        <option value="" className="bg-[#111]">Select Type...</option>
                        {carTypes.map(c => (
                          <option key={c} value={c} className="bg-[#111]">{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Car model */}
                  <div>
                    <label className="block font-rajdhani text-white/50 text-xs tracking-widest uppercase mb-2">Car Make & Model</label>
                    <input
                      type="text"
                      name="carModel"
                      value={form.carModel}
                      onChange={handleChange}
                      placeholder="e.g. Lamborghini Urus 2023"
                      className="luxury-input w-full rounded-lg px-4 py-3 text-sm"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-rajdhani text-white/50 text-xs tracking-widest uppercase mb-2">Additional Notes</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your vehicle's condition, your requirements, or any questions..."
                      className="luxury-input w-full rounded-lg px-4 py-3 text-sm resize-none"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary flex-1 py-4 rounded text-sm inline-flex items-center justify-center gap-3"
                    >
                      {loading ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          Send Request
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="flex-1 py-4 rounded text-sm inline-flex items-center justify-center gap-3 border border-[#25d366]/40 bg-[#25d366]/5 hover:bg-[#25d366]/10 text-[#25d366] font-rajdhani font-600 tracking-wider uppercase transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp Us
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
