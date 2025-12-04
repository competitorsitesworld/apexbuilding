import React from 'react';
import { SectionHeader } from './SectionHeader';
import { ClipboardList, PenTool, HardHat, Key } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList size={28} />,
    title: "Consultation",
    desc: "We meet to discuss your vision, budget, and requirements in detail."
  },
  {
    icon: <PenTool size={28} />,
    title: "Planning & Design",
    desc: "Our architects create blueprints and we secure necessary permits."
  },
  {
    icon: <HardHat size={28} />,
    title: "Construction",
    desc: "Our expert team builds your project with regular updates and safety checks."
  },
  {
    icon: <Key size={28} />,
    title: "Project Handover",
    desc: "Final walkthrough and delivery of your completed dream project."
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader title="How We Work" subtitle="A transparent, step-by-step process ensuring peace of mind from start to finish." />
        
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center bg-white p-6 rounded-lg">
                <div className="w-20 h-20 rounded-full bg-slate-900 text-amber-500 flex items-center justify-center mb-6 shadow-xl border-4 border-white">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">0{index + 1}. {step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};