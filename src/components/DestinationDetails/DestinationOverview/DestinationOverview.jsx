import { useParams } from "react-router-dom";
import destinations from "../../../data/destinations";
import "./DestinationOverview.css";

function DestinationOverview() {

    const { destinationId } = useParams();

    const destination = destinations.find(
        (item) => item.id === destinationId
    );

    if (!destination) {
        return null;
    }

    return (
        <section className="destination-overview">

            <div className="overview-description">

                <p className="section-label">
                    ABOUT THE DESTINATION
                </p>

                <h2>
                    {destination.overviewTitle}
                </h2>

                <p>
                    {destination.overviewDescription}
                </p>

            </div>


            <div className="overview-details">

                <div className="overview-detail">

                    <span>BEST TIME</span>

                    <strong>
                        {destination.bestTime}
                    </strong>

                </div>


                <div className="overview-detail">

                    <span>IDEAL DURATION</span>

                    <strong>
                        {destination.idealDuration}
                    </strong>

                </div>


                <div className="overview-detail">

                    <span>TRAVEL STYLE</span>

                    <strong>
                        {destination.travelStyle}
                    </strong>

                </div>

            </div>

        </section>
    );
}

export default DestinationOverview;