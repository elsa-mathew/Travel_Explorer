import "./Destinations.css";
import DestinationGrid from "./DestinationGrid";
import { Link } from "react-router-dom";
function PopularDestinations() {
    return (
        <section className="popular-destinations">

            <div className="section-header">
                <div>
                    <p className="section-label">
                        PLACES WORTH GETTING LOST IN
                    </p>

                    <h2>Popular destinations</h2>
                </div>

                <Link to="/destinations">
    View all →
</Link>
            </div>

            <DestinationGrid />

        </section>
    );
}

export default PopularDestinations;