import React, { useState } from 'react';
import { Language } from '../types';
import { industriesData, contentTranslations } from '../data/translations';
import {
  Landmark,
  Zap,
  Radio,
  Cpu,
  Building2,
  Activity,
  Shield,
  Rocket,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';

interface IndustriesSectionProps {
  lang: Language;
  onOpenConsultation: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  lang,
  onOpenConsultation,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const t = contentTranslations[lang].industries;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Landmark':
        return Landmark;
      case 'Zap':
        return Zap;
      case 'Radio':
        return Radio;
      case 'Cpu':
        return Cpu;
      case 'Building2':
        return Building2;
      case 'Activity':
        return Activity;
      case 'Shield':
        return Shield;
      case 'Rocket':
        return Rocket;
      default:
        return Landmark;
    }
  };

  const activeIndustry = industriesData[activeTab];

  return (
    <section id="industries" className="py-24 bg-[#FBF9F5] text-[#1E1915] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
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

        {/* Editorial Layout: Left List Selector + Right Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Industry Selection List */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-2">
            {industriesData.map((item, idx) => {
              const IconComp = getIcon(item.icon);
              const isSelected = activeTab === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-4 rounded-sm flex items-center justify-between transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-[#18110D] text-white shadow-xl pl-6 border-l-4 border-[#C5A059]'
                      : 'bg-[#F3EFE6]/70 hover:bg-[#F3EFE6] text-[#281D17] hover:pl-5 border-l-4 border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <IconComp
                      className={`w-5 h-5 ${
                        isSelected ? 'text-[#DFBF7A]' : 'text-[#9A7B38]'
                      }`}
                    />
                    <span
                      className={`font-serif text-base font-semibold ${
                        isSelected ? 'text-white' : 'text-[#18110D]'
                      }`}
                    >
                      {lang === 'fr' ? item.titleFr : item.titleEn}
                    </span>
                  </div>

                  <ArrowUpRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-[#C5A059] translate-x-0.5 -translate-y-0.5' : 'text-[#9A7B38]/40'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Detailed Editorial Showcase Card */}
          <div className="lg:col-span-7 bg-[#18110D] text-white rounded-sm p-8 lg:p-12 border border-[#C5A059]/30 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            
            {/* Ambient gold glow behind text */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#C5A059]">
                  Industry Focus 0{activeTab + 1}
                </span>
                <span className="px-3 py-1 bg-[#281D17] border border-[#C5A059]/40 rounded-full text-[11px] text-[#DFBF7A] font-medium">
                  Credence Legal Sector Group
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                {lang === 'fr' ? activeIndustry.titleFr : activeIndustry.titleEn}
              </h3>

              <div className="w-16 h-[2px] bg-gradient-to-r from-[#C5A059] to-transparent" />

              <p className="text-sm sm:text-base text-[#EAE6DF]/90 font-light leading-relaxed">
                {lang === 'fr' ? activeIndustry.descFr : activeIndustry.descEn}
              </p>

              {/* Sector Commitments */}
              <div className="pt-4 space-y-2 text-xs text-[#EAE6DF]/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Custom regulatory filings & OHADA compliance strategy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Partner-led deal structuring and cross-border representation</span>
                </div>
              </div>
            </div>

            {/* Bottom Action in Showcase */}
            <div className="relative z-10 pt-8 mt-8 border-t border-[#C5A059]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs text-[#EAE6DF]/60">
                Advising corporates, state enterprises & regional investors
              </span>

              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm bg-[#C5A059] text-[#18110D] font-bold text-xs uppercase tracking-wider hover:bg-[#DFBF7A] transition-colors cursor-pointer"
              >
                <span>Discuss {lang === 'fr' ? 'Ce Secteur' : 'This Sector'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
