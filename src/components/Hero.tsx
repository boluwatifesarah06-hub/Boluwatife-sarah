import React from 'react';
import { Language } from '../types';
import { contentTranslations } from '../data/translations';
import { ArrowRight, ChevronDown, ShieldCheck, Globe2 } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenConsultation }) => {
  const t = contentTranslations[lang].hero;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0F0A07]"
    >
      {/* Background Image with Balanced Cinematic Overlay (~25-35% Opacity) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85"
          alt="Modern corporate law firm building Douala Cameroon"
          className="w-full h-full object-cover object-center brightness-[0.85] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Subtle radial & directional gradient overlay: dark behind text on left, clear architecture on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0A07]/85 via-[#18110D]/50 to-[#0F0A07]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0A07] via-transparent to-[#0F0A07]/50" />
      </div>

      {/* Subtle geometric line accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left w-full">
        <div className="max-w-4xl space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-sm bg-[#281D17]/80 border border-[#C5A059]/30 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#DFBF7A] animate-ping" />
            <span className="text-xs font-semibold tracking-[0.2em] text-[#DFBF7A] uppercase">
              {t.eyebrow}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
            {t.titleLine1}{' '}
            <span className="gold-gradient-text block mt-1 sm:mt-2 font-normal italic">
              {t.titleLine2}
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-[#EAE6DF]/90 font-light max-w-3xl leading-relaxed">
            {t.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-sm bg-gradient-to-r from-[#C5A059] via-[#DFBF7A] to-[#9A7B38] text-[#18110D] font-semibold text-sm uppercase tracking-wider shadow-xl hover:brightness-110 transition-all duration-300 cursor-pointer"
            >
              <span>{t.primaryCta}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <a
              href="#practice-areas"
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-sm bg-[#281D17]/60 hover:bg-[#281D17] text-[#EAE6DF] hover:text-[#DFBF7A] border border-[#C5A059]/40 font-medium text-sm uppercase tracking-wider backdrop-blur-sm transition-all duration-300"
            >
              <span>{t.secondaryCta}</span>
              <ChevronDown className="w-4 h-4 text-[#C5A059] group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Quick Pillar Badges */}
          <div className="pt-8 border-t border-[#C5A059]/20 flex flex-wrap items-center gap-6 text-xs text-[#EAE6DF]/70">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>OHADA & CEMAC Legal Framework</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-[#C5A059]" />
              <span>Bilingual: English & Français</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <span>Douala, Cameroon</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-10 text-[#C5A059]/70 hover:text-[#DFBF7A] transition-colors">
        <span className="text-[10px] uppercase tracking-[0.25em] font-medium">
          {t.scrollDown}
        </span>
        <a href="#trust-bar" aria-label="Scroll down">
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
