
import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { getProjects } from '../services/dataService';
import ProjectCard from './ProjectCard';
import SectionTitle from './common/SectionTitle';

const PortfolioSection: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="portfolio" className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Recent Work" subtitle="Portfolio" />
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
                <div className="h-64 bg-slate-200"></div>
                <div className="p-6">
                  <div className="h-4 w-1/4 bg-slate-200 rounded mb-2"></div>
                  <div className="h-6 w-3/4 bg-slate-200 rounded mb-3"></div>
                  <div className="h-4 w-full bg-slate-200 rounded mb-1"></div>
                  <div className="h-4 w-5/6 bg-slate-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!projects.length && !loading) {
     return (
      <section id="portfolio" className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <SectionTitle title="Our Recent Work" subtitle="Portfolio" />
           <p>No projects to display at the moment. Please check back later.</p>
        </div>
      </section>
     );
  }

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Our Recent Work" subtitle="Portfolio" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
