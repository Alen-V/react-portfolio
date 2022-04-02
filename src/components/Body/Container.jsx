import React, { useState } from 'react'
import './Container.css'
import ContactCard from './Cards/ContactCard'
import AboutCard from './Cards/AboutCard'
import ProjectCard from './Cards/ProjectCard'
import HomeCard from './Cards/HomeCard'

const Container = ({activePage, rightSideBarOpen, handleFormSubmit, changePage}) => {
    const Cards = [{
            page: 'home',
            component: <HomeCard />
        },{
            page: 'projects',
            component: <ProjectCard changePage={changePage}  />
        },{
            page: 'about',
            component: <AboutCard />
        },{
            page: 'contact',
            component: <ContactCard handleFormSubmit={handleFormSubmit} />
        }
    ]
    return Cards.map((card, index) => (
        <div className={`main-page ${rightSideBarOpen ? 'open' : 'closed'}`}>
            <div className={'page-container'}>
                <div id={card.page} className={`page ${activePage === index ? 'active' : 'inactive'}`}>
                    <div className="mobile-header"></div>
                    {card.component}
                </div>
            </div>
        </div>
    ))
}

export default Container