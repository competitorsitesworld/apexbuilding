import React from 'react';
import { SectionHeader } from './SectionHeader';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader title="Start Your Project" subtitle="Ready to build? Contact us today for a free consultation and detailed quote." />

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">Phone</h3>
                <p className="text-slate-600">+1 (555) 123-4567</p>
                <p className="text-slate-500 text-sm">Mon-Fri, 9am - 6pm</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">Email</h3>
                <p className="text-slate-600">hello@apexbuild.com</p>
                <p className="text-slate-500 text-sm">Online support 24/7</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">Office</h3>
                <p className="text-slate-600">123 Construction Blvd,<br />Suite 500, Cityville, ST 90210</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3 bg-slate-50 p-8 rounded-2xl border border-slate-100">
             <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none" placeholder="(555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Service Interested</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white">
                    <option>Residential Construction</option>
                    <option>Commercial Renovation</option>
                    <option>Design & Build</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="col-span-1 md:col-span-2 space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Project Details</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none" placeholder="Tell us about your project..."></textarea>
                </div>
                <div className="col-span-1 md:col-span-2">
                  <button type="button" className="w-full py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-lg">
                    Request Free Quote
                  </button>
                </div>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};