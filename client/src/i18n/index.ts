import en from './en';
import fr from './fr';

export type Language = 'en' | 'fr';
export type Translation = typeof en;

export const translations = {
  en,
  fr
};

export const DEFAULT_LANGUAGE: Language = "fr";
