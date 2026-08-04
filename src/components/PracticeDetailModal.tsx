import React from 'react';
import { Language, PracticeArea } from '../types';
import { X, CheckCircle2, ArrowRight, Shield, Landmark } from 'lucide-react';

interface PracticeDetailModalProps {
  practiceArea: PracticeArea | null;
  onClose: () => void;
  lang: Language;
  onOpenConsultation: () => void;
}

export const PracticeDetailModal: React.FC<PracticeDetailModalProps> = ({
  practiceArea,
  onClose,
  lang,
  onOpenConsultation,
}) => {
  if (!practiceArea) return null;

  const title = lang === 'fr' ? practiceArea.titleFr : practiceArea.titleEn;
  const desc = lang === 'fr' ? practiceArea.descFr : practiceArea.descEn;
  const details = lang === 'fr' ? practiceArea.fullDetailsFr : practiceArea.fullDetailsEn;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F0A07]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#18110D] border border-[#C5A059]/40 rounded-sm w-full max-w-3xl text-white shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 bg-[#281D17] border-b border-[#C5A059]/30 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-[#0F0A07] border border-[#C5A059]/40 flex items-center justify-center text-[#DFBF7A]">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#C5A059]">
                Credence Legal Practice Overview
              </span>
              <h3 className="font-serif text-2xl font-bold text-white leading-tight">
                {title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-sm bg-[#18110D] text-[#EAE6DF] hover:text-[#DFBF7A] border border-[#C5A059]/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          <div className="p-4 rounded bg-[#281D17]/60 border-l-4 border-[#C5A059]">
            <p className="text-sm text-[#EAE6DF]/90 font-light leading-relaxed">
              {desc}
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold text-[#DFBF7A] mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#C5A059]" />
              <span>
                {lang === 'fr'
                  ? 'Étendue des Services Juridiques & Représentation'
                  : 'Scope of Legal Services & Mandates'}
              </span>
            </h4>

            <div className="space-y-3">
              {details.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-sm bg-[#281D17]/40 border border-[#C5A059]/15 flex items-start gap-3 hover:border-[#C5A059]/40 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#EAE6DF] font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded bg-[#281D17] border border-[#C5A059]/20 text-xs text-[#EAE6DF]/70 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span>
              {lang === 'fr'
                ? 'Besoin d\'un accompagnement spécifique sur ce domaine au Cameroun ou dans la sous-région ?'
                : 'Need dedicated counsel for your transactions or legal matters in Cameroon?'}
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="shrink-0 flex items-center gap-2 px-5 py-2 rounded-sm bg-[#C5A059] text-[#18110D] font-bold text-xs uppercase tracking-wider hover:bg-[#DFBF7A] transition-colors"
            >
              <span>{lang === 'fr' ? 'Consulter' : 'Consult Us'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#281D17] border-t border-[#C5A059]/20 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-sm bg-[#18110D] text-[#EAE6DF] text-xs font-semibold uppercase tracking-wider border border-[#C5A059]/30"
          >
            {lang === 'fr' ? 'Fermer' : 'Close Overview'}
          </button>
        </div>

      </div>
    </div>
  );
};
