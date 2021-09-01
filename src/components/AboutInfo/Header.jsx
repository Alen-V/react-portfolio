import React from 'react'
import './Header.css'

const Header = ({ width, activePage, changePage}) => {
    let navItems = [{href: 'home', faIcon: '-home'}, {href: 'skills', faIcon: '-code-branch'}, {href: 'project', faIcon: '-project-diagram'}, {href: 'contact', faIcon: '-envelope'}]
    const headName = (
        <div className="name-container">
            <span>AV</span>
            <a href="https://github.com/Alen-V" rel="noreferrer" target="_blank">Alen</a>
        </div>
    )
    const changeActivePage = (pageIndex) => {
        changePage(pageIndex)
    }
    const navitem = navItems.map(((item, index) => {
        let anchorEl = <a href={`#${item.href}`} className={`nav-item ${width > 480 ? activePage === index ? 'active-page' : null : width < 480 ? 'mobile-page' : null}`} onClick={() => changeActivePage(index)}>
                           <i className={`fas fa${item.faIcon}`}></i>
                       </a>
        return anchorEl
    }))
    const navInfo = (
        <div className="side-nav-info">
            {navitem}
        </div>
    )
    const logo = (
        <div className="nav-closing-tag">
            <i className="fas fa-chevron-left"></i>
            <i className="fas fa-slash"></i>
            <i className="fas fa-chevron-right"></i>
        </div>
    )
    const headerMain = (
        <div className="header-container">
            {headName}
            {navInfo}
            {logo}
        </div>
    )
    return headerMain
}

export default Header