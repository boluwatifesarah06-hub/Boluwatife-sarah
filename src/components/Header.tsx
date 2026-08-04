import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { contentTranslations, siteConfig } from '../data/translations';
import { Globe, Menu, X, ArrowRight, Phone } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onLanguageChange,
  onOpenConsultation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = contentTranslations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.home },
    { href: '#about', label: t.about },
    { href: '#practice-areas', label: t.services },
    { href: '#industries', label: t.industries },
    { href: '#contact', label: t.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#18110D]/95 backdrop-blur-md py-3 shadow-xl border-b border-[#C5A059]/20'
          : 'bg-gradient-to-b from-[#0F0A07]/90 via-[#18110D]/75 to-transparent py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Credence Legal Home"
          >
            <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#C5A059] to-[#9A7B38] p-[1px] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#18110D] rounded-sm flex items-center justify-center">
                <span className="font-serif text-[#DFBF7A] text-xl font-bold tracking-tighter">
                  CL
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-[#DFBF7A] transition-colors duration-300">
                CREDENCE LEGAL
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium">
                Attorneys-at-Law
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-[0.15em] font-medium text-[#EAE6DF]/80 hover:text-[#DFBF7A] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Controls: Language & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#281D17]/80 rounded-full p-1 border border-[#C5A059]/30 text-xs">
              <Globe className="w-3.5 h-3.5 text-[#C5A059] ml-2 mr-1" />
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-0.5 rounded-full font-medium transition-all duration-200 ${
                  lang === 'en'
                    ? 'bg-[#C5A059] text-[#18110D] font-bold shadow-sm'
                    : 'text-[#EAE6DF]/70 hover:text-white'
                }`}
              >
                EN
              </button>
              <span className="text-[#C5A059]/40 text-xs">|</span>
              <button
                onClick={() => onLanguageChange('fr')}
                className={`px-2 py-0.5 rounded-full font-medium transition-all duration-200 ${
                  lang === 'fr'
                    ? 'bg-[#C5A059] text-[#18110D] font-bold shadow-sm'
                    : 'text-[#EAE6DF]/70 hover:text-white'
                }`}
              >
                FR
              </button>
            </div>

            {/* Primary CTA Button */}
            <button
              onClick={onOpenConsultation}
              className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-sm bg-gradient-to-r from-[#C5A059] to-[#9A7B38] text-[#18110D] font-semibold text-xs uppercase tracking-wider shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <span className="relative z-10">{t.speakToUs}</span>
              <ArrowRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Mobile Language Pill */}
            <button
              onClick={() => onLanguageChange(lang === 'en' ? 'fr' : 'en')}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#281D17] border border-[#C5A059]/40 text-[#DFBF7A] text-xs font-semibold"
            >
              <Globe className="w-3 h-3 text-[#C5A059]" />
              {lang.toUpperCase()}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#EAE6DF] hover:text-[#C5A059] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#DFBF7A]" />
              ) : (
                <Menu className="w-6 h-6 text-[#EAE6DF]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#18110D] border-b border-[#C5A059]/30 px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-300 shadow-2xl">
          <nav className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-wider text-[#EAE6DF] hover:text-[#DFBF7A] py-2 border-b border-[#281D17] font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-gradient-to-r from-[#C5A059] to-[#9A7B38] text-[#18110D] font-semibold text-xs uppercase tracking-wider shadow-md"
            >
              <span>{t.speakToUs}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-between text-xs text-[#6E655F] pt-2">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" /> {siteConfig.phones[0]}
              </span>
              <span>Douala, Cameroon</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
