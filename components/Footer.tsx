
import React from 'react';
import Logo from './common/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: FacebookIcon },
    { name: 'Twitter', href: '#', icon: TwitterIcon },
    { name: 'LinkedIn', href: '#', icon: LinkedInIcon },
    { name: 'Instagram', href: '#', icon: InstagramIcon },
  ];

  return (
    <footer className="bg-brand-dark-blue text-sky-200 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Logo className="h-12"/>
            <p className="mt-4 text-sm leading-relaxed">
              Empowering businesses with cutting-edge digital marketing solutions. Let's build your success story together.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-brand-accent transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-brand-accent transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-brand-accent transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-brand-accent transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-brand-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <p className="mb-1">123 Digital Avenue, Web City, ST 54321</p>
            <p className="mb-1">Email: <a href="mailto:info@digiyuddh.com" className="hover:text-brand-accent transition-colors">info@digiyuddh.com</a></p>
            <p className="mb-4">Phone: <a href="tel:+1234567890" className="hover:text-brand-accent transition-colors">(123) 456-7890</a></p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sky-200 hover:text-brand-accent transition-colors">
                  <span className="sr-only">{link.name}</span>
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-sky-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Digi Yuddh. All rights reserved. Crafted with passion.</p>
        </div>
      </div>
    </footer>
  );
};

// Placeholder Social Icons (replace with actual SVGs if needed or a library)
const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
);
const TwitterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
 <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M22.46 6c-.77.35-1.6.58-2.46.67.9-.53 1.59-1.37 1.92-2.38-.84.5-1.78.86-2.79 1.07C18.28 4.41 17.03 4 15.64 4c-2.38 0-4.31 1.93-4.31 4.31 0 .34.04.67.11.98C7.9 9.09 4.87 7.22 2.93 4.52c-.35.6-.55 1.3-.55 2.05 0 1.5.76 2.81 1.92 3.58-.7-.02-1.36-.21-1.93-.53v.05c0 2.09 1.49 3.84 3.46 4.23-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.55 1.71 2.14 2.95 4.02 2.99-1.48 1.16-3.35 1.85-5.38 1.85-.35 0-.69-.02-1.03-.06C3.44 20.29 5.56 21 7.89 21c7.07 0 10.94-5.86 10.94-10.94 0-.17 0-.33-.01-.5.75-.54 1.4-1.22 1.92-1.99z"/></svg>
);
const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
 <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-12 5v10h3V11H7zm3-2a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm3 4h3v1.53c.47-.89 1.65-1.53 2.79-1.53 3.07 0 3.47 2.06 3.47 4.76V18h-3v-4.73c0-1.12-.01-2.56-1.5-2.56-1.51 0-1.73 1.16-1.73 2.47V18h-3V10z"/></svg>
);
const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
 <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.205.054 2.013.27 2.733.548.738.285 1.307.633 1.88 1.207.573.573.922 1.142 1.207 1.88.278.72.494 1.528.548 2.733.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.205-.27 2.013-.548 2.733-.285.738-.633 1.307-1.207 1.88-.573.573-1.142.922-1.88 1.207-.72.278-1.528.494-2.733.548-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.205-.054-2.013-.27-2.733-.548-.738-.285-1.307-.633-1.88-1.207-.573-.573-.922-1.142-1.207-1.88-.278-.72-.494-1.528-.548-2.733-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.205.27-2.013.548-2.733.285-.738.633-1.307 1.207-1.88.573-.573 1.142-.922 1.88-1.207.72-.278 1.528-.494 2.733-.548C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.15 0-3.49.011-4.71.068-.98.044-1.63.213-2.18.412-.57.208-1 .477-1.44.918-.44.44-.71.87-.918 1.44-.199.55-.368 1.2-.412 2.18C2.27 9.51 2.26 9.85 2.26 12s.011 3.49.068 4.71c.044.98.213 1.63.412 2.18.208.57.477 1 .918 1.44.44.44.87.71 1.44.918.55.199 1.2.368 2.18.412 1.22.057 1.56.068 4.71.068s3.49-.011 4.71-.068c.98-.044 1.63-.213 2.18-.412.57-.208 1-.477 1.44-.918.44-.44.71-.87.918-1.44.199-.55.368-1.2.412-2.18.057-1.22.068-1.56.068-4.71s-.011-3.49-.068-4.71c-.044-.98-.213-1.63-.412-2.18-.208-.57-.477-1-.918-1.44-.44-.44-.71-.87-.918-1.44-.55-.199-1.2-.368-2.18-.412C15.49 3.976 15.15 3.965 12 3.965zm0 3.072c-2.76 0-4.998 2.238-4.998 4.998s2.238 4.998 4.998 4.998 4.998-2.238 4.998-4.998S14.76 7.037 12 7.037zm0 8.197c-1.768 0-3.2-1.432-3.2-3.2s1.432-3.2 3.2-3.2 3.2 1.432 3.2 3.2-1.432 3.2-3.2 3.2zm4.965-8.62c-.777 0-1.405.628-1.405 1.405s.628 1.405 1.405 1.405 1.405-.628 1.405-1.405-.628-1.405-1.405-1.405z"/></svg>
);

export default Footer;
