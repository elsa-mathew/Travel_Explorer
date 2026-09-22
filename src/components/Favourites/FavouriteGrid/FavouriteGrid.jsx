import { useFavourites } from "../../../hooks/useFavourites";
import "./FavouriteGrid.css";

function FavouriteGrid() {

    const {
        favourites,
        toggleFavourite
    } = useFavourites();

    return (
        <section className="favourite-grid-section">

            <div className="favourite-grid-header">

                <div>

                    <p className="section-label">
                        SAVED DESTINATIONS
                    </p>

                    <h2>
                        Your favourite escapes.
                    </h2>

                </div>

                <span>
                    {favourites.length} destinations
                </span>

            </div>


            <div className="favourite-grid">

                {favourites.map((destination) => (

                    <article
                        className="favourite-card"
                        key={destination.id}
                    >

                        <div className="favourite-card-image">

                            <img
                                src={destination.image}
                                alt={destination.location}
                            />

                            <button
                                className="remove-favourite"
                                onClick={() =>
                                    toggleFavourite(destination)
                                }
                            >
                                ♥
                            </button>

                        </div>


                        <div className="favourite-card-content">

                            <div className="favourite-rating">
                                ★ {destination.rating}
                            </div>

                            <h3>
                                {destination.location}
                            </h3>

                            <p>
                                {destination.description}
                            </p>

                            <button className="favourite-explore">
                                Explore →
                            </button>

                        </div>

                    </article>

                ))}

            </div>

        </section>
    );
}

export default FavouriteGrid;