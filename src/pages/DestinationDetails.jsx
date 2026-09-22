import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import DestinationDetailsHero from "../components/DestinationDetails/DestinationDetailsHero";
import DestinationOverview
    from "../components/DestinationDetails/DestinationOverview/DestinationOverview";
import DestinationHighlights
    from "../components/DestinationDetails/DestinationHighlights/DestinationHighlights";
import ThingsToDo from "../components/DestinationDetails/ThingsToDo/ThingsToDo";
import TravelInformation from "../components/DestinationDetails/TravelInformation/TravelInformation";
function DestinationDetails() {
    return (
        <>
            <Navbar />

            <DestinationDetailsHero />

            <DestinationOverview />
            <DestinationHighlights />
            <ThingsToDo />
            <TravelInformation />
            <Footer />
        </>
    );
}

export default DestinationDetails;