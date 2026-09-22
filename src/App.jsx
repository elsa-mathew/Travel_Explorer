import { BrowserRouter, Routes, Route } from "react-router-dom";
import DestinationDetails from "./pages/DestinationDetails";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Favourites from "./pages/Favourites";
import Contact from "./pages/Contact";
function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} />

                <Route
                    path="/destinations"
                    element={<Destinations />}
                />

                <Route
    path="/destinations/:destinationId"
    element={<DestinationDetails />}
/>


<Route
    path="/favourites"
    element={<Favourites />}
/>

<Route 
path="/contact"
element={<Contact />}
/>
            </Routes>

        </BrowserRouter>
    );
}

export default App;