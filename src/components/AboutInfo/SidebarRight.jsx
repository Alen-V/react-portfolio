import { React, useState } from 'react'
import './Header.css'

const SidebarRight = ({ width, activePage, changePage, rightSideBarOpen, openRightSideBar}) => {
    let navItems = ['home', 'projects', 'about', 'contact']
    const burgerButton = (
        <div className={'burger-container'} onClick={() => openRightSideBar()}>
            <div id="burgerButton">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div> 
        </div>
    )
    const changeActivePage = (pageIndex) => {
        openRightSideBar()
        document.querySelector('.main-page').addEventListener('transitionend', () => {
            changePage(pageIndex)
        })
    }
    const activeItem = navItems.map(((item, index) => {
        let items = <div className={"active-item " + item}>
                        {activePage === index ? <span>{item}</span> : null}
                    </div>
        return items
    }))
    const navitem = navItems.map(((item, index) => {
        let items = <li key={index} onClick={() => changeActivePage(index)}><p>{item}</p></li>
        return items
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
        <div className={`right-sidebar-container ${rightSideBarOpen ? 'open' : 'closed'}`}>
            <div className={'sidebar-header'}>{burgerButton}</div>
            <div className={'sibebar-menu'}>
                {activeItem}
                <ul className={'items-container'}>
                    {navitem}
                </ul>
            </div>
        </div>
    )
    return headerMain
}

export default SidebarRight