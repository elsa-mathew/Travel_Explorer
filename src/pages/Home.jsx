import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import DiscoveryBar from "../components/Discovery/DiscoveryBar";

import PopularDestinations from "../components/Destinations/PopularDestinations";
import TravelMood from "../components/TravelMood/TravelMood";
import FeaturedEscape from "../components/FeaturedEscape/FeaturedEscape";
import TravelStats from "../components/TravelStats/TravelStats";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
function Home(){
    return (
        <div>
            <Navbar />
            <Hero />
            <DiscoveryBar />
            
            <PopularDestinations />
            <TravelMood />
            <FeaturedEscape />
            <TravelStats />
            <Newsletter />
            <Footer />
        </div>
    );
}

export default Home;