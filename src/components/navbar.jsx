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
