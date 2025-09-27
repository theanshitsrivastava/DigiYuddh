
import React, { useState, useEffect } from 'react';
import { Service } from '../types';
import { getServices } from '../services/dataService';
import ServiceCard from './ServiceCard';
import SectionTitle from './common/SectionTitle';

const ServicesSection: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const data = await getServices();
        setServices(data);
      } catch (error) {
        console.error("Failed to fetch services:", error);
        // Optionally, set an error state here
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  if (loading) {
    return (
      <section id="services" className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle title="Our Services" subtitle="What We Do" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg animate-pulse">
                <div className="h-12 w-12 bg-slate-200 rounded-full mx-auto mb-6"></div>
                <div className="h-6 w-3/4 bg-slate-200 rounded mx-auto mb-3"></div>
                <div className="h-4 w-full bg-slate-200 rounded mb-2"></div>
                <div className="h-4 w-5/6 bg-slate-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  if (!services.length && !loading) {
     return (
      <section id="services" className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <SectionTitle title="Our Services" subtitle="What We Do" />
           <p>No services available at the moment. Please check back later.</p>
        </div>
      </section>
     );
  }


  return (
    <section id="services" className="py-16 md:py-24 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Our Services" subtitle="What We Do" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
