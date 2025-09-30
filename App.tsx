
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PricingPlansSection from './components/PricingPlansSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 text-brand-dark-grey min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
  <ServicesSection />
  <PricingPlansSection />
        <AboutSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;