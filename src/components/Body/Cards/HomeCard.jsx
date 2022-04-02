import EducationItem from "./EducationItem";
import ReferenceItem from "./ReferenceItem";

const Education = [
    {
        academy: 'Seavus Education and Development Center',
        duration: 'From: 10/2019 - 10/2020',
        coursework: 'Html, CSS, JavaScript, C#, MySQL, Angular 2+',
        link: 'sedc.mk'
    },
    {
        academy: 'Web development courses',
        duration: 'From: 07/2017 - 08/2018',
        coursework: 'Html, CSS, JavaScript, Git, ReactJS',
        link: ''
    }
]
const Refer = [
    {
        name: 'Dragan Gelevski',
        company: 'WSAudiology',
        linkId: 'dragan-gelevski'
    },
    {
        name: 'Shqipdon Selmani',
        company: 'Slice',
        linkId: 'shqipdonselmani'
    }
]

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
                {Education.map((edItem, index) => (
                    <EducationItem key={edItem.academy+index} academy={edItem.academy} duration={edItem.duration} coursework={edItem.coursework} link={edItem.link} />
                ))}
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
                {Refer.map((referee, index) => (
                    <ReferenceItem key={referee.linkId+index} name={referee.name} company={referee.company} linkId={referee.linkId} />
                ))}
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