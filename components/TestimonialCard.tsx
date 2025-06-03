
import React from 'react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col h-full transform transition-all duration-300 hover:scale-105">
      <div className="flex-grow mb-6">
        <svg className="w-10 h-10 text-brand-accent mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M9.333 8C6.667 8 4 10.667 4 13.333c0 1.92.993 3.593 2.407 4.46V24l3.073-3.073A7.336 7.336 0 0014.667 20c2.666 0 5.333-2.667 5.333-5.333S12 8 9.333 8zm13.334 0c-2.667 0-5.334 2.667-5.334 5.333 0 1.92.994 3.593 2.407 4.46V24l3.074-3.073A7.336 7.336 0 0028 20c2.667 0 5.333-2.667 5.333-5.333S25.334 8 22.667 8z" />
        </svg>
        <p className="text-brand-dark-grey italic leading-relaxed">"{testimonial.quote}"</p>
      </div>
      <div className="flex items-center mt-auto">
        {testimonial.avatarUrl && (
            <img 
                src={testimonial.avatarUrl} 
                alt={testimonial.author} 
                className="w-12 h-12 rounded-full mr-4 object-cover"
            />
        )}
        {!testimonial.avatarUrl && (
            <div className="w-12 h-12 rounded-full mr-4 bg-brand-medium-blue flex items-center justify-center text-white font-semibold">
                {testimonial.author.substring(0,1)}
            </div>
        )}
        <div>
          <p className="font-semibold text-brand-dark-blue">{testimonial.author}</p>
          <p className="text-sm text-brand-accent">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
