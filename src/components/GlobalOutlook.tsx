import React from 'react';
import { Language } from '../types';
import { contentTranslations } from '../data/translations';
import { Globe2, Compass, Layers, Building, MapPin, ArrowRight } from 'lucide-react';

interface GlobalOutlookProps {
  lang: Language;
  onOpenConsultation: () => void;
}

export const GlobalOutlook: React.FC<GlobalOutlookProps> = ({
  lang,
  onOpenConsultation,
}) => {
  const t = contentTranslations[lang].globalOutlook;

  return (
    <section
      id="global-outlook"
      className="py-24 bg-gradient-to-b from-[#0F0A07] via-[#18110D] to-[#0F0A07] text-white relative overflow-hidden border-y border-[#C5A059]/20"
    >
      {/* Background glow & subtle map grid effect */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#281D17] border border-[#C5A059]/40 rounded-sm">
            <Globe2 className="w-3.5 h-3.5 text-[#DFBF7A]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#DFBF7A] uppercase">
              {t.eyebrow}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {t.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#EAE6DF]/80 font-light leading-relaxed">
            {t.subheading}
          </p>
        </div>

        {/* 3 Regional Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* CEMAC */}
          <div className="p-8 rounded-sm bg-[#281D17]/80 border border-[#C5A059]/30 hover:border-[#C5A059] transition-all duration-300 relative group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-sm bg-[#0F0A07] flex items-center justify-center text-[#DFBF7A] border border-[#C5A059]/30">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A059] bg-[#18110D] px-2.5 py-1 border border-[#C5A059]/20 rounded-full">
                Central Africa
              </span>
            </div>

            <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[#DFBF7A] transition-colors">
              {t.cemacTitle}
            </h3>

            <p className="text-xs sm:text-sm text-[#EAE6DF]/70 font-light leading-relaxed">
              {t.cemacDesc}
            </p>
          </div>

          {/* ECOWAS */}
          <div className="p-8 rounded-sm bg-[#281D17]/80 border border-[#C5A059]/30 hover:border-[#C5A059] transition-all duration-300 relative group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-sm bg-[#0F0A07] flex items-center justify-center text-[#DFBF7A] border border-[#C5A059]/30">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A059] bg-[#18110D] px-2.5 py-1 border border-[#C5A059]/20 rounded-full">
                West & Central Corridors
              </span>
            </div>

            <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[#DFBF7A] transition-colors">
              {t.ecowasTitle}
            </h3>

            <p className="text-xs sm:text-sm text-[#EAE6DF]/70 font-light leading-relaxed">
              {t.ecowasDesc}
            </p>
          </div>

          {/* International */}
          <div className="p-8 rounded-sm bg-[#281D17]/80 border border-[#C5A059]/30 hover:border-[#C5A059] transition-all duration-300 relative group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-sm bg-[#0F0A07] flex items-center justify-center text-[#DFBF7A] border border-[#C5A059]/30">
                <Globe2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A059] bg-[#18110D] px-2.5 py-1 border border-[#C5A059]/20 rounded-full">
                Global Network
              </span>
            </div>

            <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[#DFBF7A] transition-colors">
              {t.internationalTitle}
            </h3>

            <p className="text-xs sm:text-sm text-[#EAE6DF]/70 font-light leading-relaxed">
              {t.internationalDesc}
            </p>
          </div>

        </div>

        {/* Highlighted Banner Statement */}
        <div className="p-8 sm:p-10 rounded-sm bg-gradient-to-r from-[#281D17] via-[#35251C] to-[#281D17] border border-[#C5A059]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#C5A059]/20 flex items-center justify-center text-[#DFBF7A] shrink-0 border border-[#C5A059]/40">
              <Layers className="w-6 h-6" />
            </div>
            <p className="font-serif text-lg sm:text-xl font-semibold text-[#DFBF7A] leading-snug">
              "{t.badge}"
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="shrink-0 flex items-center gap-2 px-6 py-3 rounded-sm bg-[#C5A059] hover:bg-[#DFBF7A] text-[#18110D] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg"
          >
            <span>{lang === 'fr' ? 'Consulter Notre Cabinet' : 'Contact Our Office'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
