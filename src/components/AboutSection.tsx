import React from 'react';
import { Language } from '../types';
import { contentTranslations } from '../data/translations';
import { CheckCircle2, ArrowRight, Shield, Award, Landmark } from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  lang,
  onOpenConsultation,
}) => {
  const t = contentTranslations[lang].about;

  return (
    <section id="about" className="py-24 bg-[#FBF9F5] text-[#1E1915] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: High-end Corporate Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl border border-[#281D17]/10 group">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=85"
                alt="Credence Legal corporate law advisory boardroom"
                className="w-full h-[480px] lg:h-[560px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18110D]/80 via-transparent to-transparent opacity-80" />
              
              {/* Badge overlay on image */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#18110D]/95 backdrop-blur-md border-l-4 border-[#C5A059] text-white rounded-r-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[#C5A059]/20 text-[#DFBF7A]">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">
                      Akwa-Douala, Cameroon
                    </p>
                    <p className="font-serif text-sm font-semibold text-[#EAE6DF]">
                      Bijural & Bilingual Commercial Counsel
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle decorative background frame */}
            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-[#C5A059]/30 rounded-sm -z-0 hidden sm:block" />
          </div>

          {/* Right Column: Copy & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F3EFE6] border border-[#C5A059]/30 rounded-sm">
              <Shield className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#9A7B38] uppercase">
                {t.eyebrow}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18110D] tracking-tight leading-[1.2]">
              {t.heading}
            </h2>

            <div className="space-y-4 text-[#4A423C] leading-relaxed text-base sm:text-lg font-light">
              <p>{t.paragraph1}</p>
              <p>{t.paragraph2}</p>
            </div>

            {/* Bullet Highlights */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {t.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-[#18110D]">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <div className="pt-6">
              <button
                onClick={onOpenConsultation}
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-sm bg-[#18110D] hover:bg-[#281D17] text-[#DFBF7A] font-semibold text-xs uppercase tracking-widest border border-[#C5A059]/40 shadow-lg transition-all duration-300 cursor-pointer"
              >
                <span>{t.cta}</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
