import "./Hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();

    return (
        <section className="hero">

            <div className="hero-overlay"></div>

            <div className="hero-content">

                <p className="hero-label">
                    EXPLORE BEYOND
                </p>

                <h1>
                    Discover Nature.<br />
                    Find Your Escape.<br />
                </h1>

                <p className="hero-description">
                    Discover remarkable places, unforgettable experiences,
                    and journeys worth remembering.
                </p>

                <button
                    className="hero-button"
                    onClick={() => navigate("/destinations")}
                >
                    Explore Now →
                </button>

            </div>

        </section>
    );
}

export default Hero;