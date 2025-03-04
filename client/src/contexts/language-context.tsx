import { createContext, useContext, useState, ReactNode } from 'react';
import { translations, Language, DEFAULT_LANGUAGE } from '@/i18n/translations';

type LanguageContextType = {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.fr;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    return (localStorage.getItem('selectedLanguage') as Language) || DEFAULT_LANGUAGE;
  });

  const setLanguage = (lang: Language) => {
    localStorage.setItem('selectedLanguage', lang);
    setCurrentLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      setLanguage,
      t: translations[currentLanguage],
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
