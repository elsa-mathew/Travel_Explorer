import "./DestinationHero.css";

function DestinationBanner() {
    return (
        <section className="destination-banner">

            <div className="destination-banner-content">

                <p>DISCOVER MORE</p>

                <h1>
                    Find somewhere
                    <br />
                    extraordinary.
                </h1>

                <span>
                    Explore places worth remembering.
                </span>

                <button>
                    Explore destinations →
                </button>

            </div>

            <div className="destination-banner-image">

                <img
                    src="/images/destinations/bali.png"
                    alt="Tropical destination"
                />

            </div>

        </section>
    );
}

export default DestinationBanner;