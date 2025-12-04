import React from 'react';
import { Calendar, CheckCircle2, Users, Trophy } from 'lucide-react';
import { Stat } from '../types';

const stats: Stat[] = [
  { id: '1', label: 'Years Established', value: '25+', icon: 'calendar' },
  { id: '2', label: 'Projects Completed', value: '850+', icon: 'check' },
  { id: '3', label: 'Expert Staff', value: '120+', icon: 'users' },
  { id: '4', label: 'Awards Won', value: '32', icon: 'trophy' }
];

const IconMap: Record<string, React.ReactNode> = {
  calendar: <Calendar size={40} />,
  check: <CheckCircle2 size={40} />,
  users: <Users size={40} />,
  trophy: <Trophy size={40} />
};

export const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center">
              <div className="mb-4 text-amber-500 opacity-80">
                {IconMap[stat.icon]}
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-slate-400 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};