import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">

            {/* Logo */}
            <Link
                to="/"
                className="navbar-logo"
                onClick={closeMenu}
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


            {/* Desktop Navigation */}
            <div className="navbar-links">

                <NavLink to="/" end>
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


            {/* Actions */}
            <div className="navbar-actions">

                <Link
                    to="/favourites"
                    className="navbar-action"
                    aria-label="Favourites"
                >
                    ♡
                </Link>


                {/* Mobile Menu Button */}
                <button
                    className="navbar-menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>

            </div>


            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="mobile-menu">

                    <NavLink
                        to="/"
                        end
                        onClick={closeMenu}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/destinations"
                        onClick={closeMenu}
                    >
                        Destinations
                    </NavLink>

                    <NavLink
                        to="/favourites"
                        onClick={closeMenu}
                    >
                        Favourites
                    </NavLink>

                    <NavLink
                        to="/contact"
                        onClick={closeMenu}
                    >
                        Contact
                    </NavLink>

                </div>
            )}

        </nav>
    );
}

export default Navbar;