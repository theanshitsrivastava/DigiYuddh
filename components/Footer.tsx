
import React from 'react';
import Logo from './common/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/digiyuddh', icon: LinkedInIcon },
    { name: 'Instagram', href: 'https://www.instagram.com/digiyuddh1', icon: InstagramIcon },
    { name: 'Facebook', href: 'https://www.facebook.com/share/15jFYg4Bbc/', icon: FacebookIcon },
    { name: 'Twitter', href: 'https://x.com/DigiYuddh', icon: TwitterIcon },
    { name: 'Youtube', href: 'https://www.youtube.com/@digiyuddh', icon: YouTubeIcon },
    { name: 'WhatsApp', href: 'https://wa.me/9792415039', icon: WhatsAppIcon },
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
            <h3 className="text-lg font-semibold text-white mb-10">Quick Links</h3>
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
            <p className="mb-1">Email: <a href="mailto:digiyuddh.in" className="hover:text-brand-accent transition-colors">digiyuddh.in</a></p>
            <p className="mb-4">Phone: <a href="tel:+91 9140380954" className="hover:text-brand-accent transition-colors"> +91 9140380954</a></p>
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
const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 448 512"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340C24.16 108 0 83.8 0 53.64 0 23.48 24.16 0 53.84 0c29.68 0 53.84 23.48 53.84 53.64 0 30.16-24.16 54.36-53.84 54.36zM447.9 448h-92.4V302.4c0-34.7-.7-79.2-48.24-79.2-48.3 0-55.7 37.7-55.7 76.6V448h-92.5V148.9h88.8v40.8h1.3c12.4-23.4 42.5-48.2 87.5-48.2 93.6 0 110.8 61.6 110.8 141.6V448z"/>
  </svg>
);
const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
);
const YouTubeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 576 512"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M549.7 124.1c-6.3-23.7-24.9-42.3-48.6-48.6C456.7 64 288 64 288 64s-168.7 0-213.1 11.5c-23.7 6.3-42.3 24.9-48.6 48.6C16.8 168.5 16 224.3 16 256s.8 87.5 10.3 131.9c6.3 23.7 24.9 42.3 48.6 48.6C119.3 448 288 448 288 448s168.7 0 213.1-11.5c23.7-6.3 42.3-24.9 48.6-48.6C559.2 343.5 560 287.7 560 256s-.8-87.5-10.3-131.9zM232 336V176l142 80-142 80z"/>
  </svg>
);
const WhatsAppIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
    {...props}
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);
const TwitterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
 <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M22.46 6c-.77.35-1.6.58-2.46.67.9-.53 1.59-1.37 1.92-2.38-.84.5-1.78.86-2.79 1.07C18.28 4.41 17.03 4 15.64 4c-2.38 0-4.31 1.93-4.31 4.31 0 .34.04.67.11.98C7.9 9.09 4.87 7.22 2.93 4.52c-.35.6-.55 1.3-.55 2.05 0 1.5.76 2.81 1.92 3.58-.7-.02-1.36-.21-1.93-.53v.05c0 2.09 1.49 3.84 3.46 4.23-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.55 1.71 2.14 2.95 4.02 2.99-1.48 1.16-3.35 1.85-5.38 1.85-.35 0-.69-.02-1.03-.06C3.44 20.29 5.56 21 7.89 21c7.07 0 10.94-5.86 10.94-10.94 0-.17 0-.33-.01-.5.75-.54 1.4-1.22 1.92-1.99z"/></svg>
);
const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
 <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.205.054 2.013.27 2.733.548.738.285 1.307.633 1.88 1.207.573.573.922 1.142 1.207 1.88.278.72.494 1.528.548 2.733.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.205-.27 2.013-.548 2.733-.285.738-.633 1.307-1.207 1.88-.573.573-1.142.922-1.88 1.207-.72.278-1.528.494-2.733.548-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.205-.054-2.013-.27-2.733-.548-.738-.285-1.307-.633-1.88-1.207-.573-.573-.922-1.142-1.207-1.88-.278-.72-.494-1.528-.548-2.733-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.205.27-2.013.548-2.733.285-.738.633-1.307 1.207-1.88.573-.573 1.142-.922 1.88-1.207.72-.278 1.528-.494 2.733-.548C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.15 0-3.49.011-4.71.068-.98.044-1.63.213-2.18.412-.57.208-1 .477-1.44.918-.44.44-.71.87-.918 1.44-.199.55-.368 1.2-.412 2.18C2.27 9.51 2.26 9.85 2.26 12s.011 3.49.068 4.71c.044.98.213 1.63.412 2.18.208.57.477 1 .918 1.44.44.44.87.71 1.44.918.55.199 1.2.368 2.18.412 1.22.057 1.56.068 4.71.068s3.49-.011 4.71-.068c.98-.044 1.63-.213 2.18-.412.57-.208 1-.477 1.44-.918.44-.44.71-.87.918-1.44.199-.55.368-1.2.412-2.18.057-1.22.068-1.56.068-4.71s-.011-3.49-.068-4.71c-.044-.98-.213-1.63-.412-2.18-.208-.57-.477-1-.918-1.44-.44-.44-.71-.87-.918-1.44-.55-.199-1.2-.368-2.18-.412C15.49 3.976 15.15 3.965 12 3.965zm0 3.072c-2.76 0-4.998 2.238-4.998 4.998s2.238 4.998 4.998 4.998 4.998-2.238 4.998-4.998S14.76 7.037 12 7.037zm0 8.197c-1.768 0-3.2-1.432-3.2-3.2s1.432-3.2 3.2-3.2 3.2 1.432 3.2 3.2-1.432 3.2-3.2 3.2zm4.965-8.62c-.777 0-1.405.628-1.405 1.405s.628 1.405 1.405 1.405 1.405-.628 1.405-1.405-.628-1.405-1.405-1.405z"/></svg>
);

export default Footer;
