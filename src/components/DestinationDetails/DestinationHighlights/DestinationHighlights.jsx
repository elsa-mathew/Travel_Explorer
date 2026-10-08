import { useParams } from "react-router-dom";
import destinations from "../../../data/destinations";
import "./DestinationHighlights.css";

function DestinationHighlights() {

    const { destinationId } = useParams();

    const destination = destinations.find(
        (item) => item.id === destinationId
    );

    if (!destination) {
        return null;
    }

    return (
        <section className="destination-highlights">

            <div className="highlights-header">

                <p className="section-label">
                    HIGHLIGHTS
                </p>

                <h2>
                    Discover the best of {destination.name}.
                </h2>

            </div>


            <div className="highlights-grid">

                {destination.highlights.map((highlight) => (

                    <article
                        className="highlight-card"
                        key={highlight.title}
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