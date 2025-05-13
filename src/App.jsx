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
        <img src={BackgroundImage} alt='Background image'></img>
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
