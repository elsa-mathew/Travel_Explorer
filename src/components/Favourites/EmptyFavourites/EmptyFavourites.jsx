import "./EmptyFavourites.css";
import { useNavigate } from "react-router-dom";
function EmptyFavourites() {
    const navigate = useNavigate();
    return (
        <section className="empty-favourites">

            <div className="empty-favourites-icon">
                ♡
            </div>

            <p className="section-label">
                YOUR FAVOURITES
            </p>

            <h2>
                Nothing saved yet.
            </h2>

            <p className="empty-favourites-text">
                Start exploring destinations and save the
                places you'd love to visit.
            </p>

            <button
                className="empty-favourites-button"
                onClick={() => navigate("/destinations")}
            >
                Explore Destinations →
            </button>

        </section>
    );
}

export default EmptyFavourites;