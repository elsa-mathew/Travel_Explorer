import { useState } from "react";
import { FavouriteContext } from "./FavouriteContext";

function FavouriteProvider({ children }) {

    const [favourites, setFavourites] = useState(() => {

        const savedFavourites =
            localStorage.getItem("favourites");

        return savedFavourites
            ? JSON.parse(savedFavourites)
            : [];
    });

    const toggleFavourite = (destination) => {

        setFavourites((currentFavourites) => {

            const alreadyFavourite =
                currentFavourites.some(
                    (item) => item.id === destination.id
                );

            let updatedFavourites;

            if (alreadyFavourite) {

                updatedFavourites =
                    currentFavourites.filter(
                        (item) => item.id !== destination.id
                    );

            } else {

                updatedFavourites = [
                    ...currentFavourites,
                    destination
                ];
            }

            localStorage.setItem(
                "favourites",
                JSON.stringify(updatedFavourites)
            );

            return updatedFavourites;
        });
    };

    const isFavourite = (id) => {

        return favourites.some(
            (item) => item.id === id
        );
    };

    return (
        <FavouriteContext.Provider
            value={{
                favourites,
                toggleFavourite,
                isFavourite
            }}
        >
            {children}
        </FavouriteContext.Provider>
    );
}

export default FavouriteProvider;