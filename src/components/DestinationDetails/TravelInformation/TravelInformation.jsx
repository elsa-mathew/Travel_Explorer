import { useParams } from "react-router-dom";
import destinations from "../../../data/destinations";
import "./TravelInformation.css";

function TravelInformation() {

    const { destinationId } = useParams();

    const destination = destinations.find(
        (item) => item.id === destinationId
    );

    if (!destination) {
        return null;
    }

    const information = destination.travelInformation;

    const items = [
        {
            label: "LANGUAGE",
            value: information.language
        },
        {
            label: "CURRENCY",
            value: information.currency
        },
        {
            label: "TIMEZONE",
            value: information.timezone
        },
        {
            label: "VISA",
            value: information.visa
        },
        {
            label: "TRANSPORT",
            value: information.transport
        },
        {
            label: "CONNECTIVITY",
            value: information.connectivity
        }
    ];

    return (
        <section className="travel-information">

            <div className="travel-info-header">
                <h2>
                    Travel information
                </h2>
            </div>

            <div className="travel-info-grid">

                {items.map((item) => (
                    <div
                        className="travel-info-item"
                        key={item.label}
                    >
                        <span>
                            {item.label}
                        </span>

                        <strong>
                            {item.value}
                        </strong>
                    </div>
                ))}

            </div>

        </section>
    );
}

export default TravelInformation;