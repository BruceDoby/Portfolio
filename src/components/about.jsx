import data from '../data/data-about.json'
import { useLanguage } from './Language-Provider'

function About() {
    const { language } = useLanguage();
    const content = data[language][0];

    return(
        <>
        <div className="about" id="about">
            <h2>{content.title}</h2>
            {content.paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
            ))}
        </div>
        </>
    )
}

export default About

// Comme vu auparavant, récupération de la langue et de la fonction de changement de langue dans la 1ere const
// La 2e const permets de choisir le contenu du fichier JSON correspondant à la langue actuelle, on affiche ensuite tout les paragraphes
// avec .map en parcourant le tableau des paragraphes existant