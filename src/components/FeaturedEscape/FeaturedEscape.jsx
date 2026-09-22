import "./FeaturedEscape.css";

function FeaturedEscape() {
    return (
        <section className="featured-escape">

            <div className="featured-escape-image">
                <img
                    src="/images/destinations/japan.png"
                    alt="Japan landscape"
                />
            </div>

            <div className="featured-escape-content">

                <p className="featured-label">
                    FEATURED ESCAPE
                </p>

                <h2>Japan</h2>

                <p>
                    Your next adventure starts here. Discover dramatic
                    landscapes, peaceful fjords and unforgettable journeys.
                </p>

                <button>
                    Explore →
                </button>

            </div>

        </section>
    );
}

export default FeaturedEscape;