import "./DiscoveryBar.css";

function DiscoveryBar() {
    return (
        <div className="discovery-bar">

            <div className="discovery-item">
                <span className="discovery-label">Destination</span>
                <span className="discovery-value">Where do you want to go?</span>
            </div>

            <div className="discovery-item">
                <span className="discovery-label">When</span>
                <span className="discovery-value">Choose your dates</span>
            </div>

            <div className="discovery-item">
                <span className="discovery-label">Travel Style</span>
                <span className="discovery-value">What do you enjoy?</span>
            </div>

            <button className="discovery-button">
                Explore →
            </button>

        </div>
    );
}

export default DiscoveryBar;