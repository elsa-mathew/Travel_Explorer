import "./Destinations.css";
import { useNavigate } from "react-router-dom";

function DestinationCard({ destination }) {

    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/destinations/${destination.id}`);
    };

    return (
        <div
            className="destination-card"
            onClick={handleCardClick}
        >
            <img
                src={destination.image}
                alt={destination.location}
            />

            <div className="destination-card-content">

                <span className="destination-rating">
                    ★ {destination.rating}
                </span>

                <h3 className="destination-location">
                    {destination.location}
                </h3>

                <p className="destination-description">
                    {destination.description}
                </p>

                <span className="destination-arrow">
                    Explore →
                </span>

            </div>
        </div>
    );
}

export default DestinationCard;