import { surveys } from "@shared/schema";

export type Language = "en" | "fr";

export const fr = {
  common: {
    welcome: "Bienvenue sur Potenti'Elles",
    home: "Accueil",
    login: "Connexion",
    register: "S'inscrire",
    logout: "Déconnexion",
    email: "Email",
    password: "Mot de passe",
    username: "Nom d'utilisateur",
    fullName: "Nom complet",
    role: "Rôle",
    submit: "Soumettre",
    cancel: "Annuler",
    save: "Enregistrer",
    delete: "Supprimer",
    edit: "Modifier",
    loading: "Chargement...",
    error: "Une erreur est survenue",
    success: "Succès !",
    newProject: "Nouveau Projet",
    profile: "Profil",
    about: "À propos",
    faq: "FAQ",
    contact: "Contact",
    menu: "Menu",
    userMenu: {
      profile: "Profil",
      settings: "Paramètres",
      users: "Utilisateurs",
      logout: "Déconnexion",
    },
  },
  roles: {
    entrepreneur: "Entrepreneure",
    apip: "Admin APIP",
    support_org: "Organisation de soutien",
    donor: "Donateur",
    description: {
      entrepreneur:
        "Accédez aux ressources et au soutien pour votre entreprise",
      apip: "Gérez la plateforme et examinez les projets",
      support_org: "Fournissez du mentorat et du soutien",
      donor: "Suivez l'impact et consultez les rapports",
    },
  },
  features: {
    projectManagement: "Gestion de Projets",
    projectManagementDesc:
      "Suivez et gérez vos projets d'entreprise facilement",
    support: "Réseau de Soutien",
    supportDesc:
      "Connectez-vous avec des mentors et des organisations de soutien",
    progress: "Suivi des Progrès",
    progressDesc:
      "Surveillez la croissance et les réalisations de votre entreprise",
  },
  auth: {
    loginTitle: "Connectez-vous à votre compte",
    registerTitle: "Créez votre compte",
    alreadyHaveAccount: "Vous avez déjà un compte ?",
    dontHaveAccount: "Vous n'avez pas de compte ?",
    forgotPassword: "Mot de passe oublié ?",
    joinPotentielles: "Rejoignez Potenti'Elles Guinée",
    empoweringStatement:
      "Accompagnement des femmes entrepreneures en Guinée à travers l'innovation numérique et l'autonomisation communautaire",
    supportMentoring:
      "Soutien au développement d'entreprise et mentorat personnalisé",
    accessResources:
      "Accès à des formations et ressources numériques en langues locales",
    connectOrganizations:
      "Connexion directe avec l'APIP et les organisations de soutien",
    progressTracking: "Suivez la croissance et l'impact de votre entreprise",
    selectRole: "Sélectionnez un rôle",
    demoAccounts: "Comptes de démonstration :",
    demoEntrepreneur:
      "Entrepreneure : nom d'utilisateur 'entrepreneur' / mot de passe 'demo123'",
    demoApip: "Admin APIP : nom d'utilisateur 'apip' / mot de passe 'demo123'",
    demoSupport:
      "Organisation de soutien : nom d'utilisateur 'support' / mot de passe 'demo123'",
    demoDonor: "Donateur : nom d'utilisateur 'donor' / mot de passe 'demo123'",
  },
  surveys: {
    title: "Sondage",
    businessTitle: "Enquête sur le développement commercial",
    businessDescription:
      "Répondez aux questions sur le développement et les besoins de votre entreprise",
    newSurvey: "Nouvelle enquête",
    submit: "Soumettre l'enquête",
    responses: "Réponses à l'enquête",
  },
  landing: {
    heroText:
      "Votre plateforme d'accompagnement pour les femmes entrepreneures en Guinée",
    joinButton: "Rejoindre la plateforme",
    impact: "Notre Impact",
    impactDesc:
      "Un accompagnement complet pour le développement de l'entrepreneuriat féminin",
    stats: {
      entrepreneurs: "Femmes entrepreneures accompagnées",
      projects: "Projets financés",
      regions: "Régions couvertes",
    },
  },
  dashboard: {
    overview: "Vue d'ensemble",
    projects: "Projets",
    surveys: "Enquêtes",
    activities: "Activités",
    metrics: "Métriques",
    resources: "Ressources",
    menu: "Menu",
    welcome: "Bon retour",
    stats: {
      total: "Total",
      active: "Actif",
      completed: "Terminé",
    },
  },
  admin: {
    users: "Gestion des utilisateurs",
    projects: "Révision des projets",
    surveys: "Gestion des enquêtes",
    analytics: "Analyses",
    settings: "Paramètres",
    userCount: "Total des utilisateurs",
    projectCount: "Projets à examiner",
    settingsDesc: "Configuration des paramètres généraux de la plateforme",
    settingsTitle: "Paramètres de la Plateforme",
    overview: {
      title: "Tableau de bord administrateur",
      description:
        "Gérer les utilisateurs, les projets et les paramètres de la plateforme",
    },
  },
  mentors: {
    mentees: "Mes mentorés",
    chat: "Discussion",
    totalMentees: "Nombre de mentorés",
    messagePreview: "La fonctionnalité de chat sera bientôt disponible",
    communication: "Communication",
    progress: "Suivi des progrès",
    schedule: "Planifier une réunion",
  },
  donors: {
    reports: "Rapports",
    success: "Histoires de réussite",
    impactOverview: "Aperçu de l'impact",
    totalFunded: "Total des projets financés",
    impactReports: "Rapports d'impact des projets",
    reportsDesc: "Les rapports d'impact détaillés seront disponibles ici",
    storiesDesc:
      "Les histoires de réussite de nos entrepreneurs seront partagées ici",
    donationHistory: "Historique des dons",
    projectTracking: "Suivi des projets",
  },
  projects: {
    name: "Nom du projet",
    description: "Description du projet",
    new: "Nouveau projet",
    create: "Créer un projet",
    details: "Détails du projet",
    list: "Liste des projets",
    status: "Statut",
    submit: "Soumettre le projet",
    success: "Projet créé avec succès",
    error: "Erreur lors de la création du projet",
  },
  resources: {
    title: "Ressources",
    entrepreneurshipGuide: {
      title: "Guide de l'Entrepreneuriat",
      description: "Guide complet pour démarrer et développer votre entreprise",
    },
    documentTemplates: {
      title: "Modèles de Documents",
      description: "Modèles de documents d'entreprise prêts à l'emploi",
    },
    videoTraining: {
      title: "Formation Vidéo",
      description:
        "Vidéos éducatives sur la gestion d'entreprise et l'entrepreneuriat",
    },
  },
  faq: {
    title: "Questions Fréquentes",
    description:
      "Retrouvez ici les réponses aux questions les plus fréquemment posées sur la plateforme Potenti'Elles.",
    questions: {
      account: "Comment créer un compte ?",
      accountAnswer:
        "Cliquez sur le bouton 'S'inscrire' en haut de la page. Remplissez le formulaire avec vos informations personnelles et sélectionnez votre rôle.",
      roles: "Quels sont les différents rôles sur la plateforme ?",
      rolesAnswer:
        "La plateforme propose différents rôles : Entrepreneure, APIP, Organisation de soutien et Donateur. Chaque rôle a des fonctionnalités spécifiques adaptées à ses besoins.",
      support: "Quel type d'accompagnement est disponible ?",
      supportAnswer:
        "Nous proposons un accompagnement complet incluant : mentorat personnalisé, formation en gestion d'entreprise, accès aux ressources documentaires et mise en relation avec des experts du secteur.",
      mentoring: "Comment fonctionne le système de mentorat ?",
      mentoringAnswer:
        "Le mentorat met en relation une entrepreneure avec un professionnel expérimenté. Les sessions peuvent être en ligne ou en personne, selon les disponibilités. Le mentor guide l'entrepreneure dans son développement professionnel.",
      resources: "Quelles ressources sont disponibles sur la plateforme ?",
      resourcesAnswer:
        "La plateforme offre des guides pratiques, des modèles de documents administratifs, des vidéos de formation et une bibliothèque de ressources sur l'entrepreneuriat féminin en Guinée.",
      training: "Comment accéder aux formations ?",
      trainingAnswer:
        "Les formations sont accessibles dans la section 'Formation'. Elles couvrent des sujets essentiels comme la gestion financière, le marketing digital et le développement commercial.",
      technical: "Que faire en cas de problème technique ?",
      technicalAnswer:
        "En cas de problème technique, contactez notre équipe support via le formulaire de contact ou par email. Nous nous engageons à répondre sous 24 heures ouvrées.",
      privacy: "Comment mes données sont-elles protégées ?",
      privacyAnswer:
        "Vos données sont sécurisées et traitées conformément aux normes de protection des données. Nous ne partageons jamais vos informations personnelles sans votre consentement explicite.",
      partners: "Comment devenir partenaire du projet ?",
      partnersAnswer:
        "Les organisations souhaitant devenir partenaires peuvent soumettre leur candidature via la section 'Contact'. Nous étudions chaque demande en fonction de l'alignement avec notre mission.",
      funding: "Existe-t-il des opportunités de financement ?",
      fundingAnswer:
        "Oui, la plateforme facilite l'accès à différentes sources de financement : microcrédits, subventions et investissements. Chaque opportunité a ses propres critères d'éligibilité.",
    },
  },
  contact: {
    title: "Contactez-nous",
    description:
      "Prenez contact avec l'équipe Potenti'Elles. Nous sommes là pour vous aider à réussir dans votre parcours entrepreneurial.",
    email: "contact@potentielles.org",
    phone: "+224 XX XX XX XX",
    address: "Conakry, Guinée",
    send: "Envoyer le message",
    success: "Message envoyé avec succès !",
    form: {
      name: "Votre nom",
      email: "Votre email",
      message: "Votre message",
      subject: "Sujet",
    },
    apip: {
      title: "APIP (Agence de Promotion des Investissements Privés)",
      address: "Immeuble Diamond, Cité Chemins de Fer, Kaloum, Conakry",
      phone: "+224 666 30 34 79",
      email: "contact@apip.gov.gn",
      website: "https://apip.gov.gn",
      officeHours: "Lundi à Vendredi: 8h00 - 16h30",
    },
    euDelegation: {
      title: "Délégation de l'Union européenne en Guinée",
      address:
        "Corniche Sud, Madina Dispensaire, Commune de Matam, Conakry, République de Guinée",
      phone:
        "+224 624 94 94 30 / +224 624 94 94 31 / +224 624 94 94 32 / +224 624 94 94 33",
      email: "delegation-guinee-conakry@ec.europa.eu",
      website: "https://www.eeas.europa.eu/guinee",
      officeHours: "Lundi à Jeudi: 8h00 - 17h00, Vendredi: 8h00 - 13h00",
    },
    afd: {
      title: "Agence Française de Développement (AFD)",
      address: "Corniche Sud, Cameroun, BP 1516, Conakry",
      phone: "+224 664 35 02 02",
      email: "afdconakry@afd.fr",
      website: "https://www.afd.fr/fr/page-region-pays/guinee",
      officeHours: "Lundi à Vendredi: 8h00 - 16h30",
    },
  },
  about: {
    title: "À propos de Potenti'Elles",
    description:
      'Le projet "Potenti\'Elles" est une initiative ambitieuse et complète visant à autonomiser économiquement les femmes en Guinée, en leur offrant un accompagnement structuré à travers plusieurs axes stratégiques : renforcement des capacités, accès au financement et soutien au développement des entreprises.',
    keyPartners: "Un projet soutenu par des acteurs clés",
    funding:
      "Ce programme est financé à hauteur de 15 millions d'euros, dont 10 millions d'euros apportés par l'Union Européenne (UE) et 5 millions d'euros par l'Agence Française de Développement (AFD). Ce soutien financier permet de structurer un accompagnement efficace en faveur de l'entrepreneuriat féminin en Guinée, en particulier en Basse-Guinée et en Guinée Forestière.",
    implementation:
      "La mise en œuvre du projet est assurée par l'Agence de Promotion des Investissements Privés (APIP), qui pilote les actions visant à renforcer l'écosystème entrepreneurial féminin et à favoriser l'insertion économique des femmes entrepreneures.",
    digitalPlatform: "Une plateforme numérique comme levier d'autonomisation",
    platformDescription:
      "Parmi les composantes majeures du projet, la plateforme numérique Potenti'Elles constitue un levier essentiel pour la digitalisation de l'entrepreneuriat féminin en Guinée. Conçue pour faciliter l'accès à l'information, aux formations et aux ressources stratégiques, elle joue un rôle clé dans la transformation numérique des entreprises dirigées par des femmes.",
    platformFeatures: "Cette plateforme permet notamment de :",
    features: {
      title: "Fonctionnalités de la plateforme",
      training:
        "• Offrir des formations en ligne pour renforcer la littératie numérique et les compétences entrepreneuriales des femmes",
      financing:
        "• Faciliter l'accès au financement, en mettant en relation les entrepreneures avec des dispositifs d'accompagnement adaptés",
      networking:
        "• Créer des opportunités de réseautage, en connectant les femmes entrepreneures à des partenaires, mentors et investisseurs",
      professionalization:
        "• Structurer et professionnaliser les entreprises féminines, en fournissant des outils pratiques pour leur gestion et leur développement",
    },
    ecosystem: "Un écosystème au service des femmes entrepreneures",
    conclusion:
      "Grâce à la synergie entre le financement de l'UE et de l'AFD, et la mise en œuvre par l'APIP, Potenti'Elles ambitionne de transformer durablement le paysage entrepreneurial féminin en Guinée. Ce projet repose sur une approche intégrée combinant accompagnement terrain et solutions numériques, afin de créer un environnement inclusif et favorable à l'épanouissement des femmes entrepreneures guinéennes.",
  },
};

export default fr;
