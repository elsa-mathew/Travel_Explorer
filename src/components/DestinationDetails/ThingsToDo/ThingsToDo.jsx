import "./ThingsToDo.css";

function ThingsToDo() {

    const activities = [
        {
            number: "01",
            title: "Explore Ubud",
            description: "Discover rice terraces, local markets and peaceful surroundings."
        },
        {
            number: "02",
            title: "Visit Ancient Temples",
            description: "Experience Bali's iconic temples and rich cultural heritage."
        },
        {
            number: "03",
            title: "Relax at the Beach",
            description: "Spend a peaceful day by the coast and enjoy the tropical scenery."
        },
        {
            number: "04",
            title: "Try Local Cuisine",
            description: "Taste traditional Balinese dishes and local flavours."
        }
    ];

    return (
        <section className="things-to-do">

            <div className="things-header">
                <div>
                    <p className="section-label">
                        THINGS TO DO
                    </p>

                    <h2>
                        Make the most of
                        <br />
                        your journey.
                    </h2>
                </div>

                <p className="things-intro">
                    From cultural experiences to peaceful
                    escapes, discover experiences worth adding
                    to your trip.
                </p>
            </div>

            <div className="activities-list">

                {activities.map((activity) => (
                    <article
                        className="activity-item"
                        key={activity.number}
                    >
                        <span className="activity-number">
                            {activity.number}
                        </span>

                        <div className="activity-content">
                            <h3>{activity.title}</h3>

                            <p>
                                {activity.description}
                            </p>
                        </div>

                        <span className="activity-arrow">
                            →
                        </span>
                    </article>
                ))}

            </div>

        </section>
    );
}

export default ThingsToDo;