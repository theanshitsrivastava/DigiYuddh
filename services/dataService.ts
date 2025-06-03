
import React from 'react';
import { Service, Project, Testimonial } from '../types';
import { ChartBarIcon, MegaphoneIcon, CodeBracketIcon, PencilSquareIcon } from '../constants';

// TODO: Replace with actual Supabase client and API calls.
// Example Supabase client initialization (not used in mock):
// import { createClient } from '@supabase/supabase-js';
// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || '';
// const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || '';
// export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getServices = async (): Promise<Service[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Mock data
  return [
    {
      id: '1',
      icon: React.createElement(ChartBarIcon, { className: 'w-12 h-12 text-brand-accent' }),
      title: 'SEO Optimization',
      description: 'Boost your visibility and rank higher on search engines with our expert SEO strategies.',
    },
    {
      id: '2',
      icon: React.createElement(MegaphoneIcon, { className: 'w-12 h-12 text-brand-accent' }),
      title: 'Social Media Marketing',
      description: 'Engage your audience and build your brand presence across all major social media platforms.',
    },
    {
      id: '3',
      icon: React.createElement(CodeBracketIcon, { className: 'w-12 h-12 text-brand-accent' }),
      title: 'Web Development',
      description: 'Get a stunning, responsive, and high-performing website tailored to your business needs.',
    },
    {
      id: '4',
      icon: React.createElement(PencilSquareIcon, { className: 'w-12 h-12 text-brand-accent' }),
      title: 'Content Creation',
      description: 'Compelling content that captivates your audience and drives conversions, from blog posts to videos.',
    },
  ];
};

export const getProjects = async (): Promise<Project[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return [
    {
      id: '1',
      imageUrl: 'https://picsum.photos/seed/project1/600/400',
      title: 'E-commerce Platform Redesign',
      category: 'Web Development',
      description: 'Complete overhaul of a major online retailer\'s platform, improving UX and conversion rates.',
    },
    {
      id: '2',
      imageUrl: 'https://picsum.photos/seed/project2/600/400',
      title: 'Startup SEO Launch',
      category: 'SEO Optimization',
      description: 'Successfully launched a new tech startup to the first page of Google for key terms.',
    },
    {
      id: '3',
      imageUrl: 'https://picsum.photos/seed/project3/600/400',
      title: 'Viral Social Media Campaign',
      category: 'Social Media Marketing',
      description: 'Developed and executed a social media campaign that reached millions of users organically.',
    },
     {
      id: '4',
      imageUrl: 'https://picsum.photos/seed/project4/600/400',
      title: 'Brand Storytelling Videos',
      category: 'Content Creation',
      description: 'Produced a series of impactful videos that enhanced brand identity and engagement.',
    },
  ];
};

export const getTestimonials = async (): Promise<Testimonial[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return [
    {
      id: '1',
      quote: 'Digi Yuddh transformed our online presence! Their SEO strategies are top-notch and delivered amazing results.',
      author: 'Jane Doe',
      company: 'Tech Solutions Inc.',
      avatarUrl: 'https://picsum.photos/seed/avatar1/100/100'
    },
    {
      id: '2',
      quote: 'The team is incredibly creative and professional. Our new website is fantastic and user engagement has skyrocketed.',
      author: 'John Smith',
      company: 'Global Goods Co.',
      avatarUrl: 'https://picsum.photos/seed/avatar2/100/100'
    },
    {
      id: '3',
      quote: 'Their social media campaigns are pure gold. We\'ve seen a significant increase in leads and brand awareness.',
      author: 'Alice Brown',
      company: 'Local Eats Cafe',
      avatarUrl: 'https://picsum.photos/seed/avatar3/100/100'
    },
  ];
};
