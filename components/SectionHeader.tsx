import React from 'react';

interface Props {
  title: string;
  subtitle: string;
  light?: boolean;
}

export const SectionHeader: React.FC<Props> = ({ title, subtitle, light = false }) => {
  return (
    <div className="mb-12 text-center max-w-3xl mx-auto px-4">
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      <div className={`w-20 h-1 mx-auto mb-6 ${light ? 'bg-amber-500' : 'bg-amber-600'}`}></div>
      <p className={`text-lg ${light ? 'text-slate-300' : 'text-slate-600'}`}>
        {subtitle}
      </p>
    </div>
  );
};