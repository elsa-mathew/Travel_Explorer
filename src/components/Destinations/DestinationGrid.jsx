import DestinationCard from "./DestinationCard";

function DestinationGrid() {

    const destinations = [
        {
            id: "bali",
            image: "/images/destinations/bali.png",
            location: "Bali, Indonesia",
            description: "Tropical beaches and peaceful escapes.",
            rating: "4.9"
        },
        {
            id: "paris",
            image: "/images/destinations/paris.png",
            location: "Paris, France",
            description: "Art, culture and unforgettable streets.",
            rating: "4.8"
        },
        {
            id: "norway",
            image: "/images/destinations/norway.png",
            location: "Norway",
            description: "Dramatic landscapes and northern adventures.",
            rating: "4.9"
        },
        {
            id: "japan",
            image: "/images/destinations/japan.png",
            location: "Kyoto, Japan",
            description: "Ancient temples, culture and peaceful landscapes.",
            rating: "4.8"
        }
    ];

    return (
        <div className="destination-grid">

            {destinations.map((destination) => (
                <DestinationCard
                    key={destination.id}
                    destination={destination}
                />
            ))}

        </div>
    );
}

export default DestinationGrid;