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