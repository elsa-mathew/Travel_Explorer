import "./DestinationCategories.css";
import CategoryCard from "./CategoryCard";

function DestinationCategories({
    selectedCategory,
    setSelectedCategory
}) {

    const categories = [
        {
            name: "All",
            image: "/images/destinations/all.png"
        },
        {
            name: "Beach",
            image: "/images/destinations/beach.png"
        },
        {
            name: "Mountains",
            image: "/images/destinations/mountains.png"
        },
        {
            name: "Nature",
            image: "/images/destinations/nature.png"
        },
        {
            name: "Culture",
            image: "/images/destinations/culture.png"
        },
        {
            name: "Adventure",
            image: "/images/destinations/adventure.png"
        }
    ];

    return (
        <section className="destination-categories">

            <div className="categories-header">

                <div>

                    <p className="section-label">
                        EXPLORE BY CATEGORY
                    </p>

                    <h2>
                        Find your kind of journey.
                    </h2>

                </div>

            </div>

            <div className="category-card-grid">

                {categories.map((category, index) => (

                    <CategoryCard
                        key={index}
                        image={category.image}
                        name={category.name}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />

                ))}

            </div>

        </section>
    );
}

export default DestinationCategories;