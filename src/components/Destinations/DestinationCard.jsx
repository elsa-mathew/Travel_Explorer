function DestinationCard({ image, location, description, rating }) {
    return (
        <article className="destination-card">

            <img src={image} alt={location} />

            <div className="destination-card-content">
                <span className="destination-rating">
                    ★ {rating}
                </span>

                <p className="destination-location">
                    {location}
                </p>

                <p className="destination-description">
                    {description}
                </p>

                <span className="destination-arrow">
                    Explore →
                </span>
            </div>

        </article>
    );
}

export default DestinationCard;