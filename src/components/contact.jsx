import Background2 from '../assets/images/Group3.webp'
import { useLanguage } from './Language-Provider';

function Contact() {
    const { language } = useLanguage();

    return(
        <>
        <div className="contact" id="contact">
            <div className='contact__info'>
                <h2>{language === 'fr' ? 'Me contacter' : 'Contact me'}</h2>
                <p className="my-mail">dobybruce@gmail.com</p>
                <div className='net__links'>
                    <a href="https://www.linkedin.com/in/bruce-doby-67126a2b7/" target="_blank" rel="noopener noreferrer"><i className="devicon-linkedin-plain"></i></a>
                    <a href="https://github.com/BruceDoby" target="_blank" rel="noopener noreferrer"><i className="devicon-github-original"></i></a>
                </div>
                <a href='/cv.txt' download className='contact__button'>{language === 'fr' ? 'Télécharger mon CV' : 'Download my CV'}</a>
            </div>
            <div className='background2'>
                <img src={Background2} alt='background' width="1440" height="730" loading="lazy"></img>
            </div>
        </div>
        </>
    )
}

export default Contact

// Simple ajout de la langue pour opérer les changement de texte en fonction de la langue