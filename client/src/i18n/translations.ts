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
    },
    auth: {
      loginTitle: "Login to your account",
      registerTitle: "Create your account",
      alreadyHaveAccount: "Already have an account?",
      dontHaveAccount: "Don't have an account?",
      forgotPassword: "Forgot your password?",
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
    },
    auth: {
      loginTitle: "Connectez-vous à votre compte",
      registerTitle: "Créez votre compte",
      alreadyHaveAccount: "Vous avez déjà un compte ?",
      dontHaveAccount: "Vous n'avez pas de compte ?",
      forgotPassword: "Mot de passe oublié ?",
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
    }
  },
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;

export const DEFAULT_LANGUAGE: Language = "fr";