import React, { useState } from 'react';
import { Language, ConsultationFormData } from '../types';
import { contentTranslations, practiceAreasData, siteConfig } from '../data/translations';
import { X, CheckCircle, Send, ShieldCheck, Phone, Mail } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  if (!isOpen) return null;

  const t = contentTranslations[lang].modal;

  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    practiceArea: practiceAreasData[0].id,
    message: '',
    preferredLanguage: lang,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      practiceArea: practiceAreasData[0].id,
      message: '',
      preferredLanguage: lang,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F0A07]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#18110D] border border-[#C5A059]/40 rounded-sm w-full max-w-2xl text-white shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="p-6 bg-[#281D17] border-b border-[#C5A059]/30 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#C5A059]/20 text-[#DFBF7A] text-[10px] uppercase font-bold tracking-wider mb-2">
              <ShieldCheck className="w-3 h-3" />
              <span>Privileged & Confidential</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              {t.title}
            </h3>
            <p className="text-xs text-[#EAE6DF]/70 font-light mt-1">
              {t.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-sm bg-[#18110D] text-[#EAE6DF] hover:text-[#DFBF7A] border border-[#C5A059]/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {isSubmitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 border-2 border-[#C5A059] flex items-center justify-center mx-auto text-[#DFBF7A]">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h4 className="font-serif text-2xl font-bold text-white">
                {t.successTitle}
              </h4>

              <p className="text-sm text-[#EAE6DF]/80 max-w-md mx-auto leading-relaxed">
                {t.successMessage}
              </p>

              <div className="p-4 rounded bg-[#281D17] border border-[#C5A059]/20 max-w-sm mx-auto text-xs text-[#EAE6DF]/70 space-y-1">
                <p className="font-semibold text-[#DFBF7A]">Direct Office Contact:</p>
                <p className="flex items-center justify-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" /> {siteConfig.phones[0]}
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#C5A059]" /> {siteConfig.email}
                </p>
              </div>

              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 rounded-sm bg-[#C5A059] text-[#18110D] font-bold text-xs uppercase tracking-wider"
              >
                {t.closeBtn}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#DFBF7A] mb-1">
                    {t.fullName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Jean-Paul Mbarga"
                    className="w-full px-3.5 py-2.5 bg-[#281D17] border border-[#C5A059]/30 rounded-sm text-sm text-white placeholder-[#6E655F] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#DFBF7A] mb-1">
                    {t.email} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 bg-[#281D17] border border-[#C5A059]/30 rounded-sm text-sm text-white placeholder-[#6E655F] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#DFBF7A] mb-1">
                    {t.phone} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+237 6XX XXX XXX"
                    className="w-full px-3.5 py-2.5 bg-[#281D17] border border-[#C5A059]/30 rounded-sm text-sm text-white placeholder-[#6E655F] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#DFBF7A] mb-1">
                    {t.companyName}
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Douala Logistics S.A."
                    className="w-full px-3.5 py-2.5 bg-[#281D17] border border-[#C5A059]/30 rounded-sm text-sm text-white placeholder-[#6E655F] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#DFBF7A] mb-1">
                  {t.practiceAreaSelect}
                </label>
                <select
                  value={formData.practiceArea}
                  onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#281D17] border border-[#C5A059]/30 rounded-sm text-sm text-white focus:outline-none focus:border-[#C5A059]"
                >
                  {practiceAreasData.map((p) => (
                    <option key={p.id} value={p.id} className="bg-[#18110D] text-white">
                      {lang === 'fr' ? p.titleFr : p.titleEn}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#DFBF7A] mb-1">
                  {t.preferredLang}
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 text-xs text-[#EAE6DF] cursor-pointer">
                    <input
                      type="radio"
                      name="preferredLang"
                      checked={formData.preferredLanguage === 'en'}
                      onChange={() => setFormData({ ...formData, preferredLanguage: 'en' })}
                      className="accent-[#C5A059]"
                    />
                    English
                  </label>
                  <label className="flex items-center gap-2 text-xs text-[#EAE6DF] cursor-pointer">
                    <input
                      type="radio"
                      name="preferredLang"
                      checked={formData.preferredLanguage === 'fr'}
                      onChange={() => setFormData({ ...formData, preferredLanguage: 'fr' })}
                      className="accent-[#C5A059]"
                    />
                    Français
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#DFBF7A] mb-1">
                  {t.message} *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Summarize your corporate, financial, or dispute resolution matter..."
                  className="w-full px-3.5 py-2.5 bg-[#281D17] border border-[#C5A059]/30 rounded-sm text-sm text-white placeholder-[#6E655F] focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3 border-t border-[#C5A059]/20">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-sm bg-[#281D17] text-[#EAE6DF] text-xs uppercase font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-sm bg-gradient-to-r from-[#C5A059] to-[#9A7B38] text-[#18110D] font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg disabled:opacity-50"
                >
                  <span>{isSubmitting ? t.sending : t.submitBtn}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
