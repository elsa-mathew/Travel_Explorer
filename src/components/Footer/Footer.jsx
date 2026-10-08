import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-main">

                <div className="footer-brand">

                    <h2>Travel Explorer</h2>

                    <p>
                        Discover remarkable places, meaningful
                        experiences, and journeys worth remembering.
                    </p>

                </div>


                <div className="footer-column">

                    <h3>Explore</h3>

                    <Link to="/destinations">
                        Destinations
                    </Link>

                    <Link to="/destinations">
                        Categories
                    </Link>

                    <Link to="/favourites">
                        Favourites
                    </Link>

                </div>


                <div className="footer-column">

                    <h3>Company</h3>

                    <Link to="/contact">
                        Contact
                    </Link>

                </div>


                <div className="footer-column">

                    <h3>Follow</h3>

                    <a href="#" target="_blank" rel="noreferrer">
                        Instagram
                    </a>

                    <a href="#" target="_blank" rel="noreferrer">
                        Facebook
                    </a>

                    <a href="#" target="_blank" rel="noreferrer">
                        Pinterest
                    </a>

                </div>

            </div>


            <div className="footer-bottom">

                <p>
                    © 2026 Travel Explorer. All rights reserved.
                </p>

                <p>
                    Made for curious travellers.
                </p>

            </div>

        </footer>
    );
}

export default Footer;