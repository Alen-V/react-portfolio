import React from 'react'
import './Container.css'
import { projects } from '../../projects/projects'
import portfolioImg from '../../assets/images/portfolio-image.jpg'

const Container = ({width, activePage}) => {
    const homePage = ( 
            <>
                <div className="info-container">
                    {width > 480 ? null : <div className={'image-container'}>
                        <img src={portfolioImg} alt="portfolio" />
                        </div>}
                    <span>
                        <a href="#contact">Alen Vatic</a>
                        <span>full stack developer</span>
                    </span>
                </div>
            </>
    )
    const aboutInfo = (
        <div className="about-info">
            <h2>Skills & Experience</h2>
                <p>Dedicated and efficient full stack developer with 2 years experience.</p>
                <p>Certified in both F/E and B/E technologies, { width < 480 ? <br/> : null }F/E Heavy oriented.</p>
                <p>Building applications in both Angular2+ and React.</p>
                <p>Been developing and maintaining betting websites for over a year.</p>
        </div>
    )
    const skills = (
        <div className="skills-container">
            <div><i className="fab fa-js-square"></i><p>JS / TS</p></div>
            <div><i className="fab fa-angular"></i> <p>Angular 2+</p></div>
            <div><i className="fab fa-react"></i><p>React</p></div>
            <div><i className="fab fa-git-alt"></i> <p>Git</p></div>
            <div><i className="fab fa-node"></i><p>node</p></div>
            <div><i className="fab fa-html5"></i> <p>Html5</p></div>
            <div><i className="fab fa-css3-alt"></i> <p>CSS</p></div>
            <div><i className="fas fa-database"></i><p>API</p></div>
            <div><i className="fab fa-sass"></i> <p>SASS/SCSS</p></div>
            <div><i className="fab fa-bootstrap"></i> <p>Bootstrap</p></div>
            <div><i className="fab fa-figma"></i><p>Figma</p></div>
        </div>
    )
    const skillsPage = (
        <>
            <div className="empty-container"></div>
            {aboutInfo}
            {skills}
        </>
    )
    const openProject = (url) => {
        window.open(url, '_blank').focus()
    }
    const printProjects = projects.map( project => {
            return <div className={"project-item " + project.image} onClick={() => {openProject(project.url)}}>
                        <div className="project-description">
                            { width < 480 ? <span>{project.name}</span> : null}
                        </div>
                        <div className="project-name">{project.name}</div>
                    </div>
        })
    
    const projectPage = (
            <div className="project-container">
                {printProjects}
            </div>
    )
    const contactPage = (
        <>
            <div className="empty-container"></div>
            <div className="page-container">
                    <span>Have a project idea ?</span>
                    <hr/>
                    <span>Let's talk about it</span>
            </div>
            <div className="social-media-container">
                <a href="https://www.facebook.com/Initial47" target="_blank" rel={'noreferrer'}><i className="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/alenvatic47/" target="_blank" rel={'noreferrer'}><i className="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/alen-vatic-a0b61815b/" target="_blank" rel={'noreferrer'}><i className="fab fa-linkedin"></i></a>
                <a href="mailto: alenvatic7@gmail.com"><i className="fas fa-envelope"></i></a>
            </div>
        </>
    )
    let pageId = [['home', homePage], ['skills', skillsPage], ['project', projectPage], ['contact', contactPage]]
    const printPages = (pages) => (
        pages.map( (page, index) => {
             return <div id={page[0]} className={`pages ${width > 480 ? activePage === index ? 'active-page' : null : width < 480 ? 'mobile-page' : null}`}>
                {page[1]}
            </div>
        })
    )
    const containerMain = (
        <div className="main-page">
            {printPages(pageId)}
        </div>
    )
    return containerMain
}

export default Container