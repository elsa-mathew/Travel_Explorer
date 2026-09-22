import "./DestinationHighlights.css";

function DestinationHighlights() {

    const highlights = [
        {
            image: "/images/destinations/bali.png",
            title: "Ubud",
            type: "Culture & Nature"
        },
        {
            image: "/images/destinations/bali.png",
            title: "Tropical Beaches",
            type: "Relaxation"
        },
        {
            image: "/images/destinations/bali.png",
            title: "Ancient Temples",
            type: "Heritage"
        }
    ];

    return (
        <section className="destination-highlights">

            <div className="highlights-header">

                <p className="section-label">
                    HIGHLIGHTS
                </p>

                <h2>
                    Discover the best of Bali.
                </h2>

            </div>

            <div className="highlights-grid">

                {highlights.map((highlight, index) => (

                    <article
                        className="highlight-card"
                        key={index}
                    >

                        <div className="highlight-image">

                            <img
                                src={highlight.image}
                                alt={highlight.title}
                            />

                        </div>

                        <div className="highlight-content">

                            <span>
                                {highlight.type}
                            </span>

                            <h3>
                                {highlight.title}
                            </h3>

                        </div>

                    </article>

                ))}

            </div>

        </section>
    );
}

export default DestinationHighlights;