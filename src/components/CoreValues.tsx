import React from 'react';
import { Language } from '../types';
import { coreValuesData, contentTranslations } from '../data/translations';
import { Shield, Sparkles, Lock, HeartHandshake } from 'lucide-react';

interface CoreValuesProps {
  lang: Language;
}

export const CoreValues: React.FC<CoreValuesProps> = ({ lang }) => {
  const t = contentTranslations[lang].coreValues;
  const icons = [Shield, Sparkles, Lock, HeartHandshake];

  return (
    <section id="values" className="py-24 bg-[#FBF9F5] text-[#1E1915] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F3EFE6] border border-[#C5A059]/30 rounded-sm">
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

        {/* 4 Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValuesData.map((value, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={idx}
                className="p-8 rounded-sm bg-[#F3EFE6]/60 border border-[#C5A059]/20 hover:border-[#C5A059] hover:bg-[#F3EFE6] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-bold text-[#C5A059]">
                      0{idx + 1}
                    </span>
                    <div className="p-2 rounded bg-[#18110D] text-[#DFBF7A] group-hover:bg-[#C5A059] group-hover:text-[#18110D] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#18110D] tracking-wide mb-3 group-hover:text-[#9A7B38] transition-colors">
                    {lang === 'fr' ? value.titleFr : value.titleEn}
                  </h3>

                  <p className="text-sm text-[#524B45] font-light leading-relaxed">
                    {lang === 'fr' ? value.descFr : value.descEn}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#C5A059]/20 flex items-center justify-between text-xs text-[#9A7B38]">
                  <span className="font-semibold tracking-wider uppercase text-[10px]">
                    Credence Value
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
