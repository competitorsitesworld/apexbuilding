import React from 'react';
import { SectionHeader } from './SectionHeader';
import { Hammer, Home, Building2, Ruler, Truck, ShieldCheck } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'General Contracting',
    description: 'Full-service oversight for complex construction projects, ensuring quality and timeline adherence.',
    icon: 'hammer'
  },
  {
    id: '2',
    title: 'Residential Build',
    description: 'Custom homes built from the ground up, tailored to your family’s unique needs and style.',
    icon: 'home'
  },
  {
    id: '3',
    title: 'Commercial Renovation',
    description: 'Transforming office spaces and retail locations to maximize productivity and appeal.',
    icon: 'building'
  },
  {
    id: '4',
    title: 'Design & Build',
    description: 'Integrated design and construction services to streamline communication and costs.',
    icon: 'ruler'
  },
  {
    id: '5',
    title: 'Project Management',
    description: 'Logistics, supply chain, and workforce management to keep your project on track.',
    icon: 'truck'
  },
  {
    id: '6',
    title: 'Safety Inspections',
    description: 'Rigorous safety audits and compliance checks to ensure long-lasting structural integrity.',
    icon: 'shield'
  }
];

const IconMap: Record<string, React.ReactNode> = {
  hammer: <Hammer size={32} />,
  home: <Home size={32} />,
  building: <Building2 size={32} />,
  ruler: <Ruler size={32} />,
  truck: <Truck size={32} />,
  shield: <ShieldCheck size={32} />
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Our Expertise" 
          subtitle="Comprehensive construction solutions tailored to bring your vision to life with precision and quality." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="p-8 bg-slate-50 rounded-xl border border-slate-100 hover:border-amber-500 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 text-amber-500 shadow-sm group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                {IconMap[service.icon]}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};