import './Header.css'
import { moreInformation, contactInfoItems } from '../../assets/Sidebar'

const SidebarLeft = ({changePage, openLeftSideBar, leftSideBarOpen}) => {
    const changePg = (page) => {
        if ( changePage ) {
            changePage(page)
        }
    }
    const profileInfoHeader = (
        <div className={'profile-info-header'}>
            <div className="open-sidebar" onClick={() => openLeftSideBar()}>
                {<i className="fas fa-ellipsis-v"></i>}
            </div>
            <div className={'initials-container'}><span>AV</span></div>
            <div className={'name-container'} onClick={() => changePg(3)}>
                <span>Alen Vatic</span>
            </div>
            <div className={'job-description'}>
                <span>Full Stack Developer</span>
            </div>
        </div>
    )
    const profileMoreInformation = moreInformation.map(((info, index) => {
        const information = <div key={index} className={'more-info-item'}>
                                <span className={'left-side-item'}>{info[0]}</span>
                                <span className={'right-side-item'}>{info[1]}</span>
                            </div>
                            
        return information
    }))

    const footerInfo = contactInfoItems.map(((item, index) => {
        const anchorEl = <a key={index} href={item[0]} target={index !== 3 ? '_blank' : ''} rel={'noreferrer'}><i className={index !== 3 ? `fab fa-${item[1]}` : item[1]}></i></a>
        return anchorEl
    }))
    
    const headerMain = (
        <div className={`left-sidebar-container ${leftSideBarOpen ? 'open' : 'closed'}`}>
            <div className={'profile-information'}>
                {profileInfoHeader}
                <div className={'profile-info-body'}>
                    <div className={'more-information'}>
                        {profileMoreInformation}
                    </div>
                    {/* <div className={'download-cv-container docx'}>
                        <a href={process.env.PUBLIC_URL+"/cv/ResumeAlenF.docx"} download>download cv (docx)</a>
                    </div>
                    <div className={'download-cv-container'}>
                        <a href={process.env.PUBLIC_URL+"/cv/ResumeAlenP.pdf"} download>download cv (pdf)</a>
                    </div> */}
                </div>
                <div className={'profile-footer'}>
                    {footerInfo}
                </div>
            </div>
        </div>
    )
    return headerMain
}

export default SidebarLeft