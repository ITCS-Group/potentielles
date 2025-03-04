export const translations = {
  en: {
    common: {
      welcome: "Welcome to Potenti'Elles",
      login: "Login",
      register: "Register",
      logout: "Logout",
      email: "Email",
      password: "Password",
      username: "Username",
      fullName: "Full Name",
      role: "Role",
      submit: "Submit",
      cancel: "Cancel",
      save: "Save",
      delete: "Delete",
      edit: "Edit",
      loading: "Loading...",
      error: "An error occurred",
      success: "Success!",
      newProject: "New Project",
      profile: "Profile",
      about: "About"
    },
    roles: {
      entrepreneur: "Entrepreneur",
      apip: "APIP",
      support_org: "Support Organization",
      donor: "Donor",
    },
    dashboard: {
      overview: "Overview",
      projects: "Projects",
      surveys: "Surveys",
      activities: "Activities",
      metrics: "Metrics",
      resources: "Resources"
    },
    admin: {
      users: "User Management",
      projects: "Project Review",
      surveys: "Surveys Management",
      analytics: "Analytics",
      settings: "Settings",
      userCount: "Total users",
      projectCount: "Projects to review"
    },
    mentors: {
      mentees: "My Mentees",
      chat: "Chat",
      totalMentees: "Number of mentees",
      messagePreview: "Chat feature coming soon"
    },
    donors: {
      reports: "Reports",
      success: "Success Stories",
      impactOverview: "Impact Overview",
      totalFunded: "Total projects funded",
      impactReports: "Project Impact Reports",
      reportsDesc: "Detailed impact reports will be available here",
      storiesDesc: "Success stories from our entrepreneurs will be shared here"
    },
    features: {
      projectManagement: "Project Management",
      projectManagementDesc: "Track and manage your business projects with ease",
      support: "Support Network",
      supportDesc: "Connect with mentors and support organizations",
      progress: "Progress Tracking",
      progressDesc: "Monitor your business growth and achievements",
    },
    landing: {
      heroText: "Join our platform dedicated to supporting and empowering female entrepreneurs in Guinea. Track your progress, connect with support organizations, and grow your business.",
      joinButton: "Join Now",
      impact: "Our Impact",
      impactDesc: "Supporting female entrepreneurs in Guinea through digital innovation",
      stats: {
        entrepreneurs: "Entrepreneurs supported",
        projects: "Projects funded",
        regions: "Regions covered"
      }
    }
  },
  fr: {
    common: {
      welcome: "Bienvenue sur Potenti'Elles",
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
      about: "À propos"
    },
    roles: {
      entrepreneur: "Entrepreneure",
      apip: "APIP",
      support_org: "Organisation de soutien",
      donor: "Donateur",
    },
    dashboard: {
      overview: "Vue d'ensemble",
      projects: "Projets",
      surveys: "Enquêtes",
      activities: "Activités",
      metrics: "Métriques",
      resources: "Ressources"
    },
    admin: {
      users: "Gestion des utilisateurs",
      projects: "Révision des projets",
      surveys: "Gestion des enquêtes",
      analytics: "Analyses",
      settings: "Paramètres",
      userCount: "Total des utilisateurs",
      projectCount: "Projets à examiner"
    },
    mentors: {
      mentees: "Mes mentorés",
      chat: "Discussion",
      totalMentees: "Nombre de mentorés",
      messagePreview: "La fonctionnalité de chat sera bientôt disponible"
    },
    donors: {
      reports: "Rapports",
      success: "Histoires de réussite",
      impactOverview: "Aperçu de l'impact",
      totalFunded: "Total des projets financés",
      impactReports: "Rapports d'impact des projets",
      reportsDesc: "Les rapports d'impact détaillés seront disponibles ici",
      storiesDesc: "Les histoires de réussite de nos entrepreneurs seront partagées ici"
    },
    features: {
      projectManagement: "Gestion de Projets",
      projectManagementDesc: "Suivez et gérez vos projets d'entreprise facilement",
      support: "Réseau de Soutien",
      supportDesc: "Connectez-vous avec des mentors et des organisations de soutien",
      progress: "Suivi des Progrès",
      progressDesc: "Surveillez la croissance et les réalisations de votre entreprise",
    },
    landing: {
      heroText: "Rejoignez notre plateforme dédiée au soutien et à l'autonomisation des femmes entrepreneures en Guinée. Suivez vos progrès, connectez-vous avec des organisations de soutien et développez votre entreprise.",
      joinButton: "Rejoindre",
      impact: "Notre Impact",
      impactDesc: "Accompagnement des femmes entrepreneures en Guinée par l'innovation numérique",
      stats: {
        entrepreneurs: "Entrepreneures accompagnées",
        projects: "Projets financés",
        regions: "Régions couvertes"
      }
    }
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;

export const DEFAULT_LANGUAGE: Language = "fr";