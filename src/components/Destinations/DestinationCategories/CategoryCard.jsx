function CategoryCard({
    image,
    name,
    selectedCategory,
    setSelectedCategory
}) {

    return (
        <button
            className={`destination-category-card ${
                selectedCategory === name ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(name)}
        >

            <img
                src={image}
                alt={name}
            />

            <span>{name}</span>

        </button>
    );
}

export default CategoryCard;