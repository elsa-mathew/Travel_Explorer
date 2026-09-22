import "./ContactInformation.css";

function ContactInformation() {

    const contactDetails = [
        {
            label: "EMAIL",
            value: "hello@travelexplorer.com"
        },
        {
            label: "PHONE",
            value: "+91 98765 43210"
        },
        {
            label: "LOCATION",
            value: "Kochi, Kerala, India"
        },
        {
            label: "WORKING HOURS",
            value: "Mon – Fri · 9:00 AM – 6:00 PM"
        }
    ];

    return (
        <section className="contact-information">

            <div className="contact-info-header">

                <p className="section-label">
                    CONTACT INFORMATION
                </p>

                <h2>
                    We're here to help.
                </h2>

            </div>

            <div className="contact-info-grid">

                {contactDetails.map((item) => (
                    <div
                        className="contact-info-item"
                        key={item.label}
                    >
                        <span>{item.label}</span>

                        <strong>
                            {item.value}
                        </strong>
                    </div>
                ))}

            </div>

        </section>
    );
}

export default ContactInformation;