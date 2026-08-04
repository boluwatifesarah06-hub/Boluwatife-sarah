import React from 'react';
import { Language } from '../types';
import { siteConfig } from '../data/translations';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'privacy' | 'cookie' | 'notices' | null;
  lang: Language;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  title,
  type,
  lang,
}) => {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F0A07]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#18110D] border border-[#C5A059]/40 rounded-sm w-full max-w-2xl text-white shadow-2xl overflow-hidden relative max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="p-5 bg-[#281D17] border-b border-[#C5A059]/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#DFBF7A]" />
            <h3 className="font-serif text-xl font-bold text-white">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-sm bg-[#18110D] text-[#EAE6DF] hover:text-[#DFBF7A] border border-[#C5A059]/20"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4 text-xs text-[#EAE6DF]/80 leading-relaxed font-light">
          {type === 'privacy' && (
            <>
              <p className="font-semibold text-sm text-[#DFBF7A]">
                1. Professional Confidentiality & Privacy Notice
              </p>
              <p>
                Credence Legal (Attorneys-at-Law, Douala, Cameroon) adheres strictly to standard legal professional privilege, professional secrecy laws, and applicable data privacy regulations in the Republic of Cameroon and international cross-border standards.
              </p>
              <p className="font-semibold text-sm text-[#DFBF7A]">
                2. Data Collection & Purpose
              </p>
              <p>
                Information provided through consultation inquiries (including names, email addresses, corporate entities, and phone numbers) is processed solely for evaluating potential legal representation and communicating with prospective clients.
              </p>
              <p className="font-semibold text-sm text-[#DFBF7A]">
                3. Information Sharing
              </p>
              <p>
                We do not sell, license, or disclose client communication data to third parties, except as strictly permitted or mandated by applicable judicial procedure under Cameroonian law.
              </p>
            </>
          )}

          {type === 'cookie' && (
            <>
              <p className="font-semibold text-sm text-[#DFBF7A]">
                1. Cookie Usage Policy
              </p>
              <p>
                Credence Legal uses essential technical cookies to ensure standard session performance, secure website operations, and preserve language preferences (English / Français) across user visits.
              </p>
              <p className="font-semibold text-sm text-[#DFBF7A]">
                2. Analytics & Performance
              </p>
              <p>
                We do not deploy invasive third-party tracking scripts. Minimal aggregated site performance metrics may be analyzed solely to ensure portal responsiveness.
              </p>
            </>
          )}

          {type === 'notices' && (
            <>
              <p className="font-semibold text-sm text-[#DFBF7A]">
                1. Publisher & Legal Designation
              </p>
              <p>
                <strong>Firm Name:</strong> CREDENCE LEGAL — Attorneys-at-Law<br />
                <strong>Address:</strong> {siteConfig.location}<br />
                <strong>Postal Box:</strong> {siteConfig.poBox}<br />
                <strong>Email:</strong> {siteConfig.email}<br />
                <strong>Phone:</strong> {siteConfig.phones.join(' / ')}
              </p>
              <p className="font-semibold text-sm text-[#DFBF7A]">
                2. Disclaimer
              </p>
              <p>
                The materials provided on this website are for general informational purposes only and do not constitute formal legal advice. Submission of inquiries through this website does not automatically create an attorney-client relationship until a formal mandate agreement is signed.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#281D17] border-t border-[#C5A059]/20 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-sm bg-[#C5A059] text-[#18110D] font-bold text-xs uppercase"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
