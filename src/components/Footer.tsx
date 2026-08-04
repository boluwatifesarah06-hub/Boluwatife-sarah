import React from 'react';
import { Language } from '../types';
import { contentTranslations, siteConfig, practiceAreasData } from '../data/translations';
import { MapPin, Phone, Mail, Linkedin, Facebook, MessageSquare, ArrowUp } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenLegalModal: (title: string, type: 'privacy' | 'cookie' | 'notices') => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenLegalModal }) => {
  const t = contentTranslations[lang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F0A07] text-[#EAE6DF] border-t border-[#C5A059]/25 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#C5A059]/15">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-gradient-to-br from-[#C5A059] to-[#9A7B38] p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#18110D] rounded-sm flex items-center justify-center">
                  <span className="font-serif text-[#DFBF7A] text-lg font-bold">CL</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-tight text-white">
                  CREDENCE LEGAL
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
                  Attorneys-at-Law
                </span>
              </div>
            </div>

            <p className="text-xs text-[#EAE6DF]/70 font-light leading-relaxed max-w-sm">
              {t.tagline}
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-sm bg-[#281D17] border border-[#C5A059]/30 flex items-center justify-center text-[#DFBF7A] hover:bg-[#C5A059] hover:text-[#18110D] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-sm bg-[#281D17] border border-[#C5A059]/30 flex items-center justify-center text-[#DFBF7A] hover:bg-[#C5A059] hover:text-[#18110D] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-sm bg-[#281D17] border border-[#C5A059]/30 flex items-center justify-center text-[#DFBF7A] hover:bg-[#C5A059] hover:text-[#18110D] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider border-l-2 border-[#C5A059] pl-2">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#EAE6DF]/70">
              <li>
                <a href="#home" className="hover:text-[#DFBF7A] transition-colors">
                  {contentTranslations[lang].nav.home}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#DFBF7A] transition-colors">
                  {contentTranslations[lang].nav.about}
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="hover:text-[#DFBF7A] transition-colors">
                  {contentTranslations[lang].nav.practiceAreas}
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-[#DFBF7A] transition-colors">
                  {contentTranslations[lang].nav.industries}
                </a>
              </li>
              <li>
                <a href="#global-outlook" className="hover:text-[#DFBF7A] transition-colors">
                  {contentTranslations[lang].nav.globalOutlook}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#DFBF7A] transition-colors">
                  {contentTranslations[lang].nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Practice Areas */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider border-l-2 border-[#C5A059] pl-2">
              {t.practiceAreasTitle}
            </h4>
            <ul className="space-y-2 text-xs text-[#EAE6DF]/70">
              {practiceAreasData.slice(0, 6).map((item) => (
                <li key={item.id}>
                  <a href="#practice-areas" className="hover:text-[#DFBF7A] transition-colors line-clamp-1">
                    {lang === 'fr' ? item.titleFr : item.titleEn}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider border-l-2 border-[#C5A059] pl-2">
              {t.contactHeader}
            </h4>
            <div className="space-y-3 text-xs text-[#EAE6DF]/80 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>
                  {siteConfig.location}
                  <br />
                  <span className="text-[#C5A059] font-medium">{siteConfig.poBox}</span>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#DFBF7A] transition-colors">
                  {siteConfig.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  {siteConfig.phones.map((p, idx) => (
                    <a key={idx} href={`tel:${p.replace(/\s+/g, '')}`} className="hover:text-[#DFBF7A] transition-colors">
                      {p}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EAE6DF]/50">
          <p>{t.copyright}</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegalModal(t.privacyPolicy, 'privacy')}
              className="hover:text-[#DFBF7A] transition-colors cursor-pointer"
            >
              {t.privacyPolicy}
            </button>
            <button
              onClick={() => onOpenLegalModal(t.cookiePolicy, 'cookie')}
              className="hover:text-[#DFBF7A] transition-colors cursor-pointer"
            >
              {t.cookiePolicy}
            </button>
            <button
              onClick={() => onOpenLegalModal(t.legalNotices, 'notices')}
              className="hover:text-[#DFBF7A] transition-colors cursor-pointer"
            >
              {t.legalNotices}
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-sm bg-[#281D17] text-[#DFBF7A] hover:bg-[#C5A059] hover:text-[#18110D] transition-colors border border-[#C5A059]/30"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
