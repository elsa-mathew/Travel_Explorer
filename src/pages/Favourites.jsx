import { useFavourites } from "../hooks/useFavourites";

import Navbar from "../components/Navbar/Navbar";

import FavouriteHero
    from "../components/Favourites/FavouriteHero/FavouriteHero";

import FavouriteGrid
    from "../components/Favourites/FavouriteGrid/FavouriteGrid";

import EmptyFavourites
    from "../components/Favourites/EmptyFavourites/EmptyFavourites";

import Footer from "../components/Footer/Footer";


function Favourites() {

    const { favourites } = useFavourites();

    return (
        <>
            <Navbar />

            <main>

                <FavouriteHero />

                {favourites.length > 0 ? (
                    <FavouriteGrid />
                ) : (
                    <EmptyFavourites />
                )}

            </main>

            <Footer />
        </>
    );
}

export default Favourites;