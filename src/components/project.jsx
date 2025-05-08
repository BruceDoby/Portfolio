import Slider from "./slider"
import Data from '../data/data-projects.json'

function Projects() {
    const allImages = Data.flatMap(projet => projet.images);

    return(
        <>
        <div className="projects">
            <div className="project__pres">
                <h1>Projets</h1>
                <p>Courte présentation des projets que j'ai réalisé durant ma formation OpenClassroom : </p>
            </div>
            <Slider images={allImages} />
            <div className="project__blocs">
            {Data.map((item) => (
                    <div key={item.id} className='project'>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p>Compétences : {item.technologies.join(', ')}</p>
                        <a href={item.github}>Lien vers le repo Github</a>
                    </div>
            ))}
            </div>
        </div>
        </>
    )
}

export default Projects