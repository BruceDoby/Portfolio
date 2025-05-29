import { useLanguage } from "../components/Language-Provider";

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button className='language__button' onClick={toggleLanguage}>
        {language === 'fr' ? 'Français' : 'English'}
    </button>
  );
}

export default LanguageToggle;

// On importe useLanguage, qui nous donne la langue actuelle et la fonction pour changer de langue qu'on récupère dans la const, ainsi quand
// on clique sur le bouton en bas (qui est retourné) on appelle togglelanguage qui permet de changer la langue et le texte du bouton en
// fonction de celle ci en comparant simplement la langue actuelle