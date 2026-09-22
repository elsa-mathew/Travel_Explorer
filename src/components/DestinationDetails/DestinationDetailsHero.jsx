import { useParams } from "react-router-dom";
import { useFavourites } from "../../hooks/useFavourites";
import "./DestinationDetailsHero.css";

function DestinationDetailsHero() {

    const { destinationId } = useParams();

    const { toggleFavourite, isFavourite } = useFavourites();

    const destinations = {
        bali: {
            image: "/images/destinations/bali.png",
            country: "INDONESIA",
            name: "Bali",
            rating: "4.9",
            type: "Island Escape"
        },

        paris: {
            image: "/images/destinations/paris.png",
            country: "FRANCE",
            name: "Paris",
            rating: "4.8",
            type: "Culture & Romance"
        },

        norway: {
            image: "/images/destinations/norway.png",
            country: "NORWAY",
            name: "Norway",
            rating: "4.9",
            type: "Mountain Escape"
        },

        japan: {
            image: "/images/destinations/japan.png",
            country: "JAPAN",
            name: "Kyoto",
            rating: "4.8",
            type: "Culture & Heritage"
        },

        switzerland: {
            image: "/images/destinations/switzerland.png",
            country: "SWITZERLAND",
            name: "Swiss Alps",
            rating: "4.9",
            type: "Mountain Escape"
        },

        "new-zealand": {
            image: "/images/destinations/new-zealand.png",
            country: "NEW ZEALAND",
            name: "Queenstown",
            rating: "4.9",
            type: "Adventure"
        },

        maldives: {
            image: "/images/destinations/maldives.png",
            country: "MALDIVES",
            name: "Maldives",
            rating: "4.9",
            type: "Island Escape"
        },

        "costa-rica": {
            image: "/images/destinations/costa-rica.png",
            country: "COSTA RICA",
            name: "Costa Rica",
            rating: "4.8",
            type: "Wildlife & Nature"
        },

        kerala: {
            image: "/images/destinations/kerala.png",
            country: "INDIA",
            name: "Kerala",
            rating: "4.8",
            type: "Nature Escape"
        },

        "bali-wellness": {
            image: "/images/destinations/bali-wellness.png",
            country: "INDONESIA",
            name: "Ubud",
            rating: "4.7",
            type: "Wellness Retreat"
        }
    };

    const destination = destinations[destinationId];

    if (!destination) {
        return null;
    }

    const favourite = isFavourite(destinationId);

    const favouriteData = {
        id: destinationId,
        image: destination.image,
        location: destination.name,
        country: destination.country,
        description: destination.type,
        rating: destination.rating
    };

    return (
        <section className="destination-details-hero">

            <img
                src={destination.image}
                alt={destination.name}
            />

            <div className="destination-details-overlay"></div>

            <div className="destination-details-content">

                <p>{destination.country}</p>

                <h1>{destination.name}</h1>

                <div className="destination-details-meta">

                    <span>
                        ★ {destination.rating}
                    </span>

                    <span>
                        {destination.type}
                    </span>

                </div>

            </div>

            <button
                className={`details-favourite ${
                    favourite ? "active" : ""
                }`}
                onClick={() =>
                    toggleFavourite(favouriteData)
                }
                aria-label={
                    favourite
                        ? "Remove from favourites"
                        : "Add to favourites"
                }
            >
                {favourite ? "♥" : "♡"}
            </button>

        </section>
    );
}

export default DestinationDetailsHero;