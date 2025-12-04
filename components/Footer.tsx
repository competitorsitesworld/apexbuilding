import React from 'react';
import { Hammer, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 text-white font-bold text-2xl mb-4">
              <Hammer className="text-amber-500" />
              <span>ApexBuild</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Building excellence since 1998. We are committed to delivering high-quality construction solutions with integrity and precision.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-amber-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-amber-500 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>General Contracting</li>
              <li>Residential Construction</li>
              <li>Commercial Renovation</li>
              <li>Project Management</li>
              <li>Safety Inspections</li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-4">Newsletter</h4>
             <p className="text-sm mb-4">Subscribe for industry updates and company news.</p>
             <div className="flex">
               <input type="email" placeholder="Email address" className="bg-slate-900 border border-slate-800 rounded-l px-3 py-2 text-sm w-full focus:outline-none focus:border-amber-500" />
               <button className="bg-amber-500 text-slate-900 font-bold px-4 py-2 rounded-r hover:bg-amber-600 transition-colors">
                 Go
               </button>
             </div>
          </div>

        </div>
        <div className="border-t border-slate-900 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} ApexBuild Construction Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};