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