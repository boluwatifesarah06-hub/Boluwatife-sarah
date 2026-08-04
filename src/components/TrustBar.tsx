import React from 'react';
import { Language } from '../types';
import { trustBarItems } from '../data/translations';
import { Scale, Globe, Building2, Compass } from 'lucide-react';

interface TrustBarProps {
  lang: Language;
}

export const TrustBar: React.FC<TrustBarProps> = ({ lang }) => {
  const icons = [Scale, Globe, Building2, Compass];

  return (
    <section id="trust-bar" className="relative z-20 bg-[#18110D] border-y border-[#C5A059]/30 py-8 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#C5A059]/15">
          {trustBarItems.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={idx}
                className={`flex items-start gap-4 ${
                  idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6 lg:pl-8' : ''
                } group`}
              >
                <div className="p-2.5 rounded-sm bg-[#281D17] border border-[#C5A059]/30 text-[#DFBF7A] shrink-0 group-hover:border-[#C5A059] group-hover:bg-[#C5A059]/10 transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-serif text-sm font-semibold text-white group-hover:text-[#DFBF7A] transition-colors">
                    {lang === 'fr' ? item.titleFr : item.titleEn}
                  </h3>
                  <p className="text-xs text-[#EAE6DF]/70 font-light mt-0.5">
                    {lang === 'fr' ? item.subtitleFr : item.subtitleEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
