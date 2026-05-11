export const portfolioData = {
  // ==========================================
  // INFORMATIONS PERSONNELLES
  // ==========================================
  name: 'Ahmed RGUIBI',
  jobTitle: 'PMO / Chef de projet senior',
  fullTitle: 'Pilotage | Gouvernance | Redressement de projets complexes',
  tagline: '16+ ans d\'expertise • Intervention pompier • Méthode M.A.A.I.A.N.',
  
  // Contact 
  contact: {
    email: 'a.rguibi@maaian.fr',
    phone: '+33 (0)6 59 34 56 55',
    address: 'Île-deFrance. Déplacements ponctuels en Europe acceptés',
    location: 'Saint-Cyr-l\'École, Île-de-France',
  },
  
  // Langues 
  languages: [
    { language: 'Français', level: 'Natif', flag: '🇫🇷' },
    { language: 'Anglais', level: 'Bilingue', flag: '🇬🇧' },
    { language: 'Arabe', level: 'Courant', flag: '🇲🇦' },
  ],
  
  // Certifications 
  certifications: [
    { 
      name: 'PRINCE2 Foundation & Practitioner', 
      issuer: 'PeopleCert', 
      year: '2020',
      icon: 'Award',
    },
  ],
  
  // ==========================================
  // NAVIGATION
  // ==========================================
  navLinks: [
    { id: 'accueil', label: 'Accueil' },
    { id: 'apropos', label: 'À propos' },
    { id: 'competences', label: 'Compétences' },
    { id: 'experience', label: 'Expérience' },
    { id: 'recommandations', label: 'Recommandations' },
    { id: 'contact', label: 'Contact' },
  ],
  
  // ==========================================
  // HERO SECTION
  // ==========================================
  hero: {
    title: 'Ahmed RGUIBI',
    subtitle: 'Expert en pilotage et redressement de projets IT complexes',
    highlight: 'Pas des retards',
    description: 'J\'aligne vos enjeux IT avec vos objectifs business',
    buttons: [
      { label: 'Découvrir mon parcours', variant: 'primary', href: '#experience' },
      { label: 'Me contacter', variant: 'outline', href: '#contact' },
    ],
    stats: [
      { value: '16+', label: 'Années d\'expérience' },
      { value: '50+', label: 'Projets B2B pilotés' },
      { value: '8', label: 'Grands comptes' },
    ],
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ahmed-IM1cxDQhJFThQiyggQnWJiZpvpCM7l.png',
  },
  
  // ==========================================
  // À PROPOS (ENRICHI)
  // ==========================================
  about: {
    title: 'À propos',
    introduction: 'PMO / Chef de projet senior avec plus de 16 ans d\'expérience dans le pilotage de projets IT et la gouvernance de programmes transverses complexes.',
    description: `Expert en pilotage et redressement de projets IT complexes avec développement de la méthode M.A.A.I.A.N. pour diagnostic rapide et redressement de projets en situation de chaos. Solide expertise en structuration de la delivery, suivi budgétaire, reporting stratégique et coordination multi-interlocuteurs (MOA/MOE, DSI, métiers, prestataires). Expérience significative en environnement international dans les secteurs banque, assurance et services.`,
    highlights: [
      'Pilotage de projets en tension',
      'Méthode exclusive M.A.A.I.A.N.',
      'Environnement international (France-Suisse)',
      'Certifié PRINCE2 Foundation & Practitioner',
      'Bilingue français-anglais',
    ],
    sectors: ['Banque', 'Assurance', 'Services financiers', 'Transformation digitale'],
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ahmed-IM1cxDQhJFThQiyggQnWJiZpvpCM7l.png',
  },
  
  // ==========================================
  // EXPÉRIENCES (COMPLET - 8 expériences)
  // ==========================================
  experiences: [
    {
      id: 1,
      period: '02/2022 - En cours',
      role: 'PMO / Chef de Projet Senior',
      company: 'MAAIAN',
      companyType: 'Conseil indépendant',
      description: 'Conception et déploiement de la méthode M.A.A.I.A.N. : framework propriétaire de diagnostic et redressement de projets IT complexes, appliqué auprès de directions IT en contexte de tension ou de transformation.',
      achievements: [
        'Développement de la méthode M.A.A.I.A.N. pour le redressement de projets complexes',
        'Réalisation de diagnostics de performance projet auprès de directions IT et métiers',
        'Mise en place de dispositifs d\'outils de pilotage : dashboards, modèles budgétaires, automatisations',
        'Déblocage de situations critiques avec coordination des actions correctives',
      ],
      tags: ['M.A.A.I.A.N.', 'Redressement', 'Diagnostic', 'PMO', 'Gestion de crise'],
      expanded: true,
    },
    {
      id: 2,
      period: '03/2023 - 09/2024',
      role: 'PMO / IT Delivery Manager',
      company: 'Rothschild Martin Maurel',
      companyType: 'Banque privée',
      description: 'Pilotage d\'un programme DWH de ~10M€ sur 4 équipes distribuées (IT et métier France/Suisse). Coordination multi-instances jusqu\'au top management. Remise en trajectoire du programme et livraison du serveur en production.',
      achievements: [
        'Construction et mise à jour de tableaux de bord stratégiques (avancement, risques, dépendances, KPI)',
        'Animation des comités projets et instances de gouvernance (COPIL, COPROJ)',
        'Coordination transverse des équipes Data, IT, Finance, RH',
        'Supervision des recettes fonctionnelles et gestion des anomalies',
        'Respect strict des jalons et du budget prévisionnel',
      ],
      tags: ['DWH', 'ETL', 'Gouvernance', 'Dashboards', 'KPI', 'France-Suisse'],
      expanded: false,
    },
    {
      id: 3,
      period: '02/2022 - 02/2023',
      role: 'PMO / Chef de projet senior',
      company: 'Allianz',
      companyType: 'Assurance',
      description: 'Pilotage d\'un programme SelfService Portal (2-5M€) en contexte international (IT Europe et Asie, métiers France). Mission de 12 mois. Portail livré en production dans les délais, sans rollback post-prod.',
      achievements: [
        'Suivi du portefeuille projet : planification, budget, arbitrage des priorités',
        'Mise en place de reporting régulier à destination de la direction',
        'Supervision de la recette métier (UAT) avec conformité RGPD',
        'Amélioration de l\'expérience utilisateur et réduction des erreurs de traitement',
      ],
      tags: ['Self-Service Portal', 'RGPD', 'UAT', 'Reporting', 'Conformité'],
      expanded: false,
    },
    {
      id: 4,
      period: '06/2018 - 02/2022',
      role: 'Chef de projet / Business Analyst',
      company: 'Checkpoint Systems France',
      companyType: 'Solutions RFID & Tech',
      description: 'Intégration B2B multi-clients. Coordination avec DSI grands comptes.',
      achievements: [
        'Pilotage de 20+ projets d\'intégration B2B en parallèle',
        'Coordination DSI grands comptes (Carrefour, Decathlon, Leclerc)',
        'Suivi de projets middleware (solution CheckNet)',
        'Automatisation et optimisation des processus de commandes',
        'Réduction significative des tâches manuelles',
      ],
      tags: ['Intégration B2B', 'ERP', 'EDI', 'Middleware', 'Coordination DSI'],
      expanded: false,
    },
    {
      id: 5,
      period: '02/2016 - 06/2018',
      role: 'Chef de projet / Business Analyst',
      company: 'Telys',
      companyType: 'Services IT',
      description: 'Pilotage de projets IT pour PME et institutions publiques.',
      achievements: [
        'Clients : Mrm Mccan, SACEM, Picard',
        'Déploiement d\'un CRM modernisé améliorant l\'adoption et la productivité',
        'Stabilisation de l\'équipe QA à 8 membres',
        'Lancement réussi du programme de carte de fidélité',
      ],
      tags: ['CRM', 'Carte de fidélité', 'MOA/MOE', 'QA', 'Budget'],
      expanded: false,
    },
    {
      id: 6,
      period: '05/2012 - 10/2015',
      role: 'Chef de projet',
      company: 'Prowebe',
      companyType: 'E-commerce',
      description: 'Refonte du portail e-commerce pour comités d\'entreprise.',
      achievements: [
        'Cadrage et animation d\'ateliers fonctionnels',
        'Pilotage planning et budget',
        'Livraison de multiples projets dans le respect Coûts-Délais-Périmètre',
        'Structuration de la documentation facilitant l\'onboarding',
      ],
      tags: ['E-commerce', 'Portail', 'Ateliers fonctionnels', 'Planning', 'Budget'],
      expanded: false,
    },
    {
      id: 7,
      period: '09/2009 - 03/2012',
      role: 'Chef de projet',
      company: 'Iris France',
      companyType: 'Solutions GED',
      description: 'Conception et déploiement de solutions GED et outils collaboratifs. Partenariat IBM.',
      achievements: [
        'Interface avec équipes métiers et techniques',
        'Augmentation du taux d\'adoption de FILENET via formations ciblées',
        'Renforcement du partenariat avec IBM',
        'Équipe d\'ingénieurs 100% certifiés IBM',
      ],
      tags: ['GED', 'FILENET', 'IBM', 'Outils collaboratifs', 'Avant-vente'],
      expanded: false,
    },
    {
      id: 8,
      period: '09/2008 - 09/2009',
      role: 'Chef de projet',
      company: 'AFNOR Compétences',
      companyType: 'Organisme de certification',
      description: 'Digitalisation de la gestion des formations internes.',
      achievements: [
        'Coordination MOA/MOE avec planification',
        'Accompagnement des utilisateurs',
        'Augmentation du volume des ventes via approche orientée client',
        'Optimisation du ciblage via analyse data-driven',
      ],
      tags: ['Digitalisation', 'Formation', 'MOA/MOE', 'Data-driven'],
      expanded: false,
    },
  ],
  
  // ==========================================
  // COMPÉTENCES (ENRICHI)
  // ==========================================
  skills: {
    categories: [
      {
        name: 'Pilotage & Gouvernance',
        icon: 'Target',
        items: [
          'Pilotage delivery',
          'Gouvernance projet',
          'PMO',
          'Coordination multi-interlocuteurs',
          'Gestion des risques',
          'Arbitrage des priorités',
          'Planification',
          'Cadrage projet',
        ],
      },
      {
        name: 'Intervention & Redressement',
        icon: 'Zap',
        items: [
          'Intervention pompier',
          'Diagnostic projets en chaos',
          'Méthode M.A.A.I.A.N.',
          'Plans de relance',
          'Gestion de crise projet',
          'Restructuration delivery',
          'Déblocage situations critiques',
        ],
      },
      {
        name: 'Reporting & Outils',
        icon: 'BarChart3',
        items: [
          'KPI & Dashboards',
          'Tableaux de bord',
          'Reporting consolidé',
          'Excel avancé',
          'Jira / Confluence',
          'Jira Service Management',
          'MS Project',
        ],
      },
      {
        name: 'Méthodologies',
        icon: 'GitBranch',
        items: [
          'PRINCE2 (certifié)',
          'Agile / Scrum',
          'Cycle en V',
          'Méthode M.A.A.I.A.N.',
        ],
      },
      {
        name: 'Instances & Animation',
        icon: 'Users',
        items: [
          'Animation COPIL',
          'Animation COPROJ',
          'Comités projets',
          'Ateliers métiers/techniques',
          'Coordination MOA/MOE',
        ],
      },
    ],
    technicalDomains: [
      'Projets middleware',
      'Intégration B2B',
      'ERP',
      'EDI',
      'Flux commandes/livraisons/facturation',
      'CRM',
      'GED',
      'Solutions digitales',
    ],
  },
  
  // ==========================================
  // RÉALISATIONS / PROJETS PHARES
  // ==========================================
  featuredProjects: [
    {
      id: 1,
      title: 'Redressement Programme DWH',
      client: 'Rothschild Martin Maurel',
      period: '2023-2024',
      description: 'Pilotage global d\'un programme Data Warehouse complexe avec coordination France-Suisse.',
      results: [
        'Mise en place de tableaux de bord stratégiques',
        'Suivi budgétaire rigoureux (consommé, RAF, prévisions)',
        'Respect strict des jalons et du budget',
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['DWH', 'Gouvernance', 'KPI', 'France-Suisse'],
    },
    {
      id: 2,
      title: 'Intégration B2B Multi-Clients',
      client: 'Checkpoint Systems France',
      period: '2018-2022',
      description: 'Pilotage simultané de 20+ projets d\'intégration avec grands comptes retail.',
      results: [
        'Coordination DSI Carrefour, Decathlon, Leclerc',
        'Automatisation des processus de commandes',
        'Réduction des tâches manuelles',
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      tags: ['Intégration B2B', 'ERP', 'EDI', 'Multi-clients'],
    },
    {
      id: 3,
      title: 'Self-Service Portal RGPD',
      client: 'Allianz',
      period: '2022-2023',
      description: 'Gestion du portefeuille Self-Service Portal avec conformité RGPD stricte.',
      results: [
        'Supervision recette métier (UAT)',
        'Contrôles rigoureux sur données clients',
        'Amélioration expérience utilisateur',
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=600&h=400&fit=crop',
      tags: ['Portal', 'RGPD', 'UAT', 'Conformité'],
    },
  ],
  
  // ==========================================
  // CONTACT
  // ==========================================
  contact_section: {
    title: 'Me contacter',
    subtitle: 'Disponible pour des missions de conseil, pilotage de programmes ou interventions de redressement.',
    email: 'a.rguibi@outlook.com',
    phone: '+33 (0)6 59 34 56 55',
    address: '40 rue Gabriel Peri, 78210 St Cyr l\'École',
    socialLinks: [
      { 
        platform: 'LinkedIn', 
        icon: 'Linkedin', 
        url: 'www.linkedin.com/in/ahmed-rguibi',
        label: 'Profil LinkedIn',
      },
      { 
        platform: 'Email', 
        icon: 'Mail', 
        url: 'mailto:a.rguibi@outlook.com',
        label: 'Envoyer un email',
      },
      { 
        platform: 'Localisation', 
        icon: 'MapPin', 
        url: 'https://maps.google.com/?q=Saint-Cyr+l\'École',
        label: 'Saint-Cyr-l\'École',
      },
    ],
  },
  
  // ==========================================
  // FOOTER
  // ==========================================
  footer: {
    copyright: '© 2026 Ahmed RGUIBI. Tous droits réservés.',
    tagline: 'PMO / Chef de projet senior - Pilotage | Gouvernance | Diagnostic & Redressement',
  },

   // ==========================================
  // RECOMMANDATIONS / TÉMOIGNAGES
  // ==========================================
  recommendations: {
    title: 'Recommandations',
    subtitle: 'Ce que disent mes clients et collaborateurs',
    items: [
      {
        id: 1,
        name: 'Ronan Jaffré',
        role: 'Dev / Manager',
        company: 'Malt',
        relation: 'Freelance',
        platform: 'Malt',
        text: 'Ahmed est un Delivery Manager solide, avec une vraie expérience du pilotage de programmes complexes. Il sait reprendre un projet en tension, remettre de la structure et sécuriser la delivery. Bon sens de l\'arbitrage, méthodo carrée, à l\'aise avec les grands comptes. Un profil que je recommande pour des missions exigeantes.',
        highlights: ['Delivery Management', 'Projets en tension', 'Grands comptes', 'Arbitrage'],
        date: '2026-04-18',
        verified: true,
      },
      {
        id: 2,
        name: 'Johan Barraud',
        role: 'Key Account Manager',
        company: 'Checkpoint Systems',
        relation: 'Collaboration projet',
        platform: 'LinkedIn',
        text: 'Ahmed a été un élément clé dans le succès de nos opérations avec nos clients Retail. Il a su mener à bien des projets urgents avec demande de livraison très rapide, comme des projets long terme nécessitant un pilotage complexe au milieu de parties prenantes exigeantes et internationales. Sa capacité à bien cadrer les projets en amont lors des réunions d\'introduction pour anticiper tous les scénarios et livrer une v1 la plus efficace possible est très appréciée. Très belle expérience à ses côtés. Johan B.',
        highlights: ['Clients Retail', 'Livraison rapide', 'Pilotage complexe', 'Cadrage projet', 'International'],
        date: '2026-02-13',
        verified: true,
      },
    ],
  },

};

// Type export for TypeScript usage
export type PortfolioData = typeof portfolioData;