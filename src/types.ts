export type Language = 'en' | 'fr';

export interface PracticeArea {
  id: string;
  icon: string;
  titleEn: string;
  titleFr: string;
  descEn: string;
  descFr: string;
  fullDetailsEn: string[];
  fullDetailsFr: string[];
}

export interface Industry {
  id: string;
  icon: string;
  titleEn: string;
  titleFr: string;
  descEn: string;
  descFr: string;
}

export interface WhyChooseItem {
  number: string;
  titleEn: string;
  titleFr: string;
  descEn: string;
  descFr: string;
}

export interface CoreValue {
  titleEn: string;
  titleFr: string;
  descEn: string;
  descFr: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  practiceArea: string;
  message: string;
  preferredLanguage: Language;
}
