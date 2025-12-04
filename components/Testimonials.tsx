import React from 'react';
import { SectionHeader } from './SectionHeader';
import { Quote, Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  { id: '1', name: 'Sarah Jenkins', role: 'Homeowner', content: 'ApexBuild transformed our outdated home into a modern masterpiece. The attention to detail was incredible.', rating: 5 },
  { id: '2', name: 'Marcus Thorne', role: 'CEO, Thorne Inc', content: 'We needed a new headquarters built in record time. ApexBuild delivered ahead of schedule and under budget.', rating: 5 },
  { id: '3', name: 'Emily Rodriguez', role: 'Real Estate Developer', content: 'I have worked with many contractors, but ApexBuilds professionalism and transparency are unmatched.', rating: 5 },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-amber-50">
      <div className="container mx-auto px-6">
        <SectionHeader title="Client Stories" subtitle="Don't just take our word for it. Here is what our partners and clients have to say." />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col relative">
              <Quote className="text-amber-200 absolute top-4 right-4" size={48} />
              <div className="flex gap-1 text-amber-500 mb-4">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 mb-6 flex-grow italic">"{t.content}"</p>
              <div className="mt-auto">
                <h4 className="font-bold text-slate-900">{t.name}</h4>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};