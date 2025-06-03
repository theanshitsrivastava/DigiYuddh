
import React from 'react';

export interface NavLink {
  href: string;
  label: string;
}

export interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  imageUrl: string;
  title: string;
  category: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
  avatarUrl?: string;
}
