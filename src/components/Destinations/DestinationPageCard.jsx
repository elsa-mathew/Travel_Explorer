import { Link } from "react-router-dom";
import { useFavourites } from "../../hooks/useFavourites";

function DestinationPageCard({
    destination
}) {

    const {
        toggleFavourite,
        isFavourite
    } = useFavourites();

    const favourite =
        isFavourite(destination.id);

    return (
        <article className="destination-page-card">

            <div className="destination-page-image">

                <img
                    src={destination.image}
                    alt={destination.location}
                />

                <button
                    className="destination-favourite"
                    onClick={() =>
                        toggleFavourite(destination)
                    }
                    aria-label={
                        favourite
                            ? "Remove from favourites"
                            : "Add to favourites"
                    }
                >
                    {favourite ? "♥" : "♡"}
                </button>

            </div>

            <div className="destination-page-content">

                <div className="destination-page-rating">
                    ★ {destination.rating}
                </div>

                <h3>
                    {destination.location}
                </h3>

                <p className="destination-page-country">
                    {destination.country}
                </p>

                <p className="destination-page-description">
                    {destination.description}
                </p>

                <Link
                    to={`/destinations/${destination.id}`}
                    className="destination-explore"
                >
                    Explore →
                </Link>

            </div>

        </article>
    );
}

export default DestinationPageCard;