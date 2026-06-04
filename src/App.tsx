import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import AnnouncementBar from './components/AnnouncementBar';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import BrandStrip from './components/BrandStrip';
import ServicesSection from './components/ServicesSection';
import StatsSection from './components/StatsSection';
import BeforeAfterSection from './components/BeforeAfterSection';
import ParallaxBanner from './components/ParallaxBanner';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import BookingSection from './components/BookingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Prevent flash
    document.body.style.overflow = 'hidden';
  }, []);

  const handleLoadComplete = () => {
    setLoaded(true);
    document.body.style.overflow = '';
  };

  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen onComplete={handleLoadComplete} />

      {/* Custom Cursor (desktop only) */}
      <CustomCursor />

      {/* WhatsApp Float */}
      <WhatsAppFloat />

      {/* Main Site */}
      {loaded && (
        <main className="relative bg-black overflow-x-hidden">
          <AnnouncementBar />
          <Navigation />
          <HeroSection />
          <BrandStrip />
          <ServicesSection />
          <StatsSection />
          <BeforeAfterSection />
          <ParallaxBanner />
          <GallerySection />
          <TestimonialsSection />
          <BookingSection />
          <ContactSection />
          <Footer />
        </main>
      )}
    </>
  );
}
