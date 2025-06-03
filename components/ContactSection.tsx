
import React, { useState } from 'react';
import SectionTitle from './common/SectionTitle';
import Button from './common/Button';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    // Simulate API call for form submission
    // In a real app, you'd send this data to your backend (e.g., Supabase function)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); 
      console.log('Form data submitted:', formData);
      setSubmitMessage('Thank you! Your message has been sent successfully.');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Get In Touch" subtitle="Contact Us" />
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-dark-grey mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-brand-accent focus:border-brand-accent transition-colors"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-dark-grey mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-brand-accent focus:border-brand-accent transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-dark-grey mb-1">Message</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-brand-accent focus:border-brand-accent transition-colors"
                placeholder="How can we help you?"
              />
            </div>
            <div>
              <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
            {submitMessage && (
              <p className={`mt-4 text-center text-sm ${submitMessage.includes('error') ? 'text-red-600' : 'text-green-600'}`}>
                {submitMessage}
              </p>
            )}
          </form>
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-brand-dark-blue mb-4">Or Reach Us Directly</h3>
            <p className="text-brand-dark-grey mb-2">Email: <a href="mailto:info@digiyuddh.com" className="text-brand-accent hover:underline">info@digiyuddh.com</a></p>
            <p className="text-brand-dark-grey">Phone: <a href="tel:+1234567890" className="text-brand-accent hover:underline">(123) 456-7890</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
