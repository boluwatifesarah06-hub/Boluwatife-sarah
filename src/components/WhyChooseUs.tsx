import React from 'react';
import { Language } from '../types';
import { whyChooseUsData, contentTranslations } from '../data/translations';
import { Briefcase, Globe2, Network, Layers, Building, Users } from 'lucide-react';

interface WhyChooseUsProps {
  lang: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ lang }) => {
  const t = contentTranslations[lang].whyChoose;
  const icons = [Briefcase, Globe2, Network, Layers, Building, Users];

  return (
    <section id="why-choose" className="py-24 bg-[#F3EFE6] text-[#1E1915] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FBF9F5] border border-[#C5A059]/30 rounded-sm">
            <span className="text-xs font-bold tracking-[0.2em] text-[#9A7B38] uppercase">
              {t.eyebrow}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18110D] tracking-tight">
            {t.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#6E655F] font-light leading-relaxed">
            {t.subheading}
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsData.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={idx}
                className="group p-8 rounded-sm bg-[#FBF9F5] border border-[#C5A059]/20 hover:border-[#C5A059] hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Number watermark */}
                <span className="absolute top-4 right-6 font-serif text-5xl font-bold text-[#C5A059]/15 group-hover:text-[#C5A059]/30 transition-colors pointer-events-none">
                  {item.number}
                </span>

                <div>
                  {/* Minimal gold icon */}
                  <div className="w-12 h-12 rounded-sm bg-[#18110D] flex items-center justify-center text-[#DFBF7A] mb-6 group-hover:bg-[#C5A059] group-hover:text-[#18110D] transition-colors duration-300 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#18110D] mb-3 group-hover:text-[#9A7B38] transition-colors">
                    {lang === 'fr' ? item.titleFr : item.titleEn}
                  </h3>

                  <p className="text-sm text-[#524B45] font-light leading-relaxed">
                    {lang === 'fr' ? item.descFr : item.descEn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#C5A059]/10 flex items-center gap-2 text-xs font-semibold text-[#9A7B38] tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Credence Standard</span>
                  <span className="w-4 h-[1px] bg-[#C5A059]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
