const ReferenceItem = ({ name, company, linkId }) => {
    return (
        <div className="description-item">
            {name} from {company}
            <div className="timeline">
                <div>
                    <span>
                        LinkedIn:
                        <a href={`https://www.linkedin.com/in/${linkId}`} target="_blank" rel="noreferrer"> linkedin.com/in/{linkId}</a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ReferenceItem