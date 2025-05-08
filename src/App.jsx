import './assets/style/style.css'
import Header from './Header'
import Footer from './Footer'
import BackgroundImage from './assets/images/Rectangle12.webp'
import About from './components/about'
import Formations from './components/formations'
import Contact from './components/contact'
import Stack from './components/stack'
import Projects from './components/project'

function App() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <Header />
    <main>
      <div className='presentation'>
        <p className='Logo'>Bruce DOBY</p>
        <h1>&gt; Intégrateur web</h1>
        <button onClick={handleScrollToContact}>Me contacter</button>
      </div>
      <Stack />
      <div className='background'>
        <img src={BackgroundImage} alt='Background image'></img>
      </div>
      <About />
      <Formations />
      <Projects />
      <Contact />
    </main>
    <Footer />
    </>
  )
}

export default App
