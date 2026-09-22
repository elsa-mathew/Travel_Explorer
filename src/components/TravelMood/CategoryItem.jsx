import "./TravelMood.css";

function CategoryItem({ icon, name, onClick }) {

    return (
        <button
            type="button"
            className="category-item"
            onClick={onClick}
        >
            <span className="category-icon">
                {icon}
            </span>

            <span className="category-name">
                {name}
            </span>
        </button>
    );
}

export default CategoryItem;