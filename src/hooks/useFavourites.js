import { useContext } from "react";
import { FavouriteContext } from "../context/FavouriteContext";

export function useFavourites() {
    return useContext(FavouriteContext);
}