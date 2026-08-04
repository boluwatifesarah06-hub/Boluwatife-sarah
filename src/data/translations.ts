import { PracticeArea, Industry, WhyChooseItem, CoreValue } from '../types';

export const siteConfig = {
  name: 'Credence Legal',
  taglineEn: 'Business Law Firm in Cameroon — Your Global Partner in Legal Excellence',
  taglineFr: 'Cabinet d\'Avocats d\'Affaires au Cameroun — Votre Partenaire Mondial en Excellence Juridique',
  location: '1st Floor, Immeuble Empire Media, Rue Foch Akwa-Douala, Littoral, Cameroon',
  poBox: 'B.P. 12724 Douala',
  email: 'info@credencelegalcm.com',
  phones: ['+237 671 241 606', '+237 658 486 207'],
  social: {
    linkedin: 'https://linkedin.com',
    facebook: 'https://facebook.com',
    whatsapp: 'https://wa.me/237671241606',
  }
};

export const trustBarItems = [
  {
    titleEn: 'Bilingual & Bijural Expertise',
    titleFr: 'Expertise Bilingue & Bijuridique',
    subtitleEn: 'Common Law & Civil Law',
    subtitleFr: 'Common Law & Droit Civil',
  },
  {
    titleEn: 'Cross-Border Capabilities',
    titleFr: 'Compétences Transfrontalières',
    subtitleEn: 'Local Insight. Global Outlook.',
    subtitleFr: 'Ancrage Local. Perspective Mondiale.',
  },
  {
    titleEn: 'Corporate & Commercial Focus',
    titleFr: 'Spécialisation Droit des Affaires',
    subtitleEn: 'Strategic Legal Solutions',
    subtitleFr: 'Solutions Juridiques Stratégiques',
  },
  {
    titleEn: 'International Outlook',
    titleFr: 'Vision Internationale',
    subtitleEn: 'Cameroon & Beyond',
    subtitleFr: 'Cameroun & International',
  },
];

export const whyChooseUsData: WhyChooseItem[] = [
  {
    number: '01',
    titleEn: 'Business-Focused Legal Solutions',
    titleFr: 'Solutions Juridiques Orientées Affaires',
    descEn: 'Legal advice shaped around commercial objectives and real-world business needs.',
    descFr: 'Conseils juridiques conçus autour de vos objectifs commerciaux et des réalités du marché.',
  },
  {
    number: '02',
    titleEn: 'Bilingual & Bijural Expertise',
    titleFr: 'Expertise Bilingue & Bijuridique',
    descEn: 'English and French capability across Cameroon\'s Common Law and Civil Law systems.',
    descFr: 'Maîtrise complète de l\'anglais et du français dans les systèmes de Common Law et de Droit Civil.',
  },
  {
    number: '03',
    titleEn: 'Strong Cross-Border Capabilities',
    titleFr: 'Solides Compétences Transfrontalières',
    descEn: 'Supporting transactions and legal matters with regional and international dimensions.',
    descFr: 'Accompagnement des transactions et enjeux juridiques à portée régionale et internationale.',
  },
  {
    number: '04',
    titleEn: 'Depth Across Key Industries',
    titleFr: 'Expertise Sectorielle Approfondie',
    descEn: 'Deep legal knowledge across banking, energy, telecom, technology, infrastructure and more.',
    descFr: 'Connaissances juridiques poussées dans la banque, l\'énergie, les télécoms, la tech et les infrastructures.',
  },
  {
    number: '05',
    titleEn: 'Trusted by Leading Institutions',
    titleFr: 'Confiance des Grandes Institutions',
    descEn: 'Advising multinational companies, financial institutions and public-sector organizations.',
    descFr: 'Conseil auprès de multinationales, d\'institutions financières et d\'organismes publics.',
  },
  {
    number: '06',
    titleEn: 'Responsive, Partner-Led Service',
    titleFr: 'Service Réactif dirigé par les Associés',
    descEn: 'Accessible, hands-on counsel focused on client objectives and timely delivery.',
    descFr: 'Un accompagnement accessible, pragmatique et orienté vers les résultats dans les meilleurs délais.',
  },
];

export const practiceAreasData: PracticeArea[] = [
  {
    id: 'corporate-commercial',
    icon: 'Briefcase',
    titleEn: 'Corporate & Commercial Law',
    titleFr: 'Droit des Sociétés & Commercial',
    descEn: 'Structuring, incorporation, joint ventures, regulatory compliance, mergers and acquisition strategies across OHADA jurisdictions.',
    descFr: 'Structuration, création, joint-ventures, conformité réglementaire, fusions-acquisitions dans la zone OHADA.',
    fullDetailsEn: [
      'Company incorporation & corporate governance under OHADA Law',
      'Mergers, acquisitions & cross-border joint venture structuring',
      'Commercial contract drafting, negotiation & risk analysis',
      'Regulatory compliance, due diligence & corporate restructuring',
      'Foreign direct investment (FDI) advisory & market entry'
    ],
    fullDetailsFr: [
      'Création de sociétés & gouvernance d\'entreprise sous le droit OHADA',
      'Fusions, acquisitions & structuration de joint-ventures transfrontalières',
      'Rédaction de contrats commerciaux, négociation & analyse des risques',
      'Conformité réglementaire, audits juridiques & restructurations',
      'Conseil en investissements directs étrangers (IDE) & implantation'
    ]
  },
  {
    id: 'banking-finance',
    icon: 'Landmark',
    titleEn: 'Banking & Finance',
    titleFr: 'Droit Bancaire & Financier',
    descEn: 'Advising financial institutions and corporate borrowers on syndicated loans, project finance, regulatory compliance, and securities.',
    descFr: 'Conseil aux établissements financiers et emprunteurs sur les crédits syndiqués, financements de projets et réglementations.',
    fullDetailsEn: [
      'Syndicated & bilateral loan documentation and securities structuring',
      'COBAC regulatory compliance & Central African financial regulation advisory',
      'Project & asset financing for infrastructure & energy projects',
      'Financial restructuring, debt recovery & security enforcement',
      'Fintech licensing, digital payments & banking transaction counsel'
    ],
    fullDetailsFr: [
      'Documentation de prêts syndiqués/bilatéraux & sûretés bancaires',
      'Conformité aux réglementations COBAC & régulation financière en Afrique Centrale',
      'Financement de projets d\'infrastructures & d\'énergie',
      'Restructuration financière, recouvrement & réalisation de garanties',
      'Licences Fintech, paiements numériques & conseil en transactions bancaires'
    ]
  },
  {
    id: 'dispute-resolution',
    icon: 'Scale',
    titleEn: 'Dispute Resolution',
    titleFr: 'Règlement des Différends',
    descEn: 'Representing clients in high-stakes corporate litigation, arbitration, commercial mediation, and enforcement of foreign awards.',
    descFr: 'Représentation dans les contentieux commerciaux complexes, arbitrages OHADA/CCJA et médiations d\'affaires.',
    fullDetailsEn: [
      'Commercial litigation before Cameroonian Common Law & Civil Law courts',
      'OHADA CCJA and international commercial arbitration representation',
      'Alternative dispute resolution (ADR) & executive negotiation',
      'Enforcement of local judgments & foreign arbitral awards (Exequatur)',
      'Pre-litigation risk assessments & strategic dispute avoidance'
    ],
    fullDetailsFr: [
      'Contentieux commercial devant les juridictions de Common Law & Droit Civil',
      'Représentation en arbitrage commercial OHADA CCJA & international',
      'Modes alternatifs de règlement des conflits (MARC) & négociation',
      'Exécution de jugements & sentences arbitrales étrangères (Exequatur)',
      'Évaluation des risques précontentieux & stratégies de prévention'
    ]
  },
  {
    id: 'taxation',
    icon: 'Receipt',
    titleEn: 'Taxation',
    titleFr: 'Droit Fiscal & Fiscalité d\'Entreprise',
    descEn: 'Strategic tax planning, transfer pricing advisory, tax audit representation, and cross-border tax optimization.',
    descFr: 'Planification fiscale stratégique, prix de transfert, assistance aux contrôles fiscaux et optimisation transfrontalière.',
    fullDetailsEn: [
      'Corporate tax structuring & transfer pricing advisory',
      'Tax audit defense, administrative claims & tax litigation representation',
      'Customs, duty exemption regimes & CEMAC trade tariff advisory',
      'Cross-border withholding tax & double taxation treaty application',
      'Tax due diligence for corporate acquisitions & reorganizations'
    ],
    fullDetailsFr: [
      'Structuration fiscale d\'entreprise & conseil en prix de transfert',
      'Défense lors de contrôles fiscaux & contentieux fiscal',
      'Régimes douaniers, dégrèvements & tarifs commerciaux CEMAC',
      'Retenues à la source transfrontalières & conventions de non-double imposition',
      'Audit fiscal de pré-acquisition & restructurations'
    ]
  },
  {
    id: 'energy-resources',
    icon: 'Zap',
    titleEn: 'Energy & Natural Resources',
    titleFr: 'Énergie & Ressources Naturelles',
    descEn: 'Comprehensive counsel for oil & gas upstream/downstream operations, mining concessions, renewable energy projects, and environmental compliance.',
    descFr: 'Conseil spécialisé en pétrole, gaz, concessions minières, projets d\'énergies renouvelables et droit de l\'environnement.',
    fullDetailsEn: [
      'Mining convention negotiations, exploration & production licensing',
      'Oil & Gas upstream, midstream & downstream production sharing contracts (PSC)',
      'Independent Power Producer (IPP) agreements & renewable energy power purchase (PPA)',
      'Environmental impact compliance, forestry & land rights advisory',
      'Joint operating agreements (JOA) & farm-in/farm-out transactions'
    ],
    fullDetailsFr: [
      'Négociation de conventions minières, permis d\'exploration & d\'exploitation',
      'Contrats de partage de production (CPP) pétroliers & gaziers',
      'Contrats d\'achat d\'électricité (PPA) pour producteurs indépendants (IPP) & renouvelable',
      'Conformité environnementale, droit forestier & foncier',
      'Accords d\'exploitation conjointe (JOA) & amodiations'
    ]
  },
  {
    id: 'projects-infrastructure',
    icon: 'Building2',
    titleEn: 'Projects & Infrastructure',
    titleFr: 'Projets & Infrastructures',
    descEn: 'Advising on Public-Private Partnerships (PPP), concession contracts, construction procurement, and large-scale infrastructure projects.',
    descFr: 'Accompagnement des Partenariats Public-Privé (PPP), concessions, marchés de construction et grands projets d\'infrastructure.',
    fullDetailsEn: [
      'Public-Private Partnership (PPP) structuring & concession agreements',
      'FIDIC & custom EPC construction contract drafting & negotiation',
      'Public procurement compliance & tender response advisory',
      'Land acquisition, resettlement schemes & regulatory permits',
      'Project delivery monitoring & dispute management during construction'
    ],
    fullDetailsFr: [
      'Structuration de Partenariats Public-Privé (PPP) & concessions',
      'Rédaction & négociation de contrats de construction EPC / FIDIC',
      'Conformité aux marchés publics & conseils sur appels d\'offres',
      'Acquisitions foncières, indemnisation & autorisations administratives',
      'Suivi de l\'exécution des projets & gestion des différends de chantier'
    ]
  },
  {
    id: 'telecommunications',
    icon: 'Radio',
    titleEn: 'Telecommunications',
    titleFr: 'Télécommunications & Médias',
    descEn: 'Regulatory licensing, spectrum allocation counsel, infrastructure sharing, and telecom dispute advisory in Cameroon and CEMAC region.',
    descFr: 'Conseil en régulation télécoms, attribution de fréquences, partage d\'infrastructures et contentieux du secteur.',
    fullDetailsEn: [
      'ART (Agence de Régulation des Télécommunications) licensing & regulatory filings',
      'Tower sharing, fiber optic network deployment & interconnection agreements',
      'Satellite spectrum & spectrum frequency authorization counsel',
      'Consumer protection compliance & quality of service regulation',
      'Telecommunications M&A & regulatory approval procedures'
    ],
    fullDetailsFr: [
      'Licences & démarches auprès de l\'ART (Agence de Régulation des Télécommunications)',
      'Accords de partage d\'infrastructures, déploiement de fibre & d\'interconnexion',
      'Autorisations de fréquences & droit des communications par satellite',
      'Conformité aux exigences de protection des consommateurs & qualité de service',
      'Acquisitions dans les télécoms & autorisations administratives'
    ]
  },
  {
    id: 'technology-new-economy',
    icon: 'Cpu',
    titleEn: 'Technology & The New Economy',
    titleFr: 'Technologies & Nouvelle Économie',
    descEn: 'Data protection & privacy compliance (ADP), intellectual property protection, SaaS agreements, and startup scaling advisory.',
    descFr: 'Protection des données personnelles, propriété intellectuelle, contrats SaaS et accompagnement juridique des entreprises technologiques.',
    fullDetailsEn: [
      'Data privacy compliance & personal data protection (Cameroun & GDPR standards)',
      'Intellectual Property (OAPI) registration, trademark & software patent protection',
      'Software licensing, SaaS service level agreements & technology transfer',
      'Fintech, e-commerce & digital signature legal frameworks',
      'Startup venture capital investment structuring & founder equity agreements'
    ],
    fullDetailsFr: [
      'Conformité à la protection des données personnelles (normes Cameroun & RGPD)',
      'Dépôts et protection des marques, brevets & logiciels auprès de l\'OAPI',
      'Licences de logiciels, contrats SaaS & transfert de technologie',
      'Cadre juridique Fintech, e-commerce & signatures électroniques',
      'Levées de fonds de start-ups, capital-risque & pactes d\'actionnaires'
    ]
  }
];

export const industriesData: Industry[] = [
  {
    id: 'ind-banking',
    icon: 'Landmark',
    titleEn: 'Banking & Finance',
    titleFr: 'Secteur Bancaire & Financier',
    descEn: 'Advising commercial banks, microfinance institutions, asset managers, and corporate borrowers on credit agreements, debt restructuring, and regulatory compliance.',
    descFr: 'Conseil aux banques commerciales, microfinances, gestionnaires d\'actifs et emprunteurs sur les financements, la restructuration et la régulation.'
  },
  {
    id: 'ind-energy',
    icon: 'Zap',
    titleEn: 'Energy & Natural Resources',
    titleFr: 'Énergie & Ressources Naturelles',
    descEn: 'Guiding oil and gas exploration entities, mining operators, and renewable energy developers through complex licensing and production sharing agreements.',
    descFr: 'Accompagnement des sociétés pétrolières et gazières, exploitants miniers et développeurs d\'énergies renouvelables.'
  },
  {
    id: 'ind-telecom',
    icon: 'Radio',
    titleEn: 'Telecommunications',
    titleFr: 'Télécommunications',
    descEn: 'Legal solutions for mobile operators, tower companies, internet service providers, and satellite communication leaders operating in Central Africa.',
    descFr: 'Solutions juridiques pour les opérateurs mobiles, spécialistes des tours télécoms, FAI et acteurs de la communication satellite.'
  },
  {
    id: 'ind-tech',
    icon: 'Cpu',
    titleEn: 'Technology & Digital Platforms',
    titleFr: 'Technologie & Plateformes Numériques',
    descEn: 'Structuring data security protocols, software licensing, and capital raising for tech ventures and cross-border digital economy platforms.',
    descFr: 'Sécurisation des données, licencing logiciel et levées de fonds pour les entreprises technologiques et plateformes numériques.'
  },
  {
    id: 'ind-infra',
    icon: 'Building2',
    titleEn: 'Infrastructure & Real Estate',
    titleFr: 'Infrastructures & Immobilier d\'Affaires',
    descEn: 'Counsel for major port expansions, highway development, commercial real estate projects, and industrial zone construction.',
    descFr: 'Conseil pour les développements portuaires, autoroutiers, l\'immobilier commercial et les zones industrielles.'
  },
  {
    id: 'ind-health',
    icon: 'Activity',
    titleEn: 'Healthcare & Pharmaceuticals',
    titleFr: 'Santé & Industrie Pharmaceutique',
    descEn: 'Advising pharmaceutical distributors, medical device importers, and private healthcare centers on regulatory approvals and commercial distribution.',
    descFr: 'Conseil aux distributeurs de produits pharmaceutiques, importateurs de matériel médical et établissements de santé.'
  },
  {
    id: 'ind-gov',
    icon: 'Shield',
    titleEn: 'Government & Public Sector',
    titleFr: 'Secteur Public & Institutions',
    descEn: 'Strategic legal counsel for public institutions, state enterprises, and international development organizations operating in Cameroon.',
    descFr: 'Conseil stratégique pour les institutions publiques, entreprises d\'État et organisations de développement.'
  },
  {
    id: 'ind-startups',
    icon: 'Rocket',
    titleEn: 'Start-ups & Private Business',
    titleFr: 'Start-ups & Entreprises Privées',
    descEn: 'Targeted corporate legal support for high-growth enterprises, family offices, and emerging entrepreneurs navigating growth and investment.',
    descFr: 'Support juridique sur-mesure pour les entreprises à forte croissance, family offices et entrepreneurs émergents.'
  }
];

export const coreValuesData: CoreValue[] = [
  {
    titleEn: 'EXCELLENCE',
    titleFr: 'EXCELLENCE',
    descEn: 'Technical precision, rigorous legal analysis, and an uncompromised standard of professional work in every mandate.',
    descFr: 'Précision technique, analyse juridique rigoureuse et exigences professionnelles sans compromis pour chaque mandat.'
  },
  {
    titleEn: 'INNOVATION',
    titleFr: 'INNOVATION',
    descEn: 'Forward-thinking approaches and creative, pragmatic solutions tailored for rapidly evolving business environments.',
    descFr: 'Approches novatrices et solutions créatives et pragmatiques adaptées à des marchés en constante évolution.'
  },
  {
    titleEn: 'INTEGRITY',
    titleFr: 'INTÉGRITÉ',
    descEn: 'Absolute trust, complete transparency, strict confidentiality, and unwavering adherence to international ethical standards.',
    descFr: 'Confiance absolue, transparence totale, confidentialité stricte et respect inébranlable des normes éthiques internationales.'
  },
  {
    titleEn: 'CLIENT-CENTRICITY',
    titleFr: 'CENTRICITÉ CLIENT',
    descEn: 'Deep alignment with client commercial priorities, accessible partner involvement, and responsive, value-driven execution.',
    descFr: 'Alignement total avec vos priorités commerciales, forte implication des associés et exécution rapide à forte valeur ajoutée.'
  }
];

export const contentTranslations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      industries: 'Industries',
      contact: 'Contact',
      speakToUs: 'Speak to Us'
    },
    hero: {
      eyebrow: 'CREDENCE LEGAL — ATTORNEYS-AT-LAW',
      titleLine1: 'Business-Focused Legal Counsel.',
      titleLine2: 'Global Perspective.',
      subtitle: 'Credence Legal is a leading business law firm in Cameroon providing bilingual and bijural corporate and commercial legal services to businesses operating locally and internationally.',
      primaryCta: 'Speak to Us',
      secondaryCta: 'Explore Services',
      scrollDown: 'Scroll to explore'
    },
    about: {
      eyebrow: 'ABOUT CREDENCE LEGAL',
      heading: 'Legal Excellence. Commercial Insight. Long-Term Partnership.',
      paragraph1: 'Credence Legal is a modern, forward-thinking business law firm based in Douala, Cameroon. We deliver bilingual (English & French) and bijural (Common Law & Civil Law / OHADA Law) legal counsel tailored to complex business transactions and disputes.',
      paragraph2: 'Our firm routinely advises multinational corporations, financial institutions, government and public-sector entities, high-growth start-ups, and established private enterprises across local, regional, and cross-border matters.',
      highlights: [
        'Practical & Commercially Grounded Legal Advice',
        'Deep Bijural Mastery (OHADA, Common Law & Civil Law)',
        'Strategic Cross-Border Transaction Capability',
        'Partner-Led Client Responsiveness'
      ],
      cta: 'Discover Credence Legal'
    },
    whyChoose: {
      eyebrow: 'OUR ADVANTAGES',
      heading: 'Why Businesses Choose Credence Legal',
      subheading: 'We combine rigorous legal mastery with commercial acumen to safeguard assets, enable growth, and resolve complex issues.'
    },
    practiceAreas: {
      eyebrow: 'OUR EXPERTISE',
      heading: 'Legal Counsel Across Critical Business Areas',
      subheading: 'Providing strategic, high-value corporate and commercial advisory services in Cameroon and across regional markets.',
      cta: 'View Practice Area Details',
      explorePrompt: 'Click any practice area to explore the complete scope of legal services.'
    },
    industries: {
      eyebrow: 'SECTOR KNOWLEDGE',
      heading: 'Legal Insight Across Key Industries',
      subheading: 'We combine legal expertise with a deep understanding of the commercial realities shaping the industries in which our clients operate.'
    },
    globalOutlook: {
      eyebrow: 'INTERNATIONAL REACH',
      heading: 'Cameroonian Expertise. Global Outlook.',
      subheading: 'Positioned strategically at the commercial hub of Central Africa, Credence Legal advises clients navigating regional economic communities and global markets.',
      cemacTitle: 'CEMAC Region',
      cemacDesc: 'Deep legal and regulatory advisory across Central African Economic Community countries (Cameroon, Chad, Gabon, CAR, EQ. Guinea, Republic of Congo).',
      ecowasTitle: 'ECOWAS Integration',
      ecowasDesc: 'Facilitating cross-border trade, investments, and corporate structures bridging West and Central African commercial corridors.',
      internationalTitle: 'International Markets',
      internationalDesc: 'Partnering with global law firms and corporate legal departments on foreign direct investments and cross-border disputes.',
      badge: 'Deep knowledge of Cameroonian law combined with an understanding of global business dynamics.'
    },
    coreValues: {
      eyebrow: 'OUR FOUNDATION',
      heading: 'What Guides Our Work',
      subheading: 'Our firm is defined by principles that guarantee technical mastery, absolute integrity, and business alignment.'
    },
    finalCta: {
      headline: 'Strategic Legal Counsel for Business That Moves Forward.',
      subheading: 'Partner with Credence Legal for practical, commercially focused legal solutions in Cameroon and across borders.',
      primaryCta: 'Speak With Our Team',
      contactPrompt: 'Direct Contact Channels'
    },
    footer: {
      tagline: 'Business-focused legal counsel with a global outlook.',
      quickLinks: 'Quick Links',
      practiceAreasTitle: 'Practice Areas',
      contactHeader: 'Douala Office',
      legalTitle: 'Legal Information',
      privacyPolicy: 'Privacy Policy',
      cookiePolicy: 'Cookie Policy',
      legalNotices: 'Legal Notices',
      copyright: '© 2026 Credence Legal. All Rights Reserved.'
    },
    modal: {
      title: 'Schedule a Consultation',
      subtitle: 'Connect with a senior business lawyer at Credence Legal to discuss your legal requirements.',
      fullName: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      companyName: 'Company Name',
      practiceAreaSelect: 'Select Relevant Practice Area',
      message: 'Brief Description of Your Legal Needs',
      preferredLang: 'Preferred Communication Language',
      submitBtn: 'Submit Consultation Request',
      sending: 'Transmitting Request...',
      successTitle: 'Consultation Request Received',
      successMessage: 'Thank you for reaching out to Credence Legal. Our team will review your message and respond within 24 business hours.',
      closeBtn: 'Close'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      services: 'Services',
      industries: 'Secteurs',
      contact: 'Contact',
      speakToUs: 'Nous Consulter'
    },
    hero: {
      eyebrow: 'CREDENCE LEGAL — CABINET D\'AVOCATS',
      titleLine1: 'Conseil Juridique Axé Sur les Affaires.',
      titleLine2: 'Perspective Mondiale.',
      subtitle: 'Credence Legal est un cabinet d\'avocats d\'affaires de premier plan au Cameroun, offrant des services juridiques bilingues et bijuridiques en droit des sociétés et commercial aux entreprises locales et internationales.',
      primaryCta: 'Nous Consulter',
      secondaryCta: 'Découvrir Nos Services',
      scrollDown: 'Faire défiler pour explorer'
    },
    about: {
      eyebrow: 'À PROPOS DE CREDENCE LEGAL',
      heading: 'Excellence Juridique. Vision Commerciale. Partenariat Durable.',
      paragraph1: 'Credence Legal est un cabinet d\'avocats d\'affaires moderne et novateur basé à Douala, Cameroun. Nous apportons un conseil bilingue (anglais & français) et bijuridique (Common Law & Droit Civil / Droit OHADA) parfaitement adapté aux transactions complexes.',
      paragraph2: 'Le cabinet conseille régulièrement des multinationales, établissements financiers, organismes publics, start-ups et entreprises privées sur leurs enjeux locaux et transfrontaliers.',
      highlights: [
        'Conseils juridiques pratiques & ancrés dans la réalité des affaires',
        'Maîtrise Bijuridique (OHADA, Common Law & Droit Civil)',
        'Capacité d\'accompagnement sur les transactions transfrontalières',
        'Implication directe des associés dans chaque dossier'
      ],
      cta: 'Découvrir Credence Legal'
    },
    whyChoose: {
      eyebrow: 'NOS ATOUTS',
      heading: 'Pourquoi les Entreprises Choisissent Credence Legal',
      subheading: 'Nous combinons rigueur juridique et acuité commerciale pour sécuriser vos actifs et favoriser votre croissance.'
    },
    practiceAreas: {
      eyebrow: 'NOS DOMAINES D\'EXPERTISE',
      heading: 'Conseil Juridique dans les Domaines Clés de l\'Entreprise',
      subheading: 'Services de conseil stratégique en droit des affaires à forte valeur ajoutée au Cameroun et dans toute la région.',
      cta: 'Voir les Détails par Domaine',
      explorePrompt: 'Cliquez sur un domaine pour découvrir l\'étendue complète de nos services.'
    },
    industries: {
      eyebrow: 'EXPERTISE SECTORIELLE',
      heading: 'Vision Juridique au Cœur de Vos Secteurs',
      subheading: 'Nous allions expertise juridique et compréhension approfondie des réalités économiques qui façonnent votre secteur d\'activité.'
    },
    globalOutlook: {
      eyebrow: 'RAYONNEMENT INTERNATIONAL',
      heading: 'Expertise Camerounaise. Perspective Mondiale.',
      subheading: 'Implanté au cœur économique de l\'Afrique Centrale, Credence Legal accompagne les entreprises à l\'échelle régionale et internationale.',
      cemacTitle: 'Zone CEMAC',
      cemacDesc: 'Conseil juridique et réglementaire dans tous les pays de la Communauté Économique de l\'Afrique Centrale (Cameroun, Tchad, Gabon, RCA, Guinée Éq., Congo).',
      ecowasTitle: 'Intégration CEDEAO',
      ecowasDesc: 'Facilitation des échanges transfrontaliers, investissements et structures d\'entreprise reliants l\'Afrique de l\'Ouest et du Centre.',
      internationalTitle: 'Marchés Internationaux',
      internationalDesc: 'Partenariats avec des cabinets internationaux et directions juridiques pour les investissements directs et contentieux transfrontaliers.',
      badge: 'Connaissance approfondie du droit camerounais associée à la maîtrise des dynamiques d\'affaires mondiales.'
    },
    coreValues: {
      eyebrow: 'NOS VALEURS FONDATRICES',
      heading: 'Ce Qui Guide Notre Action',
      subheading: 'Notre cabinet repose sur des principes fondamentaux garantissant rigueur technique, intégrité absolue et réactivité.'
    },
    finalCta: {
      headline: 'Un Conseil Juridique Stratégique Pour les Entreprises en Mouvement.',
      subheading: 'Faites équipe avec Credence Legal pour des solutions juridiques pratiques et orientées affaires au Cameroun et à l\'international.',
      primaryCta: 'Consulter Nos Avocats',
      contactPrompt: 'Canaux de Contact Direct'
    },
    footer: {
      tagline: 'Conseil juridique axé sur les affaires avec une perspective mondiale.',
      quickLinks: 'Navigation',
      practiceAreasTitle: 'Domaines d\'Expertise',
      contactHeader: 'Bureau de Douala',
      legalTitle: 'Informations Légales',
      privacyPolicy: 'Politique de Confidentialité',
      cookiePolicy: 'Politique des Cookies',
      legalNotices: 'Mentions Légales',
      copyright: '© 2026 Credence Legal. Tous droits réservés.'
    },
    modal: {
      title: 'Demander une Consultation',
      subtitle: 'Échangez avec un avocat d\'affaires senior de Credence Legal pour définir vos besoins juridiques.',
      fullName: 'Nom Complet',
      email: 'Adresse Email',
      phone: 'Numéro de Téléphone',
      companyName: 'Nom de l\'Entreprise',
      practiceAreaSelect: 'Sélectionner le Domaine d\'Expertise',
      message: 'Description Succincte de Vos Besoins',
      preferredLang: 'Langue de Communication Préférée',
      submitBtn: 'Envoyer la Demande',
      sending: 'Transmission en cours...',
      successTitle: 'Demande de Consultation Reçue',
      successMessage: 'Merci d\'avoir contacté Credence Legal. Notre équipe examinera votre demande et vous répondra sous 24h ouvrées.',
      closeBtn: 'Fermer'
    }
  }
};
