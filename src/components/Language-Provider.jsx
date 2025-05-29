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

// CreateContexte crée un contexte react, càd une boîte partagée entre les composants, useState gère l'état du composant, useContext 
// d'accéder au contexte
// On crée ensuite le contexte en tant que LanguageContext et on crée le composant LanguageProvider, on établi ensuite l'état de la langue
// en tant que "fr", setLanguage dans la const toggleLanguage va permettre de savoir si la langue actuelle est français ou anglais et ainsi
// de la changer, on renvoie ensuite le composant enfant à l'intérieur du provider en lui partageant la langue et la fonction pour changer
// la langue, tout les composants à l'intérieur peuvent ainsi accéder et modifier la langue
// On exporte ensuite useLanguage qui permettra d'utiliser le context plus rapidement et simplement dans les autres composants en accédant
// directement aux valeurs du contexte que sont language et togglelanguage