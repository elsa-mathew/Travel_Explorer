import "./DestinationOverview.css";

function DestinationOverview() {
    return (
        <section className="destination-overview">

            <div className="overview-description">

                <p className="section-label">
                    ABOUT THE DESTINATION
                </p>

                <h2>
                    A tropical escape
                    worth remembering.
                </h2>

                <p>
                    Bali is a beautiful island known for its
                    tropical beaches, peaceful temples, lush
                    landscapes and rich local culture. From
                    relaxing coastal escapes to adventurous
                    experiences, there is something for every
                    kind of traveller.
                </p>

            </div>

            <div className="overview-details">

                <div className="overview-detail">

                    <span>BEST TIME</span>

                    <strong>
                        April – October
                    </strong>

                </div>

                <div className="overview-detail">

                    <span>IDEAL DURATION</span>

                    <strong>
                        5 – 7 Days
                    </strong>

                </div>

                <div className="overview-detail">

                    <span>TRAVEL STYLE</span>

                    <strong>
                        Beach · Culture · Nature
                    </strong>

                </div>

            </div>

        </section>
    );
}

export default DestinationOverview;