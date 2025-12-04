import React, { useState, useEffect } from 'react';
import { Hammer, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-2xl font-bold">
          <Hammer className={`w-8 h-8 ${scrolled ? 'text-amber-500' : 'text-amber-500'}`} />
          <span className={scrolled ? 'text-slate-900' : 'text-white'}>ApexBuild</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-medium transition-colors hover:text-amber-500 ${scrolled ? 'text-slate-700' : 'text-slate-100'}`}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded transition-colors">
            Free Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
             <X className={scrolled ? 'text-slate-900' : 'text-white'} />
          ) : (
             <Menu className={scrolled ? 'text-slate-900' : 'text-white'} />
          )}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden border-t">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-800 font-medium hover:text-amber-500 py-2 border-b border-slate-100"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="px-5 py-3 bg-amber-500 text-slate-900 font-bold rounded text-center mt-2">
              Free Quote
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};