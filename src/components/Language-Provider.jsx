import { createContext, useState, useContext } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('fr');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'fr' ? 'en' : 'fr'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
