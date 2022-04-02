const EducationItem = ({academy, duration, coursework, link}) => {
    return (
        <div className="description-item">
            {academy}
            <div className="timeline">
                <span>From: {duration}</span>
            </div>
            <div>
                <div className="timeline courses">Coursework - {coursework}</div>
                {link !== '' ? <a href={`https://www.${link}/`} target={'_blank'} rel={'noreferrer'}>{link}</a> : ''}
            </div>
        </div>
    )
}

export default EducationItem