
import React from 'react';
import SectionTitle from './common/SectionTitle';
import Button from './common/Button';

const AboutSection: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const section = document.querySelector('#contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://picsum.photos/seed/aboutus/800/600" 
              alt="Digi Yuddh Team" 
              className="rounded-xl shadow-2xl object-cover w-full h-auto md:h-[450px]" 
            />
          </div>
          <div className="md:pl-8">
            <SectionTitle title="About Digi Yuddh" subtitle="Who We Are" className="text-left mb-6" />
            <p className="text-lg text-brand-dark-grey mb-6 leading-relaxed">
              Digi Yuddh is more than just a digital marketing agency; we are your strategic partner in navigating the complexities of the online landscape. Founded on the principles of innovation, integrity, and impact, we strive to deliver measurable results that propel your business forward.
            </p>
            <p className="text-brand-dark-grey mb-8 leading-relaxed">
              Our team comprises seasoned professionals with diverse expertise in SEO, SMM, content creation, web development, and data analytics. We believe in a collaborative approach, working closely with you to understand your unique goals and craft bespoke strategies that resonate with your target audience.
            </p>
            <Button variant="primary" size="lg" onClick={scrollToContact}>
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
