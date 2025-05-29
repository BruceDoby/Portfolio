import './assets/style/style.css'
import Header from './Header'
import Footer from './Footer'
import BackgroundImage from './assets/images/Rectangle12.webp'
import About from './components/about'
import Formations from './components/formations'
import Contact from './components/contact'
import Stack from './components/stack'
import Projects from './components/project'
import NavBar from './components/navbar'
import { Element } from 'react-scroll'
import { useState } from 'react';
import { useLanguage } from './components/Language-Provider'

function App() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen((prevState) => !prevState);
  };

  const { language } = useLanguage();

  return (
    <>
    <Header toggleNavbar={toggleNavbar} />
    <NavBar isOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
    <main>
      <div className='presentation'>
        <p className='Logo'>Bruce DOBY</p>
        <h1>{language === 'fr' ? '> Intégrateur Web' : '> Web Integrator'}</h1>
        <button onClick={handleScrollToContact}>
          {language === 'fr' ? 'Me contacter' : 'Contact me'}
        </button>
      </div>
      <Stack />
      <div className='background'>
        <img src={BackgroundImage} alt='Background image' width="1440" height="730" fetchPriority="high"></img>
      </div>
      <Element name="about">
        <About />
      </Element>
      <Element name="formations">
        <Formations />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </main>
    <Footer />
    </>
  )
}

export default App

// On importe Element venant de react-scroll permettant de marquer une section pour que l'on puisse y scroller
// La fonction handleScrollContact va permettre de scroller jusqu'à la section contact lors de l'appui sur le bouton Contact, on récupère
// ainsi l'élément au sein du DOM avec le get by id, on vérifie qu'il existe et si c'est le cas, on scroll doucement vers celui-ci,
// on place ensuite la fonction au sein du bouton avec un onClick pour qu'elle se produit lorsque l'on clique sur l'élément
// la const isNavbaropen va permettre de mémoriser si la navbar est ouverte ou fermée, on la rend par défaut fermé avec le false et ça
// passera à true lorsque la navbar sera ouverte
// la const toggleNavbar va permettre d'inverser l'état de la navbar, la passant d'ouverte à fermer et inversement (l'ajout du ! signifiant
// not permet cela), on passe ensuite cette fonction en un onClick (correspondant également à togglenavbar à cause de la prop passé depuis
// le header) ce qui permet d'ouvrir ou de fermer la navbar au clique sur l'élément sélectionné du header (le burger)
// On passe également l'état isNavbarOpen à la navbar pour que la navbar sache si elle doit être affiché ou fermée