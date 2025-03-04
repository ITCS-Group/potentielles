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
    roles: {
      entrepreneur: "Entrepreneur",
      apip: "APIP",
      support_org: "Support Organization",
      donor: "Donor",
    },
    features: {
      projectManagement: "Project Management",
      projectManagementDesc: "Track and manage your business projects with ease",
      support: "Support Network",
      supportDesc: "Connect with mentors and support organizations",
      progress: "Progress Tracking",
      progressDesc: "Monitor your business growth and achievements",
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
    roles: {
      entrepreneur: "Entrepreneure",
      apip: "APIP",
      support_org: "Organisation de soutien",
      donor: "Donateur",
    },
    features: {
      projectManagement: "Gestion de Projets",
      projectManagementDesc: "Suivez et gérez vos projets d'entreprise facilement",
      support: "Réseau de Soutien",
      supportDesc: "Connectez-vous avec des mentors et des organisations de soutien",
      progress: "Suivi des Progrès",
      progressDesc: "Surveillez la croissance et les réalisations de votre entreprise",
    }
  },
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;

export const DEFAULT_LANGUAGE: Language = "fr";