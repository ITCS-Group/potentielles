import { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '@/i18n/index';
import en from '@/i18n/en';
import fr from '@/i18n/fr';

const translations = { en, fr };
export const DEFAULT_LANGUAGE: Language = "fr";

type LanguageContextType = {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: typeof en;
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