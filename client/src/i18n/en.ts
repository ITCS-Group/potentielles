export type Language = 'en' | 'fr';

export const en = {
  common: {
    welcome: "Welcome to Potenti'Elles",
    home: "Home",
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
    about: "About",
    faq: "FAQ",
    contact: "Contact",
    menu: "Menu",
    userMenu: {
      profile: "Profile",
      settings: "Settings",
      users: "Users",
      logout: "Logout"
    }
  },
  roles: {
    entrepreneur: "Entrepreneur",
    apip: "APIP Admin",
    support_org: "Support Organization",
    donor: "Donor",
    description: {
      entrepreneur: "Access resources and support for your business",
      apip: "Manage platform and review projects",
      support_org: "Provide mentoring and support",
      donor: "Track impact and view reports"
    }
  },
  features: {
    projectManagement: "Project Management",
    projectManagementDesc: "Track and manage your business projects with ease",
    support: "Support Network",
    supportDesc: "Connect with mentors and support organizations",
    progress: "Progress Tracking",
    progressDesc: "Monitor your business growth and achievements"
  },
  auth: {
    loginTitle: "Login to your account",
    registerTitle: "Create your account",
    alreadyHaveAccount: "Already have an account?",
    dontHaveAccount: "Don't have an account?",
    forgotPassword: "Forgot your password?",
    joinPotentielles: "Join Potenti'Elles Guinea",
    empoweringStatement: "Supporting female entrepreneurs in Guinea through digital innovation and community empowerment",
    supportMentoring: "Business development support and personalized mentoring",
    accessResources: "Access to digital training and resources in local languages",
    connectOrganizations: "Direct connection with APIP and support organizations",
    progressTracking: "Track your business growth and impact metrics",
    selectRole: "Select a role",
    demoAccounts: "Demo accounts:",
    demoEntrepreneur: "Entrepreneur: username 'entrepreneur' / password 'demo123'",
    demoApip: "APIP Admin: username 'apip' / password 'demo123'",
    demoSupport: "Support Org: username 'support' / password 'demo123'",
    demoDonor: "Donor: username 'donor' / password 'demo123'"
  },
  landing: {
    heroText: "Your support platform for women entrepreneurs in Guinea",
    joinButton: "Join the platform",
    impact: "Our Impact",
    impactDesc: "Comprehensive support for women's entrepreneurship development",
    stats: {
      entrepreneurs: "Women entrepreneurs supported",
      projects: "Funded projects",
      regions: "Regions covered"
    }
  },
  dashboard: {
    overview: "Overview",
    projects: "Projects",
    surveys: "Surveys",
    activities: "Activities",
    metrics: "Metrics",
    resources: "Resources",
    menu: "Menu",
    welcome: "Welcome back",
    stats: {
      total: "Total",
      active: "Active",
      completed: "Completed"
    }
  },
  admin: {
    users: "User Management",
    projects: "Project Review",
    surveys: "Surveys Management",
    analytics: "Analytics",
    settings: "Settings",
    userCount: "Total users",
    projectCount: "Projects to review",
    settingsDesc: "Configure platform settings and general preferences",
    settingsTitle: "Platform Settings",
    overview: {
      title: "Admin Dashboard",
      description: "Manage users, projects, and platform settings"
    }
  },
  mentors: {
    mentees: "My Mentees",
    chat: "Chat",
    totalMentees: "Number of mentees",
    messagePreview: "Chat feature coming soon",
    communication: "Communication",
    progress: "Progress Tracking",
    schedule: "Schedule a Meeting"
  },
  donors: {
    reports: "Reports",
    success: "Success Stories",
    impactOverview: "Impact Overview",
    totalFunded: "Total projects funded",
    impactReports: "Project Impact Reports",
    reportsDesc: "Detailed impact reports will be available here",
    storiesDesc: "Success stories from our entrepreneurs will be shared here",
    donationHistory: "Donation History",
    projectTracking: "Project Tracking"
  },
  projects: {
    name: "Project Name",
    description: "Project Description",
    new: "New Project",
    create: "Create Project",
    details: "Project Details",
    list: "Projects List",
    status: "Status",
    submit: "Submit Project",
    success: "Project created successfully",
    error: "Error creating project"
  },
  resources: {
    title: "Resources",
    entrepreneurshipGuide: {
      title: "Entrepreneurship Guide",
      description: "Comprehensive guide to starting and growing your business"
    },
    documentTemplates: {
      title: "Document Templates",
      description: "Ready-to-use business document templates"
    },
    videoTraining: {
      title: "Video Training",
      description: "Educational videos on business management and entrepreneurship"
    }
  },
  faq: {
    title: "Frequently Asked Questions",
    description: "Find answers to common questions about Potenti'Elles platform and services.",
    questions: {
      account: "How do I create an account?",
      accountAnswer: "Click the 'Register' button in the top right of the homepage. Fill out the form with your information and select your role.",
      roles: "What are the different roles on the platform?",
      rolesAnswer: "The platform offers different roles: Entrepreneur, APIP, Support Organization, and Donor. Each role has specific features tailored to their needs.",
      support: "What type of support is available?",
      supportAnswer: "We offer comprehensive support including: personalized mentoring, business management training, access to documentary resources, and networking with industry experts.",
      mentoring: "How does the mentoring system work?",
      mentoringAnswer: "Mentoring connects an entrepreneur with an experienced professional. Sessions can be online or in-person, depending on availability. The mentor guides the entrepreneur in their professional development.",
      resources: "What resources are available on the platform?",
      resourcesAnswer: "The platform offers practical guides, administrative document templates, training videos, and a library of resources on women's entrepreneurship in Guinea.",
      training: "How do I access the training?",
      trainingAnswer: "Training is accessible in the 'Training' section. They cover essential topics such as financial management, digital marketing, and business development.",
      technical: "What should I do in case of technical issues?",
      technicalAnswer: "In case of technical issues, contact our support team via the contact form or email. We commit to responding within 24 business hours.",
      privacy: "How is my data protected?",
      privacyAnswer: "Your data is secured and processed in accordance with data protection standards. We never share your personal information without your explicit consent.",
      partners: "How can I become a project partner?",
      partnersAnswer: "Organizations wishing to become partners can submit their application through the 'Contact' section. We review each request based on alignment with our mission.",
      funding: "Are there funding opportunities?",
      fundingAnswer: "Yes, the platform facilitates access to different funding sources: microcredits, grants, and investments. Each opportunity has its own eligibility criteria."
    }
  },
  contact: {
    title: "Contact Us",
    description: "Get in touch with the Potenti'Elles team. We're here to help you succeed in your entrepreneurial journey.",
    email: "contact@potentielles.org",
    phone: "+224 XX XX XX XX",
    address: "Conakry, Guinea",
    send: "Send Message",
    success: "Message sent successfully!",
    form: {
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      subject: "Subject"
    },
    apip: {
      title: "APIP (Private Investment Promotion Agency)",
      address: "Immeuble Diamond, Cité Chemins de Fer, Kaloum, Conakry",
      phone: "+224 666 30 34 79",
      email: "contact@apip.gov.gn",
      website: "https://apip.gov.gn",
      officeHours: "Monday to Friday: 8:00 - 16:30"
    },
    euDelegation: {
      title: "European Union Delegation in Guinea",
      address: "Corniche Sud, Madina Dispensaire, Commune de Matam, Conakry, République de Guinée",
      phone: "+224 624 94 94 30 / +224 624 94 94 31 / +224 624 94 94 32 / +224 624 94 94 33",
      email: "delegation-guinee-conakry@ec.europa.eu",
      website: "https://www.eeas.europa.eu/guinee",
      officeHours: "Monday to Thursday: 8:00 - 17:00, Friday: 8:00 - 13:00"
    },
    afd: {
      title: "French Development Agency (AFD)",
      address: "Corniche Sud, Cameroun, BP 1516, Conakry",
      phone: "+224 664 35 02 02",
      email: "afdconakry@afd.fr",
      website: "https://www.afd.fr/fr/page-region-pays/guinee",
      officeHours: "Monday to Friday: 8:00 - 16:30"
    }
  },
  about: {
    title: "About Potenti'Elles",
    description: "The Potenti'Elles project is an ambitious and comprehensive initiative aimed at economically empowering women in Guinea through structured support across several strategic areas: capacity building, access to financing, and business development support.",
    keyPartners: "A Project Supported by Key Partners",
    funding: "The Republic of Guinea has received funding of EUR 15 million, with EUR 10 million from the European Union (EU) and EUR 5 million from the French Development Agency (AFD). This financial support enables structured assistance for women's entrepreneurship in Guinea, particularly in Lower Guinea and Forest Guinea.",
    implementation: "The project implementation is managed by the Private Investment Promotion Agency (APIP), which oversees actions aimed at strengthening the female entrepreneurial ecosystem and promoting the economic integration of women entrepreneurs.",
    digitalPlatform: "A Digital Platform as a Lever for Empowerment",
    platformDescription: "Among the major components of the project, the Potenti'Elles digital platform is an essential lever for the digitalization of female entrepreneurship in Guinea. Designed to facilitate access to information, training, and strategic resources, it plays a key role in the digital transformation of women-led businesses.",
    platformFeatures: "This platform specifically enables:",
    features: {
      title: "Platform Features",
      training: "• Provide online training to enhance digital literacy and entrepreneurial skills for women",
      financing: "• Facilitate access to financing by connecting entrepreneurs with appropriate support mechanisms",
      networking: "• Create networking opportunities by connecting women entrepreneurs with partners, mentors, and investors",
      professionalization: "• Structure and professionalize women's businesses by providing practical tools for their management and development"
    },
    ecosystem: "An Ecosystem Serving Women Entrepreneurs",
    conclusion: "Thanks to the synergy between EU and AFD funding, and implementation by APIP, Potenti'Elles aims to sustainably transform the female entrepreneurial landscape in Guinea. This project is based on an integrated approach combining field support and digital solutions to create an inclusive and favorable environment for Guinean women entrepreneurs."
  },
  surveys: {
    title: "Surveys",
    businessTitle: "Business Development Survey",
    businessDescription: "Answer questions about your business development and needs.",
    newSurvey: "New Survey",
    submit: "Submit Survey",
    responses: "Survey Responses",
  }
};

export default en;