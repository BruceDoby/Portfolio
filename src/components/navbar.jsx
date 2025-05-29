import { useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useLanguage } from './Language-Provider';
import Overlay from './overlay';

function NavBar({ isOpen, toggleNavbar }) {
  const navbarRef = useRef(null);

  const { language } = useLanguage();

  useEffect(() => {
    if (navbarRef.current) {
      navbarRef.current.style.right = isOpen ? '0' : '-250px';
    }
  }, [isOpen]);

  return (
    <>
    {isOpen && <Overlay toggleNavbar={toggleNavbar} />}

    <nav className="navbar" ref={navbarRef}>
      <i className="fa-solid fa-xmark" onClick={toggleNavbar}></i>
      <ul>
        <li><Link to="about" smooth={true} duration={200} onClick={toggleNavbar}>{language === 'fr' ? 'À mon propos' : 'About me'}</Link></li>
        <li><Link to="formations" smooth={true} duration={200} onClick={toggleNavbar}>Formations</Link></li>
        <li><Link to="projects" smooth={true} duration={200} onClick={toggleNavbar}>{language === 'fr' ? 'Projets' : 'Projects'}</Link></li>
        <li><Link to="contact" smooth={true} duration={200} onClick={toggleNavbar}>Contact</Link></li>
      </ul>
    </nav>
    </>
  );
}

export default NavBar;

// useRef va servir à pointer un élément spécifique du DOM, useEffect exécute une action quand un état change (ici Open) et link bient de
// react-scroll et permet de scroller doucement vers une section spécifique
// isOpen et toggleNavbar viennent du parent (app.jsx), on va ensuite pointer vers la balise nav mais on défini useRef à null par défaut
// pour pointer nav uniquement lorsqu'il est rendu dans le DOM (car avant c'est unpeu comme si il n'existait pas, donc on ne pourrait pas
// avoir d'effet sur lui, notamment pour changer sa position)
// le useEffect va s'occuper de faire passer le navbar de droite à gauche pour le faire apparaitre sur l'écran en fonction de si l'on
// a cliqué pour l'ouvrir ou non, en vérifiant d'abord que navbarRef.curent existe bien pour être sûr que nav a donc été rendu au DOM
// et en finissant avec un dernier isOpen à la fin pour que la fonction puisse s'executer chaque fois qu'un changement s'opère avec isOpen
// On affiche ou non l'overlay si la navbar est ouverte, et on ferme la navbar au clic sur l'overlay ou sur la croix
// la navbar se referme également toute seul lorsque l'on a cliqué sur un des liens dans la navbar, duration correspond à la durée du scroll