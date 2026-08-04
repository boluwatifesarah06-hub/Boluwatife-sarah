import React from 'react';
import { Language } from '../types';
import { contentTranslations, siteConfig } from '../data/translations';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

interface FinalCTAProps {
  lang: Language;
  onOpenConsultation: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ lang, onOpenConsultation }) => {
  const t = contentTranslations[lang].finalCta;

  return (
    <section id="contact" className="relative py-28 bg-[#0F0A07] text-white overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85"
          alt="Credence Legal Douala corporate counsel office"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0A07] via-[#18110D]/95 to-[#0F0A07]/90" />
        <div className="absolute inset-0 bg-[#281D17]/40 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#281D17]/80 border border-[#C5A059]/40 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#DFBF7A]" />
            <span className="text-xs font-bold tracking-[0.25em] text-[#DFBF7A] uppercase">
              Credence Legal Cameroon
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15]">
            {t.headline}
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#EAE6DF]/90 font-light max-w-2xl mx-auto leading-relaxed">
            {t.subheading}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="group flex items-center gap-3 px-8 py-4 rounded-sm bg-gradient-to-r from-[#C5A059] via-[#DFBF7A] to-[#9A7B38] text-[#18110D] font-bold text-sm uppercase tracking-wider shadow-2xl hover:brightness-110 transition-all cursor-pointer"
            >
              <span>{t.primaryCta}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Quick Contact Chips */}
          <div className="pt-10 border-t border-[#C5A059]/20 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#EAE6DF]">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#281D17]/80 hover:bg-[#281D17] border border-[#C5A059]/30 hover:border-[#C5A059] transition-all"
            >
              <Mail className="w-4 h-4 text-[#C5A059]" />
              <span>{siteConfig.email}</span>
            </a>

            <a
              href={`tel:${siteConfig.phones[0].replace(/\s+/g, '')}`}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#281D17]/80 hover:bg-[#281D17] border border-[#C5A059]/30 hover:border-[#C5A059] transition-all"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span>{siteConfig.phones[0]}</span>
            </a>

            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#281D17]/80 border border-[#C5A059]/20 text-[#EAE6DF]/80">
              <MapPin className="w-4 h-4 text-[#C5A059]" />
              <span>Akwa-Douala, Cameroon</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
