
import React, { useState, useEffect } from 'react';
import { Testimonial } from '../types';
import { getTestimonials } from '../services/dataService';
import TestimonialCard from './TestimonialCard';
import SectionTitle from './common/SectionTitle';

const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const data = await getTestimonials();
        setTestimonials(data);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <section id="testimonials" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="What Our Clients Say" subtitle="Testimonials" />
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-xl shadow-xl animate-pulse">
                <div className="h-10 w-10 bg-slate-200 rounded mb-4"></div>
                <div className="h-4 w-full bg-slate-200 rounded mb-2"></div>
                <div className="h-4 w-full bg-slate-200 rounded mb-2"></div>
                <div className="h-4 w-3/4 bg-slate-200 rounded mb-6"></div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-slate-200 mr-4"></div>
                  <div>
                    <div className="h-5 w-24 bg-slate-200 rounded mb-1"></div>
                    <div className="h-3 w-32 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!testimonials.length && !loading) {
     return (
      <section id="testimonials" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <SectionTitle title="What Our Clients Say" subtitle="Testimonials" />
           <p>No testimonials available at the moment.</p>
        </div>
      </section>
     );
  }

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="What Our Clients Say" subtitle="Testimonials" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
