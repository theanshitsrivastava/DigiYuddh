
import React from 'react';
import Button from './common/Button';

const HeroSection: React.FC = () => {
    const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const section = document.querySelector('#contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-brand-dark-blue text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-medium-blue rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 filter blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent rounded-full opacity-20 translate-x-1/3 translate-y-1/3 filter blur-3xl"></div>


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Elevate Your <span className="text-brand-medium-blue">Digital Presence</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-sky-200 max-w-3xl mx-auto mb-10">
          We are Digi Yuddh, a passionate team of digital marketing experts dedicated to helping your business thrive in the online world.
        </p>
        <div className="space-x-4">
            <Button 
                variant="primary" 
                size="lg" 
                onClick={scrollToContact}
            >
                Get Started
            </Button>
            <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-brand-dark-blue"
                onClick={(e) => {
                    e.preventDefault();
                    const section = document.querySelector('#services');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                Our Services
            </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
