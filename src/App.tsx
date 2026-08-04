import React, { useState } from 'react';
import { Language, PracticeArea } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PracticeAreas } from './components/PracticeAreas';
import { IndustriesSection } from './components/IndustriesSection';
import { GlobalOutlook } from './components/GlobalOutlook';
import { CoreValues } from './components/CoreValues';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { PracticeDetailModal } from './components/PracticeDetailModal';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedPracticeArea, setSelectedPracticeArea] = useState<PracticeArea | null>(null);
  const [legalModalState, setLegalModalState] = useState<{
    isOpen: boolean;
    title: string;
    type: 'privacy' | 'cookie' | 'notices' | null;
  }>({
    isOpen: false,
    title: '',
    type: null,
  });

  const handleOpenLegalModal = (title: string, type: 'privacy' | 'cookie' | 'notices') => {
    setLegalModalState({
      isOpen: true,
      title,
      type,
    });
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1E1915] font-sans selection:bg-[#C5A059] selection:text-white flex flex-col">
      {/* Sticky Navigation Header */}
      <Header
        lang={lang}
        onLanguageChange={(newLang) => setLang(newLang)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          lang={lang}
          onOpenConsultation={() => setConsultationOpen(true)}
        />

        {/* 2. Credibility / Trust Bar */}
        <TrustBar lang={lang} />

        {/* 3. About Section */}
        <AboutSection
          lang={lang}
          onOpenConsultation={() => setConsultationOpen(true)}
        />

        {/* 4. Why Businesses Choose Credence Legal */}
        <WhyChooseUs lang={lang} />

        {/* 5. Practice Areas */}
        <PracticeAreas
          lang={lang}
          onSelectPracticeArea={(pa) => setSelectedPracticeArea(pa)}
          onOpenConsultation={() => setConsultationOpen(true)}
        />

        {/* 6. Industries We Serve */}
        <IndustriesSection
          lang={lang}
          onOpenConsultation={() => setConsultationOpen(true)}
        />

        {/* 7. Global Outlook (CEMAC, ECOWAS, International) */}
        <GlobalOutlook
          lang={lang}
          onOpenConsultation={() => setConsultationOpen(true)}
        />

        {/* 8. Core Values */}
        <CoreValues lang={lang} />

        {/* 9. Final CTA Section */}
        <FinalCTA
          lang={lang}
          onOpenConsultation={() => setConsultationOpen(true)}
        />
      </main>

      {/* 10. Footer */}
      <Footer
        lang={lang}
        onOpenLegalModal={handleOpenLegalModal}
      />

      {/* Modals & Overlays */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        lang={lang}
      />

      <PracticeDetailModal
        practiceArea={selectedPracticeArea}
        onClose={() => setSelectedPracticeArea(null)}
        lang={lang}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      <LegalModal
        isOpen={legalModalState.isOpen}
        onClose={() => setLegalModalState({ ...legalModalState, isOpen: false })}
        title={legalModalState.title}
        type={legalModalState.type}
        lang={lang}
      />
    </div>
  );
}
