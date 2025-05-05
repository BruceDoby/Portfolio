import './assets/style/style.css'
import Header from './Header'
import Footer from './Footer'
import BackgroundImage from './assets/images/Rectangle12.png'
import About from './components/about'

function App() {

  return (
    <>
    <Header />
    <main>
      <div className='presentation'>
        <p className='Logo'>Bruce DOBY</p>
        <h1>Intégrateur web</h1>
        <button>Me contacter</button>
      </div>
      <div className='background'>
        <img src={BackgroundImage} alt='Background image'></img>
      </div>
    </main>
    <About />
    <Footer />
    </>
  )
}

export default App
