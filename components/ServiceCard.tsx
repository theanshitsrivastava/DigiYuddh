
import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center transform hover:-translate-y-2">
      <div className="mb-6 p-4 bg-brand-light-blue rounded-full inline-block">
        {service.icon}
      </div>
      <h3 className="text-2xl font-semibold text-brand-dark-blue mb-3">{service.title}</h3>
      <p className="text-brand-dark-grey leading-relaxed">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
