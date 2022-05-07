import './Header.css'
import { navItems } from '../../assets/Sidebar'

const SidebarRight = ({activePage, changePage, rightSideBarOpen, openRightSideBar}) => {
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
        if ( changePage ) {
            changePage(pageIndex)
        }
    }
    const activeItem = navItems.map(((item, index) => {
        let items = <div key={item+index} className={"active-item " + item}>
                        {activePage === index ? <span>{item}</span> : null}
                    </div>
        return items
    }))
    const navitem = navItems.map(((item, index) => {
        let items = <li key={item+index} onClick={() => changeActivePage(index)}><p>{item}</p></li>
        return items
    }))
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