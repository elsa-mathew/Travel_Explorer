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

                    <a href="#">Destinations</a>
                    <a href="#">Categories</a>
                    <a href="#">Favourites</a>

                </div>

                <div className="footer-column">

                    <h3>Company</h3>

                    <a href="#">About</a>
                    <a href="#">Contact</a>

                </div>

                <div className="footer-column">

                    <h3>Follow</h3>

                    <a href="#">Instagram</a>
                    <a href="#">Facebook</a>
                    <a href="#">Pinterest</a>

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