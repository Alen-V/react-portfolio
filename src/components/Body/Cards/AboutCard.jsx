const AboutCard = () => {
    const aboutCards = (
        <div className={'cards-container'}>
            <div className={'about-item'}>
            Agile, highly self-motivated, quick self learner with strong sense of product ownership and creative problem
        solving.
            </div>
            <div className={'about-item'}>
            Deeply passionate about software coding/development and building great mobile/web applications.
            </div>                                          
            <div className={'about-item'}>
            Dedicated and efficient full stack developer with 2 years experience. 
            </div>
            <div className={'about-item'}>
            Certified in both F/E and B/E
        technologies, F/E Heavy oriented. Building applications in both Angular2+ and React.
            </div>
        </div>
    )
    const aboutPage = (
        <div className={'about-container'}>
            <div className='description'>
                <span>
                    About
                </span>
            </div>
            <div className={'description-container'}>
                <div className="about-pitch">
                    <span>
                        Hello my name is Alen
                    </span>
                    <div className="timeline">
                        I am a Full Stack Developer located in Macedonia.
                    </div>
                    <div className="timeline">
                        Currently focusing mostly on Front End Development ( JavaScript )
                    </div>
                    <div className="timeline">
                        Been working as a JavaScript Developer for over a year,
                    </div>
                    <div className="timeline">
                        developing and maintaing websites in React and Angular 2+ 
                    </div>
                </div>
                {aboutCards}
            </div>
        </div>
    )

    return aboutPage
}

export default AboutCard