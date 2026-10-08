import { useParams } from "react-router-dom";
import destinations from "../../../data/destinations";
import "./ThingsToDo.css";

function ThingsToDo() {

    const { destinationId } = useParams();

    const destination = destinations.find(
        (item) => item.id === destinationId
    );

    if (!destination) {
        return null;
    }

    return (
        <section className="things-to-do">

            <div className="things-header">

                <h2>
                    Things to do in {destination.name}.
                </h2>

                <p className="things-intro">
                    Discover memorable experiences,
                    beautiful places and local moments
                    that make this destination special.
                </p>

            </div>


            <div className="activities-list">

                {destination.thingsToDo.map(
                    (activity, index) => (

                        <article
                            className="activity-item"
                            key={activity.title}
                        >

                            <span className="activity-number">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <div className="activity-content">

                                <h3>
                                    {activity.title}
                                </h3>

                                <p>
                                    {activity.description}
                                </p>

                            </div>

                            <span className="activity-arrow">
                                →
                            </span>

                        </article>

                    )
                )}

            </div>

        </section>
    );
}

export default ThingsToDo;