import "./TravelStats.css";

function TravelStats() {

    const stats = [
        {
            value: "100+",
            label: "Destinations"
        },
        {
            value: "50K+",
            label: "Happy Explorers"
        },
        {
            value: "4.9",
            label: "Average Rating"
        },
        {
            value: "24/7",
            label: "Travel Support"
        }
    ];

    return (
        <section className="travel-stats">

            <div className="stats-header">
                <p className="section-label">WHY TRAVEL WITH US</p>

                <h2>
                    More journeys.<br />
                    More memories.
                </h2>
            </div>

            <div className="stats-grid">

                {stats.map((stat, index) => (
                    <div className="stat-item" key={index}>

                        <h3>{stat.value}</h3>

                        <p>{stat.label}</p>

                    </div>
                ))}

            </div>

        </section>
    );
}

export default TravelStats;