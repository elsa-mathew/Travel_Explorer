import DestinationPageCard from "./DestinationPageCard";

function DestinationPageGrid({ selectedCategory }) {

    const destinations = [
        {
            id: "bali",
            image: "/images/destinations/bali.png",
            location: "Bali, Indonesia",
            country: "Indonesia",
            description: "Tropical beaches and peaceful escapes.",
            rating: "4.9",
            category: "Beach"
        },
        {
            id: "paris",
            image: "/images/destinations/paris.png",
            location: "Paris, France",
            country: "France",
            description: "Art, culture and unforgettable streets.",
            rating: "4.8",
            category: "Culture"
        },
        {
            id: "norway",
            image: "/images/destinations/norway.png",
            location: "Norway",
            country: "Norway",
            description: "Dramatic landscapes and northern adventures.",
            rating: "4.9",
            category: "Mountains"
        },
        {
            id: "japan",
            image: "/images/destinations/japan.png",
            location: "Kyoto, Japan",
            country: "Japan",
            description: "Ancient temples, quiet streets and timeless culture.",
            rating: "4.8",
            category: "Culture"
        },
        {
            id: "switzerland",
            image: "/images/destinations/switzerland.png",
            location: "Swiss Alps, Switzerland",
            country: "Switzerland",
            description: "Alpine landscapes, peaceful valleys and adventure.",
            rating: "4.9",
            category: "Mountains"
        },
        {
            id: "new-zealand",
            image: "/images/destinations/new-zealand.png",
            location: "Queenstown, New Zealand",
            country: "New Zealand",
            description: "Thrilling adventures surrounded by wild landscapes.",
            rating: "4.9",
            category: "Adventure"
        },
        {
            id: "maldives",
            image: "/images/destinations/maldives.png",
            location: "Maldives",
            country: "Maldives",
            description: "Crystal-clear waters and peaceful island escapes.",
            rating: "4.9",
            category: "Beach"
        },
        {
            id: "costa-rica",
            image: "/images/destinations/costa-rica.png",
            location: "Costa Rica",
            country: "Costa Rica",
            description: "Lush forests, wildlife and incredible natural beauty.",
            rating: "4.8",
            category: "Wildlife"
        },
        {
            id: "kerala",
            image: "/images/destinations/kerala.png",
            location: "Kerala, India",
            country: "India",
            description: "Backwaters, forests and peaceful natural escapes.",
            rating: "4.8",
            category: "Nature"
        },
        {
            id: "bali-wellness",
            image: "/images/destinations/bali-wellness.png",
            location: "Ubud, Bali",
            country: "Indonesia",
            description: "Yoga, greenery and peaceful wellness retreats.",
            rating: "4.7",
            category: "Wellness"
        }
    ];

    const filteredDestinations =
        selectedCategory === "All"
            ? destinations
            : destinations.filter(
                destination =>
                    destination.category === selectedCategory
            );

    return (
        <div className="destination-page-grid">

            {filteredDestinations.map((destination) => (

                <DestinationPageCard
                    key={destination.id}
                    destination={destination}
                />

            ))}

        </div>
    );
}

export default DestinationPageGrid;