import "./TravelMood.css";
import CategoryItem from "./CategoryItem";
import { useNavigate } from "react-router-dom";

function TravelMood() {

    const navigate = useNavigate();

    const categories = [
        { name: "Adventure", icon: "✦" },
        { name: "Beach", icon: "◒" },
        { name: "Mountains", icon: "△" },
        { name: "Nature", icon: "♧" },
        { name: "Culture", icon: "◉" },
        { name: "Wildlife", icon: "♢" },
        { name: "Wellness", icon: "✧" }
    ];

    const handleCategoryClick = (category) => {
        navigate(`/destinations?category=${category}`);
    };

    return (
        <section className="travel-mood">

            <div className="mood-header">
                <p className="section-label">
                    TRAVEL BY MOOD
                </p>

                <h2>
                    Find a journey that feels like you.
                </h2>
            </div>

            <div className="category-rail">

                {categories.map((category) => (
                    <CategoryItem
                        key={category.name}
                        icon={category.icon}
                        name={category.name}
                        onClick={() =>
                            handleCategoryClick(category.name)
                        }
                    />
                ))}

            </div>

        </section>
    );
}

export default TravelMood;