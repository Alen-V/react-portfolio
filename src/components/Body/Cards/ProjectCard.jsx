import { projects } from '../../../assets/projects/projects'
import { Link } from "react-router-dom";

const ProjectCard = ({changePage}) => {
    const openProject = (url) => {
        window.open(url, '_blank').focus()
    }
    
    const goContact = (page) => {
        if ( changePage ) {
            changePage(page)
        }
    }

    const projectPage = (
        <div className={'projects-container border-bottom'}>
            <div className="description">
                <span>Projects</span>
            </div>
            <div className="projects">
                {projects.map( project => (
                    <div key={project.id} className={"project-item " + project.image}>
                        <div className="project-animate">
                            <span className={'project-description'}>
                                <div className={'project-name'}>
                                    {project.name}
                                </div>
                                {project.isDomain ?
                                    <Link className='project-button' to={`/${project.url}/`}>View Project</Link>
                                    :
                                    <div onClick={() => openProject(project.url)} className={'project-button'}>
                                        <span>View Project</span>   
                                    </div>  
                                }
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

    const projectContact = (
        <div className={'project-contact-info'}>
            <div className="project-idea">
                <div>
                    <span>Have a project idea ?</span>
                </div>
                <div>
                    <span>Let's work together</span>
                </div>
            </div>
            <div className="contact-me" onClick={() => goContact(3)}>
                <span>contact me</span>
            </div>
        </div>
    )

    return (
        <>
            {projectPage}
            {projectContact}
        </>
    )
}

export default ProjectCard