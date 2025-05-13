// import { useState } from 'react';
import { LanguageProvider, useLanguage } from '../components/Language-Provider';
import LanguageToggle from '../functions/LanguageToggle';

function Header({ toggleNavbar }) {
    const { language, toggleLanguage } = useLanguage();

    return(
        <header>
            <LanguageToggle />
            <i className="fa-solid fa-bars" onClick={toggleNavbar}></i>
        </header>
    )
}

export default Header