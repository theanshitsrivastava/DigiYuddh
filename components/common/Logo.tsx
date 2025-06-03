
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-10" }) => {
  return (
    <div className="flex items-center space-x-2">
      <svg viewBox="0 0 100 100" className={`${className} w-auto`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" className="fill-brand-light-blue" />
        {/* Stylized D */}
        <path d="M30 25 H50 Q65 25 65 40 V60 Q65 75 50 75 H30 V25 Z M40 35 V65 H50 Q55 65 55 60 V40 Q55 35 50 35 H40 Z" className="fill-brand-dark-blue"/>
        {/* Stylized Y */}
        <path d="M48 48 L40 65 H50 L55 55 L60 65 H70 L62 48 V35 H58 V45 L52 35 H42 L48 45 V48 Z" className="fill-brand-medium-blue transform translate-x-2 translate-y-5 scale-95"/>
      </svg>
      <span className="text-2xl font-bold text-brand-dark-blue">
        DIGI <span className="text-brand-medium-blue">YUDDH</span>
      </span>
    </div>
  );
};

export default Logo;
