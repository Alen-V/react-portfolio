import React, { useState } from "react";

const HomeCard = () => {
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
                    Keep IT Simple
                    <div className={'timeline'}>
                        <span>From: 08/2020 - current</span>
                    </div>
                    {/* <div>
                        <span>Front End developer</span>
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
                        <span>From: 10/2019 - 10/2020</span>
                    </div>
                    <div>
                        <div className="timeline courses">Coursework - Html, CSS, JavaScript, C#, MySQL, Angular 2+</div>
                        <a href="https://www.sedc.mk/" target={'_blank'} rel={'noreferrer'}>sedc.mk</a>
                    </div>
                </div>
                <div className="description-item">
                    Web development courses
                    <div className="timeline">
                        <span>From: 07/2017 - 08/2018</span>
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
                    References
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
    return <>
        {shortDescription}
        {workExperience}
        {educationContainer}
        {refferences}
    </>
}

export default HomeCard