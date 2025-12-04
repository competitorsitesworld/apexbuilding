import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/193/1920/1080" 
          alt="Construction Site" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Building Dreams,<br /> 
          <span className="text-amber-500">Crafting Reality</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto font-light">
          ApexBuild delivers excellence in residential and commercial construction. 
          From concept to concrete, we are your trusted partner.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#projects" 
            className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            View Our Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            Get a Quote <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};