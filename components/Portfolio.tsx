import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { Project } from '../types';

const projects: Project[] = [
  { id: '1', title: 'Skyline Lofts', category: 'Residential', image: 'https://picsum.photos/id/122/800/600' },
  { id: '2', title: 'TechHub Office', category: 'Commercial', image: 'https://picsum.photos/id/180/800/600' },
  { id: '3', title: 'Grand Hotel Reno', category: 'Renovation', image: 'https://picsum.photos/id/201/800/600' },
  { id: '4', title: 'Riverfront Villa', category: 'Residential', image: 'https://picsum.photos/id/235/800/600' },
  { id: '5', title: 'Central Station', category: 'Industrial', image: 'https://picsum.photos/id/133/800/600' },
  { id: '6', title: 'Modern Clinic', category: 'Commercial', image: 'https://picsum.photos/id/400/800/600' },
];

const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Renovation'];

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="Explore our portfolio of award-winning construction projects across various sectors." 
        />
        
        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === cat 
                  ? 'bg-amber-500 text-white shadow-md' 
                  : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer bg-white">
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-amber-500 font-bold uppercase text-sm tracking-wider mb-1">{project.category}</span>
                <h3 className="text-white text-2xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};