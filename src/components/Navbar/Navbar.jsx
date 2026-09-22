import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">

            <Link
                to="/"
                className="navbar-logo"
            >
                <img
                    src="/images/logo.png"
                    alt="Travel Explorer"
                />

                <div className="navbar-brand-text">

                    <span className="navbar-brand-name">
                        Travel Explorer
                    </span>

                    <span className="navbar-brand-tagline">
                        Explore. Dream. Discover.
                    </span>

                </div>

            </Link>

            <div className="navbar-links">

                <NavLink to="/">
                    Home
                </NavLink>

                <NavLink to="/destinations">
                    Destinations
                </NavLink>

                <NavLink to="/favourites">
                    Favourites
                </NavLink>

                <NavLink to="/contact">
                    Contact
                </NavLink>

            </div>

            <div className="navbar-actions">

                <Link
                    to="/favourites"
                    className="navbar-action"
                    aria-label="Favourites"
                >
                    ♡
                </Link>

            </div>

        </nav>
    );
}

export default Navbar;