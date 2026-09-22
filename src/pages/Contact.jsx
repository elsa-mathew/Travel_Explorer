import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ContactHero
    from "../components/Contact/ContactHero/ContactHero";

import ContactInformation
    from "../components/Contact/ContactInformation/ContactInformation";
import ContactForm
    from "../components/Contact/ContactForm/ContactForm";
function Contact() {
    return (
        <>
            <Navbar />

            <main>

                <ContactHero />

                <ContactInformation />

                <ContactForm />

            </main>

            <Footer />
        </>
    );
}

export default Contact;