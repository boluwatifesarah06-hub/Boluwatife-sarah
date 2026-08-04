import React, { useState } from 'react';
import { Language, PracticeArea } from '../types';
import { practiceAreasData, contentTranslations } from '../data/translations';
import {
  Briefcase,
  Landmark,
  Scale,
  Receipt,
  Zap,
  Building2,
  Radio,
  Cpu,
  ArrowRight,
  Info
} from 'lucide-react';

interface PracticeAreasProps {
  lang: Language;
  onSelectPracticeArea: (practiceArea: PracticeArea) => void;
  onOpenConsultation: () => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({
  lang,
  onSelectPracticeArea,
  onOpenConsultation,
}) => {
  const t = contentTranslations[lang].practiceAreas;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return Briefcase;
      case 'Landmark':
        return Landmark;
      case 'Scale':
        return Scale;
      case 'Receipt':
        return Receipt;
      case 'Zap':
        return Zap;
      case 'Building2':
        return Building2;
      case 'Radio':
        return Radio;
      case 'Cpu':
        return Cpu;
      default:
        return Briefcase;
    }
  };

  return (
    <section id="practice-areas" className="py-24 bg-[#18110D] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#C5A059]/20">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#281D17] border border-[#C5A059]/30 rounded-sm">
              <span className="text-xs font-bold tracking-[0.2em] text-[#DFBF7A] uppercase">
                {t.eyebrow}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              {t.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#EAE6DF]/70 font-light">
              {t.subheading}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <span className="hidden sm:inline-block text-xs text-[#C5A059] italic max-w-xs text-right">
              {t.explorePrompt}
            </span>
          </div>
        </div>

        {/* Practice Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {practiceAreasData.map((item) => {
            const IconComponent = getIcon(item.icon);
            return (
              <div
                key={item.id}
                onClick={() => onSelectPracticeArea(item)}
                className="group relative p-6 bg-[#281D17]/70 hover:bg-[#281D17] border border-[#C5A059]/20 hover:border-[#C5A059] rounded-sm transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-lg hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-sm bg-[#0F0A07] border border-[#C5A059]/30 flex items-center justify-center text-[#DFBF7A] mb-5 group-hover:bg-[#C5A059] group-hover:text-[#18110D] transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-[#DFBF7A] transition-colors">
                    {lang === 'fr' ? item.titleFr : item.titleEn}
                  </h3>

                  <p className="text-xs text-[#EAE6DF]/70 font-light leading-relaxed line-clamp-3">
                    {lang === 'fr' ? item.descFr : item.descEn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#C5A059]/15 flex items-center justify-between text-xs font-semibold text-[#DFBF7A]">
                  <span>{lang === 'fr' ? 'Explorer la pratique' : 'Explore Practice'}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Footer CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-sm bg-gradient-to-r from-[#C5A059] to-[#9A7B38] text-[#18110D] font-bold text-xs uppercase tracking-widest shadow-xl hover:brightness-110 transition-all cursor-pointer"
          >
            <span>{t.cta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
