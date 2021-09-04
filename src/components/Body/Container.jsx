import React from 'react'
import './Container.css'
import { projects } from '../../projects/projects'

const Container = ({width, activePage, rightSideBarOpen}) => {
    const shortDescription = ( 
        <div className="info-container">
            <span>
                <a href="#contact">Alen Vatic</a>
                <span>full stack developer</span>
            </span>
        </div>
    )
    const workExperience = (
        <div className={'work-experience border-bottom'}>
            <div className={'description'}><span>work experience</span></div>
            <div className={'description-container'}>
                <div className={'description-item'}>
                    Freelance
                    <div className={'timeline'}>
                        <span>From: 01/05/2019 - current</span>
                    </div>
                    {/* <div>
                        <span>Front End oriented</span>
                    </div> */}
                </div>
                <div className={'description-item'}>
                    Keep IT Simple
                    <div className={'timeline'}>
                        <span>From: 01/08/2020 - current</span>
                    </div>
                    {/* <div>
                        <span>Front End oriented</span>
                    </div> */}
                </div>
            </div>
        </div>
    )
    const educationContainer = (
        <div className={'education-container border-bottom'}>
            <div className={'description'}>
                <span>Education</span>
            </div>
            <div className={'description-container'}>
                <div className="description-item">
                    Seavus Education and Development Center
                    <div className="timeline">
                        <span>From: 15/10/2019 - 15/10/2020</span>
                    </div>
                    <div>
                        <div className="timeline">Coursework - Html, CSS, JavaScript, C#, MySQL, Angular 2+</div>
                        <a href="https://www.sedc.mk/" target={'_blank'} rel={'noreferrer'}>sedc.mk</a>
                    </div>
                </div>
                <div className="description-item">
                    Web development courses
                    <div className="timeline">
                        <span>From: 10/07/2017 - 10/08/2018</span>
                    </div>
                    <div>
                        <span>Coursework - Html, CSS, JavaScript, Git, ReactJS</span>
                    </div>
                </div>
            </div>
        </div>
    )
    const refferences = (
        <div className={'refferences-container'}>
            <div className={'description'}>
                <span>
                    Refferences
                </span>
            </div>
            <div className={'description-container'}>
                <div className="description-item">
                    Dragan Gelevski from WSAudiology
                    <div className="timeline">
                        <div>
                            <span>
                                Email:
                                <a href="mailto: gdragan6@gmail.com"> gdragan6@gmail.com</a>
                            </span>
                        </div>
                        <div>
                            <span>
                                LinkedIn:
                                <a href="https://www.linkedin.com/in/dragan-gelevski" target="_blank" rel="noreferrer"> linkedin.com/in/dragan-gelevski</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="description-item">
                Shqipdon Selmani from Slice 
                    <div className="timeline">
                        <div>
                            <span>
                                Email:
                                <a href="mailto: selmani.sq@gmail.com"> selmani.sq@gmail.com</a>
                            </span>
                        </div>
                        <div>
                            <span>
                                LinkedIn:
                                <a href="https://www.linkedin.com/in/shqipdonselmani" target="_blank" rel="noreferrer"> linkedin.com/in/shqipdonselmani</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    const projectPage = (
        <div className={'projects-container border-bottom'}>
            <div className="description">
                <span>Projects</span>
            </div>
            <div className="projects">
                {projects.map( project => (
                    <div className={"project-item " + project.image}>
                        <div className="project-animate">
                            <span className={'project-description'}>
                                <div className={'project-name'}>
                                    {project.name}
                                </div>
                                <div className={'project-button'}>
                                    <span onClick={() => {openProject(project.url)}}>View Project</span>   
                                </div>                                
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
            <div className="contact-me">
                <span>contact me</span>
            </div>
        </div>
    )

    const openProject = (url) => {
        window.open(url, '_blank').focus()
    }
    const containerMain = (
        <div className={`main-page ${rightSideBarOpen ? 'open' : 'closed'}`}>
            <div className={'page-container'}>
                <div id="home" className={`page ${activePage === 0 ? 'active' : 'inactive'}`}>
                    {shortDescription}
                    {workExperience}
                    {educationContainer}
                    {refferences}
                </div>
                <div id="projects" className={`page ${activePage === 1 ? 'active' : 'inactive'}`}>
                    {projectPage}
                    {projectContact}
                </div>
                <div id="about" className={`page ${activePage === 3 ? 'active' : 'inactive'}`}>
                    <span>aboutsss</span>
                </div>
                <div id="contact" className={`page ${activePage === 4 ? 'active' : 'inactive'}`}>
                    <span>skills</span>
                </div>
            </div>
        </div>
    )
    return containerMain
}

export default Container