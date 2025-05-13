import Slider from "./slider"
import Data from '../data/data-projects.json'
import { useContext } from "react"
import { LanguageContext } from "./Language-Provider";

function Projects() {
    const { language } = useContext(LanguageContext);

    const projects = Data[language] || [];

    const allImages = projects.flatMap(projet => projet.images);

    return(
        <>
        <div className="projects" id="projects">
            <div className="project__pres">
                <h1>{language === 'fr' ? 'Projets' : 'Projects'}</h1>
                <p>
                    {language === 'fr' 
                        ? "Courte présentation des projets que j'ai réalisé durant ma formation OpenClassroom : " 
                        : "A brief presentation of the projects I did during my OpenClassroom training : "
                    }
                </p>
            </div>
            <Slider images={allImages} />
            <div className="project__blocs">
            {projects.map((item) => (
                    <div key={item.id} className='project'>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p>{language === 'fr' ? 'Compétences : ' : 'Skills : '} {item.technologies.join(', ')}</p>
                        <a href={item.github}>{language === 'fr' ? 'Lien vers le repo Github' : 'Link to the Github repository'}</a>
                    </div>
            ))}
            </div>
        </div>
        </>
    )
}

export default Projects