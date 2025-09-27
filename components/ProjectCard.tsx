
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <p className="text-sm text-brand-accent font-semibold mb-1">{project.category}</p>
        <h3 className="text-xl font-semibold text-brand-dark-blue mb-2">{project.title}</h3>
        <p className="text-brand-dark-grey text-sm leading-relaxed h-20 overflow-hidden">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
