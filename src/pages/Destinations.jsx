import Navbar from "../components/Navbar/Navbar";

import DestinationHero
    from "../components/Destinations/DestinationHero/DestinationHero";

import DestinationCategories
    from "../components/Destinations/DestinationCategories/DestinationCategories";

import DestinationPageGrid
    from "../components/Destinations/DestinationPageGrid";

import Footer from "../components/Footer/Footer";

import { useSearchParams } from "react-router-dom";

function Destinations() {

    const [searchParams, setSearchParams] = useSearchParams();

    const selectedCategory =
        searchParams.get("category") || "All";

    const handleCategoryChange = (category) => {

        if (category === "All") {
            setSearchParams({});
        } else {
            setSearchParams({
                category: category
            });
        }
    };

    return (
        <>
            <Navbar />

            <DestinationHero />

            <DestinationCategories
                selectedCategory={selectedCategory}
                setSelectedCategory={handleCategoryChange}
            />

            <DestinationPageGrid
                selectedCategory={selectedCategory}
            />

            <Footer />
        </>
    );
}

export default Destinations;