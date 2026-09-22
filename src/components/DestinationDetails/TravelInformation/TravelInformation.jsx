import "./TravelInformation.css";

function TravelInformation() {

    const information = [
        {
            label: "BEST TIME",
            value: "April – October"
        },
        {
            label: "CURRENCY",
            value: "Indonesian Rupiah (IDR)"
        },
        {
            label: "LANGUAGE",
            value: "Indonesian · Balinese"
        },
        {
            label: "TIMEZONE",
            value: "GMT +8"
        },
        {
            label: "IDEAL DURATION",
            value: "5 – 7 Days"
        },
        {
            label: "TRAVEL STYLE",
            value: "Beach · Culture · Nature"
        }
    ];

    return (
        <section className="travel-information">

            <div className="travel-info-header">
                <p className="section-label">
                    TRAVEL INFORMATION
                </p>

                <h2>
                    Everything you need
                    <br />
                    before you go.
                </h2>
            </div>

            <div className="travel-info-grid">

                {information.map((item) => (
                    <div
                        className="travel-info-item"
                        key={item.label}
                    >
                        <span>{item.label}</span>
                        <strong>{item.value}</strong>
                    </div>
                ))}

            </div>

        </section>
    );
}

export default TravelInformation;