
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      {subtitle && <p className="text-brand-accent font-semibold text-sm uppercase tracking-wider mb-2">{subtitle}</p>}
      <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-blue">{title}</h2>
    </div>
  );
};

export default SectionTitle;
