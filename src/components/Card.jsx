import './Card.css'

function Card(prop) {
    return (
        <div className="card">
            <div className="card__img">
                <img src={prop.imageUrl}/>
            </div>
            <div className="card__description">
                <div className="location">
                    <div className="links">
                        <p>📌 {prop.location}</p>
                        <a href={prop.googleMapsUrl}>View on google maps</a>
                    </div>
                    <div className="place">
                        <h2>{prop.title}</h2>
                    </div>
                </div>
                <p className='date'><b>{prop.startDate} - {prop.endDate}</b></p>
                <p className='info'>{prop.description}</p>
            </div>
        </div>
    )
}

export default Card