'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { translations, Locale, Translations } from './translations';

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'it',
  t: translations.it,
  toggleLocale: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('it');

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === 'it' ? 'en' : 'it'));
  }, []);

  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, t, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
